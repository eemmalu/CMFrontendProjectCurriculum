# HTML Reference

Quick reference for common HTML elements and attributes.

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

## Text Elements

### Headings

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection</h4>
<h5>Smaller Heading</h5>
<h6>Smallest Heading</h6>
```

### Paragraphs and Text

```html
<p>A paragraph of text.</p>
<br>  <!-- Line break -->
<hr>  <!-- Horizontal rule -->
<strong>Bold/Important text</strong>
<em>Italic/Emphasized text</em>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<code>Inline code</code>
<pre>Preformatted text</pre>
```

## Links and Images

```html
<!-- External link -->
<a href="https://example.com">Link text</a>

<!-- Link to another page in your site -->
<a href="about.html">About</a>

<!-- Link that opens in new tab -->
<a href="https://example.com" target="_blank">Link</a>

<!-- Anchor link to section on same page -->
<a href="#section-id">Jump to section</a>

<!-- Image -->
<img src="image.jpg" alt="Description of image">

<!-- Image with size -->
<img src="image.jpg" alt="Description" width="300" height="200">
```

## Lists

### Unordered List (bullets)

```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

### Ordered List (numbered)

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

### Description List

```html
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
    <dt>Another Term</dt>
    <dd>Another definition</dd>
</dl>
```

## Containers

```html
<!-- Generic block container -->
<div>Content here</div>

<!-- Generic inline container -->
<span>Inline content</span>
```

## Semantic Elements

```html
<header>Page or section header</header>
<nav>Navigation links</nav>
<main>Main content of the page</main>
<article>Self-contained content</article>
<section>Thematic grouping</section>
<aside>Sidebar or tangential content</aside>
<footer>Page or section footer</footer>
```

## Forms

### Basic Form

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <button type="submit">Submit</button>
</form>
```

### Input Types

```html
<!-- Text input -->
<input type="text" name="username">

<!-- Password -->
<input type="password" name="password">

<!-- Email -->
<input type="email" name="email">

<!-- Number -->
<input type="number" name="age" min="0" max="120">

<!-- Date -->
<input type="date" name="birthday">

<!-- Checkbox -->
<input type="checkbox" name="agree" id="agree">
<label for="agree">I agree</label>

<!-- Radio buttons -->
<input type="radio" name="size" value="small" id="small">
<label for="small">Small</label>
<input type="radio" name="size" value="large" id="large">
<label for="large">Large</label>

<!-- File upload -->
<input type="file" name="avatar">

<!-- Text area (multi-line) -->
<textarea name="message" rows="4" cols="50"></textarea>

<!-- Dropdown -->
<select name="country">
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
</select>

<!-- Button -->
<button type="submit">Submit</button>
<button type="button">Click me</button>
```

## Tables

```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </tbody>
</table>
```

## Media

```html
<!-- Video -->
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser doesn't support video.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser doesn't support audio.
</audio>

<!-- Iframe (embed another page) -->
<iframe src="https://example.com" width="600" height="400"></iframe>
```

## Common Attributes

```html
<!-- ID (unique identifier) -->
<div id="unique-id"></div>

<!-- Class (for styling, can be reused) -->
<div class="class-name"></div>
<div class="class1 class2 class3"></div>

<!-- Style (inline CSS, avoid when possible) -->
<p style="color: red;">Red text</p>

<!-- Title (tooltip on hover) -->
<p title="This appears on hover">Hover over me</p>

<!-- Data attributes (custom data) -->
<div data-user-id="123" data-role="admin"></div>
```

## Comments

```html
<!-- This is a comment and won't appear on the page -->

<!--
    Multi-line
    comment
-->
```

## Special Characters (HTML Entities)

```html
&lt;      <!-- < -->
&gt;      <!-- > -->
&amp;     <!-- & -->
&quot;    <!-- " -->
&apos;    <!-- ' -->
&nbsp;    <!-- non-breaking space -->
&copy;    <!-- © -->
&trade;   <!-- ™ -->
```

## Best Practices

- ✅ Always include `<!DOCTYPE html>`
- ✅ Use semantic HTML elements
- ✅ Always include `alt` text for images
- ✅ Use labels with form inputs
- ✅ Validate your HTML at [validator.w3.org](https://validator.w3.org/)
- ✅ Indent nested elements for readability
- ✅ Close all tags (except self-closing tags)
- ✅ Use lowercase for tags and attributes
