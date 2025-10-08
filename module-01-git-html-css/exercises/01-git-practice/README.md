# Exercise 1: Git Practice

**Difficulty:** ⭐ Beginner
**Estimated Time:** 15 minutes

## Objective

Practice the basic Git workflow: making changes, staging, committing, and pushing to GitHub.

## Instructions

1. **Make a change** to the `practice-file.txt` in this directory
   - Add your name on the first line
   - Add your favorite programming language on the second line
   - Add today's date on the third line

2. **Check the status** of your repository:
   ```bash
   git status
   ```
   You should see `practice-file.txt` listed as modified.

3. **View your changes:**
   ```bash
   git diff
   ```
   This shows exactly what you changed.

4. **Stage your changes:**
   ```bash
   git add .
   ```
   Or specifically:
   ```bash
   git add module-01-git-html-css/exercises/01-git-practice/practice-file.txt
   ```

5. **Check status again:**
   ```bash
   git status
   ```
   Now the file should be shown in green, ready to commit!

6. **Commit your changes:**
   ```bash
   git commit -m "Complete Exercise 1 - Git practice"
   ```

7. **Push to GitHub:**
   ```bash
   git push
   ```

8. **Verify on GitHub:**
   - Go to your repository on GitHub
   - Navigate to this file
   - You should see your changes!

## Success Criteria

You'll know you succeeded when:
- [ ] You can see your commit on GitHub
- [ ] The `practice-file.txt` shows your name, favorite language, and date
- [ ] You understand the workflow: change → add → commit → push

## Learning Goals

This exercise helps you:
- Practice the Git workflow you'll use for all assignments
- Understand what `git status`, `git add`, and `git commit` do
- Get comfortable with the command line

## Bonus Challenge

Try these additional Git commands:

```bash
# View your commit history
git log

# View a shorter version
git log --oneline

# View who changed what in the file
git blame practice-file.txt
```

## Troubleshooting

**Problem:** `git push` asks for a password

**Solution:** You might need to set up SSH keys or use a personal access token. Ask your teacher for help, or see the [SETUP.md](../../../SETUP.md) troubleshooting section.

---

**Problem:** Can't find the file

**Solution:** Make sure you're in the correct directory. Use `pwd` to see where you are, and `cd` to navigate to the right folder.

---

**Next Exercise:** [Exercise 2: Build an HTML Page →](../02-html-page/)
