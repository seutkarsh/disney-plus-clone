import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqBZrfjDck_A2fnWdfIajA7MFrzPC4qHk",
  authDomain: "disneyplus-clone-b0ee3.firebaseapp.com",
  projectId: "disneyplus-clone-b0ee3",
  storageBucket: "disneyplus-clone-b0ee3.appspot.com",
  messagingSenderId: "874424734225",
  appId: "1:874424734225:web:be59ca1e6b6539c179d7b0",
  measurementId: "G-91TSYEXR8N",
};

const firebaseApp = initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
//const storage = storage();

export { auth, provider };
//export default db;
