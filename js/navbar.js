window.onscroll = function () { checkPosition() };
var carousel = document.getElementById("carousel");
var navbar = document.getElementById("navbar");
function checkPosition() {
    if (window.pageYOffset >= carousel.offsetTop - 40) {
        navbar.classList.add("opaque");
    } else {
        navbar.classList.remove("opaque");
    }
}