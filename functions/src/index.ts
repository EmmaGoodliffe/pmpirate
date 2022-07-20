/* eslint-disable import/no-unresolved */
import "dotenv/config";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { dateToString, stringToDate } from "./date";
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

// TODO: Receive confirmations URLs
// https://europe-west2-<pmpirate>.cloudfunctions.net/widgets/<id>
// const app = express();
// app.use(cors({ origin: true }));
// app.get("/:id", (req, res) => res.send({ message: "whatever" }));
// exports.widgets = functions.https.onRequest(app);

/*
const setsAreEqual = <T>(setA: Set<T>, setB: Set<T>) =>
  [...setA].length === [...setB].length &&
  [...setA].length === [...new Set([...setA, ...setB])].length;


const data = { [date]: meme, ...oldData };
if (setsAreEqual(new Set(Object.keys(oldData)), new Set(Object.keys(data)))) {
  console.log("Cancelled a redundant write");
  return;
}
*/
