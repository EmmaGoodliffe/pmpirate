import type { ClientResponse as SgResponse } from "@sendgrid/mail";
import type { Firestore as AdminFirestore } from "firebase-admin/firestore";
import type { Firestore } from "firebase/firestore";

export type Db = Firestore;
export type AdminDb = AdminFirestore;

interface MemeBasics {
  url: string;
  found: boolean;
}

export interface Meme extends MemeBasics {
  author: string;
}

export type MemesOfMonth = Record<number | string, Meme>;

export interface MemeRequest extends MemeBasics {
  email: string;
  file: ArrayBuffer;
}

// Doesn't use interface for overloads of addToDb in functions/src/db.ts
export type MemeSubmission = {
  date: string;
  meme: MemeRequest;
  code: number;
  dateSubmitted: string;
};

interface CloudFunction<Req, Res> {
  status: number;
  message: string;
  request: Req;
  response: Res;
}

export type SubmitMemeCloudFunction = CloudFunction<
  { date: string; meme: MemeRequest },
  SgResponse
>;
