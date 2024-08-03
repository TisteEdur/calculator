const result = document.querySelector(".output-container");
const buttons = document.querySelectorAll(".btn");
const specialCharacters = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (buttonValue) => {
    if (buttonValue === "=" && output !== "") {
       output = eval(output.replace("%", "/100"));
    } else if (buttonValue === "AC") {
        output = "";
    } else if (buttonValue === "CE") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialCharacters.includes(buttonValue)) return;

        output += buttonValue;
    }

    result.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        calculate(e.target.value);
    });
})
