import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

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

export const database = getFirestore(app);
export const storage = getStorage(app, "gs://diploma-f87ab.appspot.com");
export const storageImagesRef = ref(storage, "images");

export const auth = getAuth(app);

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logout = async () => {
  await signOut(auth);
};
