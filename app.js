// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpAMdYqqSVyT8_dJDhJbwrnoOSwifE_aI",
    authDomain: "olx-app-9d32b.firebaseapp.com",
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
const auth = getAuth()

let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")

window.signup = function () {
    var obj = {
        userName: userName.value,
        email: email.value,
        password: password.value,
    }
    console.log(obj)

    createUserWithEmailAndPassword(auth, obj.email, obj.password)

        .then(function (res) {
            console.log(res)
            window.location.assign("../pages/login/login.html")
        })
        .catch(function (err) {
            console.log(err);
        })

}


