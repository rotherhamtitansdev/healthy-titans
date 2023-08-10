import React, { useEffect, useState } from "react";
import "../../App.css";
import { DetailsCardProps } from "../../models/DetailsCardProps";
import { useGlobalMenuOpenContext } from "../app_header/AppHeaderContext";
import { fetchImages, fetchDataFromPath } from "../../api/FirebaseAPI";
import VideoCard from "../videos/VideoCard";
import { Video } from "../../models/Video";

/*
 * This component represents a details card
 * */
const DetailsCard = (props: DetailsCardProps) => {
  const { isMenuOpen } = useGlobalMenuOpenContext();
  const [checkmarkImgUrl, setCheckmarkImgUrl] = useState<string>("");
  const [getHidden, setHidden] = useState(false);
  const [modalClickedVideoData, setModalClickedVideoData] = useState<Video | undefined>();
  const [getVideoData, setVideoData] = useState<Video[]>([]);

  useEffect(() => {
    fetchImages("BYPImages/CheckMarkButton.svg").then((res) => setCheckmarkImgUrl(res));
    if (!getVideoData || getVideoData.length === 0) {
      fetchDataFromPath("VideoData").then((data) => { setVideoData(data as Video[])});
    }
  }, []);

  return (
    <div data-testid={`${props.name}-details`} className="pl-5 md:basis-1/2">
      {props.img && (
        <img
          className={isMenuOpen ? "absolute invisible top-[13rem]" : "absolute visible top-[13rem]"}
          src={props.img}
          alt=""
        />
      )}
      <div className="pl-2 pr-4 pt-[5rem]">
        {!props.hideTitle ? (
          <div
            data-testid="details-title"
            className="tracking-wide text-4xl text-black font-bold py-5 text-homepageHeaderSubTitle"
          >
            {props.name}
          </div>
        ) : null}
        <p
          data-testid="details-description"
          className="block mt-1 text-xl leading-tight font-medium text-gray-900 text-[16px] lg:text-[20px]"
        >
          {props.description}
        </p>
        {props.list && (
          <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
            <h2 className="py-5 text-[20px] lg:text-[24px] ">{props.list.title}</h2>
            <ul className="list-none px-0 lg:px-5 text-[16px] lg:text-[20px]">
              {props.list.items.map((item) => (
                <li className="pb-4 md:pb-8 flex font-medium" key={item}>
                  {checkmarkImgUrl && (
                    <img src={checkmarkImgUrl} alt="checkmark" className="pr-5 align-center" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
            
            {getVideoData.map((item) => (
              <h1 key={item.firebaseName}>{item.firebaseName}</h1>
            ))}
            <VideoCard
              Actions={{ setHidden, setModalClickedVideoData }}
              video={getVideoData[0]}
              disableOnClick={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
