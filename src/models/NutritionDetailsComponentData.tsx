
export interface NutritionDetailsProps {
  name: string;
  description: string;
  firebaseName: string;
}

export type NutritionalDetailsFirebaseProps = NutritionDetailProcessed[][]

export interface NutritionDetailProcessed{
  key: string
  value: string
}

const NutritionDetailsComponentData = {
  MacroAndMicroNutrients: {
    name: "Macronutrients & Micronutrients",
    description: "Macronutrients & Micronutrients Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.dolore magna aliqua.",
    firebaseName: "FoodCategories/Nutrition/MacronutrientsAndMicronutrients.svg",
  },
  Fat: {
    name: "Fat",
    description: "Fat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.dolore magna aliqua.",
    firebaseName: "FoodCategories/Nutrition/Fat.svg",
  },
  SaltAndSugar: {
    name: "Salt And Sugar",
    description: "Salt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.aliqua.",
    firebaseName: "FoodCategories/Nutrition/SugarAndSalt.svg",
  },
  Water: {
    name: "Water",
    description: "Water Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.",
    firebaseName: "FoodCategories/Nutrition/Water.svg",
  },
  Protein: {
    name: "Protein",
    description: "Protein Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.",
    firebaseName: "FoodCategories/Nutrition/Protien.svg",
  },
  Carbs: {
    name: "Carbs",
    description: "Carbs Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.",
    firebaseName: "FoodCategories/Nutrition/Carbohydrates.svg",
  },
};
export default NutritionDetailsComponentData;
