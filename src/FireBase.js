import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAbA4CRqFYBnNTEM_UIWtXOnIp3QD2vmXs",
  authDomain: "proyecto1matiasreus.firebaseapp.com",
  projectId: "proyecto1matiasreus",
  storageBucket: "proyecto1matiasreus.appspot.com",
  messagingSenderId: "528773048583",
  appId: "1:528773048583:web:bc6697cac47e61ef91fda2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

