import { separateDate } from "../../functions/src/date";

describe("home", () => {
  it("displays memes", () => {
    cy.visit("http://localhost:3000");
    cy.get("section#otd a").should("contain", "Archive").click();
    cy.get("header").should("contain", "Pirate");
    cy.get("table")
      .children()
      .then(children => {
        const hasMemes = !Array.from(children).some(
          child => child.tagName === "TFOOT",
        );
        if (hasMemes) {
          cy.get("table tbody tr")
            .first()
            .find("td")
            .eq(1)
            .find("img")
            .should("have.attr", "src")
            .should("have.lengthOf.above", 0);
        } else {
          cy.get("table tfoot").should("contain", ":(");
        }
      });
  });
  it("navigates memes", () => {
    cy.get(".btn").eq(1).should("contain", ">").should("have.attr", "disabled");
    cy.get(".btn").first().should("contain", "<").click();
    cy.get("main p")
      .invoke("text")
      .then(text => {
        const [month, year] = text.split("/").map(x => parseInt(x));
        const today = new Date();
        const [, currentMonth, currentYear] = separateDate(today);
        const correctYear = currentMonth - 1 ? currentYear : currentYear - 1;
        const correctMonth = currentMonth - 1 || 12;
        expect(month).to.equal(correctMonth);
        expect(year).to.equal(correctYear);
      });
  });
  it("specifies a meme date", () => {
    const expectMeme = () =>
      cy
        .get("section")
        .last()
        .find("img")
        .should("have.attr", "src")
        .should("have.lengthOf.above", 0);
    const expectMemeForDate = (date: string) => {
      cy.get("input").clear().type(date);
      expectMeme();
    };
    expectMemeForDate("02/02/2022");
  });
});

export {};
