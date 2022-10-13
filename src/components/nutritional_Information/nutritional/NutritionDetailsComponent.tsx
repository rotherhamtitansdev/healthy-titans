import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import FirebaseAPI from "../../../api/FirebaseAPI";
import { DetailsCardProps } from "../../../models/DetailsCardProps";
import NutritionDetailsComponentData, {
  NutritionDetailsProps,
} from "../../../models/NutritionDetailsComponentData";
import DetailsCard from "../../shared/DetailsCard";
import DetailsComponent from "../../shared/DetailsComponent";

const NutritionDetailsComponent = (props: { nutritionName: string }) => {
  const [getNutritionData, setNutritionData] = useState<
  NutritionDetailsProps | undefined
  >();
  const [getImageURL, setImageURL] = useState<string>();
  // const { nutritionName } = useParams();

  useEffect(() => {
    FirebaseAPI.fetchNutritionData(props.nutritionName).then(
      (res:any) => {

        if (res) {
          if (res[0].firebaseName) {
            FirebaseAPI.fetchImages(res[0].firebaseName).then((URI) =>
              setImageURL(URI)
            );
          }
          setNutritionData(res[0] as NutritionDetailsProps);
        }
      }
    );
  }, []);

  // useEffect(() => {
  //   setNutritionData(
  //     NutritionDetailsComponentData[
  //       props.nutritionName as unknown as keyof typeof NutritionDetailsComponentData
  //     ]
  //   );
  // });
  return (
    <div>
      {getNutritionData && (
        <DetailsComponent>
          <DetailsCard
            name={getNutritionData.name}
            description={getNutritionData.description}
            img={getImageURL}
            additionalStyling="lg:w-5/12"
          />
        </DetailsComponent>
      )}
    </div>
  );
};
export default NutritionDetailsComponent;
