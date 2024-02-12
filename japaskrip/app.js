document.addEventListener("DOMContentLoaded", function() {
    const deskripsiList = [
        "The only person who can defeat me is myself",
        "Hey nate. How's Life?",
        "Yea I know it's hard to belive",
        "U feelin low?",
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

//              circlee
document.getElementById('circle').addEventListener('click', function () {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.classList.toggle('show');
});

function handleOptionClick(optionNumber) {
    alert('You clicked Option ' + optionNumber);
}

