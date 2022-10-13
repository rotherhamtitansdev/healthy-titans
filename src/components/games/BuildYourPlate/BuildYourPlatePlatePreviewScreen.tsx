import React from "react";
import { BYPItem } from "../../../models/BYP/BYP";
import { useGameStartedContext } from "../GameContext";
import BuildYourPlateProcessor from "./BuildYourPlateProcessor";

const BuildYourPlatePlatePreviewScreen = (props: {
  getPlateImage: string | undefined;
  getBYPPlateData: BYPItem[];
  removeFromPlate: (item: BYPItem[]) => void;
}) => {
  const { setMobilePreviewScreenFlag, setModal, setModalContent } = useGameStartedContext();

  return (
    <div className="w-full h-full">
      <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-fit md:h-fit mx-auto relative">
        <img src={props.getPlateImage} alt="plate" />
        <div className="absolute top-1/2 left-1/2 -mt-[50px] -ml-[14px] sm:-mt-[70px] sm:-ml-[19px] md:-mt-[85px] md:-ml-[24px]">
          {props.getBYPPlateData[0].icon}
        </div>
        <div className="absolute top-1/2 left-1/2 -mt-[25px] ml-[19px] sm:-mt-[35px] sm:ml-[28px] md:-mt-[38px] md:ml-[30px]">
          {props.getBYPPlateData[1].icon}
        </div>
        <div className="absolute top-1/2 left-1/2 mt-[16px] ml-[8px] sm:mt-[21px] sm:ml-[10px] md:mt-[32px] md:ml-[14px]">
          {props.getBYPPlateData[2].icon}
        </div>
        <div className="absolute top-1/2 left-1/2 mt-[16px] -ml-[34px] sm:mt-[21px] sm:-ml-[50px] md:mt-[32px] md:-ml-[60px]">
          {props.getBYPPlateData[3].icon}
        </div>
        <div className="absolute top-1/2 left-1/2 -mt-[25px] -ml-[46px] sm:-mt-[35px] sm:-ml-[66px] md:-mt-[38px] md:-ml-[80px]">
          {props.getBYPPlateData[4].icon}
        </div>
      </div>
      <div className="flex justify-center space-x-10">
        <button
          type="button"
          className="text-[12px] text-white font-bold w-44 h-11 rounded-full bg-titansBrightPink"
          onClick={() => {
            setMobilePreviewScreenFlag(false);
          }}
        >
          Swap Food
        </button>
        <p className="font-bold text-[20px] text-titansDarkBlue">OR</p>
        <button
          type="button"
          className="text-[12px] text-white font-bold w-44 h-11 rounded-full bg-titansBrightPink"
          onClick={() => {
            const score = BuildYourPlateProcessor.calculateScore(props.getBYPPlateData);
            setMobilePreviewScreenFlag(false);
            setModal(true);
            setModalContent({
              buttonFunc: () => {
                setModal(false);
                props.removeFromPlate(props.getBYPPlateData);
              },
              buttonText: "Play again",
              text: BuildYourPlateProcessor.constructScoreModalText(score),
              title: BuildYourPlateProcessor.constructScoreModalTitle(score)
            });
          }}
        >
          Score my plate
        </button>
      </div>
    </div>
  );
};

export default BuildYourPlatePlatePreviewScreen;
