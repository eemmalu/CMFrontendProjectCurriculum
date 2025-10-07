// Test utilities for Module 2 homework

/**
 * Check if CSS contains a specific property
 * @param {string} css - CSS file content
 * @param {string} property - CSS property to search for
 * @returns {boolean}
 */
function cssHasProperty(css, property) {
  const regex = new RegExp(`${property}\\s*:`, 'i');
  return regex.test(css);
}

/**
 * Count occurrences of a pattern in text
 * @param {string} text - Text to search
 * @param {RegExp} pattern - Pattern to match
 * @returns {number}
 */
function countMatches(text, pattern) {
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

/**
 * Check if JavaScript uses modern practices
 * @param {string} js - JavaScript file content
 * @returns {Object}
 */
function checkModernJS(js) {
  const withoutComments = js
    .replace(/\/\/.*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

  return {
    usesLet: withoutComments.includes('let '),
    usesConst: withoutComments.includes('const '),
    usesVar: withoutComments.includes('var '),
    usesArrowFunctions: withoutComments.includes('=>'),
    usesTemplateLiterals: withoutComments.includes('`'),
  };
}

module.exports = {
  cssHasProperty,
  countMatches,
  checkModernJS,
};
