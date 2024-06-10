// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-juING4AyUCME_QqMtfOPQR3hNyyWyHI",
  authDomain: "react-portfolio-451d1.firebaseapp.com",
  projectId: "react-portfolio-451d1",
  storageBucket: "react-portfolio-451d1.appspot.com",
  messagingSenderId: "700873626981",
  appId: "1:700873626981:web:fa9b932fdf616b31e0bd8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export {app,db};