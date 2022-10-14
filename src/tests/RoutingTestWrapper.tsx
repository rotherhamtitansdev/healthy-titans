import React from "react";
import { MemoryRouter, Routes } from "react-router";

interface RoutingTestWrapperProps {
  path: string;
  children: React.ReactNode;
}

const RoutingTestWrapper = (props: RoutingTestWrapperProps) => {
  const { path, children } = props;
  return (
    <MemoryRouter initialEntries={[path]}>
      <Routes>{children}</Routes>
    </MemoryRouter>
  );
};

export default RoutingTestWrapper;
