let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
  const now = Date.now(); //Gives time in milliseconds
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop interval
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // Display it
    displayTimeLeft(secondsLeft);
  }, 1000);
};

function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${mins}:${remainderSeconds < 10
    ? '0'
    : ''}${
  remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}
