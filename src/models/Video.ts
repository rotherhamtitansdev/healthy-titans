import React from "react";
import { User } from "./User";

export interface Video {
  // Url is currently expected to be an image
  url: string;
  user?: User;
  dateUploaded?: string;
  description?: string;
}

export interface DrilledVideoProps {
  setHidden : React.Dispatch<React.SetStateAction<boolean>>
  setModalClickedVideoData : React.Dispatch<React.SetStateAction<Video | undefined>>
}

export interface VideoModalProps {
  video: Video
  getHidden: boolean;
  setHidden : React.Dispatch<React.SetStateAction<boolean>>
}
