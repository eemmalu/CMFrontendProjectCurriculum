# Exercise 2: Photo Grid Gallery

**Difficulty:** ⭐⭐ Medium
**Estimated Time:** 30-45 minutes
**Skills:** CSS Grid, responsive images, layout

## Objective

Create a responsive photo gallery using CSS Grid that displays images in a clean, organized grid layout.

## Instructions

1. Open `index.html` and `styles.css` in this folder
2. The HTML structure with placeholder images is provided
3. Use CSS Grid to create a beautiful photo gallery layout

### Requirements

Your photo gallery should:
1. Use `display: grid` on the gallery container
2. Have 3 columns on desktop
3. Have equal-width columns
4. Have consistent gaps between images
5. Images should fill their grid cells properly
6. Look clean and organized

### Hints

- Use `grid-template-columns: repeat(3, 1fr)` for 3 equal columns
- Use `gap` to add spacing between grid items
- Make images responsive with `width: 100%` and `height: auto`
- Try `object-fit: cover` to make images fill their containers nicely
- Use `aspect-ratio` to keep images square

## Expected Outcome

When complete, your photo gallery should:
- Display images in a neat 3-column grid
- Have even spacing between images
- Images should be the same size
- Look professional and clean

## Bonus Challenges

- Make the grid responsive:
  - 1 column on mobile (< 768px)
  - 2 columns on tablet (768px - 1024px)
  - 3 columns on desktop (1024px+)
- Add hover effects to images (scale, overlay, etc.)
- Make one image span 2 columns (featured image)
- Add captions below each image

## Learning Goals

- Practice CSS Grid layout
- Understand `grid-template-columns` and `repeat()`
- Learn responsive image techniques
- Build a common web pattern (photo gallery)
