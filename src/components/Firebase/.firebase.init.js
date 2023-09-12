// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBp0L1ehV22QiNTiUG11lhZQrxgSS8WqE4",
//   authDomain: "hqua-limited.firebaseapp.com",
//   projectId: "hqua-limited",
//   storageBucket: "hqua-limited.appspot.com",
//   messagingSenderId: "1059816613044",
//   appId: "1:1059816613044:web:7fba53684d4dfa5992a3e1"
// };
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app;