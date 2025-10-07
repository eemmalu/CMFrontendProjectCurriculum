/**
 * Test utility functions for Module 1 homework
 * Helper functions for testing HTML and CSS
 */

/**
 * Check if an element exists in the DOM
 */
function elementExists(document, selector) {
  return document.querySelector(selector) !== null
}

/**
 * Count elements matching a selector
 */
function countElements(document, selector) {
  return document.querySelectorAll(selector).length
}

/**
 * Check if CSS contains a specific property
 */
function cssHasProperty(css, property) {
  const regex = new RegExp(`${property}\\s*:`, 'i')
  return regex.test(css)
}

/**
 * Check if CSS has a rule for a specific selector
 */
function cssHasSelector(css, selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`${escapedSelector}\\s*{`, 'g')
  return regex.test(css)
}

/**
 * Get text content of an element
 */
function getTextContent(document, selector) {
  const element = document.querySelector(selector)
  return element ? element.textContent.trim() : ''
}

/**
 * Check if element has attribute
 */
function hasAttribute(document, selector, attribute) {
  const element = document.querySelector(selector)
  return element && element.hasAttribute(attribute)
}

module.exports = {
  elementExists,
  countElements,
  cssHasProperty,
  cssHasSelector,
  getTextContent,
  hasAttribute,
}
