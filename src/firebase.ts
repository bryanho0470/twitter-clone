// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8i5iBpvnRySWt0iWhPtSn7W0fjc_wwE4",
  authDomain: "nwtter-cloned.firebaseapp.com",
  projectId: "nwtter-cloned",
  storageBucket: "nwtter-cloned.appspot.com",
  messagingSenderId: "755848706978",
  appId: "1:755848706978:web:44697c6aed99e0d58990fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
