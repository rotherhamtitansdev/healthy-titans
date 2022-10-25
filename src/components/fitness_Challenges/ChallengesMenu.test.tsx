import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import FirebaseAPI from "../../api/FirebaseAPI";
import ChallengesMenu from "./ChallengesMenu";
import { MenuCardProps } from "../../models/MenuCardProps";

const content: MenuCardProps[] = [
  {
    key: 0,
    name: "Ball Rush",
    path: "/BallRush",
    firebaseName: "FitnessChallengesImages/ballRush.svg",
  },
  {
    key: 1,
    name: "Ball Balance",
    path: "/BallBalance",
    firebaseName: "FitnessChallengesImages/ballBalance.svg",
  },
];

describe("ChallengesMenu", () => {
  test("component renders with list of challenges", async () => {
    jest.spyOn(FirebaseAPI, "fetchChallengesList").mockResolvedValue(content);

    const { asFragment } = render(<ChallengesMenu />, {
      wrapper: MemoryRouter,
    });

    expect(await screen.findByText("Ball Rush")).toBeVisible();
    expect(await screen.findByText("Ball Balance")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
});
