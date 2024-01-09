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

// Created schedule object
let timeBlocks = []

// Empty string for time block elements
let rowString = '';

// Get the container element
const container = document.querySelector('.container');

// Loop each time block and create a new row
// Icon: https://fontawesome.com/v5/icons/save?f=classic&s=solid
let hours = dayjs().hour(9);

for (let i = 0; i < 9; i++) {
    const row = `
        <div class="row time-block">
            <div class="col-1 hour">
            ${hours.format('h A')}
            </div>
            <textarea class="col-10">
            </textarea>
            <div class="col-1 saveBtn">
                <i class='fas fa-save'></i>
            </div>
        </div>
        `;
    
    rowString = rowString + row;

    hours = hours.add(1, 'hour');
}

// Implement the time block content into the container element
container.innerHTML = rowString;



const time = dayjs();


console.log(dayjs(time).isAfter(hours, 'hour'));
