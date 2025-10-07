// Typed Functions Exercise
// Create utility functions with proper TypeScript types

// ============================================
// Exercise 1: Array Utilities
// ============================================

// TODO: Create a function that filters an array by a predicate
// The predicate should be a function that takes an item and returns boolean
// Use generics so it works with any type
function filter<T>(/* add parameters with types */): T[] {
    // Implementation
    return [];
}

// TODO: Create a function that finds the first item matching a condition
function find<T>(/* add parameters */): T | undefined {
    // Implementation
    return undefined;
}

// TODO: Create a function that sums an array of numbers
function sum(numbers: number[]): number {
    // Use reduce
    return 0;
}

// ============================================
// Exercise 2: Object Utilities
// ============================================

// TODO: Create an interface for a Person
interface Person {
    name: string;
    age: number;
    email: string;
}

// TODO: Create a function that formats a person's info
function formatPerson(person: Person): string {
    // Return formatted string
    return '';
}

// TODO: Create a function that updates a person's properties
// Use Partial<Person> to allow updating only some properties
function updatePerson(person: Person, updates: Partial<Person>): Person {
    // Merge updates into person
    return person;
}

// ============================================
// Exercise 3: String Utilities
// ============================================

// TODO: Create a function that capitalizes the first letter
function capitalize(str: string): string {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// TODO: Create a function that reverses a string
function reverseString(str: string): string {
    // Implementation
    return '';
}

// TODO: Create a function that checks if a string is a palindrome
function isPalindrome(str: string): boolean {
    // Remove spaces and convert to lowercase
    // Check if string equals its reverse
    return false;
}

// ============================================
// Exercise 4: Advanced Types
// ============================================

// TODO: Create a union type for API responses
type ApiResponse<T> = {
    success: true;
    data: T;
} | {
    success: false;
    error: string;
};

// TODO: Create a function that simulates an API call
async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    // This is just a simulation
    // In real code, you'd use fetch()
    return {
        success: true,
        data: {} as T
    };
}

// TODO: Create a type for a callback function
type Callback<T> = (item: T) => void;

// TODO: Create a function that executes a callback for each item
function forEach<T>(arr: T[], callback: Callback<T>): void {
    // Implementation
}

// ============================================
// Exercise 5: Generics Practice
// ============================================

// TODO: Create a generic Stack class
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        // Add item to stack
    }

    pop(): T | undefined {
        // Remove and return last item
        return undefined;
    }

    peek(): T | undefined {
        // Return last item without removing
        return undefined;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

// Test the Stack
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // Should be 2

const stringStack = new Stack<string>();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.pop()); // Should be 'world'

export {
    filter,
    find,
    sum,
    formatPerson,
    updatePerson,
    capitalize,
    reverseString,
    isPalindrome,
    Stack
};

/*
SOLUTIONS:

function filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    return arr.filter(predicate);
}

function find<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    return arr.find(predicate);
}

function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

function formatPerson(person: Person): string {
    return `${person.name} (${person.age}) - ${person.email}`;
}

function updatePerson(person: Person, updates: Partial<Person>): Person {
    return { ...person, ...updates };
}

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

function isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/\s/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

function forEach<T>(arr: T[], callback: Callback<T>): void {
    for (const item of arr) {
        callback(item);
    }
}

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}
*/
