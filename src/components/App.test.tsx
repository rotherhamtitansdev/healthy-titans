import "@testing-library/jest-dom";
import {
  act,
  cleanup, render, screen
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MemoryRouter, Route } from "react-router";
import FirebaseAPI from "../api/FirebaseAPI";
import HomePageComponentsData from "../data/HomePageComponentsData";
import TestWrapper from "../tests/TestWrapper";
import App from "./App";
import HomePageComponents from "./HomePageComponents";


afterEach(() => {
  cleanup();
});

beforeEach(() => {
  // Define width so carousel on homepage loads
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get: () => 100,
    },
  });

  jest.spyOn(FirebaseAPI, "fetchFoodDetailsSingle").mockImplementation(() => Promise.resolve({
    name: "Beef",
    description:
      "Beef is a very good source of protein and can be bought and cooked in many different ways...",
    firebaseName: "FoodCategories/Meat/Food/Beef.svg",
    category: "Meat",
    facts: [
      "Source of PROTEIN and FAT",
      "Great source of IRON which helps make our red blood cells which carry oxygen round our body.",
      "Good source of some B-complex vitamins which help the body convert food into fuel. VITAMIN B12, B6 & B3",
      "VITAMIN B12 which contributes to healthy nerve cells, production of DNA and red blood cell production",
      "VITAMIN B6 plays a role in brain development and function plus making hormones",
      "Source of PHOSPHORUS, an essential mineral that plays an important role in biological processes",
      "Source of SELENIUM which works closely with VITAMIN E which acts as an antioxidant to prevent cell damage",
      "Good source of ZINC which is important for growth and development. Zinc helps make enzymes for digestion.",
    ],
    score: 9,
  }));
});

test("home page renders", async () => {
  render(
    <TestWrapper>
      <Route path="/" element={<HomePageComponents />} />
    </TestWrapper>,
  );

  HomePageComponentsData.forEach(element =>  {
    expect(screen.getByText(element.name)).toBeInTheDocument();
  });
});

test.skip("navigate to beef nutritional endpoint", async () => {
  const user = userEvent.setup();
  await act(async () => {
    await render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });

  const nutritionalInformation = screen.getByTestId("Food & Nutrition");
  expect(nutritionalInformation).toBeInTheDocument();
  await user.click(nutritionalInformation);

  const meat = screen.getByTestId("Meat");
  expect(meat).toBeInTheDocument();
  await user.click(meat);

  const beef = screen.getByTestId("Beef");
  expect(beef).toBeInTheDocument();
  await user.click(beef);

  const beefDetails = screen.getByTestId("Beef-details");
  expect(beefDetails).toBeInTheDocument();
});

test.skip("navigate to cod nutritional endpoint", async () => {
  jest.spyOn(FirebaseAPI, "fetchFoodDetailsSingle").mockImplementation(() => Promise.resolve({
    name: "Cod",
    description:
      "Cod are usually around 50cm long and can be found in the Pacific and Atlantic Oceans",
    firebaseName: "FoodCategories/Fish/Food/Cod.svg",
    category: "Fish",
    facts: [
      "Good source of some B-complex vitamins which help the body convert food into fuel. VITAMIN B12, B6 & B3",
      "VITAMIN B12 which contributes to healthy nerve cells, production of DNA and red blood cell production",
      "VITAMIN B6 plays a role in brain development and function plus making hormones",
      "Great source of PROTEIN",
      "Source of PHOSPHORUS, an essential mineral that plays an important role in biological processes",
      "Good source of SELENIUM which works closely with VITAMIN E which acts as an antioxidant to prevent cell damage",
    ],
    score: 7,
  }));
  const user = userEvent.setup();
  await act(async () => {
    await render(

      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });

  const nutritionalInformation = screen.getByTestId("Food & Nutrition");
  expect(nutritionalInformation).toBeInTheDocument();
  await user.click(nutritionalInformation);

  const fish = screen.getByTestId("Fish");
  expect(fish).toBeInTheDocument();
  await user.click(fish);

  const cod = screen.getByTestId("Cod");
  expect(cod).toBeInTheDocument();
  await user.click(cod);

  const codDetails = screen.getByTestId("Cod-details");
  expect(codDetails).toBeInTheDocument();
});
