const images = document.querySelectorAll(".blog--image-block");
document.querySelector(".year").textContent = new Date().getFullYear();

let enabled = false;

images.forEach((item) => {
    item.addEventListener("click", function () {
        enabled = !enabled;
        item.classList.toggle("fullscreen", enabled);
    });
});


