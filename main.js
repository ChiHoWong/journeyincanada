function changeLanguage() {
  const selectedLanguage = document.getElementById("language").value;
  
  // Define the URLs for the different language versions of your site
  const languageURLs = {
    'en': 'index.html', // English version
    'zh': 'homepage-zh.html', // Chinese version
    // Add more language URLs as needed
  };
  
  // Redirect the user to the selected language version
  window.location.href = languageURLs[selectedLanguage];
}

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