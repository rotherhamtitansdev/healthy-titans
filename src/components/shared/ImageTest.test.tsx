import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image Component", () => {
  test("renders image with correct alt and name", () => {
    const testAlt = "testAlt";
    const testURI = "testURI.svg";
    const { asFragment } = render(<Image img={testURI} alt={testAlt} />);

    expect(screen.getByRole("img", { name: testAlt })).toHaveAttribute("src", testURI);
    expect(asFragment()).toMatchSnapshot();
  });
});
