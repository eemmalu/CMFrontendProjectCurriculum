console.log("Hello world");

// Button Click Counter Exercise
// Your goal: Make the counter increase each time the button is clicked!

// TODO: Create a variable to store the click count (start at 0)
let count = 0;

// TODO: Select the button element using its ID
// Hint: Use document.getElementById('click-button')
let button = document.getElementById('click-button');

// TODO: Select the display element where the count will be shown
// Hint: Use document.getElementById('count-display')
let display = document.getElementById('count-display');

// TODO: Add an event listener to the button that listens for 'click' events
// Hint: button.addEventListener('click', function() { ... })
button.addEventListener('click', function(){
    count++;
    display.textContent = "Clicks: " + count;
    display.textContent = `Clicks: ${count}`;
});

