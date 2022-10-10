/* eslint-disable react/jsx-key */
import React from "react";
import "../../App.css";
import { DetailsCardProps } from "../../models/DetailsCardProps";
import CheckMarkButton from "../../img/CheckMarkButton.svg";

/*
 * This component represents a details card
 * */
const DetailsCard = (props: DetailsCardProps) => (
  <div data-testid={props.name} className="pl-5 font-quicksand md:basis-1/2">
    {props.img && (
      <img className="absolute top-[8rem] " src={props.img} alt={props.name} />
    )}
    <div className="pl-2 pr-4 pt-[5rem]">
      {!props.hideTitle ? (
        <div
          data-testid="details-title"
          className="tracking-wide text-4xl text-black font-bold py-5 text-homepageHeaderSubTitle"
        >
          {props.name}
        </div>
      ) : null}
      <p
        data-testid="details-description"
        className="block mt-1 text-xl leading-tight font-medium text-gray-900 text-[16px] lg:text-[20px]"
      >
        {props.description}
      </p>
      {props.list && (
        <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
          <h2 className="py-5 text-[20px] lg:text-[24px] ">{props.list.title}</h2>
          <ul className="list-none px-0 lg:px-5 text-[16px] lg:text-[20px]">
            {props.list.items.map((item) => (
              <li className="pb-4 md:pb-8 flex font-medium">
                <img src={CheckMarkButton} alt="checkmark" className="pr-5" />
                {item}
              </li>
            ))}
          </ul>
        </p>
      )}
    </div>
  </div>
);

export default DetailsCard;
