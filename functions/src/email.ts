/* eslint-disable import/no-unresolved */
import sgMail from "@sendgrid/mail";
import { Timestamp } from "firebase-admin/firestore";
import { dateToString } from "./date";
import { AdminDb, MemeRequest, MemeSubmission } from "./types";

const sgKey = process.env.SENDGRID_API_KEY;
if (sgKey) {
  sgMail.setApiKey(sgKey);
} else {
  throw new Error("No SG API key");
}

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

async function addToDb(
  db: AdminDb,
  collection: "submissions",
  data: MemeSubmission,
): Promise<string>;
async function addToDb(db: AdminDb, collection: string, data: Record<string, unknown>) {
  const { id } = await db.collection(collection).add(data);
  return id;
}

export const sendMemeEmail = async (
  db: AdminDb,
  date: string,
  meme: MemeRequest,
) => {
  // const author = meme.email.split("@spgs.org")[0]; // TODO: Badges
  const code = randomDigits(12);
  const id = await addToDb(db, "submissions", {
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
