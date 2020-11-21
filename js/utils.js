// export function md5(string) {
//     return CryptoJS.MD5(string).toString();
// }

export function validateInputWrapper(inputWrapper, condition, message) {
    let value = inputWrapper.value;

    if (condition(value)) {
        inputWrapper.error = "";
        return true;
    }
    inputWrapper.error = message;
    return false;
}


export function getDataFromDoc(doc, excepts = []) {
    let data = doc.data(); // data: object
    data.id = doc.id; // thêm thuộc tính id
    for(let except of excepts) {
        delete data[except]; // xóa thuộc tính 
    }
    return data;
}

export function getDataFromDocs(docs, excepts = []) {
    return docs.map(function(doc) {
        return getDataFromDoc(doc, excepts);
    });
}

export function saveCurrentUser(userData) {
    localStorage.setItem('current-user', JSON.stringify(userData));
}
export function deleteUser(){
    localStorage.setItem('current-user', JSON.stringify());
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('current-user'));
}
