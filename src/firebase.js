import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBxnepodV9IzymkJhLwmazArD3nOVAoTHQ",
  authDomain: "clone-b1060.firebaseapp.com",
  projectId: "clone-b1060",
  storageBucket: "clone-b1060.appspot.com",
  messagingSenderId: "25737370579",
  appId: "1:25737370579:web:32ce437951b422576bed26",
  measurementId: "G-QW48PBMKPC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = firebase.auth();

// const auth = firebase.auth();
export { db, auth };
