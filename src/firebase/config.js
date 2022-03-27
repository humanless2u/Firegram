// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Akv-em4tko2MlIcCaKORW12XYPKeW_0",
  authDomain: "firegram-a047d.firebaseapp.com",
  projectId: "firegram-a047d",
  storageBucket: "firegram-a047d.appspot.com",
  messagingSenderId: "904721094538",
  appId: "1:904721094538:web:b965f91646a9f6c77b9a73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectFirestore, projectStorage };
