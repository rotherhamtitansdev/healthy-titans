describe("Recipes", () => {
  it("Check a11y recipes page", () => {
    cy.visit("http://localhost:3000/Recipes");
    cy.injectAxe();
    cy.checkA11y(null, null, null, true);
  });

  it("Can view recipe in new tab");
});
