import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirebaseAPI from "../../../api/FirebaseAPI";
import ChallengeDetailsComponentData from "../../../data/ChallengeDetailsComponentData";
import { ChallengeDetailsProps } from "../../../models/ChallengeDetailsProps";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";

const ChallengeDetailsComponent = () => {
  // eslint-disable-next-line max-len
  const [getChallengeDetailsComponentData, setChallengeDetailsComponentData] = useState<ChallengeDetailsProps | undefined>();

  const [getImageURL, setImageURL] = useState<string>();
  const { challengeName } = useParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data = ChallengeDetailsComponentData[challengeName];
    if (data.firebaseName) {
      FirebaseAPI.fetchImages(data.firebaseName).then((res) => setImageURL(res));
    } else if (data.img) {
      setImageURL(data.img);
    }

    setChallengeDetailsComponentData(data);
  }, []);

  useEffect(() => {
    setChallengeDetailsComponentData(
      ChallengeDetailsComponentData[
        challengeName as unknown as keyof typeof ChallengeDetailsComponentData
      ],
    );
  });

  return (
    <div>
      {getChallengeDetailsComponentData ? (
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
          <div className="basis-1/2">
            <div className="pl-[8rem] pr-[10rem]">
              <div className="pt-4 pb-3 tracking-wide text-2xl font-quicksand text-homepageHeaderSubTitle font-semibold pb-[2rem]">
                How to play
              </div>
              <p className="pl-4 block mt-1 text-lg leading-tight font-medium font-quicksand">
                <ul className="list-decimal">
                  {getChallengeDetailsComponentData.howToPlay?.map(
                    (howToPlay) => (
                      <li className="pb-6">{howToPlay}</li>
                    ),
                  )}
                </ul>
              </p>
              <div className="pt-4 pb-3 tracking-wide text-2xl font-quicksand text-homepageHeaderSubTitle font-semibold">
                Rules
              </div>
              <p className="pl-4 block mt-1 text-lg leading-tight font-medium font-quicksand">
                <ul className="list-disc">
                  {getChallengeDetailsComponentData.rules.map((rule) => (
                    <li className="pb-6">{rule}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </DetailsComponent>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default ChallengeDetailsComponent;
