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

var prodimg1 = document.getElementById('prod-img1')
var prodimg2 = document.getElementById('prod-img2')
var prodimg3 = document.getElementById('prod-img3')
var prodimg4 = document.getElementById('prod-img4')
var prodimg5 = document.getElementById('prod-img5')
var prodimg6 = document.getElementById('prod-img6')
var prodimg7 = document.getElementById('prod-img7')
var prodimg8 = document.getElementById('prod-img8')
var prodimg9 = document.getElementById('prod-img9')
var prodimg10 = document.getElementById('prod-img10')
var prodimg11 = document.getElementById('prod-img11')
var prodimg12 = document.getElementById('prod-img12')
var prodimg13 = document.getElementById('prod-img13')
var prodimg14 = document.getElementById('prod-img14')
var prodimg15 = document.getElementById('prod-img15')
var prodimg16 = document.getElementById('prod-img16')
var prodimg17 = document.getElementById('prod-img17')
var prodimg18 = document.getElementById('prod-img18')
var prodimg19 = document.getElementById('prod-img19')
var prodimg20 = document.getElementById('prod-img20')
var prodimg21 = document.getElementById('prod-img21')
var prodimg22 = document.getElementById('prod-img22')
var prodimg23 = document.getElementById('prod-img23')
var prodimg24 = document.getElementById('prod-img24')
var prodname1 = document.getElementById('prod-name1')
var prodname2 = document.getElementById('prod-name2')
var prodname3 = document.getElementById('prod-name3')
var prodname4 = document.getElementById('prod-name4')
var prodname5 = document.getElementById('prod-name5')
var prodname6 = document.getElementById('prod-name6')
var prodname7 = document.getElementById('prod-name7')
var prodname8 = document.getElementById('prod-name8')
var prodname9 = document.getElementById('prod-name9')
var prodname10 = document.getElementById('prod-name10')
var prodname11 = document.getElementById('prod-name11')
var prodname12 = document.getElementById('prod-name12')
var prodname13 = document.getElementById('prod-name13')
var prodname14 = document.getElementById('prod-name14')
var prodname15 = document.getElementById('prod-name15')
var prodname16 = document.getElementById('prod-name16')
var prodname17 = document.getElementById('prod-name17')
var prodname18 = document.getElementById('prod-name18')
var prodname19 = document.getElementById('prod-name19')
var prodname20 = document.getElementById('prod-name20')
var prodname21 = document.getElementById('prod-name21')
var prodname22 = document.getElementById('prod-name22')
var prodname23 = document.getElementById('prod-name23')
var prodname24 = document.getElementById('prod-name24')
var prodrate1 = document.getElementById('prod-rate1')
var prodrate2 = document.getElementById('prod-rate2')
var prodrate3 = document.getElementById('prod-rate3')
var prodrate4 = document.getElementById('prod-rate4')
var prodrate5 = document.getElementById('prod-rate5')
var prodrate6 = document.getElementById('prod-rate6')
var prodrate7 = document.getElementById('prod-rate7')
var prodrate8 = document.getElementById('prod-rate8')
var prodrate9 = document.getElementById('prod-rate9')
var prodrate10 = document.getElementById('prod-rate10')
var prodrate11 = document.getElementById('prod-rate11')
var prodrate12 = document.getElementById('prod-rate12')
var prodrate13 = document.getElementById('prod-rate13')
var prodrate14 = document.getElementById('prod-rate14')
var prodrate15 = document.getElementById('prod-rate15')
var prodrate16 = document.getElementById('prod-rate16')
var prodrate17 = document.getElementById('prod-rate17')
var prodrate18 = document.getElementById('prod-rate18')
var prodrate19 = document.getElementById('prod-rate19')
var prodrate20 = document.getElementById('prod-rate20')
var prodrate21 = document.getElementById('prod-rate21')
var prodrate22 = document.getElementById('prod-rate22')
var prodrate23 = document.getElementById('prod-rate23')
var prodrate24 = document.getElementById('prod-rate24')


function sendData() {
    var allProducts = []
    allProducts = [
        {
            image: prodimg1.src,
            name: prodname1.innerText,
            rate: prodrate1.innerText,
        },
        {
            image: prodimg2.src,
            name: prodname2.innerText,
            rate: prodrate2.innerText,
        },
        {
            image: prodimg3.src,
            name: prodname3.innerText,
            rate: prodrate3.innerText,
        },
        {
            image: prodimg4.src,
            name: prodname4.innerText,
            rate: prodrate4.innerText,
        },
        {
            image: prodimg5.src,
            name: prodname5.innerText,
            rate: prodrate5.innerText,
        },
        {
            image: prodimg6.src,
            name: prodname6.innerText,
            rate: prodrate6.innerText,
        },
        {
            image: prodimg7.src,
            name: prodname7.innerText,
            rate: prodrate7.innerText,
        },
        {
            image: prodimg8.src,
            name: prodname8.innerText,
            rate: prodrate8.innerText,
        },
        {
            image: prodimg9.src,
            name: prodname9.innerText,
            rate: prodrate9.innerText,
        },
        {
            image: prodimg10.src,
            name: prodname10.innerText,
            rate: prodrate10.innerText,
        },
        {
            image: prodimg11.src,
            name: prodname11.innerText,
            rate: prodrate11.innerText,
        },
        {
            image: prodimg12.src,
            name: prodname12.innerText,
            rate: prodrate12.innerText,
        },
        {
            image: prodimg13.src,
            name: prodname13.innerText,
            rate: prodrate13.innerText,
        },
        {
            image: prodimg14.src,
            name: prodname14.innerText,
            rate: prodrate14.innerText,
        },
        {
            image: prodimg15.src,
            name: prodname15.innerText,
            rate: prodrate15.innerText,
        },
        {
            image: prodimg16.src,
            name: prodname16.innerText,
            rate: prodrate16.innerText,
        },
        {
            image: prodimg17.src,
            name: prodname17.innerText,
            rate: prodrate17.innerText,
        },
        {
            image: prodimg18.src,
            name: prodname18.innerText,
            rate: prodrate18.innerText,
        },
        {
            image: prodimg19.src,
            name: prodname19.innerText,
            rate: prodrate19.innerText,
        },
        {
            image: prodimg20.src,
            name: prodname20.innerText,
            rate: prodrate20.innerText,
        },
        {
            image: prodimg21.src,
            name: prodname21.innerText,
            rate: prodrate21.innerText,
        },
        {
            image: prodimg22.src,
            name: prodname22.innerText,
            rate: prodrate22.innerText,
        },
        {
            image: prodimg23.src,
            name: prodname23.innerText,
            rate: prodrate23.innerText,
        },
        {
            image: prodimg24.src,
            name: prodname24.innerText,
            rate: prodrate24.innerText,
        },
    ]
    const tr = ref(database, `allProducts/`)
    set(tr, allProducts)
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