import terminalLog from "../support/terminal-log";

describe("Homepage", () => {
  it("Check a11y homepage", () => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("Can see call to action and carousel items");
});
