import "@testing-library/jest-dom";
import { act, cleanup, render, screen } from "@testing-library/react";
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

  jest
    .spyOn(FirebaseAPI, "fetchFoodDetailsSingle")
    .mockImplementation(() => Promise.resolve({ name: "Beef" }));
});

test("home page renders", async () => {
  render(
    <TestWrapper>
      <Route path="/" element={<HomePageComponents />} />
    </TestWrapper>
  );

  HomePageComponentsData.forEach((element) => {
    expect(screen.getByText(element.name)).toBeInTheDocument();
  });
});

test.skip("navigate to beef nutritional endpoint", async () => {
  const user = userEvent.setup();
  await act(async () => {
    await render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
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
  jest
    .spyOn(FirebaseAPI, "fetchFoodDetailsSingle")
    .mockImplementation(() => Promise.resolve({ name: "Cod" }));
  const user = userEvent.setup();
  await act(async () => {
    await render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
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
