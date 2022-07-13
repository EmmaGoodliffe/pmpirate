import { dateToString, stringToDate } from "./date";
import memes from "./memes.json";

const dates = Object.keys(memes.otd);

export const getMemeOtd = (date: Date | string) => {
  const key = typeof date === "string" ? date : dateToString(date, "-", true);
  const url = memes.otd[key] ? `memes/${memes.otd[key]}` : undefined;
  return url;
};

const isArchivedHere = (date: string, month: number, year: number) => {
  const d = new Date(date);
  const today = new Date();
  const goodDate = d <= today;
  // const weekBefore = new Date();
  // weekBefore.setDate(today.getDate() - 28);
  // return weekBefore <= new Date(d) && new Date(d) <= today;
  const goodMonth = d.getMonth() + 1 === month;
  const goodYear = d.getFullYear() === year;
  return goodDate && goodMonth && goodYear;
};

export const getMemesOfMonth = (year: number, month: number) => {
  const archivedDates = dates.filter(date => isArchivedHere(date, month, year));
  return archivedDates.map(date => ({
    date: stringToDate(date),
    meme: getMemeOtd(date),
  }));
};

export const memeExists = (query: string) =>
  dates.some(
    date => dateToString(new Date(date)) === dateToString(stringToDate(query)),
  );
