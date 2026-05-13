import terminalLog from "../support/terminal-log";
import foodList from "../fixtures/build-your-plate.json";

describe("Build Your Plate", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Games/BuildYourPlate");
  });

  it("check a11y build-your-plate page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("can navigate to the game page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".react-multi-carousel-list [data-testid='Games']").click();
    cy.get("[data-testid='menu-styling'] [data-testid='Build your plate']").click();
    cy.url().should("eq", "http://localhost:3000/Games/BuildYourPlate");
  });

  it("gives correct score with 5 meats", () => {
    cy.contains("button", "Breakfast").click();
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.contains("button", "Meat", { timeout: 10000 }).click();
    Object.keys(foodList.meats).forEach((key) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${key}']`).length) {
          cy.get(`button [alt='${key}']`).click();
        }
      });
    });

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.get('[data-testid="modal-title"]').invoke("text").should("match", /.+— \d+%$/);
  });

  it("gives correct score with mixed items", () => {
    cy.contains("button", "Breakfast").click();
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    // Select one item from Meat, one from Fish, one from Fruit (3 = minimum to score)
    cy.contains("button", "Meat", { timeout: 10000 }).click();
    cy.get("button").filter(":has(img[alt])").first().click();

    cy.contains("button", "Fish").click();
    cy.get("button").filter(":has(img[alt])").first().click();

    cy.contains("button", "Fruit").click();
    cy.get("button").filter(":has(img[alt])").first().click();

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.get('[data-testid="modal-title"]').invoke("text").should("match", /.+— \d+%$/);
  });

  it("allows user to swap food items before scoring on mobile", () => {
    cy.viewport(768, 1024);

    cy.contains("button", "Breakfast").click();
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.contains("button", "Sweets", { timeout: 10000 }).click();
    const sweets = ["Chocolate", "Jelly Sweets", "Cupcakes", "Biscuits", "Donuts", "Ice Cream"];
    const selectedSweets: string[] = [];
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

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Swap Food").click();

    cy.get("[alt='Tick']").should("have.length.gte", 3);
    cy.get<string[]>("@selectedSweets").then((selected) => {
      // Force click as cypress thinks the tick covers the button
      cy.get(`button [alt='${selected[0]}']`).filter(":visible").click({ force: true });
    });
    cy.contains("button", "Fish").click();
    cy.get("body").then((body) => {
      if (body.find("button [alt='Tuna']").length) {
        cy.get("button [alt='Tuna']").click();
      }
    });

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.get('[data-testid="modal-title"]').invoke("text").should("match", /.+— \d+%$/);
  });

  it("shows the plate simultaneously and scores immediately on wider screens", () => {
    cy.viewport(1600, 900);

    cy.contains("button", "Breakfast").click();
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.contains("button", "Sweets", { timeout: 10000 }).click();
    const sweets = ["Chocolate", "Jelly Sweets", "Cupcakes", "Biscuits", "Donuts", "Ice Cream"];
    sweets.forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
        }
      });
    });

    cy.contains("button", "Score my plate").click();
    cy.get('[data-testid="modal-title"]').invoke("text").should("match", /.+— \d+%$/);
  });

  it("score button should be disabled until minimum selections are made", () => {
    cy.contains("button", "Breakfast").click();
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();
    cy.contains("button", "Score my plate").should("be.disabled");
    cy.contains("0 / 6");

    cy.contains("button", "Sweets", { timeout: 10000 }).click();
    Object.keys(foodList.sweets).forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
        }
      });
    });

    cy.get("[alt='Tick']").should("have.length.gte", 3);
    cy.contains("button", "Score my plate").should("be.enabled");

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.get('[data-testid="modal-title"]').invoke("text").should("match", /.+— \d+%$/);
  });

  it("should clear the selections after choosing play again", () => {
    cy.contains("button", "Breakfast").click();
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.contains("button", "Sweets", { timeout: 10000 }).click();
    Object.keys(foodList.sweets).forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
        }
      });
    });

    cy.get("[alt='Tick']").should("have.length.gte", 3);

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.get('[data-testid="modal-title"]').invoke("text").should("match", /.+— \d+%$/);
    cy.contains("button", "Play again").click();

    // After play again, game-begin is shown again (same meal selected)
    cy.get("[data-testid='game-begin']").should("be.visible");
    // Start a fresh game
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.get("[alt='Tick']").should("not.exist");
    cy.contains("0 / 6");
    cy.contains("button", "Sweets", { timeout: 10000 });
  });
});
