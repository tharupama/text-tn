// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "",
  authDomain: "texttn-fd1c0.firebaseapp.com",
  projectId: "texttn-fd1c0",
  storageBucket: "texttn-fd1c0.firebasestorage.app",
  messagingSenderId: "432226293708",
  appId: "1:432226293708:web:da5c50c3ea659437fb2f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export default app
