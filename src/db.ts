import type { Firestore } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { compoundDate, separateDate } from "./date";

export interface Meme {
  url: string;
  author: string;
  found: boolean;
}
type MemesOfMonth = Record<number | string, Meme>;
export type Db = Firestore;

const cache: Record<number, Record<number, MemesOfMonth>> = {};
const queue = new Set<string>();

export const firstMonth = compoundDate(1, 9, 2021);

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time * 10 ** 3));

async function getFromDb(
  db: Db,
  collection: "memes",
  docId: string,
): Promise<MemesOfMonth>;
async function getFromDb(db: Db, collection: string, docId: string) {
  try {
    console.count("DB reads");
    console.count(docId);
    const theDoc = await getDoc(doc(db, collection, docId));
    return theDoc.data();
  } catch (err) {
    console.warn("Your DB emulations are likely not running correctly");
    console.error(err);
  }
}

async function setToDb(
  db: Db,
  collection: "memes",
  docId: string,
  data: MemesOfMonth,
): Promise<void>;
async function setToDb<T>(db: Db, collection: string, docId: string, data: T) {
  try {
    console.count("DB writes");
    await setDoc(doc(db, collection, docId), data);
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
  const today = new Date();
  const currentYear = separateDate(today)[2];
  return firstMonth <= date && year <= currentYear;
};

const getDocId = (year: number, month: number) => {
  const mm = `${month}`.padStart(2, "0");
  return `${year}-${mm}`;
};

const getMemesOfMonthFromDb = async (year: number, month: number, db: Db) => {
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
  getMemesOfMonthFromDb(year, month, db);

export const getMemeOtd = async (d: Date, db: Db, n = 0): Promise<Meme> => {
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
  return getMemeOtd(d, db, n + 1);
};

const setsAreEqual = <T>(setA: Set<T>, setB: Set<T>) =>
  [...setA].length === [...setB].length &&
  [...setA].length === [...new Set([...setA, ...setB])].length;

// TODO: This should not be client-side
const scheduleMemeToDb = async (d: Date, meme: Meme, db: Db) => {
  const [date, month, year] = separateDate(d);
  const docId = getDocId(year, month);
  const oldData = await getFromDb(db, "memes", docId);
  const data = { [date]: meme, ...oldData };
  if (setsAreEqual(new Set(Object.keys(oldData)), new Set(Object.keys(data)))) {
    console.log("Cancelled a redundant write");
    return;
  }
  await setToDb(db, "memes", docId, data);
};

export const scheduleMeme = async (date: Date, meme: Meme, db: Db) => {
  await scheduleMemeToDb(date, meme, db);
};
