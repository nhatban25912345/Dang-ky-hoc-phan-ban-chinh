import "./InputStudent.js";
import "./InputWrapper.js";

import "./FormRegister.js";
import "./FormLogin.js";
import "./FormLoginAdmin.js"

import "./router.js";
import "./StudentProfile.js";

import "../JS-object-manager/ObjectManager.js"
import "../JS-object-manager/ObjectRegister.js"
import "../JS-Object/ObjectContainer.js";
import "../JS-Object/ObjectList.js"
import { deleteUser } from "./utils.js"; 

// import {seed} from "../data/fake.js";
// seed();

// document.getElementById("title3").addEventListener("click",function(){
//     router.navigate("/student-profile");
// })
// document.getElementById("title5").addEventListener("click",function(){
//     router.navigate("/sign-in");
// })
// document.getElementById("title4").addEventListener("click",function(){
//     // deleteUser();
//     router.navigate("/sign-up");
// })
// document.getElementById("title2").addEventListener("click",function(){
//     router.navigate("/object-list");
// })
let modal01 = document.getElementById('id01');
var modalLogin = document.getElementById('btn-login');
modalLogin.onclick = function () {
    modal01.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal01) {
        modal01.style.display = "none";
    }
}
let modal02 = document.getElementById('id02');
var modalAdmin = document.getElementById('admin-register');
modalAdmin.onclick = function () {
    modal02.style.display = 'block';
}
window.onclick = function (event) {
    if (event.target == modal02) {
        modal02.style.display = "none";
    }
}


