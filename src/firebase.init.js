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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6XMg2mh1st3gicB2i2Fu0kkiLIlgswHI",
  authDomain: "eco-hub-client.firebaseapp.com",
  projectId: "eco-hub-client",
  storageBucket: "eco-hub-client.appspot.com",
  messagingSenderId: "849989598628",
  appId: "1:849989598628:web:7b8d70b4e95cc96de51531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;


/* const firebaseConfig = {
    apiKey:"AIzaSyD6XMg2mh1st3gicB2i2Fu0kkiLIlgswHI",
    // process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */

