import terminalLog from "../support/terminal-log";

describe("Build Your Plate", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Games/BuildYourPlate");
  });

  it("check a11y buuld-your-plate page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("can navigate to the game page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".react-multi-carousel-list [data-testid='Games']").click();
    cy.get("[data-testid='menu-styling'] [data-testid='Build your plate']").click();
    cy.url().should("eq", "http://localhost:3000/Games/BuildYourPlate");
  });

  it("gives correct score with 5 sweets", () => {
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();
    cy.contains("button", "Score my plate").should("be.disabled");
    cy.get("button [alt='Sweets']").click();

    const sweets = ["Chocolate", "Jelly Sweets", "Cupcakes", "Biscuits", "Donuts", "Ice Cream"];
    // let selectedItems = 0;
    // let absentItems = 0;
    sweets.forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
          //   selectedItems += 1;
          // } else {
          //   absentItems += 1;
        }
      });
    });
    // expect(selectedItems).to.be.eq(5);
    // expect(absentItems).to.be.eq(1);

    cy.get("[alt='Tick']").should("have.length", 5);
    cy.contains("button", "Score my plate").should("be.enabled");
    cy.contains("button", "Score my plate").click();
    cy.get("[alt='plate']");
    cy.contains("button", "Score my plate").click();
    cy.contains("Score: 10 out of 50");
    cy.contains("Could be better!");
    cy.contains("button", "Play again").click();
  });

  it("gives correct score with 5 meats", () => {
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();
    cy.contains("button", "Score my plate").should("be.disabled");
    cy.get("button [alt='Meat']").click();

    const meats = { Beef: 9, Lamb: 9, Chicken: 9, Pork: 8, Turkey: 9, "Cooked Meats": 8 };
    // let selectedItems = 0;
    // let absentItems = 0;
    let expectedScore = 0;
    Object.entries(meats).forEach(([key, value]) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${key}']`).length) {
          cy.get(`button [alt='${key}']`).click();
          // selectedItems += 1;
          expectedScore += value;
          // } else {
          //   absentItems += 1;
        }
      });
    });
    // expect(selectedItems).to.be.eq(5);
    // expect(absentItems).to.be.eq(1);

    cy.get("[alt='Tick']").should("have.length", 5);
    cy.contains("button", "Score my plate").should("be.enabled");
    cy.contains("button", "Score my plate").click();
    cy.get("[alt='plate']");
    cy.contains("button", "Score my plate").click();
    cy.contains(`Score: ${expectedScore} out of 50`);
    cy.contains("Great!");
    cy.contains("button", "Play again").click();
  });
  it("gives correct score with 5 mixed items");
  it("allows user to swap food items before scoring");
});
