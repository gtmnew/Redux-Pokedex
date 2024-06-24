import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRa2pKLT4CpMkKepw2OEwC-fJH_IdH3Rw",
  authDomain: "pokedex-redux.firebaseapp.com",
  projectId: "pokedex-redux",
  storageBucket: "pokedex-redux.appspot.com",
  messagingSenderId: "1090014451213",
  appId: "1:1090014451213:web:e36e82f0a20d4e74a5a744",
  measurementId: "G-7EZG1C7QGX",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
