import React from "react";
import { MenuProps } from "../../models/MenuProps";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import MenuCard from "./MenuCard";
import MenuTitle from "./MenuTitle";

const Menu = (props: MenuProps) => {
  const smallMenu: boolean = props.cards.length < 3;

  function getStyling() {
    if (smallMenu) {
      return "px-5 py-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-6";
    }
    return "grid grid-cols-2 p-4 md:grid-cols-2 lg:grid-cols-3 lg:px-20 2xl:px-36 2xl:gap-x-0 lg:py-10 lg:gap-[3rem] md:gap-[1rem] gap-[0.5rem]";
  }

  const cardList = props.cards.map((item) => (
    <MenuCard
      key={item.key}
      name={item.name}
      description={item.description}
      img={item.img}
      path={item.path}
      externalPath={item.externalPath}
      additionalStyling={smallMenu ? "" : "lg:w-[336px] lg:h-[336px] 2xl:w-[400px] 2xl:h-[400px]"}
      firebaseName={item.firebaseName}
    />
  ));

  return (
    <>
      <AppHeader>
        <MenuHeader title={props.header.title} body={props.header.body} />
      </AppHeader>
      <div className="p-5 md:p-10 pb-20">
        {props.title ? (
          <MenuTitle
            title={props.title.title}
            subtitle={props.title.subtitle}
          />
        ) : null}
        <div className={getStyling()}>{cardList}</div>
      </div>
    </>
  );
};
export default Menu;
