import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import HomePageComponentsData from "../data/HomePageComponentsData";
import App from "./App";

test("home page renders", async () => {
  // Define width so carousel on homepage loads
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get: () => 100,
    },
  });

  render(<App />, { wrapper: MemoryRouter });

  expect(screen.getByRole("button", { name: "Get started" })).toBeVisible();

  HomePageComponentsData.forEach((element) => {
    expect(screen.getByRole("button", { name: element.name, hidden: true })).toBeInTheDocument();
  });
});
