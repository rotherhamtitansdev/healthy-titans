import React, { useState } from "react";
import { Video } from "../../models/Video";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { VideoData } from "../../data/VideoData";

const VideosComponent = () => {
  const [getHidden, setHidden] = useState(true);
  const [modalClickedVideoData, setModalClickedVideoData] = useState<Video | undefined>();

  const Videos = VideoData.map((item, index) => (
    <VideoCard key={index} Actions={{ setHidden, setModalClickedVideoData }} video={item} />
  ));

  return (
    <div className="my-6">
      { modalClickedVideoData
        && (
          <VideoModal
            video={modalClickedVideoData}
            getHidden={getHidden}
            setHidden={setHidden}
          />
        ) }
      <div className="grid gap-4 place-items-center">
        {Videos}
      </div>
    </div>
  );
};

export default VideosComponent;
