import { render, screen } from "@testing-library/react";
import React from "react";

import userEvent from "@testing-library/user-event";
import { CardProps } from "../../models/CardProps";
import Card from "./Card";

describe("Card component", () => {
  test("render with child contents and additional classes", () => {
    const additionalClasses = "my-class my-other-class";
    const cardProps: CardProps = {
      name: "TestCard",
      additionalStyling: additionalClasses,
    };

    const { container } = render(
      <Card card={cardProps}>
        <p>My Test Card Contents</p>
      </Card>
    );

    expect(screen.getByText("My Test Card Contents")).toBeVisible();
    expect(container.firstChild).toHaveClass("my-class");
    expect(container.firstChild).toHaveClass("my-other-class");
  });

  test("triggers onClick callback on card click", () => {
    const mockOnClick = jest.fn();
    const cardProps: CardProps = {
      name: "Clickable Test Card",
      onClick: mockOnClick,
    };

    render(
      <Card card={cardProps}>
        <p>My Clickable Test Card Contents</p>
      </Card>
    );

    screen.getByRole("button").click();
    expect(mockOnClick).toBeCalledTimes(1);
  });

  test.each([
    ["[Enter]"],
    ["[Space]"],
  ])("should trigger onClick callback when key pressed", async (keyPress: string) => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    const cardProps: CardProps = {
      name: "Clickable Test Card",
      onClick: mockOnClick,
    };

    render(
      <Card card={cardProps}>
        <p>My Clickable Test Card Contents</p>
      </Card>
    );

    screen.getByRole("button").focus();
    await user.keyboard(keyPress);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
