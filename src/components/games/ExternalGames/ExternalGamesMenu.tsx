import React from "react";
import { HeaderProps } from "../../../models/HeaderProps";
import { MenuCardProps } from "../../../models/MenuCardProps";
import Menu from "../../shared/Menu";

const ExternalGames = () => {
  const gamesData: MenuCardProps[] = [
    {
      key: 0,
      name: "Word Search",
      externalPath: true,
      path: "https://thewordsearch.com/puzzle/3963907/cookie%E2%80%99s-healthy-habits/",
      firebaseName: "Games/Joystick.svg",
    },
    {
      key: 1,
      name: "Whack-a-Mole",
      externalPath: true,
      path: "https://wordwall.net/resource/35142856",
      firebaseName: "Games/Joystick.svg",
    },
    {
      key: 2,
      name: "Word Wall",
      externalPath: true,
      path: "https://wordwall.net/resource/35436119",
      firebaseName: "Games/Joystick.svg",
    },
  ];
  const headerData: HeaderProps = {
    title: "Games and Challenges",
    body: "Challenge yourself to see if you can build a healthy meal or test your knowledge on all of the fun food facts you've learned so far.",
  };

  return (
    <Menu
      header={headerData}
      cards={gamesData}
      displaySingleColumnMobile
      title={{
        title: "Games & Challenges",
        subtitle:
          "Click on a game to see how much you've learned so far - you'll surprise yourself 😀",
      }}
    />
  );
};

export default ExternalGames;
