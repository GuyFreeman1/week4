let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;

function calculate(btn) {
  let screen = document.getElementById("screentext");
  if (operator === null) {
    if (btn !== "+" && btn !== "-" && btn !== "*" && btn !== "/") {
      if (operand1 === null) {
        operand1 = btn === "0" ? "0" : btn.toString();
      } else if (operand1 === "0") {
        operand1 = btn === "0" ? "0" : btn.toString();
      } else {
        operand1 += btn.toString();
      }
      screen.value = operand1;
    } else {
      operator = btn;
      screen.value += operator;
    }
  } else {
    if (btn !== "+" && btn !== "-" && btn !== "*" && btn !== "/") {
      if (operand2 === null) {
        operand2 = btn === "0" ? "0" : btn.toString();
      } else if (operand2 === "0") {
        operand2 = btn === "0" ? "0" : btn.toString();
      } else {
        operand2 += btn.toString();
      }
      screen.value = operand1 + operator + operand2;
    } else {
      results();
      operator = btn;
      screen.value = operand1 + operator;
    }
  }
}


  function results() {
    let screen = document.getElementById("screentext");
    let result;
  
    // Convert operands to numbers
    let num1 = Number(operand1);
    let num2 = Number(operand2);
  
    // Check for divide by zero error
    if (operator === '/' && num2 === 0) {
      screen.value = "Error: Divide by zero";
      return;
    }
  
    // Calculate result based on operator
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
  
    // Limit result to 6 decimal places
    result = result.toFixed(6);
  
    // Display result
    screen.value = result;
  
    // Reset state
    operand1 = result.toString();
    operand2 = null;
    operator = null;
  }

function clr() {
  let screen = document.getElementById("screentext");
  screen.value = "";
  operand1 = null;
  operand2 = null;
  operator = null;
  result = null;
}

function addOperator(value) {
  operator = value;
  let screen = document.getElementById("screentext");
  screen.value += operator;
}