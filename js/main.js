
let btnlogin = document.querySelector("button");
let emailInput = document.getElementById("Email");
let passwordInput = document.getElementById("Password");

let emailAlert = document.getElementById("emailAlert");
let PasswordAlert  = document.getElementById("PasswordAlert");
let nonExistAlert = document.getElementById("nonExistAlert");
let successAlert = document.getElementById("successAlert");

let Accounts = JSON.parse(localStorage.getItem("accountContainer")) || [];

 btnlogin.addEventListener("click",function(e){
    login();
 })

function isEmailExist(email) {
    return Accounts.some(account => account.email === emailInput.value);
}


function isPasswordRight(email, password){
    return Accounts.some(account => account.email === email && account.password === password);
}

 function login(){
    let email = emailInput.value;
    let password = passwordInput.value;
    let user = Accounts.find(account => account.email === email);
    if (isEmailExist(email) && isPasswordRight(email, password)) {
        successAlert.classList.remove("d-none");
        emailAlert.classList.add("d-none");
        PasswordAlert.classList.add("d-none");
        nonExistAlert.classList.add("d-none");

        localStorage.setItem("userName", user.name);

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1500);
    }
    else if (!isEmailExist(email)) {
        emailAlert.classList.remove("d-none");
        PasswordAlert.classList.add("d-none");
        nonExistAlert.classList.add("d-none");
    }
    else if (isEmailExist(email) && !isPasswordRight(email, password)) {
        PasswordAlert.classList.remove("d-none");
        emailAlert.classList.add("d-none");
        nonExistAlert.classList.add("d-none");
    }

    clearForm();
}




function clearForm() {
    emailInput.value = "";
    passwordInput.value = "";
}