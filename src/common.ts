import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",
  authDomain: "pmpirate.firebaseapp.com",
  projectId: "pmpirate",
  storageBucket: "pmpirate.appspot.com",
  messagingSenderId: "198590478768",
  appId: "1:198590478768:web:3d10abd6d006c0a0b93e75",
  measurementId: "G-19MDLJEYQG",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app);
const functions = getFunctions(app, "europe-west2");
const isEmulation =
  location.href.includes("localhost") || location.href.includes("127.0.0.1");
if (isEmulation) {
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(functions, "localhost", 5001);
}
export { db, functions };
