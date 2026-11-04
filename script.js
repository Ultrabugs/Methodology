
const year = document.querySelector(".year");
const images = document.querySelectorAll(".blog--image-block");
document.querySelector(".year").textContent = new Date().getFullYear();
const secret = document.querySelector(".year");
const terminal = document.querySelector(".terminal");
 

let enabled = false;

year.style.color = "white";
year.style.paddingRight = "5px";
year.style.fontSize = "15px";


console.log(year);



images.forEach((item) => {
    item.addEventListener("click", function () {
        enabled = !enabled;
        item.classList.toggle("fullscreen", enabled);
    });
});



terminal.addEventListener("click", function() {
    alert("no");
});