let numx = "";
let numy = "";
let operator = "";
let sum;
let input = "x";

function add(x, y) {
  return (x + y)
}

function subtract(x, y) {
  return (x - y)
}

function divide(x, y) {
  if (x == 0 || y == 0) return "Error: Div by 0"
  return (x / y)
}

function multiply(x, y) {
  return (x * y)
}

function operate(x, y, operator) {
  switch(operator) {
    case "add":
      return add(x, y);
    case "subtract":
      return subtract(x, y);
    case "divide":
      return divide(x, y);
    case "multiply":
      return multiply(x, y);
  }
}

const calculator = document.querySelector("#calc")
const buttons = calculator.querySelectorAll("button")
const display = document.createElement("p")
let displayValue = ""
display.setAttribute("id", "result")
calculator.insertBefore(display, calculator.firstChild)

buttons.forEach(button => {
  let buttonId = button.getAttribute("id")
  button.addEventListener("click", () => {
    if (sum) {
      numx = sum
      sum = 0
      numy = ""
      operator = ""
      input = ""
      display.textContent = ""
      document.getElementById("result").style.fontSize = "30px"
    }
    if (operator == "") operator = document.getElementById("blank")
    if (parseInt(buttonId) > 0 || buttonId == "z") {
      console.log(parseInt(buttonId), buttonId)
      if (input == "x") {
        buttonId != "z" ? numx += buttonId : numx += "0"
      } else if (operator.textContent != ""){
        buttonId != "z" ? numy += buttonId : numy += "0"
      }
      sum = 0
      display.textContent = `${numx} ${operator.textContent} ${numy}`
    } else if (buttonId == "clear") {
      numx = ""
      numy = ""
      operator = ""
      input = "x"
      display.textContent = ""
      document.getElementById("result").style.fontSize = "30px"
    } else if (buttonId == "equals") {
      sum = operate(parseInt(numx), parseInt(numy), operator.getAttribute("id"))
      display.textContent = (sum).toString()
    }else if (input != "y"){
      operator = document.getElementById(buttonId)
      input = "y"
      display.textContent = `${numx} ${operator.textContent} ${numy}`
    }
    switch (display.textContent.length) {
      case 13:
        document.getElementById("result").style.fontSize = "20px"
        break;
      case 20:
        document.getElementById("result").style.cssText = "font-size: 15px; word-wrap: break-word;" 
        break;
    }
  })
});
