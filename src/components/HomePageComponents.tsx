import React, { useEffect, useState } from "react";
import AppHeader from "./app_header/AppHeader";
import HomepageHeader from "./app_header/header/HomePageHeader";
import CarouselMenu from "./shared/CarouselMenu";
import MenuTitle from "./shared/MenuTitle";
import { MenuCardProps } from "../models/MenuCardProps";
import { HomePageCarouselResponsiveConfig } from "../config/CarouselConfig";
import { fetchDataFromPath } from "../api/FirebaseAPI";

const fallbackHomePageData: MenuCardProps[] = [
  { key: 0, name: "Food & Nutrition", path: "/FoodAndNutrition" },
  { key: 1, name: "Games", path: "/Games" },
  { key: 2, name: "Recipes", path: "/Recipes" },
  { key: 3, name: "Videos", path: "/Videos" },
  { key: 4, name: "Fitness Challenges", path: "/FitnessChallenges" },
];

const HomePageComponents = () => {
  const [getHomePageData, setHomePageData] = useState<MenuCardProps[]>([]);

  useEffect(() => {
    if (!getHomePageData || getHomePageData.length === 0) {
      fetchDataFromPath("HomePageComponentsData")
        .then((homeData) => setHomePageData(homeData as MenuCardProps[]))
        .catch(() => setHomePageData(fallbackHomePageData));
    }
  }, []);

  return (
    <>
      <AppHeader>
        <HomepageHeader />
      </AppHeader>
      <div className="pl-5 md:py-10 md:pl-10">
        <MenuTitle
          title="Learn with Cookie's KHAW"
          subtitle="Click on what you feel like exploring today!"
        />
        {getHomePageData && (
          <CarouselMenu
            cards={getHomePageData}
            config={HomePageCarouselResponsiveConfig}
            renderArrowsWhenDisabled
          />
        )}
      </div>
    </>
  );
};

export default HomePageComponents;
