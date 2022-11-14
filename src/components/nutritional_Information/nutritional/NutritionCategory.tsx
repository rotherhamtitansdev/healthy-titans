import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { fetchDataFromPath } from "../../../api/FirebaseAPI";
import Menu from "../../shared/Menu";

interface NutritionCardProps extends MenuCardProps {
  description: string;
}

const NutritionCategory = () => {
  const { nutritionCategory } = useParams();
  const [getNutritionCategoryData, setCategoryNutritionData] = useState<NutritionCardProps[]>([]);
  const loc = useLocation();

  useEffect(() => {
    if (getNutritionCategoryData.length === 0) {
      fetchDataFromPath("NutritionData").then((data) =>
        setCategoryNutritionData(data as NutritionCardProps[])
      );
    }
  }, []);

  function getNutritionData() {
    const newData: NutritionCardProps[] = [];
    let data = [...getNutritionCategoryData];

    if (nutritionCategory) {
      data.forEach((item) => {
        if (item.path === nutritionCategory) {
          newData.push(item);
        }
      });
      if (newData.length > 0) return newData;
    }

    // Since change of name to Food and Nutrition base name ends with AndNutrition
    // so check has to accomodate it only ending with just /Nutrition
    if (loc.pathname.endsWith("/Nutrition") || loc.pathname.endsWith("/Nutrition/")) {
      data = data.map((element) => {
        const newElement = { ...element };
        newElement.path = newElement.path.replace("Nutrition/", "");
        return newElement;
      });
    }
    return data;
  }

  return (
    <div>
      {getNutritionCategoryData.length > 0 && (
        <Menu
          title={{
            title: "Explore nutrition",
            subtitle: "Click on the type of nutritional information you want to learn about",
          }}
          cards={getNutritionData()}
        />
      )}
    </div>
  );
};

export default NutritionCategory;
