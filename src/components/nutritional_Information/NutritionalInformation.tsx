import React from "react";
import NutritionCategory from "./nutritional/NutritionCategory";
import FoodCategoryComponent from "./food/FoodCategory";
import MenuHeader from "../app_header/header/MenuHeader";
import AppHeader from "../app_header/AppHeader";

const NutritionalInformation = (props: { showFood: boolean }) => (
  <>
    {!props.showFood && (
      <AppHeader>
        <MenuHeader
          title={props.showFood ? "Food & Nutrition" : "Nutrition"}
          body="Food is important, we all need food to be strong and healthy. From here we can learn about the different nutrients in the foods we eat. This will show you the different types of goodness we can get from the different types of food. We will be able to explore what we need to have a healthy, well-balanced diet including protein, carbohydrates and fat as well as the all-important vitamins, minerals and water."
        />
      </AppHeader>
    )}

    <div className="px-6 md:px-10">
      {props.showFood && <FoodCategoryComponent />}
    </div>

    <NutritionCategory />
  </>
);

export default NutritionalInformation;
