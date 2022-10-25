import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import FirebaseAPI from "../../../api/FirebaseAPI";
import ChallengeDetailsComponent from "./ChallengeDetailsComponent";

describe("ChallengeDetailsComponent", () => {
  test("component renders rules if in data", async () => {
    const content = {
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

    expect(asFragment()).toMatchSnapshot();
  });


});
