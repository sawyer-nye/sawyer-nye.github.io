window.onscroll = function() {makeSticky()};

// Get topnav
var topnav = document.getElementById("topnav")

// Get offset position of navbar
var sticky = topnav.offsetTop;

// Add sticky class to header when scroll position reached. Remove when leaving
function makeSticky() {
    if (window.pageYOffset > sticky) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    } 
}