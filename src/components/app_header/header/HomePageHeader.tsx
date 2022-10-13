import React from "react";

import HomePageHeaderImages from "./HomePageHeaderImages";
import { useGlobalMenuOpenContext } from "../AppHeaderContext";

const HomepageHeader = () => {
  const { isMenuOpen } = useGlobalMenuOpenContext();

  return (
    <div className="flex flex-wrap h-[30rem]">
      <HomePageHeaderImages />
      <div
        className={
          isMenuOpen
            ? "w-full pb-2 xs:pb-0 xs:h-[28.5rem] xs:mt-2 md:mt-10"
            : "w-full pb-2 xs:pb-0 xs:h-[28.5rem] -mt-10 xs:mt-2 md:mt-10"
        }
      >
        <h1 className="text-titansDarkBlue font-bold text-center text-[32px] md:text-[48px] lg:text-[64px] font-bold mx-14 sm:mx-20 sm:mx-0">
          Making healthy choices
        </h1>
        <div className="text-[16px] md:text-[20px] font-semibold text-homepageHeaderSubTitle text-center mt-2 lg:mt-8 mx-28 mx-24 sm:mx-0">
          We can help you learn everything about food. Here we will:
        </div>
        <div className="text-center w-full text-gray-500 text-m mt-8">
          <ul className="space-y-6 pb-4 text-homepageHeaderText font-medium">
            <li>
              <span className="mr-3 text-titansBrightPink">✓</span>
              Learn about food and nutritional information
            </li>
            <li className="">
              <span className="mr-3 text-titansBrightPink">✓</span>
              Play games and compete with your friends
            </li>
            <li className="">
              <span className="mr-3 text-titansBrightPink">✓</span>
              Watch videos and find delicious recipes
            </li>
          </ul>
          <br />
          <button
            type="button"
            className="font-bold bg-titansBrightPink text-white font-bold py-2 px-8 rounded-full"
            onClick={() => {
              window.scrollTo({
                top: 400,
                behavior: "smooth"
              });
            }}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageHeader;
