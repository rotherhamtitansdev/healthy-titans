import React from "react";
import { render, screen } from "@testing-library/react";
import FirebaseAPI from "../../api/FirebaseAPI";
import AboutUs from "./AboutUs";

const mockContent = {
  section_1: [
    "section 1 header",
    "section 1 body",
    "section 1 body 2",
    "section 1 body 3",
    "section 1 body 4",
  ],
  section_2: ["section 2 header", "section 2 body", "section 2 body 2"],
  section_3: ["section 3 header", "section 3 body"],
  section_4: ["section 4 header", "section 4 body"],
  section_5: ["section 4 header", "section 4 body", "section 4 body 2"],
};

describe("About Us", () => {
  test("component renders with sections and image", async () => {
    jest.spyOn(FirebaseAPI, "fetchAboutUsData").mockResolvedValue(mockContent);
    jest.spyOn(FirebaseAPI, "fetchAllImages").mockResolvedValue(["fruit.jpg","logo.png","example.jpg"]);

    const { asFragment } = render(<AboutUs />);

    expect(await screen.findByText("section 1 header")).toBeVisible();
    expect(await screen.findByRole("img", { name: "green hearts" })).toHaveAttribute(
      "src",
      "example.jpg"
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
