# Lesson 3: TypeScript Introduction

## What is TypeScript?

TypeScript = JavaScript + Types

It catches errors before you run your code!

## Basic Types

```typescript
// Number
let age: number = 14;

// String
let name: string = 'Alex';

// Boolean
let isStudent: boolean = true;

// Array
let scores: number[] = [95, 87, 92];
let names: string[] = ['Alex', 'Jordan'];

// Alternative array syntax
let colors: Array<string> = ['red', 'blue'];
```

## Functions with Types

```typescript
// Parameter and return types
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  return `${greeting || 'Hello'}, ${name}!`;
}

// Void return (no return value)
function log(message: string): void {
  console.log(message);
}
```

## Object Types

```typescript
// Inline type
function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years old`);
}

// Interface (reusable type)
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

function createUser(user: User): void {
  console.log(user.name);
}

const newUser: User = {
  name: 'Alex',
  age: 14
};
```

## Type Inference

TypeScript often figures out types automatically:

```typescript
// Type is inferred as number
let count = 0;

// Type is inferred as string
let message = 'Hello';

// Still type-safe!
// count = 'text'; // Error!
```

## Union Types

Variables that can be multiple types:

```typescript
let id: number | string;
id = 123; // OK
id = 'abc123'; // OK

function format(value: number | string): string {
  return `Value: ${value}`;
}
```

## Type Aliases

Create custom type names:

```typescript
type ID = number | string;
type Status = 'pending' | 'active' | 'completed';

let userId: ID = 123;
let taskStatus: Status = 'pending';
```

## Why TypeScript?

✅ Catch errors early
✅ Better IDE support (autocomplete)
✅ Self-documenting code
✅ Easier refactoring
✅ Scales to large projects

TypeScript helps you write safer, more maintainable code!
