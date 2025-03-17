
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtX4pqydkn7X1vUyB0tfh8bD0B9yw_xvU",
  authDomain: "digi-sanchaar.firebaseapp.com",
  projectId: "digi-sanchaar",
  storageBucket: "digi-sanchaar.firebasestorage.app",
  messagingSenderId: "287545941306",
  appId: "1:287545941306:web:d8dd85cf0586fd32c98403",
  measurementId: "G-YVXVH3EEL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
