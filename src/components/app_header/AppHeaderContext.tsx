import React, {
  useState, createContext, useContext,
} from "react";

/* eslint-disable */

export type GlobalMenuOpen = {
  isMenuOpen: boolean
  setIsMenuOpen:(c: boolean) => void
}
export const GlobalMenuOpenContext = createContext<GlobalMenuOpen>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const useGlobalMenuOpenContext = () => useContext(GlobalMenuOpenContext);

const AppHeaderContextWrapper = ({ children }:any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <GlobalMenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </GlobalMenuOpenContext.Provider>
  );
};

export default AppHeaderContextWrapper;
