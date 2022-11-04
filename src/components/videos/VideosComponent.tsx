import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import VideoData from "../../data/VideoData";
import { Video } from "../../models/Video";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import Card from "../shared/Card";
import MenuTitle from "../shared/MenuTitle";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

const VideosComponent = () => {
  const [getHidden, setHidden] = useState(true);
  const [modalClickedVideoData, setModalClickedVideoData] = useState<Video | undefined>();
  const [isMoving, setIsMoving] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 2,
      partialVisibilityGutter: 200,
    },
    smallDesktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 1,
      partialVisibilityGutter: 120,
    },
    mobile: {
      breakpoint: { max: 600, min: 464 },
      items: 1,
      partialVisibilityGutter: 150,
    },
    smallMobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 50,
    },
  };

  const videoData = VideoData.map((item) => (
    <VideoCard
      key={item.title}
      Actions={{ setHidden, setModalClickedVideoData }}
      video={item}
      disableOnClick={isMoving}
    />
  ));

  function getVideos() {
    let videos = videoData;
    // Fill carousel with placeholders if there are fewer than 3 videos
    let key = 0;
    while (videos.length < 3) {
      videos = videos.concat(
        <Card
          key={key}
          card={{
            name: "placeholder",
            additionalStyling:
              "xs:w-[22.5rem] sm:w-[30rem] md:w-[37.5rem] max-h-[20rem] md:max-h-[28rem] h-full md:mr-1",
          }}
        >
          {/* additionalStyling: "max-h-[20rem] md:max-h-[28rem] max-w-[22.5rem] sm:max-w-[37.5rem]", */}

          <div className="text-center py-[4.5rem] xs:px-[5rem] xs:py-[5.75rem] xs:px-[7.25rem] sm:py-[9.35rem] sm:px-[5rem] md:py-[9rem] md:px-[10rem] lg:py-[11.5rem] lg:px-[10rem]">
            <div className="font-semibold text-4xl font-quicksand text-homepageHeaderText">
              More videos coming soon!
            </div>
          </div>
        </Card>
      );
      key += 1;
    }
    return videos;
  }

  return (
    <>
      <AppHeader>
        <MenuHeader
          title="Videos"
          body="Here you can watch a few short videos and hear from the Titans as you continue to learn and get to know even more about how to be strong and healthy."
        />
      </AppHeader>
      {modalClickedVideoData && (
        <VideoModal video={modalClickedVideoData} getHidden={getHidden} setHidden={setHidden} />
      )}
      <div className="pl-5 md:py-10 md:pl-10">
        <MenuTitle
          title="Watch and learn with these short videos"
          subtitle="Click on whichever video you'd like to watch to learn more and hear from some Titans!"
        />
        <Carousel
          responsive={responsive}
          partialVisible
          beforeChange={() => setIsMoving(true)}
          afterChange={() => setIsMoving(false)}
          itemClass="p-[1rem]"
          renderArrowsWhenDisabled
          arrows={getHidden}
        >
          {getVideos()}
        </Carousel>
      </div>
    </>
  );
};

export default VideosComponent;
