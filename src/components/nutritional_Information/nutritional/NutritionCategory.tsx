import React from "react";
import { useParams, useLocation } from "react-router";
import { MenuCardProps } from "../../../models/MenuCardProps";
import NutritionCategoryData from "../../../data/nutritional_information/NutritionCategoryData";
import {
  FatTextData,
  SaltAndSugarTextData,
  WaterTextData,
  ProteinTextData,
  CarbsTextData,
  MacroAndMicroTextData,
} from "../../../data/nutritional_information/NutritionCategoryTextData";
import Menu from "../../shared/Menu";

const NutritionCategory = () => {
  const { nutritionCategory } = useParams();
  const loc = useLocation()

  function getNutritionData() {
    let data = [...NutritionCategoryData]
    if(loc.pathname.endsWith("Nutrition") || loc.pathname.endsWith("Nutrition/")){
      data = data.map(element => {
        const newElement = {...element}
        newElement.path = newElement.path.replace("Nutrition/","")
        return newElement
      })
    }
    switch (nutritionCategory) {
      case "Fat":
        return FatTextData;
      case "SaltAndSugar":
        return SaltAndSugarTextData;
      case "Water":
        return WaterTextData;
      case "Protein":
        return ProteinTextData;
      case "Carbs":
        return CarbsTextData;
      case "MacroAndMicroNutrients":
        return MacroAndMicroTextData;
      default:
        return data;
    }
  }

  const nutritionData: MenuCardProps[] = getNutritionData();

  return (
    <Menu
      title={{
        title: "Explore nutrition",
        subtitle: "Click on the type of nutritional information you want to learn about",
      }}
      cards={nutritionData}
    />
  );
};

export default NutritionCategory;
