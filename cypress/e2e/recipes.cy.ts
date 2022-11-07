import terminalLog from "../support/terminal-log";

describe("Recipes", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/recipes");
  });

  it("Check a11y recipes page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("Can view recipe in new tab", () => {
    cy.window().then((win) => {
      cy.stub(win, "open").as("open");
    });
    cy.get("[data-testid='Chicken Satay Stir Fry']").click();
    cy.get("@open").should("have.been.calledOnce");
  });
});
