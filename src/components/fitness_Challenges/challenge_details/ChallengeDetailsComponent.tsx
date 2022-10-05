import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChallengeDetailsComponentData from "../../../data/ChallengeDetailsComponentData";
import { ChallengeDetailsProps } from "../../../models/ChallengeDetailsProps";
import Card from "../../shared/Card";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";

const ChallengeDetailsComponent = () => {
  // eslint-disable-next-line max-len
  const [getChallengeDetailsComponentData, setChallengeDetailsComponentData] = useState<
    ChallengeDetailsProps | undefined
  >();

  const { challengeName } = useParams();
  useEffect(() => {
    setChallengeDetailsComponentData(
      ChallengeDetailsComponentData[
        challengeName as unknown as keyof typeof ChallengeDetailsComponentData
      ]
    );
  });

  return (
    <div>
      {getChallengeDetailsComponentData && (
        <DetailsComponent>
          <div className="grid grid-cols-2 gap-4">
            <DetailsCard
              name={getChallengeDetailsComponentData.name}
              description={getChallengeDetailsComponentData.description}
              img={getChallengeDetailsComponentData.img}
            />
            <Card
              card={{
                name: getChallengeDetailsComponentData.name,
                additionalStyling: "h-content"
              }}
            >
              <div className="pl-4 pr-4">
                <div className="pt-4 pb-3 tracking-wide text-lg text-black font-bold">Rules</div>
                <p className="pl-4 block mt-1 text-lg leading-tight font-semibold text-gray-900">
                  <ol className="list-decimal">
                    {getChallengeDetailsComponentData.rules.map((rule) => (
                      <li key={rule} className="pb-4">
                        {rule}
                      </li>
                    ))}
                  </ol>
                </p>
              </div>
            </Card>
          </div>
        </DetailsComponent>
      )}
    </div>
  );
};

export default ChallengeDetailsComponent;
