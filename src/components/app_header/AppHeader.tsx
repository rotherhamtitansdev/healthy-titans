import React from "react";

// eslint-disable-next-line react/require-default-props
const AppHeader = (props: { children?: React.ReactNode }) => (
  <div className="bg-mobileWave sm:bg-wave bg-no-repeat pb-2 bg-span">
    {props.children}
  </div>
);

export default AppHeader;
