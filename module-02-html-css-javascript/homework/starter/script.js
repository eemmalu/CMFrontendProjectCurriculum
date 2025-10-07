// Module 2 Homework - Interactive Portfolio
// Add JavaScript to make your portfolio interactive!

// TODO: Select the interactive button
// Hint: const button = document.getElementById('interactive-button');


// TODO: Select the output message element
// Hint: const output = document.getElementById('output-message');


// TODO: Add an event listener to the button
// Hint: button.addEventListener('click', function() { ... });


// TODO: Inside the event listener, make something happen!
// Ideas:
// - Change the output message text
// - Change button color
// - Toggle between light and dark theme
// - Show/hide content
// - Count clicks
// - Anything creative!

// Example template:
/*
const button = document.getElementById('interactive-button');
const output = document.getElementById('output-message');

button.addEventListener('click', function() {
    output.textContent = 'Button was clicked!';
});
*/


// BONUS IDEAS:

// Idea 1: Theme Toggle
// Create a light/dark mode toggle button
/*
const themeButton = document.getElementById('theme-toggle');
let isDark = false;

themeButton.addEventListener('click', function() {
    isDark = !isDark;
    if (isDark) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
    }
});
*/

// Idea 2: Click Counter
/*
let clickCount = 0;
button.addEventListener('click', function() {
    clickCount++;
    output.textContent = `Clicked ${clickCount} times!`;
});
*/

// Idea 3: Show/Hide Content
/*
const toggleButton = document.getElementById('toggle-button');
const content = document.getElementById('hidden-content');

toggleButton.addEventListener('click', function() {
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.textContent = 'Hide';
    } else {
        content.style.display = 'none';
        toggleButton.textContent = 'Show';
    }
});
*/

// TODO: Write your own interactive feature here!
