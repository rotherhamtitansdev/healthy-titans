import React from "react";

interface GamesSubHeaderProps {
  name: string
}

const GamesSubHeader = (props: GamesSubHeaderProps) => (
  <div className="font-quicksand">
    <p className="font-semibold font-quicksand text-[24px] text-titansDarkBlue mb-3">
      {props.name}
    </p>
    <div className="flex flex-row w-60 justify-between text-[20px] text-titansDarkBlue font-medium">
      <p>Games</p>
      <p className="text text-titansBrightPink">{" > "}</p>
      <p>{props.name}</p>
    </div>
  </div>
);

export default GamesSubHeader;
