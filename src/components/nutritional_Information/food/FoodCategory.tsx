import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { MenuTitleProps } from "../../../models/MenuTitleProps";
import Menu from "../../shared/Menu";
import MenuHeader from "../../app_header/header/MenuHeader";
import AppHeader from "../../app_header/AppHeader";
import FirebaseAPI from "../../../api/FirebaseAPI";

const FoodCategory = () => {
  let { foodCategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [getCategoryTitle, setCategoryTitle] = useState("");
  const [getFoodCategoryData, setFoodCategoryData] = useState<MenuCardProps[]>([]);
  const [getFoodSubcategoryData, setFoodSubcategoryData] = useState<MenuCardProps[]>([]);

  function setParamFoodCat() {
    foodCategory = location.pathname.slice(
      location.pathname.lastIndexOf("/") + 1,
      location.pathname.length
    );
    console.log("SET PARAM", foodCategory);
  }

  function navigateBackToNutrionalInfo() {
    console.log("REFRESH PAGE");
    setCategoryTitle("Food and Nutrition");
    // if the category is not found then redirect to the food and nutrition information page
    navigate("/FoodAndNutrition");
  }

  function readyToCallSetCategoryTitle() {
    console.log(foodCategory, getFoodCategoryData, getFoodSubcategoryData);
    if (
      getFoodCategoryData &&
      getFoodCategoryData.length !== 0 &&
      getFoodCategoryData.length > 1 &&
      foodCategory !== "FoodAndNutrition"
    ) {
      console.log("ARRAY LENGTH", getFoodCategoryData.length);
      setCategoryTitle(getFoodCategoryData[0].path);
    } else if (
      getFoodSubcategoryData &&
      getFoodSubcategoryData.length !== 0 &&
      foodCategory !== "FoodAndNutrition"
    ) {
      setCategoryTitle(getFoodSubcategoryData[0].path);
    } else {
      navigateBackToNutrionalInfo();
    }
  }

  useEffect(() => {
    console.log("CALL USEEFFECT", foodCategory, getFoodCategoryData);
    if (!foodCategory) {
      setParamFoodCat();
    }

    if (getFoodCategoryData.length === 0 && getFoodSubcategoryData.length === 0) {
      // Got no data so make call to get data
      // find the category from hard coded data and match the path with the current category
      if (foodCategory && foodCategory !== "FoodAndNutrition") {
        console.log("HERE", foodCategory, typeof getFoodCategoryData);
        FirebaseAPI.fetchSpecifiedChildOfSpecifiedComponentData(
          "FoodCategoryData",
          foodCategory
        ).then((categoryData) => {
          setFoodCategoryData(categoryData as MenuCardProps[]);
        });

        FirebaseAPI.fetchSpecifiedChildOfSpecifiedComponentData(
          "FoodSubCategoryData",
          foodCategory
        ).then((subcategoryData) => {
          setFoodSubcategoryData(subcategoryData as MenuCardProps[]);
        });
      } else {
        console.log("Check food category", foodCategory);
        FirebaseAPI.fetchSpecifiedComponentData("FoodCategoryData").then((categoryData) => {
          setFoodCategoryData(categoryData as MenuCardProps[]);
          console.log("CATEGORY DATA", categoryData, getFoodCategoryData);
        });

        FirebaseAPI.fetchSpecifiedComponentData("FoodSubCategoryData").then((subcategoryData) => {
          setFoodSubcategoryData(subcategoryData as MenuCardProps[]);
          console.log("SUBCATEGORY DATA", subcategoryData, getFoodSubcategoryData);
        });
      }
      // Got data so now safe after setStates to call next methods
    } else {
      console.log("AT ELSE", foodCategory, getFoodCategoryData, getFoodSubcategoryData);
      readyToCallSetCategoryTitle();
    }
  }, []);

  function getFoodData() {
    return getFoodCategoryData;
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

  return (
    <div>
      <AppHeader>
        <MenuHeader
          title="Food & Nutrition"
          body="Food is important, we all need food to be strong and healthy. From here we can learn about the nutritional values in the foods we eat. This will show you the different types of goodness we can get from the different types of food. We will be able to explore what we need to have a healthy, well-balanced diet including carbohydrates, protein as well as vitamins and minerals."
        />
      </AppHeader>
      {getFoodCategoryData && getFoodCategoryData.length !== 0 && getCategoryTitle && (
        <Menu title={getTitle()} cards={getFoodData()} />
      )}
    </div>
  );
};

export default FoodCategory;
