import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import FirebaseAPI from "../../../api/FirebaseAPI";
import FoodDetailsComponent from "./FoodDetailsComponent";

const mockContent = {
  cardData: [
    {
      category: "mockCategory",
      description: "mockDescription",
      facts: ["mockFact1", "mockFact2"],
      firebaseName: "mock/Image.svg",
      name: "mock1",
      score: 0,
    },
    {
      category: "mockCategory",
      description: "mockDescription2",
      facts: ["mockFact12", "mockFact22"],
      firebaseName: "mock/Image2.svg",
      name: "mock2",
      score: 2,
    },
    {
      category: "mockCategory",
      description: "mockDescription3",
      facts: ["mockFact13", "mockFact23"],
      firebaseName: "mock/Image3.svg",
      name: "mock3",
      score: 9,
    },
  ],
  paths: ["mock1", "mock2", "mock3"],
};

describe("Food Details Component", () => {
  test("component renders both correct data and image from path and a carousel", async () => {
    jest.spyOn(FirebaseAPI, "fetchFoodDetailsSeeNext").mockResolvedValue(mockContent);
    jest.spyOn(FirebaseAPI, "fetchFoodDetailsSingle").mockResolvedValue(mockContent.cardData[2]);
    jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue("mock/Image3.svg");

    // define width for carousel to appear
    Object.defineProperties(window.HTMLElement.prototype, {
      offsetWidth: {
        get: () => 1400,
      },
    });

    // Using memoryrouter to mock Route as path to the component is required for the contents
    const { asFragment } = render(
      <MemoryRouter
        initialEntries={[{ pathname: "/NutritionalInformation/mockCategory/mock3" }]}
        initialIndex={0}
      >
        <Routes>
          <Route
            path="/NutritionalInformation/mockCategory/:foodName"
            element={<FoodDetailsComponent />}
          />
        </Routes>
      </MemoryRouter>
    );
    const mockTextToFind = await screen.findAllByText("mock3");
    const mockButtonToFind = await screen.findAllByRole("button");

    expect(mockTextToFind[0]).toBeVisible();
    expect(await screen.findByText("mockFact23")).toBeVisible();
    expect(await screen.findByRole("img", { name: "mock3" })).toHaveAttribute(
      "src",
      "mock/Image3.svg"
    );
    expect(mockButtonToFind[0]).toHaveAttribute("data-testid", "mock1");
    expect(asFragment()).toMatchSnapshot();
  });
});
