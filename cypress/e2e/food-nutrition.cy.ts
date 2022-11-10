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

  it("check a11y nutrition page", () => {
    cy.visit("http://localhost:3000/FoodAndNutrition/Nutrition/Fat");
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("Can view fried chicken information on mobile", () => {
    cy.viewport(768, 1024);
    cy.findByRole("button", { name: /menu-toggle/i }).click();
    cy.get('[data-testid="mobile-menu"] [href="/FoodAndNutrition"]').click();
    cy.get('[data-testid="Fast Food"]').click();
    cy.get('[data-testid="Fried Chicken"]').click();
    cy.url().should("eq", "http://localhost:3000/FoodAndNutrition/FastFood/FriedChicken");

    cy.get('[data-testid="details-title"]').should("have.text", foodNutrition.friedChicken.title);
    cy.get('[data-testid="details-description"]').should(
      "have.text",
      foodNutrition.friedChicken.description
    );
    cy.get('[data-testid="calorie-count"]').should(
      "have.text",
      foodNutrition.friedChicken.calories
    );
  });

  it("Can view fried chicken information on larger screens", () => {
    cy.viewport(1440, 900);
    cy.get('[data-testid="desktop-navbar-links"] [href="/FoodAndNutrition"]').click();
    cy.get('[data-testid="Fast Food"]').click();
    cy.get('[data-testid="Fried Chicken"]').click();
    cy.url().should("eq", "http://localhost:3000/FoodAndNutrition/FastFood/FriedChicken");

    cy.get('[data-testid="details-title"]').should("have.text", foodNutrition.friedChicken.title);
    cy.get('[data-testid="details-description"]').should(
      "have.text",
      foodNutrition.friedChicken.description
    );
    cy.get('[data-testid="calorie-count"]').should(
      "have.text",
      foodNutrition.friedChicken.calories
    );
  });

  it("Can view carbohydrates information", () => {
    cy.get('.react-multi-carousel-list [data-testid="Food & Nutrition"]').click();
    cy.get('[data-testid="Carbs"]').click();
    cy.url().should("eq", "http://localhost:3000/FoodAndNutrition/Nutrition/Carbs");

    cy.get('[data-testid="details-title"]').should("have.text", foodNutrition.carbs.title);
    cy.get('[data-testid="details-description"]').should(
      "have.text",
      foodNutrition.carbs.description
    );
  });

  it("Can view and use 'next' suggestions", () => {
    cy.get('.react-multi-carousel-list [data-testid="Food & Nutrition"]').click();
    cy.get('[data-testid="Dairy & Eggs"]').click();
    cy.get('[data-testid="Cheese"]').click();
    cy.url().should("eq", "http://localhost:3000/FoodAndNutrition/DairyAndEggs/Cheese");

    cy.get(".react-multi-carousel-list").should("be.visible");
    cy.get(".react-multi-carousel-item").should("have.length", 3);

    const NonCheeseDairyAndEggsItems = ["Butter", "Eggs", "Milk", "Yoghurt", "Milkshakes"];
    const nextItems = [];
    cy.wrap(nextItems).as("nextItems");
    cy.get(".react-multi-carousel-item").each((item) => {
      nextItems.push(item.find("[class*='text-homepageHeaderText']").text());
    });
    cy.get<string[]>("@nextItems").then((items) => {
      expect(NonCheeseDairyAndEggsItems).to.include.members(items);
      cy.get(`.react-multi-carousel-item [data-testid=${items[0]}]`).click();
      cy.url().should("eq", `http://localhost:3000/FoodAndNutrition/DairyAndEggs/${items[0]}`);
    });
  });
});
