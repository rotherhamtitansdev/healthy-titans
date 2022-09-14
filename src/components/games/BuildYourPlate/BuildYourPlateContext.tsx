import React, { createContext, useContext, useState } from "react";
import BuildYourPlate from "./BuildYourPlate";

export interface BYPModalContentInterface {
  title: string
  text: string
  buttonText: string
  buttonFunc: () => void
}

/* eslint-disable */
//context
export type IsFYPStartedContext = {
  getIsFYPStarted: boolean
  setIsFYPStarted:(c: boolean) => void
  getPlateItemCount: number
  setPlateItemCount: (c: number) => void
  getModal: boolean
  setModal: (c: boolean) => void
  getModalContent: BYPModalContentInterface
  setModalContent: (c: BYPModalContentInterface) => void
}
export const FYPStartedContext = createContext<IsFYPStartedContext>({
  getIsFYPStarted: false,
  setIsFYPStarted: () => {},
  getPlateItemCount: 0,
  setPlateItemCount: () => {},
  getModal: true,
  setModal: () => {},
  getModalContent: {title: "", text: "", buttonText: "", buttonFunc: () => {} },
  setModalContent: () => {}
});

export const useFYPStartedContext = () => useContext(FYPStartedContext);

const FYPStartedContextWrapper  = ({ children }:any) => {
  const [getIsFYPStarted, setIsFYPStarted] = useState<boolean>(false);
  const [getScore, setScore] = useState<number>(0)
  const [getModal, setModal] = useState<boolean>(true)
  const [getModalContent, setModalContent] = useState<BYPModalContentInterface>({title: "", text: "", buttonText: "", buttonFunc: () => {} })

  return (
    <FYPStartedContext.Provider value={{
      getIsFYPStarted, setIsFYPStarted,
      getPlateItemCount: getScore,
      setPlateItemCount: setScore,
      getModal, setModal,
      getModalContent: getModalContent,
      setModalContent: setModalContent
    }}>
      <BuildYourPlate/>
    </FYPStartedContext.Provider>
  );
};

export default FYPStartedContextWrapper;
