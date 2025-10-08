# Lesson 5: Lucide React Icons

## What is Lucide React?

**Lucide React** is a library of beautiful, consistent icons designed specifically for React. It includes over 1,000 icons covering everything from basic UI elements to specific use cases.

### Why Use Icons?

Icons make your UI:
- **More intuitive:** A trash can icon clearly means "delete"
- **More professional:** Icons add visual polish
- **More space-efficient:** Icons convey meaning in less space than text
- **More accessible:** When combined with proper labels

---

## Installing Lucide React

```bash
npm install lucide-react
```

That's it! The library is already included in this curriculum's dependencies.

---

## Basic Usage

Import the icons you need and use them like React components:

```tsx
import { Home, User, Settings, Mail } from 'lucide-react';

function App() {
  return (
    <div>
      <Home />
      <User />
      <Settings />
      <Mail />
    </div>
  );
}
```

Each icon is a React component!

---

## Icon Sizes

### Using the `size` Prop

```tsx
import { Heart } from 'lucide-react';

<Heart size={16} />  {/* Small */}
<Heart size={24} />  {/* Default */}
<Heart size={32} />  {/* Large */}
<Heart size={48} />  {/* Extra large */}
```

### Using Tailwind Classes

```tsx
import { Star } from 'lucide-react';

<Star className="w-4 h-4" />   {/* Small (16px) */}
<Star className="w-6 h-6" />   {/* Default (24px) */}
<Star className="w-8 h-8" />   {/* Large (32px) */}
<Star className="w-12 h-12" /> {/* Extra large (48px) */}
```

---

## Icon Colors

### Using the `color` Prop

```tsx
import { CheckCircle } from 'lucide-react';

<CheckCircle color="green" />
<CheckCircle color="#10b981" /> {/* Hex color */}
<CheckCircle color="rgb(16, 185, 129)" /> {/* RGB */}
```

### Using Tailwind Classes (Recommended)

```tsx
import { AlertTriangle } from 'lucide-react';

<AlertTriangle className="text-red-500" />
<AlertTriangle className="text-yellow-500" />
<AlertTriangle className="text-blue-600" />
```

---

## Icons in Buttons

Icons make buttons more recognizable:

```tsx
import { Button } from '@/components/ui/button';
import { Plus, Trash2, Edit, Download } from 'lucide-react';

function ActionButtons() {
  return (
    <div className="flex gap-2">
      <Button>
        <Plus className="w-4 h-4 mr-2" />
        Add Item
      </Button>

      <Button variant="destructive">
        <Trash2 className="w-4 h-4 mr-2" />
        Delete
      </Button>

      <Button variant="outline">
        <Edit className="w-4 h-4 mr-2" />
        Edit
      </Button>

      <Button variant="secondary">
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
    </div>
  );
}
```

### Icon-Only Buttons

```tsx
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

<Button size="icon" variant="ghost">
  <X className="w-4 h-4" />
</Button>
```

**Accessibility tip:** Add an `aria-label` for screen readers:

```tsx
<Button size="icon" variant="ghost" aria-label="Close">
  <X className="w-4 h-4" />
</Button>
```

---

## Common UI Icons

Here are the most commonly used icons:

### Navigation & Actions
```tsx
import {
  Home,
  Menu,
  Search,
  Settings,
  User,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
```

### CRUD Operations
```tsx
import {
  Plus,        // Create
  Edit,        // Update
  Trash2,      // Delete
  Eye,         // View
  Copy,        // Duplicate
  Download,    // Download
  Upload,      // Upload
} from 'lucide-react';
```

### Status & Feedback
```tsx
import {
  CheckCircle,      // Success
  XCircle,          // Error
  AlertTriangle,    // Warning
  Info,             // Info
  Loader2,          // Loading (with spin animation)
} from 'lucide-react';
```

### Social & Communication
```tsx
import {
  Mail,
  Phone,
  MessageCircle,
  Bell,
  Share2,
  Heart,
  ThumbsUp,
} from 'lucide-react';
```

---

## Animated Loading Spinner

Lucide includes a loading icon that works great with Tailwind's `animate-spin`:

```tsx
import { Loader2 } from 'lucide-react';

function LoadingButton() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </Button>
  );
}
```

```tsx
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
    </div>
  );
}
```

---

## Icons in Forms

Enhance form inputs with icons:

```tsx
import { Search, Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';

function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10"
      />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          type="email"
          placeholder="Email"
          className="pl-10"
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          type="password"
          placeholder="Password"
          className="pl-10"
        />
      </div>
    </div>
  );
}
```

---

## Icons in Cards

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, ShoppingCart, DollarSign } from 'lucide-react';

function StatsCard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Total Users</CardTitle>
          <Users className="h-4 w-4 text-gray-600" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1,234</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Orders</CardTitle>
          <ShoppingCart className="h-4 w-4 text-gray-600" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">567</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-gray-600" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$12,345</p>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## Finding Icons

### Method 1: Browse the Website
Visit [lucide.dev](https://lucide.dev/icons/) and search for icons.

### Method 2: Search in Your IDE
Start typing the icon name and your editor will autocomplete:

```tsx
import { /* Start typing here */ } from 'lucide-react';
```

### Common Patterns
- **Two-word icons use PascalCase:** `ChevronRight`, `AlertTriangle`, `MessageCircle`
- **Numbers at the end:** `Trash2`, `Archive`

---

## Accessibility Best Practices

### Icons with Text
When combining icons with text, the text provides context:

```tsx
<Button>
  <Trash2 className="w-4 h-4 mr-2" />
  Delete {/* Text makes it clear */}
</Button>
```

### Icon-Only Elements
Add `aria-label` for screen readers:

```tsx
<Button size="icon" aria-label="Delete item">
  <Trash2 className="w-4 h-4" />
</Button>
```

### Decorative Icons
If the icon is purely decorative, hide it from screen readers:

```tsx
<div>
  <Star className="w-4 h-4" aria-hidden="true" />
  <span>Featured Product</span>
</div>
```

---

## Common Pitfalls

### ❌ Forgetting to Import
**Problem:**
```tsx
<Heart /> // Error: Heart is not defined
```

**Solution:**
```tsx
import { Heart } from 'lucide-react';
<Heart />
```

### ❌ Wrong Icon Name
**Problem:**
```tsx
import { Trash } from 'lucide-react'; // Doesn't exist!
```

**Solution:**
```tsx
import { Trash2 } from 'lucide-react'; // Correct name
```

### ❌ No Accessibility Label on Icon-Only Buttons
**Problem:**
```tsx
<Button size="icon">
  <X />
</Button>
```

**Solution:**
```tsx
<Button size="icon" aria-label="Close">
  <X />
</Button>
```

---

## Practice Questions

1. **How do you change the size of an icon?**
   <details>
   <summary>Answer</summary>
   Use the `size` prop (`<Heart size={24} />`) or Tailwind classes (`<Heart className="w-6 h-6" />`).
   </details>

2. **How do you make an icon spin for a loading indicator?**
   <details>
   <summary>Answer</summary>
   Use `<Loader2 className="animate-spin" />`
   </details>

3. **Why should icon-only buttons have an `aria-label`?**
   <details>
   <summary>Answer</summary>
   To provide context for screen readers, since there's no visible text.
   </details>

---

## Hands-On Activity

### Task: Create a Toolbar

Create a toolbar with these icon buttons:
- Save (Save icon)
- Undo (Undo icon)
- Redo (Redo icon)
- Delete (Trash2 icon)

```tsx
import { Button } from '@/components/ui/button';
import { Save, Undo, Redo, Trash2 } from 'lucide-react';

function Toolbar() {
  return (
    <div className="flex gap-2 p-4 border-b">
      <Button size="icon" variant="outline" aria-label="Save">
        <Save className="w-4 h-4" />
      </Button>

      <Button size="icon" variant="outline" aria-label="Undo">
        <Undo className="w-4 h-4" />
      </Button>

      <Button size="icon" variant="outline" aria-label="Redo">
        <Redo className="w-4 h-4" />
      </Button>

      <Button size="icon" variant="destructive" aria-label="Delete">
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
```

---

## Useful Icon Categories

### File & Folder Operations
`File`, `Folder`, `FolderOpen`, `FileText`, `Image`, `Video`

### E-commerce
`ShoppingCart`, `CreditCard`, `Tag`, `Package`, `TrendingUp`

### Media Controls
`Play`, `Pause`, `SkipForward`, `SkipBack`, `Volume2`, `VolumeX`

### Layout & UI
`Layout`, `Grid`, `List`, `Columns`, `Sidebar`, `Maximize`, `Minimize`

### Weather
`Sun`, `Moon`, `Cloud`, `CloudRain`, `CloudSnow`

---

## Key Takeaways

✅ Lucide React provides 1,000+ icons as React components
✅ Import icons: `import { IconName } from 'lucide-react'`
✅ Size with `size` prop or Tailwind classes
✅ Color with `color` prop or Tailwind classes
✅ Use `<Loader2 className="animate-spin" />` for loading
✅ Add `aria-label` to icon-only buttons
✅ Icons improve UX when used intentionally

**Next Step:** Complete the module exercises and homework!

---

## Additional Resources

- [Lucide Icons Search](https://lucide.dev/icons/)
- [Lucide React Documentation](https://lucide.dev/guide/packages/lucide-react)
