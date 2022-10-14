import React, { useEffect, useState } from "react";
import { DetailsCardProps } from "../../../models/DetailsCardProps";
import NutritionDetailsComponentData from "../../../models/NutritionDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";

const NutritionDetailsComponent = (props: { nutritionName: string }) => {
  const [getNutritionData, setNutritionData] = useState<DetailsCardProps | undefined>();
  useEffect(() => {
    setNutritionData(
      NutritionDetailsComponentData[
        props.nutritionName as unknown as keyof typeof NutritionDetailsComponentData
      ]
    );
  });
  return (
    <div>
      {getNutritionData && (
        <DetailsComponent>
          <DetailsCard
            name={getNutritionData.name}
            description={getNutritionData.description}
            img={getNutritionData.img}
            additionalStyling="lg:w-5/12"
          />
        </DetailsComponent>
      )}
    </div>
  );
};
export default NutritionDetailsComponent;
