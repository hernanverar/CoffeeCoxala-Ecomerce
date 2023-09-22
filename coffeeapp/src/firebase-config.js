
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCFlrMw-NyRApozQnM5YyJE65mB6A94JUE",
  authDomain: "coffeeshop-cea6f.firebaseapp.com",
  projectId: "coffeeshop-cea6f",
  storageBucket: "coffeeshop-cea6f.appspot.com",
  messagingSenderId: "933207941647",
  appId: "1:933207941647:web:f0cfb61d598b6d80ffb97a",
  measurementId: "G-P3PN0WNZQ6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);