import React from "react";
import { MenuTitleProps } from "../../models/MenuTitleProps";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const MenuTitle = (props: MenuTitleProps) => (
  <div className="md:px-5">
    <div className="font-semibold font-quicksand text-[#243A73] text-2xl md:text-3xl lg:text-4xl py-5">{props.title}</div>
    {props.subtitle ? <div className="font-medium font-quicksand text-[#243A73] md:text-xl lg:text-xl md:pb-5">{props.subtitle}</div>
      : <Breadcrumbs styling="font-medium md:text-xl lg:text-xl pb-5" />}
  </div>
);
export default MenuTitle;
