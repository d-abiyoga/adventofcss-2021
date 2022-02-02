import { PomodoroTimer } from '../ts/main';

test('Render main page correctly', () => {
  expect(true).toBeTruthy();
});


test('start stop button works properly', () => {
  const timer = new PomodoroTimer();
  it('start with zero', () => {
    expect(timer.currentTime).toEqual(0);
  })
  // it('start the timer when clicked in stop condition', () => {
  // })
  //
  // it('change to stop when the timer is ticking')
  //
  // it('stop the timer when clicked during playing condition')

})


// test('ring color should be changed depends on the timer condition', () => {
//
// })
//
// test('gear icon should be functional', () => {
//   it('timer setting pop out when gear icon clicked')
//   it('timer setting is changed based on user input')
//
// })
/* 
  - Users should be able to:
    - Start the timer by clicking on the start link/button 
    - Once the user clicks start, the word start will change to stop. Then, the user can click on stop button to make the timer stop.
    - Click on the gear icon to change the length (minutes and seconds) of the timer.
    - Once the timer finishes, the ring should change from green to red and an alert message is passed to the browser.
*/
