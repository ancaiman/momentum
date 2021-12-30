'use strict'
let log = console.log;
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
    const hours = new Date().getHours();
    if (hours < 6)  return 'Night';
    if (hours < 12) return 'Morning';
    if (hours < 18) return 'Afternoon';
    return 'Evening';
}

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
className.placeholder='[Enter Name]';
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
    }
    if (localStorage.getItem('city')) {
        inputCity.value = localStorage.getItem('city');
    }
};
window.addEventListener('load', getLocalStorage);
//-- set Name
//-- set BG
function getRandomNum(a, b) {
    return Math.floor(Math.random() * a) + b;
};

const timeOfDay = getTimeOfDay();
const body = document.querySelector('body');
let bgNum = getRandomNum(19, 1);
body.style.backgroundImage = `url('./assets/img/${timeOfDay.toLowerCase()}/${bgNum}.jpg`;
//-- set BG
//-- bg slider
function getSlideNext() {
    if (bgNum == 20) {
        bgNum = 0;
    }
    bgNum += 1;
    body.style.backgroundImage = `url('./assets/img/${timeOfDay.toLowerCase()}/${bgNum}.jpg`;
};

function getSlidePrev() {
    if (bgNum == 1) {
        bgNum = 21;
    }
    bgNum -= 1;
    body.style.backgroundImage = `url('./assets/img/${timeOfDay.toLowerCase()}/${bgNum}.jpg`;
};
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
//-- bg slider
//-- weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
inputCity.value == '' ? inputCity.value = 'Kaliningrad' : inputCity.value;
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=en&appid=68bf2022bf776ecd194328a3ad6537f6&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        inputCity.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
inputCity.addEventListener('keypress', setCity);
//-- weather
//-- quotes
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteRefresh = document.querySelector('.change-quote');
async function getQuotes() {
    const data = './assets/json/quotes.json';
    const res = await fetch(data);
    const quotes = await res.json();

    let index = getRandomNum(5, 1);
    quote.textContent = `"${quotes[index].text}"`;
    author.textContent = quotes[index].author;
}
getQuotes();
quoteRefresh.addEventListener('click', getQuotes);
//-- quotes