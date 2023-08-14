import React from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "./VideoPlayer.css";

const VideoPlayer = (props: { videoUrl: string}) => (
  <div className="player-wrapper">
    <ReactPlayer
      width="100%"
      height="100%"
      className="react-player"
      url={props.videoUrl}
      controls
    />
  </div>
);

export default VideoPlayer;
