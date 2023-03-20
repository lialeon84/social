// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "AIzaSyA-2Y7X-YsPj536fJz7qNikO14ngzQF8Jk",
  authDomain: "social-f4421.firebaseapp.com",
  projectId: "social-f4421",
  storageBucket: "social-f4421.appspot.com",
  messagingSenderId: "1053242267208",
  appId: "1:1053242267208:web:4db5fddd824a39bb172a7d", 
 
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
let db = getFirestore(app);
export default app;

//let auth = getAuth(app);
