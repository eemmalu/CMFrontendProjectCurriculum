# Git Cheatsheet

Quick reference for common Git commands.

## Setup

```bash
# Set your name and email (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Getting Started

```bash
# Clone a repository
git clone <repository-url>

# Check the status of your repository
git status

# See what branch you're on
git branch
```

## Making Changes

```bash
# See what you've changed
git status
git diff

# Stage all changes
git add .

# Stage specific files
git add filename.html
git add folder/

# Commit staged changes
git commit -m "Descriptive message about what you changed"

# Add and commit in one step (only for tracked files)
git commit -am "Message"
```

## Syncing with GitHub

```bash
# Download changes from GitHub
git pull

# Upload your commits to GitHub
git push

# Push and set upstream (first time pushing a new branch)
git push -u origin branch-name
```

## Viewing History

```bash
# See commit history
git log

# See condensed history
git log --oneline

# See last 5 commits
git log -5

# See changes in each commit
git log -p

# See who changed what in a file
git blame filename.html
```

## Branches

```bash
# List all branches
git branch

# Create a new branch
git branch branch-name

# Switch to a branch
git checkout branch-name

# Create and switch to a new branch
git checkout -b branch-name

# Delete a branch
git branch -d branch-name

# Merge a branch into current branch
git merge branch-name
```

## Undoing Changes

```bash
# Discard changes in a file (before staging)
git checkout -- filename.html

# Unstage a file (keep the changes)
git reset filename.html

# Unstage all files
git reset

# Undo last commit but keep changes
git reset --soft HEAD~1

# View changes that would be pulled
git fetch
git diff HEAD..origin/main
```

## Getting Help

```bash
# Get help for a command
git help <command>
git <command> --help

# Quick help
git <command> -h
```

## Common Workflows

### Daily Work Cycle

```bash
git pull              # Get latest changes
# ... make your changes ...
git status            # See what you changed
git add .             # Stage your changes
git commit -m "..."   # Commit with a message
git push              # Upload to GitHub
```

### Starting a New Feature

```bash
git checkout main
git pull
git checkout -b new-feature
# ... work on your feature ...
git add .
git commit -m "Add new feature"
git push -u origin new-feature
```

## Tips

- **Commit often:** Small, frequent commits are better than large ones
- **Write good messages:** Describe *what* and *why*, not *how*
- **Pull before push:** Always pull before pushing to avoid conflicts
- **Check status:** Run `git status` frequently to know where you are

## Good Commit Messages

✅ **Good:**
- "Add user login form"
- "Fix navbar alignment on mobile"
- "Update README with setup instructions"

❌ **Bad:**
- "changes"
- "stuff"
- "asdfgh"
- "fixed bug" (which bug?)
