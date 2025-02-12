let nameInput = document.getElementById("Name");
let emailInput = document.getElementById("Email");
let passwordInput = document.getElementById("Password");

let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");

let btnSignUp = document.getElementById("signUp");

let Accounts = JSON.parse(localStorage.getItem("accountContainer")) || [];

btnSignUp.addEventListener("click", function () {
    addAccount();

});

function addAccount() {
    if (allInputsAreValid()) {
        if (isEmailExist(emailInput.value)) {
            existAlert.classList.remove("d-none");
            successAlert.classList.add("d-none");
        } else {
            let account = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
            };
            Accounts.push(account);
            localStorage.setItem("accountContainer", JSON.stringify(Accounts));

            existAlert.classList.add("d-none");
            successAlert.classList.remove("d-none");

            clearForm();

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        }
    }
}

function isEmailExist(email) {
    return Accounts.some(account => account.email === email);
}

function clearForm() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

nameInput.addEventListener("input", () => validation(/^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})*$/, nameInput, nameAlert));
emailInput.addEventListener("input", () => validation(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, emailInput, emailAlert));
passwordInput.addEventListener("input", () => validation(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/, passwordInput, passwordAlert));

function validation(regex, element, alertMsg) {
    if (regex.test(element.value)) {
        alertMsg.classList.add("d-none");
        return true;
    } else {
        alertMsg.classList.remove("d-none");
        return false;
    }
}

function allInputsAreValid() {
    return (
        validation(/^[A-Za-z]{2,}(?:\s[A-Za-z]+)*$/, nameInput, nameAlert) && 
        validation(/^[A-Za-z0-9]+[A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, emailInput, emailAlert) && 
        validation(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/, passwordInput, passwordAlert)
    );
}