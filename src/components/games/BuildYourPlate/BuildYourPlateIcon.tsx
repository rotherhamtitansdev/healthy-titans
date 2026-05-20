import React, { useEffect, useState } from "react";
import { imageSize, previewImageSize } from "../../../data/BYPData/BYPData";
import { fetchImages } from "../../../api/FirebaseAPI";
import { useGameStartedContext } from "../GameContext";

const BuildYourPlateIcon = (props: { URL: string; id: string; alt: string }) => {
  const [resolvedUrl, setResolvedUrl] = useState<string>("");
  const { getMobilePreviewScreenFlag } = useGameStartedContext();

  useEffect(() => {
    if (!props.URL) return;
    if (props.URL.startsWith("http")) {
      setResolvedUrl(props.URL);
      return;
    }
    fetchImages(props.URL).then(setResolvedUrl).catch(() => setResolvedUrl(""));
  }, [props.URL]);

  return (
    <img
      src={resolvedUrl || undefined}
      alt={props.alt}
      className={getMobilePreviewScreenFlag ? previewImageSize : imageSize}
      key={props.id}
    />
  );
};

export default BuildYourPlateIcon;
