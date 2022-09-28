import React, { useCallback, useState } from "react";
import FirebaseAPI from "../../api/FirebaseAPI";
import "../../App.css";
import { DrilledVideoProps, Video } from "../../models/Video";
import Card from "../shared/Card";

// This displays the video and its details
const VideoCard = (props: {
  video: Video, disableOnClick: boolean,
  Actions: DrilledVideoProps
}) => {
  const [getVideoURL, setVideoURL] = useState<string | undefined>();

  React.useEffect(() => {
    if (props.video.firebaseName !== undefined) {
      FirebaseAPI.fetchImages(props.video.firebaseName).then((URI) => setVideoURL(URI));
    }
  }, []);

  const handleClick = useCallback(() => {
    const video = {
      title: props.video.title,
      description: props.video.description,
      url: getVideoURL,
    } as Video;

    props.Actions.setHidden(false);
    props.Actions.setModalClickedVideoData(video);
  }, [getVideoURL]);

  return (
    <Card card={{ name: props.video.title, additionalStyling: "w-[18rem] xs:w-[22.5rem] sm:w-[30rem] md:w-[37.5rem]", onClick: props.disableOnClick ? () => undefined : handleClick }}>
      <div className="p-5">
        {getVideoURL && props.video.description ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video className="rounded-3xl">
            <source src={getVideoURL} />
          </video>
        )
          : null}
        <div className="pt-5 pb-3">
          <div className="font-quicksand font-semibold text-2xl  text-homepageHeaderText">
            {props.video.title}
          </div>
          <div className="font-quicksand font-md text-xl  text-homepageHeaderText">
            {props.video.description}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
