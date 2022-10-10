import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import NutritionBreakdownChart from "./nutrition_breakdown_chart/NutritionBreakdownChart";
import {FoodDetailsProps,} from "../../../data/nutritional_information/FoodDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import FirebaseAPI from "../../../api/FirebaseAPI";
import DetailsComponent from "../../shared/DetailsComponent";
import {MenuCardProps} from "../../../models/MenuCardProps";
import CarouselMenu from "../../shared/CarouselMenu";


/* eslint-disable */

const FoodDetailsComponent = () => {
  const [getFoodDetailsComponentData, setFoodDetailsComponentData] = useState<
    FoodDetailsProps | undefined
  >();

  const [getImageURL, setImageURL] = useState<string>();
  const [getSeeNext, setSeeNext] = useState<MenuCardProps[]>()
  const { foodName } = useParams();

  const fetchSeeNext = async (res: FoodDetailsProps) => {

    const docs = await FirebaseAPI.fetchFoodDetailsSeeNext(res.category)

    return Promise.all(docs.map(async (doc, index) => {

      const URI = await FirebaseAPI.fetchImages(doc.firebaseName)
      return {key: index, name: doc.name, path: "/NutritionalInformation", img: URI}
    }))
  }

  useEffect(() => {
    // @ts-ignore
    FirebaseAPI.fetchFoodDetailsSingle(foodName).then((res) => {
      if (res) {
        // @ts-ignore
        fetchSeeNext(res).then(r => console.log(r))

        if (res.firebaseName) {
          FirebaseAPI.fetchImages(res.firebaseName).then((URI) => setImageURL(URI));
          //@ts-ignore
          setFoodDetailsComponentData(res);
        }
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
      )}
      { getSeeNext && ( <CarouselMenu cards={getSeeNext} /> ) }
    </div>
  );
};

export default FoodDetailsComponent;
