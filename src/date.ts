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

export const dateToString = (d: Date, splitter = "/", reverse = false) => {
  const date = `${d.getUTCDate()}`.padStart(2, "0");
  const month = `${d.getUTCMonth() + 1}`.padStart(2, "0");
  const year = d.getUTCFullYear();
  const ogOrder = [date, month, year];
  const ordered = reverse ? ogOrder.reverse() : ogOrder;
  return ordered.join(splitter);
};

export const stringToDate = (d: string) => {
  const today = new Date();
  const splitters = ["/", "-", "."];
  for (const splitter of splitters) {
    const [date, month, year] = d.split(splitter).map(toInt);
    const result = new Date(year, month - 1, date);
    if (date <= 31 && `${result}` !== "Invalid Date") return result;
  }
  for (const splitter of splitters) {
    const [year, month, date] = d.split(splitter).map(toInt);
    const result = new Date(year, month - 1, date);
    if (`${result}` !== "Invalid Date") return result;
  }
  return today;
};
