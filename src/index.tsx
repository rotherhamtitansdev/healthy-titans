import React from "react";
import ReactDOM from "react-dom/client";
import { logEvent } from "firebase/analytics";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppHeaderContextWrapper from "./components/app_header/AppHeaderContext";
import reportWebVitals from "./config/reportWebVitals";
import App from "./components/App";
import ScrollToTop from "./functions/ScrollToTop";
import { firebaseAnalytics } from "./config/firebase-config";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <AppHeaderContextWrapper>
      <div className="overflow-x-hidden">
        <ScrollToTop />
        <App />
      </div>
    </AppHeaderContextWrapper>
  </BrowserRouter>
);

firebaseAnalytics.then((analytics) => {
  if (analytics) {
    logEvent(analytics, "app_loaded", {
      debug_mode: window.location.hostname === "localhost",
      location_path: window.location.pathname,
    });

    if (window.location.hostname === "localhost") {
      // Helps confirm Analytics is initialized when checking Firebase DebugView locally.
      // eslint-disable-next-line no-console
      console.info("Firebase Analytics event sent: app_loaded");
    }
  } else if (window.location.hostname === "localhost") {
    // eslint-disable-next-line no-console
    console.warn("Firebase Analytics is not supported or was blocked in this browser.");
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
