'use strict'
//-- set time
const classTime = document.querySelector('.time');
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-US', { hour12: false });
    classTime.textContent = currentTime;
};
//-- set time
//-- set date
const classDate = document.querySelector('.date');
function showDate() {
    const date = new Date();
    const currentWeekday = date.toLocaleDateString('en-US', {weekday: 'long'});
    const currentMonth = date.toLocaleDateString('en-US', {month: 'long'});
    const currentDay = date.toLocaleDateString('en-US', {day: 'numeric'});
    classDate.textContent = `${currentWeekday}, ${currentMonth} ${currentDay}`;
};
//-- set date
//-- set greeting
const classGreeting = document.querySelector('.greeting');
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    switch(hours) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return 'Night';
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            return 'Morning';
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            return 'Day';
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            return 'Evening';
    };
};
function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay},`;
    classGreeting.textContent = greetingText;
};
//-- set greeting
//-- every second interval
setInterval(() => {
    showTime();
    showDate();
    showGreeting();
}, 1000);
//-- every second interval
//-- set placeholder
const className = document.querySelector('.name');
function enterName() {
    className.placeholder='[Enter Name]';
};
enterName();
//-- set placeholder
//-- set Name
const inputName = document.querySelector('div.greeting-container > input');
function setLocalStorage() {
    localStorage.setItem('name', inputName.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        inputName.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);
//-- set Name