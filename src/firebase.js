import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhhZl3w5J84c2KeIm2uNFHXCWyY-tJt4E",
  authDomain: "diploma-f87ab.firebaseapp.com",
  projectId: "diploma-f87ab",
  storageBucket: "diploma-f87ab.appspot.com",
  messagingSenderId: "467922822990",
  appId: "1:467922822990:web:3b5ecb46b41a01afe5e01f",
  measurementId: "G-SZ8DW48HFB",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
