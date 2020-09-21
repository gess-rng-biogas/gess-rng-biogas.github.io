window.onscroll = function () { checkPosition() };
var first = document.getElementById("info");
var navbar = document.getElementById("navbar");
function checkPosition() {
    if (window.pageYOffset >= first.offsetTop - 40) {
        navbar.classList.add("opaque");
    } else {
        navbar.classList.remove("opaque");
    }
}