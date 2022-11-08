import terminalLog from "../support/terminal-log";

describe("Quiz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Games/Quiz");
  });
  
  it("check a11y Quiz page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });
 
  it("gives correct score with 10 correct answers", () => {
    cy.contains("BEGIN").click()
    cy.contains("Pork").click()
    cy.contains("NEXT").click()
    cy.contains("Horse").click()
    cy.contains("NEXT").click()
    cy.contains("Kale").click()
    cy.contains("NEXT").click()
    cy.contains("Vitamin D").click()
    cy.contains("NEXT").click()
    cy.contains("Potato").click()
    cy.contains("NEXT").click()
    cy.contains("Micronutrients are smaller categories like vitamins & minerals").click()
    cy.contains("NEXT").click()
    cy.contains("Coal").click()
    cy.contains("NEXT").click()
    cy.contains("It's our main source of energy").click()
    cy.contains("NEXT").click()
    cy.contains("Not very often (and not too much)").click()
    cy.contains("NEXT").click()
    cy.contains("Calcium").click()
    cy.contains("NEXT").click()
    cy.contains("Score: 10 out of 10").should("be.visible");
  });

  it("gives correct score with 2 correct answers", () => {
    cy.contains("BEGIN").click()
    cy.contains("Pork").click()
    cy.contains("NEXT").click()
    cy.contains("Horse").click()
    cy.contains("NEXT").click()
    cy.contains("Spinach").click()
    cy.contains("NEXT").click()
    cy.contains("Vitamin A").click()
    cy.contains("NEXT").click()
    cy.contains("Orange").click()
    cy.contains("NEXT").click()
    cy.contains("Micronutrients don't really exist").click()
    cy.contains("NEXT").click()
    cy.contains("Iron").click()
    cy.contains("NEXT").click()
    cy.contains("It supports our digestion").click()
    cy.contains("NEXT").click()
    cy.contains("Twice a day").click()
    cy.contains("NEXT").click()
    cy.contains("Sugar").click()
    cy.contains("NEXT").click()
    cy.contains("Score: 2 out of 10").should("be.visible");
  });
  
  it("Game resets when button is clicked", () => {
    cy.contains("BEGIN").click()
    cy.contains("Pork").click()
    cy.contains("NEXT").click()
    cy.contains("Horse").click()
    cy.contains("NEXT").click()
    cy.contains("Spinach").click()
    cy.contains("NEXT").click()
    cy.contains("Vitamin A").click()
    cy.contains("NEXT").click()
    cy.contains("Orange").click()
    cy.contains("NEXT").click()
    cy.contains("Micronutrients don't really exist").click()
    cy.contains("NEXT").click()
    cy.contains("Iron").click()
    cy.contains("NEXT").click()
    cy.contains("It supports our digestion").click()
    cy.contains("NEXT").click()
    cy.contains("Twice a day").click()
    cy.contains("NEXT").click()
    cy.contains("Sugar").click()
    cy.contains("NEXT").click()
    cy.contains("Score: 2 out of 10").should("be.visible");
    cy.contains("Play again").click()
    cy.contains("BEGIN").should("be.visible")
  });
});
