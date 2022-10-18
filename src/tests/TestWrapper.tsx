import React from "react";
import { Routes } from "react-router-dom";
import { MemoryRouter } from "react-router";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const TestWrapper = ({ children }) => (
  <MemoryRouter>
    <Routes>{children}</Routes>
  </MemoryRouter>
);

export default TestWrapper;
