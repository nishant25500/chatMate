
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWUsgbdps_zOU24tLsGlII6yGDfZGKF7M",
  authDomain: "chatmate-c9c66.firebaseapp.com",
  projectId: "chatmate-c9c66",
  storageBucket: "chatmate-c9c66.appspot.com",
  messagingSenderId: "704571702681",
  appId: "1:704571702681:web:f558172827e150c5b2e708"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();