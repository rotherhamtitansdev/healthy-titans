import React from "react";
import RecipesData from "../../data/RecipesData";
import { MenuCardProps } from "../../models/MenuCardProps";
import Menu from "../shared/Menu";

const Recipes = () => {
  const recipesData = RecipesData;

  const recipes: MenuCardProps[] = recipesData.map((item) => (
    {
      key: item.key,
      img: item.img,
      name: item.name,
      path: item.path,
      externalPath: true,
    }
  ));

  return (
    <Menu header={{ title: "", body: "" }} cards={recipes} />
  );
};

export default Recipes;
