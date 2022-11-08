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
    const expectedScore = [0];
    cy.wrap(expectedScore).as("expectedScore");
    Object.entries(meats).forEach(([key, value]) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${key}']`).length) {
          cy.get(`button [alt='${key}']`).click();
          cy.get<number[]>("@expectedScore").then((score) => {
            score.push(score.pop() + value);
          });
        }
      });
    });

    cy.get("[alt='Tick']").should("have.length", 5);
    cy.contains("button", "Score my plate").should("be.enabled");
    cy.contains("button", "Score my plate").click();
    cy.get("[alt='plate']");
    cy.contains("button", "Score my plate").click();
    cy.get<number[]>("@expectedScore").then((score) => {
      cy.contains(`Score: ${score[0]} out of 50`);
    });
    cy.contains("Great!");
    cy.contains("button", "Play again").click();
  });

  it("gives correct score with 5 mixed items");

  it("allows user to swap food items before scoring (on mobile)", () => {
    cy.viewport(768, 1024);

    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.get("button [alt='Sweets']").click();
    const sweets = ["Chocolate", "Jelly Sweets", "Cupcakes", "Biscuits", "Donuts", "Ice Cream"];
    const selectedSweets = [];
    cy.wrap(selectedSweets).as("selectedSweets");
    sweets.forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
          cy.get<string[]>("@selectedSweets").then((selected) => {
            selected.push(item);
          });
        }
      });
    });

    cy.log(`${selectedSweets}`);
    cy.contains("button", "Score my plate").click();
    cy.get("[alt='plate']");
    selectedSweets.forEach((item) => cy.get(`button [alt='${item}']`));
    cy.contains("button", "Swap Food").click();

    cy.get("[alt='Tick']").should("have.length", 5);
    cy.get<string[]>("@selectedSweets").then((selected) => {
      // Need to force click as cypress thinks the tick covers the button
      cy.get(`button [alt='${selected[0]}']`).filter(":visible").click({ force: true });
    });
    cy.get("[alt='Tick']").should("have.length", 4);
    cy.get("button [alt='Fish']").click();
    cy.get("button [alt='Tuna']").click();
    cy.get("[alt='Tick']").should("have.length", 5);
  });
});
