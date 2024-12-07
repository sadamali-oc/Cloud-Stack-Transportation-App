// Import the required functions from the Firebase SDK
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR4l_GpMzQnU04Uc9ysVpo2OLqZ3RLmeo",
  authDomain: "transport-15010.firebaseapp.com",
  projectId: "transport-15010",
  storageBucket: "transport-15010.appspot.com",
  messagingSenderId: "866841030231",
  appId: "1:866841030231:web:d2ba62624dc3e1f1adbd12",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
