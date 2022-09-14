import React, { useCallback, useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { MenuCardProps } from "../../models/MenuCardProps";
import Card from "./Card";
import Image from "./Image";
import FirebaseAPI from "../../api/FirebaseAPI";

/*
 * This component represents a card used in a menu screen
 * */

const MenuCard = (props: MenuCardProps) => {
  const [getImageURL, setImageURL] = useState<string | undefined>();

  const navigate = useNavigate();
  const navigateToPath = useCallback(
    () => navigate(props.path, { replace: false }),
    [navigate],
  );

  useEffect(() => {
    if (props.firebaseName !== undefined) {
      FirebaseAPI.fetchImages(props.firebaseName).then((URI) => setImageURL(URI));
    } else if (props.img !== undefined) {
      setImageURL(props.img);
    }
  }, []);

  const openInNewTab = () => {
    window.open(props.path, "_blank", "noopener,noreferrer");
  };

  const handleOnClick = () => {
    if (!props.disableOnClick) {
      return props.externalPath ? () => openInNewTab() : () => navigateToPath();
    }
    return () => undefined;
  };

  return (
    <Card
      card={{
        name: props.name,
        additionalStyling: `table align-middle rounded-3xl shadow-lg ${props.additionalStyling}`,
        onClick: handleOnClick(),
      }}
    >
      <div className="py-[1.75rem] md:py-[3.625rem] ">
        {getImageURL ? (
          <Image
            img={getImageURL}
            alt={props.name}
          />
        ) : (
          <ClipLoader size={180} color="#DC476D" className="mx-12" />
        )}
        <div className="md:text-xl text-[#252948] font-semibold font-quicksand text-center">
          {props.name}
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;
