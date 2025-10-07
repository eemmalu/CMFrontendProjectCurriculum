# Lesson 1: Arrays and Objects

## Lesson Objectives

By the end of this lesson, you will:
- Understand what arrays and objects are and when to use them
- Create and manipulate arrays
- Work with array methods (push, pop, map, filter)
- Create and use objects to store related data
- Access and modify object properties

---

## Arrays: Lists of Data

An **array** is a list of values. Think of it like a numbered list where you can store multiple items.

### Creating Arrays

```javascript
// Empty array
let emptyList = [];

// Array of numbers
let scores = [95, 87, 92, 88];

// Array of strings
let names = ['Alex', 'Jordan', 'Taylor'];

// Arrays can hold mixed types (but usually don't)
let mixed = [42, 'hello', true, null];
```

### Accessing Array Items

Arrays use **zero-based indexing** - the first item is at index 0:

```javascript
let fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // 'apple' (first item)
console.log(fruits[1]); // 'banana' (second item)
console.log(fruits[2]); // 'orange' (third item)

// Length property
console.log(fruits.length); // 3

// Last item (length - 1)
console.log(fruits[fruits.length - 1]); // 'orange'
```

### Modifying Arrays

```javascript
let colors = ['red', 'blue'];

// Change an item
colors[1] = 'green';
console.log(colors); // ['red', 'green']

// Add to the end
colors.push('yellow');
console.log(colors); // ['red', 'green', 'yellow']

// Remove from the end
let last = colors.pop();
console.log(last); // 'yellow'
console.log(colors); // ['red', 'green']

// Add to the beginning
colors.unshift('purple');
console.log(colors); // ['purple', 'red', 'green']

// Remove from the beginning
let first = colors.shift();
console.log(first); // 'purple'
console.log(colors); // ['red', 'green']
```

### Useful Array Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach - run code for each item
numbers.forEach(function(num) {
  console.log(num * 2);
});

// map - create new array by transforming each item
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - create new array with items that pass a test
let evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens); // [2, 4]

// find - get first item that passes a test
let found = numbers.find(function(num) {
  return num > 3;
});
console.log(found); // 4

// includes - check if array contains a value
console.log(numbers.includes(3)); // true
console.log(numbers.includes(10)); // false

// indexOf - find position of item
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(10)); // -1 (not found)
```

---

## Objects: Organized Data

An **object** is a collection of related data organized by keys (property names). Think of it like a dictionary or a record.

### Creating Objects

```javascript
// Object literal syntax
let person = {
  name: 'Alex',
  age: 14,
  grade: 9,
  isStudent: true
};

// Empty object
let emptyObj = {};
```

### Accessing Object Properties

```javascript
let user = {
  username: 'alex_codes',
  email: 'alex@example.com',
  points: 150
};

// Dot notation (most common)
console.log(user.username); // 'alex_codes'
console.log(user.email); // 'alex@example.com'

// Bracket notation (useful for dynamic keys)
console.log(user['points']); // 150

let key = 'email';
console.log(user[key]); // 'alex@example.com'
```

### Modifying Objects

```javascript
let car = {
  brand: 'Toyota',
  year: 2020
};

// Change a property
car.year = 2021;

// Add a new property
car.color = 'blue';
car.mileage = 15000;

console.log(car);
// {brand: 'Toyota', year: 2021, color: 'blue', mileage: 15000}

// Delete a property
delete car.mileage;
console.log(car);
// {brand: 'Toyota', year: 2021, color: 'blue'}
```

### Objects with Methods

Objects can contain functions (called methods):

```javascript
let calculator = {
  currentValue: 0,

  add: function(num) {
    this.currentValue += num;
  },

  subtract: function(num) {
    this.currentValue -= num;
  },

  getValue: function() {
    return this.currentValue;
  }
};

calculator.add(10);
calculator.add(5);
calculator.subtract(3);
console.log(calculator.getValue()); // 12
```

**Note:** `this` refers to the object itself.

---

## Arrays of Objects

Often you'll have arrays of objects - like a list of users or products:

```javascript
let students = [
  { name: 'Alex', grade: 9, gpa: 3.8 },
  { name: 'Jordan', grade: 10, gpa: 3.9 },
  { name: 'Taylor', grade: 9, gpa: 3.7 }
];

// Access specific student
console.log(students[0].name); // 'Alex'

// Loop through students
students.forEach(function(student) {
  console.log(`${student.name} has a GPA of ${student.gpa}`);
});

// Filter students by grade
let ninthGraders = students.filter(function(student) {
  return student.grade === 9;
});
console.log(ninthGraders);
```

---

## Common Pitfalls

### Array Index Errors
```javascript
let arr = [10, 20, 30];
console.log(arr[3]); // undefined (no item at index 3)
```

### Accessing Nonexistent Properties
```javascript
let obj = { name: 'Test' };
console.log(obj.age); // undefined (property doesn't exist)
```

### Forgetting Arrays Start at 0
```javascript
let items = ['first', 'second', 'third'];
// ❌ items[1] is NOT 'first'
// ✅ items[0] is 'first'
```

---

## Practice Questions

<details>
<summary>How do you add an item to the end of an array?</summary>

```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```
</details>

<details>
<summary>How do you access a property of an object?</summary>

```javascript
let obj = { name: 'Alex', age: 14 };
console.log(obj.name); // 'Alex'
// or
console.log(obj['name']); // 'Alex'
```
</details>

<details>
<summary>How do you find all numbers greater than 10 in an array?</summary>

```javascript
let numbers = [5, 15, 8, 20, 3, 12];
let greaterThan10 = numbers.filter(function(num) {
  return num > 10;
});
console.log(greaterThan10); // [15, 20, 12]
```
</details>

---

## Complete Example

```javascript
// To-Do List using arrays and objects

let todos = [
  { id: 1, task: 'Learn JavaScript', completed: false },
  { id: 2, task: 'Build a project', completed: false },
  { id: 3, task: 'Practice coding', completed: true }
];

// Add a new task
function addTask(task) {
  let newTodo = {
    id: todos.length + 1,
    task: task,
    completed: false
  };
  todos.push(newTodo);
}

// Mark task as complete
function completeTask(id) {
  let todo = todos.find(function(t) {
    return t.id === id;
  });
  if (todo) {
    todo.completed = true;
  }
}

// Get incomplete tasks
function getIncompleteTasks() {
  return todos.filter(function(todo) {
    return !todo.completed;
  });
}

// Test it out
addTask('Review Module 3');
completeTask(2);
console.log(getIncompleteTasks());
```

---

## Next Steps

In the next lesson, you'll learn about loops and conditionals - powerful tools for controlling the flow of your programs!
