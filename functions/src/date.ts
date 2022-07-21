// TODO: Stop other files using vanilla dates

const toInt = (x: string) => {
  const intX = parseInt(x);
  if (!isNaN(intX)) return intX;
  const numerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ];
  const index = numerals.indexOf(x);
  if (index === -1) return index + 1;
  return NaN;
};

export const separateDate = (date: Date) => [
  date.getDate(),
  date.getMonth() + 1,
  date.getFullYear(),
];

export const compoundDate = (date: number, month: number, year: number) =>
  new Date(year, month - 1, date);

export const dateToString = (d: Date, splitter = "/", reverse = false) => {
  const [date, month, year] = separateDate(d).map(x => `${x}`);
  const ogOrder = [date.padStart(2, "0"), month.padStart(2, "0"), year];
  const ordered = reverse ? ogOrder.reverse() : ogOrder;
  return ordered.join(splitter);
};

const fixYear = (y: number | string): number => {
  const year = `${y}`;
  if (year.length <= 2) return fixYear("20" + year.padStart(2, "0"));
  if (year.length === 3) return NaN;
  return parseInt(year);
};

export const stringToDate = (d: string) => {
  const splitters = ["/", "-", "."];
  for (const splitter of splitters) {
    const [date, month, year] = d.split(splitter).map(toInt);
    const result = compoundDate(
      date ?? NaN,
      month ?? NaN,
      fixYear(year ?? NaN),
    );
    if (![date, month, year].some(x => !x) && `${result}` !== "Invalid Date")
      return result;
  }
  for (const splitter of splitters) {
    const [year, month, date] = d.split(splitter).map(toInt);
    const result = compoundDate(
      date ?? NaN,
      month ?? NaN,
      fixYear(year ?? NaN),
    );
    if (![date, month, year].some(x => !x) && `${result}` !== "Invalid Date")
      return result;
  }
  const result = new Date(d);
  if (`${result}` !== "Invalid Date") return result;
  return undefined;
};

export const getDocId = (year: number, month: number) => {
  const mm = `${month}`.padStart(2, "0");
  return `${year}-${mm}`;
};

const normaliseDate = (date: Date) => stringToDate(dateToString(date));

export const difference = (a: Date, b: Date) => {
  const diffInMilliseconds = Number(a) - Number(b);
  const diffInSeconds = diffInMilliseconds / 10 ** 3;
  const diffInHours = diffInSeconds / 60 ** 2;
  const diffInDays = diffInHours / 24;
  return diffInDays;
};

export const getToday = () => normaliseDate(new Date()) as Date;

export const getTomorrow = () => {
  const [date, month, year] = separateDate(getToday());
  return compoundDate(date + 1, month, year);
};
