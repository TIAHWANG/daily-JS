const firstNum = document.querySelector(".n1");
const secondNum = document.querySelector(".n2");
const sum = document.querySelector(".sum");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const result = document.querySelector(".js--result");

function handleSum() {
  const num1 = parseFloat(firstNum.value);
  const num2 = parseFloat(secondNum.value);
  result.innerText = `The result is ${num1 + num2}`;
}
function handleSubtract() {
  const num1 = firstNum.value;
  const num2 = secondNum.value;
  result.innerText = `The result is ${num1 - num2}`;
}
function handleMultiply() {
  const num1 = firstNum.value;
  const num2 = secondNum.value;
  result.innerText = `The result is ${num1 * num2}`;
}
function handleDivide() {
  const num1 = firstNum.value;
  const num2 = secondNum.value;
  result.innerText = `The result is ${num1 / num2}`;
}

sum.addEventListener("submit", handleSum);
subtract.addEventListener("submit", handleSubtract);
multiply.addEventListener("submit", handleMultiply);
divide.addEventListener("submit", handleDivide);
