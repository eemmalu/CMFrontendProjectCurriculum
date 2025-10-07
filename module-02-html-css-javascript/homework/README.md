# Module 2 Homework: Responsive Interactive Portfolio

**Estimated Time:** 2-3 hours
**Difficulty:** ⭐⭐ Medium

## Assignment Objective

Build a responsive personal portfolio webpage that combines everything you've learned in Module 2:
- Flexbox or Grid layout
- Responsive design with media queries
- JavaScript interactivity

## Requirements Checklist

Your portfolio page must include:

### HTML Structure
- [ ] Valid HTML5 document structure
- [ ] Semantic HTML elements (header, nav, main, section, footer)
- [ ] At least 3 main sections (e.g., About, Projects, Contact)
- [ ] Navigation links that connect to sections (using anchor links #)
- [ ] At least one button for JavaScript interaction

### CSS Layout
- [ ] Use Flexbox OR Grid for page layout
- [ ] Use Flexbox or Grid for at least one component (navbar, project grid, etc.)
- [ ] Mobile-first CSS approach
- [ ] At least 2 media queries for different screen sizes
- [ ] Responsive images (use max-width: 100%)
- [ ] Consistent spacing and padding

### Responsive Design
- [ ] Looks good on mobile (< 768px)
- [ ] Looks good on tablet (768px - 1024px)
- [ ] Looks good on desktop (> 1024px)
- [ ] Navigation changes appropriately for mobile vs desktop
- [ ] Content reorganizes for different screen sizes

### JavaScript Interactivity
- [ ] At least one interactive feature using JavaScript
- [ ] Uses event listeners
- [ ] Updates the DOM (changes content or style)
- [ ] Code is in external script.js file

## Interactive Feature Ideas

Choose at least ONE to implement:

1. **Theme Toggle**
   - Button that switches between light and dark mode
   - Changes background and text colors

2. **Show/Hide Sections**
   - Buttons that reveal or hide content
   - Useful for "Read More" functionality

3. **Project Filter**
   - Buttons to filter which projects are shown
   - Uses simple show/hide logic

4. **Form Validation**
   - Contact form with basic validation
   - Check for empty fields before submission

5. **Interactive Gallery**
   - Click images to enlarge them
   - Or create a simple slideshow

## Testing Your Work

Run the automated tests:
```bash
npm run test:module-02
```

The tests will check for:
- Proper HTML structure
- Semantic elements
- Flexbox or Grid usage
- Media queries present
- JavaScript file linked and working
- Interactive elements responding to events

## Detailed Requirements

### HTML
- Use semantic HTML5 elements
- Include proper meta tags (viewport, charset)
- Link CSS and JavaScript files
- Use meaningful IDs and classes

### CSS
- Organize your CSS logically (layout, typography, components)
- Use comments to separate sections
- Mobile-first approach (base styles + min-width media queries)
- Make sure text is readable (good contrast, font size)

### JavaScript
- Use `let` and `const` (not `var`)
- Write clear, commented code
- Use `console.log()` for debugging
- Make sure script is at the end of body or uses DOMContentLoaded

## Starter Code

The `starter/` folder contains:
- `index.html` - HTML template with TODOs
- `styles.css` - CSS template with mobile-first structure
- `script.js` - JavaScript template for interactivity

## Submission

1. Complete all TODOs in the starter files
2. Test your page in the browser (resize to check responsiveness!)
3. Run `npm run test:module-02` to verify requirements
4. Commit your changes with Git
5. Push to your forked repository

## Bonus Challenges

- Add smooth scrolling for navigation links
- Create a hamburger menu for mobile navigation
- Add CSS transitions/animations
- Implement multiple JavaScript features
- Make it look professional with careful design choices

## Tips

- **Start with HTML structure** - Get content in place first
- **Then add CSS layout** - Work mobile-first
- **Test responsive design** - Resize browser frequently
- **JavaScript last** - Get layout working before adding interactivity
- **Use DevTools** - Inspect elements, check console for errors
- **Test on real devices** - If possible, check on an actual phone

## Common Issues

**JavaScript not working?**
- Check the console for errors
- Make sure script.js is linked correctly
- Ensure elements exist before selecting them
- Check spelling of IDs and classes

**Layout broken on mobile?**
- Did you include the viewport meta tag?
- Are you using max-width instead of fixed width?
- Did you test media query breakpoints?

**Tests failing?**
- Read the test output carefully
- Check that you have required elements (semantic HTML, etc.)
- Make sure you're using Flexbox or Grid somewhere
- Verify JavaScript is updating the DOM

## Assessment Criteria

Your homework will be evaluated on:
- **Functionality** (40%): All requirements met, tests pass
- **Responsive Design** (30%): Works well on all screen sizes
- **Code Quality** (20%): Clean, organized, well-commented
- **Creativity** (10%): Personal touches and good design choices

---

Good luck! This is your chance to show off what you've learned. Make it your own! 🚀
