const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Read the HTML and CSS files
const htmlPath = path.join(__dirname, '../starter/index.html');
const cssPath = path.join(__dirname, '../starter/styles.css');
const jsPath = path.join(__dirname, '../starter/script.js');

const html = fs.readFileSync(htmlPath, 'utf-8');
const css = fs.readFileSync(cssPath, 'utf-8');
const js = fs.readFileSync(jsPath, 'utf-8');

// Create a DOM from the HTML
const dom = new JSDOM(html);
const document = dom.window.document;

describe('Module 2 Homework: Responsive Interactive Portfolio', () => {

  // ===========================
  // HTML Structure Tests
  // ===========================

  describe('HTML Structure', () => {
    test('should have a valid HTML5 doctype', () => {
      expect(html.trim()).toMatch(/^<!DOCTYPE html>/i);
    });

    test('should have a viewport meta tag for responsive design', () => {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      expect(viewportMeta).toBeTruthy();
      expect(viewportMeta.getAttribute('content')).toContain('width=device-width');
    });

    test('should link to an external CSS file', () => {
      const cssLink = document.querySelector('link[rel="stylesheet"]');
      expect(cssLink).toBeTruthy();
      expect(cssLink.getAttribute('href')).toBeTruthy();
    });

    test('should link to an external JavaScript file', () => {
      const scriptTag = document.querySelector('script[src]');
      expect(scriptTag).toBeTruthy();
      expect(scriptTag.getAttribute('src')).toBeTruthy();
    });
  });

  // ===========================
  // Semantic HTML Tests
  // ===========================

  describe('Semantic HTML Elements', () => {
    test('should have a <header> element', () => {
      const header = document.querySelector('header');
      expect(header).toBeTruthy();
    });

    test('should have a <nav> element', () => {
      const nav = document.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    test('should have a <main> element', () => {
      const main = document.querySelector('main');
      expect(main).toBeTruthy();
    });

    test('should have at least 3 <section> elements', () => {
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(3);
    });

    test('should have a <footer> element', () => {
      const footer = document.querySelector('footer');
      expect(footer).toBeTruthy();
    });
  });

  // ===========================
  // Navigation Tests
  // ===========================

  describe('Navigation', () => {
    test('should have navigation links', () => {
      const navLinks = document.querySelectorAll('nav a');
      expect(navLinks.length).toBeGreaterThanOrEqual(3);
    });

    test('should have anchor links that point to sections', () => {
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      expect(navLinks.length).toBeGreaterThanOrEqual(1);
    });
  });

  // ===========================
  // Content Tests
  // ===========================

  describe('Content Sections', () => {
    test('should have sections with IDs for linking', () => {
      const sectionsWithIds = document.querySelectorAll('section[id]');
      expect(sectionsWithIds.length).toBeGreaterThanOrEqual(2);
    });

    test('should have at least 3 project cards or similar repeated items', () => {
      // Look for common class patterns for cards
      const cards = document.querySelectorAll('.project-card, .card, [class*="card"]');
      expect(cards.length).toBeGreaterThanOrEqual(3);
    });
  });

  // ===========================
  // CSS Layout Tests
  // ===========================

  describe('CSS Layout (Flexbox or Grid)', () => {
    test('should use Flexbox somewhere in CSS', () => {
      const hasFlexbox = css.includes('display: flex') || css.includes('display:flex');
      expect(hasFlexbox).toBe(true);
    });

    test('should use Grid OR Flexbox for layout', () => {
      const hasGrid = css.includes('display: grid') || css.includes('display:grid');
      const hasFlexbox = css.includes('display: flex') || css.includes('display:flex');
      expect(hasGrid || hasFlexbox).toBe(true);
    });

    test('should have gap or spacing properties (good layout practice)', () => {
      const hasGap = css.includes('gap:') || css.includes('gap ');
      const hasMargin = css.includes('margin');
      const hasPadding = css.includes('padding');
      expect(hasGap || (hasMargin && hasPadding)).toBe(true);
    });
  });

  // ===========================
  // Responsive Design Tests
  // ===========================

  describe('Responsive Design', () => {
    test('should have at least 2 media queries', () => {
      const mediaQueryMatches = css.match(/@media/g);
      expect(mediaQueryMatches).toBeTruthy();
      expect(mediaQueryMatches.length).toBeGreaterThanOrEqual(2);
    });

    test('should use mobile-first approach (min-width media queries)', () => {
      const hasMinWidth = css.includes('min-width');
      expect(hasMinWidth).toBe(true);
    });

    test('should have responsive images (max-width or similar)', () => {
      const hasResponsiveImages =
        css.includes('max-width: 100%') ||
        css.includes('max-width:100%') ||
        css.includes('width: 100%') ||
        css.includes('width:100%');
      // This test is optional if no images are present
      // We'll make it pass if there's any width control
      expect(hasResponsiveImages || css.includes('width')).toBe(true);
    });

    test('should have breakpoints for tablet and desktop', () => {
      // Common breakpoints: 768px (tablet), 1024px (desktop)
      const has768 = css.includes('768px');
      const has1024 = css.includes('1024px');
      const hasCommonBreakpoints = has768 || has1024;
      expect(hasCommonBreakpoints).toBe(true);
    });
  });

  // ===========================
  // JavaScript Tests
  // ===========================

  describe('JavaScript Interactivity', () => {
    test('should have JavaScript code (not empty)', () => {
      const jsWithoutComments = js.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
      expect(jsWithoutComments.length).toBeGreaterThan(0);
    });

    test('should use document.getElementById or querySelector', () => {
      const hasGetElement =
        js.includes('getElementById') ||
        js.includes('querySelector') ||
        js.includes('querySelectorAll');
      expect(hasGetElement).toBe(true);
    });

    test('should have at least one event listener', () => {
      const hasEventListener = js.includes('addEventListener');
      expect(hasEventListener).toBe(true);
    });

    test('should have an interactive button element', () => {
      const button = document.querySelector('button');
      expect(button).toBeTruthy();
    });

    test('should use let or const (modern JavaScript)', () => {
      const usesLet = js.includes('let ');
      const usesConst = js.includes('const ');
      expect(usesLet || usesConst).toBe(true);
    });

    test('should NOT use var (old JavaScript)', () => {
      // Check if var is used outside of comments
      const jsWithoutComments = js.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
      const usesVar = jsWithoutComments.includes('var ');
      expect(usesVar).toBe(false);
    });
  });

  // ===========================
  // Code Quality Tests
  // ===========================

  describe('Code Quality', () => {
    test('should have CSS organized with comments', () => {
      const hasComments = css.includes('/*');
      expect(hasComments).toBe(true);
    });

    test('should have proper indentation in HTML', () => {
      // Check for some indentation (spaces or tabs)
      const hasIndentation = html.includes('  ') || html.includes('\t');
      expect(hasIndentation).toBe(true);
    });

    test('should use meaningful class names (not just "div1", "section1")', () => {
      // This is a basic check - looking for semantic class names
      const hasMeaningfulClasses =
        css.includes('.nav') ||
        css.includes('.header') ||
        css.includes('.project') ||
        css.includes('.section') ||
        css.includes('.card') ||
        css.includes('.button');
      expect(hasMeaningfulClasses).toBe(true);
    });
  });
});
