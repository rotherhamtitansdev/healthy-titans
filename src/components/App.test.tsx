import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Route } from "react-router";
import HomePageComponentsData from "../data/HomePageComponentsData";
import TestWrapper from "../tests/TestWrapper";
import HomePageComponents from "./HomePageComponents";

test("home page renders", async () => {
  // Define width so carousel on homepage loads
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get: () => 100
    }
  });

  render(
    <TestWrapper>
      <Route path="/" element={<HomePageComponents />} />
    </TestWrapper>
  );

  HomePageComponentsData.forEach((element) => {
    expect(screen.getByText(element.name)).toBeInTheDocument();
  });
});
