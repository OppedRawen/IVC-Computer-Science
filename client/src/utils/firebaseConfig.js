import { initializeApp } from "@firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "@firebase/auth";
import { getFirestore,collection,addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmR-o9SvS-S3riIECG_4V_TpDIDgjGBUs",
    authDomain: "csclubfirebase.firebaseapp.com",
    projectId: "csclubfirebase",
    storageBucket: "csclubfirebase.appspot.com",
    messagingSenderId: "997439680115",
    appId: "1:997439680115:web:17fb4ab954717ff5c9c406",
    measurementId: "G-V81WGP37B6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db,createUserWithEmailAndPassword,signInWithEmailAndPassword, collection, addDoc };