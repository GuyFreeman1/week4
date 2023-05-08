let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;

function calculate(btn) {
    let screen = document.getElementById("screentext");
    if (operator === null) {
      if (btn !== "+" && btn !== "-" && btn !== "*" && btn !== "/") {
        operand1 = operand1 === null ? btn.toString() : operand1.toString() + btn.toString();
        screen.value = operand1;
      } else {
        operator = btn;
        screen.value += operator;
      }
    } else {
      if (btn !== "+" && btn !== "-" && btn !== "*" && btn !== "/") {
        operand2 = operand2 === null ? btn.toString() : operand2.toString() + btn.toString();
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