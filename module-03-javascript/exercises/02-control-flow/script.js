// Number Guessing Game Exercise
// Practice: Loops, Conditionals, Logic

// Get DOM elements
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const resetBtn = document.getElementById('reset-btn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

// Game state
let secretNumber;
let attempts;
let gameOver;

// TODO: Function to start a new game
function startNewGame() {
    // Generate random number between 1 and 100
    // Hint: Math.random() * 100 gives 0-99, then add 1 and use Math.floor()

    // Reset attempts to 0

    // Set gameOver to false

    // Clear feedback

    // Clear input

    // Update attempts display
}

// TODO: Function to check the guess
function checkGuess() {
    // If game is over, don't do anything
    if (gameOver) {
        return;
    }

    // Get the guess from input and convert to number
    const guess = parseInt(guessInput.value);

    // Validate the guess
    if (isNaN(guess)) {
        feedback.textContent = 'Please enter a valid number!';
        feedback.className = 'error';
        return;
    }

    if (guess < 1 || guess > 100) {
        feedback.textContent = 'Number must be between 1 and 100!';
        feedback.className = 'error';
        return;
    }

    // TODO: Increment attempts

    // TODO: Check if guess is correct
    if (guess === secretNumber) {
        // Player won!
        // Show success message with number of attempts
        // Set gameOver to true
        // Add 'success' class to feedback
    }
    // TODO: Check if guess is too low
    else if (guess < secretNumber) {
        // Show "Too low!" message
        // Add 'hint' class to feedback

        // BONUS: Give more specific hints based on how close they are
        // If within 5: "Very close!"
        // If within 10: "Close!"
        // Otherwise: "Too low!"
    }
    // TODO: Guess is too high
    else {
        // Show "Too high!" message
        // Add 'hint' class to feedback

        // BONUS: Give more specific hints
    }

    // TODO: Update attempts display

    // Clear input for next guess
    guessInput.value = '';
    guessInput.focus();
}

// Event listeners
guessBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

resetBtn.addEventListener('click', startNewGame);

// Start the game when page loads
startNewGame();
