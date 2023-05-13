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

function addDecimal() {
  let screen = document.getElementById("screentext");
  if (operator === null) {
    if (operand1 === null) {
      operand1 = "0.";
    } else if (operand1.indexOf(".") === -1) {
      operand1 += ".";
    }
    screen.value = operand1;
  } else {
    if (operand2 === null) {
      operand2 = "0.";
    } else if (operand2.indexOf(".") === -1) {
      operand2 += ".";
    }
    screen.value = operand1 + operator + operand2;
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

  // If result is not decimal, show as a full number
  if (Number.isInteger(result)) {
    result = result.toFixed(0);
  } else {
    result = result.toFixed(6);
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

document.addEventListener('keydown', function(event) {
  const key = event.key;
  switch(key) {
    case '0':
      calculate(0);
      break;
    case '1':
      calculate(1);
      break;
    case '2':
      calculate(2);
      break;
    case '3':
      calculate(3);
      break;
    case '4':
      calculate(4);
      break;
    case '5':
      calculate(5);
      break;
    case '6':
      calculate(6);
      break;
    case '7':
      calculate(7);
      break;
    case '8':
      calculate(8);
      break;
    case '9':
      calculate(9);
      break;
    case '.':
      addDecimal('.');
      break;
    case '+':
      addOperator('+');
      break;
    case '-':
      addOperator('-');
      break;
    case '*':
      addOperator('*');
      break;
    case '/':
      addOperator('/');
      break;
    case '=':
      results();
      break;
    case 'Enter':
      results();
      break;
    case 'Backspace':
      clr();
      break;
  }
});