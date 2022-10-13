import React from "react";
import { HeaderProps } from "../../models/HeaderProps";
import { MenuCardProps } from "../../models/MenuCardProps";
import Menu from "../shared/Menu";

const Games = () => {
  const gamesData: MenuCardProps[] = [
    {
      key: 0,
      name: "Build your plate",
      path: "BuildYourPlate",
      firebaseName: "Games/Plate.svg"
    },
    {
      key: 1,
      name: "Quiz",
      path: "Quiz",
      firebaseName: "Games/Quiz.svg"
    }
  ];
  const headerData: HeaderProps = {
    title: "Games",
    body: "Challenge yourself to see if you can build a healthy meal or test your knowledge on all of the fun food facts you've learned so far."
  };

  return (
    <Menu
      header={headerData}
      cards={gamesData}
      title={{
        title: "Games & Challenges",
        subtitle:
          "Click on a game to see how much you've learned so far - you'll surprise yourself 😀"
      }}
    />
  );
};

export default Games;
