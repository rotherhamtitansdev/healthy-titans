import foodNutrition from "../fixtures/food-nutrition.json";

describe("Food & Nutrition", () => {
  it("Can view fried chicken information ", () => {
    cy.visit("http://localhost:3000");

    cy.get('button[aria-label="menu toggle"]').click();
    cy.get('[data-testid="mobile-menu"] [href="/NutritionalInformation"]').click();
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
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="Food & Nutrition"]').click();
    cy.get('[data-testid="Carbs"]').click();

    cy.get('[data-testid="details-title"]').should("have.text", foodNutrition.carbs.title);
    cy.get('[data-testid="details-description"]').should(
      "have.text",
      foodNutrition.carbs.description
    );
  });
});
