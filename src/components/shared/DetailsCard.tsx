import React from "react";
import "../../App.css";
import { DetailsCardProps } from "../../models/DetailsCardProps";
import Card from "./Card";
import Image from "./Image";

/*
 * This component represents a details card
 * */
const DetailsCard = (props: DetailsCardProps) => (
  <Card
    card={{
      name: props.name,
      additionalStyling: `rounded-3xl flex-initial ${props.additionalStyling || ""}`
    }}
  >
    {props.img && <Image img={props.img} alt={props.name} />}
    <div className="pl-4 pr-4">
      {!props.hideTitle ? (
        <div data-testid="details-title" className="tracking-wide text-lg text-black font-bold">
          {props.name}
        </div>
      ) : null}
      <p
        data-testid="details-description"
        className="block mt-1 text-lg leading-tight font-semibold text-gray-900"
      >
        {props.description}
      </p>
    </div>
  </Card>
);

export default DetailsCard;
