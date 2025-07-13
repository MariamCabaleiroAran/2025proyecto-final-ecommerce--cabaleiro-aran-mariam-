// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn2kDggOW9Bu8YgwlI2_RIswTfAb1YCXw",
  authDomain: "proyectofinalecommerce-1288b.firebaseapp.com",
  projectId: "proyectofinalecommerce-1288b",
  storageBucket: "proyectofinalecommerce-1288b.firebasestorage.app",
  messagingSenderId: "899933316432",
  appId: "1:899933316432:web:81ad1697bb9b815dc7f855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
  const db = getFirestore(app);

  export { db };