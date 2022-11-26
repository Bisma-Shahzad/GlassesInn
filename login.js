// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx5hyH-eBEyH4-puAOu88zRrhEXVR2MoU",
  authDomain: "glasses-9840c.firebaseapp.com",
  projectId: "glasses-9840c",
  storageBucket: "glasses-9840c.appspot.com",
  messagingSenderId: "815407707943",
  appId: "1:815407707943:web:f9e3248975b5a94ff99b02",
  measurementId: "G-N76J6CLNPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById('email')
var password = document.getElementById('password')

window.login = function (e) {
    e.preventDefault()
    var obj = {
        email : email.value,
        password : password.value,
    }

    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      console.log(success.user.uid);
      window.location.replace('index.html')
    })
    .catch(function (err) {
      console.log(err);
    });
    
    console.log(obj)
    email.value = ''
    password.value = ''
}

window.admin = function(){
  window.location.href = 'adminlogin.html'
}