import '../style/style.css';
import settingIcon from '/images/gear.svg?raw';
import { formatTime } from './utils';

export const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1 class="sr-only">Pomodoro Timer</h1>

  <div class="timer-wrapper rounded">
    <div class="timer-progress rounded" id="progress-bar">
      <div class="inner-wrapper rounded"> 
        <div class="time" id="time">15:00</div>
        <div class="buttons-wrapper">
          <button class="start-stop-btn" id="start-stop-btn">
            <span>Start</span>
          </button>
          <button class="setting-btn" id="setting-btn">
            <span class="sr-only">setting</span>
            ${settingIcon}
          </button>
        </div>
      </div>
    </div>
  </div>
`
export class PomodoroTimer {
  timeLeft: number;
  timerDuration: number;
  isPlaying: boolean;
  timeDiv: HTMLElement | null;
  startStopButton: HTMLElement | null;
  settingButton: HTMLElement | null;
  progressBar: HTMLElement | null;
  timer;

  constructor(timerDuration: number = 900) {
    this.timeLeft = 0;
    this.timerDuration = timerDuration;
    this.timer = null;
    this.isPlaying = false;

    this.timeDiv = document.getElementById("time");
    this.startStopButton = document.getElementById("start-stop-btn");
    this.settingButton = document.getElementById("setting-btn");
    this.progressBar = document.getElementById("progress-bar")

    if (this.startStopButton) {
      this.startStopButton.addEventListener("click", () => {
        this.onStartStopButtonClicked();
      })
    }

    if (this.settingButton) {
      this.settingButton.addEventListener("click", () => {
        this.onSettingButtonClicked();
      })
    }
  }

  onStartStopButtonClicked() {
    if (!this.isPlaying) {
      this.startTimer()
    } else {
      this.stopTimer()
    }
  }

  startTimer() {
    this.startStopButton.innerHTML = "Stop";
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.updateTime();
        this.updateProgressBar();
      } else {
        this.stopTimer();
      }
    }, 1000)
    this.isPlaying = true;
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timeLeft = this.timerDuration;
    this.isPlaying = false;
    this.startStopButton.innerHTML = "Start";
    this.timeDiv.innerHTML = formatTime(this.timeLeft);
    this.updateProgressBar();
  }

  updateTime() {
    // count direction is up
    this.timeLeft--;
    if (this.timeDiv) this.timeDiv.innerHTML = formatTime(this.timeLeft);
  }

  onSettingButtonClicked() {
    let minutesInput: string = window.prompt("Please input the custom duration (in minutes)", "15");
    let secondsInput: string = window.prompt("Please input the custom duration (in seconds)", "60");
    this.setTimerDuration(minutesInput, secondsInput);
  }

  setTimerDuration(minutes: string, seconds: string) {
    this.timerDuration = parseInt(minutes) * 60 + parseInt(seconds);
    this.timeLeft = this.timerDuration;
    if (this.timeDiv) this.timeDiv.innerHTML = formatTime(this.timeLeft);
  }

  updateProgressBar() {
    const secondToDegreeProgress = (time: number) => (time / this.timerDuration * 360).toFixed(2);
    this.progressBar?.style.setProperty("--angle", `${secondToDegreeProgress(this.timerDuration - this.timeLeft)}deg`);
  }
}

const PomodoroTimerInstance = new PomodoroTimer();
