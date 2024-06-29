// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, push, ref,set,onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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


var main = document.getElementById("main")
var productData = []
function getData (){
    var reference = ref(db,`item`)
    onValue(reference,function(data){
        productData = Object.values(data.val())
        console.log(productData)
        card()
    })

}

getData()

function card(){
for(let i=0; i<productData.length; i++){
    var obj = productData[i]
    console.log(obj)
    main.innerHTML += `
    <div class="card mx-4 mt-5" >
    <img  class="img-fluid" src="${obj.imgUrl}"
      class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">${obj.productName}</h4>
      <h5>${obj.productPrice}</h5>
      <h6>${obj.location} </h6>
      <p class="card-text">${obj.textArea}</p>
      <p class="card-text">${obj.date}</p>
      <a href="../details/detail.html" class="btn btn-primary" onclick="getId('${obj.id}')">Details</a>
    </div>
  </div>`
      

}
}

window.getId = function (id){
    localStorage.setItem("p-Id",id)
    window.location.assign("../detail/detail.html")
}