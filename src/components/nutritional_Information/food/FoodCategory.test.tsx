import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Route } from "react-router";
import userEvent from "@testing-library/user-event";
import FoodCategory from "./FoodCategory";
import RoutingTestWrapper from "../../../tests/RoutingTestWrapper";
import FirebaseAPI from "../../../api/FirebaseAPI";

const mockFoodCategoryContent = [
  {
    key: 0,
    name: "Macronutrients & Micronutrients",
    path: "Nutrition/MacroAndMicroNutrients",
    firebaseName: "FoodCategories/Nutrition/MacronutrientsAndMicronutrients.svg",
  },
  {
    key: 1,
    name: "Protein",
    firebaseName: "FoodCategories/Nutrition/Protien.svg",
    path: "Nutrition/Protein",
  },
  {
    key: 2,
    name: "Fat",
    firebaseName: "FoodCategories/Nutrition/Fat.svg",
    path: "Nutrition/Fat",
  },
  {
    key: 3,
    name: "Carbs",
    firebaseName: "FoodCategories/Nutrition/Carbohydrates.svg",
    path: "Nutrition/Carbs",
  },
  {
    key: 4,
    name: "Salt & Sugar",
    firebaseName: "FoodCategories/Nutrition/SugarAndSalt.svg",
    path: "Nutrition/SaltAndSugar",
  },
  {
    key: 5,
    name: "Water",
    firebaseName: "FoodCategories/Nutrition/Water.svg",
    path: "Nutrition/Water",
  },
];

describe("Food Category Component", () => {
  test("renders with no category", async () => {
    const route = "/FoodAndNutrition";

    const { asFragment } = render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategory />} />
      </RoutingTestWrapper>
    );

    expect(screen.getByText(/explore food families/i)).toBeVisible();
    expect(screen.getByText(/click on a picture to learn more/i)).toBeVisible();

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders with category", () => {
    jest.spyOn(FirebaseAPI, "fetchSpecifiedChildOfSpecifiedComponentData");

    const category = mockFoodCategoryContent[0];
    const route = `/FoodAndNutrition/${category.name}`;

    render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategory />} />
      </RoutingTestWrapper>
    );

    expect(screen.getByTestId("menutitle-title")).toHaveTextContent(category.name);
  });

  test("fallsback if no category is found", () => {
    const route = "/FoodAndNutrition/NotARealCategory";

    render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategory />} />
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

    jest.spyOn(FirebaseAPI, "fetchSpecifiedChildOfSpecifiedComponentData");

    render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategory />} />
      </RoutingTestWrapper>
    );

    expect(screen.getByText(/explore food families/i)).toBeVisible();

    user.click(screen.getByTestId(category.name));

    waitFor(() => {
      expect(screen.findByTestId("menutitle-title")).toHaveTextContent(category.name);
      expect(window.location.pathname).toBe(`/FoodAndNutrition/${category.name}`);
    });
  });
});
