import React from "react";
import { writeUserData } from "../../../functions/db";
import AppHeader from "../../app_header/AppHeader";
import MenuHeader from "../../app_header/header/MenuHeader";
import MenuTitle from "../../shared/MenuTitle";
import { useFYPStartedContext } from "./BuildYourPlateContext";
import BuildYourPlateGameScreen from "./BuildYourPlateGameScreen";
import BuildYourPlateStartScreen from "./BuildYourPlateStartScreen";

/* eslint-disable */

const BuildYourPlate = () => {
  const { getIsFYPStarted } = useFYPStartedContext();
  writeUserData()
  return (
    <>
      <AppHeader>
        <MenuHeader title="Games" body={"Challenge yourself to see if you can build a healthy meal or test your knowledge on all of the fun food facts you've learned so far."} />
      </AppHeader>
      <div className="mx-7 xs:mx-8 sm:mx-12 md:mx-14">
        <MenuTitle title="Build your plate" />
        { getIsFYPStarted ? <BuildYourPlateGameScreen /> : <BuildYourPlateStartScreen />}
      </div>
    </>
  );
};

export default BuildYourPlate;
