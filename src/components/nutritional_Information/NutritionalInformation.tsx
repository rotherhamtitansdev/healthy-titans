import React from "react";
import { MenuCardProps } from "../../models/MenuCardProps";
import food from "../../img/foodNutritionPage.jpg";
import games from "../../img/nutritionNutritionPage.jpg";
import Menu from "../shared/Menu";

const NutritionalInformation = () => {
  const nutritionalInformationData: MenuCardProps[] = [
    {
      key: 0,
      name: "Food",
      description: "Information on the food we eat!",
      img: food,
      path: "FoodCategory",
    },
    {
      key: 1,
      name: "Nutrition",
      description: "Information on what is in our food!",
      img: games,
      path: "NutritionCategory",
    },
  ];

  return (
    <Menu header={{ title: "", body: "" }} cards={nutritionalInformationData} />
  );
};

export default NutritionalInformation;
