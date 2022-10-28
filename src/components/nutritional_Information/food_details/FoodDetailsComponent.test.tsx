import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import FirebaseAPI, { FoodDetailsProps } from "../../../api/FirebaseAPI";
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
    const mockFetchSeeNext = jest.fn((category, currentName) => {
      const filteredCardData: FoodDetailsProps[] = mockContent.cardData.filter(
        (cardData: FoodDetailsProps) =>
          cardData.category === category && cardData.name !== currentName
      );
      const filteredPaths: string[] = mockContent.paths.filter((path) => path !== currentName);
      return Promise.resolve({ cardData: filteredCardData, paths: filteredPaths });
    });
    const mockFetchFoodSingle = jest.fn().mockResolvedValueOnce(mockContent.cardData[2]);

    jest.spyOn(FirebaseAPI, "fetchFoodDetailsSeeNext").mockImplementationOnce(mockFetchSeeNext);
    jest
      .spyOn(FirebaseAPI, "fetchSpecifiedChildOfSpecifiedComponentData")
      .mockImplementationOnce(mockFetchFoodSingle);
    jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue("mock/Image3.svg");

    // define width for carousel to appear & prevent buttons from loading
    Object.defineProperties(window.HTMLElement.prototype, {
      offsetWidth: {
        get: () => 1400,
      },
    });

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1400,
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

    const detailsCard = await screen.findByTestId("mock3-details");

    expect(within(detailsCard).getByText("mock3")).toBeVisible();
    expect(within(detailsCard).getByText("mockFact23")).toBeVisible();
    expect(within(detailsCard).getByRole("img", { name: "" })).toHaveAttribute(
      "src",
      "mock/Image3.svg"
    );

    expect(mockFetchFoodSingle).toHaveBeenCalledWith("mock3");
    expect(mockFetchSeeNext).toHaveBeenCalledWith("mockCategory", "mock3");

    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.getByRole("button", { name: "mock1" })).toBeVisible();
    expect(screen.getByRole("button", { name: "mock2" })).toBeVisible();
    expect(screen.queryByRole("button", { name: "mock3" })).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
