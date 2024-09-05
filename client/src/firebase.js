// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-236b5.firebaseapp.com",
  projectId: "mern-estate-236b5",
  storageBucket: "mern-estate-236b5.appspot.com",
  messagingSenderId: "141960209797",
  appId: "1:141960209797:web:26094796e5d5331a5550ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);