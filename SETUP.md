# Setup Instructions

Welcome! This guide will help you set up everything you need to start the Frontend Development curriculum.

## Table of Contents

1. [Installing Prerequisites](#installing-prerequisites)
2. [Setting up GitHub](#setting-up-github)
3. [Running the Project](#running-the-project)
4. [Your Workflow](#your-workflow)
5. [Troubleshooting](#troubleshooting)

---

## Installing Prerequisites

### 1. Install Node.js and npm

Node.js is a JavaScript runtime that lets you run JavaScript outside of a browser. npm is the package manager that comes with Node.js.

**Download and Install:**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Verify installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers printed for both commands.

### 2. Install Git

Git is a version control system that tracks changes to your code.

**Download and Install:**
- **Windows:** Download from [git-scm.com](https://git-scm.com/)
- **Mac:** Git is usually pre-installed. If not, run `brew install git` (requires [Homebrew](https://brew.sh/))
- **Linux:** Run `sudo apt-get install git` (Ubuntu/Debian) or `sudo yum install git` (Fedora)

**Verify installation:**
```bash
git --version
```

### 3. Install VS Code (Recommended)

Visual Studio Code is a free code editor that works great for web development.

1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install and open VS Code
3. Install recommended extensions (see below)

**Recommended VS Code Extensions:**
- **ESLint** - Shows code quality issues
- **Prettier** - Automatically formats your code
- **Tailwind CSS IntelliSense** - Auto-completion for Tailwind classes
- **ES7+ React/Redux/React-Native snippets** - Helpful React shortcuts

To install extensions:
1. Click the Extensions icon in the left sidebar (or press `Cmd/Ctrl + Shift + X`)
2. Search for each extension by name
3. Click "Install"

---

## Setting up GitHub

### 1. Create a GitHub Account

If you don't already have one:
1. Go to [github.com](https://github.com/)
2. Click "Sign up"
3. Follow the prompts to create your account

### 2. Fork the Repository

"Forking" creates your own copy of this curriculum that you can modify.

1. Go to the main curriculum repository (your teacher will provide the link)
2. Click the "Fork" button in the top-right corner
3. Select your account as the destination
4. Wait for GitHub to create your fork

### 3. Clone Your Fork

"Cloning" downloads your forked repository to your computer.

1. On your forked repository page, click the green "Code" button
2. Copy the URL (it should contain your username)
3. Open a terminal and navigate to where you want to store the project:
   ```bash
   cd ~/Documents  # or wherever you keep your projects
   ```
4. Clone the repository:
   ```bash
   git clone <paste-the-url-here>
   ```
5. Navigate into the project folder:
   ```bash
   cd frontend-curriculum
   ```

### 4. Configure Git

Tell Git who you are so your commits are properly labeled:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use the same email address you used for GitHub.

---

## Running the Project

### 1. Install Dependencies

Inside the project folder, run:

```bash
npm install
```

This downloads all the libraries and tools the project needs. It might take a few minutes the first time.

### 2. Start the Development Server

To see your work in a browser:

```bash
npm run dev
```

This starts a local web server. You should see a message like:
```
  VITE v5.4.5  ready in 234 ms

  ➜  Local:   http://localhost:5173/
```

Open that URL in your browser to see your work!

**Note:** For Module 1 (HTML/CSS), you'll open HTML files directly in your browser instead of using the dev server.

### 3. Run Tests

To check if your homework is correct:

```bash
# Run all tests
npm test

# Run tests for a specific module
npm run test:module-01
```

Tests will show you which requirements you've met and which ones still need work.

---

## Your Workflow

Here's the process you'll follow for each assignment:

### 1. Make Changes

- Read the lesson materials
- Complete exercises during class
- Work on homework assignments at home

### 2. Test Your Work

Run the tests to see if your code works correctly:

```bash
npm run test:module-01  # (or whichever module you're on)
```

If tests fail, read the error messages carefully—they'll guide you to what needs fixing.

### 3. Commit Your Changes

When your tests pass (or you want to save your progress):

```bash
# See what files you've changed
git status

# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Complete Module 1 homework"
```

**Tip:** Write commit messages that explain what you did, like:
- ✅ "Complete Module 1 homework"
- ✅ "Add CSS styling to profile page"
- ❌ "stuff" (too vague!)

### 4. Push to GitHub

Upload your commits to GitHub:

```bash
git push
```

Now your teacher can see your work on GitHub and provide feedback!

### 5. Get Feedback

Your teacher will review your code on GitHub and may:
- Leave comments on specific lines
- Suggest improvements
- Approve your work

Check GitHub regularly for feedback.

---

## Troubleshooting

### "command not found" errors

**Problem:** Terminal says `npm: command not found` or similar

**Solution:**
- Make sure Node.js is installed correctly
- Close and reopen your terminal
- Try restarting your computer

### Port already in use

**Problem:** Error says `Port 5173 is already in use`

**Solution:**
- You might have another dev server running
- Close other terminal windows
- Or use `Ctrl + C` in the terminal to stop the running server

### Tests won't run

**Problem:** `npm test` gives errors

**Solution:**
- Make sure you ran `npm install` first
- Check that you're in the correct folder (`pwd` to check)
- Try deleting `node_modules` and running `npm install` again

### Git push asks for password repeatedly

**Problem:** Git keeps asking for your GitHub password

**Solution:**
- Set up SSH keys (ask your teacher for help)
- Or use a personal access token instead of your password ([GitHub guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token))

### Module tests fail immediately

**Problem:** All tests fail even though you haven't started

**Solution:**
- This is normal! Tests are designed to fail until you complete the work
- Read the test output carefully—it tells you what's missing
- Complete the TODOs in the starter code

### Can't see changes in browser

**Problem:** You saved your code but the browser doesn't show changes

**Solution:**
- Make sure the dev server is running (`npm run dev`)
- Try refreshing the browser (`Cmd/Ctrl + R`)
- Try a hard refresh (`Cmd/Ctrl + Shift + R`)
- Check the browser console for errors (press `F12`)

---

## Getting More Help

If you're still stuck:

1. **Check the resources:**
   - [Common Errors Guide](./resources/common-errors.md)
   - [Helpful Links](./resources/helpful-links.md)
   - Module-specific README files

2. **Ask your teacher:**
   - During class time
   - Via GitHub comments on your code
   - Through whatever communication channel they've set up

3. **Read error messages carefully:**
   - Error messages usually tell you exactly what's wrong
   - Copy error messages when asking for help

---

## You're Ready!

Once you've completed this setup, you're ready to start learning! Head to [Module 1](./module-01-git-html-css/) to begin.

**Happy coding! 🚀**
