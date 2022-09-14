import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsCardProps } from "../../../models/DetailsCardProps";
import NutritionDetailsComponentData from "../../../models/NutritionDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";

const NutritionDetailsComponent = () => {
  const [getNutritionData, setNutritionData] = useState<DetailsCardProps | undefined>();
  const { nutritionName } = useParams();
  useEffect(() => {
    setNutritionData(
      NutritionDetailsComponentData[
        nutritionName as unknown as keyof typeof NutritionDetailsComponentData
      ],
    );
  });
  return (
    <div>
      {getNutritionData ? (
        <div
          className="flex flex-wrap lg:flex-nowrap justify-evenly
           gap-y-5 gap-x-2 mx-6 md:mx-2"
          data-testid={getNutritionData.name}
        >
          <DetailsCard
            name={getNutritionData.name}
            description={getNutritionData.description}
            img={getNutritionData.img}
            additionalStyling="lg:w-5/12"
          />
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};
export default NutritionDetailsComponent;
