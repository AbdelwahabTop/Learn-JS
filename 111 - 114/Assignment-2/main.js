let user = document.querySelector("input[type = text]");
let email = document.querySelector("input[type = email]");
let password = document.querySelector("input[type = password]");
let year = document.querySelector("select");


window.addEventListener("change" , function (e) {
    // Add values to sessionStorage from usre inputs
    window.sessionStorage.setItem("user", user.value);
    window.sessionStorage.setItem("email", email.value);
    window.sessionStorage.setItem("password", password.value);
    window.sessionStorage.setItem("year", year.value);
});

window.addEventListener("load", function (e) {
    // Add values to inputs from sessionStorage
    user.value = window.sessionStorage.getItem("user");
    email.value = window.sessionStorage.getItem("email");
    password.value = window.sessionStorage.getItem("password");
    year.value = window.sessionStorage.getItem("year");
});