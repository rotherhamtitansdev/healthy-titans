import { cleanup, render } from "@testing-library/react";
import { Route } from "react-router";
import React from "react";
import RoutingTestWrapper from "../../tests/RoutingTestWrapper";
import VideosComponent from "./VideosComponent";
import { Video } from "../../models/Video";
import VideoCard from "./VideoCard";

afterEach(() => {
  cleanup();
});

test("navigate to videos page", () => {
  const videosRoute = "/Videos";

  const snapshot = render(
    <RoutingTestWrapper path={videosRoute}>
      <Route path="/Videos" element={<VideosComponent />} />
    </RoutingTestWrapper>,
  );

  expect(snapshot).toMatchSnapshot();
});

describe("Videos page: Render", () => {
  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn(),
  }));

  const VideoProps: Video = {
    url: "video url",
    user: {
      name: "user name",
      position: "user position",
    },
    dateUploaded: new Date(2022, 7, 1, 9).toLocaleString(),
    description: "video description",
  };

  it("should render the video component", () => {
    const snapshot = render(
      <VideoCard
        Actions={{ setHidden: jest.fn(), setModalClickedVideoData: jest.fn() }}
        Video={VideoProps}
      />,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
