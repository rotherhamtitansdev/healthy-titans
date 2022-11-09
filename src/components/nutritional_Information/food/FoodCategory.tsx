import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import { MenuCardProps } from "../../../models/MenuCardProps";
import { SubCategoryProps } from "../../../models/SubCategoryProps";
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
  const [getFoodSubcategoryData, setFoodSubcategoryData] = useState<SubCategoryProps>();
  // Set the path of the page as a variable to allow easy
  // comparison if searching for all categories or subcategories
  const defaultFoodCategory = "FoodAndNutrition";

  // Check against the path to determine if within /FoodAndNutrition or
  // /FoodAndNutrition/Subcategory for setting the foodcategory parameter
  function setParam() {
    foodCategory = location.pathname.slice(
      location.pathname.lastIndexOf("/") + 1,
      location.pathname.length
    );
  }

  // Fallback safety method if on incorrect subcategory link or data failure
  function navigateBackToNutrionalInfo() {
    setCategoryTitle(defaultFoodCategory);
    navigate("/FoodAndNutrition");
  }

  // Use Effect to fire on page load
  useEffect(() => {
    // Set the foodCategory paramter if undefined to allow for later checks
    if (!foodCategory) {
      setParam();
    }

    // Get Subcategories if the category is not the default
    if (foodCategory && foodCategory !== defaultFoodCategory) {
      FirebaseAPI.fetchDataFromSubpath("FoodSubCategoryData", foodCategory).then((data) => {
        if (data) {
          setFoodSubcategoryData(data as SubCategoryProps);
        } else {
          navigateBackToNutrionalInfo();
        }
      });
      FirebaseAPI.fetchDataFromPath("FoodCategoryData").then((data) => {
        if (data) {
          setFoodCategoryData(data as MenuCardProps[]);
        } else {
          navigateBackToNutrionalInfo();
        }
      });
    } else {
      // Get all categories if the category is the default and on /FoodAndNutrition
      FirebaseAPI.fetchDataFromPath("FoodCategoryData").then((data) => {
        if (data) {
          setFoodCategoryData(data as MenuCardProps[]);
        } else {
          navigateBackToNutrionalInfo();
        }
      });
    }
  }, []);

  // Method to be fired once the data has been collected and states set
  // Set the state of the category title element or safely fail
  function readyToCallSetTitle() {
    if (foodCategory === defaultFoodCategory) {
      setCategoryTitle(defaultFoodCategory);
    } else if (
      getFoodSubcategoryData &&
      getFoodSubcategoryData.subCategory.length !== 0 &&
      foodCategory !== defaultFoodCategory &&
      foodCategory
    ) {
      const title = getFoodCategoryData.find((element) => element.path === foodCategory)?.name;
      if (title) {
        setCategoryTitle(title);
      }
    } else {
      navigateBackToNutrionalInfo();
    }
  }

  // Use Effect to trigger on changing of states of data elements
  // Catch after set states have completed to allow continuation of logic
  // following asynchronicity of prior methods
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

  // If on /FoodAndNutrition then show explanatory subtitle as well
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

  // Check which data set to show and generate as cards
  function getFoodData() {
    if (getFoodSubcategoryData) {
      return getFoodSubcategoryData.subCategory;
    }
    return getFoodCategoryData;
  }

  // safety check as to when all data and objects are ready for the cards to be shown
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
