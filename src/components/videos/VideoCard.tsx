import React, { useCallback } from "react";
import "../../App.css";
import { DrilledVideoProps, Video } from "../../models/Video";
import InfoWithHeader from "../shared/InfoWithHeader";

// This displays the video and its details
const VideoCard = (props: {Video: Video, Actions: DrilledVideoProps}) => {
  const handleClick = useCallback(() => {
    props.Actions.setHidden(false);
    props.Actions.setModalClickedVideoData(props.Video);
  }, []);

  return (
    <div className=" text-gray-700 rounded bg-white sm:w-2/3 lg:w-1/2 hover:cursor-grab" onClick={handleClick} role="presentation">
      <div className="grid grid-cols-2 gap-2">
        <div className="pl-5 pt-5 pb-3">
          <img src={props.Video.url} alt="video" />
        </div>
        <div className="pt-5 pb-3">
          <InfoWithHeader info={props.Video.user?.name} header="Name" />
          <InfoWithHeader info={props.Video.user?.position} header="Position" />
          <InfoWithHeader info={props.Video.dateUploaded} header="Date Uploaded" />
          <div className="block mt-1 text-md leading-tight text-gray-900">
            {props.Video.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
