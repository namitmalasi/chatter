import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLUXffPD_0BbzHkl9M1pH1tSQlQk5C_QA",
  authDomain: "chatter-d87c2.firebaseapp.com",
  projectId: "chatter-d87c2",
  storageBucket: "chatter-d87c2.appspot.com",
  messagingSenderId: "785026172250",
  appId: "1:785026172250:web:b85c56832264f2f349df63",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
