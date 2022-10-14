import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import FirebaseAPI from "../../api/FirebaseAPI";
import MenuCard from "./MenuCard";
import HomePageComponentsData from "../../data/HomePageComponentsData";
import { MenuCardProps } from "../../models/MenuCardProps";

const MockMenuCards = HomePageComponentsData as MenuCardProps[];

describe("Menu Card", () => {
  test("component renders with image", async () => {
    jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue("fruit.jpg");

    const mockItem = MockMenuCards[0];

    const { asFragment } = render(
      <MenuCard
        key={mockItem.key}
        name={mockItem.name}
        img={mockItem.img}
        path={mockItem.path}
        externalPath={mockItem.externalPath}
        firebaseName={mockItem.firebaseName}
        additionalStyling=""
      />,
      {
        wrapper: MemoryRouter
      }
    );

    expect(await screen.findByRole("img", { name: "Food & Nutrition" })).toHaveAttribute(
      "src",
      "fruit.jpg"
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("component renders and can click card", async () => {
    const mockItem = MockMenuCards[0];
    const onClick = jest.fn();

    render(
      <MenuCard
        key={mockItem.key}
        name={mockItem.name}
        img={mockItem.img}
        path={mockItem.path}
        externalPath={mockItem.externalPath}
        firebaseName={mockItem.firebaseName}
        additionalStyling=""
        onClick={onClick}
      />,
      {
        wrapper: MemoryRouter
      }
    );

    const clickableButton = await screen.findByRole("button", { name: "Food & Nutrition" });
    clickableButton.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});