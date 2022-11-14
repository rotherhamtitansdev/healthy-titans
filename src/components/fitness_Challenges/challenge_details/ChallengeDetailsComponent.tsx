import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirebaseAPI from "../../../api/FirebaseAPI";
import { ChallengeDetailsProps } from "../../../models/ChallengeDetailsProps";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";
import { useGlobalMenuOpenContext } from "../../app_header/AppHeaderContext";

const ChallengeDetailsComponent = () => {
  const [getChallengeDetailsComponentData, setChallengeDetailsComponentData] = useState<
    ChallengeDetailsProps | undefined
  >();

  const { setAdditionalStyling } = useGlobalMenuOpenContext();

  const [getImageURL, setImageURL] = useState<string>();
  const { challengeName } = useParams();

  useEffect(() => {
    if (challengeName) {
      FirebaseAPI.fetchDataFromSubpath("Challenges", challengeName).then((res) => {
        setChallengeDetailsComponentData(res as ChallengeDetailsProps);
        const image = res?.firebaseName;
        FirebaseAPI.fetchImages(image as string).then((url) => setImageURL(url));
      });
    }

    setAdditionalStyling("bg-white mb-10");

    return function cleanup() {
      setAdditionalStyling("");
    };
  }, []);

  return (
    <div>
      {getChallengeDetailsComponentData && (
        <DetailsComponent>
          <DetailsCard
            name={getChallengeDetailsComponentData.name}
            description={getChallengeDetailsComponentData.description}
            img={getImageURL}
            list={
              getChallengeDetailsComponentData.equipment && {
                title: "Equipment",
                items: getChallengeDetailsComponentData.equipment,
              }
            }
          />
          <div className="md:basis-1/2 ">
            <div className="pr-[2rem] md:pr-[3rem] lg:pr-[5rem] pt-[2rem]">
              <div className="lg:pt-4 pb-3 lg:pl-0 pl-5 tracking-wide text-[20px] lg:text-[24px] text-homepageHeaderSubTitle font-semibold pb-[2rem]">
                How to play
              </div>
              <div className="pl-4 block mt-1 text-lg leading-tight font-medium">
                <ul className="list-decimal">
                  {getChallengeDetailsComponentData.howToPlay?.map((howToPlay) => (
                    <li className="pb-6" key={howToPlay}>
                      {howToPlay}
                    </li>
                  ))}
                </ul>
              </div>
              {getChallengeDetailsComponentData.rules.length >= 1 && (
                <>
                  <div className="pt-4 pb-3 tracking-wide text-2xl text-homepageHeaderSubTitle font-semibold">
                    Rules
                  </div>
                  <div className="pl-4 block mt-1 text-lg leading-tight font-medium">
                    <ul className="list-disc">
                      {getChallengeDetailsComponentData.rules.map((rule) => (
                        <li className="pb-6" key={rule}>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </DetailsComponent>
      )}
    </div>
  );
};

export default ChallengeDetailsComponent;
