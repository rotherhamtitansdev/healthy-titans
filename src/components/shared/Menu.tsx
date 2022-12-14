import React from "react";
import { MenuProps } from "../../models/MenuProps";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import MenuCard from "./MenuCard";
import MenuTitle from "./MenuTitle";

const Menu = (props: MenuProps) => {
  const smallMenu: boolean = props.cards.length < 3;

  function getStylingForCard(index: number) {
    if (!smallMenu) {
      let styling = "lg:w-[17rem] xl:w-[21rem] xl:h-[21rem] 2xl:w-[25rem] 2xl:h-[25rem]";
      if (index === props.cards.length - 1 && props.cards.length % 2 !== 0) {
        styling += " col-span-2 mx-[25%] lg:col-span-1 lg:mx-0";
      }
      if (props.displaySingleColumnMobile) {
        if (index === props.cards.length - 1 && props.cards.length % 2 !== 0) {
          return "w-full my-5 md:my-0 lg:w-[17rem] xl:w-[21rem] xl:h-[21rem] 2xl:w-[25rem] 2xl:h-[25rem] md:ml-[50%] lg:ml-0";
        }
        return "w-full my-5 md:my-0 lg:w-[17rem] xl:w-[21rem] xl:h-[21rem] 2xl:w-[25rem] 2xl:h-[25rem]";
      }
      return styling;
    }
    return "";
  }

  function getStyling() {
    if (props.displaySingleColumnMobile) {
      return "px-5 md:py-0 py-5 md:py-0 md:grid md:grid-cols-2 lg:grid-cols-auto lg:px-14 xl:px-20 2xl:px-30 3xl:px-36 lg:py-10 md:gap-[0.5rem] md:gap-y-[1rem] lg:gap-y-[3rem]";
    }

    if (smallMenu) {
      return "px-5 py-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-6";
    }
    return "grid grid-cols-2 xs:p-4 lg:grid-cols-auto lg:px-14 xl:px-20 2xl:px-30 3xl:px-36 lg:py-10 gap-[0.5rem] md:gap-y-[1rem] lg:gap-y-[3rem]";
  }

  const cardList = props.cards
    .sort((n1, n2) => n1.key - n2.key)
    .map((item, index) => (
      <MenuCard
        key={item.key}
        name={item.name}
        img={item.img}
        path={item.path}
        externalPath={item.externalPath}
        additionalStyling={getStylingForCard(index)}
        firebaseName={item.firebaseName}
      />
    ));

  return (
    <div className={props.containerStyles}>
      {props.header && (
        <AppHeader>
          <MenuHeader title={props.header.title} body={props.header.body} />
        </AppHeader>
      )}
      <div className="p-5 md:p-10 pb-20">
        {props.title && <MenuTitle title={props.title.title} subtitle={props.title.subtitle} />}
        <div data-testid="menu-styling" className={getStyling()}>
          {cardList}
          {!smallMenu && <div className="grid col-span-2 lg:col-span-3 ">{props.children}</div>}
        </div>
      </div>
    </div>
  );
};
export default Menu;
