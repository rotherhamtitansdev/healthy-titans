import React from "react";
import { useGameStartedContext } from "./GameContext";

const GameModalScreen = () => {
  const { getModal, setModal, getModalContent } = useGameStartedContext();

  const handleOnClick = () => {
    setModal(false);
    if (getModalContent.buttonFunc) getModalContent.buttonFunc();
  }

  return (
    <div>
      {getModal
        && (
        <div className="justify-center items-center flex fixed inset-0 z-50 mx-2">
          <div className="relative w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="border-0 rounded-xl shadow-lg relative flex flex-col gap-y-6 bg-white outline-none focus:outline-none items-center px-10 py-4">
              <p data-testid="modal-title" className="text-titansDarkBlue font-semibold text-2xl sm:text-3xl lg:text-4xl">{getModalContent.title}</p>
              <p data-testid="modal-text" className="text-titansDarkBlue font-medium text-[20px]">{getModalContent.text}</p>
              <button
                type="button"
                className="text-xs sm:text-base lg:text-xl text-white font-bold w-44 h-11 rounded-full bg-titansBrightPink mb-6"
                onClick={handleOnClick}
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
