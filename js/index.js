const menu = document.querySelector(".menu")
const menu_close = document.querySelector(".close")
const menu_index = document.querySelector(".header_menu")
const container = document.querySelector(".container")

if (window.matchMedia("(min-width: 768px)").matches) {
    menu.addEventListener("click", function () {
        menu_index.style.left = "0";
        menu.style.display = "none"
        menu_close.style.display = "block"
        container.style.width = "calc(100% - 300px)"
        container.style.marginLeft = "300px"
    })
    menu_close.addEventListener("click", function () {
        menu_index.style.left = "-110%";
        menu.style.display = "block"
        menu_close.style.display = "none"
        container.style.width = "100%"
        container.style.marginLeft = "0"
    })
} else {
    menu.addEventListener("click", function () {
        menu_index.style.left = "0";
        menu.style.display = "none"
        menu_close.style.display = "block"
    })
    menu_close.addEventListener("click", function () {
        menu_index.style.left = "-110%";
        menu.style.display = "block"
        menu_close.style.display = "none"
    })
}
