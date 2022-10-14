import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import FirebaseAPI from "../../api/FirebaseAPI";
import MenuCard from "./MenuCard";
import { MenuCardProps } from "../../models/MenuCardProps";

const MockMenuCard =
  {
    key: 0,
    name: "Mock Card 1",
    path: "/mock-path-1",
    firebaseName: "MockImages/mock-card-1.jpg"
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
        img={MockMenuCard.img}
        path={MockMenuCard.path}
        externalPath={MockMenuCard.externalPath}
        firebaseName={MockMenuCard.firebaseName}
        additionalStyling=""
        disableOnClick
      />,
      {
        wrapper: MemoryRouter
      }
    );

    expect(await screen.findByRole("img", { name: "Mock Card 1" })).toHaveAttribute(
      "src",
      "fruit.jpg"
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("component renders and can click card", async () => {
    const onClick = jest.fn();

    render(
      <MenuCard
        key={MockMenuCard.key}
        name={MockMenuCard.name}
        img={MockMenuCard.img}
        path={MockMenuCard.path}
        externalPath={MockMenuCard.externalPath}
        firebaseName={MockMenuCard.firebaseName}
        additionalStyling=""
        onClick={onClick}
      />,
      {
        wrapper: MemoryRouter
      }
    );

    const clickableButton = await screen.findByRole("button", { name: "Mock Card 1" });
    clickableButton.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});