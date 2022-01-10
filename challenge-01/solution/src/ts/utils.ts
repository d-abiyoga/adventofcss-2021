export function formatTime(currentTime: number): string {
  // minutes
  let minutes: string = Math.floor(currentTime / 60).toFixed(0);
  if (minutes.length === 1) minutes = `0${minutes}`

  // seconds
  let seconds: string = (currentTime % 60).toFixed(0);
  if (seconds.length === 1) seconds = `0${seconds}`

  let formattedTime = `${minutes}:${seconds}`;
  return formattedTime;
}
