import React, { useEffect, useState } from "react";
import AppHeader from "./app_header/AppHeader";
import HomepageHeader from "./app_header/header/HomePageHeader";
import CarouselMenu from "./shared/CarouselMenu";
import MenuTitle from "./shared/MenuTitle";
import { MenuCardProps } from "../models/MenuCardProps";
import { HomePageCarouselResponsiveConfig } from "../config/CarouselConfig";
import FirebaseAPI from "../api/FirebaseAPI";

const HomePageComponents = () => {
  const [getHomePageData, setHomePageData] = useState<MenuCardProps[]>([]);

  useEffect(() => {
    if (!getHomePageData || getHomePageData.length === 0) {
      FirebaseAPI.fetchSpecifiedComponentData("HomePageComponentsData").then((homeData) =>
        setHomePageData(homeData as MenuCardProps[])
      );
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
