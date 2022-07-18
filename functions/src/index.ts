/* eslint-disable import/no-unresolved */
import sgMail from "@sendgrid/mail";
import "dotenv/config";
import { initializeApp } from "firebase-admin/app";
import { Timestamp } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { dateToString, stringToDate } from "./date";
import type { MemeRequest } from "./types";

initializeApp();
// const db = getFirestore();
const sgKey = process.env.SENDGRID_API_KEY;
if (sgKey) {
  sgMail.setApiKey(sgKey);
} else {
  throw new Error("No SG API key");
}

const difference = (aSec: number, bSec: number) => {
  const diffInSeconds = aSec - bSec;
  const diffInHours = diffInSeconds / 60 ** 2;
  const diffInDays = diffInHours / 24;
  return diffInDays;
};

const sendEmail = (email: string, subject: string, text: string) => {
  return sgMail.send({
    to: email,
    from: "emma.goodliffe@spgs.org",
    subject,
    text,
    html: text,
  });
};

const getConfirmationUrl = (meme: MemeRequest) => {
  // TODO: Generate proper URL
  return `(URL for ${meme.email})`;
};

const sendMemeConfirmation = (meme: MemeRequest) => {
  const url = getConfirmationUrl(meme);
  const author = meme.email.split("@spgs.org")[0];
  const text = `Confirm your sick meme: ${url} by ${author}`;
  return sendEmail(meme.email, "PMP meme", text);
};

export const submitMeme = functions
  .region("europe-west2")
  .https.onCall(async (data: { date: string; meme: MemeRequest }, context) => {
    const todayInSeconds = Timestamp.now().seconds;
    if (typeof data.date === "string") {
      const date = stringToDate(data.date);
      if (date !== undefined) {
        const dateInSeconds = date.getTime() / 10 ** 3;
        const diffInDays = difference(dateInSeconds, todayInSeconds);
        if (-3 < diffInDays && diffInDays <= 8) {
          try {
            const response = await sendMemeConfirmation(data.meme);
            return {
              status: 200,
              message: `Sent email to ${data.meme.email}`,
              request: data,
              response,
            };
          } catch (err) {
            console.error("SG error:", err);
            throw new functions.https.HttpsError(
              "aborted",
              "Error sending email",
            );
          }
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
