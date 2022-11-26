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

var mprodimg1 = document.getElementById('mprod-img1')
var mprodimg2 = document.getElementById('mprod-img2')
var mprodimg3 = document.getElementById('mprod-img3')
var mprodimg4 = document.getElementById('mprod-img4')
var mprodimg5 = document.getElementById('mprod-img5')
var mprodimg6 = document.getElementById('mprod-img6')
var mprodimg7 = document.getElementById('mprod-img7')
var mprodimg8 = document.getElementById('mprod-img8')
var mprodimg9 = document.getElementById('mprod-img9')
var mprodimg10 = document.getElementById('mprod-img10')
var mprodimg11 = document.getElementById('mprod-img11')
var mprodimg12 = document.getElementById('mprod-img12')
var mprodname1 = document.getElementById('mprod-name1')
var mprodname2 = document.getElementById('mprod-name2')
var mprodname3 = document.getElementById('mprod-name3')
var mprodname4 = document.getElementById('mprod-name4')
var mprodname5 = document.getElementById('mprod-name5')
var mprodname6 = document.getElementById('mprod-name6')
var mprodname7 = document.getElementById('mprod-name7')
var mprodname8 = document.getElementById('mprod-name8')
var mprodname9 = document.getElementById('mprod-name9')
var mprodname10 = document.getElementById('mprod-name10')
var mprodname11 = document.getElementById('mprod-name11')
var mprodname12 = document.getElementById('mprod-name12')
var mprodrate1 = document.getElementById('mprod-rate1')
var mprodrate2 = document.getElementById('mprod-rate2')
var mprodrate3 = document.getElementById('mprod-rate3')
var mprodrate4 = document.getElementById('mprod-rate4')
var mprodrate5 = document.getElementById('mprod-rate5')
var mprodrate6 = document.getElementById('mprod-rate6')
var mprodrate7 = document.getElementById('mprod-rate7')
var mprodrate8 = document.getElementById('mprod-rate8')
var mprodrate9 = document.getElementById('mprod-rate9')
var mprodrate10 = document.getElementById('mprod-rate10')
var mprodrate11 = document.getElementById('mprod-rate11')
var mprodrate12 = document.getElementById('mprod-rate12')


function sendData() {
    var manProduct = []
    manProduct = [
        {
            image: mprodimg1.src,
            name: mprodname1.innerText,
            rate: mprodrate1.innerText,
        },
        {
            image: mprodimg2.src,
            name: mprodname2.innerText,
            rate: mprodrate2.innerText,
        },
        {
            image: mprodimg3.src,
            name: mprodname3.innerText,
            rate: mprodrate3.innerText,
        },
        {
            image: mprodimg4.src,
            name: mprodname4.innerText,
            rate: mprodrate4.innerText,
        },
        {
            image: mprodimg5.src,
            name: mprodname5.innerText,
            rate: mprodrate5.innerText,
        },
        {
            image: mprodimg6.src,
            name: mprodname6.innerText,
            rate: mprodrate6.innerText,
        },
        {
            image: mprodimg7.src,
            name: mprodname7.innerText,
            rate: mprodrate7.innerText,
        },
        {
            image: mprodimg8.src,
            name: mprodname8.innerText,
            rate: mprodrate8.innerText,
        },
        {
            image: mprodimg9.src,
            name: mprodname9.innerText,
            rate: mprodrate9.innerText,
        },
        {
            image: mprodimg10.src,
            name: mprodname10.innerText,
            rate: mprodrate10.innerText,
        },
        {
            image: mprodimg11.src,
            name: mprodname11.innerText,
            rate: mprodrate11.innerText,
        },
        {
            image: mprodimg12.src,
            name: mprodname12.innerText,
            rate: mprodrate12.innerText,
        },
    ]
    const tref = ref(database, `menproducts/`)
    set(tref, manProduct)
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

