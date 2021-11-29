import firebase from "firebase/app";
import "firebase/auth";

export const auth=firebase.initializeApp({
    apiKey: "AIzaSyCTeUepCxcFwyVYDb9QDb5Ss2TsWXvWDA4",
    authDomain: "unichat-55311.firebaseapp.com",
    projectId: "unichat-55311",
    storageBucket: "unichat-55311.appspot.com",
    messagingSenderId: "901358730335",
    appId: "1:901358730335:web:394ce3b283df5f382b2fea"
}).auth();