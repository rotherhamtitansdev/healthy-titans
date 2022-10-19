import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

const testAlt = "testAlt";
const testURI = "testURI.svg";

describe("Image Component", () => {
  test("renders image with correct alt and name", () => {
    const testClassName = "testClassName";
    const { asFragment } = render(
      <Image img={testURI} alt={testAlt} additionalStyling={testClassName} />
    );
    const testImage = screen.getByRole("img", { name: testAlt });

    expect(testImage).toHaveAttribute("src", testURI);
    expect(testImage).toHaveAttribute("class", `mx-auto ${testClassName}`);
    expect(asFragment()).toMatchSnapshot();
  });
});
