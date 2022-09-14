import React, { useCallback } from "react";
import { useFYPStartedContext } from "./BuildYourPlateContext";

/* eslint-disable */

const BuildYourPlateStartScreen = () => {
  const { getIsFYPStarted, setIsFYPStarted } = useFYPStartedContext();

  const toggleFYPStarted = useCallback(() => {
    setIsFYPStarted(!getIsFYPStarted);
  }, [getIsFYPStarted]);

  return (
    <div className="font-quicksand bg-white h-full md: rounded-xl shadow-lg my-10 p-11 sm:p-0 pointer-events-auto sm:pointer-events-none" onClick={toggleFYPStarted}>
      <div className="bg-byp_background bg-contain bg-no-repeat bg-center md:bg-[center_bottom_3rem] w-full h-[220px] sm:h-[580px] md:h-[640px]">
        <div className="h-full flex flex-col">
          <h1 className="font-bold text-titansDarkBlue w-fit h-fit text-[28px] xs:text-[32px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[128px] mt-auto mx-auto">
            Build your plate
          </h1>
          <button
            type="button"
            className="pointer-events-auto hidden sm:block text-[12px] bg-titansBrightPink text-white font-bold  w-44 h-11 rounded-full mb-4 md:mb-10 mt-auto mx-auto"
            onClick={toggleFYPStarted}
          >
            BEGIN
          </button>
          <p
            className="sm:hidden text-[14px] text-titansDarkBlue font-medium text-center w-44 h-11 rounded-full mb-12 mx-auto"
          >
            Press to begin
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildYourPlateStartScreen;
