import React from "react";
import { useParams } from "react-router";
import { MenuCardProps } from "../../../models/MenuCardProps";
import Menu from "../../shared/Menu";
import FoodCategoryData from "../../../data/nutritional_information/FoodCategoryData";
import FoodCategories from "../../../data/nutritional_information/FoodTextData";

const FoodCategory = () => {
  const { foodCategory } = useParams();

  function getFoodData() {
    const category = FoodCategories.find((element) => element.category === foodCategory);
    return category ? category.options : FoodCategoryData;
  }

  const foodData: MenuCardProps[] = getFoodData();

  return (
    <Menu header={{ title: "", body: "" }} cards={foodData} />
  );
};

export default FoodCategory;
