
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOZ0Rny-H5rTEnGJ2YOYZ5KXmtsQtg570",
  authDomain: "chat-f6bfc.firebaseapp.com",
  projectId: "chat-f6bfc",
  storageBucket: "chat-f6bfc.appspot.com",
  messagingSenderId: "811071657391",
  appId: "1:811071657391:web:2d5c87141fbd8e5d268b5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();