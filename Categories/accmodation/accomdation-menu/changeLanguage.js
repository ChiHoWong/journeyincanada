function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value;
    
    // Define the URLs for the different language versions of your site
    const languageURLs = {
      'en': './accomdation-menu-en.html', // English version
      'zh': './accomodation-menu-zh.html', // Chinese version
      // Add more language URLs as needed
    };
    
    // Redirect the user to the selected language version
    window.location.href = languageURLs[selectedLanguage];
  }

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".category-boxs-container");
    const scrollContent = document.querySelector(".category-box");
    const scrollLeftButton = document.querySelector(".arrow-left");
    const scrollRightButton = document.querySelector(".arrow-right");

    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollLeft -= 100; // Adjust the scroll distance as needed
        changeButtonPosition();
    });

    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollLeft += 100; // Adjust the scroll distance as needed
        changeButtonPosition();       
    });

  
});