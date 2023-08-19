import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOByKa7HUQHw99xYL7xJeP41Qh7hgAiwU",
  authDomain: "foodrescue-bbd9f.firebaseapp.com",
  databaseURL: "https://foodrescue-bbd9f-default-rtdb.firebaseio.com",
  projectId: "foodrescue-bbd9f",
  storageBucket: "foodrescue-bbd9f.appspot.com",
  messagingSenderId: "519909043619",
  appId: "1:519909043619:web:515ab62783854bb3123e16",
  measurementId: "G-Y81JJ6XBJ6",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
