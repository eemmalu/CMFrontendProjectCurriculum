# Common Errors and Solutions

Troubleshooting guide organized by module and error type.

## Table of Contents
- [General Setup Issues](#general-setup-issues)
- [Module 1: Git, HTML & CSS](#module-1-git-html--css)
- [Testing Issues](#testing-issues)
- [Browser Issues](#browser-issues)

---

## General Setup Issues

### "command not found: npm" or "command not found: node"

**Problem:** Node.js or npm isn't installed or not in your PATH.

**Solution:**
1. Download and install Node.js from [nodejs.org](https://nodejs.org/)
2. Close and reopen your terminal
3. Verify installation: `node --version` and `npm --version`
4. If still not working, restart your computer

### "command not found: git"

**Problem:** Git isn't installed or not in your PATH.

**Solution:**
1. **Mac:** Run `xcode-select --install` or install via Homebrew
2. **Windows:** Download from [git-scm.com](https://git-scm.com/)
3. **Linux:** Run `sudo apt-get install git` (Ubuntu/Debian)
4. Verify: `git --version`

### npm install fails with permission errors

**Problem:** You don't have permission to install packages globally.

**Solution:**
- **Don't use sudo!** This can cause more problems
- Make sure you're in the project directory
- Delete `node_modules` folder and try again
- On Mac/Linux, you may need to fix npm permissions: [Follow this guide](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

---

## Module 1: Git, HTML & CSS

### Git: "fatal: not a git repository"

**Problem:** You're trying to run Git commands outside of a Git repository.

**Solution:**
- Make sure you're in the correct directory
- Run `pwd` (Mac/Linux) or `cd` (Windows) to see where you are
- Navigate to your project folder: `cd path/to/frontend-curriculum`

### Git: "Your branch is behind 'origin/main'"

**Problem:** Someone (maybe you on another computer) pushed changes.

**Solution:**
```bash
git pull
```

### Git: Merge conflicts

**Problem:** Git can't automatically merge your changes with remote changes.

**Solution:**
1. Open the conflicting files
2. Look for conflict markers: `<<<<<<<`, `=======`, `>>>>>>>`
3. Edit the file to keep what you want
4. Remove the conflict markers
5. Stage and commit:
   ```bash
   git add .
   git commit -m "Resolve merge conflict"
   ```

### HTML: Page is blank

**Problem:** Your HTML file isn't displaying anything.

**Solution:**
- Make sure you saved the file
- Check that you have content in the `<body>` section
- Open the browser console (F12) to check for errors
- Verify the file path is correct
- Try a hard refresh: Cmd/Ctrl + Shift + R

### HTML: Tags showing on the page

**Problem:** You see `<p>` or other tags displayed as text.

**Solution:**
- You probably typed `&lt;p&gt;` instead of `<p>`
- Or you put HTML code inside a `<code>` or `<pre>` tag
- Make sure you're using actual HTML tags, not escaped characters

### CSS: Styles not showing up

**Problem:** Your CSS isn't being applied to your HTML.

**Solution:**
1. **Check the link tag:**
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
2. **Verify the file path** - is `styles.css` in the same folder as `index.html`?
3. **Check for typos** in the filename
4. **Try a hard refresh:** Cmd/Ctrl + Shift + R
5. **Open browser DevTools** (F12) and check the Network tab to see if the CSS file loaded
6. **Check for CSS syntax errors** - missing semicolons, unclosed braces, etc.

### CSS: Selector not working

**Problem:** Your CSS rule isn't being applied.

**Solution:**
- **Class:** Use `.classname` in CSS and `class="classname"` in HTML
- **ID:** Use `#idname` in CSS and `id="idname"` in HTML
- **Check spelling** - CSS selectors are case-sensitive for classes and IDs
- **Check specificity** - a more specific selector might be overriding yours
- **Use browser DevTools** to inspect the element and see which styles are applied

### CSS: Colors not showing

**Problem:** Your color declarations aren't working.

**Solution:**
- **Check syntax:**
  - ✅ `color: red;`
  - ✅ `color: #FF0000;`
  - ✅ `color: rgb(255, 0, 0);`
  - ❌ `color: red` (missing semicolon)
  - ❌ `colour: red;` (wrong spelling)
- **British vs American spelling:** Use `color`, not `colour`

---

## Testing Issues

### Tests won't run

**Problem:** Running `npm test` gives an error.

**Solution:**
1. **Make sure you ran `npm install` first**
2. **Check you're in the right directory** (the project root)
3. **Look at the error message** - it usually tells you what's wrong
4. **Try deleting `node_modules`** and running `npm install` again
5. **Make sure your files are saved**

### All tests fail immediately

**Problem:** Every single test fails, even ones you haven't started.

**Solution:**
- This might be normal! Tests are designed to fail until you complete the work.
- Read the test output carefully - it tells you what's missing
- Start with the first failing test and work your way through

### Tests pass but page doesn't look right

**Problem:** Tests are passing but your page looks broken.

**Solution:**
- Tests check for requirements (elements, properties) but not appearance
- Open your page in a browser and fix visual issues
- Tests ensure you have the basics; you still need to make it look good!

### One test keeps failing

**Problem:** One specific test won't pass no matter what you try.

**Solution:**
1. **Read the test name carefully** - it tells you what it's checking for
2. **Read the error message** - it often shows you exactly what's wrong
3. **Check the test file** to see what it's looking for
4. **Ask your teacher** - they can help explain what the test expects

---

## Browser Issues

### Changes don't appear in browser

**Problem:** You saved your file but the browser still shows the old version.

**Solution:**
1. **Make sure you saved the file** (check for a dot in the tab title)
2. **Refresh the page:** Cmd/Ctrl + R
3. **Hard refresh:** Cmd/Ctrl + Shift + R (clears cache)
4. **Check you're editing the right file**
5. **Restart the browser** if all else fails

### Browser console showing errors

**Problem:** The browser console (F12 → Console) shows red error messages.

**Solution:**
- **Read the error message** - it usually tells you the problem
- **Look at the line number** - errors often show where in your code the problem is
- **Common errors:**
  - `404 Not Found` - file path is wrong
  - `Syntax error` - typo in your code
  - `Uncaught ReferenceError` - trying to use something that doesn't exist

---

## Getting More Help

If you're still stuck after trying these solutions:

1. **Copy the exact error message** when asking for help
2. **Describe what you've already tried**
3. **Share the relevant code** (just the part that's not working)
4. **Ask your teacher** during class or via your communication channel
5. **Check the lesson materials** for that module
6. **Search online** - Stack Overflow often has answers

---

## Prevention Tips

- **Commit often** so you can go back if something breaks
- **Test frequently** don't wait until the end to test your code
- **Read error messages** they're trying to help you!
- **Use browser DevTools** they're incredibly useful for debugging
- **Keep your code organized** proper indentation makes errors easier to spot
- **Save your work** before testing or refreshing
