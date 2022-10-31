import React from "react";
import { render, screen } from "@testing-library/react";
import { Routes, MemoryRouter, Route } from "react-router";

import Breadcrumbs from "./Breadcrumbs";
import RoutingTestWrapper from "../../tests/RoutingTestWrapper";

describe("Breadcrumb Component", () => {
  it("breadcrumbs renders correctly", async () => {
    const route = "/";
    const { getByTestId } = render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<Breadcrumbs styling="" />} />
      </RoutingTestWrapper>
    );

    expect(getByTestId("breadcrumbs")).toBeInTheDocument();
  });

  it("should have correct text as determined by the route", () => {
    const route = "/FoodAndNutrition";
    const { getByText } = render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<Breadcrumbs styling="" />} />
      </RoutingTestWrapper>
    );

    expect(getByText("Food & Nutrition")).toBeInTheDocument();
  });

  it("should render multiple breadcrumbs as determined by the route", () => {
    const route = "/FoodAndNutrition/Test";
    render(
      <MemoryRouter initialEntries={["/", route]}>
        <Routes>
          <Route path={route} element={<Breadcrumbs styling="" />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Food & Nutrition")).toBeVisible();
    expect(screen.getByText("Test")).toBeVisible();
  });
});
