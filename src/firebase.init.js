// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Vc3PZzwn8WWnE00q3GBW_KBVXQEcC_8",
  authDomain: "assignment-10-75ebb.firebaseapp.com",
  projectId: "assignment-10-75ebb",
  storageBucket: "assignment-10-75ebb.appspot.com",
  messagingSenderId: "773228062193",
  appId: "1:773228062193:web:1a39d7540e77316850d050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;