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

  it("Can click more recipes button", () => {
    cy.window().then((win) => {
      cy.stub(win, "open").as("open");
    });
    cy.get("[data-testid='More recipes']").click();
    cy.get("@open").should("have.been.calledOnce");
  });

  it("Can navigate to recipes page on desktop", () => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="recipes-link"]').click();
    cy.url().should("include", "/Recipes");
  });

  it("Can navigate to recipes page on mobile", () => {
    cy.viewport(390, 844);
    cy.visit("http://localhost:3000/");
    cy.findByRole("button", { name: /menu-toggle/i }).click();
    cy.get('[data-testid="recipes-mobile-link"]').click();
    cy.url().should("include", "/Recipes");
  });
});
