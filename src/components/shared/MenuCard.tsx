import React, { useCallback, useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { MenuCardProps } from "../../models/MenuCardProps";
import Card from "./Card";
import Image from "./Image";
import FirebaseAPI from "../../api/FirebaseAPI";
import openInNewTab from "../../functions/Navigate";

/*
 * This component represents a card used in a menu screen
 * */
const MenuCard = (props: MenuCardProps) => {
  const [getImage, setImage] = useState<React.ReactNode | undefined>();

  const navigate = useNavigate();
  const navigateToPath = useCallback(() => navigate(props.path, { replace: false }), [navigate]);

  useEffect(() => {
    if (props.firebaseName !== undefined) {
      FirebaseAPI.fetchImages(props.firebaseName).then((URI) =>
        setImage(<Image img={URI} alt={props.name} />)
      );
    } else if (props.img !== undefined) {
      setImage(<Image img={props.img} alt={props.name} />);
    }
  }, []);

  const handleOnClick = () => {
    if (!props.disableOnClick) {
      return props.externalPath ? () => openInNewTab(props.path) : () => navigateToPath();
    }
    return () => undefined;
  };

  return (
    <Card
      card={{
        name: props.name,
        additionalStyling: `${props.additionalStyling}`,
        onClick: handleOnClick(),
      }}
    >
      <div className="py-[1.75rem] md:py-[3.625rem] w-full h-full flex-col flex">
        <div className="w-full h-full flex justify-center items-center md:-mt-0 md:-mt-8">
          {getImage || <ClipLoader size={100} color="#DC476D" className="" />}
        </div>
        <div className="md:text-xl text-homepageHeaderText font-semibold text-center mt-auto">
          {props.name}
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;
