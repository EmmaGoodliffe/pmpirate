import { getMemeOtd, getMemesOfMonth } from "../../src/db";

describe("memes", () => {
  expect(getMemeOtd(new Date("1 Sep 2022"))).to.have.lengthOf.greaterThan(0);
  expect(getMemesOfMonth(2022, 9)).to.have.lengthOf.greaterThan(0);
});
