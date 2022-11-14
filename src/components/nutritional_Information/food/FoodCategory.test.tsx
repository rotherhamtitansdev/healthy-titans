import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Route } from "react-router";
import userEvent from "@testing-library/user-event";
import FoodCategoryComponent from "./FoodCategory";
import RoutingTestWrapper from "../../../tests/RoutingTestWrapper";
import * as FirebaseAPI from "../../../api/FirebaseAPI";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { SubCategoryProps } from "../../../models/SubCategoryProps";

const mockFoodCategoryContent: MenuCardProps[] = [
  {
    key: 0,
    name: "Dairy and Eggs",
    path: "DairyAndEggs",
    firebaseName: "FoodCategories/DairyAndEggs/DairyAndEggs.svg",
  },
  {
    key: 1,
    name: "Fast Food",
    path: "FastFood",
    firebaseName: "FoodCategories/JunkFood/FastFood.svg",
  },
  {
    key: 2,
    name: "Fish",
    path: "Fish",
    firebaseName: "FoodCategories/Fish/Fish.svg",
  },
];

const mockFoodSubCategoryContent: SubCategoryProps = {
  subCategory: [
    {
      key: 0,
      name: "Dairy and Eggs",
      path: "DairyAndEggs",
      firebaseName: "FoodCategories/DairyAndEggs/DairyAndEggs.svg",
    },
    {
      key: 1,
      name: "Fast Food",
      path: "FastFood",
      firebaseName: "FoodCategories/JunkFood/FastFood.svg",
    },
    {
      key: 2,
      name: "Fish",
      path: "Fish",
      firebaseName: "FoodCategories/Fish/Fish.svg",
    },
  ],
};

describe("Food Category Component", () => {
  test("renders with no category", async () => {
    const route = "/FoodAndNutrition";
    jest.spyOn(FirebaseAPI, "fetchDataFromPath").mockResolvedValueOnce(mockFoodCategoryContent);

    const { asFragment } = render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategoryComponent />} />
      </RoutingTestWrapper>
    );

    expect(await screen.findByText(/explore food families/i)).toBeVisible();
    expect(await screen.findByText(/click on a picture to learn more/i)).toBeVisible();

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders with category", async () => {
    const category = mockFoodCategoryContent[0];
    const route = `/FoodAndNutrition/${category.path}`;
    jest.spyOn(FirebaseAPI, "fetchDataFromPath").mockResolvedValueOnce(mockFoodCategoryContent);
    jest.spyOn(FirebaseAPI, "fetchDataFromSubpath").mockResolvedValue(mockFoodSubCategoryContent);

    const { asFragment } = render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategoryComponent />} />
      </RoutingTestWrapper>
    );

    waitFor(async () => {
      expect(await screen.findByTestId("menutitle-title")).toHaveTextContent(category.name);
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test("fallsback if no category is found", async () => {
    const route = "/FoodAndNutrition/NotARealCategory";
    jest.spyOn(FirebaseAPI, "fetchDataFromPath").mockResolvedValueOnce(mockFoodCategoryContent);
    jest.spyOn(FirebaseAPI, "fetchDataFromSubpath").mockResolvedValueOnce(undefined);

    render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategoryComponent />} />
      </RoutingTestWrapper>
    );

    waitFor(() => {
      expect(window.location.pathname).toBe("/FoodAndNutrition");
    });
  });

  test("renders with no category & can click on a card", async () => {
    const category = mockFoodCategoryContent[0];
    const route = "/FoodAndNutrition";
    const user = userEvent.setup();
    jest.spyOn(FirebaseAPI, "fetchDataFromPath").mockResolvedValueOnce(mockFoodCategoryContent);

    render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategoryComponent />} />
      </RoutingTestWrapper>
    );

    expect(await screen.findByText(/explore food families/i)).toBeVisible();
    user.click(screen.getByTestId(category.name));

    waitFor(() => {
      expect(screen.findByTestId("menutitle-title")).toHaveTextContent(category.name);
      expect(window.location.pathname).toBe(`/FoodAndNutrition/${category.name}`);
    });
  });
});
