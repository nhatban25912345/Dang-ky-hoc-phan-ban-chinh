import "./InputStudent.js";
import "./InputWrapper.js";

import "./FormRegister.js";
import "./FormLogin.js";

import "./router.js";
import "./StudentProfile.js";

import "../JS-Object/ObjectContainer.js";
import "../JS-Object/ObjectList.js"
import { deleteUser } from "./utils.js";

document.getElementById("title3").addEventListener("click",function(){
    router.navigate("/student-profile");
})
document.getElementById("title5").addEventListener("click",function(){
    router.navigate("/sign-in");
})
document.getElementById("title4").addEventListener("click",function(){
    // deleteUser();
    router.navigate("/sign-up");
})
document.getElementById("title2").addEventListener("click",function(){
    router.navigate("/object-list");
})