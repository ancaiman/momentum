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
    const currentDate = date.toLocaleDateString('en-US', {weekday: 'long'});
    classDate.textContent = `${date.toLocaleDateString('en-US', {weekday: 'long'})}, ${date.toLocaleDateString('en-US', {month: 'long'})} ${date.toLocaleDateString('en-US', {day: 'numeric'})}`;
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