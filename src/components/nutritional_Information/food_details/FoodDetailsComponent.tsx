import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import NutritionBreakdownChart from "./nutrition_breakdown_chart/NutritionBreakdownChart";
import DetailsCard from "../../shared/DetailsCard";
import FirebaseAPI, { FoodDetailsProps } from "../../../api/FirebaseAPI";
import DetailsComponent from "../../shared/DetailsComponent";
import { MenuCardProps } from "../../../models/MenuCardProps";
import CarouselMenu from "../../shared/CarouselMenu";
import { FoodDetailsCarouselResponsiveConfig } from "../../../config/CarouselConfig";
import useWindowDimensions from "../../../functions/ScreenWidth";
import { useGlobalMenuOpenContext } from "../../app_header/AppHeaderContext";

const FoodDetailsComponent = () => {
  const navigate = useNavigate();
  const [getFoodDetailsComponentData, setFoodDetailsComponentData] = useState<
    FoodDetailsProps | undefined
  >();
  const { setAdditionalStyling } = useGlobalMenuOpenContext();
  const { width } = useWindowDimensions();
  const [getImageURL, setImageURL] = useState<string>();
  const [getSeeNext, setSeeNext] = useState<MenuCardProps[] | undefined>();
  const { foodName, foodCategory } = useParams();
  const location = useLocation();

  const fetchSeeNext = async (res: FoodDetailsProps) => {
    const docs = await FirebaseAPI.fetchFoodDetailsSeeNext(res.category, res.name);

    return Promise.all(
      docs.cardData.map(async (doc, index) => {
        const URI = await FirebaseAPI.fetchImages(doc.firebaseName);
        let path = "";
        if (foodName) {
          // Replaces the foodName at the end of the path, instead of the first occurrence
          path = location.pathname.replace(new RegExp(`${foodName}$`), docs.paths[index]);
        }

        return { key: index, name: doc.name, path, img: URI };
      })
    );
  };

  useEffect(() => {
    setAdditionalStyling("bg-white mb-10");
    setSeeNext(undefined);
    if (foodName) {
      FirebaseAPI.fetchSpecifiedChildOfSpecifiedComponentData("FYPData", foodName).then((res) => {
        if (res !== undefined) {
          fetchSeeNext(res as FoodDetailsProps).then((r) => {
            setSeeNext(r);
          });

          if (res.firebaseName) {
            FirebaseAPI.fetchImages(res.firebaseName).then((URI) => setImageURL(URI));
            setFoodDetailsComponentData(res as FoodDetailsProps);
          }
        } else {
          navigate(`/NutritionalInformation/${foodCategory}`);
        }
      });
    }

    return function cleanup() {
      setAdditionalStyling("");
    };
  }, [foodName]);

  return (
    <div className="">
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
      {getSeeNext && (
        <div className="-mt-10 w-full lg:container mx-auto px-2 sm:px-6 lg:px-6 pb-20">
          <p className="text-titansDarkBlue text-[24px] sm:text-[36px] pl-4 sm:pl-0 font-semibold pb-6">
            See next
          </p>
          <CarouselMenu
            cards={getSeeNext}
            config={FoodDetailsCarouselResponsiveConfig}
            renderArrowsWhenDisabled={width < 1025}
          />
        </div>
      )}
    </div>
  );
};

export default FoodDetailsComponent;
