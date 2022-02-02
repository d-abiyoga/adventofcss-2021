import '../style/style.css';
import settingIcon from '/images/gear.svg?raw';
import { formatTime } from './utils';

export const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1 class="sr-only">Pomodoro Timer</h1>

  <div class="timer-wrapper rounded">
    <div class="timer-progress rounded" id="progress-bar">
      <div class="inner-wrapper rounded"> 
        <p class="time" id="time">
          <span class="minutes">15</span>:<span class="seconds">00</span>
        </p>
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
  settingTimerTemplate: string;

  constructor(timerDuration: number = 900) {
    this.timeLeft = timerDuration;
    this.timerDuration = timerDuration;
    this.timer = null;
    this.isPlaying = false;

    this.timeDiv = document.getElementById("time");
    this.startStopButton = document.getElementById("start-stop-btn");
    this.settingButton = document.getElementById("setting-btn");
    this.progressBar = document.getElementById("progress-bar")

    this.settingTimerTemplate = `
      <input type="number" id="minutes" name="minutes" maxlength="2" placeholder="00">
      <span class="divider">:</span>
      <input type="number" id="seconds" name="seconds" maxlength="2" placeholder="00">
    `

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

    let timeLeftView = formatTime(this.timeLeft);
    this.timeDiv.innerHTML = `${timeLeftView.minute}:${timeLeftView.second}`
    this.updateProgressBar();
  }

  updateTime() {
    this.timeLeft--;
    if (this.timeDiv) {
      let timeLeftView = formatTime(this.timeLeft);
      this.timeDiv.innerHTML = `${timeLeftView.minute}:${timeLeftView.second}`
    }
  }

  onSettingButtonClicked() {
    // let minutesInput: string = window.prompt("Please input the custom duration (in minutes)", "15");
    // let secondsInput: string = window.prompt("Please input the custom duration (in seconds)", "60");
    // this.setTimerDuration(minutesInput, secondsInput);
    this.timeDiv.innerHTML = this.settingTimerTemplate;
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
