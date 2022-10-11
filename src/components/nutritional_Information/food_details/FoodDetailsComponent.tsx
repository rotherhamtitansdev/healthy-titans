import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NutritionBreakdownChart from "./nutrition_breakdown_chart/NutritionBreakdownChart";
import { FoodDetailsProps } from "../../../data/nutritional_information/FoodDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import FirebaseAPI from "../../../api/FirebaseAPI";
import DetailsComponent from "../../shared/DetailsComponent";

const FoodDetailsComponent = () => {
  const [getFoodDetailsComponentData, setFoodDetailsComponentData] = useState<
    FoodDetailsProps | undefined
  >();

  const [getImageURL, setImageURL] = useState<string>();
  const { foodName } = useParams();

  useEffect(() => {
    if (foodName) {
      FirebaseAPI.fetchFoodDetailsSingle(foodName).then((res) => {
         if (res) {
          if (res.firebaseName) {
            FirebaseAPI.fetchImages(res.firebaseName).then((URI) => setImageURL(URI));
            setFoodDetailsComponentData(res);
          }
        }
      });
    }
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
            list={
              getFoodDetailsComponentData.facts && {
                title: "More Facts",
                items: getFoodDetailsComponentData.facts
              }
            }
          />
          <NutritionBreakdownChart name={getFoodDetailsComponentData.name} />
        </DetailsComponent>
      )}
    </div>
  );
};

export default FoodDetailsComponent;
