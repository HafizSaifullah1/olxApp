// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, push, ref,set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpAMdYqqSVyT8_dJDhJbwrnoOSwifE_aI",
    authDomain: "olx-app-9d32b.firebaseapp.com",
    databaseURL: "https://olx-app-9d32b-default-rtdb.firebaseio.com",
    projectId: "olx-app-9d32b",
    storageBucket: "olx-app-9d32b.appspot.com",
    messagingSenderId: "713608503368",
    appId: "1:713608503368:web:d8588ed1ce8a92725e387d",
    measurementId: "G-8XTZ907FBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase()


var productPrice = document.getElementById("productPrice")
var productName = document.getElementById("productName")
var imgUrl = document.getElementById("imgUrl")
var date = document.getElementById("date")
var location = document.getElementById("location")
var textArea = document.getElementById("textArea")


window.addProduct = function (){

    var obj = {
        productPrice: productPrice.value,
        productName: productName.value,
        imgUrl: imgUrl.value,
        date: date.value,
        location:location.value,
        textArea: textArea.value
    }
    // console.log(obj)

    obj.id = push(ref(db,"item")).key
    var reference = ref(db,`item/${obj.id}`)
    set(reference, obj)
        .then(function () {
            window.location.assign("../main/main.html")
        })
        .catch(function (err) {
            console.log(err);
        })
}