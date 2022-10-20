import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Route } from "react-router";
import FoodCategory from "./FoodCategory";
import RoutingTestWrapper from "../../../tests/RoutingTestWrapper";
import FoodCategoryData from "../../../data/nutritional_information/FoodCategoryData";

describe("Food Category Component", () => {
  test("renders with no category", async () => {
    const route = "/NutritionalInformation";

    const { asFragment } = render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategory />} />
      </RoutingTestWrapper>
    );

    expect(screen.getByTestId("menutitle-title")).toBeVisible();
    expect(screen.getByText(/explore food families/i)).toBeVisible();
    expect(screen.getByText(/click on a picture to learn more/i)).toBeVisible();

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders with category", () => {
    const category = FoodCategoryData[0];
    const route = `/NutritionalInformation/${category.name}`;

    render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategory />} />
      </RoutingTestWrapper>
    );

    expect(screen.getByTestId("menutitle-title")).toHaveTextContent(category.name);
  });

  test("fallsback if no category is found", () => {
    const route = "/NutritionalInformation/NotARealCategory";

    render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<FoodCategory />} />
      </RoutingTestWrapper>
    );

    screen.debug();

    waitFor(() => {
      expect(window.location.pathname).toBe("/NutritionalInformation");
    });
  });
});
