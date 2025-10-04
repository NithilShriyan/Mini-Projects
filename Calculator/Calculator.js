let op1 = "", op2 = "", opr = "";
function clearscreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    if (["+", "-", "*", "/"].includes(value)) {
        if (result.value === "" && value === "-") {
            result.value = value;
            return;
        }
        if (result.value === "")
            return;
        op1 = result.value;
        opr = value;
        clearscreen();
        return;
    }
    result.value += value;
}
function displaydot() {
    let result = document.getElementById("result");
    if (!result.value.includes(".")) {
        result.value += ".";
    }
}
function calculate() {
    let result = document.getElementById("result");
    if (!op1 || !opr)
        return;
    op2 = result.value;
    if (opr === "/" && op2 === "0") {
        result.value = "division by zero";
    }
    else {
        result.value = eval(op1 + opr + op2);
    }
}
