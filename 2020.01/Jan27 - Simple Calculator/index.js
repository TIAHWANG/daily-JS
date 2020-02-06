const firstNum = document.querySelector(".n1");
const secondNum = document.querySelector(".n2");
const sum = document.querySelector(".sum");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const result = document.querySelector(".js--result");

const cal = {
  sum: function() {
    const num1 = parseInt(firstNum.value);
    const num2 = parseInt(secondNum.value);
    result.innerText = `The result is ${num1 + num2}`;
  },
  subtract: function() {
    const num1 = firstNum.value;
    const num2 = secondNum.value;
    result.innerText = `The result is ${num1 - num2}`;
  },
  multiply: function() {
    const num1 = firstNum.value;
    const num2 = secondNum.value;
    result.innerText = `The result is ${num1 * num2}`;
  },
  divide: function() {
    const num1 = firstNum.value;
    const num2 = secondNum.value;
    result.innerText = `The result is ${num1 * num2}`;
  }
};

sum.addEventListener("click", cal.sum);
subtract.addEventListener("click", cal.subtract);
multiply.addEventListener("click", cal.multiply);
divide.addEventListener("click", cal.divide);
