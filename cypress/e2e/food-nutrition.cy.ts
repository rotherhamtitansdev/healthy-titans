import foodNutrition from "../fixtures/food-nutrition.json";
import terminalLog from "../support/terminal-log";

describe("Food & Nutrition", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check a11y category page", () => {
    cy.visit("http://localhost:3000/FoodAndNutrition");
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("check a11y food page", () => {
    cy.visit("http://localhost:3000/FoodAndNutrition/Fish/Salmon");
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("Can view fried chicken information ", () => {
    // TODO: update this test for non-mobile views
    cy.findByRole("button", { name: /menu-toggle/i }).click();
    cy.get('[data-testid="mobile-menu"] [href="/FoodAndNutrition"]').click();
    cy.get('[data-testid="Fast Food"]').click();
    cy.get('[data-testid="Fried Chicken"]').click();

    cy.get('[data-testid="details-description"]').should(
      "have.text",
      foodNutrition.friedChicken.description
    );
    cy.get('[data-testid="calorie-count"]').should(
      "have.text",
      foodNutrition.friedChicken.calories
    );
  });

  it("Can view Carbs information", () => {
    cy.get('[data-testid="Food & Nutrition"]').click();
    cy.get('[data-testid="Carbs"]').click();
  });
});
