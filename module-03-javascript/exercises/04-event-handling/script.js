// Interactive Form Exercise
// Practice: Event Listeners, Form Handling, Validation

// Get form and input elements
const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const bioInput = document.getElementById('bio');
const charCount = document.getElementById('char-count');
const successMessage = document.getElementById('success-message');

// Get error message elements
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const ageError = document.getElementById('age-error');

// TODO: Function to show error message
function showError(input, errorElement, message) {
    // Add 'error' class to input
    // Add 'show' class to errorElement
    // Set errorElement.textContent to message
}

// TODO: Function to clear error message
function clearError(input, errorElement) {
    // Remove 'error' class from input
    // Remove 'show' class from errorElement
    // Clear errorElement.textContent
}

// TODO: Function to validate username
function validateUsername() {
    const value = usernameInput.value.trim();

    // Check if empty
    if (value === '') {
        showError(usernameInput, usernameError, 'Username is required');
        return false;
    }

    // Check if too short (less than 3 characters)
    if (value.length < 3) {
        showError(usernameInput, usernameError, 'Username must be at least 3 characters');
        return false;
    }

    // Valid!
    clearError(usernameInput, usernameError);
    return true;
}

// TODO: Function to validate email
function validateEmail() {
    const value = emailInput.value.trim();

    // Check if empty
    if (value === '') {
        showError(emailInput, emailError, 'Email is required');
        return false;
    }

    // Check if valid email (contains @ and .)
    // Simple check: must have @ and a . after the @
    if (!value.includes('@') || !value.includes('.')) {
        showError(emailInput, emailError, 'Please enter a valid email');
        return false;
    }

    // Valid!
    clearError(emailInput, emailError);
    return true;
}

// TODO: Function to validate password
function validatePassword() {
    const value = passwordInput.value;

    // Check if empty
    if (value === '') {
        showError(passwordInput, passwordError, 'Password is required');
        return false;
    }

    // Check if too short (less than 8 characters)
    if (value.length < 8) {
        showError(passwordInput, passwordError, 'Password must be at least 8 characters');
        return false;
    }

    // Valid!
    clearError(passwordInput, passwordError);
    return true;
}

// TODO: Function to validate age
function validateAge() {
    const value = parseInt(ageInput.value);

    // Check if empty or not a number
    if (isNaN(value) || ageInput.value === '') {
        showError(ageInput, ageError, 'Age is required');
        return false;
    }

    // Check if under 13
    if (value < 13) {
        showError(ageInput, ageError, 'You must be at least 13 years old');
        return false;
    }

    // Check if over 120
    if (value > 120) {
        showError(ageInput, ageError, 'Please enter a valid age');
        return false;
    }

    // Valid!
    clearError(ageInput, ageError);
    return true;
}

// TODO: Update character count for bio
bioInput.addEventListener('input', function(event) {
    const currentLength = event.target.value.length;
    const maxLength = 200;

    // Update character count display
    charCount.textContent = `${currentLength} / ${maxLength} characters`;

    // Change color if getting close to limit
    if (currentLength > 180) {
        charCount.style.color = '#f44336';
    } else {
        charCount.style.color = '#666';
    }
});

// TODO: Add blur event listeners for real-time validation
usernameInput.addEventListener('blur', validateUsername);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);
ageInput.addEventListener('blur', validateAge);

// TODO: Handle form submission
form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Validate all fields
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isAgeValid = validateAge();

    // Check if all fields are valid
    if (isUsernameValid && isEmailValid && isPasswordValid && isAgeValid) {
        // All valid! Show success message
        successMessage.classList.add('show');

        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.classList.remove('show');
        }, 3000);

        // Reset form
        form.reset();
        charCount.textContent = '0 / 200 characters';

        // Log the data (in a real app, you'd send to server)
        console.log('Form submitted successfully!');
        console.log({
            username: usernameInput.value,
            email: emailInput.value,
            age: ageInput.value,
            bio: bioInput.value
        });
    } else {
        // Some fields invalid - scroll to first error
        console.log('Form has errors');
    }
});
