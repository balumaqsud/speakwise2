// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOSU6t3JV6HiWFXeGo4Ct24WYFsglcJvc",
  authDomain: "speakwise-65c89.firebaseapp.com",
  projectId: "speakwise-65c89",
  storageBucket: "speakwise-65c89.firebasestorage.app",
  messagingSenderId: "950401541574",
  appId: "1:950401541574:web:9cd8f8d3b58cd03848fec7",
  measurementId: "G-XXKG2LNLJP",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
