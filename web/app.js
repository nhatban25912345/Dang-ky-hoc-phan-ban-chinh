import "../js/utils.js"
import "../js/router.js"

const $formLogin = document.querySelector('.form-login');

const $studentId = document.getElementById("email");
const $password = document.getElementById("password1");

this.$formLogin.onsubmit = (event) => {
    event.preventDefault();
    if (validate()) {
    
        let result = await firebase
            .firestore()
            .collection('users')
            .where('studentId', '==', $studentId)
            .where('password', '==', $password)
            .get();
    
        if (result.empty) {
            alert("msv hoặc mk không chính xác");
        } else {
            // alert("Đăng nhập thành công");
            saveCurrentUser(getDataFromDoc(result.docs[0], ['password']));
            router.navigate('/student-profile');
        }
    }
    
}

function validate(){
    return validateInputWrapper(this.$studentId, (value) => value != "", "Nhập vào MSV")
        & validateInputWrapper(this.$password, (value) => value != "", "Nhập vào password");
}
