// let output = document.getElementById("output")
// userInput.addEventListener("keyup", printValueToOutput)


// function printValueToOutput() {
//     output.innerHTML = userInput.value
// }


let userInput = document.getElementById("userInput");
let toggleIcon = document.getElementById("toggleIcon");
let btn = document.getElementById("btn");

function showPass() {
    if (userInput.type === "password") {
        btn.classList.remove("red")
        btn.classList.add("blue")
        toggleIcon.classList.remove("fa-eye-slash")
        toggleIcon.classList.add("fa-eye")
        userInput.type = "text"
    } else {
        btn.classList.remove("blue")
        btn.classList.add("red")
        toggleIcon.classList.remove("fa-eye")
        toggleIcon.classList.add("fa-eye-slash")
        userInput.type = "password"
    }
}
