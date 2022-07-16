import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);
