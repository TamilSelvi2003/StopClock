let timerElement = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let interval;
let elapsedTime = 0;

function formatTime(sec) {
  const hours = String(Math.floor(sec / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeInSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
  timerElement.textContent = formatTime(elapsedTime);
}

startButton.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      elapsedTime++;
      updateTimer();
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  updateTimer();
});
