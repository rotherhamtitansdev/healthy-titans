import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MenuCardProps } from "../../models/MenuCardProps";
import MenuCard from "./MenuCard";

const CarouselMenu = (props: { cards: MenuCardProps[] }) => {
  const [isMoving, setIsMoving] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    smallDesktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
      partialVisibilityGutter: 100,
    },
    largeMobile: {
      breakpoint: { max: 800, min: 600 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 600, min: 464 },
      items: 1,
      partialVisibilityGutter: 200,
    },
    smallMobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 100,
    },
  };

  const cardList = props.cards.map((item) => (
    <MenuCard
      key={item.key}
      name={item.name}
      description={item.description}
      img={item.img}
      path={item.path}
      externalPath={item.externalPath}
      disableOnClick={isMoving}
      firebaseName={item.firebaseName}
    />
  ));

  return (
    <Carousel
      responsive={responsive}
      partialVisible
      beforeChange={() => setIsMoving(true)}
      afterChange={() => setIsMoving(false)}
      itemClass="p-[1rem]"
      renderArrowsWhenDisabled
    >
      {cardList}
    </Carousel>
  );
};
export default CarouselMenu;
