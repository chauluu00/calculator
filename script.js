let display = document.querySelector("output");
let storedValue = "";

function add (a,b){
    return a + b;
}

function subtract (a,b){
    return a - b;
}

function multiply (a,b){
    return a * b;
}

function divide (a,b){
    return a / b;
}

//Populate the display when clicking number buttons
const keypad = document.querySelector(".keypad");
const numKeys = keypad.querySelectorAll(".number-key");
numKeys.forEach((numKey) => {
    numKey.addEventListener("click", ()=> {
        display.value = `${numKey.textContent}`;
        storedValue += display.value;
        display.value = storedValue;
    });
});

//Backspace button deletes the last character of string
let backspace = document.querySelector("#backspace");
backspace.addEventListener("click", ()=>{
    storedValue = storedValue.slice(0,-1);
    display.value = storedValue;
})

//Clear button
let clear = document.querySelector("#clear");
clear.addEventListener("click", ()=>{
    display.value = ""; //clear display
    storedValue = ""; //clear stored value
})