import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const config = {
  firebaseConfig: {
    apiKey: process.env.REACT_APP_API_KEY || "test-api-key",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN || "test-project.firebaseapp.com",
    databaseURL:
      process.env.REACT_APP_DATABASE_URL || "https://test-project-default-rtdb.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID || "test-project",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "test-project.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "1234567890",
    appId: process.env.REACT_APP_APP_ID || "1:1234567890:web:testappid",
    measurementId: process.env.REACT_APP_MEASUREMENT_ID || "G-TESTMEASURE",
  },
};

export const firebaseApp = initializeApp(config.firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const fbDatabase = getDatabase(firebaseApp);
export const fStore = getFirestore(firebaseApp);
export const fStorage = getStorage(firebaseApp);
export const firebaseAnalytics = isSupported()
  .then((supported) => (supported ? getAnalytics(firebaseApp) : undefined))
  .catch(() => undefined);
