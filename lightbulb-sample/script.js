const toggleBtn = document.getElementById("toggleBtn");
const bulb = document.getElementById("bulb");
let isBulbOn = false;

toggleBtn.addEventListener("change", function () {
    isBulbOn = this.checked;

    if (isBulbOn) {
        bulb.src = "https://www.w3schools.com/Js/pic_bulbon.gif";
    } else {
        bulb.src = "https://www.w3schools.com/Js/pic_bulboff.gif";
    }
});