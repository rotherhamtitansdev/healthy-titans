import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import React from "react";
import CarouselMenu from "./CarouselMenu";
import { HomePageCarouselResponsiveConfig } from "../../config/CarouselConfig";
import FirebaseAPI from "../../api/FirebaseAPI";
import { MenuCardProps } from "../../models/MenuCardProps";

const MockMenuCards = [
  {
    key: 0,
    name: "Mock Card 1",
    path: "/mock-path-1",
    firebaseName: "MockImages/mock-card-1.jpg",
  },
  {
    key: 1,
    name: "Mock Card 2",
    path: "/mock-path-2",
    firebaseName: "MockImages/mock-card-2.jpg",
  },
  {
    key: 2,
    name: "Mock Card 3",
    path: "/mock-path-3",
    firebaseName: "MockImages/mock-card-3.jpg",
  },
  {
    key: 3,
    name: "Mock Card 4",
    path: "/mock-path-4",
    firebaseName: "MockImages/mock-card-4.jpg",
  },
  {
    key: 4,
    name: "Mock Card 5",
    path: "/mock-path-5",
    firebaseName: "MockImages/mock-card-5.jpg",
  },
] as MenuCardProps[];

beforeEach(() => {
  jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue("fruit.jpg");

  // define width for carousel to appear
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get: () => 100,
    },
  });
});

describe("Carousel Menu", () => {
  test("component renders", async () => {
    const { asFragment } = render(
      <CarouselMenu
        cards={MockMenuCards}
        config={HomePageCarouselResponsiveConfig}
        renderArrowsWhenDisabled
      />,
      { wrapper: MemoryRouter }
    );

    // check image is in document
    expect(
      await screen.findByRole("img", {
        name: "Mock Card 1",
      })
    ).toBeInTheDocument();

    // check if the div with the test id is in the document
    expect(await screen.findByTestId("Mock Card 1")).toBeInTheDocument();

    // check image source is the same as our mock
    expect(
      await screen.findByRole("img", {
        name: "Mock Card 1",
      })
    ).toHaveAttribute("src", "fruit.jpg");

    // check image alt text matches
    expect(
      await screen.findByRole("img", {
        name: "Mock Card 1",
      })
    ).toHaveAttribute("alt", "Mock Card 1");

    // check fragment matches snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  test("component renders with no cards", async () => {
    render(
      <CarouselMenu
        cards={[]}
        config={HomePageCarouselResponsiveConfig}
        renderArrowsWhenDisabled
      />,
      { wrapper: MemoryRouter }
    );

    // check image is not in document
    expect(
      await screen.queryByRole("img", {
        name: "Mock Card 1",
      })
    ).not.toBeInTheDocument();
  });

  test("component renders with both arrows", async () => {
    render(
      <CarouselMenu
        cards={MockMenuCards}
        config={HomePageCarouselResponsiveConfig}
        renderArrowsWhenDisabled
      />,
      { wrapper: MemoryRouter }
    );

    expect(
      await screen.findByRole("button", {
        name: "Go to previous slide",
      })
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("button", {
        name: "Go to next slide",
      })
    ).toBeInTheDocument();
  });

  test("component renders with only 1 arrow", async () => {
    // if we have renderArrowsWhenDisabled set to false, then we should only see 1 arrow
    render(
      <CarouselMenu
        cards={MockMenuCards}
        config={HomePageCarouselResponsiveConfig}
        renderArrowsWhenDisabled={false}
      />,
      { wrapper: MemoryRouter }
    );

    expect(
      screen.queryByRole("button", {
        name: "Go to previous slide",
      })
    ).not.toBeInTheDocument();

    expect(
      await screen.findByRole("button", {
        name: "Go to next slide",
      })
    ).toBeInTheDocument();
  });
});
