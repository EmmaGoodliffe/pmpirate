import { dateToString, stringToDate } from "../../src/date";

describe("dates", () => {
  it("converts date to string", () => {
    expect(dateToString(new Date("1 Sep 2022"), "-", true)).to.equal(
      "2022-09-01",
    );
  });
  it("converts string to date", () => {
    const example = new Date("1 Sep 2022").toLocaleDateString();
    expect(stringToDate("1 Sep 2022").toLocaleDateString()).to.equal(example);
    expect(stringToDate("01/09/2022").toLocaleDateString()).to.equal(example);
    expect(stringToDate("01-09-2022").toLocaleDateString()).to.equal(example);
    expect(stringToDate("1.9.22").toLocaleDateString()).to.equal(example);
    expect(stringToDate("01-IX-2022").toLocaleDateString()).to.equal(example);
  });
});
