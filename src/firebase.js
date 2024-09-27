// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCn_pWGzE6EAqYCDv7vHtGIrtGrIOqmgFY",
  authDomain: "ix-genesis.firebaseapp.com",
  projectId: "ix-genesis",
  storageBucket: "ix-genesis.appspot.com",
  messagingSenderId: "981013807053",
  appId: "1:981013807053:web:67ccba6a2d2693c4604e84",
  measurementId: "G-4QN37SFWZ0"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();