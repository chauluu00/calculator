let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let displayValue = "0";
let result = null;

const display = document.querySelector("output");
function updateDisplay () {
    display.value = displayValue;
}

updateDisplay();

//Populate the display when clicking number buttons
const numKeys = document.querySelectorAll(".number-key");
numKeys.forEach((numKey) => {
    numKey.addEventListener("click", ()=> {
        getOperand(numKey.textContent);
        updateDisplay();
    });
});

function getOperand (operand){
    if (displayValue === "0" || displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = operand;
    } else {
        displayValue += operand;
    }    
}

//When an operator key is clicked, run getOperator
const opKeys = document.querySelectorAll(".operator");
opKeys.forEach((opKey) => {
    opKey.addEventListener("click", ()=> {
        getOperator(opKey.textContent);
        updateDisplay();
    });
});

//if the operator button clicked is = and firstOperator is null, do nothing 
//if the operator button clicked is = and firstOperator is not null, operate but don't assign = as firstOperator
function getOperator (operator){
    if (firstOperator === null){
        console.log(firstOperand = displayValue);
        console.log(firstOperator = operator);
    } else {
        console.log(secondOperand = displayValue);
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        displayValue = result;
        console.log(firstOperand = result);
        console.log(firstOperator = operator);
    }    
}

//Backspace button deletes the last character of string
const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", ()=>{
    displayValue = displayValue.toString().slice(0,-1);
    updateDisplay();
});

//Clear button
const clear = document.querySelector("#clear");
clear.addEventListener("click", ()=>{
    displayValue = "0";
    updateDisplay();
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
});

function operate (x, y, op){
    if (op === "+"){
        return x + y;
    } else if (op === "-") {
        return x - y;
    } else if (op === "×") {
        return x * y;
    } else if (op === "÷") {
        if (y === 0){
            return "NA";
        } else {
            return x / y;
        }
    };
}