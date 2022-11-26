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

var wprodimg1 = document.getElementById('wprod-img1')
var wprodimg2 = document.getElementById('wprod-img2')
var wprodimg3 = document.getElementById('wprod-img3')
var wprodimg4 = document.getElementById('wprod-img4')
var wprodimg5 = document.getElementById('wprod-img5')
var wprodimg6 = document.getElementById('wprod-img6')
var wprodimg7 = document.getElementById('wprod-img7')
var wprodimg8 = document.getElementById('wprod-img8')
var wprodimg9 = document.getElementById('wprod-img9')
var wprodimg10 = document.getElementById('wprod-img10')
var wprodimg11 = document.getElementById('wprod-img11')
var wprodimg12 = document.getElementById('wprod-img12')
var wprodname1 = document.getElementById('wprod-name1')
var wprodname2 = document.getElementById('wprod-name2')
var wprodname3 = document.getElementById('wprod-name3')
var wprodname4 = document.getElementById('wprod-name4')
var wprodname5 = document.getElementById('wprod-name5')
var wprodname6 = document.getElementById('wprod-name6')
var wprodname7 = document.getElementById('wprod-name7')
var wprodname8 = document.getElementById('wprod-name8')
var wprodname9 = document.getElementById('wprod-name9')
var wprodname10 = document.getElementById('wprod-name10')
var wprodname11 = document.getElementById('wprod-name11')
var wprodname12 = document.getElementById('wprod-name12')
var wprodrate1 = document.getElementById('wprod-rate1')
var wprodrate2 = document.getElementById('wprod-rate2')
var wprodrate3 = document.getElementById('wprod-rate3')
var wprodrate4 = document.getElementById('wprod-rate4')
var wprodrate5 = document.getElementById('wprod-rate5')
var wprodrate6 = document.getElementById('wprod-rate6')
var wprodrate7 = document.getElementById('wprod-rate7')
var wprodrate8 = document.getElementById('wprod-rate8')
var wprodrate9 = document.getElementById('wprod-rate9')
var wprodrate10 = document.getElementById('wprod-rate10')
var wprodrate11 = document.getElementById('wprod-rate11')
var wprodrate12 = document.getElementById('wprod-rate12')


function sendData() {
    var womenProducts = []
    womenProducts = [
        {
            image: wprodimg1.src,
            name: wprodname1.innerText,
            rate: wprodrate1.innerText
        },
        {
            image: wprodimg2.src,
            name: wprodname2.innerText,
            rate: wprodrate2.innerText
        },
        {
            image: wprodimg3.src,
            name: wprodname3.innerText,
            rate: wprodrate3.innerText
        },
        {
            image: wprodimg4.src,
            name: wprodname4.innerText,
            rate: wprodrate4.innerText
        },
        {
            image: wprodimg5.src,
            name: wprodname5.innerText,
            rate: wprodrate5.innerText
        },
        {
            image: wprodimg6.src,
            name: wprodname6.innerText,
            rate: wprodrate6.innerText
        },
        {
            image: wprodimg7.src,
            name: wprodname7.innerText,
            rate: wprodrate7.innerText
        },
        {
            image: wprodimg8.src,
            name: wprodname8.innerText,
            rate: wprodrate8.innerText
        },
        {
            image: wprodimg9.src,
            name: wprodname9.innerText,
            rate: wprodrate9.innerText
        },
        {
            image: wprodimg10.src,
            name: wprodname10.innerText,
            rate: wprodrate10.innerText
        },
        {
            image: wprodimg11.src,
            name: wprodname11.innerText,
            rate: wprodrate11.innerText
        },
        {
            image: wprodimg12.src,
            name: wprodname12.innerText,
            rate: wprodrate12.innerText
        },
    ]
    const tReference = ref(database, `womenproducts/`)
    set(tReference, womenProducts)
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