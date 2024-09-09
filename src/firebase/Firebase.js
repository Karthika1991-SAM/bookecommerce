// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzdg1jgEnd9eDoO1WSb7FrJEMYSCwOEzA",
  authDomain: "bookworm-b2f3e.firebaseapp.com",
  projectId: "bookworm-b2f3e",
  storageBucket: "bookworm-b2f3e.appspot.com",
  messagingSenderId: "1046243109122",
  appId: "1:1046243109122:web:e597384e90c5819b7a3a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;