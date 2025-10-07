# Exercise 2: Props Practice

## Objective
Build a reusable `UserCard` component that displays user information passed through props.

**Estimated Time:** 20 minutes
**Difficulty:** ⭐⭐

## Learning Goals
- Pass props to components
- Type props with TypeScript interfaces
- Reuse components with different data
- Destructure props

## Instructions

### Step 1: Set Up Your Project
1. Create a new Vite React TypeScript project:
   ```bash
   npm create vite@latest props-practice-exercise -- --template react-ts
   cd props-practice-exercise
   npm install
   ```

### Step 2: Create the UserCard Component
2. Create a new file: `src/components/UserCard.tsx`
3. Define an interface for the props:
   ```tsx
   interface UserCardProps {
     name: string;
     age: number;
     bio: string;
     avatarUrl: string;
   }
   ```
4. Create a functional component that:
   - Accepts these props
   - Displays an image using `avatarUrl`
   - Displays the name in an `h2`
   - Displays the age
   - Displays the bio in a paragraph

### Step 3: Use the Component in App
5. Open `src/App.tsx`
6. Import your `UserCard` component
7. Use it **three times** with different user data
8. Make up the user information (name, age, bio)
9. For avatars, you can use placeholder services like:
   - `https://i.pravatar.cc/150?img=1`
   - `https://i.pravatar.cc/150?img=2`
   - etc. (change the number for different avatars)

### Step 4: Add Styling (Optional)
10. Style your cards to look nice (use CSS or inline styles)

## Example Code

### UserCard.tsx
```tsx
interface UserCardProps {
  name: string;
  age: number;
  bio: string;
  avatarUrl: string;
}

function UserCard({ name, age, bio, avatarUrl }: UserCardProps) {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserCard;
```

### App.tsx
```tsx
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <UserCard
        name="Alice"
        age={14}
        bio="I love coding and playing soccer!"
        avatarUrl="https://i.pravatar.cc/150?img=1"
      />
      <UserCard
        name="Bob"
        age={13}
        bio="Aspiring game developer and pizza enthusiast."
        avatarUrl="https://i.pravatar.cc/150?img=2"
      />
      <UserCard
        name="Charlie"
        age={15}
        bio="Musician, coder, and cat lover."
        avatarUrl="https://i.pravatar.cc/150?img=3"
      />
    </div>
  );
}

export default App;
```

## Expected Outcome
You should see three user cards displayed, each with:
- A unique avatar image
- Different name
- Different age
- Different bio text

## Bonus Challenges
- 🌟 Add an optional `role` prop (e.g., "Student", "Teacher")
- 🌟 Add a `hobbies` prop that's an array of strings, and display them as a list
- 🌟 Create a `Button` component with props for `label` and `onClick`
- 🌟 Add CSS to make the cards look professional (border, shadow, padding)
- 🌟 Make the avatar circular with CSS (`border-radius: 50%`)

## Common Issues

**Issue:** TypeScript error "Property X does not exist"
**Solution:** Make sure you've defined all props in your interface

**Issue:** Image doesn't show
**Solution:** Check that the `src` attribute is correct and the URL is valid

**Issue:** Can't import component
**Solution:** Make sure the file path is correct and you're using `export default`

## Practice Checkpoint ✅

Before moving on, make sure you can:
- [ ] Create a component that accepts props
- [ ] Define a TypeScript interface for props
- [ ] Destructure props in the component parameters
- [ ] Reuse the component with different data
- [ ] Pass different data types (strings, numbers) as props

## What You Learned
✅ How to pass data to components using props
✅ How to type props with TypeScript interfaces
✅ How to destructure props for cleaner code
✅ How to reuse components with different data
✅ The power of component composition

---

**Next Exercise:** [State Practice](../03-state-practice/README.md)
