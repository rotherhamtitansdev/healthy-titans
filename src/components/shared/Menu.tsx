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
    return "grid grid-cols-2 p-4 lg:grid-cols-auto lg:px-20 2xl:px-36 lg:py-10 gap-[0.5rem] md:gap-y-[1rem] lg:gap-y-[3rem]";
  }

  const cardList = props.cards.map((item) => (
    <MenuCard
      key={item.key}
      name={item.name}
      description={item.description}
      img={item.img}
      path={item.path}
      externalPath={item.externalPath}
      additionalStyling={smallMenu ? "" : "lg:w-[17rem] xl:w-[21rem] xl:h-[21rem] 2xl:w-[25rem] 2xl:h-[25rem]"}
      firebaseName={item.firebaseName}
    />
  ));

  return (
    <>
      {props.header ? (
        <AppHeader>
          <MenuHeader title={props.header.title} body={props.header.body} />
        </AppHeader>
      ) : null}
      <div className="p-5 md:p-10 pb-20">
        {props.title ? (
          <MenuTitle
            title={props.title.title}
            subtitle={props.title.subtitle}
          />
        ) : null}
        <div className={getStyling()}>
          {cardList}
          {!smallMenu ? (
            <div className="grid col-span-2 lg:col-span-3 ">
              {props.children}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Menu;
