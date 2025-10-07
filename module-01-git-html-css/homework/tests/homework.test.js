/**
 * Module 1 Homework Tests
 * Tests for the Personal Profile Page assignment
 */

const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')

// Read the HTML and CSS files
const htmlPath = path.join(__dirname, '../starter/index.html')
const cssPath = path.join(__dirname, '../starter/styles.css')

let html, css, dom, document

beforeAll(() => {
  try {
    html = fs.readFileSync(htmlPath, 'utf8')
    css = fs.readFileSync(cssPath, 'utf8')
    dom = new JSDOM(html)
    document = dom.window.document
  } catch (error) {
    throw new Error(`Failed to load files: ${error.message}`)
  }
})

describe('Module 1 Homework: Personal Profile Page', () => {
  describe('HTML Structure', () => {
    test('should have a valid HTML5 doctype', () => {
      expect(html.trim()).toMatch(/^<!DOCTYPE html>/i)
    })

    test('should have an html element with lang attribute', () => {
      const htmlElement = document.querySelector('html')
      expect(htmlElement).toBeTruthy()
      expect(htmlElement.getAttribute('lang')).toBeTruthy()
    })

    test('should have a head element', () => {
      const head = document.querySelector('head')
      expect(head).toBeTruthy()
    })

    test('should have a body element', () => {
      const body = document.querySelector('body')
      expect(body).toBeTruthy()
    })

    test('should have a title in the head', () => {
      const title = document.querySelector('head > title')
      expect(title).toBeTruthy()
      expect(title.textContent.trim().length).toBeGreaterThan(0)
      expect(title.textContent.toLowerCase()).not.toBe('my profile page')
    })

    test('should have a meta charset tag', () => {
      const metaCharset = document.querySelector('meta[charset]')
      expect(metaCharset).toBeTruthy()
    })
  })

  describe('Required HTML Elements', () => {
    test('should have at least one h1 heading', () => {
      const h1 = document.querySelector('h1')
      expect(h1).toBeTruthy()
      expect(h1.textContent.trim().length).toBeGreaterThan(0)
    })

    test('should have at least one h2 heading', () => {
      const h2 = document.querySelector('h2')
      expect(h2).toBeTruthy()
      expect(h2.textContent.trim().length).toBeGreaterThan(0)
    })

    test('should have at least three paragraphs', () => {
      const paragraphs = document.querySelectorAll('p')
      expect(paragraphs.length).toBeGreaterThanOrEqual(3)

      // Check that paragraphs have content
      paragraphs.forEach((p, index) => {
        expect(p.textContent.trim().length).toBeGreaterThan(
          0,
          `Paragraph ${index + 1} is empty`
        )
      })
    })

    test('should have at least one image', () => {
      const images = document.querySelectorAll('img')
      expect(images.length).toBeGreaterThanOrEqual(1)

      // Check that image has src and alt attributes
      images.forEach((img, index) => {
        expect(img.getAttribute('src')).toBeTruthy()
        expect(img.getAttribute('alt')).toBeTruthy()
      })
    })

    test('should have an unordered list with at least 3 items', () => {
      const ul = document.querySelector('ul')
      expect(ul).toBeTruthy()

      const listItems = ul.querySelectorAll('li')
      expect(listItems.length).toBeGreaterThanOrEqual(3)

      // Check that list items have content
      listItems.forEach((li, index) => {
        expect(li.textContent.trim().length).toBeGreaterThan(
          0,
          `List item ${index + 1} is empty`
        )
      })
    })

    test('should have at least one link', () => {
      const links = document.querySelectorAll('a')
      expect(links.length).toBeGreaterThanOrEqual(1)

      // Check that link has href attribute
      links.forEach((link, index) => {
        expect(link.getAttribute('href')).toBeTruthy()
        expect(link.textContent.trim().length).toBeGreaterThan(
          0,
          `Link ${index + 1} has no text content`
        )
      })
    })
  })

  describe('CSS Styling', () => {
    test('should link to an external CSS file', () => {
      const linkTag = document.querySelector('link[rel="stylesheet"]')
      expect(linkTag).toBeTruthy()
      expect(linkTag.getAttribute('href')).toContain('css')
    })

    test('CSS file should not be empty', () => {
      expect(css.trim().length).toBeGreaterThan(0)
    })

    test('should style the body element', () => {
      expect(css).toMatch(/body\s*{/)
    })

    test('should have color styling for headings', () => {
      const hasH1Color = css.match(/h1\s*{[^}]*color\s*:/i)
      const hasH2Color = css.match(/h2\s*{[^}]*color\s*:/i)
      expect(hasH1Color || hasH2Color).toBeTruthy()
    })

    test('should set a font-family', () => {
      expect(css).toMatch(/font-family\s*:/i)
    })

    test('should use padding or margin', () => {
      const hasPadding = css.match(/padding/i)
      const hasMargin = css.match(/margin/i)
      expect(hasPadding || hasMargin).toBeTruthy()
    })

    test('should style links', () => {
      expect(css).toMatch(/a\s*{/)
    })
  })

  describe('Semantic HTML (Bonus)', () => {
    test('should ideally use semantic elements', () => {
      const hasSemanticElements =
        document.querySelector('header') ||
        document.querySelector('main') ||
        document.querySelector('section') ||
        document.querySelector('article') ||
        document.querySelector('footer')

      // This is just informational - not a hard requirement
      if (!hasSemanticElements) {
        console.log(
          '💡 Tip: Consider using semantic HTML elements like <header>, <main>, <section>, etc.'
        )
      }
    })
  })
})
