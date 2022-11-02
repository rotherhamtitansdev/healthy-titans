import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import FirebaseAPI from "../api/FirebaseAPI";
import { MenuCardProps } from "../models/MenuCardProps";
import App from "./App";

const mockHomeContent: MenuCardProps[] = [
  {
    key: 0,
    name: "Food & Nutrition",
    path: "/FoodAndNutrition",
    firebaseName: "HomePageImages/apple.svg",
  },
  {
    key: 1,
    name: "Fitness Challenges",
    path: "/FitnessChallenges",
    firebaseName: "HomePageImages/running.svg",
  },
  {
    key: 2,
    name: "Games",
    path: "/Games",
    firebaseName: "HomePageImages/games.svg",
  },
  {
    key: 3,
    name: "Videos",
    path: "/Videos",
    firebaseName: "HomePageImages/film.svg",
  },
  {
    key: 4,
    name: "Recipes",
    path: "/Recipes",
    firebaseName: "HomePageImages/notepad.svg",
  },
];

test("home page renders", async () => {
  // Define width so carousel on homepage loads
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get: () => 100,
    },
  });
  jest.spyOn(FirebaseAPI, "fetchDataFromPath").mockResolvedValue(mockHomeContent);

  render(<App />, { wrapper: MemoryRouter });

  expect(await screen.findByRole("button", { name: "Get started" })).toBeVisible();
  mockHomeContent.forEach(async (element) => {
    expect(
      await screen.findByRole("button", { name: element.name, hidden: true })
    ).toBeInTheDocument();
  });
});
