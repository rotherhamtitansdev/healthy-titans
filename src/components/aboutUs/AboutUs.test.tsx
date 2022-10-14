import React from "react";
import { render, screen } from "@testing-library/react";
import FirebaseAPI from "../../api/FirebaseAPI";
import AboutUs from "./AboutUs";

const mockContent = {
  section_1: ["section 1", "section 1 body", "section 1 body 2"],
  section_2: ["section 2", "section 2 body", "section 2 body 2"],
  section_3: ["section 3", "section 3 body", "section 3 body 2"],
  section_4: [
    "section 4",
    "section 4 body",
    "section 4 body 2",
    "section 4 body 3",
    "section 4 body 4",
  ],
};

describe("About Us", () => {
  test("component renders with sections and image", async () => {
    jest.spyOn(FirebaseAPI, "fetchAboutUsData").mockResolvedValue(mockContent);
    jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue("fruit.jpg");

    const { asFragment } = render(<AboutUs />);

    expect(await screen.findByText("section 1")).toBeVisible();
    expect(await screen.findByRole("img", { name: "fruit and veg" })).toHaveAttribute(
      "src",
      "fruit.jpg"
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
