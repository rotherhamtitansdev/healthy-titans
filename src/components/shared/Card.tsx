import React, { KeyboardEvent } from "react";
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

  const onKeyPress = (e: KeyboardEvent) => {
    if (props.card.onClick && (e.code === "Enter" || e.code === "Space")) {
      // Stops page scrolling when space is pressed
      e.preventDefault();
      props.card.onClick();
    }
  };

  return props.card.onClick ? (
    <div  
      onClick={props.card.onClick}
      onKeyDown={onKeyPress}
      role="button"
      tabIndex={0}
      className={getClassName()}
      data-testid={props.card.name}
    >
      {props.children}
    </div>
  ) : (
    <div data-testid={props.card.name} className={getClassName()}>
      {props.children}
    </div>
  );
};

export default Card;
