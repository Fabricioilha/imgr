import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7O48OYlQn8ioCPQLFVbJ7OJmia_ke55g",
    authDomain: "imgr-ee8a6.firebaseapp.com",
    projectId: "imgr-ee8a6",
    storageBucket: "imgr-ee8a6.appspot.com",
    messagingSenderId: "563812528223",
    appId: "1:563812528223:web:9551dd32f5212d23692bea"
};

export const db = initializeApp(firebaseConfig);