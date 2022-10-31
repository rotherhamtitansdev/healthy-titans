import React from "react";
import { Routes } from "react-router-dom";
import { MemoryRouter } from "react-router";

// @ts-ignore
const TestWrapper = ({ children }) => (
  <MemoryRouter>
    <Routes>{children}</Routes>
  </MemoryRouter>
);

export default TestWrapper;
