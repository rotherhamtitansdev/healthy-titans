import React from "react";
import HomePageComponentsData from "../data/HomePageComponentsData";
import AppHeader from "./app_header/AppHeader";
import HomepageHeader from "./app_header/header/HomePageHeader";
import CarouselMenu from "./shared/CarouselMenu";
import MenuTitle from "./shared/MenuTitle";
import {HomePageCarouselResponsiveConfig} from "../config/CarouselConfig";

const HomePageComponents = () => (
  <>
    <AppHeader>
      <HomepageHeader />
    </AppHeader>
    <div className="pl-5 md:py-10 md:pl-10">
      <MenuTitle title="Learn with Cookie&apos;s Healthy Titans" subtitle="Click on what you feel like exploring today!" />
      <CarouselMenu cards={HomePageComponentsData} config={HomePageCarouselResponsiveConfig} renderArrowsWhenDisabled/>
    </div>
  </>
);

export default HomePageComponents;
