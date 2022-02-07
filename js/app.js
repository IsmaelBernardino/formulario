const registrar_txt = document.querySelector('.register_txt');
const login_txt = document.querySelector(".login_txt");
const form_login = document.querySelector(".form--login");
const form_register = document.querySelector(".form--register");

registrar_txt.addEventListener("click", function(){
    form_login.style.opacity = "0"
    form_login.style.transform = "translateX(-200px)"
    form_register.style.opacity = "1"
    form_register.style.transform = "translateX(0px)"
})

login_txt.addEventListener("click", function () {
    form_register.style.opacity = "0"
    form_register.style.transform = "translateX(200px)"
    form_login.style.opacity = "1"
    form_login.style.transform = "translateX(0px)"
})

const btn_help = document.querySelector(".help_icon")
const help_close = document.querySelector(".help_close")
const form_help = document.querySelector(".form_help")

btn_help.addEventListener("click", function () {
    form_help.style.display = "block";
})

help_close.addEventListener("click", function () {
    form_help.style.display = "none";
})