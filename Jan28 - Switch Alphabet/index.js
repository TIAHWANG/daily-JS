const word = document.querySelector(".word");
const button = document.querySelector(".switched");
const result = document.querySelector(".js--result");

function handleSubmit() {
  const wordTyped = word.value;
  const capital = wordTyped.match(/[A-Z]/g).length;
  const small = wordTyped.match(/[a-z]/g).length;
  if (capital > small) {
    result.innerText = wordTyped.toUpperCase();
  } else {
    result.innerText = wordTyped.toLowerCase();
  }
}

button.addEventListener("submit", handleSubmit);
