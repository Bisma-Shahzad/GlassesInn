// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZGfnSOwksUZFDweMT8IVjIs8uuoldQdw",
  authDomain: "slider-4ca42.firebaseapp.com",
  databaseURL: "https://slider-4ca42-default-rtdb.firebaseio.com",
  projectId: "slider-4ca42",
  storageBucket: "slider-4ca42.appspot.com",
  messagingSenderId: "158140034957",
  appId: "1:158140034957:web:e6e8a812bc850ecb5b17c4",
  measurementId: "G-ZK6QD0PYHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

window.login = function (e) {
    e.preventDefault()
    var obj = {
        email : email.value,
        password : password.value,
    }

    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      console.log(success.user.uid);
      window.location.replace('adminportal.html')
    })
    .catch(function (err) {
      console.log(err);
    });
    
    console.log(obj)
    email.value = ''
    password.value = ''
}