import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCc7nZHSXNzJsblxRX7Pti7QTY_NI4mPCY",
  authDomain: "teste-2ecc3.firebaseapp.com",
  projectId: "teste-2ecc3",
  storageBucket: "teste-2ecc3.appspot.com",
  messagingSenderId: "174418788668",
  appId: "1:174418788668:web:05b0ccfb941499f7181e39",
  measurementId: "G-LTHV8567EZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
