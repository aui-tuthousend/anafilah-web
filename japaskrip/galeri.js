document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageSources = ["images/788505.png", "images/1288255.jpg", "images/961255.png"]; // Add more image sources as needed

    let currentImageIndex = 0;

    function changeImage() {
        // Fade out the current image
        imageContainer.style.opacity = 0;

        // After a short delay, change the image source and fade it in
        setTimeout(function () {
            // Change the image source
            imageContainer.src = imageSources[currentImageIndex];

            // Increment the index or reset to 0 if at the last image
            currentImageIndex = (currentImageIndex + 1) % imageSources.length;

            // Fade in the new image
            imageContainer.style.opacity = 1;
        }, 500); // Adjust the delay (in milliseconds) as needed
    }

    // Set interval to change image every 3 seconds (3000 milliseconds)
    setInterval(changeImage, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer2");
    const imageSources = ["images/961255.png", "images/788505.png", "images/1288255.jpg"]; // Add more image sources as needed

    let currentImageIndex = 0;

    function changeImage() {
        // Fade out the current image
        imageContainer.style.opacity = 0;

        // After a short delay, change the image source and fade it in
        setTimeout(function () {
            // Change the image source
            imageContainer.src = imageSources[currentImageIndex];

            // Increment the index or reset to 0 if at the last image
            currentImageIndex = (currentImageIndex + 1) % imageSources.length;

            // Fade in the new image
            imageContainer.style.opacity = 1;
        }, 900); // Adjust the delay (in milliseconds) as needed
    }

    // Set interval to change image every 3 seconds (3000 milliseconds)
    setInterval(changeImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer3");
    const imageSources = ["images/1288255.jpg", "images/788505.png",  "images/961255.png"]; // Add more image sources as needed

    let currentImageIndex = 0;

    function changeImage() {
        // Fade out the current image
        imageContainer.style.opacity = 0;

        // After a short delay, change the image source and fade it in
        setTimeout(function () {
            // Change the image source
            imageContainer.src = imageSources[currentImageIndex];

            // Increment the index or reset to 0 if at the last image
            currentImageIndex = (currentImageIndex + 1) % imageSources.length;

            // Fade in the new image
            imageContainer.style.opacity = 1;
        }, 600); // Adjust the delay (in milliseconds) as needed
    }

    // Set interval to change image every 3 seconds (3000 milliseconds)
    setInterval(changeImage, 4000);
});