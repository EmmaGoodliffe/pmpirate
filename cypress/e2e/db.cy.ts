import { getMemeOtd, getMemesOfMonth, memeExists } from "../../src/db";

describe("memes", () => {
  expect(getMemeOtd(new Date("1 Sep 2022"))).to.have.lengthOf.greaterThan(0);
  expect(getMemesOfMonth(2022, 9)).to.have.lengthOf.greaterThan(0);
  expect(memeExists("01/09/2022")).to.be.true;
});
