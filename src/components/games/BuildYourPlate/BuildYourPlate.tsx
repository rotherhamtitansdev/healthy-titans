import React from "react";
import MenuHeader from "../../app_header/header/MenuHeader";
import AppHeader from "../../app_header/AppHeader";
import GamesSubHeader from "../GamesSubHeader";
import BuildYourPlateStartScreen from "./BuildYourPlateStartScreen";
import { useFYPStartedContext } from "./BuildYourPlateContext";
import BuildYourPlateGameScreen from "./BuildYourPlateGameScreen";

const BuildYourPlate = () => {
  const { getIsFYPStarted } = useFYPStartedContext();

  return (
    <>
      <AppHeader>
        <MenuHeader title="Games" body={"Challenge yourself to see if you can build a healthy meal or test your knowledge on all of the fun food facts you've learned so far."} />
      </AppHeader>
      <div className="mx-7 xs:mx-8 sm:mx-12 md:mx-14">
        <GamesSubHeader name="Build your plate" />
        { getIsFYPStarted ? <BuildYourPlateGameScreen /> : <BuildYourPlateStartScreen />}
      </div>
    </>
  );
};

export default BuildYourPlate;
