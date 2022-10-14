import React, { useState, createContext, useContext } from "react";

/* eslint-disable */

export type GlobalMenuOpen = {
  isMenuOpen: boolean;
  setIsMenuOpen: (c: boolean) => void;
  getAdditionalStyling: string;
  setAdditionalStyling: (c: string) => void;
};
export const GlobalMenuOpenContext = createContext<GlobalMenuOpen>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  getAdditionalStyling: "",
  setAdditionalStyling: () => {},
});

export const useGlobalMenuOpenContext = () => useContext(GlobalMenuOpenContext);

const AppHeaderContextWrapper = ({ children }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [getAdditionalStyling, setAdditionalStyling] = useState<string>("");

  return (
    <GlobalMenuOpenContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        getAdditionalStyling,
        setAdditionalStyling,
      }}
    >
      {children}
    </GlobalMenuOpenContext.Provider>
  );
};

export default AppHeaderContextWrapper;
