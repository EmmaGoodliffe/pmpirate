import type { ClientResponse as SgResponse } from "@sendgrid/mail";
import type { Firestore as AdminFirestore } from "firebase-admin/firestore";
import type { Firestore } from "firebase/firestore";

export type Db = Firestore;
export type AdminDb = AdminFirestore;

interface MemeBasics {
  found: boolean;
}

export interface Meme extends MemeBasics {
  url: string;
  author: string;
}

// DB: memes/{yyyy-mm}
export type MemesOfMonth = Record<number | string, Meme>;

// Doesn't use interface for overloads of addToDb in functions/src/db.ts
// DB: submissions/{id}
export type MemeSubmission = {
  date: string;
  meme: Meme;
  code: number;
  dateSubmitted: string;
};

interface CloudFunction<Req, Res> {
  status: number;
  message: string;
  request: Req;
  response: Res;
}

// CF: submitMeme
export type SubmitMemeCloudFunction = CloudFunction<
  {
    date: string;
    meme: MemeBasics & {
      email: string;
      name: string;
      fileBase64: string;
    };
  },
  SgResponse
>;
