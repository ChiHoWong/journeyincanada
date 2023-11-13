
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