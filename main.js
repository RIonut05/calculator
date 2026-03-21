function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

let firstOperand = null
let secondOperand = null
let operator = null

function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case '+': add(firstNum, secondNum)
    case '-': subtract(firstNum, secondNum)
    case '*': multiply(firstNum, secondNum)
    case '/': divide(firstNum, secondNum)
  }
}