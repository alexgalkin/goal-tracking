import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAiuiWgtEUVns1QpzM1q3kTNnMNlJ0fCe4",
  authDomain: "bimbink-goal-tracker.firebaseapp.com",
  projectId: "bimbink-goal-tracker",
  storageBucket: "bimbink-goal-tracker.firebasestorage.app",
  messagingSenderId: "778793982067",
  appId: "1:778793982067:web:098271cf24e0ca2b5bf206",
  measurementId: "G-CS5XQ6TVHB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, auth, analytics, firebaseConfig };
