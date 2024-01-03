// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJCZB0iSaT9wvKj_dPtl6-EJtZbSk8kzY",
  authDomain: "grub-b6b73.firebaseapp.com",
  projectId: "grub-b6b73",
  storageBucket: "grub-b6b73.appspot.com",
  messagingSenderId: "947863190768",
  appId: "1:947863190768:web:87d7b18d5d6e23e3b51635",
  measurementId: "G-7XGT85PMW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);