import React from "react";
import { HeaderProps } from "./HeaderProps";
import { MenuCardProps } from "./MenuCardProps";
import { MenuTitleProps } from "./MenuTitleProps";

export interface MenuProps {
  header?: HeaderProps;
  cards: MenuCardProps[];
  title?: MenuTitleProps;
  children?: React.ReactNode;
}
