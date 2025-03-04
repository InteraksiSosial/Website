document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    // Event listener untuk toggle navbar di mode mobile
    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});