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

document.getElementById("title3").addEventListener("click",function(){
    router.navigate("/student-profile");
})
document.getElementById("title1").addEventListener("click",function(){
    router.navigate("/object-manager");
})
document.getElementById("admin-register").addEventListener("click",function(){
    deleteUser();
    alert("Bạn đã đăng xuất thành công!!");
    alert("Mời bạn tải lại trang")
    router.navigate("/home");

})
document.getElementById("title2").addEventListener("click",function(){
    router.navigate("/object-list");
})


// login
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


