import React, {ReactNode, useEffect, useState} from "react";
import FirebaseAPI from "../../../api/FirebaseAPI";
import {
  NutritionalDetailsFirebaseProps, NutritionDetailProcessed,
} from "../../../models/NutritionDetailsComponentData";


const NutritionDetailsComponent = (props: { nutritionName: string }) => {
  const [getNutritionData, setNutritionData] = useState<
      NutritionalDetailsFirebaseProps | undefined
  >();
  const [getImageURL, setImageURL] = useState<string>();

  useEffect(() => {
    FirebaseAPI.fetchNutritionData(props.nutritionName).then(
      (res) => {

        const firebaseName = res[0].find(value => value.key === "firebaseName")

        if (firebaseName) {
          FirebaseAPI.fetchImages(firebaseName.value).then(r => setImageURL(r))
        }

        setNutritionData(res)
      }
    );
  }, []);

  const processHeader = (data: NutritionDetailProcessed[], headerStyle: string) => {
    if(getNutritionData) {
      console.log(data)

      const arr:ReactNode[] = []
      const titleString = data.find(p => p.key === "name")
      if (titleString) {
        arr.push(<h1 key={titleString.key} className={headerStyle}>{titleString.value}</h1>)
      }

      const content = data.filter(value => value.key !== "order" && value.key !== "name" && value.key !== "firebaseName")

      const contentViews:ReactNode[] = content.map(value =>  <p key={value.key}>{value.value}</p> )

      return arr.concat(contentViews)
    }
    return undefined
  }

  const processBody = (data: NutritionDetailProcessed[][], headerStyle: string) => {
    const newArr = [...data]
    newArr.shift()
    return newArr.map(item => <li key={item[0].value}>{processHeader(item,headerStyle)}</li>)
  }

  return (
    <div>
      {getNutritionData &&
        <div>
          {getImageURL && <img src={getImageURL} alt={props.nutritionName}/>}
          {processHeader(getNutritionData[0],"text-[36px]")}
          <ul>{processBody(getNutritionData, "text-[24px]")}</ul>
        </div>
        }
    </div>
  );
};
export default NutritionDetailsComponent;
