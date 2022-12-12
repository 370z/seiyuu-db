// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbTjIc1FmuSpaBxLDq0Z5buT8yaroNcHE",
  authDomain: "seiyuu-db-app.firebaseapp.com",
  projectId: "seiyuu-db-app",
  storageBucket: "seiyuu-db-app.appspot.com",
  messagingSenderId: "206180553899",
  appId: "1:206180553899:web:123fff1807666930ad93ee",
  measurementId: "G-BYBFRN2JMW"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()