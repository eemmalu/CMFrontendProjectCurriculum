# Module 1 Homework: Personal Profile Page

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Time:** 2-3 hours

## 🎯 Assignment Overview

Create a personal profile web page about yourself using HTML and CSS. This page should introduce you, showcase your interests, and demonstrate the HTML and CSS skills you've learned in Module 1.

## 📋 Requirements

Your profile page must include:

### HTML Requirements
- [ ] Valid HTML5 document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [ ] A `<title>` in the `<head>` (shows in browser tab)
- [ ] A main heading (`<h1>`) with your name or "About Me"
- [ ] At least one subheading (`<h2>`)
- [ ] At least three paragraphs (`<p>`) with text about yourself
- [ ] An image (use the placeholder or add your own)
- [ ] An unordered list (`<ul>`) with at least 3 items (hobbies, interests, etc.)
- [ ] At least one link (`<a>`) to an external website
- [ ] Use of semantic HTML elements (like `<section>`, `<header>`, `<main>`, etc.)

### CSS Requirements
- [ ] Linked external stylesheet (`styles.css`)
- [ ] Background color on the body
- [ ] Custom colors for headings
- [ ] Custom font family
- [ ] Padding and margin on multiple elements
- [ ] Styled links (custom color or removed underline)
- [ ] Border on at least one element
- [ ] The page content should be centered or have a maximum width

## 📂 Files to Complete

You'll work with these files in the `starter/` folder:
- `index.html` - Add your HTML content
- `styles.css` - Add your CSS styling
- `images/placeholder-avatar.png` - A placeholder image (you can use this or add your own)

## 🚀 Getting Started

1. **Navigate to the starter folder:**
   ```bash
   cd module-01-git-html-css/homework/starter
   ```

2. **Open the files in your editor:**
   - Open `index.html` and complete the TODOs
   - Open `styles.css` and add your styling

3. **Open `index.html` in your browser** to see your work as you go

4. **Test frequently** as you work - don't wait until the end!

## ✅ Testing Your Work

Run the automated tests to check your progress:

```bash
# From the project root directory
npm run test:module-01
```

The tests will check for:
- Required HTML elements
- Proper HTML structure
- Linked CSS file
- Specific CSS properties

**Note:** Don't worry if tests fail at first! They're designed to guide you. Read the error messages carefully - they tell you exactly what's missing.

## 💡 Tips for Success

### HTML Tips
- Start with the structure, then add content
- Use proper indentation to keep your code readable
- Validate your HTML at [validator.w3.org](https://validator.w3.org/)
- Use semantic elements when they make sense

### CSS Tips
- Start with basic styles (colors, fonts) before complex layout
- Test each CSS property to see what it does
- Use the browser's developer tools (F12) to experiment
- Keep related styles together in your CSS file

### General Tips
- **Save often** and refresh your browser to see changes
- **Commit your work** periodically as you make progress
- **Read the test output** carefully if tests fail
- **Make it yours!** Add your personality to the page

## 🎨 Content Ideas

Not sure what to write about? Try including:

**About You:**
- Your name and grade
- Where you're from
- What you're learning and why

**Interests & Hobbies:**
- Favorite sports, games, or activities
- Books, movies, or TV shows you enjoy
- Programming projects you're working on
- Goals for learning web development

**Favorites:**
- Favorite subjects in school
- Favorite foods or restaurants
- Favorite places you've visited
- Favorite websites or apps

## 🚀 Bonus Challenges

Once you pass all the tests, try these extra challenges:

1. **Add more images** - Create a gallery of things you like
2. **Create a navigation** - Add a nav with links to different sections using anchor links (`#section-id`)
3. **Style the image** - Make it circular with `border-radius: 50%` and add a border
4. **Add a footer** - Include your name and the current year
5. **Hover effects** - Make links change color on hover
6. **Box shadow** - Add depth with `box-shadow` on cards or the main content area
7. **Responsive spacing** - Use `max-width` and `margin: 0 auto` to center content

## 📤 Submitting Your Work

1. **Make sure all tests pass:**
   ```bash
   npm run test:module-01
   ```

2. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Complete Module 1 homework - Personal profile page"
   ```

3. **Push to GitHub:**
   ```bash
   git push
   ```

4. **Verify on GitHub** - Check that your changes are visible in your repository

Your teacher will review your code on GitHub and provide feedback!

## ❓ Common Issues

### Tests fail even though my page looks right

The tests check for specific requirements (like certain HTML elements). Make sure you have ALL the required elements, not just similar ones. For example, the tests expect `<h1>`, not just any heading.

### CSS isn't showing up

- Make sure `styles.css` is in the same folder as `index.html`
- Check that the `<link>` tag in HTML has the correct path
- Make sure there are no typos in your CSS file name
- Try a hard refresh (Cmd/Ctrl + Shift + R)

### Image isn't showing

- Check that the `src` attribute has the correct path
- If using the placeholder: `src="images/placeholder-avatar.png"`
- Make sure the `images/` folder is in the same directory as `index.html`

### Tests won't run

- Make sure you ran `npm install` first
- Make sure you're in the project root directory
- Check that you saved your files before running tests

## 📚 Resources

- [Lesson 1: Git Basics](../lessons/01-git-basics.md)
- [Lesson 2: HTML Fundamentals](../lessons/02-html-fundamentals.md)
- [Lesson 3: CSS Fundamentals](../lessons/03-css-fundamentals.md)
- [HTML Cheatsheet](../../resources/cheatsheets/html-reference.md)
- [CSS Cheatsheet](../../resources/cheatsheets/css-reference.md)
- [Common Errors Guide](../../resources/common-errors.md)

## ✨ Example Structure

Here's a rough outline of what your page might look like (but make it your own!):

```
[Your Name / About Me]

[Your photo or placeholder]

Introduction paragraph about yourself...

My Interests
• Interest 1
• Interest 2
• Interest 3

Why I'm Learning Web Development
Paragraph about your goals...

Favorite Things
Paragraph about things you enjoy...

[Link to a favorite website]

```

---

**Good luck!** Remember, the goal is to practice and learn. Don't hesitate to ask your teacher for help if you get stuck.

**After completing this homework:** You're ready to move on to [Module 2: Layouts & JavaScript](../../module-02-html-css-javascript/)!
