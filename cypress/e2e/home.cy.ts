import terminalLog from "../support/terminal-log";

describe("Homepage", () => {
  it("Check a11y homepage", () => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("Can see call to action and carousel items", () => {
    cy.visit("http://localhost:3000")
    cy.window().its("scrollY").should("equal", 0);
    cy.contains("Get started").click()
    cy.window().its("scrollY").should("equal", 400);
    cy.get(".react-multi-carousel-list").should("be.visible")
    cy.get(".react-multi-carousel-item").should("have.length", 5)
  });

  it("Can toggle mobile menu and see options when menu is open", () => {
    cy.viewport(768, 1024)
    cy.visit("http://localhost:3000");
    cy.get("[aria-label='menu-toggle'").should("be.visible")
    cy.get('a[href="/FoodAndNutrition"]').should("not.be.visible")
    cy.contains("Home").should("not.exist")
    cy.get("[aria-label='menu-toggle'").click()
    cy.contains("Home")
    cy.get("[aria-label='menu-toggle'").click()
    cy.contains("Home").should("not.exist")
  })

  it("Has top navbar instead of mobile menu when page is wide enough", () => {
    cy.viewport(1440, 900)
    cy.visit("http://localhost:3000");
    cy.get("[aria-label='menu-toggle'").should("not.be.visible")
    cy.get('a[href="/FoodAndNutrition"]').should("be.visible")
  })
});
