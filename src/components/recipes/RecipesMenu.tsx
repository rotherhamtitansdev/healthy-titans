import React from "react";
import RecipesData from "../../data/RecipesData";
import openInNewTab from "../../functions/Navigate";
import { MenuCardProps } from "../../models/MenuCardProps";
import Card from "../shared/Card";
import Menu from "../shared/Menu";

const Recipes = () => {
  const recipesData = RecipesData;

  const recipes: MenuCardProps[] = recipesData.map((item) => (
    {
      key: item.key,
      name: item.name,
      path: item.path,
      externalPath: true,
      firebaseName: item.firebaseName,
    }
  ));
  const headerData = {
    title: "Recipes",
    body: "There's nothing like being able to make your own delicious, nutritional and healthy meals. Here you can find some yummy recipes to try out and enjoy. Yum!",
  };
  const titleData = {
    title: "Tasty Recipes",
    subtitle: "Click on whichever recipe you'd like to try next",
  };
  const moreRecipesLink = "https://endchildfoodpoverty.org/full-time-meals";

  return (
    <Menu header={headerData} cards={recipes} title={titleData}>

      <Card card={{ name: "More recipes", onClick: () => openInNewTab(moreRecipesLink) }}>
        <div className="my-[1rem] md:my-[2rem] md:text-2xl text-homepageHeaderText font-semibold text-center">
          More recipes
        </div>
      </Card>

    </Menu>
  );
};

export default Recipes;
