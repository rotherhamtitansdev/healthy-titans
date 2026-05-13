import React from "react";
import { BYPItem } from "../../../models/BYP/BYP";

const platePositions = [
  "top-[12%] left-1/2 -translate-x-1/2",
  "top-[33%] left-[78%] -translate-x-1/2 -translate-y-1/2",
  "top-[62%] left-[74%] -translate-x-1/2 -translate-y-1/2",
  "top-[76%] left-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-[62%] left-[26%] -translate-x-1/2 -translate-y-1/2",
  "top-[33%] left-[22%] -translate-x-1/2 -translate-y-1/2",
] as const;

const BuildYourPlateVisualPlate = (props: {
  items: BYPItem[];
  onRemoveItem: (item: BYPItem) => void;
  sizeClassName?: string;
}) => (
  <div className={`relative mx-auto ${props.sizeClassName || "w-72 h-72 sm:w-80 sm:h-80"}`}>
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f8f3ff_0%,#e9ddff_45%,#cdb8f4_100%)] shadow-[0_18px_40px_rgba(110,87,160,0.18)]" />
    <div className="absolute inset-[10%] rounded-full border border-white/70 bg-[radial-gradient(circle_at_30%_30%,#efe7ff_0%,#d8c8f5_65%,#c8b4ed_100%)]" />
    <div className="absolute inset-[23%] rounded-full border-2 border-dashed border-[#7C6D99]/50 bg-white/15" />
    {props.items.map((plateItem, index) => (
      <button
        key={plateItem.id}
        type="button"
        onClick={() => {
          props.onRemoveItem(plateItem);
        }}
        className={`absolute ${platePositions[index]} h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem] rounded-full bg-white/85 shadow-md flex items-center justify-center transition hover:scale-105`}
      >
        {plateItem.icon}
      </button>
    ))}
  </div>
);

BuildYourPlateVisualPlate.defaultProps = {
  sizeClassName: "w-72 h-72 sm:w-80 sm:h-80",
};

export default BuildYourPlateVisualPlate;
