import React from "react";
import { useParams } from "react-router";
import { MenuCardProps } from "../../../models/MenuCardProps";
import NutritionCategoryData from "../../../data/nutritional_information/NutritionCategoryData";
import {
  FatTextData,
  SaltTextData,
  SugarTextData,
  ProteinTextData,
  CarbsTextData,
} from "../../../data/nutritional_information/NutritionCategoryTextData";
import Menu from "../../shared/Menu";

const NutritionCategory = () => {
  const { nutritionCategory } = useParams();

  function getNutritionData() {
    switch (nutritionCategory) {
      case "Fat":
        return FatTextData;
      case "Salt":
        return SaltTextData;
      case "Sugar":
        return SugarTextData;
      case "Protein":
        return ProteinTextData;
      case "Carbs":
        return CarbsTextData;
      default:
        return NutritionCategoryData;
    }
  }

  const nutritionData: MenuCardProps[] = getNutritionData();

  return (
    <Menu header={{ title: "", body: "" }} cards={nutritionData} />
  );
};

export default NutritionCategory;
