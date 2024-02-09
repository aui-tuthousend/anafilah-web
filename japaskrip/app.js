document.addEventListener("DOMContentLoaded", function() {
    const deskripsiList = [
        "merupakan sebuah lembaga yang berjalan di JL. Pagesangan",
        "depan muhamadiyah",
        "belok kanan",
    ];

    let currentDeskripsiIndex = 0;
    const descriptionElement = document.getElementById("dynamicDescription");

    function updateDeskripsi() {
        descriptionElement.classList.add("hide");

        setTimeout(function() {
            descriptionElement.textContent = deskripsiList[currentDeskripsiIndex];
            currentDeskripsiIndex = (currentDeskripsiIndex + 1) % deskripsiList.length;

            descriptionElement.classList.remove("hide");
        }, 500);
    }

    descriptionElement.textContent = deskripsiList[currentDeskripsiIndex];
    currentDeskripsiIndex = (currentDeskripsiIndex + 1) % deskripsiList.length;

    setInterval(updateDeskripsi, 5000);
});

const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

const openYouTube = () => {
    window.open("https://www.youtube.com/", "_blank");
}

const openIG = () => {
    window.open("https://www.instagram.com/yayasanannafilah/", "_blank");
}

const openIG2 = () => {
    window.open("https://www.instagram.com/rumahtahfidzannafilah/", "_blank");
}


