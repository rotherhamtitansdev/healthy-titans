// empty functions expected for context
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable */

import React, { FC, createContext, useContext, useEffect, useState, useMemo } from "react";

export interface GameModalContentInterface {
  title: string;
  text: string;
  buttonText: string;
  buttonFunc?: () => void;
}

export type IsGameStartedContext = {
  getIsGameStarted: boolean;
  setIsGameStarted: (c: boolean) => void;
  getScore: number;
  setScore: (c: number) => void;
  getModal: boolean;
  setModal: (c: boolean) => void;
  getModalContent: GameModalContentInterface;
  setModalContent: (c: GameModalContentInterface) => void;
  getMobilePreviewScreenFlag: boolean;
  setMobilePreviewScreenFlag: (c: boolean) => void;
};
export const GameStartedContext = createContext<IsGameStartedContext>({
  getIsGameStarted: false,
  setIsGameStarted: () => {},
  getScore: 0,
  setScore: () => {},
  getModal: true,
  setModal: () => {},
  getModalContent: {
    title: "",
    text: "",
    buttonText: "",
    buttonFunc: () => {}
  },
  setModalContent: () => {},
  getMobilePreviewScreenFlag: false,
  setMobilePreviewScreenFlag: () => {}
});

export const useGameStartedContext = () => useContext(GameStartedContext);

interface GameStartedContextWrapperProps {
  children: React.ReactElement;
}

const GameStartedContextWrapper: FC<GameStartedContextWrapperProps> = ({ children }) => {
  const [getIsGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [getScore, setScore] = useState<number>(0);
  const [getModal, setModal] = useState<boolean>(false);
  const [getModalContent, setModalContent] = useState<GameModalContentInterface>({
    title: "",
    text: "",
    buttonText: "",
    buttonFunc: () => {}
  });
  const [getMobilePreviewScreenFlag, setMobilePreviewScreenFlag] = useState<boolean>(false);

  useEffect(() => {
    setScore(0);
  }, [getIsGameStarted]);

  useEffect(() => {
    // Stop scrolling while modal is open
    document.body.style.overflow = getModal ? "hidden" : "unset";
  }, [getModal]);

  const value = useMemo(
    () => ({
      getIsGameStarted,
      setIsGameStarted,
      getScore,
      setScore,
      getModal,
      setModal,
      getModalContent,
      setModalContent,
      getMobilePreviewScreenFlag,
      setMobilePreviewScreenFlag
    }),
    [getIsGameStarted, getScore, getModal, getModalContent, getMobilePreviewScreenFlag]
  );

  return <GameStartedContext.Provider value={value}>{children}</GameStartedContext.Provider>;
};

export default GameStartedContextWrapper;
