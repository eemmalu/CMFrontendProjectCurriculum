# Lesson 1: Introduction to shadcn/ui

## What is shadcn/ui?

**shadcn/ui** is a collection of beautifully designed, accessible, and customizable React components built on top of Tailwind CSS. Unlike traditional component libraries that you install as npm packages, shadcn/ui works differently: **you copy the component code directly into your project**.

### Why shadcn/ui?

- ✅ **Full control:** The code is in your project, so you can modify it however you want
- ✅ **No bloat:** Only install the components you actually use
- ✅ **Built with Tailwind:** Works seamlessly with Tailwind CSS (which you already know!)
- ✅ **TypeScript first:** All components are fully typed
- ✅ **Accessible:** Built with accessibility best practices (ARIA attributes, keyboard navigation)
- ✅ **Professional design:** Looks polished out of the box

### shadcn/ui vs. Other Libraries

| Library | How it works | Customization |
|---------|-------------|---------------|
| Material-UI | npm install, import components | Limited - override styles |
| Ant Design | npm install, import components | Limited - theme config |
| **shadcn/ui** | **Copy code to your project** | **Full - edit the code directly** |

---

## Installing shadcn/ui

### Step 1: Initialize shadcn/ui

Run this command in your project root:

```bash
npx shadcn@latest init
```

This command will:
1. Ask you some configuration questions (use the defaults for this course)
2. Create a `components/ui/` folder in your `src/` directory
3. Set up the necessary utilities and styles
4. Configure your project to work with shadcn/ui

### Step 2: Add Components

To add a component (for example, Button):

```bash
npx shadcn@latest add button
```

This will:
- Download the Button component code into `src/components/ui/button.tsx`
- Install any required dependencies
- Make the component ready to use

You only need to add the components you want to use!

---

## Using shadcn/ui Components

Once you've added a component, you can import and use it like any other React component.

### Example: Button Component

```tsx
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
```

### Example: Card Component

```bash
# First, add the card component
npx shadcn@latest add card
```

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProductCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>A short description of the product</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Price: $29.99</p>
      </CardContent>
      <CardFooter>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
```

---

## Common shadcn/ui Components

Here are the most commonly used components:

### Button
```tsx
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Input
```bash
npx shadcn@latest add input
```

```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Enter your name" />
<Input type="email" placeholder="Enter your email" />
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>
```

### Badge
```bash
npx shadcn@latest add badge
```

```tsx
import { Badge } from "@/components/ui/badge";

<Badge>New</Badge>
<Badge variant="secondary">In Stock</Badge>
<Badge variant="destructive">Sold Out</Badge>
```

### Dialog (Modal)
```bash
npx shadcn@latest add dialog
```

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

---

## Understanding the `@/` Path Alias

You'll notice imports use `@/components/ui/button` instead of `../../components/ui/button`.

The `@/` is a **path alias** that points to your `src/` directory. It makes imports cleaner:

```tsx
// Without alias (messy!)
import { Button } from "../../components/ui/button";

// With alias (clean!)
import { Button } from "@/components/ui/button";
```

This is configured in your `tsconfig.json` (already set up for you).

---

## Customizing shadcn/ui Components

Because the component code is in your project, you can modify it however you want!

### Example: Customizing Button Colors

Open `src/components/ui/button.tsx` and find the `buttonVariants` object. You can:
- Change colors (Tailwind classes)
- Add new variants
- Modify sizes
- Change hover effects

```tsx
// In button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700", // Change colors!
        // ... other variants
      },
    },
  }
);
```

---

## Common Pitfalls

### ❌ Forgetting to Initialize
**Problem:** Trying to add components before running `npx shadcn@latest init`

**Solution:** Always run `init` first, then add components

### ❌ Wrong Import Path
**Problem:** `import { Button } from "shadcn/ui"` (doesn't work!)

**Solution:** Use `import { Button } from "@/components/ui/button"`

### ❌ Component Not Found
**Problem:** Importing a component you haven't added yet

**Solution:** Run `npx shadcn@latest add [component-name]` first

---

## Practice Questions

1. **What makes shadcn/ui different from other component libraries?**
   <details>
   <summary>Answer</summary>
   shadcn/ui copies component code into your project instead of being installed as an npm package. This gives you full control to modify the code.
   </details>

2. **How do you add the Input component to your project?**
   <details>
   <summary>Answer</summary>
   Run `npx shadcn@latest add input`
   </details>

3. **What does the `@/` symbol mean in import paths?**
   <details>
   <summary>Answer</summary>
   It's a path alias that points to the `src/` directory, making imports cleaner.
   </details>

---

## Hands-On Activity

Let's practice using shadcn/ui!

### Task: Create a User Profile Card

1. Initialize shadcn/ui (if not done already):
   ```bash
   npx shadcn@latest init
   ```

2. Add the necessary components:
   ```bash
   npx shadcn@latest add card
   npx shadcn@latest add button
   npx shadcn@latest add badge
   ```

3. Create a profile card component:
   ```tsx
   import {
     Card,
     CardHeader,
     CardTitle,
     CardDescription,
     CardContent,
     CardFooter,
   } from "@/components/ui/card";
   import { Button } from "@/components/ui/button";
   import { Badge } from "@/components/ui/badge";

   function UserProfile() {
     return (
       <Card className="w-[350px]">
         <CardHeader>
           <CardTitle>Alex Johnson</CardTitle>
           <CardDescription>Frontend Developer</CardDescription>
         </CardHeader>
         <CardContent>
           <div className="flex gap-2 mb-4">
             <Badge>React</Badge>
             <Badge variant="secondary">TypeScript</Badge>
             <Badge variant="secondary">Tailwind</Badge>
           </div>
           <p className="text-sm text-gray-600">
             Building awesome web applications with modern tools.
           </p>
         </CardContent>
         <CardFooter className="flex gap-2">
           <Button>Follow</Button>
           <Button variant="outline">Message</Button>
         </CardFooter>
       </Card>
     );
   }
   ```

4. Try different variants and see what happens!

---

## Additional Resources

- [shadcn/ui Official Documentation](https://ui.shadcn.com/)
- [Browse all available components](https://ui.shadcn.com/docs/components)
- [shadcn/ui GitHub Repository](https://github.com/shadcn-ui/ui)

---

## Key Takeaways

✅ shadcn/ui is a copy-paste component library, not an npm package
✅ Initialize with `npx shadcn@latest init`
✅ Add components with `npx shadcn@latest add [component-name]`
✅ Import from `@/components/ui/[component-name]`
✅ Fully customizable - edit the code directly
✅ Built on Tailwind CSS with TypeScript support

**Next Lesson:** Fetching data from APIs with the Fetch API
