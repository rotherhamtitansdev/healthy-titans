import React, {ReactNode, useEffect, useState} from "react";
import FirebaseAPI from "../../../api/FirebaseAPI";
import {
  NutritionalDetailsFirebaseProps,
} from "../../../models/NutritionDetailsComponentData";


const NutritionDetailsComponent = (props: { nutritionName: string }) => {
  const [getNutritionData, setNutritionData] = useState<
      NutritionalDetailsFirebaseProps | undefined
  >();
  const [getImageURL, setImageURL] = useState<string>();

  useEffect(() => {
    FirebaseAPI.fetchNutritionData(props.nutritionName).then(
      (res) => {
        console.log(res)
        setNutritionData(res)
        // if (res) {
        //   if (res[0].firebaseName) {
        //     FirebaseAPI.fetchImages(res[0].firebaseName).then((URI) =>
        //       setImageURL(URI)
        //     );
        //   }
        // }
      }
    );
  }, []);

  const processHeader = () => {
    if(getNutritionData) {

      const arr:ReactNode[] = []
      const titleString = getNutritionData[0].find(p => p.key === "name")
      if (titleString) {
        arr.push(<h1 key={titleString.key} className="text-[36px]">{titleString.value}</h1>)
      }

      const content = getNutritionData[0].filter(value => value.key !== "order" && value.key !== "name")

      const contentViews:ReactNode[] = content.map(value =>  <p key={value.key}>{value.value}</p> )

      return arr.concat(contentViews)
    }
    return undefined
  }

  return (
    <div>
      {getNutritionData && processHeader()}
    </div>
  );
};
export default NutritionDetailsComponent;
