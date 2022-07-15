import {
  compoundDate,
  dateToString,
  getLengthOfMonth,
  separateDate,
  stringToDate,
} from "./date";
import memes from "./memes.json";

const dates = Object.keys(memes.otd);
const cache: Record<number, Record<number, Record<number, string>>> = {
  2022: {
    7: {
      15: "memes/mugs.png",
    },
  },
};

const getMemeOtdFromCache = (d: Date) => {
  const [date, month, year] = separateDate(d);
  // TODO: return `null` for no meme and `undefined` for cache miss
  try {
    return cache[year][month][date];
  } catch (err) {
    return undefined;
  }
};

const cacheMeme = (d: Date, meme: string) => {
  const [date, month, year] = separateDate(d);
  if (!cache[year]) {
    cache[year] = {};
  }
  if (!cache[year][month]) {
    cache[year][month] = {};
  }
  cache[year][month][date] = meme;
  console.log(cache);
};

const getMemeOtdFromDb = (date: Date) => {
  const key = dateToString(date, "-", true);
  const meme = memes.otd[key] ? `memes/${memes.otd[key]}` : null;
  cacheMeme(date, meme);
  return meme;
};

export const getMemeOtd = (date: Date) => {
  const fromCache = getMemeOtdFromCache(date);
  if (fromCache !== undefined) return fromCache;
  return getMemeOtdFromDb(date);
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
  const archivedDates = dates
    .filter(date => isArchivedHere(date, month, year))
    .map(x => dateToString(stringToDate(x)));
  const memes = new Array(getLengthOfMonth(year, month))
    .fill(null)
    .map((x, i) => {
      const date = compoundDate(i + 1, month, year);
      return {
        date,
        meme: archivedDates.includes(dateToString(date))
          ? getMemeOtd(date)
          : null,
      };
    });
  for (const meme of memes) {
    cacheMeme(meme.date, meme.meme);
  }
  return memes;
};
