# Exercise 3: Style with CSS

**Difficulty:** ⭐⭐ Beginner-Intermediate
**Estimated Time:** 30 minutes

## Objective

Practice CSS styling by adding colors, fonts, spacing, and layout to a pre-built HTML page.

## Instructions

1. **Open `index.html`** in your browser to see the unstyled page

2. **Open `styles.css`** - this is where you'll add all your CSS

3. **Complete the TODOs** to style the page:
   - Set a background color for the body
   - Style the headings with a custom color and font
   - Add padding and margin to elements
   - Style the links
   - Make the card stand out with a border and shadow
   - Center the content

4. **Refresh your browser** after each change to see the results

5. **Experiment!** Try different colors, fonts, and spacing until you like how it looks

6. **Commit your work:**
   ```bash
   git add .
   git commit -m "Complete Exercise 3 - CSS styling"
   git push
   ```

## Success Criteria

Your styled page should have:
- [ ] A background color on the body
- [ ] Custom colors for headings
- [ ] A different font family than the default
- [ ] Padding and margin to create spacing
- [ ] Styled links (different color, no underline, or both)
- [ ] A visible border around the card
- [ ] The card centered on the page

## Learning Goals

This exercise helps you:
- Practice CSS selectors
- Understand the box model (padding, margin, border)
- Apply colors and typography
- See the immediate visual impact of CSS

## Bonus Challenges

Try these additional styling touches:
- Add a hover effect to the link (changes color when you hover over it)
  ```css
  a:hover {
      color: red;
  }
  ```
- Make the card have rounded corners (`border-radius`)
- Add a subtle shadow to the card (`box-shadow`)
- Change the link color when visited (`:visited` pseudo-class)
- Add a background image to the body
- Use a custom font from [Google Fonts](https://fonts.google.com/)

## Tips

- **Use your browser's developer tools:**
  - Right-click on any element and choose "Inspect"
  - You can see and experiment with CSS in real-time!
  - Press F12 to open developer tools

- **Refresh to see changes:**
  - Save your CSS file
  - Refresh the browser (Cmd/Ctrl + R)
  - If you don't see changes, try a hard refresh (Cmd/Ctrl + Shift + R)

- **Start simple:**
  - Add one property at a time
  - See the result before adding more
  - This helps you understand what each property does

- **Color ideas:**
  - Use named colors: `lightblue`, `coral`, `mediumpurple`
  - Or hex codes: `#3498db`, `#e74c3c`, `#2ecc71`
  - Or RGB: `rgb(52, 152, 219)`

## Example Styles

Here are some example styles to inspire you (but don't just copy these - experiment!):

```css
body {
    background-color: #f0f4f8;
    font-family: Arial, sans-serif;
}

.card {
    background-color: white;
    max-width: 600px;
    margin: 40px auto;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2c3e50;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
}
```

## Design Principles

Keep these principles in mind:
- **Contrast:** Make sure text is readable against the background
- **Consistency:** Use the same colors/fonts throughout
- **Spacing:** Don't cram everything together - give elements room to breathe
- **Simplicity:** When in doubt, keep it simple!

---

**Next Step:** Ready for the homework? Head to [Module 1 Homework →](../../homework/)
