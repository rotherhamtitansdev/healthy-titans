import terminalLog from "../support/terminal-log";

describe("Videos", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Videos");
  });

  it("Check a11y videos page", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog, true);
  });
  
  it("Can play videos and they do not autoplay on modal load", () => {
    cy.findByTestId("Rotherham Titans - Rugby Game").click();
    cy.get(".react-player").get("video").should("have.prop", "paused", true).then(($video)=>{
      $video[0].play()
    });
    cy.get(".react-player").get("video").should("have.prop", "paused", false);
  });

  it("Can close videos", () => {
    cy.findByTestId("Rotherham Titans - Rugby Game").click();
    cy.get(".p-6.border-t").findByRole("button").click();
    cy.get(".react-player").should("not.exist");
  });
  
  it("Can scroll the video carousel", () => {
    cy.get(".react-multiple-carousel__arrow--right").should("be.enabled").click();
    cy.get(".react-multiple-carousel__arrow--left").should("be.enabled").click();
  });
});
