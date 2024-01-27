// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALj3EVExBCj6lDuDBk8FrgUMOWgdfZsuU",
  authDomain: "medial-take-home.firebaseapp.com",
  projectId: "medial-take-home",
  storageBucket: "medial-take-home.appspot.com",
  messagingSenderId: "693799607461",
  appId: "1:693799607461:web:51fd8ae5ddda0b8db5414c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)