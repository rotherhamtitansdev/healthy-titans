import React, {useEffect, useState} from "react";
import { HeaderProps } from "../../models/HeaderProps";
import { MenuCardProps } from "../../models/MenuCardProps";
import Menu from "../shared/Menu";
import FirebaseAPI from "../../api/FirebaseAPI";


const Challenges = () => {
  const [data, setData] = useState<MenuCardProps[]>([])
  
  useEffect(()=>{
    FirebaseAPI.fetchChallengesList().then((res)=>setData(res as MenuCardProps[]))
  }, [])
  
    const headerData: HeaderProps = {
    title: "Fitness Challenges",
    body: "Being active and moving your body is really important to remain strong and healthy. Exercise can be in the form of playing a sport, walking the dog or taking part in competetive games with friends!",
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
