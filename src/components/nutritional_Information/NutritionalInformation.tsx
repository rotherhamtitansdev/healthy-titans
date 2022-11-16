import React from "react";
import NutritionCategory from "./nutritional/NutritionCategory";
import FoodCategoryComponent from "./food/FoodCategory";
import MenuHeader from "../app_header/header/MenuHeader";
import AppHeader from "../app_header/AppHeader";

const NutritionalInformation = (props: { showFood: boolean }) => (
  <>
    {props.showFood && <FoodCategoryComponent />}
    {!props.showFood && (
      <AppHeader>
        <MenuHeader
          title={props.showFood ? "Food & Nutrition" : "Nutrition"}
          body="Food is important, we all need food to be strong and healthy. From here we can learn about the nutritional values in the foods we eat. This will show you the different types of goodness we can get from the different types of food. We will be able to explore what we need to have a healthy, well-balanced diet including carbohydrates, protein as well as vitamins and minerals."
        />
      </AppHeader>
    )}
    <NutritionCategory />
  </>
);

export default NutritionalInformation;
