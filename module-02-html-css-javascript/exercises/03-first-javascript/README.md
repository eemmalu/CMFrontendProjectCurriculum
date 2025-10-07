# Exercise 3: Button Click Counter

**Difficulty:** ⭐ Easy
**Estimated Time:** 20-30 minutes
**Skills:** JavaScript variables, functions, DOM manipulation, event listeners

## Objective

Create an interactive button click counter using JavaScript. When you click a button, it should count how many times it's been clicked and display the count on the page.

## Instructions

1. Open `index.html` and `script.js` in this folder
2. The HTML structure is already provided
3. Write JavaScript to make the counter work

### Requirements

Your click counter should:
1. Start at 0 clicks
2. Increase by 1 each time the button is clicked
3. Display the current count on the page
4. Update the display every time the button is clicked

### Hints

- Use a variable to store the count (start at 0)
- Use `document.getElementById()` to select elements
- Use `.addEventListener('click', ...)` to respond to button clicks
- Use `.textContent` to update the displayed count
- Don't forget to increment the counter variable!

## Step-by-Step Guide

If you're stuck, follow these steps:

1. **Create a counter variable** at the top of your script
   ```javascript
   let clickCount = 0;
   ```

2. **Select the button element**
   ```javascript
   let button = document.getElementById('click-button');
   ```

3. **Select the output element** where the count will be displayed
   ```javascript
   let output = document.getElementById('count-display');
   ```

4. **Add a click event listener** to the button
   ```javascript
   button.addEventListener('click', function() {
       // Code to run when button is clicked
   });
   ```

5. **Inside the click handler:**
   - Increase the counter
   - Update the display

## Expected Outcome

When complete:
- The page shows "Clicks: 0" initially
- Each button click increases the number by 1
- The display updates immediately

## Bonus Challenges

- Add a "Reset" button that sets the counter back to 0
- Change the button color after 10 clicks
- Display a special message when you reach 50 clicks
- Add a second button that decreases the count

## Learning Goals

- Understand how to store data in variables
- Practice selecting DOM elements
- Learn event listeners
- Update page content with JavaScript
- Build interactivity from scratch
