import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Menu from "./Menu";
import { MenuProps } from "../../models/MenuProps";

describe("Menu Component", () => {
  test("if component renders header, card, title, but not children (less than 3 cards)", () => {
    const mockProps: MenuProps = {
      header: { title: "Test First Title", body: "Test Body Title" },
      cards: [{ key: 1, name: "Test Card Name 1", path: "https://www.bbc.co.uk/" }],
      title: { title: "Test Second Title" }
    };
    const { asFragment } = render(
      <Menu cards={mockProps.cards} header={mockProps.header} title={mockProps.title}>
        <h1>Hello</h1>
      </Menu>,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByRole("heading", {name: "Test First Title"})).toBeVisible();
    expect(screen.getByText("Test Second Title")).toBeVisible();
    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("if component renders header, card, title, and children (3+ cards)", () => {
    const mockProps: MenuProps = {
      header: { title: "Test First Title", body: "Test Body Title" },
      cards: [{ key: 1, name: "Test Card Name 1", path: "https://www.bbc.co.uk/" },{ key: 2, name: "Test Card Name 2", path: "https://www.google.co.uk/" },{ key: 3, name: "Test Card Name 3", path: "https://www.yahoo.co.uk/" }],
      title: { title: "Test Second Title" }
    };
    const { asFragment } = render(
      <Menu cards={mockProps.cards} header={mockProps.header} title={mockProps.title}>
        <h1>Hello</h1>
      </Menu>,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByRole("heading", {name: "Test First Title"})).toBeVisible();
    expect(screen.getByText("Test Second Title")).toBeVisible();
    expect(screen.getByText("Hello")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  test("if component renders only cards, no header or title", () => {
    const mockProps: MenuProps = {
      cards: [{ key: 1, name: "Test Card Name 1", path: "https://www.bbc.co.uk/" },{ key: 2, name: "Test Card Name 2", path: "https://www.google.co.uk/" },{ key: 3, name: "Test Card Name 3", path: "https://www.yahoo.co.uk/" }],
    };
    const { asFragment } = render(
      <Menu cards={mockProps.cards} />,
      { wrapper: MemoryRouter }
    );
    
    expect(screen.getByText("Test Card Name 1")).toBeVisible();
    expect(screen.getByText("Test Card Name 2")).toBeVisible();
    expect(screen.getByText("Test Card Name 3")).toBeVisible();
    expect(screen.queryByTestId("header-title")).not.toBeInTheDocument();
    expect(screen.queryByTestId("menutitle-title")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("if conditional styling is applied, less than 3 cards", () => {
    const mockProps: MenuProps = {
      header: { title: "Test First Title", body: "Test Body Title" },
      cards: [{ key: 1, name: "Test Card Name 1", path: "https://www.bbc.co.uk/" }],
      title: { title: "Test Second Title" }
    };
    const { asFragment } = render(
      <Menu cards={mockProps.cards} header={mockProps.header} title={mockProps.title}>
        <h1>Hello</h1>
      </Menu>,
      { wrapper: MemoryRouter }
    );
    
    expect(screen.getByTestId("menu-styling")).toHaveClass("px-5 py-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-6")
    expect(asFragment()).toMatchSnapshot();
  });

  test("if conditional styling is applied, 3+ cards", () => {
    const mockProps: MenuProps = {
      header: { title: "Test First Title", body: "Test Body Title" },
      cards: [{ key: 1, name: "Test Card Name 1", path: "https://www.bbc.co.uk/" },{ key: 2, name: "Test Card Name 2", path: "https://www.google.co.uk/" },{ key: 3, name: "Test Card Name 3", path: "https://www.yahoo.co.uk/" }],
      title: { title: "Test Second Title" }
    };
    const { asFragment } = render(
      <Menu cards={mockProps.cards} header={mockProps.header} title={mockProps.title}>
        <h1>Hello</h1>
      </Menu>,
      { wrapper: MemoryRouter }
    );
    
    expect(screen.getByTestId("menu-styling")).toHaveClass("grid grid-cols-2 xs:p-4 lg:grid-cols-auto lg:px-14 xl:px-20 2xl:px-30 3xl:px-36 lg:py-10 gap-[0.5rem] md:gap-y-[1rem] lg:gap-y-[3rem]")
    expect(screen.getByTestId(mockProps.cards[0].name)).toHaveClass("lg:w-[17rem] xl:w-[21rem] xl:h-[21rem] 2xl:w-[25rem] 2xl:h-[25rem]")
    expect(screen.getByTestId(mockProps.cards[1].name)).toHaveClass("lg:w-[17rem] xl:w-[21rem] xl:h-[21rem] 2xl:w-[25rem] 2xl:h-[25rem]")
    expect(screen.getByTestId(mockProps.cards[2].name)).toHaveClass("lg:w-[17rem] xl:w-[21rem] xl:h-[21rem] 2xl:w-[25rem] 2xl:h-[25rem] col-span-2 mx-[25%] lg:col-span-1 lg:mx-0")
    expect(asFragment()).toMatchSnapshot();
  });
});
