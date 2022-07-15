import {
  compoundDate,
  dateToString,
  getLengthOfMonth,
  stringToDate,
} from "../../src/date";

describe("dates", () => {
  const example = new Date("1 Sep 2022");
  const exString = example.toLocaleDateString();
  it("converts date to string", () => {
    expect(dateToString(example, "-", true)).to.equal("2022-09-01");
  });
  it("converts string to date", () => {
    expect(stringToDate("1 Sep 2022").toLocaleDateString()).to.equal(exString);
    expect(stringToDate("01/09/2022").toLocaleDateString()).to.equal(exString);
    expect(stringToDate("01-09-2022").toLocaleDateString()).to.equal(exString);
    expect(stringToDate("1.9.22").toLocaleDateString()).to.equal(exString);
    expect(stringToDate("01-IX-2022").toLocaleDateString()).to.equal(exString);
  });
  it("compounds a date", () => {
    expect(compoundDate(1, 9, 2022).toLocaleDateString()).to.equal(exString);
  });
  it("gets length of month", () => {
    expect(getLengthOfMonth(2022, 2)).to.equal(28);
    expect(getLengthOfMonth(2022, 1)).to.equal(31);
    expect(getLengthOfMonth(2022, 9)).to.equal(30);
    expect(getLengthOfMonth(2024, 2)).to.equal(29);
  });
});
