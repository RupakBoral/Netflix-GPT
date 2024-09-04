// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3G49E8sY4Aw8VVDz7okAwDNHVmIPoVMs",
  authDomain: "netflixgpt-8068c.firebaseapp.com",
  projectId: "netflixgpt-8068c",
  storageBucket: "netflixgpt-8068c.appspot.com",
  messagingSenderId: "598101178584",
  appId: "1:598101178584:web:3cff55acf59291a1c4bfad",
  measurementId: "G-HGDSRCN1FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()