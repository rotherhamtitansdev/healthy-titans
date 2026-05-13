import React from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "./VideoPlayer.css";

type VideoPlayerProps = {
  videoUrl: string;
  onError?: () => void;
};

const VideoPlayer = (props: VideoPlayerProps) => (
  <div className="player-wrapper">
    <ReactPlayer
      width="100%"
      height="100%"
      className="react-player"
      url={props.videoUrl}
      controls
      onError={props.onError}
      config={{ file: { attributes: { preload: "auto" } } }}
    />
  </div>
);

VideoPlayer.defaultProps = {
  onError: () => undefined,
};

export default VideoPlayer;
