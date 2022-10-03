import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NutritionBreakdownChart from "./nutrition_breakdown_chart/NutritionBreakdownChart";
import FoodDetailsComponentData from "../../../data/nutritional_information/FoodDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import { DetailsCardProps } from "../../../models/DetailsCardProps";
import FirebaseAPI from "../../../api/FirebaseAPI";
import DetailsComponent from "../../shared/DetailsComponent";

/* eslint-disable */

const FoodDetailsComponent = () => {
  const [getFoodDetailsComponentData, setFoodDetailsComponentData] = useState<
    DetailsCardProps | undefined
  >();

  const [getImageURL, setImageURL] = useState<string>();

  const { foodName } = useParams();

  useEffect(() => {
    // @ts-ignore
    const data = FoodDetailsComponentData[foodName];

    if (data.firebaseName) {
      FirebaseAPI.fetchImages(data.firebaseName).then((res) => setImageURL(res));
    } else if (data.img) { setImageURL(data.img); }

    setFoodDetailsComponentData(data);
  }, []);

  return (
    <div>
      {getFoodDetailsComponentData && (
        <DetailsComponent>
          <DetailsCard
            name={getFoodDetailsComponentData.name}
            description={getFoodDetailsComponentData.description}
            img={getImageURL}
            additionalStyling="lg:w-5/12"
            hideTitle
          />
          <NutritionBreakdownChart name={getFoodDetailsComponentData.name} />
        </DetailsComponent>
      )}
    </div>
  );
};

export default FoodDetailsComponent;
