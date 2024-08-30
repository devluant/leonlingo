import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLwFPM4VAIU_4TBsYv9LjNczanQjR1SJw",
  authDomain: "leon-lingo.firebaseapp.com",
  projectId: "leon-lingo",
  storageBucket: "leon-lingo.appspot.com",
  messagingSenderId: "208796386353",
  appId: "1:208796386353:web:f565e6da329e72ab4fc110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const sessionsCol = collection(db, "sessions");

