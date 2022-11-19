// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEKRuKUL-h0vCW0ux2yF6lzySQFbSbDh0",
  authDomain: "fifaworldcup2022-52fa2.firebaseapp.com",
  projectId: "fifaworldcup2022-52fa2",
  storageBucket: "fifaworldcup2022-52fa2.appspot.com",
  messagingSenderId: "473578983795",
  appId: "1:473578983795:web:d0450aa5f294033cca7506",
  measurementId: "G-GQXWXXKS9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
