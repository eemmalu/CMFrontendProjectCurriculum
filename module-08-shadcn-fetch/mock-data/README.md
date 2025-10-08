# Mock Data Files

This directory contains JSON files with mock data for practice and testing during Module 8 exercises and homework.

## Files

### products.json

Contains 20 sample products across 4 categories:
- Electronics (7 products)
- Clothing (5 products)
- Books (5 products)
- Home (3 products)

**Product Structure:**
```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description...",
  "price": 99.99,
  "category": "Electronics",
  "inStock": true,
  "imageUrl": "https://..."
}
```

**Fields:**
- `id` (number): Unique product identifier
- `name` (string): Product name
- `description` (string): Detailed product description
- `price` (number): Price in USD
- `category` (string): Product category (Electronics, Clothing, Books, Home)
- `inStock` (boolean): Availability status
- `imageUrl` (string): URL to product image (uses Unsplash)

---

### users.json

Contains 10 sample users with different roles.

**User Structure:**
```json
{
  "id": 1,
  "name": "Alex Johnson",
  "email": "alex.johnson@example.com",
  "role": "Administrator",
  "avatar": "https://i.pravatar.cc/150?img=1"
}
```

**Fields:**
- `id` (number): Unique user identifier
- `name` (string): User's full name
- `email` (string): User's email address
- `role` (string): User role (Administrator, Developer, Designer, Product Manager, etc.)
- `avatar` (string): URL to user avatar image (uses Pravatar)

---

## Usage

### In Homework Assignment

The homework uses `products.json` as the data source for the Product Search Application.

**Fetching products:**
```typescript
const response = await fetch('/module-08-shadcn-fetch/mock-data/products.json');
const products = await response.json();
```

### In Exercises

Exercises may reference these files for practice with data fetching.

**Fetching users:**
```typescript
const response = await fetch('/module-08-shadcn-fetch/mock-data/users.json');
const users = await response.json();
```

---

## Image Sources

- **Product images:** [Unsplash](https://unsplash.com/) - Free high-quality stock photos
- **User avatars:** [Pravatar](https://pravatar.cc/) - Placeholder avatar images

---

## Notes

- All data is fictional and for educational purposes only
- Email addresses use the `example.com` domain (reserved for examples)
- Images are sourced from free public APIs and may change
- Products have varied stock status for testing purposes
- Prices are in USD and include realistic values

---

## Extending the Data

Feel free to add more products or users for additional practice:

1. Maintain the same JSON structure
2. Use sequential IDs
3. For images, use Unsplash URLs or Pravatar
4. Keep data realistic and appropriate for the target audience (6th-9th graders)

**Example Unsplash URL pattern:**
```
https://images.unsplash.com/photo-[PHOTO-ID]?w=400&h=300&fit=crop
```

**Example Pravatar URL pattern:**
```
https://i.pravatar.cc/150?img=[1-70]
```
