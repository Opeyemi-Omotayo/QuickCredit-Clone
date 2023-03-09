import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt6wOdbx7wOqOxiCbxUxGcsSj3657dbwc",
  authDomain: "quickcredit-clone.firebaseapp.com",
  projectId: "quickcredit-clone",
  storageBucket: "quickcredit-clone.appspot.com",
  messagingSenderId: "48436031768",
  appId: "1:48436031768:web:ff9960c92f945b01a02e6d",
  measurementId: "G-J47GRLJK3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);