// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPs1JcnSrvmPXEJqsmobR2upRnatf9fXE",
  authDomain: "house-e179c.firebaseapp.com",
  projectId: "house-e179c",
  storageBucket: "house-e179c.appspot.com",
  messagingSenderId: "675392864749",
  appId: "1:675392864749:web:e131a24cd34b648c36e7e4"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

