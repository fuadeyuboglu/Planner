// Get the current date in -- Sunday, September 6th -- format using Day.js
let currentDay = dayjs().format('dddd, MMMM D');

// Concatenate ordinal suffixes accordingly to the current date
if (currentDay === '1') {
    currentDay += 'st';
} else if (currentDay === '2') {
    currentDay += 'nd';
} else if (currentDay === '3') {
    currentDay += 'rd';
} else {
    currentDay += 'th';
}

// Get the current day element by id and change its inner text
const currentDayElement = document.getElementById('currentDay');
currentDayElement.innerText = currentDay;