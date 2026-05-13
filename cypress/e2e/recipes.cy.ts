import terminalLog from "../support/terminal-log";

describe("Recipes", () => {
  beforeEach(() => {
    cy.intercept({ hostname: "firestore.googleapis.com" }, { statusCode: 503 });
    cy.visit("http://localhost:3000/recipes");
  });

  it("Check a11y recipes page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("Can view recipe details", () => {
    // Wait for recipe cards to appear beyond just the "More recipes" card
    cy.get('div[role="button"]', { timeout: 10000 }).should("have.length.gt", 1);
    cy.get('div[role="button"]').not('[data-testid="More recipes"]').first().click();
    cy.url().should("include", "/Recipes/");
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
