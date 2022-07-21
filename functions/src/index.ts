/* eslint-disable import/no-unresolved */
import "dotenv/config";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import {
  dateToString,
  difference,
  getDocId,
  separateDate,
  stringToDate,
} from "./date";
import { deleteFromDb, getFromDb, setToDb } from "./db";
import { sendMemeEmail } from "./email";
import { SubmitMemeCloudFunction } from "./types";

initializeApp();
const db = getFirestore();

export const submitMeme = functions
  .region("europe-west2")
  .https.onCall(
    async (
      data: SubmitMemeCloudFunction["request"],
    ): Promise<SubmitMemeCloudFunction> => {
      const date = stringToDate(data.date);
      if (date === undefined) {
        throw new functions.https.HttpsError(
          "invalid-argument",
          `Could not convert ${date} to date`,
        );
      }
      const diffInDays = difference(date, Timestamp.now().toDate());
      if (!(-3 < diffInDays && diffInDays <= 8)) {
        throw new functions.https.HttpsError(
          "out-of-range",
          `Expected difference between requested date and today to be between -3 and 8; received ${diffInDays.toFixed(
            2,
          )}`,
        );
      }
      const domain = data.meme.email.split("@")[1];
      if (domain !== "spgs.org") {
        throw new functions.https.HttpsError(
          "invalid-argument",
          `Expected domain of email to be spgs.org; received ${domain}`,
        );
      }
      try {
        const [response] = await sendMemeEmail(
          db,
          dateToString(date),
          data.meme,
        );
        return {
          status: 200,
          message: `Sent email to ${data.meme.email}`,
          request: data,
          response,
        };
      } catch (err) {
        console.error(err);
        throw new functions.https.HttpsError(
          "aborted",
          "Error writing to DB or sending email",
        );
      }
    },
  );

const areNumberKeysTheSame = <T extends Record<number, unknown>>(
  oldData: T,
  newData: T,
) => {
  const oldKeys = new Set(Object.keys(oldData).map(x => parseInt(x)));
  const newKeys = new Set(Object.keys(newData).map(x => parseInt(x)));
  return (
    oldKeys.size === newKeys.size &&
    Array.from(newKeys).every(key => oldKeys.has(key))
  );
};

export const confirmMeme = functions
  .region("europe-west2")
  .https.onRequest(async (req, res) => {
    const [submissionId, code] = req.params[0].split("/");
    if (!submissionId || !code) {
      res.status(400).send({
        status: 400,
        message: "Expected URL to be of form /confirmMeme/:id/:code",
      });
      return;
    }
    const submission = await getFromDb(db, "submissions", submissionId);
    if (submission === undefined) {
      res.status(404).send({
        status: 404,
        message: `Submission ${submissionId} does not exist`,
      });
      return;
    }
    const d = stringToDate(submission.date);
    if (d === undefined) {
      res.status(400).send({
        status: 400,
        message: `Could not convert ${submission.date} to date`,
      });
      return;
    }
    const [date, month, year] = separateDate(d);
    let author = submission.meme.email.split("@")[0];
    if (author === "emma.goodliffe") {
      author += " 🏴‍☠️";
    }
    if (parseInt(code) !== submission.code) {
      res.status(400).send({
        status: 400,
        message: "Incorrect code",
      });
      return;
    }
    const memeId = getDocId(year, month);
    const oldData = (await getFromDb(db, "memes", memeId)) ?? {};
    const data = {
      [date]: {
        url: submission.meme.url,
        author,
        found: submission.meme.found,
      },
      ...oldData,
    };
    const deletionPromise = deleteFromDb(db, "submissions", submissionId);
    if (areNumberKeysTheSame(oldData, data)) {
      await deletionPromise;
      res.status(409).send({
        status: 409,
        message: `There was already a meme scheduled for ${submission.date}`,
      });
    }
    await Promise.all([deletionPromise, setToDb(db, "memes", memeId, data)]);
    res.send({
      status: 200,
      message: `Confirmed meme by ${author}`,
    });
    return;
  });

// TODO: Delete old submissions
