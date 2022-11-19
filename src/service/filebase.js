// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoUwg4O3_6aogjeOHegLURxbBJYdujj1o",
    authDomain: "devcampku.firebaseapp.com",
    projectId: "devcampku",
    storageBucket: "devcampku.appspot.com",
    messagingSenderId: "96724723418",
    appId: "1:96724723418:web:22530f6cc8ed90e1e1a7e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage, ref, uploadBytes, getDownloadURL };