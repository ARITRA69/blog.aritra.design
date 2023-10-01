// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig: Record<string, string | undefined> = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { db };
