import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppHeaderContextWrapper from "./components/app_header/AppHeaderContext";
import reportWebVitals from "./config/reportWebVitals";
import App from "./components/App";
import ScrollToTop from "./functions/ScrollToTop";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
