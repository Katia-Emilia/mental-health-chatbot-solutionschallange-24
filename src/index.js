// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzvy0msylE5zReH7R_E6bA4jUIUhJcqBM",
  authDomain: "mental-health-platform.firebaseapp.com",
  projectId: "mental-health-platform",
  storageBucket: "mental-health-platform.appspot.com",
  messagingSenderId: "832822583743",
  appId: "1:832822583743:web:1a0213e8e95cae95d6810a",
  measurementId: "G-QCWWYTRTM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database=getDatabase(app)
const auth = getAuth(app);


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed up
     // ...
  })
  .catch((err) => {
    if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
      alert("The password is too weak");
     }
});