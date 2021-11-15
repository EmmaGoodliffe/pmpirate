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
  const date = `${d.getDate()}`.padStart(2, "0");
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const year = d.getFullYear();
  const ogOrder = [date, month, year];
  const order = reverse ? ogOrder.reverse() : ogOrder;
  return order.join(splitter);
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