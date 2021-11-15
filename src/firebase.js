import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTEAPuEHfGvPh6RfU60YLnqKdms0uc3lk",
  authDomain: "instagram-clone-c685d.firebaseapp.com",
  databaseURL: "https://instagram-clone-c685d-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-c685d",
  storageBucket: "instagram-clone-c685d.appspot.com",
  messagingSenderId: "25395801908",
  appId: "1:25395801908:web:0112e26c5df39352ba3f61",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

export { db, auth, storage };
