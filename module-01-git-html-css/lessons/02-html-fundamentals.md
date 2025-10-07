# Lesson 2: HTML Fundamentals

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Understand what HTML is and how it structures web pages
- Write valid HTML5 documents
- Use common HTML elements correctly
- Understand semantic HTML and why it matters
- Create links, images, lists, and forms

---

## What is HTML?

**HTML** stands for **HyperText Markup Language**. It's the skeleton of every web page on the internet.

- **HyperText** = text with links to other text
- **Markup** = tags that tell the browser how to display content
- **Language** = a system with rules and syntax

Think of HTML as the blueprint of a house:
- HTML provides the structure (walls, rooms, doors)
- CSS provides the decoration (paint, furniture, style)
- JavaScript provides the functionality (lights, locks, appliances)

---

## HTML Document Structure

Every HTML document has the same basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
</body>
</html>
```

![HTML Structure](./assets/html-structure.png)

Let's break down each part:

### `<!DOCTYPE html>`

Tells the browser this is an HTML5 document. Always put this at the very top!

### `<html>`

The root element that contains everything else. The `lang="en"` attribute specifies the language (English).

### `<head>`

Contains meta-information about the page that doesn't appear on the page itself:
- Character encoding
- Page title (shows in browser tab)
- Links to stylesheets
- Meta tags for search engines

### `<body>`

Contains everything that appears on the actual web page.

---

## HTML Elements and Tags

HTML is made up of **elements** written with **tags**.

### Anatomy of an Element

```html
<p>This is a paragraph.</p>
```

- **Opening tag:** `<p>`
- **Content:** `This is a paragraph.`
- **Closing tag:** `</p>`

### Self-Closing Tags

Some elements don't have content, so they don't need a closing tag:

```html
<img src="photo.jpg" alt="A photo">
<br>
<hr>
<input type="text">
```

---

## Common HTML Elements

### Headings

There are six levels of headings, from most important (`<h1>`) to least important (`<h6>`):

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection Title</h4>
<h5>Smaller Heading</h5>
<h6>Smallest Heading</h6>
```

**Best practice:** Use only one `<h1>` per page, and use headings in order (don't skip from `<h1>` to `<h3>`).

### Paragraphs

Paragraphs are the most common way to display text:

```html
<p>This is a paragraph of text. It can be as long as you want.</p>
<p>This is another paragraph. Browsers automatically add space between paragraphs.</p>
```

### Links

Links let users navigate to other pages:

```html
<a href="https://www.example.com">Click here to visit Example.com</a>
<a href="about.html">Go to the About page</a>
```

- The `href` attribute specifies where the link goes
- The text between the tags is what the user sees and clicks

### Images

Images display pictures on your page:

```html
<img src="cat.jpg" alt="A cute orange cat">
```

- `src` = the path to the image file
- `alt` = alternative text (describes the image for screen readers and if the image fails to load)

**Always include alt text!** It makes your site accessible to everyone.

### Lists

#### Unordered Lists (bullet points)

```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

#### Ordered Lists (numbered)

```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

### Divs and Spans

Generic containers for grouping content:

```html
<div>
    <h2>Section Title</h2>
    <p>This div groups related content together.</p>
</div>

<p>I want to highlight <span>just this part</span> of the paragraph.</p>
```

- `<div>` = block-level container (takes up full width)
- `<span>` = inline container (only as wide as its content)

---

## Semantic HTML

**Semantic HTML** means using tags that describe what the content *is*, not just how it should look.

### Why Semantic HTML Matters

1. **Accessibility:** Screen readers can better understand your page structure
2. **SEO:** Search engines understand your content better
3. **Maintainability:** Other developers can read your code more easily

### Semantic Elements

Instead of using `<div>` for everything, use these descriptive tags:

```html
<header>
    <h1>My Website</h1>
    <nav>
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
    </nav>
</header>

<main>
    <article>
        <h2>Blog Post Title</h2>
        <p>This is the blog post content...</p>
    </article>

    <aside>
        <h3>Related Links</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
        </ul>
    </aside>
</main>

<footer>
    <p>&copy; 2024 My Website</p>
</footer>
```

Common semantic elements:
- `<header>` - Top section of a page or section
- `<nav>` - Navigation links
- `<main>` - Main content of the page
- `<article>` - Self-contained content (like a blog post)
- `<section>` - A thematic grouping of content
- `<aside>` - Sidebar or related content
- `<footer>` - Bottom section of a page or section

---

## Attributes

Attributes provide extra information about elements:

```html
<img src="photo.jpg" alt="Description" width="300">
<a href="https://example.com" target="_blank">Link</a>
<p class="intro" id="first-paragraph">Text</p>
```

Common attributes:
- `class` - Used for CSS styling (can be reused)
- `id` - Unique identifier (each ID used only once per page)
- `src` - Source of an image or script
- `href` - Destination of a link
- `alt` - Alternative text for images
- `title` - Tooltip text that appears on hover

---

## Forms and Inputs

Forms let users enter information:

```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>

    <button type="submit">Send</button>
</form>
```

Common input types:
- `text` - Single-line text
- `email` - Email address
- `password` - Hidden password field
- `number` - Numeric input
- `checkbox` - Checkbox
- `radio` - Radio button
- `date` - Date picker

**Always use `<label>` elements!** They make forms accessible and easier to use.

---

## Common Pitfalls

### Pitfall 1: Forgetting Closing Tags

❌ **Wrong:**
```html
<p>Paragraph without closing tag
<div>Content here
```

✅ **Correct:**
```html
<p>Paragraph with closing tag</p>
<div>Content here</div>
```

### Pitfall 2: Nesting Elements Incorrectly

❌ **Wrong:**
```html
<p>This is <strong>bold text</p></strong>
```

✅ **Correct:**
```html
<p>This is <strong>bold text</strong></p>
```

Always close tags in the reverse order you opened them!

### Pitfall 3: Using Divs for Everything

❌ **Wrong:**
```html
<div class="header">
    <div class="navigation">...</div>
</div>
```

✅ **Correct:**
```html
<header>
    <nav>...</nav>
</header>
```

Use semantic elements when they fit!

### Pitfall 4: Missing Alt Text

❌ **Wrong:**
```html
<img src="photo.jpg">
```

✅ **Correct:**
```html
<img src="photo.jpg" alt="A sunset over the ocean">
```

---

## Practice Questions

1. **What's the difference between `<div>` and `<span>`?**
   <details>
   <summary>Click to reveal answer</summary>
   `<div>` is a block-level element (takes full width), while `<span>` is inline (only as wide as its content).
   </details>

2. **Why should you use semantic HTML elements?**
   <details>
   <summary>Click to reveal answer</summary>
   For better accessibility, SEO, and code readability. Semantic tags describe what content is, not just how it looks.
   </details>

3. **What goes in the `<head>` vs the `<body>`?**
   <details>
   <summary>Click to reveal answer</summary>
   `<head>` contains meta-information (title, links to CSS, etc.). `<body>` contains everything that appears on the actual page.
   </details>

---

## Putting It Together

Here's a complete example of a simple "About Me" page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
</head>
<body>
    <header>
        <h1>About Me</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>Hi, I'm Alex!</h2>
            <img src="profile.jpg" alt="Profile photo of Alex">
            <p>I'm a student learning web development. I love coding, reading, and playing video games.</p>
        </section>

        <section>
            <h2>My Interests</h2>
            <ul>
                <li>Web Development</li>
                <li>Video Games</li>
                <li>Science Fiction Books</li>
                <li>Basketball</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Alex's Website</p>
    </footer>
</body>
</html>
```

---

## Summary

You've learned:
- ✅ The structure of an HTML5 document
- ✅ Common HTML elements (headings, paragraphs, links, images, lists)
- ✅ Semantic HTML and why it's important
- ✅ How to use attributes
- ✅ Basic form elements

---

## Additional Resources

- [MDN HTML Tutorial](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [HTML Validator](https://validator.w3.org/) - Check if your HTML is valid
- [HTML Cheatsheet](../../resources/cheatsheets/html-reference.md)

---

**Next Lesson:** [CSS Fundamentals →](./03-css-fundamentals.md)
