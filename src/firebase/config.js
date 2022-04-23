import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKlLlBaCt6HwTE3B78myMaQeS7kafVstE",
  authDomain: "photo-gallery-firegram-6bcef.firebaseapp.com",
  projectId: "photo-gallery-firegram-6bcef",
  storageBucket: "photo-gallery-firegram-6bcef.appspot.com",
  messagingSenderId: "536368061480",
  appId: "1:536368061480:web:e8e604e06534b05321691d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };