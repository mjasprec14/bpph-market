import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

const config = {
  apiKey: "AIzaSyDf9U8FwgnLCiBJBeOM6RchvvE0XrrsizY",
  authDomain: "bpph-market-bfed5.firebaseapp.com",
  projectId: "bpph-market-bfed5",
  storageBucket: "bpph-market-bfed5.appspot.com",
  messagingSenderId: "253338293424",
  appId: "1:253338293424:web:028ff7aa8a804d14a2d775",
  measurementId: "G-NF2TV00QF4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
