/* eslint-disable import/no-unresolved */
import sgMail from "@sendgrid/mail";
import "dotenv/config";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { dateToString, stringToDate } from "./date";
import type { MemeRequest } from "./types";

initializeApp();
const db = getFirestore();
const sgKey = process.env.SENDGRID_API_KEY;
if (sgKey) {
  sgMail.setApiKey(sgKey);
} else {
  throw new Error("No SG API key");
}

const difference = (a: Date, b: Date) => {
  const diffInMilliseconds = Number(a) - Number(b);
  const diffInSeconds = diffInMilliseconds / 10 ** 3;
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

const randomDigits = (max: number) =>
  Math.floor(parseFloat(Math.random().toFixed(max)) * 10 ** max);

const getRandomSignature = () => {
  const signatures = [
    "piratically",
    // "buccaneerishly",
    "criminally",
    "illegally",
    "lawlessly",
    "tyrannically",
    "insincerely",
    "unfaithfully",
    "untruthfully",
  ];
  return signatures[Math.floor(Math.random() * signatures.length)];
};

const sendMemeEmail = async (date: string, meme: MemeRequest) => {
  // const author = meme.email.split("@spgs.org")[0]; // TODO: Badges
  const code = randomDigits(12);
  const { id } = await db.collection("submissions").add({
    date,
    meme,
    code,
    dateSubmitted: dateToString(Timestamp.now().toDate()),
  });
  const url = `https://europe-west2-<pmpirate>.cloudfunctions.net/confirmMeme/${id}/${code}`;
  const text = `Hi,
  
Confirm your ${meme.url} meme in the schedule: ${url}

Yours ${getRandomSignature()},
PMP 🏴‍☠️`;
  return sendEmail(meme.email, "PMP meme", text);
};

export const submitMeme = functions
  .region("europe-west2")
  .https.onCall(async (data: { date: string; meme: MemeRequest }, context) => {
    const date = stringToDate(data.date);
    if (date === undefined) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `Could not convert ${data.date} to date`,
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
      const responses = await sendMemeEmail(dateToString(date), data.meme);
      return {
        status: 200,
        message: `Sent email to ${data.meme.email}`,
        request: data,
        responses,
      };
    } catch (err) {
      console.error(err);
      throw new functions.https.HttpsError(
        "aborted",
        "Error writing to DB or sending email",
      );
    }
  });

// TODO: Receive confirmations URLs
// https://europe-west2-<pmpirate>.cloudfunctions.net/widgets/<id>
// const app = express();
// app.use(cors({ origin: true }));
// app.get("/:id", (req, res) => res.send({ message: "whatever" }));
// exports.widgets = functions.https.onRequest(app);
