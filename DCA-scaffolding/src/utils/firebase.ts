import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from '../firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
setDoc(doc(db, "Players", ""), {
  name: "",
  color: "",
  letter: ""
});