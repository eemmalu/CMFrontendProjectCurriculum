# Lesson 1: ES6 Features

## Arrow Functions

Shorter syntax for functions:

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With block body
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

// Single parameter (no parentheses needed)
const double = n => n * 2;
```

## Destructuring

Extract values from arrays and objects:

```javascript
// Array destructuring
const [first, second] = [1, 2, 3];
console.log(first); // 1

// Object destructuring
const person = { name: 'Alex', age: 14 };
const { name, age } = person;
console.log(name); // 'Alex'

// With different variable names
const { name: userName, age: userAge } = person;
```

## Spread Operator

```javascript
// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // {a: 1, b: 2, c: 3}

// Copy arrays/objects
const copy = [...arr1];
```

## Template Literals

```javascript
const name = 'Alex';
const age = 14;

// Template literal
const message = `My name is ${name} and I'm ${age} years old.`;

// Multi-line strings
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;
```

## Default Parameters

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // 'Hello, Guest!'
greet('Alex'); // 'Hello, Alex!'
```

## Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

These features make JavaScript code cleaner and more expressive!
