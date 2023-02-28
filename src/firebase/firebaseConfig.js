import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6M2xuXiVR7xBMvNdy69KG7jzWJQAIWJY",
  authDomain: "factory-1bbb9.firebaseapp.com",
  projectId: "factory-1bbb9",
  storageBucket: "factory-1bbb9.appspot.com",
  messagingSenderId: "124903347080",
  appId: "1:124903347080:web:47b65b5be7181a6122603d"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {db, auth};

