describe("home", () => {
  it("displays all sections", () => {
    cy.visit("http://localhost:3000");
    cy.get("header").should("contain", "Pirate");
    cy.get("main .book-section span:first").should("contain", "Pure Year 1");
    const otd = () => cy.get("section#otd");
    otd()
      .should("contain", "Meme")
      .children()
      .then(children => {
        if (Array.from(children)[1].tagName === "IMG") {
          otd()
            .find("img")
            .should("have.attr", "src")
            .should("have.lengthOf.above", 0);
        } else {
          otd().find("p").should("contain", ":(");
        }
      });
  });
});

export {};
