import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import FirebaseAPI from "../../../api/FirebaseAPI";
import ChallengeDetailsComponent from "./ChallengeDetailsComponent";
import { ChallengeDetailsProps } from "../../../models/ChallengeDetailsProps";

describe("ChallengeDetailsComponent", () => {
  test("component renders rules if in data", async () => {
    const content: ChallengeDetailsProps = {
      name: "Test Activity",
      description: "Sample description of the test activity",
      firebaseName: "firebase",
      rules: ["Rule 1", "Rule 2"],
      equipment: ["Ball", "Bow and Arrows"],
      howToPlay: ["Throw the ball", "Shoot the ball with the bow and arrrows"],
    };
    const url = "/test.jpg";

    const mockFetchChallengesData = jest.fn().mockResolvedValueOnce(content);

    jest.spyOn(FirebaseAPI, "fetchChallengesData").mockImplementation(mockFetchChallengesData);
    jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue(url);

    const { asFragment } = render(
      <MemoryRouter initialEntries={["/FitnessChallenges/mychallenge"]} initialIndex={0}>
        <Routes>
          <Route path="/FitnessChallenges/:challengeName" element={<ChallengeDetailsComponent />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(mockFetchChallengesData).toBeCalledWith("mychallenge");
    await waitFor(() => {
      expect(screen.getByText("Ball")).toBeVisible();
    });
    
    expect(screen.getByText("Rules")).toBeVisible();
    expect(screen.getByText(content.rules[0])).toBeVisible();
    expect(screen.getByText(content.rules[1])).toBeVisible();
    expect(screen.getByText(content.name)).toBeVisible();
    expect(screen.getByText(content.equipment[1])).toBeVisible();
    expect(screen.getByText(content.howToPlay[0])).toBeVisible();
    expect(screen.getByText(content.howToPlay[1])).toBeVisible();
    expect(screen.getByRole("img", { name: "" })).toHaveAttribute("src", url);

    expect(asFragment()).toMatchSnapshot();
  });

  test("component does not render rules if empty array in data", async () => {
    const content: ChallengeDetailsProps = {
      name: "Test Activity",
      description: "Sample description of the test activity",
      firebaseName: "firebase",
      rules: [],
      equipment: ["Ball", "Bow and Arrows"],
      howToPlay: ["Throw the ball", "Shoot the ball with the bow and arrrows"],
    };
    const url = "/test.jpg";

    const mockFetchChallengesData = jest.fn().mockResolvedValueOnce(content);

    jest.spyOn(FirebaseAPI, "fetchChallengesData").mockImplementation(mockFetchChallengesData);
    jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue(url);

    const { asFragment } = render(
      <MemoryRouter initialEntries={["/FitnessChallenges/mychallenge"]} initialIndex={0}>
        <Routes>
          <Route path="/FitnessChallenges/:challengeName" element={<ChallengeDetailsComponent />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(mockFetchChallengesData).toBeCalledWith("mychallenge");
    await waitFor(() => {
      expect(screen.getByText("Ball")).toBeVisible();
    });
    
    expect(screen.queryByText("Rules")).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

});
