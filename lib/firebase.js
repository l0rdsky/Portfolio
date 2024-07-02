// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDePAQ3Ugp_p0D3qkJ_fOifH2kRUf3r64s",
  authDomain: "portfolio-16338.firebaseapp.com",
  projectId: "portfolio-16338",
  storageBucket: "portfolio-16338.appspot.com",
  messagingSenderId: "167388486287",
  appId: "1:167388486287:web:2464b14701613ce565eefa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };