import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NutritionBreakdownChart from "./nutrition_breakdown_chart/NutritionBreakdownChart";
import FoodDetailsComponentData, {
  FoodDetailsProps,
} from "../../../data/nutritional_information/FoodDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import FirebaseAPI from "../../../api/FirebaseAPI";
import DetailsComponent from "../../shared/DetailsComponent";

/* eslint-disable */

const FoodDetailsComponent = () => {
  const [getFoodDetailsComponentData, setFoodDetailsComponentData] = useState<
    FoodDetailsProps | undefined
  >();

  const [getImageURL, setImageURL] = useState<string>();
  const { foodName } = useParams();

  useEffect(() => {
    // @ts-ignore
    const data = FoodDetailsComponentData[foodName];
    if (data.firebaseName) {
      FirebaseAPI.fetchImages(data.firebaseName).then((res) =>
        setImageURL(res)
      );
    } else if (data.img) {
      setImageURL(data.img);
    }

    setFoodDetailsComponentData(data);
  }, []);

  return (
    <div>
      {getFoodDetailsComponentData ? (
        <DetailsComponent>
          <DetailsCard
            name={getFoodDetailsComponentData.name}
            description={getFoodDetailsComponentData.description}
            img={getImageURL}
            additionalStyling="lg:w-5/12"
            list={
              getFoodDetailsComponentData.facts && {
                title: "More Facts",
                items: getFoodDetailsComponentData.facts,
              }
            }
          />
          <NutritionBreakdownChart name={getFoodDetailsComponentData.name} />
        </DetailsComponent>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default FoodDetailsComponent;
