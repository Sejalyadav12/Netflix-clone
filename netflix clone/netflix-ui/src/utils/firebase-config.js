
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMo4C1zIJuvY2-2LzL-UJdr7J3QDOdKb4",
  authDomain: "react-netflix-clone-51aae.firebaseapp.com",
  projectId: "react-netflix-clone-51aae",
  storageBucket: "react-netflix-clone-51aae.firebasestorage.app",
  messagingSenderId: "775025384579",
  appId: "1:775025384579:web:0c34eeec3ca3d3209c0fb6",
  measurementId: "G-W3PT4FWLCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);