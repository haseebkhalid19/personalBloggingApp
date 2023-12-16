import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {
  getFirestore,
  where,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  setDoc,
  collection,
  getDocs,
  doc,
  addDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCIl9f3D8RDxgWgnx2mpjKYo3rj0Wwo6oU",
  authDomain: "personalbloggingapp-c4229.firebaseapp.com",
  projectId: "personalbloggingapp-c4229",
  storageBucket: "personalbloggingapp-c4229.appspot.com",
  messagingSenderId: "130935660286",
  appId: "1:130935660286:web:c1ab8848b201bc72b8cfaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  where,
  signOut,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  addDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  setDoc,
  doc,
  onAuthStateChanged,
  getDoc,
  query,
  orderBy,
};
