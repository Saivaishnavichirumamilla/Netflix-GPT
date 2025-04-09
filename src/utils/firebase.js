// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALfcbV2ck7mmbZLAjLYzNsBbZgPiDxRzs",
  authDomain: "netflixgpt-16f0d.firebaseapp.com",
  projectId: "netflixgpt-16f0d",
  storageBucket: "netflixgpt-16f0d.firebasestorage.app",
  messagingSenderId: "852123363901",
  appId: "1:852123363901:web:ae03e3259ecd5956e51854",
  measurementId: "G-9Q9SZVN9D5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
