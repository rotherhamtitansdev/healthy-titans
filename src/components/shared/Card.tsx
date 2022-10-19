import React from "react";
import "../../App.css";
import { CardProps } from "../../models/CardProps";

/*
 * This is a shared card component for use throughout the application
 * */
const Card = (props: { card: CardProps; children: React.ReactNode }) => {
  // Adds expand on hover to cards that do something on click
  function getHoverStyling(isButton: boolean): string {
    return isButton
      ? " hover:cursor-grab hover:-translate-y-0.5 hover:scale-105 duration-300"
      : " hover:cursor-default";
  }

  function getClassName(): string {
    const baseStyling = "bg-white font-quicksand table align-middle rounded-3xl shadow-lg ";
    return (
      baseStyling + (props.card.additionalStyling || "") + getHoverStyling(!!props.card.onClick)
    );
  }

  return props.card.onClick ? (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={props.card.onClick}
      role="button"
      tabIndex={0}
      className={getClassName()}
      data-testid={props.card.name}
    >
      {props.children}
    </div>
  ) : (
    <div data-testid={props.card.name} tabIndex={0} role="button" className={getClassName()}>
      {props.children}
    </div>
  );
};

export default Card;
