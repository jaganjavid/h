// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW9OkxCFUV2Uq07t4avLUQx4H5WkLmxNE",
  authDomain: "house-market-place-14bbe.firebaseapp.com",
  projectId: "house-market-place-14bbe",
  storageBucket: "house-market-place-14bbe.appspot.com",
  messagingSenderId: "987184140260",
  appId: "1:987184140260:web:4699ac22dc4636d87641f1",
  measurementId: "G-9WJSLRKH9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

