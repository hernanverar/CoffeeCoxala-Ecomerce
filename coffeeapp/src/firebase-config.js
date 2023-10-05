
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmyicq_7_1zxEPbGcp2lpRledoYLcnpn4",
  authDomain: "coxala-b9799.firebaseapp.com",
  projectId: "coxala-b9799",
  storageBucket: "coxala-b9799.appspot.com",
  messagingSenderId: "56121445823",
  appId: "1:56121445823:web:887960dd9af6161faa250a",
  measurementId: "G-SHE2J2EV51"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };