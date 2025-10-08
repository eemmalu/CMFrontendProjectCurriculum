# Module 8 Homework: Product Search Application

## Assignment Overview

Build a complete product search and filter application that demonstrates all the skills you learned in Module 8: data fetching, shadcn/ui components, loading states, routing, and icons.

## Difficulty
⭐⭐⭐ (Challenging)

## Time Estimate
3-4 hours

---

## Requirements

### Core Features (Required)

1. **Product Listing Page (`/`)**
   - Fetch products from local JSON file
   - Display products in a responsive grid (1 col mobile, 2 col tablet, 3-4 col desktop)
   - Each product shows: image, name, price, category, in-stock status
   - Use shadcn Card components for product display
   - Show loading state while fetching
   - Show error state if fetch fails
   - Show empty state if no products match filters

2. **Search Functionality**
   - Search input that filters products by name
   - Updates results in real-time as user types
   - Case-insensitive search
   - Use shadcn Input component with search icon

3. **Category Filter**
   - Dropdown or button group to filter by category
   - Options: All, Electronics, Clothing, Books, Home
   - Show count of products in each category
   - Use shadcn Button or Select component

4. **Product Detail Page (`/products/:productId`)**
   - Click on a product to view full details
   - Display: large image, name, full description, price, category, stock status
   - "Back to Products" button
   - Handle invalid product IDs (show error or redirect)
   - Use shadcn Card and Button components

5. **Navigation**
   - Navbar with logo and "Products" link
   - Active link styling
   - Visible on all pages

6. **Icons (Lucide React)**
   - Search icon in search input
   - Category icons (optional)
   - Back arrow on detail page
   - In-stock / Out-of-stock indicators
   - Loading spinner (Loader2)

### TypeScript Requirements

- Properly type all props, state, and function parameters
- Define Product interface/type
- No `any` types allowed
- Proper event typing for forms and clicks

---

## Technical Requirements

### Data Source

Fetch products from the local mock data file:
`/module-08-shadcn-fetch/mock-data/products.json`

**Product Type:**
```typescript
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl: string;
};
```

### Routing Setup

- `/` - Product listing with search and filters
- `/products/:productId` - Product detail page
- `*` - 404 Not Found page

### State Management

Use React hooks (useState, useEffect) for:
- Products array
- Loading state
- Error state
- Search query
- Selected category filter

### Styling

- Use Tailwind CSS for all styling
- Use shadcn/ui components (Card, Button, Input, Badge, etc.)
- Responsive design (mobile-first approach)
- Proper spacing and layout

---

## Starter Code Structure

```
homework/starter/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── SearchBar.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProductDetail.tsx
│   │   └── NotFound.tsx
│   ├── lib/
│   │   └── products.ts (helper functions)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── ...
```

---

## Step-by-Step Instructions

### Step 1: Set Up Routing
1. Install react-router-dom (if not already installed)
2. Wrap App in BrowserRouter in main.tsx
3. Define routes in App.tsx

### Step 2: Create Mock Data Fetcher
1. In `lib/products.ts`, create a function to fetch products
2. Simulate network delay with setTimeout
3. Return parsed JSON data

### Step 3: Build Product Listing Page
1. Fetch products on component mount
2. Store in state
3. Handle loading/error states
4. Display products in grid

### Step 4: Implement Search
1. Add search input
2. Create state for search query
3. Filter products based on search query
4. Update display

### Step 5: Implement Category Filter
1. Add category buttons/dropdown
2. Create state for selected category
3. Filter products based on category
4. Combine with search filter

### Step 6: Build Product Detail Page
1. Get productId from URL
2. Fetch/find product by ID
3. Display full product details
4. Add back button

### Step 7: Add Icons and Polish
1. Add Lucide icons throughout
2. Improve loading states
3. Test responsiveness
4. Handle edge cases

---

## Testing Your Work

Run the test suite to verify your implementation:

```bash
npm run test:module-08
```

**Note:** Due to Jest configuration issues, tests may not run currently. However, your code should be structured correctly and ready for when tests are enabled.

### Manual Testing Checklist

- [ ] Products load and display correctly
- [ ] Search filters products by name
- [ ] Category filter works
- [ ] Search + category filter work together
- [ ] Clicking a product navigates to detail page
- [ ] Detail page shows correct product
- [ ] Back button returns to listing
- [ ] Loading state shows while fetching
- [ ] Error state shows if fetch fails
- [ ] Empty state shows when no products match
- [ ] Layout is responsive (test mobile, tablet, desktop)
- [ ] All icons render correctly
- [ ] No TypeScript errors
- [ ] No console errors

---

## Bonus Challenges

If you finish early and want extra practice:

1. **Sort functionality:** Add buttons to sort by price (low to high, high to low) or name (A-Z)

2. **Price range filter:** Add min/max price inputs to filter products by price range

3. **Favorites system:** Use localStorage to save favorite products, show a "Favorites" page

4. **Shopping cart:** Add "Add to Cart" button, show cart count in navbar, create cart page

5. **Product comparison:** Allow users to select products and compare them side-by-side

6. **Pagination:** Show 12 products per page with "Next/Previous" buttons

7. **Dark mode:** Add a theme toggle using shadcn/ui's dark mode support

---

## What You're Being Assessed On

- ✅ Proper use of React hooks (useState, useEffect)
- ✅ Correct TypeScript typing throughout
- ✅ Proper routing setup and navigation
- ✅ All three async states handled (loading, error, success)
- ✅ shadcn/ui components used correctly
- ✅ Lucide icons used appropriately
- ✅ Search and filter functionality works
- ✅ Responsive design with Tailwind CSS
- ✅ Clean, readable code structure
- ✅ Proper error handling
- ✅ Component composition and reusability

---

## Common Issues and Solutions

**Issue:** Can't fetch local JSON file

**Solution:** Use dynamic import or create a function that returns the data:
```typescript
export async function fetchProducts() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const response = await fetch('/module-08-shadcn-fetch/mock-data/products.json');
  return response.json();
}
```

---

**Issue:** Filters don't work together

**Solution:** Apply filters in sequence:
```typescript
const filtered = products
  .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
  .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
```

---

**Issue:** Product detail page shows wrong product

**Solution:** Make sure to:
- Parse productId as a number: `Number(productId)`
- Match against product.id (not index)

---

## Submission

When complete:
1. ✅ Ensure all TODOs are completed
2. ✅ Test all functionality manually
3. ✅ Run `npm run build` to check for errors
4. ✅ Commit your changes with a descriptive message
5. ✅ Push to your forked repository

---

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/icons/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Congratulations!

This is the final homework assignment of the curriculum. After completing this, you'll have demonstrated proficiency in:
- Modern React development
- TypeScript
- Component libraries (shadcn/ui)
- Data fetching and state management
- Routing and navigation
- Responsive design with Tailwind CSS

**You're ready to contribute to real production codebases!**

Next step: Explore the `final-project/` directory for guidance on transitioning to real-world work.
