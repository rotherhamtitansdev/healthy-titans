import { MenuCardProps } from "../../models/MenuCardProps";

const FoodCategoryData: MenuCardProps[] = [
  {
    key: 0,
    name: "Meat",
    description: "Information about Meat!",
    path: "Meat",
    firebaseName: "FoodCategories/Meat/Meat.svg",
  },
  {
    key: 1,
    name: "Fish",
    description: "Information about Fish!",
    path: "Fish",
    firebaseName: "FoodCategories/Fish/Fish.svg",
  },
  {
    key: 2,
    name: "Fruit & Vegetables",
    description: "Information about Fruits!",
    path: "FruitsAndVegetables",
    firebaseName: "FoodCategories/Fruits/FruitAndVeg.svg",
  },
  {
    key: 3,
    name: "Dairy & Eggs",
    description: "Information about Dairy & Eggs!",
    path: "DairyAndEggs",
    firebaseName: "FoodCategories/DairyAndEggs/DairyAndEggs.svg",
  },
  {
    key: 4,
    name: "Fast Food",
    description: "Information about Fast Food!",
    path: "JunkFood",
    firebaseName: "FoodCategories/JunkFood/FastFood.svg",
  },
  {
    key: 5,
    name: "Sweets",
    description: "Information about Sweets!",
    path: "Sweets",
    firebaseName: "FoodCategories/Sweets/Sweets.svg",
  },
];

export default FoodCategoryData;
