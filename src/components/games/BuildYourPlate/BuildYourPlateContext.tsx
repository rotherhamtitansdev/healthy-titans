import React, { createContext, useContext, useState } from "react";
import BuildYourPlate from "./BuildYourPlate";

/* eslint-disable */

export type IsFYPStartedContext = {
  getIsFYPStarted: boolean
  setIsFYPStarted:(c: boolean) => void
  getScore: number
  setScore: (c: number) => void
}
export const FYPStartedContext = createContext<IsFYPStartedContext>({
  getIsFYPStarted: false,
  setIsFYPStarted: () => {},
  getScore: 0,
  setScore: () => {},
});

export const useFYPStartedContext = () => useContext(FYPStartedContext);

const FYPStartedContextWrapper  = ({ children }:any) => {
  const [getIsFYPStarted, setIsFYPStarted] = useState<boolean>(false);
  const [getScore, setScore] = useState<number>(0)

  return (
    <FYPStartedContext.Provider value={{ getIsFYPStarted, setIsFYPStarted, getScore, setScore }}>
      <BuildYourPlate/>
    </FYPStartedContext.Provider>
  );
};

export default FYPStartedContextWrapper;
