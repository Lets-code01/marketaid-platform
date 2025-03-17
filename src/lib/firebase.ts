
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLsqpuK2Tg3zF7kGHj_Q3s8wYM4NZhMOQ",
  authDomain: "digi-sanchaar.firebaseapp.com",
  projectId: "digi-sanchaar",
  storageBucket: "digi-sanchaar.appspot.com",
  messagingSenderId: "1054975432528",
  appId: "1:1054975432528:web:12f0e6f5c91ca4e4b6d7c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
