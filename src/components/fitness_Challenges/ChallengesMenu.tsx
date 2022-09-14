import React from "react";
import ChallengesData from "../../data/ChallengesData";
import { HeaderProps } from "../../models/HeaderProps";
import { MenuCardProps } from "../../models/MenuCardProps";
import Menu from "../shared/Menu";

const Challenges = () => {
  const challengesData: MenuCardProps[] = ChallengesData;
  const headerData: HeaderProps = {
    title: "Fitness Challenges",
    body: "Being active and moving your body is really important to remain strong and healthy. Exercise can be in the form of playing a sport, walking the dog or taking part in competetive games with friends!",
  };

  return (
    <Menu
      header={headerData}
      cards={challengesData}
      title={{
        title: "Stay fit with these fun challenges!",
        subtitle: "Click on a picture to learn more about each activity",
      }}
    />
  );
};

export default Challenges;
