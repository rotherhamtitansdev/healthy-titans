import React, { FC } from "react";

interface AppHeaderProps {
  children: React.ReactElement;
}

const AppHeader: FC<AppHeaderProps> = ({ children }) => (
  <div className="bg-mobileWave sm:bg-wave bg-no-repeat pb-2 bg-span">{children}</div>
);

export default AppHeader;
