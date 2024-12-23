// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlFb0WDVZa5CGLHo1HLXvVGjSHZnaypHQ",
  authDomain: "portifolio-8c6b9.firebaseapp.com",
  projectId: "portifolio-8c6b9",
  storageBucket: "portifolio-8c6b9.firebasestorage.app",
  messagingSenderId: "1050537012403",
  appId: "1:1050537012403:web:60343297d6d8df400854c6",
  measurementId: "G-YKE9B3HVML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
