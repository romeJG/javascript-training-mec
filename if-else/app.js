function getAnswer(operation) {
    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;
    let result;
    if (operation === "add") {
        result = parseFloat(var1) + parseFloat(var2);
    } else if (operation === "subtract") {
        result = parseFloat(var1) - parseFloat(var2);
    } else if (operation === "multiply") {
        result = parseFloat(var1) * parseFloat(var2);
    } else if (operation === "divide") {
        result = parseFloat(var1) / parseFloat(var2);
    } else {
        result = "unknown shape"
    }
    document.getElementById("answer").innerHTML = result;
}

