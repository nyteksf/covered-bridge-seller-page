// src/utils/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA_7lxHVpbKsN97_S9_YmgdQr_ljrJu9xc",
  authDomain: "covered-bridge-properties.firebaseapp.com",
  projectId: "covered-bridge-properties",
  storageBucket: "covered-bridge-properties.firebasestorage.app",
  messagingSenderId: "683767538255",
  appId: "1:683767538255:web:a180c1e8e43068e7e2003a",
  measurementId: "G-J0JF5N0S8S",
};

// Init Firebase App (node-safe: no analytics)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
