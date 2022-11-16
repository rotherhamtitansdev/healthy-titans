import React, { useState, useEffect } from "react";
import { DocumentData } from "firebase/firestore";
import { HeaderProps } from "../../../models/HeaderProps";
import { MenuCardProps } from "../../../models/MenuCardProps";
import Menu from "../../shared/Menu";
import { fetchDataFromPath } from "../../../api/FirebaseAPI";

const ExternalGames = () => {
  const [gamesData, setGamesData] = useState<MenuCardProps[]>([]);

  useEffect(() => {
    fetchDataFromPath("ExternalGamesData").then((res) => {
      if (res) {
        setGamesData(res as DocumentData as MenuCardProps[]);
      }
    });
  }, []);

  const headerData: HeaderProps = {
    title: "Games and Challenges",
    body: "Challenge yourself to see if you can build a healthy meal or test your knowledge on all of the fun food facts you've learned so far.",
  };

  return (
    <>
      <Menu
        header={headerData}
        cards={gamesData}
        displaySingleColumnMobile
        title={{
          title: "Games & Challenges",
        }}
        containerStyles="hidden lg:block"
      />
      <Menu
        header={headerData}
        cards={gamesData}
        displaySingleColumnMobile
        title={{
          title: "Games & Challenges",
          subtitle:
            "Click on a game to see how much you've learned so far - you'll surprise yourself 😀",
        }}
        containerStyles="lg:hidden"
      />
    </>
  );
};

export default ExternalGames;
