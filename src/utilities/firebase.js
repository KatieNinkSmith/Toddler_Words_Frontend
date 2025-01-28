// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZtccRNGvPUeAhTVyjZGLUhQfZGKKyk8Y",
  authDomain: "toddlerwordsaudio.firebaseapp.com",
  databaseURL: "https://toddlerwordsaudio-default-rtdb.firebaseio.com",
  projectId: "toddlerwordsaudio",
  storageBucket: "toddlerwordsaudio.firebasestorage.app",
  messagingSenderId: "262340337226",
  appId: "1:262340337226:web:93d6c885f7fb0ab8b610b3",
  measurementId: "G-J8T8FVBLS4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

export default { app, analytics, storage };
