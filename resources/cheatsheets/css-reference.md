# CSS Reference

Quick reference for common CSS properties and selectors.

## Adding CSS

```html
<!-- External stylesheet (recommended) -->
<link rel="stylesheet" href="styles.css">

<!-- Internal stylesheet -->
<style>
    p { color: blue; }
</style>

<!-- Inline style (avoid) -->
<p style="color: blue;">Text</p>
```

## Selectors

```css
/* Element selector */
p { }

/* Class selector */
.classname { }

/* ID selector */
#idname { }

/* Multiple selectors */
h1, h2, h3 { }

/* Descendant selector (all p inside div) */
div p { }

/* Child selector (direct children only) */
div > p { }

/* Adjacent sibling */
h1 + p { }

/* Attribute selector */
input[type="text"] { }

/* Pseudo-classes */
a:hover { }
a:visited { }
a:active { }
input:focus { }
li:first-child { }
li:last-child { }
li:nth-child(2) { }

/* Pseudo-elements */
p::first-line { }
p::first-letter { }
p::before { content: "→ "; }
p::after { content: " ←"; }
```

## Colors

```css
/* Named colors */
color: red;
color: lightblue;

/* Hex codes */
color: #FF0000;
color: #F00;  /* shorthand */

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5);  /* 50% transparent */

/* HSL */
color: hsl(0, 100%, 50%);

/* HSLA (with transparency) */
color: hsla(0, 100%, 50%, 0.5);
```

## Text and Fonts

```css
/* Font family */
font-family: Arial, sans-serif;
font-family: "Times New Roman", serif;

/* Font size */
font-size: 16px;
font-size: 1.2em;
font-size: 1.2rem;

/* Font weight */
font-weight: normal;  /* 400 */
font-weight: bold;    /* 700 */
font-weight: 300;     /* light */
font-weight: 900;     /* extra bold */

/* Font style */
font-style: normal;
font-style: italic;

/* Text alignment */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Text decoration */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;

/* Text transform */
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

/* Line height */
line-height: 1.5;
line-height: 24px;

/* Letter spacing */
letter-spacing: 2px;

/* Word spacing */
word-spacing: 5px;
```

## Box Model

```css
/* Width and height */
width: 300px;
height: 200px;
max-width: 100%;
min-height: 500px;

/* Padding (inside) */
padding: 20px;                    /* all sides */
padding: 10px 20px;               /* vertical horizontal */
padding: 10px 20px 30px;          /* top horizontal bottom */
padding: 10px 20px 30px 40px;     /* top right bottom left */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;

/* Margin (outside) */
margin: 20px;                     /* all sides */
margin: 10px 20px;                /* vertical horizontal */
margin: 10px 20px 30px 40px;      /* top right bottom left */
margin-top: 10px;
margin: 0 auto;                   /* center horizontally */

/* Border */
border: 2px solid black;
border-width: 2px;
border-style: solid;  /* solid, dashed, dotted, none */
border-color: black;
border-radius: 10px;  /* rounded corners */
border-top: 1px solid red;
```

## Background

```css
/* Background color */
background-color: lightblue;

/* Background image */
background-image: url('image.jpg');

/* Background size */
background-size: cover;      /* cover entire element */
background-size: contain;    /* fit inside element */
background-size: 100px 200px;

/* Background position */
background-position: center;
background-position: top right;
background-position: 50% 50%;

/* Background repeat */
background-repeat: no-repeat;
background-repeat: repeat-x;  /* horizontal only */
background-repeat: repeat-y;  /* vertical only */

/* Shorthand */
background: lightblue url('image.jpg') no-repeat center/cover;
```

## Display and Positioning

```css
/* Display */
display: block;        /* takes full width, starts on new line */
display: inline;       /* only as wide as content, stays in line */
display: inline-block; /* inline but can have width/height */
display: none;         /* hidden completely */
display: flex;         /* flexbox container */
display: grid;         /* grid container */

/* Position */
position: static;      /* default */
position: relative;    /* relative to normal position */
position: absolute;    /* relative to nearest positioned ancestor */
position: fixed;       /* relative to viewport */
position: sticky;      /* hybrid of relative and fixed */

/* Position offsets (use with position) */
top: 10px;
right: 20px;
bottom: 10px;
left: 20px;

/* Z-index (layering) */
z-index: 10;
```

## Flexbox

```css
/* Container */
.container {
    display: flex;
    flex-direction: row;        /* row, column */
    justify-content: center;    /* flex-start, flex-end, center, space-between, space-around */
    align-items: center;        /* flex-start, flex-end, center, stretch */
    flex-wrap: wrap;            /* nowrap, wrap */
    gap: 10px;                  /* spacing between items */
}

/* Items */
.item {
    flex: 1;                    /* grow to fill space */
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
```

## Grid

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;     /* 3 equal columns */
    grid-template-columns: 200px auto 100px; /* fixed and flexible */
    grid-template-rows: 100px 200px;
    gap: 10px;                               /* spacing between items */
    grid-gap: 10px 20px;                     /* row-gap column-gap */
}

.item {
    grid-column: 1 / 3;         /* span from column 1 to 3 */
    grid-row: 1 / 2;
}
```

## Other Useful Properties

```css
/* Opacity */
opacity: 0.5;  /* 0 = transparent, 1 = opaque */

/* Cursor */
cursor: pointer;
cursor: not-allowed;

/* Overflow */
overflow: hidden;
overflow: scroll;
overflow: auto;

/* Box shadow */
box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
box-shadow: 0 4px 6px rgba(0,0,0,0.1);

/* Text shadow */
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

/* Transition (animation) */
transition: all 0.3s ease;
transition: color 0.2s, background-color 0.3s;

/* Transform */
transform: rotate(45deg);
transform: scale(1.5);
transform: translate(10px, 20px);
```

## Units

```css
/* Absolute */
px   /* pixels */

/* Relative to font size */
em   /* relative to parent font-size */
rem  /* relative to root font-size */

/* Relative to viewport */
vw   /* 1% of viewport width */
vh   /* 1% of viewport height */

/* Percentage */
%    /* relative to parent */
```

## Media Queries (Responsive Design)

```css
/* Mobile first */
.element {
    width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
    .element {
        width: 50%;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .element {
        width: 33%;
    }
}
```

## Best Practices

- ✅ Use external stylesheets
- ✅ Use classes for styling (not IDs)
- ✅ Mobile-first approach for responsive design
- ✅ Use relative units (rem, em) for better scalability
- ✅ Group related styles together
- ✅ Comment your CSS for clarity
- ✅ Use shorthand properties when possible
- ✅ Be consistent with naming conventions
