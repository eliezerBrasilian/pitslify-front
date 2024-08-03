import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5HzZ4lSQk-Y3RnezS3l4k46gXBTmAGT4",
  authDomain: "pitsfy.firebaseapp.com",
  projectId: "pitsfy",
  storageBucket: "pitsfy.appspot.com",
  messagingSenderId: "1030226152815",
  appId: "1:1030226152815:web:fec875f6da7635b0eaac9a",
  measurementId: "G-M9Z3C8XLE9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
