const images = document.querySelectorAll(".blog--image-block");
document.querySelector(".year").textContent = new Date().getFullYear();
const secret = document.querySelector(".year");
const container = document.querySelector(".container");
const sideBarButton = document.querySelector(".sidebar-btn");

let enabled = false;
let sideBarOpen = true; 

images.forEach((item) => {
    item.addEventListener("click", function () {
        enabled = !enabled;
        item.classList.toggle("fullscreen", enabled);
    });
});

sideBarButton.addEventListener("click", function(){
    sideBarOpen = !sideBarOpen;
    
    container.style.gridTemplateColumns = sideBarOpen ?
    "0px 6fr 1fr" : "260px 6fr 1fr";
});