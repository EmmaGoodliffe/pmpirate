/* eslint-disable import/no-unresolved */
import "dotenv/config";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import * as functions from "firebase-functions";
import {
  dateToString,
  difference,
  getDocId,
  separateDate,
  stringToDate,
} from "./date";
import { addToDb, deleteFromDb, getFromDb, setToDb } from "./db";
import { sendMemeConfirmationEmail } from "./email";
import { pipeResizedImage } from "./image";
import { SubmitMemeCloudFunction } from "./types";

initializeApp();
const db = getFirestore();
const storage = getStorage();
const bucket = storage.bucket();

const randomDigits = (max: number) =>
  Math.floor(parseFloat(Math.random().toFixed(max)) * 10 ** max);

export const submitMeme = functions
  .region("europe-west2")
  .https.onCall(
    async (
      data: SubmitMemeCloudFunction["request"],
    ): Promise<SubmitMemeCloudFunction> => {
      // Parse request data
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
      const [, domain] = data.meme.email.split("@");
      if (domain !== "spgs.org") {
        throw new functions.https.HttpsError(
          "invalid-argument",
          `Expected domain of email to be spgs.org; received ${domain}`,
        );
      }
      // Add meme to storage
      const file = bucket.file(`memes/${data.meme.name}.jpg`);
      const buffer = Buffer.from(data.meme.fileBase64, "base64");
      // await file.save(buffer);
      await pipeResizedImage(buffer, 400, 400, file.createWriteStream());
      // Add submission to DB
      let [author] = data.meme.email.split("@");
      if (author === "emma.goodliffe") {
        author += " 🏴‍☠️";
      }
      const code = randomDigits(12);
      const id = await addToDb(db, "submissions", {
        date: dateToString(date),
        meme: {
          // path: data.meme.path,
          url: file.publicUrl(),
          found: data.meme.found,
          author,
        },
        code,
        dateSubmitted: dateToString(Timestamp.now().toDate()),
      });
      // Email author the confirmation URL
      try {
        const [response] = await sendMemeConfirmationEmail(
          data.meme.email,
          data.meme.name,
          id,
          code,
        );
        return {
          status: 200,
          message: `Sent email to ${data.meme.email}`,
          request: data,
          response,
        };
      } catch (err) {
        console.error(err);
        throw new functions.https.HttpsError("aborted", "Error sending email");
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
    // Parse request data
    const [, submissionId, code] = req.params[0].split("/");
    if (!submissionId || !code) {
      res.status(400).send({
        status: 400,
        message: "Expected URL to be of form /confirmMeme/:id/:code",
      });
      return;
    }
    // Get submission from DB
    const submission = await getFromDb(db, "submissions", submissionId);
    if (submission === undefined) {
      res.status(404).send({
        status: 404,
        message: `Submission ${submissionId} does not exist`,
      });
      return;
    }
    // Parse submission
    const d = stringToDate(submission.date);
    if (d === undefined) {
      res.status(400).send({
        status: 400,
        message: `Could not convert ${submission.date} to date`,
      });
      return;
    }
    // Verify code
    const [date, month, year] = separateDate(d);
    if (parseInt(code) !== submission.code) {
      res.status(400).send({
        status: 400,
        message: "Incorrect code",
      });
      return;
    }
    // Generate new meme data
    const memeId = getDocId(year, month);
    const oldData = (await getFromDb(db, "memes", memeId)) ?? {};
    const data = {
      [date]: submission.meme,
      ...oldData,
    };
    // Delete the submission
    const deletionPromise = deleteFromDb(db, "submissions", submissionId);
    // Verify there is not a scheduling conflict
    if (areNumberKeysTheSame(oldData, data)) {
      await deletionPromise;
      res.status(409).send({
        status: 409,
        message: `There was already a meme scheduled for ${submission.date}`,
      });
    }
    // Set meme data to DB
    await Promise.all([deletionPromise, setToDb(db, "memes", memeId, data)]);
    res.send({
      status: 200,
      message: `Confirmed meme by ${submission.meme.author}`,
    });
    return;
  });

// TODO: Delete old submissions
