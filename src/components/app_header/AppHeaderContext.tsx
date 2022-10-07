import React, { FC, useMemo, useState, createContext, useContext } from "react";

export type GlobalMenuOpen = {
  isMenuOpen: boolean;
  setIsMenuOpen: (c: boolean) => void;
};

export const GlobalMenuOpenContext = createContext<GlobalMenuOpen>({
  isMenuOpen: false,
  // Disabled ES Lint below as empty function expected for context
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsMenuOpen: () => {}
});

export const useGlobalMenuOpenContext = () => useContext(GlobalMenuOpenContext);

interface AppHeaderContextWrapperProps {
  children: React.ReactElement;
}

const AppHeaderContextWrapper: FC<AppHeaderContextWrapperProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen
    }),
    [isMenuOpen]
  );

  return <GlobalMenuOpenContext.Provider value={value}>{children}</GlobalMenuOpenContext.Provider>;
};

export default AppHeaderContextWrapper;
