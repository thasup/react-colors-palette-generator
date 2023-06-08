// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS-BwQ4SYfcm9f5Tw3VE88JZ56xnsJI1U",
  authDomain: "colors-palette-generator.firebaseapp.com",
  projectId: "colors-palette-generator",
  storageBucket: "colors-palette-generator.appspot.com",
  messagingSenderId: "713202433407",
  appId: "1:713202433407:web:daa2c42711e8dd5bf16e4a",
  measurementId: "G-K2CTP3W6Q8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
