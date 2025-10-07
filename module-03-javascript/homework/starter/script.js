// Module 3 Homework - To-Do List Application

// TODO: Create an array to store todos
let todos = [];

// TODO: Create a counter for unique IDs
let nextId = 1;

// TODO: Get DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clear-completed');

// Current filter state
let currentFilter = 'all';

// TODO: Function to add a new todo
function addTodo(text) {
    // Create todo object with id, text, completed properties
    // Add to todos array
    // Increment nextId
    // Render the list
}

// TODO: Function to toggle todo completion
function toggleTodo(id) {
    // Find todo by id
    // Toggle its completed property
    // Render the list
}

// TODO: Function to delete a todo
function deleteTodo(id) {
    // Filter out the todo with matching id
    // Render the list
}

// TODO: Function to render todos
function renderTodos() {
    // Clear the list
    todoList.innerHTML = '';

    // Filter todos based on currentFilter
    let filteredTodos = todos;
    if (currentFilter === 'active') {
        // Show only incomplete todos
    } else if (currentFilter === 'completed') {
        // Show only completed todos
    }

    // Create DOM elements for each todo
    filteredTodos.forEach(function(todo) {
        // Create li element
        // Add class 'todo-item'
        // If completed, add 'completed' class

        // Create checkbox
        // Create text span
        // Create delete button

        // Add event listeners
        // Append to list
    });

    // Update count
    updateCount();
}

// TODO: Function to update the count display
function updateCount() {
    // Count active (incomplete) todos
    // Update todoCount text
}

// TODO: Function to clear completed todos
function clearCompleted() {
    // Filter out completed todos
    // Render the list
}

// TODO: Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input value
    // Add todo if not empty
    // Clear input
});

// TODO: Event listeners for filter buttons
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        // Add 'active' to clicked button
        // Set currentFilter
        // Render todos
    });
});

// TODO: Event listener for clear completed button
clearCompletedBtn.addEventListener('click', clearCompleted);

// Initial render
renderTodos();
