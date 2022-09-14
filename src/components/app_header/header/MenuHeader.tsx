import React from "react";
import { HeaderProps } from "../../../models/HeaderProps";

const MenuHeader = (props: HeaderProps) => (
  <div className="flex flex-wrap h-[22rem]">
    <div className="mx-auto pt-[3rem] md:pt-[2rem]">
      <h1 className="text-titansDarkBlue font-quicksand font-bold text-center sm:mt-[1rem] text-3xl sm:text-5xl lg:text-6xl mt-8 pb-4">
        {props.title}
      </h1>
      <div className="font-quicksand font-medium text-homepageHeaderSubTitle text-sm md:text-base lg:text-xl text-center w-2/3 lg:w-[45rem] mx-auto">
        {props.body}
      </div>
    </div>
  </div>
);

export default MenuHeader;
