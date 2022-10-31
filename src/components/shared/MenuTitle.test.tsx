import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import MenuTitle from "./MenuTitle";
import { MenuTitleProps } from "../../models/MenuTitleProps";

describe("MenuTitle component", () => {
  test("renders with title and breadcrumbs with no subtitle", () => {
    const menuTitleProps: MenuTitleProps = {
      title: "My Test Title",
    };

    render(<MenuTitle title={menuTitleProps.title} />, { wrapper: MemoryRouter });

    expect(screen.getByText(menuTitleProps.title)).toBeVisible();
    expect(screen.getByTestId("breadcrumbs")).toBeVisible();
  });

  test("renders with title and subtitle and no breadcrumbs", () => {
    const menuTitleProps: MenuTitleProps = {
      title: "My Test Title",
      subtitle: "My Test Subtitle",
    };

    render(<MenuTitle title={menuTitleProps.title} subtitle={menuTitleProps.subtitle} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText(menuTitleProps.title)).toBeVisible();
    expect(screen.getByText(menuTitleProps.subtitle!)).toBeVisible();
    expect(screen.queryByTestId("breadcrumbs")).not.toBeInTheDocument();
  });
});
