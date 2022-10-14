import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Route } from "react-router";

import Breadcrumbs from "./Breadcrumbs";
import RoutingTestWrapper from "../../tests/RoutingTestWrapper";

describe("Breadcrumb Component", () => {
  it("breadcrumbs renders correctly", async () => {
    const route = "/NutritionalInformation";
    const { getByText, getByTestId } = render(
      <RoutingTestWrapper path={route}>
        <Route path={route} element={<Breadcrumbs styling="" />} />
      </RoutingTestWrapper>
    );

    expect(getByTestId("breadcrumbs")).toBeInTheDocument();
    expect(getByText("Food & Nutrition")).toBeInTheDocument();
  });
});
