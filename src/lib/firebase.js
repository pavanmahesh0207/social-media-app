import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnTI4boaVHj2Ur0qdGYARFSOUSxZ1wtt8",
  authDomain: "social-media-app-71cfc.firebaseapp.com",
  projectId: "social-media-app-71cfc",
  storageBucket: "social-media-app-71cfc.appspot.com",
  messagingSenderId: "1008890426602",
  appId: "1:1008890426602:web:e8425ea1a35bf7f2bf9393",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
