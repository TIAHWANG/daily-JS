const dayContainer = document.querySelector(".js--day");
const dayTitle = dayContainer.querySelector("h1");
const timeContainer = document.querySelector(".js--time");
const timeTitle = timeContainer.querySelector("h1");

function getDay() {
  const today = new Date();
  const day = today.getDay();
  const daylist = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  dayTitle.innerText = `Today is ${daylist[day]} :)`;
}

function getTime() {
  const today = new Date();
  const amPm = today.getHours() > 12 ? "PM" : "AM";
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  timeTitle.innerText = `${amPm} ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

getDay();
getTime();
setInterval(getTime, 1000);
