import React from "react";
import { useParams } from "react-router";
import { MenuCardProps } from "../../../models/MenuCardProps";
import Menu from "../../shared/Menu";
import FoodCategoryData from "../../../data/nutritional_information/FoodCategoryData";
import FoodCategories from "../../../data/nutritional_information/FoodTextData";

const FoodCategory = () => {
  const { foodCategory } = useParams();

  function getFoodData() {
    const category = FoodCategories.find(
      (element) => element.category === foodCategory,
    );
    return category ? category.options : FoodCategoryData;
  }

  const foodData: MenuCardProps[] = getFoodData();

  return (
    <Menu
      header={{
        title: "Food & Nutrition",
        body: "Food is important, we all need food to be strong and healthy. From here we can learn about the nutritional values in the foods we eat. This will show you the different types of goodness we can get from the different types of food. We will be able to explore what we need to have a healthy, well-balanced diet including carbohydrates, protein as well as vitamins and minerals.",
      }}
      title={{
        title: "Explore food families",
        subtitle: "Click on a picture to learn more",
      }}
      cards={foodData}
    />
  );
};

export default FoodCategory;
