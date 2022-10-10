describe("Videos", () => {
  it("Check a11y videos page", () => {
    cy.visit("http://localhost:3000/Videos");
    cy.injectAxe();
    cy.checkA11y(null, null, null, true);
  });
  it("Can watch and close videos");
});
