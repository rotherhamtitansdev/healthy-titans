import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import AppHeaderContextWrapper from "./components/app_header/AppHeaderContext";
import reportWebVitals from "./config/reportWebVitals";
import App from "./components/App";
import { config } from "./config/firebase-config";

// Use these for db & auth
export const firebaseApp = initializeApp(config.firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const fbDatabase = getDatabase(firebaseApp);
export const fStore = getFirestore(firebaseApp);
export const fStorage = getStorage(firebaseApp);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <BrowserRouter>
    <AppHeaderContextWrapper>
      <div className="overflow-x-hidden"><App /></div>
    </AppHeaderContextWrapper>
  </BrowserRouter>
  ,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
