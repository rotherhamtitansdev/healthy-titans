import React from "react";
import { useGameStartedContext } from "./GameContext";

const GameModalScreen = () => {
  const { getModal, getModalContent } = useGameStartedContext();

  return (
    <div>
      {getModal
        && (
        <div className="justify-center items-center flex fixed inset-0 z-50 mx-2">
          <div className="relative w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="border-0 rounded-xl shadow-lg relative flex flex-col gap-y-6 bg-white outline-none focus:outline-none items-center px-10 py-4">
              <p data-testid="game-score" className="text-titansDarkBlue font-semibold text-[36px]">{getModalContent.title}</p>
              <p className="text-titansDarkBlue font-medium text-[20px]">{getModalContent.text}</p>
              <button
                type="button"
                className="text-[12px] text-white font-bold w-44 h-11 rounded-full bg-titansBrightPink mb-6"
                onClick={getModalContent.buttonFunc}
              >
                {getModalContent.buttonText}
              </button>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default GameModalScreen;
