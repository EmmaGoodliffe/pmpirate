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
  return numerals.indexOf(x) + 1;
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
  if (year.length === 3) return null;
  return parseInt(year);
};

export const stringToDate = (d: string) => {
  const today = new Date();
  const splitters = ["/", "-", "."];
  for (const splitter of splitters) {
    const [date, month, year] = d.split(splitter).map(toInt);
    const result = compoundDate(date, month, fixYear(year));
    if (date <= 31 && `${result}` !== "Invalid Date") return result;
  }
  for (const splitter of splitters) {
    const [year, month, date] = d.split(splitter).map(toInt);
    const result = compoundDate(date, month, fixYear(year));
    if (`${result}` !== "Invalid Date") return result;
  }
  const result = new Date(d);
  if (`${result}` !== "Invalid Date") return result;
  return today;
};

export const getLengthOfMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();
