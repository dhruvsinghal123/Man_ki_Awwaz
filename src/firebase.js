import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnzC1aCmFEK_n2q4rlOB11qIYwlbZLEtQ",
  authDomain: "shayri-app-b1719.firebaseapp.com",
  projectId: "shayri-app-b1719",
  storageBucket: "shayri-app-b1719.firebasestorage.app",
  messagingSenderId: "371287054796",
  appId: "1:371287054796:web:67e556dfcdc46928b86569"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const addShayari = async (shayariData) => {
  try {
    await addDoc(collection(db, "shayaris"), shayariData);
  } catch (error) {
    console.error("Error adding Shayari: ", error);
  }
};

export const getShayaris = async () => {
  const querySnapshot = await getDocs(collection(db, "shayaris"));
  let shayaris = [];
  querySnapshot.forEach((doc) => {
    shayaris.push(doc.data());
  });
  return shayaris;
};

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};

export { db, auth };
