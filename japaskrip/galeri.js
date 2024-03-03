document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainerr");
    const imageSources = ["images/ass.png"];
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
    setInterval(changeImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageElement = document.getElementById("image");
    const imageSources = ["images/788505.png", "images/1288255.jpg", "images/961255.png"]; // Add more image sources as needed

    let currentImageIndex = 0;

    function changeImage() {
        imageContainer.style.opacity = 0;

        setTimeout(function () {
            // imageContainer.src = imageSources[currentImageIndex];
            imageElement.src = imageSources[currentImageIndex];

            currentImageIndex = (currentImageIndex + 1) % imageSources.length;

            imageContainer.style.opacity = 1;
        }, 500); // Adjust the delay (in milliseconds) as needed
    }

    // Set interval to change image every 3 seconds (3000 milliseconds)
    setInterval(changeImage, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer2");
    const imageSources = ["images/961255.png", "images/788505.png", "images/1288255.jpg", "https://images.unsplash.com/photo-1666005487638-61f45819c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        ,"https://images.unsplash.com/photo-1665910407771-bc84ad45676b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"]; // Add more image sources as needed

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