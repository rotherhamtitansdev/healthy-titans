import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import FoodCategoryData from "../../../data/nutritional_information/FoodCategoryData";
import FoodCategories from "../../../data/nutritional_information/FoodSubCategoryData";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { MenuTitleProps } from "../../../models/MenuTitleProps";
import Menu from "../../shared/Menu";

const FoodCategory = () => {
  let { foodCategory } = useParams();
  const location = useLocation();
  const [getCategoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    let category = FoodCategoryData.find((element) => element.path === foodCategory)?.name;
    if (!category) {
      category = FoodCategories.find((element) => element.category === foodCategory)?.category;
    }
    if (category) {
      setCategoryTitle(category);
    }
  });

  function getFoodData() {
    // If params isn't passed from router (e.g for FruitAndVegetables), get path from URL
    if (!foodCategory) {
      foodCategory = location.pathname.slice(
        location.pathname.lastIndexOf("/") + 1,
        location.pathname.length
      );
    }
    const category = FoodCategories.find((element) => element.category === foodCategory);
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
      title={getTitle()}
      cards={foodData}
    />
  );
};

export default FoodCategory;
