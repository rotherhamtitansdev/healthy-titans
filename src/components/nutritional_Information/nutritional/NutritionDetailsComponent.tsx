import React, { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNutritionSeeNext, fetchNutritionData, fetchImages } from "../../../api/FirebaseAPI";
import {
  NutritionalDetailsFirebaseProps,
  NutritionDetailProcessed,
} from "../../../models/NutritionDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";
import { useGlobalMenuOpenContext } from "../../app_header/AppHeaderContext";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { FoodDetailsCarouselResponsiveConfig } from "../../../config/CarouselConfig";
import CarouselMenu from "../../shared/CarouselMenu";
import useWindowDimensions from "../../../functions/ScreenWidth";

const NutritionDetailsComponent = () => {
  const [getNutritionData, setNutritionData] = useState<
    NutritionalDetailsFirebaseProps | undefined
  >();
  const [getImageURL, setImageURL] = useState<string>();
  const [getSeeNext, setSeeNext] = useState<MenuCardProps[] | undefined>();
  const { width } = useWindowDimensions();
  const { nutritionName } = useParams();

  const { setAdditionalStyling } = useGlobalMenuOpenContext();

  useEffect(() => {
    if (nutritionName) {
      setSeeNext(undefined);

      fetchNutritionSeeNext(nutritionName).then((res) => {
        setSeeNext(
          res.map((element) => {
            const newElement = { ...element };

            newElement.path = window.location.pathname.replace(nutritionName, element.path);

            return newElement;
          })
        );
      });

      setAdditionalStyling("bg-white mb-10");
      fetchNutritionData(nutritionName).then((res) => {
        const firebaseName = res[0].find((value) => value.key === "firebaseName");

        if (firebaseName) {
          fetchImages(firebaseName.value).then((r) => setImageURL(r));
        }

        setNutritionData(res);
      });
    }
    return function cleanup() {
      setAdditionalStyling("");
    };
  }, [nutritionName]);

  const processHeader = (data: NutritionDetailProcessed[], headerStyle: string) => {
    if (getNutritionData) {
      const arr: ReactNode[] = [];
      const titleString = data.find((p) => p.key === "name");
      if (titleString) {
        arr.push(
          <h1 key={titleString.key} className={headerStyle} data-testid="details-title">
            {titleString.value}
          </h1>
        );
      }

      const content = data.filter(
        (value) => value.key !== "order" && value.key !== "name" && value.key !== "firebaseName"
      );

      const contentViews: ReactNode[] = content.map((value) => {
        if (value.value.includes("•")) {
          const split = value.value.split("•");

          return (
            <ul key={value.key}>
              {split.map((item) => (
                <li key={item}>
                  <p>{`•  ${item}`}</p>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p className="py-2" key={value.key} data-testid="details-description">
            {value.value}
          </p>
        );
      });

      return arr.concat(contentViews);
    }
    return undefined;
  };

  const processBody = (data: NutritionDetailProcessed[][], headerStyle: string) => {
    const newArr = [...data];
    newArr.shift();
    return newArr.map((item) => <li key={item[0].value}>{processHeader(item, headerStyle)}</li>);
  };

  return (
    <div>
      {getNutritionData && (
        <DetailsComponent>
          <div>
            <DetailsCard img={getImageURL} />
            <div className="pb-10 px-6 xs:px-8 lg:px-10">
              {processHeader(getNutritionData[0], "text-[36px] pb-3 font-quicksand font-semibold ")}
              <ul>
                {processBody(
                  getNutritionData,
                  "text-[16px] pt-4 block lg:text-[20px] font-medium font-semibold font-quicksand"
                )}
              </ul>
            </div>
          </div>
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
export default NutritionDetailsComponent;
