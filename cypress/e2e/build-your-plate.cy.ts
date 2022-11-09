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

  it("gives correct score with 5 sweets", () => {
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.get("button [alt='Sweets']", { timeout: 10000 }).click();
    Object.keys(foodList.sweets).forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
        }
      });
    });

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.contains("Score: 10 out of 50");
    cy.contains("Could be better!");
  });

  it("gives correct score with 5 meats", () => {
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.get("button [alt='Meat']", { timeout: 10000 }).click();
    const expectedScore = [0];
    cy.wrap(expectedScore).as("expectedScore");
    Object.entries(foodList.meats).forEach(([key, value]) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${key}']`).length) {
          cy.get(`button [alt='${key}']`).click();
          cy.get<number[]>("@expectedScore").then((score) => {
            score.push(score.pop() + value);
          });
        }
      });
    });

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.get<number[]>("@expectedScore").then((score) => {
      cy.contains(`Score: ${score[0]} out of 50`);
    });
    cy.contains("Great!");
  });

  it("gives correct score with 5 mixed items", () => {
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    const expectedScore = [0];
    cy.wrap(expectedScore).as("expectedScore");

    cy.get("button [alt='Meat']", { timeout: 10000 }).click();
    cy.get("[class*='slide-in-row'] button")
      .first()
      .click()
      .find("img")
      .should("have.attr", "alt")
      .then((alttext) => {
        cy.get<number[]>("@expectedScore").then((score) => {
          score.push(score.pop() + foodList.meats[alttext as unknown as string]);
          cy.log(`${alttext} -> ${score}`);
        });
      });
    cy.get("button [alt='Meat']").click();

    cy.get("button [alt='Fish']").click();
    cy.get("[class*='slide-in-row'] button")
      .first()
      .click()
      .find("img")
      .should("have.attr", "alt")
      .then((alttext) => {
        cy.get<number[]>("@expectedScore").then((score) => {
          score.push(score.pop() + foodList.fish[alttext as unknown as string]);
          cy.log(`${alttext} -> ${score}`);
        });
      });
    cy.get("button [alt='Fish']").click();

    cy.get("button [alt='Fruit']").click();
    cy.get("[class*='slide-in-row'] button")
      .first()
      .click()
      .find("img")
      .should("have.attr", "alt")
      .then((alttext) => {
        cy.get<number[]>("@expectedScore").then((score) => {
          score.push(score.pop() + foodList.fruit[alttext as unknown as string]);
          cy.log(`${alttext} -> ${score}`);
        });
      });
    cy.get("button [alt='Fruit']").click();

    cy.get("button [alt='Veg']").click();
    cy.get("[class*='slide-in-row'] button")
      .first()
      .click()
      .find("img")
      .should("have.attr", "alt")
      .then((alttext) => {
        cy.get<number[]>("@expectedScore").then((score) => {
          score.push(score.pop() + foodList.vegetables[alttext as unknown as string]);
          cy.log(`${alttext} -> ${score}`);
        });
      });
    cy.get("button [alt='Veg']").click();

    cy.get("button [alt='Dairy & Eggs']").click();
    cy.get("[class*='slide-in-row'] button")
      .first()
      .click()
      .find("img")
      .should("have.attr", "alt")
      .then((alttext) => {
        cy.get<number[]>("@expectedScore").then((score) => {
          score.push(score.pop() + foodList.dairy[alttext as unknown as string]);
          cy.log(`${alttext} -> ${score}`);
        });
      });
    cy.get("button [alt='Dairy & Eggs']").click();

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.get<number[]>("@expectedScore").then((score) => {
      cy.contains(`Score: ${score[0]} out of 50`);
      switch (true) {
        case score[0] >= 45:
          cy.contains("Fantastic!");
          break;
        case score[0] >= 40:
          cy.contains("Great!");
          break;
        case score[0] >= 30:
          cy.contains("Very good!");
          break;
        case score[0] >= 20:
          cy.contains("Good!");
          break;
        case score[0] >= 10:
          cy.contains("Could be better!");
          break;
        default:
          cy.contains("Needs improvement!");
          break;
      }
    });
  });

  it("allows user to swap food items before scoring on mobile", () => {
    cy.viewport(768, 1024);

    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.get("button [alt='Sweets']", { timeout: 10000 }).click();
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

    cy.contains("button", "Score my plate").click();
    cy.get("[alt='plate']");
    selectedSweets.forEach((item) => cy.get(`button [alt='${item}']`));
    cy.contains("button", "Swap Food").click();

    cy.get("[alt='Tick']").should("have.length", 5);
    cy.contains("5 / 5");
    cy.get<string[]>("@selectedSweets").then((selected) => {
      // Need to force click as cypress thinks the tick covers the button
      cy.get(`button [alt='${selected[0]}']`).filter(":visible").click({ force: true });
    });
    cy.get("[alt='Tick']").should("have.length", 4);
    cy.contains("4 / 5");
    cy.get("button [alt='Fish']").click();
    cy.get("button [alt='Tuna']").click();
    cy.get("[alt='Tick']").should("have.length", 5);
    cy.contains("5 / 5");

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.contains("Score: 17 out of 50");
    cy.contains("Could be better!");
  });

  it("shows the plate simultaneously and scores immediately on wider screens", () => {
    cy.viewport(1600, 900);

    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();
    cy.get("[alt='plate']");

    cy.get("button [alt='Sweets']", { timeout: 10000 }).click();
    const sweets = ["Chocolate", "Jelly Sweets", "Cupcakes", "Biscuits", "Donuts", "Ice Cream"];
    sweets.forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
          cy.get(`button [alt='${item}']`).should("have.length", 2);
        }
      });
    });

    cy.contains("button", "Score my plate").click();
    cy.contains("Score: 10 out of 50");
    cy.contains("Could be better!");
  });

  it("score button should be disabled until five selections are made", () => {
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();
    cy.contains("button", "Score my plate").should("be.disabled");
    cy.contains("0 / 5");

    cy.get("button [alt='Sweets']", { timeout: 10000 }).click();
    Object.keys(foodList.sweets).forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
        }
      });
    });

    cy.get("[alt='Tick']").should("have.length", 5);
    cy.contains("button", "Score my plate").should("be.enabled");
    cy.contains("5 / 5");

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.contains("Score: 10 out of 50");
    cy.contains("Could be better!");
  });

  it("should clear the selections after choosing play again", () => {
    cy.get("[data-testid='game-begin']").click();
    cy.contains("button", "Play").click();

    cy.get("button [alt='Sweets']", { timeout: 10000 }).click();
    Object.keys(foodList.sweets).forEach((item) => {
      cy.get("body").then((body) => {
        if (body.find(`button [alt='${item}']`).length) {
          cy.get(`button [alt='${item}']`).click();
        }
      });
    });

    cy.get("[alt='Tick']").should("have.length", 5);
    cy.contains("5 / 5");

    cy.contains("button", "Score my plate").click();
    cy.contains("button", "Score my plate").click();
    cy.contains("Score: 10 out of 50");
    cy.contains("Could be better!");
    cy.contains("button", "Play again").click();

    cy.get("[alt='Tick']").should("not.exist");
    cy.contains("0 / 5");
    cy.get("button [alt='Sweets']", { timeout: 10000 });
  });
});
