import terminalLog from "../support/terminal-log";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Check a11y homepage", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("Can see call to action and carousel items", () => {
    cy.window().its("scrollY").should("equal", 0);
    cy.contains("Get started").click()
    cy.window().its("scrollY").should("equal", 400);
    cy.get(".react-multi-carousel-list").should("be.visible")
    cy.get(".react-multi-carousel-item").should("have.length", 5)
  });

  it("Can toggle mobile menu and see options when menu is open", () => {
    cy.viewport(768, 1024)
    cy.get("[aria-label='menu-toggle']").should("be.visible")
    cy.get("[data-testid='mobile-menu']").should("not.be.visible")
    cy.get("[aria-label='menu-toggle']").click()
    cy.get("[data-testid='mobile-menu'] a[href='/FoodAndNutrition']").should("be.visible")
    cy.get("[aria-label='menu-toggle']").click()
    cy.get("[data-testid='mobile-menu']").should("not.be.visible")
  })

  it("Has top navbar instead of mobile menu when page is wide enough", () => {
    cy.viewport(1440, 900)
    cy.visit("http://localhost:3000");
    cy.get("[aria-label='menu-toggle']").should("not.be.visible")
    cy.get("[data-testid='desktop-navbar-links'] a[href='/FoodAndNutrition']").should("be.visible")
  })

  it("Can navigate with mobile menu links", () => {
    cy.viewport(768, 1024)
    cy.visit("http://localhost:3000");
    cy.get("[aria-label='menu-toggle']").click()
    cy.get("[data-testid='mobile-menu'] a[href='/FoodAndNutrition']").click()
    cy.url().should("eq", "http://localhost:3000/FoodAndNutrition")
  })

  it("Can navigate with top navbar links", () => {
    cy.viewport(1440, 900)
    cy.get("[data-testid='desktop-navbar-links'] a[href='/FoodAndNutrition']").click()
    cy.url().should("eq", "http://localhost:3000/FoodAndNutrition")
  })

  it("Can navigate with carousel buttons", () => {
    cy.get(".react-multi-carousel-list [data-testid='Food & Nutrition']").click()
    cy.url().should("eq", "http://localhost:3000/FoodAndNutrition")
  })
});
