# Lesson 4: TypeScript in Practice

## Setting Up TypeScript

```bash
# Install TypeScript
npm install -D typescript

# Create tsconfig.json
npx tsc --init

# Compile TypeScript to JavaScript
npx tsc
```

## Common Patterns

### Typed Functions

```typescript
// Array methods with types
const numbers: number[] = [1, 2, 3, 4, 5];

const doubled: number[] = numbers.map((n: number): number => n * 2);
const evens: number[] = numbers.filter((n: number): boolean => n % 2 === 0);

// Generic types (advanced)
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]); // number | undefined
const firstName = getFirst(['a', 'b']); // string | undefined
```

### Interfaces for Data

```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface User {
  id: number;
  username: string;
  email: string;
  profile?: {
    bio: string;
    avatar: string;
  };
}

// Using interfaces
const todos: Todo[] = [
  { id: 1, text: 'Learn TypeScript', completed: false },
  { id: 2, text: 'Build project', completed: false }
];

function addTodo(todos: Todo[], text: string): Todo[] {
  const newTodo: Todo = {
    id: todos.length + 1,
    text,
    completed: false
  };
  return [...todos, newTodo];
}
```

### DOM with TypeScript

```typescript
// Type assertions for DOM elements
const button = document.getElementById('myButton') as HTMLButtonElement;
const input = document.querySelector('#username') as HTMLInputElement;

button.addEventListener('click', () => {
  console.log(input.value); // TypeScript knows input has value property
});

// Or with null checking
const form = document.getElementById('myForm');
if (form instanceof HTMLFormElement) {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    // Handle form
  });
}
```

### API Responses

```typescript
interface ApiResponse {
  data: User[];
  status: number;
  message: string;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('/api/users');
  const data: ApiResponse = await response.json();
  return data.data;
}
```

## Best Practices

1. **Use interfaces for object shapes**
2. **Let TypeScript infer when obvious**
3. **Add types to function parameters**
4. **Use union types for flexibility**
5. **Avoid `any` type when possible**

TypeScript might seem like extra work at first, but it saves time by catching bugs early and making code easier to understand!
