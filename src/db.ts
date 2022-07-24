import { doc, getDoc } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import {
  compoundDate,
  dateToString,
  getDocId,
  getToday,
  separateDate,
} from "../functions/src/date";
import type {
  Db,
  Meme,
  MemesOfMonth,
  SubmitMemeCloudFunction,
} from "../functions/src/types";
import { functions } from "./common";

const cache: Record<number, Record<number, MemesOfMonth>> = {};
const queue = new Set<string>();

export const firstMonth = compoundDate(1, 9, 2021);
export const firstMemeDate = compoundDate(12, 10, 2021);

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time * 10 ** 3));

async function getFromDb(
  db: Db,
  collectionId: "memes",
  docId: string,
): Promise<MemesOfMonth>;
async function getFromDb(db: Db, collectionId: string, docId: string) {
  try {
    console.count("DB reads");
    console.count(docId);
    return (await getDoc(doc(db, collectionId, docId))).data();
  } catch (err) {
    console.warn("Your DB emulations are likely not running correctly");
    console.error(err);
  }
}

const cacheMonth = (
  year: number,
  month: number,
  memesOfMonth: MemesOfMonth,
) => {
  if (!cache[year]) {
    cache[year] = {};
  }
  cache[year][month] = memesOfMonth;
};

const isMemeMonthPossible = (year: number, month: number) => {
  const date = compoundDate(1, month, year);
  const today = getToday();
  const currentYear = separateDate(today)[2];
  return firstMonth <= date && year <= currentYear;
};

const getMemesOfMonthFromDb = async (db: Db, year: number, month: number) => {
  if (!isMemeMonthPossible(year, month)) return null;
  const docId = getDocId(year, month);
  if (queue.has(docId)) {
    await delay(1);
    return getMemesOfMonthFromCache(year, month);
  }
  queue.add(docId);
  const memesOfMonth = (await getFromDb(db, "memes", docId)) ?? {};
  cacheMonth(year, month, memesOfMonth);
  queue.delete(docId);
  return memesOfMonth;
};

const getMemesOfMonthFromCache = (year: number, month: number) => {
  try {
    return cache[year][month];
  } catch (err) {
    console.count("Cache errors");
  }
};

export const getMemesOfMonth = (year: number, month: number, db: Db) =>
  getMemesOfMonthFromCache(year, month) ??
  getMemesOfMonthFromDb(db, year, month);

export const getMemeOtd = async (
  db: Db,
  d: Date | undefined,
  n = 0,
): Promise<Meme | null | undefined> => {
  if (!d) return null;
  if (n >= 12) throw new Error("DB recursion");
  const [date, month, year] = separateDate(d);
  if (!isMemeMonthPossible(year, month)) return null;
  try {
    return cache[year][month][date];
  } catch (err) {
    console.count("Cache errors");
  }
  await getMemesOfMonth(year, month, db);
  return getMemeOtd(db, d, n + 1);
};

async function callCloudFunction(
  func: "submitMeme",
  data: SubmitMemeCloudFunction["request"],
): Promise<{ data: SubmitMemeCloudFunction }>;
async function callCloudFunction(func: string, data: unknown) {
  return httpsCallable(functions, func)(data);
}

export const submitMeme = async (
  date: Date,
  meme: SubmitMemeCloudFunction["request"]["meme"],
) => {
  const response = await callCloudFunction("submitMeme", {
    date: dateToString(date),
    meme,
  });
  return response;
};
