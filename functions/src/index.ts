/* eslint-disable import/no-unresolved */
import "dotenv/config";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { dateToString, getDocId, separateDate, stringToDate } from "./date";
import { deleteFromDb, getFromDb, setToDb } from "./db";
import { sendMemeEmail } from "./email";
import { SubmitMemeCloudFunction } from "./types";

initializeApp();
const db = getFirestore();

const difference = (a: Date, b: Date) => {
  const diffInMilliseconds = Number(a) - Number(b);
  const diffInSeconds = diffInMilliseconds / 10 ** 3;
  const diffInHours = diffInSeconds / 60 ** 2;
  const diffInDays = diffInHours / 24;
  return diffInDays;
};

export const submitMeme = functions
  .region("europe-west2")
  .https.onCall(
    async (
      data: SubmitMemeCloudFunction["request"],
      context,
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
      res.status(400).send({
        status: 400,
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
    const author = submission.meme.email.split("@spgs.org")[0]; // TODO: Badges
    if (parseInt(code) !== submission.code) {
      res.status(400).send({
        status: 400,
        message: "Incorrect code",
      });
      return;
    }
    const memeId = getDocId(year, month);
    const oldData = await getFromDb(db, "memes", memeId);
    const data = {
      [date]: {
        url: submission.meme.url,
        author,
        found: submission.meme.found,
      },
      ...oldData,
    };
    await Promise.all([
      setToDb(db, "memes", memeId, data),
      deleteFromDb(db, "submissions", submissionId),
    ]);
    res.send({
      status: 200,
      message: `Confirmed meme by ${author}`,
    });
  });

// TODO: Delete old submissions
