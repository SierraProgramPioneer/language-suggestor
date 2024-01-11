// business logic
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}




// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("Your numbers added equals" + " " + add(number1, number2)
    + " " + "Your numbers subtracted equals" + " " + subtract(number1, number2)
    + " " + "Your numbers multiplied equals" + " " + multiply(number1, number2)
    + " " + "Your numbers divided equals" + " " + divide(number1, number2));
