function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value;
    
    // Define the URLs for the different language versions of your site
    const languageURLs = {
      'en': './$saving-menu-en.html', // English version
      'zh': './$saving-menu-zh.html', // Chinese version
      // Add more language URLs as needed
    };
    
    // Redirect the user to the selected language version
    window.location.href = languageURLs[selectedLanguage];
  }
