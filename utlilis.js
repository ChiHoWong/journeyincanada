const mobileMenuButton = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-nav");

mobileMenuButton.addEventListener("click", function() {
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        document.body.style.overflowY = 'hidden'
    } else {
        mobileMenu.style.display = "none";
        document.body.style.overflowY = 'auto'
    }
});