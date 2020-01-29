const input = document.querySelector(".js--word");
const button = document.querySelector(".js--btn");
const result = document.querySelector(".js--result");

function handleSubmit() {
  const wordTyped = input.value;
  const firstLetter = wordTyped.charAt(0);
  const resultText = `${firstLetter}${wordTyped}${firstLetter}`;
  result.innerText = `Funny result is ➡️️➡️️ ${resultText} `;
}

button.addEventListener("click", handleSubmit);
