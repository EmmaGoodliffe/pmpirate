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

const cacheMonth = (monthOfMemes: { meme: string; date: Date }[]) => {
  const [, month, year] = separateDate(monthOfMemes[0].date);
  if (!cache[year]) {
    cache[year] = {};
  }
  const keys = monthOfMemes.map(meme => {
    const [date, m, y] = separateDate(meme.date);
    if (m !== month || y !== year) {
      throw new Error(`Expected month to be ${month}; received ${m}`);
    }
    return date;
  });
  const values = monthOfMemes.map(meme => meme.meme);
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];
    result[key] = value;
  }
  cache[year][month] = result;
};

const isArchivedHere = (d: string, month: number, year: number) => {
  const date = stringToDate(d);
  const today = new Date();
  const goodDate = date <= today;
  const [, dMonth, dYear] = separateDate(date);
  const goodMonth = dMonth === month;
  const goodYear = dYear === year;
  return goodDate && goodMonth && goodYear;
};

const isMemeMonthPossible = (year: number, month: number) => {
  const date = compoundDate(1, month, year);
  const currentYear = separateDate(new Date())[2];
  return firstMonth <= date && year <= currentYear;
};

const getMemesOfMonthFromDb = (year: number, month: number) => {
  if (!isMemeMonthPossible(year, month)) return null;
  console.count(`${year}-${month}`);
  console.count("DB reads");
  const monthOfMemes = new Array(getLengthOfMonth(year, month))
    .fill(null)
    .map((x, i) => {
      const date = compoundDate(i + 1, month, year);
      const key = dateToString(date, "-", true);
      const url = memes.otd[key] && `memes/${memes.otd[key]}`;
      return {
        date,
        meme: isArchivedHere(key, month, year) && url ? url : null,
      };
    });
  cacheMonth(monthOfMemes);
  return monthOfMemes;
};

const getMemesOfMonthFromCache = (year: number, month: number) => {
  try {
    const fromCache = cache[year][month];
    if (fromCache) {
      return Object.keys(fromCache).map(key => {
        const date = parseInt(key);
        const meme = fromCache[date];
        return {
          date: compoundDate(date, month, year),
          meme,
        };
      });
    }
  } catch (err) {
    console.log("Quelled cache error");
  }
  return undefined;
};

export const getMemesOfMonth = (year: number, month: number) =>
  getMemesOfMonthFromCache(year, month) ?? getMemesOfMonthFromDb(year, month);

export const getMemeOtd = (d: Date) => {
  const [date, month, year] = separateDate(d);
  if (!isMemeMonthPossible(year, month)) return null;
  try {
    const fromCache = cache[year][month][date];
    if (fromCache !== undefined) return fromCache;
  } catch (err) {
    console.log("Quelled cache error");
  }
  getMemesOfMonth(year, month);
  return getMemeOtd(d);
};
