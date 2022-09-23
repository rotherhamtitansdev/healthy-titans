import React from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "./VideoPlayer.css";
import { Video } from "../../models/Video";

const VideoPlayer = (props: { video: Video }) => (
  <div className="player-wrapper">
    <ReactPlayer
      width="100%"
      height="100%"
      className="react-player"
      url={props.video.url}
      controls
      playing
    />
  </div>
);

export default VideoPlayer;
