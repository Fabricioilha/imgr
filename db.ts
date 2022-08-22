import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey:
    authDomain: 
    projectId: 
    storageBucket: 
    messagingSenderId: 
    appId: 
};

export const db = initializeApp(firebaseConfig);
export const auth = getAuth(db)
export const Googleprovider = new GoogleAuthProvider()
