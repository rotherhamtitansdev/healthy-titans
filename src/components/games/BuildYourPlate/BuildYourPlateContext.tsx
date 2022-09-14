import React, { createContext, useContext, useState } from "react";
import BuildYourPlate from "./BuildYourPlate";

/* eslint-disable */

export type IsFYPStartedContext = {
  getIsFYPStarted: boolean
  setIsFYPStarted:(c: boolean) => void
  getScore: number
  setScore: (c: number) => void
  getModal: boolean
  setModal: (c: boolean) => void
}
export const FYPStartedContext = createContext<IsFYPStartedContext>({
  getIsFYPStarted: false,
  setIsFYPStarted: () => {},
  getScore: 0,
  setScore: () => {},
  getModal: true,
  setModal: () => {}
});

export const useFYPStartedContext = () => useContext(FYPStartedContext);

const FYPStartedContextWrapper  = ({ children }:any) => {
  const [getIsFYPStarted, setIsFYPStarted] = useState<boolean>(false);
  const [getScore, setScore] = useState<number>(0)
  const [getModal, setModal] = useState<boolean>(true)

  return (
    <FYPStartedContext.Provider value={{ getIsFYPStarted, setIsFYPStarted, getScore, setScore, getModal, setModal }}>
      <BuildYourPlate/>
    </FYPStartedContext.Provider>
  );
};

export default FYPStartedContextWrapper;
