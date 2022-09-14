import React from "react";
import ReactPlayer from "react-player";
import "../../App.css";

const VideoPlayer = () => (
  <div className="player-wrapper">
    <ReactPlayer
      width="100%"
      height="100%"
      className="react-player"
      url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      light="http://placekitten.com/200/300"
      controls
      playing
    />
  </div>
);

export default VideoPlayer;
