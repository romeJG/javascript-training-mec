function getAnswer(operation) {
    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;
    let result;
    if (operation === "square") {
        result = parseFloat(var1) ** 2
    } else if (operation === "rectangle") {
        result = parseFloat(var1) * parseFloat(var2);
    } else if (operation === "triangle") {
        result = 0.5 * parseFloat(var1) * parseFloat(var2);
    } else {
        result = "unknown shape"
    }
    document.getElementById("answer").innerHTML = result;
}

