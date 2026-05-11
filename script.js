const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});
var typed = new Typed(".typing", {

    strings: [
        "UI/UX Designer",
        "Front-End Developer",
        "Graphic Designer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
