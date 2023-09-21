import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdiSWpEOKcE--lCPlfN-41bDEuWeRkX5o",
  authDomain: "curd-63504.firebaseapp.com",
  databaseURL: "https://curd-63504-default-rtdb.firebaseio.com",
  projectId: "curd-63504",
  storageBucket: "curd-63504.appspot.com",
  messagingSenderId: "333905231995",
  appId: "1:333905231995:web:b7e1abd06b7b74e5d422de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
