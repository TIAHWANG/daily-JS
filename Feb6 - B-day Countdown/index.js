const countdownTitle = document.querySelector("h1");
const countdownContainer = document.querySelector(".countdown");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const year = document.querySelector(".year");

function countdown() {
  const today = new Date();
  const isItNov23 = today.getMonth() === 10 && today.getDate() === 23;
  const yearOfBday = today.getFullYear();
  let birthday = new Date(`Nov 23 ${yearOfBday}`);

  year.innerText = yearOfBday;

  if (today > birthday) {
    birthday = new Date(`Nov 23 ${yearOfBday + 1}`);
  }

  const diff = birthday.getTime() - today.getTime();

  let s = Math.floor(diff / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  if (isItNov23) {
    countdownTitle.innerText = "Happy Birthday!";
    countdownContainer.style.display = "none";
  } else {
    days.innerText = `${d < 10 ? `0${d}` : d}`;
    hours.innerText = `${h < 10 ? `0${h}` : h}`;
    minutes.innerText = `${m < 10 ? `0${m}` : m}`;
    seconds.innerText = `${s < 10 ? `0${s}` : s}`;
  }
}

countdown();
setInterval(countdown, 1000);
