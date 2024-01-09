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
let timeBlocks = [
    {
        "hour": '9AM',
        "textarea": ''
    }, 

    {
        "hour": '10AM',
        "textarea": ''
    },

    {
        "hour": '11AM',
        "textarea": ''
    },

    {
        "hour": '12PM',
        "textarea": ''
    },

    {
        "hour": '1PM',
        "textarea": ''
    },

    {
        "hour": '2PM',
        "textarea": ''
    },

    {
        "hour": '3PM',
        "textarea": ''
    },

    {
        "hour": '4PM',
        "textarea": ''
    },

    {
        "hour": '5PM',
        "textarea": ''
    },
]

// Empty string for time block elements
let rowString = '';

// Get the container element
const container = document.querySelector('.container');

// Loop each time block and create a new row
// Icon: https://fontawesome.com/v5/icons/save?f=classic&s=solid
timeBlocks.forEach(timeBlock => {
    const row = `
        <div class="row time-block">
            <div class="col-1 hour">
            ${timeBlock.hour}
            </div>
            <textarea class="col-10">
            ${timeBlock.textarea}
            </textarea>
            <div class="col-1 saveBtn">
                <i class='fas fa-save'></i>
            </div>
        </div>
        `;
    
    rowString = rowString + row;
});

// Implement the time block content into the container element
container.innerHTML = rowString;