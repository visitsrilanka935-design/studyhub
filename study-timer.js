// ==============================
// STUDY TIMER – StudyHub
// ==============================

// Elements
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

let timerInterval = null;
let totalSeconds = 0;
let isRunning = false;

// Load previous session time from localStorage (optional)
if (localStorage.getItem('studyTime')) {
  totalSeconds = parseInt(localStorage.getItem('studyTime'), 10);
  updateTimerDisplay();
}

// Update the timer display (HH:MM:SS)
function updateTimerDisplay() {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Start timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      totalSeconds++;
      updateTimerDisplay();
      localStorage.setItem('studyTime', totalSeconds); // save progress
    }, 1000);
  }
}

// Pause timer
function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
}

// Reset timer
function resetTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  totalSeconds = 0;
  updateTimerDisplay();
  localStorage.removeItem('studyTime');
}

// Button listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateTimerDisplay();
