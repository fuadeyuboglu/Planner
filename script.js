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

// Create the hour starting at 9 o'clock
let hours = dayjs().hour(9);

// Get the current date
const date = dayjs();

// Loop to create time blocks
// Icon: https://fontawesome.com/v5/icons/save?f=classic&s=solid

for (let i = 0; i < 9; i++) {
    // Variable for setting class names of time blocks
    let centralDivision;

    if (date.isBefore(hours, 'hour')) {
        centralDivision = 'future';
    } else if (date.isAfter(hours, 'hour')) {
        centralDivision = 'past';
    } else {
        centralDivision = 'present'
    }

    const row = `
        <div class="row time-block">
            <div class="col-1 hour">
            ${hours.format('h A')}
            </div>
            <textarea class="col-10 ${centralDivision}">
            </textarea>
            <div class="col-1 saveBtn">
                <i class='fas fa-save'></i>
            </div>
        </div>
        `;
    
    rowString = rowString + row;

    // Increment the time block hour by 1
    hours = hours.add(1, 'hour');
}

// Implement the time block content into the container element
container.innerHTML = rowString;



// Save the text to local storage
// Get the button elements
const buttons = document.querySelectorAll('.saveBtn');

// Add event listener to all buttons 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Button is clicked')
    })
})