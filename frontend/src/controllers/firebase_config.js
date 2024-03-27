// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPkn_vTwKezeOLOf8TLD3npJxWKLQ2sg8",
  authDomain: "lilypad-1854f.firebaseapp.com",
  projectId: "lilypad-1854f",
  storageBucket: "lilypad-1854f.appspot.com",
  messagingSenderId: "1057716410965",
  appId: "1:1057716410965:web:b455a7032c245d3f4212dc",
  measurementId: "G-E0QDM95F3R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, app, firestore }

