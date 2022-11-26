// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

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
const database = getDatabase();

var mainimg1 = document.getElementById('main-img1')
var mainimg2 = document.getElementById('main-img2')
var mainimg3 = document.getElementById('main-img3')
var mainimg4 = document.getElementById('main-img4')
var mainimg5 = document.getElementById('main-img5')
var mainimg6 = document.getElementById('main-img6')
var mainimg7 = document.getElementById('main-img7')
var mainimg8 = document.getElementById('main-img8')
var mainname1 = document.getElementById('main-name1')
var mainname2 = document.getElementById('main-name2')
var mainname3 = document.getElementById('main-name3')
var mainname4 = document.getElementById('main-name4')
var mainname5 = document.getElementById('main-name5')
var mainname6 = document.getElementById('main-name6')
var mainname7 = document.getElementById('main-name7')
var mainname8 = document.getElementById('main-name8')
var mainrate1 = document.getElementById('main-rate1')
var mainrate2 = document.getElementById('main-rate2')
var mainrate3 = document.getElementById('main-rate3')
var mainrate4 = document.getElementById('main-rate4')
var mainrate5 = document.getElementById('main-rate5')
var mainrate6 = document.getElementById('main-rate6')
var mainrate7 = document.getElementById('main-rate7')
var mainrate8 = document.getElementById('main-rate8')

function sendData() {
  var products = []
  products = [
    {
      image: mainimg1.src,
      name: mainname1.innerText,
      rate: mainrate1.innerText,
    },
    {
      image: mainimg2.src,
      name: mainname2.innerText,
      rate: mainrate2.innerText,
    },
    {
      image: mainimg3.src,
      name: mainname3.innerText,
      rate: mainrate3.innerText,
    },
    {
      image: mainimg4.src,
      name: mainname4.innerText,
      rate: mainrate4.innerText,
    },
    {
      image: mainimg5.src,
      name: mainname5.innerText,
      rate: mainrate5.innerText,
    },
    {
      image: mainimg6.src,
      name: mainname6.innerText,
      rate: mainrate6.innerText,
    },
    {
      image: mainimg7.src,
      name: mainname7.innerText,
      rate: mainrate7.innerText,
    },
    {
      image: mainimg8.src,
      name: mainname8.innerText,
      rate: mainrate8.innerText,
    },
  ]
  const taskReference = ref(database, `products/`)
  set(taskReference, products)
}

sendData()

window.showProd = function (mainDiv) {
  var imagsrc = mainDiv.childNodes[1].childNodes[1].src
  var namid = mainDiv.childNodes[3].childNodes[1].innerText
  var ratid = mainDiv.childNodes[3].childNodes[3].innerText
  var obj = {
    image: imagsrc,
    name: namid,
    rate: ratid
  }
  localStorage.setItem('product', JSON.stringify(obj))
  window.location.replace('prodmain.html')
}