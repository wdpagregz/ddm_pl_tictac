// Import the functions you need from the SDKs you need
//import * as firebase from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNFoEi9b4NKVojVecvzGTaFAd6meCwmLk",
  authDomain: "shiftapp-6ea0e.firebaseapp.com",
  projectId: "shiftapp-6ea0e",
  storageBucket: "shiftapp-6ea0e.appspot.com",
  messagingSenderId: "978750958884",
  appId: "1:978750958884:web:3948d7c38d207a528f57b1",
  measurementId: "G-7FSV6KVR96"
};


let app;

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth= getAuth();
const db =getFirestore();
export {auth,db};
