import "./App.css";
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
import HomePage from "./pages/HomePage";

function App() {


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL6HbSDTkc8tmvmJQdYJ3E-DzE5kS2Q5I",
  authDomain: "xander-personalwebsite.firebaseapp.com",
  projectId: "xander-personalwebsite",
  storageBucket: "xander-personalwebsite.appspot.com",
  messagingSenderId: "636088235473",
  appId: "1:636088235473:web:449eef20ab943732505cf0",
  measurementId: "G-XP7908BKD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <main className="app__page-wrapper">
      <HomePage />

      <footer className="app__footer">
        <div className="app__footer-pill">
          <span className="app__footer-text">Made in NZ 🇳🇿</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
