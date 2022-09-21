import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import FoodCategoryData from "../../../data/nutritional_information/FoodCategoryData";
import FoodCategories from "../../../data/nutritional_information/FoodTextData";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { MenuTitleProps } from "../../../models/MenuTitleProps";
import Menu from "../../shared/Menu";

const FoodCategory = () => {
  let { foodCategory } = useParams();
  const location = useLocation();
  const [getCategoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    let category = FoodCategoryData.find(
      (element) => element.path === foodCategory,
    )?.name;
    if (!category) {
      category = FoodCategories.find(
        (element) => element.category === foodCategory,
      )?.category;
    }
    if (category) {
      setCategoryTitle(category);
    }
  });

  function getFoodData() {
    // If params isn't passed from router (e.g for FruitsAndVegetables), get path from URL
    if (!foodCategory) {
      foodCategory = location.pathname.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length);
    }
    const category = FoodCategories.find(
      (element) => element.category === foodCategory,
    );
    return category ? category.options : FoodCategoryData;
  }

  function getTitle(): MenuTitleProps {
    return getCategoryTitle
      ? {
        title: getCategoryTitle,
      }
      : {
        title: "Explore food families",
        subtitle: "Click on a picture to learn more",
      };
  }

  const foodData: MenuCardProps[] = getFoodData();

  return (
    <Menu
      header={{
        title: "Food & Nutrition",
        body: "Food is important, we all need food to be strong and healthy. From here we can learn about the nutritional values in the foods we eat. This will show you the different types of goodness we can get from the different types of food. We will be able to explore what we need to have a healthy, well-balanced diet including carbohydrates, protein as well as vitamins and minerals.",
      }}
      title={getTitle()}
      cards={foodData}
    />
  );
};

export default FoodCategory;
