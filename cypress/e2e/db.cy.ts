import { getMemeOtd, getMemesOfMonth } from "../../src/db";

describe("memes", () => {
  it("gets meme of the day", () => {
    expect(await getMemeOtd(new Date("1 Sep 2022"))).to.have.lengthOf.greaterThan(0);
  });
  it("gets memes of month", () => {
    expect(await getMemesOfMonth(2022, 9)).to.have.lengthOf.greaterThan(0);
    expect(await getMemesOfMonth(2000, 1)).to.be.null;
  });
});
