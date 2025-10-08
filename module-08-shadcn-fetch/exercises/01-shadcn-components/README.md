# Exercise 1: shadcn Components

## Objective
Learn how to install and use shadcn/ui components by creating a contact form with validation feedback.

## Difficulty
⭐ (Easy)

## Estimated Time
30-40 minutes

## Learning Goals
- Initialize shadcn/ui in a React project
- Install specific shadcn/ui components
- Use shadcn Button, Input, Card, and Badge components
- Understand component props and variants

---

## Instructions

### Step 1: Initialize shadcn/ui

Run this command in your project root (if not already done):

```bash
npx shadcn@latest init
```

Accept the default options when prompted.

### Step 2: Install Required Components

Install the components you'll need:

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add badge
```

These commands will create component files in `src/components/ui/`.

### Step 3: Build the Contact Form

Create a contact form component that uses shadcn components. The form should include:

1. **Card component** to wrap the form
2. **Input components** for name, email, and message fields
3. **Button component** for submit
4. **Badge components** to show required fields

### Step 4: Add Form State

Use `useState` to track:
- Name, email, and message values
- Submitted status (to show success message)

### Step 5: Handle Form Submission

When the form is submitted:
- Prevent default form behavior
- Log the form data to console
- Show a success badge

---

## Starter Code

Navigate to `module-08-shadcn-fetch/exercises/01-shadcn-components/starter/` and complete the `ContactForm` component.

### File: `src/App.tsx`

```tsx
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <ContactForm />
    </div>
  );
}

export default App;
```

### File: `src/components/ContactForm.tsx`

Complete the TODOs in this file.

---

## Expected Outcome

When complete, you should have:
- ✅ A card with "Contact Us" as the title
- ✅ Three input fields (Name, Email, Message)
- ✅ Required badges next to field labels
- ✅ A submit button
- ✅ Success feedback when form is submitted
- ✅ Console log showing submitted data

---

## Testing Your Work

1. Run the dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173 in your browser

3. Verify:
   - Form displays with all components
   - Inputs accept text
   - Submit button works
   - Console shows submitted data
   - Success message appears after submission

---

## Bonus Challenges

If you finish early:

1. **Add validation:** Don't allow submission if any field is empty
2. **Add error states:** Show red border on empty fields when user tries to submit
3. **Add a textarea:** Replace the message input with a textarea component
4. **Add a reset button:** Clear all fields when clicked

---

## What You're Learning

This exercise teaches you:
- How to initialize and install shadcn/ui components
- How to import and use shadcn components
- How to use component props (variants, sizes)
- How to combine shadcn components with your own logic
- How shadcn components integrate with Tailwind CSS

---

## Common Issues

**Issue:** "Module not found" error when importing components

**Solution:** Make sure you ran `npx shadcn@latest init` and installed the components

---

**Issue:** Styling doesn't look right

**Solution:** Make sure your `index.css` includes the Tailwind directives

---

## Next Steps

After completing this exercise:
1. ✅ Experiment with different button variants
2. ✅ Try other shadcn components (Label, Textarea)
3. ✅ Move on to Exercise 2: Fetch Practice
