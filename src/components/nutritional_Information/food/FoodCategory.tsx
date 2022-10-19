import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import FoodCategoryData from "../../../data/nutritional_information/FoodCategoryData";
import FoodSubCategories from "../../../data/nutritional_information/FoodSubCategories";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { MenuTitleProps } from "../../../models/MenuTitleProps";
import Menu from "../../shared/Menu";
import MenuHeader from "../../app_header/header/MenuHeader";
import AppHeader from "../../app_header/AppHeader";


const FoodCategory = () => {
  let { foodCategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate()
  const [getCategoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    let category = FoodCategoryData.find((element) => element.path === foodCategory)?.name;
    if (!category) {
      category = FoodSubCategories.find((element) => element.category === foodCategory)?.category;
    }
    if (category) {
      setCategoryTitle(category);
    }
    else{
        navigate("/NutritionalInformation")
    }

  },[]);

  function getFoodData() {
    // If params isn't passed from router (e.g for FruitAndVegetables), get path from URL
    if (!foodCategory) {
      foodCategory = location.pathname.slice(
        location.pathname.lastIndexOf("/") + 1,
        location.pathname.length
      );
    }
    const category = FoodSubCategories.find((element) => element.category === foodCategory);
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
      <div>
          <AppHeader>
              <MenuHeader title="Food & Nutrition" body="Food is important, we all need food to be strong and healthy. From here we can learn about the nutritional values in the foods we eat. This will show you the different types of goodness we can get from the different types of food. We will be able to explore what we need to have a healthy, well-balanced diet including carbohydrates, protein as well as vitamins and minerals."/>
          </AppHeader>
        <Menu
          title={getTitle()}
          cards={foodData}
        />
      </div>
  );
};

export default FoodCategory;
