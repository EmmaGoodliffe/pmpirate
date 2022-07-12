describe("home", () => {
  it("displays memes", () => {
    cy.visit("http://localhost:3000");
    cy.get("header").should("contain", "Pirate");
    cy.get("section#otd a").should("contain", "Archive").click();
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
          cy.get("table tfoot").should("contain", "No memes");
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
        const currentMonth = today.getUTCMonth() + 1;
        const currentYear = today.getUTCFullYear();
        const correctYear = currentMonth - 1 ? currentYear : currentYear - 1;
        const correctMonth = currentMonth - 1 ?? 12;
        expect(month).to.equal(correctMonth);
        expect(year).to.equal(correctYear);
      });
  });
});
