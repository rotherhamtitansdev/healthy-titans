import fat from "../../img/fat.jpg";
import salt from "../../img/salt.jpg";
import sugar from "../../img/sugar.jpg";
import protein from "../../img/protein.jpg";
import carbs from "../../img/carbs.jpg";
import { MenuCardProps } from "../../models/MenuCardProps";

const NutritionalCategoryData: MenuCardProps[] = [
  {
    key: 0,
    name: "Fat",
    description: "Information about Fat!",
    img: fat,
    path: "Fat",
  },
  {
    key: 1,
    name: "Salt",
    description: "Information about Salt!",
    img: salt,
    path: "Salt",
  },
  {
    key: 2,
    name: "Sugar",
    description: "Information about Sugar!",
    img: sugar,
    path: "Sugar",
  },
  {
    key: 3,
    name: "Protein",
    description: "Information about Protein!",
    img: protein,
    path: "Protein",
  },
  {
    key: 4,
    name: "Carbs",
    description: "Information about Carbs!",
    img: carbs,
    path: "Carbs",
  },
];

export default NutritionalCategoryData;
