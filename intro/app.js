function showMessage() {
    document.getElementById("hello").innerHTML = "Im from app.js";
}
function addTwoDigits() {
    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;
    let result = parseFloat(var1) + parseFloat(var2);
    document.getElementById("answer").innerHTML = result;
}
function subTwoDigits() {
    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;
    let result = parseFloat(var1) - parseFloat(var2);
    document.getElementById("answer").innerHTML = result;
}
function multiTwoDigits() {
    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;
    let result = parseFloat(var1) * parseFloat(var2);
    document.getElementById("answer").innerHTML = result;
}
function divTwoDigits() {
    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;
    let result = parseFloat(var1) / parseFloat(var2);
    document.getElementById("answer").innerHTML = result;
}
