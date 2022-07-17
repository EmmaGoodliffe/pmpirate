import type { Firestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {
  compoundDate,
  // dateToString,
  // getLengthOfMonth,
  separateDate,
} from "./date";
// import memes from "./memes.json";

const cache: Record<number, Record<number, Record<number, string>>> = {};
const queue = new Set<string>();

export const firstMonth = compoundDate(1, 9, 2021);

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time * 10 ** 3));

const fetchFromDb = async (
  db: Firestore,
  collection: string,
  docId: string,
) => {
  try {
    console.count("DB");
    console.count(docId);
    const theDoc = await getDoc(doc(db, collection, docId));
    return theDoc.data();
  } catch (err) {
    console.warn("Your DB emulations are likely not running correctly");
    console.error(err);
  }
};

const cacheMonth = (
  year: number,
  month: number,
  monthOfMemes: Record<number, string>,
) => {
  if (!cache[year]) {
    cache[year] = {};
  }
  cache[year][month] = monthOfMemes;
};

// const isArchivedHere = (date: Date, theMonth: number, theYear: number) => {
//   const goodDate = true;
//   const [, month, year] = separateDate(date);
//   const goodMonth = month === theMonth;
//   const goodYear = year === theYear;
//   return goodDate && goodMonth && goodYear;
// };

const isMemeMonthPossible = (year: number, month: number) => {
  const date = compoundDate(1, month, year);
  const today = new Date();
  const currentYear = separateDate(today)[2];
  return firstMonth <= date && year <= currentYear;
};

// const getMemesOfMonthFromJson = async (year: number, month: number) => {
//   const dates = new Array(getLengthOfMonth(year, month))
//     .fill(null)
//     .map((x, i) => i + 1);
//   const result: Record<number, string> = {};
//   for (const date of dates) {
//     const d = compoundDate(date, month, year);
//     const key = dateToString(d, "-", true);
//     const url = memes.otd[key];
//     if (isArchivedHere(d, month, year) && url) {
//       result[date] = url;
//     }
//   }
//   await delay(2);
//   return result;
// };

const getMemesOfMonthFromDb = async (
  year: number,
  month: number,
  db: Firestore,
) => {
  if (!isMemeMonthPossible(year, month)) return null;
  const mm = `${month}`.padStart(2, "0");
  const docId = `${year}-${mm}`;
  if (queue.has(docId)) {
    await delay(1);
    return getMemesOfMonthFromCache(year, month);
  }
  queue.add(docId);
  const memesOfMonth = (await fetchFromDb(db, "memes", docId)) ?? {};
  // const memesOfMonth = await getMemesOfMonthFromJson(year, month);
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

export const getMemesOfMonth = (year: number, month: number, db: Firestore) =>
  getMemesOfMonthFromCache(year, month) ??
  getMemesOfMonthFromDb(year, month, db);

export const getMemeOtd = async (
  d: Date,
  db: Firestore,
  n = 0,
): Promise<string> => {
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
