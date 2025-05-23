// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_7lxHVpbKsN97_S9_YmgdQr_ljrJu9xc",
  authDomain: "covered-bridge-properties.firebaseapp.com",
  projectId: "covered-bridge-properties",
  storageBucket: "covered-bridge-properties.firebasestorage.app",
  messagingSenderId: "683767538255",
  appId: "1:683767538255:web:a180c1e8e43068e7e2003a",
  measurementId: "G-J0JF5N0S8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db };