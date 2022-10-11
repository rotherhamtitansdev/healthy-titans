import React, {useEffect, useState} from "react";
import {useLocation, useParams } from "react-router-dom";
import { FoodDetailsProps } from "../../../data/nutritional_information/FoodDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import FirebaseAPI from "../../../api/FirebaseAPI";
import DetailsComponent from "../../shared/DetailsComponent";
import {MenuCardProps} from "../../../models/MenuCardProps";
import CarouselMenu from "../../shared/CarouselMenu";

/* eslint-disable */
import NutritionBreakdownChart from "./nutrition_breakdown_chart/NutritionBreakdownChart";
import {FoodDetailsCarouselResponsiveConfig} from "../../../config/CarouselConfig";
import useWindowDimensions from "../../../functions/ScreenWidth";

const FoodDetailsComponent = () => {
  const [getFoodDetailsComponentData, setFoodDetailsComponentData] = useState<FoodDetailsProps | undefined>();
  const { width } = useWindowDimensions();
  const [getImageURL, setImageURL] = useState<string>();
  const [getSeeNext, setSeeNext] = useState<MenuCardProps[] | undefined>()
  const { foodName } = useParams();
  const location = useLocation();

  const fetchSeeNext = async (res: FoodDetailsProps) => {

    const docs = await FirebaseAPI.fetchFoodDetailsSeeNext(res.category, res.name)

    return Promise.all(docs.cardData.map(async (doc, index) => {

      const URI = await FirebaseAPI.fetchImages(doc.firebaseName)
      let path: string = ""
      if (foodName) { path = location.pathname.replace(foodName,docs.paths[index]) }

      return {key: index, name: doc.name, path: path, img: URI}
    }))
  }

  useEffect(() => {
    setSeeNext(undefined)
    // @ts-ignore
    FirebaseAPI.fetchFoodDetailsSingle(foodName).then((res) => {
      if (res) {
        // @ts-ignore
        fetchSeeNext(res).then(r => {
          setSeeNext(r)
        })

        if (res.firebaseName) {
          FirebaseAPI.fetchImages(res.firebaseName).then((URI) => setImageURL(URI));
          //@ts-ignore
          setFoodDetailsComponentData(res);
        }
      }
    });
  }, [foodName]);

  return (
    <div className={""}>
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
      { getSeeNext && (
          <div className="-mt-10 w-full lg:container mx-auto px-2 sm:px-6 lg:px-6">
            <p className="text-titansDarkBlue text-[24px] sm:text-[36px] pl-4 sm:pl-0 font-semibold pb-6">See next</p>
            <CarouselMenu cards={getSeeNext} config={FoodDetailsCarouselResponsiveConfig} renderArrowsWhenDisabled={width < 1025}/>
          </div>
      ) }
    </div>
  );
};

export default FoodDetailsComponent;
