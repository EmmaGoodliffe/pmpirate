import { dateToString, stringToDate } from "../../src/date";


describe("dates", () => {
  it("converts date to string", () => {
    expect(dateToString(new Date("1 Sep 2022"), "-", true)).to.equal(
      "2022-09-01",
    );
  });
  it("converts string to date", () => {
    expect(stringToDate("01/09/2022").toLocaleDateString()).to.equal(
      new Date("1 Sep 2022").toLocaleDateString(),
    );
  });
});
