# Exercise 2: Build an HTML Page

**Difficulty:** ⭐ Beginner
**Estimated Time:** 30 minutes

## 🎯 Objective

Create a simple "About Books" web page using HTML elements you've learned.

## 📋 Instructions

1. **Open `index.html`** in this directory

2. **Complete the TODOs** to build a page about your favorite books:
   - Add a main heading with the title "My Favorite Books"
   - Add a paragraph introducing yourself as a reader
   - Create an unordered list of at least 3 favorite books
   - Add a section about why you like reading
   - Include at least one link (to a bookstore, library, or book review site)

3. **Open the file in your browser** to see your work:
   - Find the file in Finder/File Explorer
   - Right-click and choose "Open With" → your web browser
   - Or drag the file into an open browser window

4. **Make sure your HTML is valid:**
   - All opening tags have closing tags
   - Tags are properly nested
   - You used semantic HTML where appropriate

5. **Commit your work** when you're done:
   ```bash
   git add .
   git commit -m "Complete Exercise 2 - HTML page"
   git push
   ```

## ✅ Success Criteria

Your page should have:
- [ ] A proper HTML5 document structure (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)
- [ ] A title in the `<head>` that shows in the browser tab
- [ ] At least one heading (`<h1>` or `<h2>`)
- [ ] At least two paragraphs
- [ ] An unordered list with at least 3 items
- [ ] At least one link
- [ ] Proper indentation (makes code easier to read!)

## 💡 Learning Goals

This exercise helps you:
- Practice HTML document structure
- Use common HTML elements
- See your HTML rendered in a browser
- Build confidence creating web pages from scratch

## 🚀 Bonus Challenges

Want to go further? Try adding:
- An ordered list of your top 3 books ranked
- An image of a book cover (you can use a URL from the internet)
- A table showing book titles, authors, and ratings
- More semantic elements like `<section>` or `<article>`
- Comments in your HTML to label different sections

## 💡 Tips

- **Indent your code** to make it easier to read:
  ```html
  <ul>
      <li>First item</li>
      <li>Second item</li>
  </ul>
  ```

- **Use semantic HTML:**
  - Instead of `<div>` for everything, use `<section>`, `<article>`, `<header>`, etc.

- **Refresh the browser** to see changes:
  - Make a change in your code
  - Save the file
  - Refresh the browser (Cmd/Ctrl + R)

## ❓ Example Output

Your page doesn't need to look exactly like this, but here's an example:

```
My Favorite Books

Hi! I'm Alex, and I love reading science fiction and fantasy novels. Here are some of my all-time favorites.

My Favorite Books:
• The Hobbit by J.R.R. Tolkien
• Ender's Game by Orson Scott Card
• A Wrinkle in Time by Madeleine L'Engle

Why I Love Reading

Reading takes me to different worlds and helps me see things from new perspectives. I especially love books with creative worlds and interesting characters.

Visit your local library to discover new books!
```

---

**Next Exercise:** [Exercise 3: Style with CSS →](../03-css-styling/)
