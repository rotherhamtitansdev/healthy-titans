import React from "react";
import "../../App.css";
import { DetailsCardProps } from "../../models/DetailsCardProps";
import Card from "./Card";
import CheckMarkButton from "../../img/CheckMarkButton.svg";

/*
 * This component represents a details card
 * */
const DetailsCard = (props: DetailsCardProps) => (
  <Card
    card={{
      name: props.name,
      additionalStyling: `rounded-3xl flex-initial ${
        props.additionalStyling || ""
      }`,
    }}
  >
    {props.img && (
      <img
        className="absolute top-[5rem] left-[3rem]"
        src={props.img}
        alt={props.name}
      />
    )}
    <div className="pl-4 pr-4 pt-[8rem]">
      {!props.hideTitle ? (
        <div className="tracking-wide text-4xl text-black font-bold py-5">
          {props.name}
        </div>
      ) : null}
      <p className="block mt-1 text-xl leading-tight font-medium text-gray-900">
        {props.description}
      </p>
      {props.list && (
        <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
          <h2 className="py-5 text-2xl ">{props.list.title}</h2>
          <ul className="list-none px-5">
            {props.list.items.map((item) => (
              <li className="pb-4 flex font-medium">
                <img src={CheckMarkButton} alt="checkmark" className="pr-5" />
                {item}
              </li>
            ))}
          </ul>
        </p>
      )}
    </div>
  </Card>
);

export default DetailsCard;
