import React from "react";
import { imageSize, previewImageSize } from "../../../data/BYPData/BYPData";
import { useFYPStartedContext } from "./BuildYourPlateContext";

const BuildYourPlateIcon = (props: {URL: string, key: string}) => {
  const { getMobilePreviewScreenFlag } = useFYPStartedContext();

  return (
    <img
      src={props.URL}
      alt="x"
      className={getMobilePreviewScreenFlag ? previewImageSize : imageSize}
      key={props.key}
    />
  );
};

export default BuildYourPlateIcon;
