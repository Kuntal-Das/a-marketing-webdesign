const ham = document.getElementById("ham");
const nav = document.querySelector(".nav");

ham.addEventListener("click", () => {
    if (ham.classList.contains("ham-btn")) {
        ham.classList.replace("ham-btn", "ham-btn-close");
    } else {
        ham.classList.replace("ham-btn-close", "ham-btn");
    }
    nav.classList.toggle("navigation-open");
});