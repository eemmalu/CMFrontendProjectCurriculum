// Dynamic Content Generator Exercise
// Practice: DOM Manipulation, Creating Elements, Array Iteration

// Sample product data
const products = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, description: 'High-quality sound' },
    { id: 2, name: 'Smart Watch', price: 199.99, description: 'Track your fitness' },
    { id: 3, name: 'Laptop Stand', price: 34.99, description: 'Ergonomic design' },
    { id: 4, name: 'USB-C Cable', price: 12.99, description: 'Fast charging' },
    { id: 5, name: 'Desk Lamp', price: 44.99, description: 'LED lighting' },
    { id: 6, name: 'Mouse Pad', price: 15.99, description: 'Large gaming surface' }
];

// Get DOM elements
const loadBtn = document.getElementById('load-products');
const clearBtn = document.getElementById('clear-products');
const addRandomBtn = document.getElementById('add-random');
const container = document.getElementById('card-container');

// TODO: Function to create a product card
function createProductCard(product) {
    // Create card div
    const card = document.createElement('div');
    card.className = 'card';

    // TODO: Create h3 for product name
    // Hint: const title = document.createElement('h3');
    // Set textContent to product.name
    // Append to card

    // TODO: Create p for description
    // Set textContent to product.description
    // Append to card

    // TODO: Create p for price
    // Add className 'price'
    // Set textContent to formatted price: `$${product.price}`
    // Append to card

    // Return the completed card
    return card;
}

// TODO: Function to load all products
function loadProducts() {
    // Clear container first
    container.innerHTML = '';

    // Loop through products array
    products.forEach(function(product) {
        // Create card for this product
        // Hint: const card = createProductCard(product);

        // Append card to container
        // Hint: container.appendChild(card);
    });
}

// TODO: Function to clear all products
function clearProducts() {
    // Clear the container
    // Hint: container.innerHTML = '';
}

// TODO: Function to add a random product
function addRandomProduct() {
    // Get a random product from the array
    // Hint: const randomIndex = Math.floor(Math.random() * products.length);
    // const randomProduct = products[randomIndex];

    // Create card for the random product

    // Append to container
}

// Event listeners
loadBtn.addEventListener('click', loadProducts);
clearBtn.addEventListener('click', clearProducts);
addRandomBtn.addEventListener('click', addRandomProduct);

// Load products on page load
loadProducts();
