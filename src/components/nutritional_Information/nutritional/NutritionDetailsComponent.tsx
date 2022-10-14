import React, { ReactNode, useEffect, useState } from "react";
import FirebaseAPI from "../../../api/FirebaseAPI";
import {
  NutritionalDetailsFirebaseProps,
  NutritionDetailProcessed,
} from "../../../models/NutritionDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";
import {useGlobalMenuOpenContext} from "../../app_header/AppHeaderContext";

const NutritionDetailsComponent = (props: { nutritionName: string }) => {
  const [getNutritionData, setNutritionData] = useState<
    NutritionalDetailsFirebaseProps | undefined
  >();
  const [getImageURL, setImageURL] = useState<string>();

  const { setAdditionalStyling } = useGlobalMenuOpenContext();


  useEffect(() => {
    setAdditionalStyling("bg-white mb-10")
    FirebaseAPI.fetchNutritionData(props.nutritionName).then((res) => {
      const firebaseName = res[0].find((value) => value.key === "firebaseName");

      if (firebaseName) {
        FirebaseAPI.fetchImages(firebaseName.value).then((r) => setImageURL(r));
      }

      setNutritionData(res);
    });

    return function cleanup(){
      setAdditionalStyling("")
    }
  }, []);

  const processHeader = (
    data: NutritionDetailProcessed[],
    headerStyle: string
  ) => {
    if (getNutritionData) {
      const arr: ReactNode[] = [];
      const titleString = data.find((p) => p.key === "name");
      if (titleString) {
        arr.push(
          <h1 key={titleString.key} className={headerStyle}>
            {titleString.value}
          </h1>
        );
      }

      const content = data.filter(
        (value) =>
          value.key !== "order" &&
          value.key !== "name" &&
          value.key !== "firebaseName"
      );

      const contentViews: ReactNode[] = content.map((value) => (
        <p key={value.key}>{value.value}</p>
      ));

      return arr.concat(contentViews);
    }
    return undefined;
  };

  const processBody = (
    data: NutritionDetailProcessed[][],
    headerStyle: string
  ) => {
    const newArr = [...data];
    newArr.shift();
    return newArr.map((item) => (
      <li key={item[0].value}>{processHeader(item, headerStyle)}</li>
    ));
  };

  return (
    <div>
    {getNutritionData &&
      <DetailsComponent>
      <div className=" lg:px-10 xs:px-6 px-4 md:px-5 pb-10">
      <DetailsCard
              img={getImageURL}
      />
        {/* {getImageURL && <img src={getImageURL} alt={props.nutritionName}/>} */}
        {processHeader(getNutritionData[0],"text-[36px] lg:pt-4 lg:pl-0 pt-3 pb-3 font-quicksand  font-semibold ")}
        <ul>{processBody(getNutritionData, "text-[16px]  pt-4 block lg:text-[20px] font-medium font-semibold font-quicksand")}</ul>

      </div>


      </DetailsComponent>
      }
  </div>
);
};
export default NutritionDetailsComponent;
