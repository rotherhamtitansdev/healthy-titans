import React from "react";
import {
  cleanup,
  fireEvent, render, screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router";
import HomePageComponents from "./HomePageComponents";
import TestWrapper from "../tests/TestWrapper";
import HomePageComponentsData from "../data/HomePageComponentsData";
import App from "./App";

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
});

test("home page renders", () => {
  render(
    <TestWrapper>
      <Route path="/" element={<HomePageComponents />} />
    </TestWrapper>,
  );

  // eslint-disable-next-line no-restricted-syntax
  for (const element of HomePageComponentsData) {
    expect(screen.getByText(element.name)).toBeInTheDocument();
  }
});

test("navigate to beef nutritional endpoint", () => {
  const home = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const nutritionalInformation = home.getByTestId("Food & Nutrition");
  expect(nutritionalInformation).toBeInTheDocument();
  fireEvent.click(nutritionalInformation);

  const meat = screen.getByTestId("Meat");
  expect(meat).toBeInTheDocument();
  fireEvent.click(meat);

  const beef = screen.getByTestId("Beef");
  expect(beef).toBeInTheDocument();
  fireEvent.click(beef);

  const finalBeef = screen.getByTestId("Beef");
  expect(finalBeef).toBeInTheDocument();
  fireEvent.click(finalBeef);
});

test("navigate to  nutritional endpoint", () => {
  const home = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const nutritionalInformation = home.getByTestId("Food & Nutrition");
  expect(nutritionalInformation).toBeInTheDocument();
  fireEvent.click(nutritionalInformation);

  const fish = screen.getByTestId("Fish");
  expect(fish).toBeInTheDocument();
  fireEvent.click(fish);

  const finalBeef = screen.getByTestId("Cod");
  expect(finalBeef).toBeInTheDocument();
  fireEvent.click(finalBeef);
});
