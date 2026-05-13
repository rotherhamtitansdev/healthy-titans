import terminalLog from "../support/terminal-log";

describe("Quiz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Games/Quiz");
    cy.contains("Choose a quiz set").should("be.visible");
    cy.contains("Healthy Habits").click();
    cy.contains("BEGIN").click();
  });

  it("check a11y Quiz page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("gives correct score with 3 correct answers", () => {
    cy.contains("60 minutes").click();
    cy.contains("NEXT").click();
    cy.contains("Water").click();
    cy.contains("NEXT").click();
    cy.contains("Sleep and a balanced meal").click();
    cy.contains("NEXT").click();
    cy.contains("Score: 3 out of 3").should("be.visible");
  });

  it("gives correct score with 1 correct answer", () => {
    cy.contains("20 minutes").click();
    cy.contains("NEXT").click();
    cy.contains("Water").click();
    cy.contains("NEXT").click();
    cy.contains("Only stretching").click();
    cy.contains("NEXT").click();
    cy.contains("Score: 1 out of 3").should("be.visible");
  });

  it("game resets when button is clicked", () => {
    cy.contains("20 minutes").click();
    cy.contains("NEXT").click();
    cy.contains("Water").click();
    cy.contains("NEXT").click();
    cy.contains("Only stretching").click();
    cy.contains("NEXT").click();
    cy.contains("Score: 1 out of 3").should("be.visible");
    cy.contains("Play again").click();
    cy.contains("Choose a quiz set").should("be.visible");
    cy.contains("BEGIN").should("be.visible");
  });
});
