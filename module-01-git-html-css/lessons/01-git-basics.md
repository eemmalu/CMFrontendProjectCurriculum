# Lesson 1: Git Basics

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Understand what version control is and why it's important
- Know the basic Git workflow: fork, clone, commit, push
- Be able to make commits and push them to GitHub
- Understand how Git helps teams work together

---

## What is Version Control?

Imagine you're writing an essay. You might save different versions:
- `essay-draft1.doc`
- `essay-draft2.doc`
- `essay-final.doc`
- `essay-final-ACTUALLY-FINAL.doc`

This gets messy fast! **Version control** is a better way to track changes to your work over time.

### Why Developers Use Git

Git is a version control system that:
- 📝 Tracks every change you make to your code
- ⏮️ Lets you go back to previous versions if something breaks
- 🤝 Helps teams work on the same code without conflicts
- 💾 Acts as a backup of all your work

Think of Git like a save button in a video game, but much more powerful!

---

## Key Concepts

### Repository (Repo)

A **repository** is a folder that Git is tracking. It contains all your project files plus a hidden `.git` folder that stores the history of changes.

### Commit

A **commit** is like a snapshot of your project at a specific moment in time. Each commit has:
- A unique ID (called a "hash")
- A message describing what changed
- Information about who made the change and when

### Remote

A **remote** is a version of your repository that lives on the internet (usually GitHub). You can:
- **Push** commits from your computer to the remote
- **Pull** changes from the remote to your computer

---

## The Git Workflow

Here's the workflow you'll use throughout this course:

![Git Workflow](./assets/git-workflow.png)

### 1. Fork

**Forking** creates your own copy of someone else's repository on GitHub. You'll fork this curriculum repository so you can make your own changes.

*You only do this once per project.*

### 2. Clone

**Cloning** downloads a repository from GitHub to your computer.

```bash
git clone https://github.com/YOUR-USERNAME/frontend-curriculum.git
cd frontend-curriculum
```

*You only do this once per project.*

### 3. Make Changes

Edit files, create new files, or delete files as you work through lessons and exercises.

*You do this constantly while coding!*

### 4. Stage Changes

**Staging** tells Git which files you want to include in your next commit.

```bash
# Stage all changes
git add .

# Or stage specific files
git add index.html styles.css
```

### 5. Commit

**Committing** creates a snapshot of your staged changes.

```bash
git commit -m "Complete Module 1 Exercise 2"
```

**Good commit messages:**
- ✅ "Add CSS styling to profile page"
- ✅ "Fix broken image link"
- ✅ "Complete Module 1 homework"

**Bad commit messages:**
- ❌ "stuff"
- ❌ "changes"
- ❌ "asdfghjk"

### 6. Push

**Pushing** uploads your commits to GitHub.

```bash
git push
```

Now your teacher can see your work!

---

## Essential Git Commands

Here are the commands you'll use most often:

### Check Status

See which files have been changed:

```bash
git status
```

This shows:
- Files you've modified
- Files you've staged for commit
- Files Git isn't tracking

**Use this often!** It helps you understand what's going on.

### View History

See your commit history:

```bash
git log
```

Or for a shorter view:

```bash
git log --oneline
```

### Typical Workflow

Here's what you'll type for most assignments:

```bash
# 1. Check what's changed
git status

# 2. Stage your changes
git add .

# 3. Commit with a descriptive message
git commit -m "Complete Exercise 2 - HTML page"

# 4. Push to GitHub
git push

# 5. Verify it worked
git status
```

---

## Working with Branches (Optional Preview)

For this course, you'll mostly work on the `main` branch. But it's good to know about **branches**!

A branch is like a parallel universe for your code. You can:
- Create a branch to experiment with new features
- Keep your main code safe while you try things
- Merge the branch back if your experiment worked

Later in the course, you might use branches for bigger projects.

---

## Common Scenarios

### Scenario 1: Making Your First Commit

```bash
# You've completed an exercise and want to save your work

git status              # See what's changed
git add .               # Stage all changes
git commit -m "Complete Git practice exercise"
git push                # Upload to GitHub
```

### Scenario 2: Checking Your Work

```bash
# See what you've changed since the last commit

git status              # See changed files
git diff                # See exactly what lines changed
```

### Scenario 3: Starting a Work Session

```bash
# Make sure you have the latest code

git pull                # Download any changes from GitHub
```

---

## Common Pitfalls

### Pitfall 1: Forgetting to Commit

❌ Making lots of changes without committing

✅ Commit after each logical chunk of work (like completing an exercise)

### Pitfall 2: Vague Commit Messages

❌ `git commit -m "changes"`

✅ `git commit -m "Add image and styling to profile page"`

### Pitfall 3: Not Checking Status

❌ Running `git add` and `git commit` without knowing what's changed

✅ Always run `git status` first to see what you're about to commit

---

## Practice Questions

Test your understanding:

1. **What's the difference between `git add` and `git commit`?**
   <details>
   <summary>Click to reveal answer</summary>
   `git add` stages files for the next commit. `git commit` actually creates the snapshot with those staged files.
   </details>

2. **When should you push to GitHub?**
   <details>
   <summary>Click to reveal answer</summary>
   After you've committed your work and want to back it up or share it with others (like your teacher).
   </details>

3. **How can you see what files you've changed?**
   <details>
   <summary>Click to reveal answer</summary>
   Run `git status` to see changed files, or `git diff` to see the specific changes.
   </details>

---

## Summary

You've learned:
- ✅ What version control is and why it matters
- ✅ The Git workflow: fork → clone → change → stage → commit → push
- ✅ Essential Git commands: `status`, `add`, `commit`, `push`, `log`
- ✅ How to write good commit messages

---

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub's Git Guide](https://github.com/git-guides)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
- [Git Cheatsheet](../../resources/cheatsheets/git-cheatsheet.md)

---

**Next Lesson:** [HTML Fundamentals →](./02-html-fundamentals.md)
