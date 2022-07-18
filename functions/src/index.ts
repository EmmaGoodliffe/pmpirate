/* eslint-disable import/no-unresolved */
import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { dateToString, stringToDate } from "./date";

initializeApp();
const db = getFirestore();

const difference = (aSec: number, bSec: number) => {
  const diffInSeconds = aSec - bSec;
  const diffInHours = diffInSeconds / 60 ** 2;
  const diffInDays = diffInHours / 24;
  return diffInDays;
};

export const submitMeme = functions
  .region("europe-west2")
  .https.onCall(async (data, context) => {
    const todayInSeconds = Timestamp.now().seconds;
    if (typeof data.date === "string") {
      const date = stringToDate(data.date);
      if (date !== undefined) {
        const dateInSeconds = date.getTime() / 10 ** 3;
        const diffInDays = difference(dateInSeconds, todayInSeconds);
        if (-3 < diffInDays && diffInDays <= 8) {
          await db.collection("submissions").add(data);
          return {
            status: 200,
            request: {
              date: dateToString(date),
              meme: data.meme,
            },
          };
        }
        throw new functions.https.HttpsError(
          "out-of-range",
          `Expected difference between requested date and today to be between -3 and 8; received ${diffInDays.toFixed(
            2,
          )}`,
        );
      }
      throw new functions.https.HttpsError(
        "invalid-argument",
        `Could not convert ${data.date} to date`,
      );
    }
    throw new functions.https.HttpsError(
      "invalid-argument",
      `Expected date to be a string; received ${data.date}`,
    );
  });
