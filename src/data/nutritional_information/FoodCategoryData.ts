import { MenuCardProps } from "../../models/MenuCardProps";

const FoodCategoryData: MenuCardProps[] = [
  {
    key: 0,
    name: "Meat",
    path: "Meat",
    firebaseName: "FoodCategories/Meat/Meat.svg",
  },
  {
    key: 1,
    name: "Fish",
    path: "Fish",
    firebaseName: "FoodCategories/Fish/Fish.svg",
  },
  {
    key: 2,
    name: "Fruit & Vegetables",
    path: "FruitAndVegetables",
    firebaseName: "FoodCategories/Fruits/FruitAndVeg.svg",
  },
  {
    key: 3,
    name: "Dairy & Eggs",
    path: "DairyAndEggs",
    firebaseName: "FoodCategories/DairyAndEggs/DairyAndEggs.svg",
  },
  {
    key: 4,
    name: "Fast Food",
    path: "FastFood",
    firebaseName: "FoodCategories/JunkFood/FastFood.svg",
  },
  {
    key: 5,
    name: "Sweets",
    path: "Sweets",
    firebaseName: "FoodCategories/Sweets/Sweets.svg",
  },
];

export default FoodCategoryData;
