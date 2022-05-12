let numberButtons = document.querySelectorAll(".buttons");
let operationButtons = document.querySelectorAll("#operand");
let equalsButton = document.getElementById("result");
let deleteButton = document.getElementById("delete");
let allClearButton = document.getElementById("clear");
let previousOperandTextElement = document.getElementById("previousOperand");
let currentOperandTextElement = document.getElementById("currentOperand");
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerNumber = parseFloat(stringNumber.split(".")[0]);
    const decimalNumber = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerNumber)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerNumber.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalNumber != null) {
      return `${integerDisplay}.${decimalNumber}`;
    } else {
      return integerDisplay;
    }
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }
  updateDisplay() {
    this.currentOperandTextElement.textContent = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.textContent = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.textContent = "";
    }
  }
}
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
function clicked(button) {
  button.style["border-style"] = "inset";
}
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.textContent);
    calculator.updateDisplay();
    console.log(button);
    button.style["border-style"] = "inset";
    setTimeout(function () {
      button.style["border-style"] = "outset";
    }, 150);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
    button.style["border-style"] = "inset";
    setTimeout(function () {
      button.style["border-style"] = "outset";
    }, 150);
  });
});
equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
  equalsButton.style["border-style"] = "inset";
  setTimeout(function () {
    equalsButton.style["border-style"] = "outset";
  }, 150);
});
allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
  allClearButton.style["border-style"] = "inset";
  setTimeout(function () {
    allClearButton.style["border-style"] = "outset";
  }, 150);
});
deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
  deleteButton.style["border-style"] = "inset";
  setTimeout(function () {
    deleteButton.style["border-style"] = "outset";
  }, 150);
});
