import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Route } from "react-router";
import FirebaseAPI from "../../api/FirebaseAPI";
import { Video } from "../../models/Video";
import RoutingTestWrapper from "../../tests/RoutingTestWrapper";
import VideoCard from "./VideoCard";
import VideosComponent from "./VideosComponent";

const mockVideoData = [
  {
    description: "VIDEO",
    firebaseName: "VIDEO.mp4",
    title: "VIDEO",
  },
];

afterEach(() => {
  cleanup();
});

test("navigate to videos page", () => {
  const videosRoute = "/Videos";
  jest.spyOn(FirebaseAPI, "fetchDataFromPath").mockResolvedValue(mockVideoData);

  const snapshot = render(
    <RoutingTestWrapper path={videosRoute}>
      <Route path="/Videos" element={<VideosComponent />} />
    </RoutingTestWrapper>
  );

  waitFor(() => {
    expect(snapshot).toMatchSnapshot();
  });
});

describe("Videos page: Render", () => {
  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn(),
  }));

  jest.spyOn(React, "useEffect").mockImplementation((f) => f());
  jest.spyOn(FirebaseAPI, "fetchImages").mockResolvedValue(mockVideoData[0].firebaseName);

  const VideoProps: Video = {
    firebaseName: "firebase url",
    title: "video title",
    description: "video description",
  };

  it("should render the video component", () => {
    const snapshot = render(
      <VideoCard
        Actions={{ setHidden: jest.fn(), setModalClickedVideoData: jest.fn() }}
        video={VideoProps}
        disableOnClick={false}
      />
    );
    expect(snapshot).toMatchSnapshot();
  });

  it("should unhide video player when video clicked", async () => {
    const user = userEvent.setup();
    const setHiddenMock = jest.fn();
    render(
      <VideoCard
        Actions={{ setHidden: setHiddenMock, setModalClickedVideoData: jest.fn() }}
        video={VideoProps}
        disableOnClick={false}
      />
    );

    const video = screen.getByTestId(VideoProps.title);
    expect(video).toBeInTheDocument();
    await user.click(video);

    expect(setHiddenMock).toHaveBeenCalledWith(false);
  });
});
