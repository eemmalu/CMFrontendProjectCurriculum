const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const htmlPath = path.join(__dirname, '../starter/index.html');
const jsPath = path.join(__dirname, '../starter/script.js');

const html = fs.readFileSync(htmlPath, 'utf-8');
const js = fs.readFileSync(jsPath, 'utf-8');

describe('Module 3 Homework: To-Do List Application', () => {

  describe('HTML Structure', () => {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    test('should have a form for adding todos', () => {
      const form = document.getElementById('todo-form');
      expect(form).toBeTruthy();
    });

    test('should have an input for todo text', () => {
      const input = document.getElementById('todo-input');
      expect(input).toBeTruthy();
    });

    test('should have a list element for todos', () => {
      const list = document.getElementById('todo-list');
      expect(list).toBeTruthy();
    });

    test('should have filter buttons', () => {
      const filterBtns = document.querySelectorAll('.filter-btn');
      expect(filterBtns.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('JavaScript Code Quality', () => {
    test('should use arrays', () => {
      expect(js.includes('[]') || js.includes('Array')).toBe(true);
    });

    test('should use addEventListener', () => {
      expect(js.includes('addEventListener')).toBe(true);
    });

    test('should use modern JavaScript (let/const)', () => {
      const usesLet = js.includes('let ');
      const usesConst = js.includes('const ');
      expect(usesLet || usesConst).toBe(true);
    });

    test('should have functions for todo operations', () => {
      const hasFunctions = js.includes('function') || js.includes('=>');
      expect(hasFunctions).toBe(true);
    });

    test('should manipulate the DOM', () => {
      const hasDOM = js.includes('document.') || js.includes('createElement');
      expect(hasDOM).toBe(true);
    });
  });
});
