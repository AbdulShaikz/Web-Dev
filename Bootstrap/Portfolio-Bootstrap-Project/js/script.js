// Initialize the carousel when the document is ready
$(document).ready(function () {
    $('#portfolioCarousel').carousel({
        interval: 5000, // Set the time between slides in milliseconds (e.g., 5000 = 5 seconds)
        pause: "hover" // Pause the carousel on mouse hover
    });
});