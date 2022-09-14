import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NutritionBreakdownChart from "./nutrition_breakdown_chart/NutritionBreakdownChart";
import FoodDetailsComponentData from "../../../data/nutritional_information/FoodDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import { DetailsCardProps } from "../../../models/DetailsCardProps";
import FirebaseAPI from "../../../api/FirebaseAPI";

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
      {getFoodDetailsComponentData ? (
        <div
          className="flex flex-wrap lg:flex-nowrap justify-evenly gap-y-5 gap-x-2 mx-6 md:mx-2"
          data-testid={`${getFoodDetailsComponentData.name}-nutrition-details`}
        >
          <DetailsCard
            name={getFoodDetailsComponentData.name}
            description={getFoodDetailsComponentData.description}
            img={getImageURL}
            additionalStyling="lg:w-5/12"
            hideTitle
          />
          <NutritionBreakdownChart name={getFoodDetailsComponentData.name} />

        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default FoodDetailsComponent;
