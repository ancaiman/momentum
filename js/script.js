'use strict'
//-- set time
const classTime = document.querySelector('.time');
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-US', { hour12: false });
    classTime.textContent = currentTime;
}
//-- set time
//-- set date
const classDate = document.querySelector('.date');
function showDate() {
    const date = new Date();
    const currentWeekday = date.toLocaleDateString('en-US', {weekday: 'long'});
    const currentMonth = date.toLocaleDateString('en-US', {month: 'long'});
    const currentDay = date.toLocaleDateString('en-US', {day: 'numeric'});
    classDate.textContent = `${currentWeekday}, ${currentMonth} ${currentDay}`;
}
//-- set date
//-- every second interval
setInterval(() => {
    showTime();
    showDate();
}, 1000);
//-- every second interval


// console.log(currentTime);
// console.log(time);