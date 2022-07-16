import { doc, Firestore, getDoc } from "firebase/firestore";
import {
  compoundDate,
  dateToString,
  getLengthOfMonth,
  separateDate,
  stringToDate,
} from "./date";
import memes from "./memes.json";

const cache: Record<number, Record<number, Record<number, string>>> = {};

export const firstMonth = compoundDate(1, 9, 2021);

const cacheMonth = (
  year: number,
  month: number,
  monthOfMemes: Record<number, string>,
) => {
  if (!cache[year]) {
    cache[year] = {};
  }
  cache[year][month] = monthOfMemes;
  console.log({ cache });
};

const isArchivedHere = (date: Date, theMonth: number, theYear: number) => {
  const today = new Date();
  const goodDate = date <= today;
  const [, month, year] = separateDate(date);
  const goodMonth = month === theMonth;
  const goodYear = year === theYear;
  return goodDate && goodMonth && goodYear;
};

const isMemeMonthPossible = (year: number, month: number) => {
  const date = compoundDate(1, month, year);
  const currentYear = separateDate(new Date())[2];
  return firstMonth <= date && year <= currentYear;
};

const getMemesOfMonthFromJson = (year: number, month: number) => {
  const dates = new Array(getLengthOfMonth(year, month))
    .fill(null)
    .map((x, i) => i + 1);
  const result: Record<number, string> = {};
  for (const date of dates) {
    const d = compoundDate(date, month, year);
    const key = dateToString(d, "-", true);
    const url = memes.otd[key];
    if (isArchivedHere(d, month, year) && url) {
      result[date] = url;
    }
  }
  return result;
};

const getMemesOfMonthFromDb = async (
  year: number,
  month: number,
  db: Firestore,
) => {
  if (!isMemeMonthPossible(year, month)) return null;
  const mm = `${month}`.padStart(2, "0");
  const ref = `${year}-${mm}`;
  console.count(ref);
  console.count("DB reads");
  // const memesOfMonth = (await getDoc(doc(db, "memes", ref))).data() ?? {};
  const memesOfMonth = getMemesOfMonthFromJson(year, month);
  cacheMonth(year, month, memesOfMonth);
  return memesOfMonth;
};

const getMemesOfMonthFromCache = (year: number, month: number) => {
  try {
    return cache[year][month];
  } catch (err) {
    console.log("Quelled cache error");
  }
  return undefined;
};

export const getMemesOfMonth = (year: number, month: number, db: Firestore) =>
  getMemesOfMonthFromCache(year, month) ??
  getMemesOfMonthFromDb(year, month, db);

export const getMemeOtd = async (
  d: Date,
  db: Firestore,
  n = 0,
): Promise<string> => {
  if (!d) {
    console.log("HERE!");
    return null;
  }
  if (n >= 2) throw new Error("DB recursion");
  const [date, month, year] = separateDate(d);
  if (!isMemeMonthPossible(year, month)) return null;
  try {
    return cache[year][month][date];
  } catch (err) {
    console.log("Quelled cache error");
  }
  await getMemesOfMonth(year, month, db);
  return getMemeOtd(d, db, n + 1);
};
