// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app";
 */// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig);
 */
// "AIzaSyD6XMg2mh1st3gicB2i2Fu0kkiLIlgswHI"

// update 
// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA94riFmqeslxE5yy_7N0rQZHhwl5XroGM",
  authDomain: "eco-hub-eb09e.firebaseapp.com",
  projectId: "eco-hub-eb09e",
  storageBucket: "eco-hub-eb09e.appspot.com",
  messagingSenderId: "846343240541",
  appId: "1:846343240541:web:ef588f1a24f0d7fc3786b4"
};
 */
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;