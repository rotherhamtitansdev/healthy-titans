import React from "react";

export interface Video {
  firebaseName: string;
  title: string;
  description?: string;
}

export interface DrilledVideoProps {
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
  setModalClickedVideoData: React.Dispatch<React.SetStateAction<Video | undefined>>
}

export interface VideoModalProps {
  video: Video
  getHidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
}
