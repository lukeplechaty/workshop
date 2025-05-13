console.log("hi");

// const mtInterval = setInterval(() => {
//   console.log("i live");
// }, 5000);
// const myTimeOut = setTimeout(() => {
//   clearInterval(mtInterval);
//   console.log("no you dont");
// }, 60000);
// clearInterval(mtInterval);
// clearTimeout(myTimeOut);

const timeOutButton = document.getElementById("time-out");
const timeOutText = document.getElementById("time-out-text");
timeOutButton.addEventListener("click", () => {
  timeOutText.style.visibility = "visible";
  setTimeout(() => {
    timeOutText.style.visibility = "hidden";
  }, 5000);
});

const intervalButton = document.getElementById("interval");
const intervalText = document.getElementById("interval-text");
var intervalTimer;
var timer;
intervalButton.addEventListener("click", () => {
  if (intervalTimer != null) {
    clearInterval(intervalTimer);
    intervalTimer = null;
  } else {
    intervalText.textContent = "0";
    timer = 0;
    intervalTimer = setInterval(() => {
      intervalText.textContent = ++timer;
    }, 1000);
  }
});
