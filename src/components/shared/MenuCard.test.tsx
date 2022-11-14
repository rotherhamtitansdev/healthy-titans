import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import * as FirebaseAPI from "../../api/FirebaseAPI";
import MenuCard from "./MenuCard";
import { MenuCardProps } from "../../models/MenuCardProps";

const MockMenuCard = {
  key: 0,
  name: "Mock Card 1",
  path: "/mock-path-1",
  firebaseName: "MockImages/mock-card-1.jpg",
} as MenuCardProps;

beforeEach(() => {
  jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue("fruit.jpg");
});

describe("Menu Card", () => {
  test("component renders with image", async () => {
    const { asFragment } = render(
      <MenuCard
        key={MockMenuCard.key}
        name={MockMenuCard.name}
        path={MockMenuCard.path}
        externalPath={MockMenuCard.externalPath}
        firebaseName="MockImages/mock-card-1.jpg"
        additionalStyling=""
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    expect(await screen.findByRole("img", { name: "" })).toHaveAttribute("src", "fruit.jpg");
    expect(asFragment()).toMatchSnapshot();
  });

  test("component renders with no firebase", async () => {
    render(
      <MenuCard
        key={MockMenuCard.key}
        name={MockMenuCard.name}
        img="fruit.jpg"
        path={MockMenuCard.path}
        externalPath={MockMenuCard.externalPath}
        additionalStyling=""
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    expect(await screen.findByRole("img", { name: "" })).toHaveAttribute("src", "fruit.jpg");
  });

  test("component renders and can click card", async () => {
    const user = userEvent.setup();

    render(
      <MenuCard
        key={MockMenuCard.key}
        name={MockMenuCard.name}
        img={MockMenuCard.img}
        path={MockMenuCard.path}
        externalPath={MockMenuCard.externalPath}
        firebaseName={MockMenuCard.firebaseName}
        additionalStyling=""
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    user.click(await screen.findByRole("button", { name: "Mock Card 1" }));
    waitFor(() => expect(window.location.pathname).toBe("/mock-path-1"));
  });

  test("component renders and can not click card", async () => {
    const user = userEvent.setup();

    render(
      <MenuCard
        key={MockMenuCard.key}
        name={MockMenuCard.name}
        img={MockMenuCard.img}
        path={MockMenuCard.path}
        externalPath={MockMenuCard.externalPath}
        firebaseName={MockMenuCard.firebaseName}
        disableOnClick
        additionalStyling=""
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    user.click(await screen.findByRole("button", { name: "Mock Card 1" }));
    waitFor(() => expect(window.location.pathname).toBe("/"));
  });
});
