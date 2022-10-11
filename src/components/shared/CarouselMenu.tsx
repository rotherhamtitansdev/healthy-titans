import React, {useState} from "react";
import Carousel, {ResponsiveType} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MenuCardProps } from "../../models/MenuCardProps";
import MenuCard from "./MenuCard";

const CarouselMenu = (props: { cards: MenuCardProps[], config: ResponsiveType, renderArrowsWhenDisabled: boolean}) => {
  const [isMoving, setIsMoving] = useState(false);

  const cardList = props.cards.map((item) => (
    <MenuCard
      key={item.key}
      name={item.name}
      img={item.img}
      path={item.path}
      externalPath={item.externalPath}
      disableOnClick={isMoving}
      firebaseName={item.firebaseName}
      additionalStyling="w-60 h-60 sm:w-64 sm:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 3xl:w-96 3xl:h-96"
    />
  ));

  return (
    <Carousel
      responsive={props.config}
      partialVisible
      beforeChange={() => setIsMoving(true)}
      afterChange={() => setIsMoving(false)}
      itemClass="p-[1rem]"
      renderArrowsWhenDisabled = {props.renderArrowsWhenDisabled}
    >
      {cardList}
    </Carousel>
  );
};
export default CarouselMenu;
