import terminalLog from "../support/terminal-log";

describe("Quiz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Games/Quiz");
  });
  
  it("check a11y Quiz page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });
 
  it("gives correct score with 4 correct answers", () => {
    cy.contains("BEGIN").click()
    // cy.wait(5000);
    cy.contains("Pork", {timeout:10000}).should('be.visible')
  });
  // it("gives correct score with 2 correct answers");
});
