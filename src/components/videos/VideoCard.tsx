import React, { useCallback, useEffect, useState } from "react";
import FirebaseAPI from "../../api/FirebaseAPI";
import "../../App.css";
import { DrilledVideoProps, Video } from "../../models/Video";
import Card from "../shared/Card";

// This displays the video and its details
const VideoCard = (props: { video: Video, Actions: DrilledVideoProps }) => {
  const [getVideoURL, setVideoURL] = useState<string | undefined>();

  useEffect(() => {
    if (props.video.firebaseName !== undefined) {
      FirebaseAPI.fetchImages(props.video.firebaseName).then((URI) => setVideoURL(URI));
    }
  }, []);

  const handleClick = useCallback(() => {
    props.Actions.setHidden(false);
    props.Actions.setModalClickedVideoData(props.video);
  }, []);

  return (
    <Card card={{ name: props.video.title, onClick: handleClick }}>
      <div className="grid grid-cols-2 gap-2">
        {getVideoURL && props.video.description ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video width="400">
            <source src={getVideoURL} />
          </video>
        )
          : null}
        <div className="pt-5 pb-3">
          <div className="block mt-1 text-md leading-tight text-gray-900">
            {props.video.description}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
