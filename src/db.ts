import {
  compoundDate,
  dateToString,
  getLengthOfMonth,
  separateDate,
  stringToDate,
} from "./date";
import memes from "./memes.json";

const dates = Object.keys(memes.otd);
const cache: Record<number, Record<number, Record<number, string>>> = {};

const getMemeOtdFromCache = (d: Date) => {
  const [date, month, year] = separateDate(d);
  try {
    const result = cache[year][month][date];
    if (result) return result;
    return null; // No meme
  } catch (err) {
    return undefined; // Cache miss
  }
};

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

// const cacheMeme = (d: Date, meme: string) => {
//   const [date, month, year] = separateDate(d);
//   if (!cache[year]) {
//     cache[year] = {};
//   }
//   if (!cache[year][month]) {
//     cache[year][month] = {};
//   }
//   cache[year][month][date] = meme;
//   console.log(cache);
// };

export const getMemeOtd = (date: Date) => {
  const fromCache = getMemeOtdFromCache(date);
  if (fromCache !== undefined) return fromCache;
  const [, month, year] = separateDate(date);
  getMemesOfMonth(year, month);
  return getMemeOtdFromCache(date);
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

export const getMemesOfMonth = (year: number, month: number) => {
  const archivedDates = dates.filter(date => isArchivedHere(date, month, year));
  const monthOfMemes = new Array(getLengthOfMonth(year, month))
    .fill(null)
    .map((x, i) => {
      const date = compoundDate(i + 1, month, year)
      const key = dateToString(date, "-", true);
      return {
        date,
        meme: archivedDates.includes(key) ? `memes/${memes.otd[key]}` : null,
      };
    });
  cacheMonth(monthOfMemes);
  return monthOfMemes;
};
