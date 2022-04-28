// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXEDAW9AISLeo4Jvu4M9NqYY2xZOne6QI",
  authDomain: "auth-687d1.firebaseapp.com",
  projectId: "auth-687d1",
  storageBucket: "auth-687d1.appspot.com",
  messagingSenderId: "648174493817",
  appId: "1:648174493817:web:ce0b2efc9dbc14193cf4a8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const auth = app.auth();

export {auth};
export default db;
