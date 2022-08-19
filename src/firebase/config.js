// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTqKgzAjjlcaf2OROt_KvyqOCYBN42i5I",
  authDomain: "plannerpower-366f6.firebaseapp.com",
  projectId: "plannerpower-366f6",
  storageBucket: "plannerpower-366f6.appspot.com",
  messagingSenderId: "568373992561",
  appId: "1:568373992561:web:9ae7b1bb1d9b2c93424fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fb = getFirestore(app);

export { fb };