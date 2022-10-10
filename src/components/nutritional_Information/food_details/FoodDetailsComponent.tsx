import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirebaseAPI from "../../../api/FirebaseAPI";
import { FoodDetailsProps } from "../../../data/nutritional_information/FoodDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";
import NutritionBreakdownChart from "./nutrition_breakdown_chart/NutritionBreakdownChart";


  const [getFoodDetailsComponentData, setFoodDetailsComponentData] = useState<
    FoodDetailsProps | undefined
  >();

  const [getImageURL, setImageURL] = useState<string>();
  const { foodName } = useParams();

  useEffect(() => {
    FirebaseAPI.fetchFoodDetailsSingle(foodName as string).then((res) => {
      if (res) {
        if (res.firebaseName) {
          FirebaseAPI.fetchImages(res.firebaseName).then((URI) =>
            setImageURL(URI)
          );
        }
        setFoodDetailsComponentData(res as FoodDetailsProps);
      }
    });
  }, []);

  return (
    <div>
      {getFoodDetailsComponentData && (
        <DetailsComponent>
          <DetailsCard
            name={getFoodDetailsComponentData.name}
            description={getFoodDetailsComponentData.description}
            img={getImageURL}
            additionalStyling=""
            list={
              getFoodDetailsComponentData.facts && {
                title: "More Facts",
                items: getFoodDetailsComponentData.facts,
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
