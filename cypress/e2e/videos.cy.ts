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
    // Line needed so page waits long enough for video data to exist before opening modal
    cy.get("video");
    cy.findByTestId("Rotherham Titans - Rugby Game").click();
    cy.findByTestId("VideoModal").within(() => {
      cy.get("video").should("have.prop", "autoplay", false);
      cy.get("video", { timeout: 50000 })
        // readystate 4 = have enough data to start playing video
        .should("have.prop", "readyState", 4)
        .then(($video) => {
          $video[0].play();
        });
      // Give it a second for video to actually start playing properly
      cy.wait(1000);
      cy.get("video").should("have.prop", "paused", false);
    });
  });

  it("Can close videos", () => {
    cy.findByTestId("Rotherham Titans - Rugby Game").click();
    cy.findByTestId("VideoModal").within(() => {
      cy.findByText("Close").click();
    });
    cy.get(".react-player").should("not.exist");
  });
});
