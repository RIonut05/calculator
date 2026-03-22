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
  if (num2 === 0) return 'ERROR'
  return num1 / num2
}

let firstOperand = ''
let secondOperand = ''
let operator = undefined

function operate(op, firstNum, secondNum) {
  switch (op) {
    case '+': return add(parseInt(firstNum), parseInt(secondNum))
    case '-': return subtract(parseInt(firstNum), parseInt(secondNum))
    case 'x': return multiply(parseInt(firstNum), parseInt(secondNum))
    case '÷': return divide(parseInt(firstNum), parseInt(secondNum))
  }
}

const elements = {
  firstNumDisplay: document.querySelector('.first'),
  secondNumDisplay: document.querySelector('.second'),
  operatorDisplay: document.querySelector('.operator')
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('operator') && operator === undefined) {
    operator = e.target.textContent
    elements.operatorDisplay.textContent = operator
  }

  if (e.target.classList.contains('num') && operator === undefined) {
    firstOperand += e.target.textContent
    elements.firstNumDisplay.textContent = firstOperand
  }

  if (e.target.classList.contains('num') && operator !== undefined) {
    secondOperand += e.target.textContent
    elements.secondNumDisplay.textContent = secondOperand
  }

  if (e.target.classList.contains('equals') && secondOperand !== '') {
    elements.secondNumDisplay.textContent = ''
    elements.operatorDisplay.textContent = ''

    elements.firstNumDisplay.textContent = operate(operator, firstOperand, secondOperand)
    operator = undefined
    firstOperand = ''
    secondOperand = ''
  }

  if (e.target.classList.contains('operator') && secondOperand !== '') {

    elements.secondNumDisplay.textContent = ''
    
    elements.firstNumDisplay.textContent = operate(operator, firstOperand, secondOperand)

    firstOperand = elements.firstNumDisplay.textContent
    secondOperand = ''
    operator = e.target.textContent
    elements.operatorDisplay.textContent = operator
  }

  if (e.target.classList.contains('clear')) {
    firstOperand = ''
    secondOperand = ''
    operator = undefined

    elements.firstNumDisplay.textContent = ''
    elements.secondNumDisplay.textContent = ''
    elements.operatorDisplay.textContent = ''
  }
})
