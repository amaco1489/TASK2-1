const timer = document.getElementById("timer");
const startB = document.getElementById("start");
const stopB = document.getElementById("stop");
const resetB = document.getElementById("reset");

let counts = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let stopWatch = function() {
  counts++;
  if (counts % 10 === 0) {
    seconds++;
    counts = 0;
    if (seconds % 60 === 0) {
      minutes++;
      seconds = 0;
      if (minutes % 60 === 0) {
        hours++;
        minutes = 0;
      }
    }
  }
  timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + counts
}

let interval;

function start() {
  interval = setInterval(stopWatch, 100);
  startB.disabled = true;
  stopB.disabled = false;
  resetB.disabled = false;
}

function stop() {
  clearInterval(interval);
  startB.disabled = false;
  stopB.disabled = true;
  resetB.disabled = false;
}

function reset() {
  clearInterval(interval);
  counts = 0;
  minutes = 0;
  seconds = 0;
  hours = 0;
  timer.innerHTML = "0:0:0:0";
  startB.disabled = false;
  stopB.disabled = true;
  resetB.disabled = true;
}