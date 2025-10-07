# Contribution Guide

How to contribute to the production codebase during the final project phase.

## Before You Start

Make sure you have:
- ✅ Completed all 8 curriculum modules
- ✅ Cloned the project repository
- ✅ Set up the development environment
- ✅ Read the project's README and documentation
- ✅ Run the project locally successfully

## The Contribution Workflow

### 1. Find a Task

Look for tasks in:
- GitHub Issues labeled `good first issue` or `beginner-friendly`
- Your teacher's recommended tasks
- The project's task board or project management tool

**Claim the task:**
- Comment on the issue saying you want to work on it
- Wait for confirmation from a maintainer
- Ask questions if anything is unclear

### 2. Create a Branch

Always work on a new branch, never directly on `main`:

```bash
# Make sure you're on main and it's up to date
git checkout main
git pull

# Create and switch to a new branch
git checkout -b your-feature-branch

# Branch naming conventions (ask your project about their preferred style):
# fix/issue-description
# feature/new-feature-name
# docs/update-readme
```

**Example branch names:**
- `fix/navbar-mobile-alignment`
- `feature/add-dark-mode-toggle`
- `docs/update-setup-instructions`

### 3. Make Your Changes

**Best practices:**
- Keep changes focused on one task
- Follow the project's code style
- Add comments where code is complex
- Update documentation if needed
- Add or update tests

**Test your changes:**
```bash
# Run the dev server
npm run dev

# Run tests
npm test

# Run linter
npm run lint

# Fix formatting
npm run format
```

### 4. Commit Your Changes

**Commit frequently** with clear messages:

```bash
# Stage your changes
git add .

# Or stage specific files
git add src/components/Button.tsx

# Commit with a descriptive message
git commit -m "Fix button alignment on mobile devices"
```

**Good commit messages:**
- ✅ "Add user profile component"
- ✅ "Fix memory leak in useEffect hook"
- ✅ "Update README with new installation steps"

**Bad commit messages:**
- ❌ "changes"
- ❌ "fix stuff"
- ❌ "wip" (work in progress - okay for intermediate commits, but squash before PR)

### 5. Push Your Branch

```bash
# Push your branch to GitHub
git push -u origin your-feature-branch
```

If you make more commits later:
```bash
git push
```

### 6. Create a Pull Request

**On GitHub:**
1. Navigate to the repository
2. Click "Pull requests" → "New pull request"
3. Select your branch
4. Fill out the PR template (if there is one)

**PR Title:** Clear and descriptive
- ✅ "Add search functionality to product page"
- ✅ "Fix: Resolve navbar overlap on mobile"
- ❌ "Update"

**PR Description should include:**
- **What:** What does this PR do?
- **Why:** Why is this change needed?
- **How:** How does it work? (if complex)
- **Testing:** How did you test it?
- **Screenshots:** If it's a visual change

**Example PR description:**
```markdown
## What
Adds a search bar to the product listing page.

## Why
Users need a way to quickly find products without scrolling through the entire list.

## How
- Added SearchBar component
- Implemented fuzzy search algorithm
- Added debouncing to prevent excessive filtering

## Testing
- Tested with 100+ products
- Works on mobile and desktop
- Checked accessibility with screen reader

## Screenshots
[Screenshot of search bar]
```

### 7. Respond to Code Review

Maintainers will review your code and may:
- ✅ Approve it immediately (great job!)
- 💬 Ask questions
- 🔧 Request changes

**How to respond:**

**If questions are asked:**
- Answer clearly and thoroughly
- Ask for clarification if you don't understand
- Be open to learning

**If changes are requested:**
1. Make the requested changes
2. Commit them to your branch
3. Push to update the PR
   ```bash
   git add .
   git commit -m "Address code review feedback"
   git push
   ```
4. Reply to the review comment when done

**Example responses:**
- ✅ "Good catch! I've updated the error handling as you suggested."
- ✅ "I wasn't sure about this approach - could you explain why the other way is better?"
- ✅ "Done! Let me know if anything else needs changing."

### 8. Merge and Celebrate! 🎉

Once approved:
- A maintainer will merge your PR
- Your code is now in production!
- Delete your branch (GitHub will prompt you)

**Locally, clean up:**
```bash
git checkout main
git pull
git branch -d your-feature-branch
```

## Code Review Tips

### Receiving Feedback

**Do:**
- ✅ Thank reviewers for their time
- ✅ Ask questions if you don't understand
- ✅ Learn from the feedback
- ✅ Make requested changes promptly

**Don't:**
- ❌ Take it personally - it's about the code
- ❌ Argue defensively - be open to learning
- ❌ Ignore feedback - address all comments
- ❌ Rush changes - take time to do it right

### Common Feedback Types

**Style/Formatting:**
> "Can you use const instead of let here?"

This is about following project conventions. Easy to fix!

**Logic Issues:**
> "This could cause a bug if the array is empty"

This prevents problems. Important to address!

**Performance:**
> "This loops through the array twice unnecessarily"

Helps make your code more efficient. Great learning opportunity!

**Best Practices:**
> "Consider extracting this into a separate function"

Makes code more maintainable. Learn the pattern!

## Working with the Team

### Communication

**Use GitHub:**
- Comment on issues you're working on
- Ask questions in PR comments
- Tag people with `@username` when you need help

**Be clear and specific:**
- ❌ "It doesn't work"
- ✅ "The search bar returns no results when searching for 'test', even though there are products with that name"

### Pair Programming

Working with another student? Great!

**Driver-Navigator pattern:**
- **Driver** - Types the code
- **Navigator** - Reviews, suggests, catches errors
- Switch roles every 15-20 minutes

**Use:**
- VS Code Live Share
- Screen sharing during class
- Commit together: `Co-authored-by: Name <email@example.com>`

### Asking for Help

**Before asking:**
1. Try to solve it yourself (15-30 minutes)
2. Search the codebase for similar code
3. Check documentation
4. Search online (Stack Overflow, etc.)

**When asking:**
- Explain what you're trying to do
- Show what you've tried
- Include error messages
- Share relevant code

**Example:**
```
I'm trying to add a loading spinner to the search results, but it's not
showing up. I added the Spinner component and set isLoading to true, but
nothing appears.

Here's my code: [code snippet]

Error in console: "Cannot read property 'isLoading' of undefined"

I tried checking if the Spinner component works on its own (it does), and
verified that isLoading is a boolean. Not sure what I'm missing!
```

## Common Workflows

### Syncing with Main

If main has changed while you're working:

```bash
# Save your work first
git add .
git commit -m "WIP: Save current progress"

# Get latest from main
git checkout main
git pull

# Go back to your branch
git checkout your-feature-branch

# Merge main into your branch
git merge main

# Resolve any conflicts if they occur
# Then continue working
```

### Fixing Mistakes

**Made a commit you want to undo?**
```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Undo last commit and discard changes (careful!)
git reset --hard HEAD~1
```

**Want to update your last commit?**
```bash
# Stage new changes
git add .

# Amend the previous commit
git commit --amend

# If you already pushed, you'll need to force push (ask first!)
git push --force
```

## Best Practices

### Code Quality

- **Write tests** - Don't skip this!
- **Follow conventions** - Match the existing code style
- **Keep it simple** - Don't overcomplicate
- **Comment when needed** - Explain the "why", not the "what"
- **Clean up** - Remove console.logs, unused imports, commented code

### Git Hygiene

- **Small commits** - Easier to review and understand
- **Meaningful messages** - Explain what and why
- **One feature per PR** - Don't mix unrelated changes
- **Sync often** - Pull from main regularly
- **Clean history** - Squash "fix typo" commits before merging

### Being a Good Team Member

- **Be respectful** - Everyone is learning
- **Be patient** - Reviews take time
- **Be helpful** - Answer questions when you can
- **Be open** - Accept feedback gracefully
- **Communicate** - Keep people updated on your progress

---

## You're Ready!

Remember:
- Everyone makes mistakes - it's how we learn
- Asking questions shows you care about doing it right
- Code review makes everyone better
- Your contributions matter, no matter how small

**Now go build something amazing! 🚀**
