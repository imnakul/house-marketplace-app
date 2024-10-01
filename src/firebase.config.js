import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAt1UxDRtoK_VFwGm_SSFzKfRWjZ6Y3b00",
   authDomain: "house-marketplace-app-d5763.firebaseapp.com",
   projectId: "house-marketplace-app-d5763",
   storageBucket: "house-marketplace-app-d5763.appspot.com",
   messagingSenderId: "871236314595",
   appId: "1:871236314595:web:5d7e718f2772319d2b6cd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
