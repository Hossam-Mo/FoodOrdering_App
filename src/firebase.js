import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBxhQuXd6vgTfv7QJT5v9cklW23mv0bP4Y",
  authDomain: "taste--food-services.firebaseapp.com",
  projectId: "taste--food-services",
  storageBucket: "taste--food-services.appspot.com",
  messagingSenderId: "104032746025",
  appId: "1:104032746025:web:13b1e274dd2256efdaba38",
  measurementId: "G-CCZLYLYCLL",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
