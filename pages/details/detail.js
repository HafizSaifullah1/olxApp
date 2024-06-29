// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, push, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
const db = getDatabase();



var image = document.getElementById("image")
var price = document.getElementById("price")
var condition = document.getElementById("condition")
var description = document.getElementById("description")
var location = document.getElementById("location")
  
var id = localStorage.getItem("p-Id")



function getData() {
    // var id = localStorage.getItem("p-Id")
    console.log(id)
    var reference = ref(db, `item/${id}`)
    onValue(reference, function (data) {
        var detail = data.val()
        console.log(detail)

        image.src = detail.imgUrl
        price.innerHTML = detail.productPrice
        condition.innerHTML = detail.date
        description.innerHTML = detail.textArea
        location.innerHTML = detail.location

    })

}

getData()