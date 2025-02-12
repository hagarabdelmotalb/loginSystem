let welcomeMsg = document.getElementById("welcomeMsg");


window.addEventListener("load", function () {
    let userName = localStorage.getItem("userName");
    if (userName) {
        welcomeMsg.innerHTML = `Welcome, ${userName}!`;
    } else {
        welcomeMsg.innerHTML = "Welcome, Guest!";
    }
});
