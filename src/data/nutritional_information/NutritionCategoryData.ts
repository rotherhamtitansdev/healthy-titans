import { MenuCardProps } from "../../models/MenuCardProps";

const NutritionalCategoryData: MenuCardProps[] = [
  {
    key: 0,
    name: "Macronutrients & Micronutrients",
    path: "Nutrition/MacroAndMicroNutrients",
    firebaseName: "FoodCategories/Nutrition/MacronutrientsAndMicronutrients.svg",
  },
  {
    key: 1,
    name: "Protein",
    firebaseName: "FoodCategories/Nutrition/Protien.svg",
    path: "Nutrition/Protein",
  },
  {
    key: 2,
    name: "Fat",
    firebaseName: "FoodCategories/Nutrition/Fat.svg",
    path: "Nutrition/Fat",
  },
  {
    key: 3,
    name: "Carbs",
    firebaseName: "FoodCategories/Nutrition/Carbohydrates.svg",
    path: "Nutrition/Carbs",
  },
  {
    key: 4,
    name: "Salt & Sugar",
    firebaseName: "FoodCategories/Nutrition/SugarAndSalt.svg",
    path: "Nutrition/SaltAndSugar",
  },
  {
    key: 5,
    name: "Water",
    firebaseName: "FoodCategories/Nutrition/Water.svg",
    path: "Nutrition/Water",
  },
];

export default NutritionalCategoryData;
