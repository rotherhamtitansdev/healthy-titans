import axios from "axios";
import { NutritionDetailsAPIModel } from "../models/NutritionDetailsAPIModel";

const getNutritionalDetailsSingular = async (food:string):Promise<NutritionDetailsAPIModel> => {
  const url = "https://api.edamam.com/api/nutrition-details?app_id=558ec9f4&app_key=d33fe22a6604c71d5459842dd5030eb3";
  const data = {
    title: food,
    ingr: [
      `100g ${food}`,
    ],
  };

  // Return is of type NutritionDetailsAPIModel
  const res = await axios.post<NutritionDetailsAPIModel>(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export default getNutritionalDetailsSingular;
