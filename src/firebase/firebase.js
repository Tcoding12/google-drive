// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlHrSp7MCS3Gaix8w_hNmxrkUwGt67xtk",
  authDomain: "drive-39621.firebaseapp.com",
  projectId: "drive-39621",
  storageBucket: "drive-39621.appspot.com",
  messagingSenderId: "341037332919",
  appId: "1:341037332919:web:0eefdb7e9331bc38995032",
  measurementId: "G-L98BC3G8PC",
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default db;

export { storage, auth, provider };
