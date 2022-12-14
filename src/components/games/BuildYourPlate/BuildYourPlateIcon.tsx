import React from "react";
import { imageSize, previewImageSize } from "../../../data/BYPData/BYPData";
import { useGameStartedContext } from "../GameContext";

const BuildYourPlateIcon = (props: { URL: string; id: string; alt: string }) => {
  const { getMobilePreviewScreenFlag } = useGameStartedContext();

  return (
    <img
      src={props.URL}
      alt={props.alt}
      className={getMobilePreviewScreenFlag ? previewImageSize : imageSize}
      key={props.id}
    />
  );
};

export default BuildYourPlateIcon;
