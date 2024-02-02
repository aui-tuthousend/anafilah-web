document.addEventListener("DOMContentLoaded", function() {
    const deskripsiList = [
        "merupakan sebuah lembaga yang berjalan di JL. Pagesangan",
        "Deskripsi Kedua",
        "Deskripsi Ketiga",
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
