import { getMemeOtd, getMemesOfMonth } from "../../src/db";

describe("memes", () => {
  it("gets meme of the day", () => {
    expect(getMemeOtd(new Date("1 Sep 2022"))).to.have.lengthOf.greaterThan(0);
  });
  it("gets memes of month", () => {
    expect(getMemesOfMonth(2022, 9)).to.have.lengthOf.greaterThan(0);
    expect(getMemesOfMonth(2000, 1)).to.be.null;
  });
});
