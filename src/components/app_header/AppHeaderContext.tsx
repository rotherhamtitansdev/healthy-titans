// empty function expected for context
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, useMemo, useState, createContext, useContext } from "react";

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

interface AppHeaderContextWrapperProps {
  children: React.ReactElement;
}

const AppHeaderContextWrapper: FC<AppHeaderContextWrapperProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [getAdditionalStyling, setAdditionalStyling] = useState<string>("");

  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      getAdditionalStyling,
      setAdditionalStyling,
    }),
    [isMenuOpen, getAdditionalStyling]
  );

  return <GlobalMenuOpenContext.Provider value={value}>{children}</GlobalMenuOpenContext.Provider>;
};

export default AppHeaderContextWrapper;
