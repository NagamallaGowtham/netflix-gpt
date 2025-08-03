// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlgBB6BuShDMPHHy4RP5TSz0kawLmSF7s",
  authDomain: "netflixgpt-66c8f.firebaseapp.com",
  projectId: "netflixgpt-66c8f",
  storageBucket: "netflixgpt-66c8f.firebasestorage.app",
  messagingSenderId: "83350341578",
  appId: "1:83350341578:web:35daa26a676e4a11e2b133",
  measurementId: "G-PVR1FSHDV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);