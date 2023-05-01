import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore'

const firebaseConfig = {
        apiKey: "AIzaSyAFA9r2th45ynBoVdLBscrHdJaWHjrr_WY",
        authDomain: "hr-management-system-de338.firebaseapp.com",
        projectId: "hr-management-system-de338",
        storageBucket: "hr-management-system-de338.appspot.com",
        messagingSenderId: "308808405162",
        appId: "1:308808405162:web:250be86d3f42e34690c0d3"
};

// Initialize Firebase
const fireDb = initializeApp(firebaseConfig);
export const auth = getAuth(fireDb);
export const db = getFirestore(fireDb)
export const storage = getStorage(fireDb);

export const provider = new GoogleAuthProvider();
export default fireDb;
