import terminalLog from "../support/terminal-log";
import fitnessChallenges from "../fixtures/fitness-challenge.json";

describe("Fitness Challenges", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/FitnessChallenges");
  });

  it("Check a11y fitness challenges page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });

  it("Can access and view individual fitness challenge", () => {
    cy.findByTestId("Hungry Hippos").should("be.visible").click();
    cy.findByTestId("details-title").should("have.text", fitnessChallenges["Hungry Hippos"].title);
    cy.url().should("eq", "http://localhost:3000/FitnessChallenges/HungryHippos");
    cy.findByTestId("details-description").should("have.text", fitnessChallenges["Hungry Hippos"].description);
  });

  it("Can navigate back from a fitness challenge to the list", () => {
    cy.findByTestId("Foxes & Farmers").should("be.visible").click();
    cy.url().should("eq", "http://localhost:3000/FitnessChallenges/FoxesFarmers");
    cy.findByTestId("breadcrumbs").within(() => {
      cy.get("a").eq(0).click();
    });
    cy.url().should("eq", "http://localhost:3000/FitnessChallenges");
  });
});
