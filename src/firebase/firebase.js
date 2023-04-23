// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOyWMHi6CATwNzsQrKCD1qyNpsYlXuUQI",
  authDomain: "the-dragon-news-50cbd.firebaseapp.com",
  projectId: "the-dragon-news-50cbd",
  storageBucket: "the-dragon-news-50cbd.appspot.com",
  messagingSenderId: "344061085959",
  appId: "1:344061085959:web:8e3db3ebce2cfe974a5da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app