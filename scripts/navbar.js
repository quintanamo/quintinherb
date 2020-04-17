window.onscroll = function() {
    
    let navbar = document.getElementById("newNavbar");

    if (document.body.scrollTop > (window.innerHeight) || document.documentElement.scrollTop > (window.innerHeight)) {
        navbar.style.position = "fixed";
        navbar.classList.add("changeColor");
    } else {
        navbar.style.position = "absolute";
        mavbar.classList.remove("changeColor");
    }
};