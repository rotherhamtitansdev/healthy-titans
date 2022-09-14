import { MenuCardProps } from "../../models/MenuCardProps";

const NutritionalCategoryData: MenuCardProps[] = [
  {
    key: 0,
    name: "Macronutrients & Micronutrients",
    description: "Information about Macronutrients & Micronutrients!",
    path: "MacroAndMicroNutrients",
    firebaseName: "FoodCategories/Nutrition/MacronutrientsAndMicronutrients.svg",
  },
  {
    key: 1,
    name: "Protein",
    description: "Information about Protein!",
    firebaseName: "FoodCategories/Nutrition/Protien.svg",
    path: "Protein",
  },
  {
    key: 2,
    name: "Fat",
    description: "Information about Fat!",
    firebaseName: "FoodCategories/Nutrition/Fat.svg",
    path: "Fat",
  },
  {
    key: 3,
    name: "Carbs",
    description: "Information about Carbs!",
    firebaseName: "FoodCategories/Nutrition/Carbohydrates.svg",
    path: "Carbs",
  },
  {
    key: 4,
    name: "Salt & Sugar",
    description: "Information about Salt & Sugar!",
    firebaseName: "FoodCategories/Nutrition/SugarAndSalt.svg",
    path: "SaltAndSugar",
  },
  {
    key: 5,
    name: "Water",
    description: "Information about Water!",
    firebaseName: "FoodCategories/Nutrition/Water.svg",
    path: "Water",
  },
];

export default NutritionalCategoryData;
