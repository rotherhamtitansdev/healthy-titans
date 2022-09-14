import videoPlaceholder from "../img/video-placeholder.jpg";

const timezone = "Europe/London";

// eslint-disable-next-line import/prefer-default-export
export const VideoData = [
  {
    url: videoPlaceholder,
    user: {
      name: "Jamie Cooke",
      position: "Centre/Wing",
    },
    dateUploaded: new Date(2022, 6, 28, 9).toLocaleString("en-GB", { timeZone: timezone }),
    description: "This is an introduction to the app, how to use it and what we are here to achieve!",
  },
  {
    url: videoPlaceholder,
    user: {
      name: "Manny Chopstick",
      position: "Centre/Back",
    },
    dateUploaded: new Date(2022, 7, 3, 12).toLocaleString("en-GB", { timeZone: timezone }),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    url: videoPlaceholder,
    user: {
      name: "Ramona Avalancho",
      position: "Goalkeeper",
    },
    dateUploaded: new Date(2022, 7, 3, 12).toLocaleString("en-GB", { timeZone: timezone }),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    url: videoPlaceholder,
    user: {
      name: "Phil Foden",
      position: "Striker",
    },
    dateUploaded: new Date(2022, 7, 3, 12).toLocaleString("en-GB", { timeZone: timezone }),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
