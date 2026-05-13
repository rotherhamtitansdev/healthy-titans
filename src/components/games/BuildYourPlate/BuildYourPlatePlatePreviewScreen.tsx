import React from "react";
import { BYPItem } from "../../../models/BYP/BYP";
import { useGameStartedContext } from "../GameContext";
import BuildYourPlateProcessor from "./BuildYourPlateProcessor";
import BuildYourPlateVisualPlate from "./BuildYourPlateVisualPlate";

const BuildYourPlatePlatePreviewScreen = (props: {
  getBYPPlateData: BYPItem[];
  removeFromPlate: (item: BYPItem[]) => void;
}) => {
  const { setMobilePreviewScreenFlag, setModal, setModalContent, setIsGameStarted } = useGameStartedContext();
  const platePreviewItems = props.getBYPPlateData.slice(0, 6);

  return (
    <div className="w-full h-full">
      <BuildYourPlateVisualPlate
        items={platePreviewItems}
        onRemoveItem={(plateItem) => {
          props.removeFromPlate([plateItem]);
        }}
        sizeClassName="w-80 h-80 sm:w-[26rem] sm:h-[26rem]"
      />
      {props.getBYPPlateData.length > 0 && (
        <div className="mt-4 mb-5 rounded-2xl bg-[#F5F7FF] p-4 max-w-xl mx-auto">
          <p className="text-titansDarkBlue font-semibold text-base mb-2 text-center">
            Selected foods
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {props.getBYPPlateData.map((plateItem) => (
              <button
                key={plateItem.id}
                type="button"
                className="bg-white rounded-xl px-3 py-2 text-xs font-medium text-homepageHeaderText shadow-sm"
                onClick={() => {
                  props.removeFromPlate([plateItem]);
                }}
              >
                {plateItem.name}
              </button>
            ))}
          </div>
        </div>
      )}
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
                setIsGameStarted(false);
                props.removeFromPlate(props.getBYPPlateData);
              },
              buttonText: "Play again",
              text: BuildYourPlateProcessor.constructScoreModalText(props.getBYPPlateData),
              title: BuildYourPlateProcessor.constructScoreModalTitle(
                score,
                props.getBYPPlateData.length
              ),
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
