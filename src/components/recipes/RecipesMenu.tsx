import React, { useEffect, useState } from "react";
import openInNewTab from "../../functions/Navigate";
import { MenuCardProps } from "../../models/MenuCardProps";
import FirebaseAPI from "../../api/FirebaseAPI";
import Card from "../shared/Card";
import Menu from "../shared/Menu";

const Recipes = () => {
  const [getRecipesData, setRecipesData] = useState<MenuCardProps[]>([]);

  useEffect(() => {
    if (!getRecipesData || getRecipesData.length === 0) {
      FirebaseAPI.fetchSpecifiedComponentData("RecipesData").then((data) =>
        setRecipesData(data as MenuCardProps[])
      );
    }
  }, []);

  function getRecipes() {
    if (getRecipesData) {
      const recipes: MenuCardProps[] = getRecipesData.map((item) => ({
        key: item.key,
        name: item.name,
        path: item.path,
        externalPath: true,
        firebaseName: item.firebaseName,
      }));
      return recipes;
    }
    return [];
  }

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
    <Menu header={headerData} cards={getRecipes()} title={titleData}>
      <Card card={{ name: "More recipes", onClick: () => openInNewTab(moreRecipesLink) }}>
        <div className="my-[1rem] md:my-[2rem] md:text-2xl text-homepageHeaderText font-semibold text-center">
          More recipes
        </div>
      </Card>
    </Menu>
  );
};

export default Recipes;
