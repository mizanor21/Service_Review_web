// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
    apiKey: "AIzaSyBnnpGnSiQMYZj0R4foV7WzM_2sdk1DJ_g",
    authDomain: "hungry-naki-61fd2.firebaseapp.com",
    projectId: "hungry-naki-61fd2",
    storageBucket: "hungry-naki-61fd2.appspot.com",
    messagingSenderId: "144441488207",
    appId: "1:144441488207:web:402d0fbf44d13461db4b3a"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
export default app;