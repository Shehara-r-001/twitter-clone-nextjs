// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCofOiNn2onLHEwO8kqCHOZzh2XWzf4KcU",
  authDomain: "twitter-clone-52dc6.firebaseapp.com",
  projectId: "twitter-clone-52dc6",
  storageBucket: "twitter-clone-52dc6.appspot.com",
  messagingSenderId: "945456482503",
  appId: "1:945456482503:web:0cdb38eb048202178516e2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
