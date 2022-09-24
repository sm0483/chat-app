import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAp_-4pJOHRMtzeXhJym6YD20tALQOQNLw",
  authDomain: "chatapp-5ca4f.firebaseapp.com",
  projectId: "chatapp-5ca4f",
  storageBucket: "chatapp-5ca4f.appspot.com",
  messagingSenderId: "695848502808",
  appId: "1:695848502808:web:7748d94d1954ed56ea256d",
  measurementId: "G-G3Q5NFKQ9J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const db=getFirestore(app);
