const images = document.querySelectorAll(".blog--image-block");
document.querySelector(".year").textContent = new Date().getFullYear();
const secret = document.querySelector(".year");
const container = document.querySelector(".container");
const sideBarButton = document.querySelector(".sidebar-btn");

let enabled = false;
 

images.forEach((item) => {
    item.addEventListener("click", function () {
        enabled = !enabled;
        item.classList.toggle("fullscreen", enabled);
    });
});

 