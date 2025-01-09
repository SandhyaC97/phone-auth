// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQHT_CzWFoSg8liBDK2TD7D2l23XyvPMY",
  authDomain: "my-app1-432cd.firebaseapp.com",
  projectId: "my-app1-432cd",
  storageBucket: "my-app1-432cd.firebasestorage.app",
  messagingSenderId: "719686851028",
  appId: "1:719686851028:web:a9324ca4df49941ec29e41",
  measurementId: "G-PNYY69R9M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);