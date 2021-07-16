import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDq14mHloW2EvDOnytBOU53zP4IWF7szmw",
    authDomain: "instantgc-a2d6a.firebaseapp.com",
    projectId: "instantgc-a2d6a",
    storageBucket: "instantgc-a2d6a.appspot.com",
    messagingSenderId: "958421770764",
    appId: "1:958421770764:web:ba614d2fe73cd1fc2b4429",
  })
  .auth();
