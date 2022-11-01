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

  interface SubCategoryProps {
    subCategory: MenuCardProps[];
  }

  const [getCategoryTitle, setCategoryTitle] = useState("");
  const [getFoodCategoryData, setFoodCategoryData] = useState<MenuCardProps[]>([]);
  const [getFoodSubcategoryData, setFoodSubcategoryData] = useState<SubCategoryProps>();

  const defaultFoodCategory = "FoodAndNutrition";

  function setParam() {
    foodCategory = location.pathname.slice(
      location.pathname.lastIndexOf("/") + 1,
      location.pathname.length
    );
  }

  useEffect(() => {
    if (!foodCategory) {
      setParam();
    }

    if (foodCategory && foodCategory !== defaultFoodCategory) {
      FirebaseAPI.fetchDataFromSubpath("FoodSubCategoryData", foodCategory).then((data) => {
        setFoodSubcategoryData(data as SubCategoryProps);
      });
    } else {
      FirebaseAPI.fetchDataFromPath("FoodCategoryData").then((data) => {
        setFoodCategoryData(data as MenuCardProps[]);
      });
    }
  }, []);

  function navigateBackToNutrionalInfo() {
    setCategoryTitle(defaultFoodCategory);
    navigate("/FoodAndNutrition");
  }

  function readyToCallSetTitle() {
    if (
      getFoodCategoryData &&
      getFoodCategoryData.length !== 0 &&
      foodCategory === defaultFoodCategory
    ) {
      setCategoryTitle(defaultFoodCategory);
    } else if (
      getFoodSubcategoryData &&
      getFoodSubcategoryData.subCategory.length !== 0 &&
      foodCategory !== defaultFoodCategory
    ) {
      setCategoryTitle(getFoodSubcategoryData.subCategory[0].path);
    } else {
      navigateBackToNutrionalInfo();
    }
  }

  useEffect(() => {
    if (
      getFoodCategoryData.length > 0 ||
      (getFoodSubcategoryData && getFoodSubcategoryData?.subCategory.length > 0)
    ) {
      if (!foodCategory) {
        setParam();
      }
      readyToCallSetTitle();
    }
  }, [getFoodCategoryData, getFoodSubcategoryData]);

  function getTitle(): MenuTitleProps {
    return getCategoryTitle !== defaultFoodCategory
      ? {
          title: getCategoryTitle,
        }
      : {
          title: "Explore food families",
          subtitle: "Click on a picture to learn more",
        };
  }

  function getFoodData() {
    if (getFoodSubcategoryData) {
      return getFoodSubcategoryData.subCategory;
    }
    return getFoodCategoryData;
  }

  function checkReadyToRender() {
    if (!foodCategory) setParam();
    if (foodCategory === defaultFoodCategory) {
      if (getFoodCategoryData && getFoodCategoryData.length > 0) {
        return true;
      }
    }
    if (getFoodSubcategoryData && getFoodSubcategoryData.subCategory.length > 0) return true;
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
