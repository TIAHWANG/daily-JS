const word = document.querySelector(".js-word");
const button = document.querySelector(".js-btn");
const result = document.querySelector(".js-result");

function handleClick() {
  const wordTyped = word.value;
  const capitalLetter = wordTyped.match(/[A-Z]/g);
  const smallLetter = wordTyped.match(/[a-z]/g);

  if (capitalLetter === null) {
    result.innerText = wordTyped.toUpperCase();
  } else if (smallLetter === null) {
    result.innerText = wordTyped.toLowerCase();
  } else {
    const c = capitalLetter.length;
    const s = smallLetter.length;
    if (c >= s) {
      result.innerText = wordTyped.toUpperCase();
    } else {
      result.innerText = wordTyped.toLowerCase();
    }
  }
}

button.addEventListener("click", handleClick);
