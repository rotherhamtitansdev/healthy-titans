import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirebaseAPI from "../../../api/FirebaseAPI";
import ChallengeDetailsComponentData from "../../../data/ChallengeDetailsComponentData";
import { ChallengeDetailsProps } from "../../../models/ChallengeDetailsProps";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";

const ChallengeDetailsComponent = () => {
  const [getChallengeDetailsComponentData, setChallengeDetailsComponentData] = useState<
    ChallengeDetailsProps | undefined
  >();

  const [getImageURL, setImageURL] = useState<string>();
  const { challengeName } = useParams();

  useEffect(() => {
    if (challengeName) {
      const data =
        ChallengeDetailsComponentData[challengeName as keyof typeof ChallengeDetailsComponentData];
      if (data.firebaseName) {
        FirebaseAPI.fetchImages(data.firebaseName).then((res) => setImageURL(res));
      } else if (data.img) {
        setImageURL(data.img);
      }
      setChallengeDetailsComponentData(data);
    }
  }, []);

  useEffect(() => {
    setChallengeDetailsComponentData(
      ChallengeDetailsComponentData[challengeName as keyof typeof ChallengeDetailsComponentData]
    );
  });

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
                items: getChallengeDetailsComponentData.equipment
              }
            }
          />
          <div className="basis-1/2">
            <div className="pl-[8rem] pr-[10rem]">
              <div className="pt-4 pb-3 tracking-wide text-2xl font-quicksand text-homepageHeaderSubTitle font-semibold pb-[2rem]">
                How to play
              </div>
              <div className="pl-4 block mt-1 text-lg leading-tight font-medium font-quicksand">
                <ul className="list-decimal">
                  {getChallengeDetailsComponentData.howToPlay?.map((howToPlay) => (
                    <li className="pb-6" key={howToPlay}>{howToPlay}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 pb-3 tracking-wide text-2xl font-quicksand text-homepageHeaderSubTitle font-semibold">
                Rules
              </div>
              <div className="pl-4 block mt-1 text-lg leading-tight font-medium font-quicksand">
                <ul className="list-disc">
                  {getChallengeDetailsComponentData.rules.map((rule) => (
                    <li className="pb-6" key={rule}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </DetailsComponent>
      )}
    </div>
  );
};

export default ChallengeDetailsComponent;
