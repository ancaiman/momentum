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
            return 'Afternoon';
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
const inputName = document.querySelector('.name');
const inputCity = document.querySelector('.city');
function setLocalStorage() {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('city', inputCity.value);
};
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        inputName.value = localStorage.getItem('name');
        inputCity.value = localStorage.getItem('city');
    }
};
window.addEventListener('load', getLocalStorage);
//-- set Name
//-- set BG
function getRandomNum() {
    return Math.floor(Math.random() * 19) + 1;
};

const timeOfDay = getTimeOfDay();
const body = document.querySelector('body');
function setBg() {
    let bgNum = getRandomNum();
    if (bgNum < 10) {
        bgNum = '0' + bgNum;
    }
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay.toLowerCase()}/${bgNum}.jpg`;
};
setBg();
//-- set BG
//-- bg slider
let randomNum = getRandomNum();
function getSlideNext() {
    if (randomNum < 10) {
        randomNum = '0' + randomNum;
    }
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay.toLowerCase()}/${randomNum}.jpg`;
    if (randomNum == 20) {
        randomNum = 0;
    }
    randomNum ++;
};

function getSlidePrev() {
    if (randomNum < 10) {
        randomNum = '0' + randomNum;
    }
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay.toLowerCase()}/${randomNum}.jpg`;
    if (randomNum == 1) {
        randomNum = 21;
    }
    randomNum --;
};
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
//-- bg slider
//-- weather
// const weatherIcon = document.querySelector('.weather-icon');
// const temperature = document.querySelector('.temperature');
// const weatherDescription = document.querySelector('.weather-description');
// async function getWeather() {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.textContent}lang=en&appid=68bf2022bf776ecd194328a3ad6537f6&units=metric`;
//     const res = await fetch(url);
//     const data = await res.json();

//     weatherIcon.className = 'weather-icon owf';
//     weatherIcon.classList.add(`owf-${data.weather[0].id}`);
//     temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
//     weatherDescription.textContent = data.weather[0].description;
// }

// function setCity(event) {
//     if (event.code === 'Enter') {
//         getWeather();
//         inputCity.blur();
//     }
// }

// document.addEventListener('DOMContentLoaded', getWeather);
// inputCity.addEventListener('keypress', setCity);
//-- weather
//-- quotes
async function getQuotes() {  
    const data = '../assets/json/quotes.json';
    const res = await fetch(data);
    const quotes = await res.json(); 
    console.log(quotes);
}
getQuotes();
//-- quotes