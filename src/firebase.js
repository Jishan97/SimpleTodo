import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCioMsv1bVjKVQ_cPL-AkztUSoebjQvE5k",
  authDomain: "todoapp-786b1.firebaseapp.com",
  projectId: "todoapp-786b1",
  storageBucket:"todoapp-786b1.appspot.com",
  messagingSenderId: "477673384899",
  appId: "1:477673384899:web:1fb3f238e10e585b6deb76",
  measurementId: "G-ZNKVMKR9TD"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}