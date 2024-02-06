document.addEventListener("DOMContentLoaded", function() {
    const deskripsiList = [
        "merupakan sebuah lembaga yang berjalan di JL. Pagesangan",
        "into your ocean eyes",
        "what can i say is complicated",
        // Tambahkan deskripsi lainnya sesuai kebutuhan
    ];

    let currentDeskripsiIndex = 0;
    const descriptionElement = document.getElementById("dynamicDescription");

    function updateDeskripsi() {
        descriptionElement.classList.add("hide"); // Menambah kelas 'hide' untuk efek transisi

        setTimeout(function() {
            descriptionElement.textContent = deskripsiList[currentDeskripsiIndex];
            currentDeskripsiIndex = (currentDeskripsiIndex + 1) % deskripsiList.length;

            descriptionElement.classList.remove("hide"); // Menghapus kelas 'hide' untuk efek transisi
        }, 500); // Menyesuaikan waktu animasi dengan waktu transisi CSS
    }

    // Pertama kali, langsung menampilkan deskripsi tanpa animasi
    descriptionElement.textContent = deskripsiList[currentDeskripsiIndex];
    currentDeskripsiIndex = (currentDeskripsiIndex + 1) % deskripsiList.length;

    // Update deskripsi setiap 5 detik
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


