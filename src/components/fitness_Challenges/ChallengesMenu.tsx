import React, { useEffect, useState } from "react";
import { HeaderProps } from "../../models/HeaderProps";
import { MenuCardProps } from "../../models/MenuCardProps";
import Menu from "../shared/Menu";
import { fetchDataFromPath } from "../../api/FirebaseAPI";

const Challenges = () => {
  const [data, setData] = useState<MenuCardProps[]>([]);

  useEffect(() => {
    fetchDataFromPath("ChallengesData").then((res) => setData(res as MenuCardProps[]));
  }, []);

  const headerData: HeaderProps = {
    title: "Fitness Challenges",
    body: `Being active and moving your body is really important to remain strong and healthy. Exercise can be in the form of playing a sport, going for a run or taking part in competitive games with friends!

Physical activity refers to all movements of activities we do every day. For example, this could be activities like household chores, walking the dog or any physical activity which isn’t planned exercise.`,
  };

  return (
    <Menu
      header={headerData}
      cards={data}
      title={{
        title: "Stay fit with these fun challenges!",
        subtitle: "Click on a picture to learn more about each activity",
      }}
    />
  );
};

export default Challenges;
