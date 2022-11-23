// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCZ5644bvYmQwGn77rdt4E5yHvpKfM3NY",
    authDomain: "hairvest-ccc3c.firebaseapp.com",
    projectId: "hairvest-ccc3c",
    storageBucket: "hairvest-ccc3c.appspot.com",
    messagingSenderId: "139447328728",
    appId: "1:139447328728:web:a2840a54a044685b6a5cad"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage, ref, uploadBytes, getDownloadURL };