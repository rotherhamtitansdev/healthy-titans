import burrito from "../img/burritos.jpeg";
import sweetPotatoCurry from "../img/cauliflowercurry.jpeg";
import stirFryChicken from "../img/chicken_stirfry.jpeg";
import fishFinger from "../img/fishFInger.jpeg";
import hotDog from "../img/hotDogPasta.jpeg";
import macnCheese from "../img/macncheese.jpeg";
import moreRecipes from "../img/morerecipes.jpeg";
import tortillaPizza from "../img/pizza.jpg";
import { MenuCardProps } from "../models/MenuCardProps";

const RecipesData: MenuCardProps[] = [
  {
    key: 0,
    name: "Chicken Satay Stir Fry",
    path: "https://endchildfoodpoverty.org/recipe/chicken-satay-stir-fry",
    img: stirFryChicken,
  },
  {
    key: 1,
    name: "Tortilla Pizzas",
    path: "https://endchildfoodpoverty.org/recipe/tortilla-pizzas",
    img: tortillaPizza,
  },
  {
    key: 2,
    name: "Mega Fish Finger Butty",
    path: "https://endchildfoodpoverty.org/recipe/mega-fish-finger-butty",
    img: fishFinger,
  },
  {
    key: 3,
    name: "Hot Dog Pasta",
    path: "https://endchildfoodpoverty.org/recipe/hot-dog-pasta",
    img: hotDog,
  },
  {
    key: 4,
    name: "Cheesy Bean Burritos",
    path: "https://endchildfoodpoverty.org/recipe/cheesy-bean-burritos",
    img: burrito,
  },
  {
    key: 5,
    name: "Mac 'n' Cheese",
    path: "https://endchildfoodpoverty.org/recipe/mac-n-cheese",
    img: macnCheese,
  },
  {
    key: 6,
    name: "Cauliflower and Sweet Potato Curry",
    path: "https://endchildfoodpoverty.org/recipe/cauliflower-and-sweet-potato-curry",
    img: sweetPotatoCurry,
  },
  {
    key: 7,
    name: "More recipes",
    path: "https://endchildfoodpoverty.org/full-time-meals",
    img: moreRecipes,
  },
];

export default RecipesData;
