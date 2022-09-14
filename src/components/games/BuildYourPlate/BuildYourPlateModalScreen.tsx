import React from "react";
import { useFYPStartedContext } from "./BuildYourPlateContext";

const BuildYourPlateModalScreen = () => {
  const { getModal, setModal } = useFYPStartedContext();

  return (
    <div>
      {getModal
        && (
        <div className="justify-center items-center flex fixed inset-0 z-50 mx-2">
          <div className="relative w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="border-0 rounded-xl shadow-lg relative flex flex-col gap-y-6 bg-white outline-none focus:outline-none items-center font-quicksand px-10 py-4">
              <p className="text-titansDarkBlue font-semibold text-[36px]">How to play</p>
              <p className="text-titansDarkBlue font-medium text-[20px]">Open a food category and select a food. You must select 5 foods to score your plate. The aim of the game is to build a healthy plate. </p>
              <button
                type="button"
                className="text-[12px] text-white font-bold w-44 h-11 rounded-full bg-titansBrightPink mb-6"
                onClick={() => {
                  setModal(!getModal);
                }}
              >
                Play
              </button>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default BuildYourPlateModalScreen;
