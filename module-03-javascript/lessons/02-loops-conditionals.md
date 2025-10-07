# Lesson 2: Loops and Conditionals

## Lesson Objectives

By the end of this lesson, you will:
- Use if/else statements to make decisions
- Write for and while loops to repeat code
- Understand when to use different types of loops
- Combine conditionals and loops for complex logic

---

## Conditionals: Making Decisions

Conditionals let your code make decisions based on conditions.

### if Statements

```javascript
let age = 14;

if (age >= 13) {
  console.log('You are a teenager');
}

let score = 95;

if (score >= 90) {
  console.log('A grade!');
}
```

### if/else Statements

```javascript
let temperature = 75;

if (temperature > 80) {
  console.log('It\'s hot outside');
} else {
  console.log('It\'s nice outside');
}
```

### if/else if/else Chains

```javascript
let score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}
```

### Comparison Operators

```javascript
5 === 5    // true (equal to)
5 !== 3    // true (not equal to)
5 > 3      // true (greater than)
5 < 10     // true (less than)
5 >= 5     // true (greater than or equal to)
3 <= 10    // true (less than or equal to)
```

### Logical Operators

```javascript
// AND - both must be true
let age = 15;
let hasPermission = true;

if (age >= 13 && hasPermission) {
  console.log('Access granted');
}

// OR - at least one must be true
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log('No school!');
}

// NOT - flips the value
let isRaining = false;

if (!isRaining) {
  console.log('Go outside!');
}

// Complex conditions
if ((age >= 13 && age <= 19) || hasPermission) {
  console.log('Teen or has permission');
}
```

---

## Loops: Repeating Code

Loops let you run the same code multiple times.

### for Loop

Best when you know how many times to loop:

```javascript
// Count from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Count from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Count by 2s
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10

// Count backwards
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
```

**Anatomy of a for loop:**
```javascript
for (initialization; condition; increment) {
  // code to run each iteration
}
```

### Looping Through Arrays

```javascript
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Classic for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop (modern, cleaner)
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach method (common for arrays)
fruits.forEach(function(fruit, index) {
  console.log(`${index}: ${fruit}`);
});
```

### while Loop

Best when you don't know how many iterations you need:

```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
// Output: 0, 1, 2, 3, 4

// User input example
let password = '';
while (password !== 'secret') {
  // password = prompt('Enter password:');
  // In real code, would ask user for input
  password = 'secret'; // Avoid infinite loop in this example
}
console.log('Access granted!');
```

**Warning:** Make sure the condition eventually becomes false, or you'll have an infinite loop!

### do...while Loop

Runs at least once, then checks condition:

```javascript
let number = 0;

do {
  console.log(number);
  number++;
} while (number < 3);
// Output: 0, 1, 2
```

### break and continue

```javascript
// break - exit loop early
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stop loop when i is 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// continue - skip to next iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip when i is 2
  }
  console.log(i);
}
// Output: 0, 1, 3, 4
```

---

## Combining Conditionals and Loops

```javascript
// Find even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  }
}

// Process array with conditions
let scores = [85, 92, 78, 95, 88];
let passed = 0;
let failed = 0;

for (let score of scores) {
  if (score >= 80) {
    passed++;
  } else {
    failed++;
  }
}

console.log(`Passed: ${passed}, Failed: ${failed}`);
```

### Nested Loops

```javascript
// Multiplication table
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// Grid pattern
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    console.log(`[${row}, ${col}]`);
  }
}
```

---

## Common Pitfalls

### Off-by-One Errors
```javascript
// ❌ This loops 11 times (0 through 10)
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// ✅ This loops 10 times (0 through 9)
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### Infinite Loops
```javascript
// ❌ Infinite loop - count never increases!
let count = 0;
while (count < 5) {
  console.log(count);
  // Forgot to increment count!
}

// ✅ Fixed
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

### Using = Instead of ===
```javascript
let age = 14;

// ❌ Assignment, not comparison
if (age = 18) { // This sets age to 18!
  console.log('Adult');
}

// ✅ Comparison
if (age === 18) {
  console.log('Adult');
}
```

---

## Practice Questions

<details>
<summary>Write a loop that prints numbers 1 through 10</summary>

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```
</details>

<details>
<summary>Write an if/else that checks if a number is positive, negative, or zero</summary>

```javascript
let num = -5;

if (num > 0) {
  console.log('Positive');
} else if (num < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}
```
</details>

<details>
<summary>Loop through an array and print only items that start with 'A'</summary>

```javascript
let names = ['Alex', 'Jordan', 'Amy', 'Taylor'];

for (let name of names) {
  if (name[0] === 'A') {
    console.log(name);
  }
}
// Output: Alex, Amy
```
</details>

---

## Complete Example

```javascript
// Number guessing game logic

let secretNumber = 7;
let guesses = [5, 10, 7, 3];
let found = false;

for (let i = 0; i < guesses.length; i++) {
  let guess = guesses[i];

  if (guess === secretNumber) {
    console.log(`Correct! Found in ${i + 1} guesses.`);
    found = true;
    break;
  } else if (guess < secretNumber) {
    console.log(`${guess} is too low`);
  } else {
    console.log(`${guess} is too high`);
  }
}

if (!found) {
  console.log('Not found in guesses!');
}
```

---

## Next Steps

In the next lesson, you'll learn how to use loops and conditionals to manipulate the DOM - creating, modifying, and removing HTML elements dynamically!
