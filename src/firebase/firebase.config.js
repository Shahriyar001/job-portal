// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzDUF_ucIs00Fh3OPRG1hPMPv87qsE_ls",
    authDomain: "job-portal-c1acd.firebaseapp.com",
    projectId: "job-portal-c1acd",
    storageBucket: "job-portal-c1acd.appspot.com",
    messagingSenderId: "180582319804",
    appId: "1:180582319804:web:af7e9892d3033a494f32b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;