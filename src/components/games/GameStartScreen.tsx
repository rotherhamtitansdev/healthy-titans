import React, { useCallback } from "react";
import { useGameStartedContext } from "./GameContext";

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
const GameStartScreen = (props: { name: string, background: string }) => {
  const { getIsGameStarted, setIsGameStarted } = useGameStartedContext();

  const toggleGameStarted = useCallback(() => {
    setIsGameStarted(!getIsGameStarted);
  }, [getIsGameStarted]);

  return (
    <div className="bg-white h-full md: rounded-xl shadow-lg my-10 p-11 sm:p-0 pointer-events-auto sm:pointer-events-none" onClick={toggleGameStarted}>
      <div className={`bg-no-repeat bg-center md:bg-[center_bottom_7rem] w-full h-[220px] sm:h-[580px] md:h-[640px]} ${props.background}`}>
        <div className="h-full flex flex-col">
          <h1 className="font-bold text-titansDarkBlue w-fit h-fit text-[28px] xs:text-[32px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[128px] mt-auto mx-auto">
            {props.name}
          </h1>
          <button
            type="button"
            className="pointer-events-auto hidden sm:block text-[12px] bg-titansBrightPink text-white font-bold  w-44 h-11 rounded-full mb-4 md:mb-10 mt-auto mx-auto"
            onClick={toggleGameStarted}
            data-testid="game-begin"
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

export default GameStartScreen;
