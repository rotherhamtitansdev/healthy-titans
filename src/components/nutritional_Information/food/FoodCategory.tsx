import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { MenuTitleProps } from "../../../models/MenuTitleProps";
import Menu from "../../shared/Menu";
import MenuHeader from "../../app_header/header/MenuHeader";
import AppHeader from "../../app_header/AppHeader";
import FirebaseAPI from "../../../api/FirebaseAPI";

const FoodCategoryComponent = () => {
  let { foodCategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [getCategoryTitle, setCategoryTitle] = useState("");
  const [getFoodCategoryData, setFoodCategoryData] = useState<MenuCardProps[]>([]);
  const [getFoodSubcategoryData, setFoodSubcategoryData] = useState<MenuCardProps[]>([]);
  const defaultFoodCategory = "FoodAndNutrition";

  function setParam() {
    foodCategory = location.pathname.slice(
      location.pathname.lastIndexOf("/") + 1,
      location.pathname.length
    );
    console.log("SET PARAM", foodCategory);
  }

  useEffect(() => {
    console.log("CALL USEEFFECT", foodCategory, getFoodCategoryData);
    if (!foodCategory) {
      setParam();
    }

    if (foodCategory && foodCategory !== defaultFoodCategory) {
      FirebaseAPI.fetchDataFromSubpath("FoodSubCategoryData", foodCategory).then((data) => {
        setFoodSubcategoryData(data as MenuCardProps[]);
        console.log("SUBCATEGORY DATA", data, getFoodSubcategoryData, foodCategory);
      });
    } else {
      console.log("Check food category", foodCategory);
      FirebaseAPI.fetchDataFromPath("FoodCategoryData").then((data) => {
        setFoodCategoryData(data as MenuCardProps[]);
        console.log("CATEGORY DATA", data, getFoodCategoryData, foodCategory);
      });
    }
  }, []);

  function navigateBackToNutrionalInfo() {
    console.log("REFRESH PAGE");
    setCategoryTitle(defaultFoodCategory);
    // if the category is not found then redirect to the food and nutrition information page
    navigate(`/${defaultFoodCategory}`);
  }

  function readyToCallSetTitle() {
    console.log("Set Title", foodCategory, getFoodCategoryData, getFoodSubcategoryData);
    if (
      getFoodCategoryData &&
      getFoodCategoryData.length !== 0 &&
      foodCategory === defaultFoodCategory
    ) {
      console.log(
        "EQUALITY CHECK",
        foodCategory,
        defaultFoodCategory,
        foodCategory === defaultFoodCategory
      );
      setCategoryTitle(defaultFoodCategory);
    } else if (
      getFoodSubcategoryData &&
      getFoodSubcategoryData.length !== 0 &&
      foodCategory !== defaultFoodCategory
    ) {
      setCategoryTitle(getFoodSubcategoryData[0].path);
    } else {
      console.log("BEFORE REFRESH", getCategoryTitle, getCategoryTitle.length);
      navigateBackToNutrionalInfo();
    }
  }

  useEffect(() => {
    console.log("Second Use Effect", getFoodCategoryData, getFoodSubcategoryData, foodCategory);
    console.log(
      "Second Use Check",
      getFoodCategoryData.length,
      getFoodSubcategoryData.length,
      Array.isArray(getFoodSubcategoryData)
    );
    if (getFoodCategoryData.length > 0 || getFoodSubcategoryData.length > 0) {
      if (!foodCategory) {
        setParam();
      }
      readyToCallSetTitle();
    }
  }, [getFoodCategoryData, getFoodSubcategoryData]);

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

  function getFoodData() {
    console.log("GET FOOD DATA");
    if (foodCategory === defaultFoodCategory) {
      return getFoodCategoryData;
    }
    return getFoodSubcategoryData;
  }

  function checkReadyToRender() {
    console.log("READY TO RENDER", foodCategory);
    if (!foodCategory) setParam();
    if (foodCategory === defaultFoodCategory) {
      if (getFoodCategoryData && getFoodCategoryData.length > 0) {
        console.log("RENDER");
        return true;
      }
    }
    if (getFoodSubcategoryData && getFoodSubcategoryData.length > 0) return true;
    return false;
  }

  return (
    <div>
      <AppHeader>
        <MenuHeader
          title="Food & Nutrition"
          body="Food is important, we all need food to be strong and healthy. From here we can learn about the nutritional values in the foods we eat. This will show you the different types of goodness we can get from the different types of food. We will be able to explore what we need to have a healthy, well-balanced diet including carbohydrates, protein as well as vitamins and minerals."
        />
      </AppHeader>
      {checkReadyToRender() && <Menu title={getTitle()} cards={getFoodData()} />}
    </div>
  );
};

export default FoodCategoryComponent;
