# How to Keep Your Fork Up-to-Date

This guide explains how to keep your forked repository synchronized with the original (upstream) repository.

## Initial Setup (One-time only)

If you haven't already set up the upstream remote, you need to add it:

```bash
# Navigate to your local repository
cd "path/to/your/repo"

# Add the upstream remote (replace with the original repo URL)
git remote add upstream https://github.com/maheshRudra2025/dsa_virtual_lab.git

# Verify remotes
git remote -v
```

You should see:

- `origin` - pointing to your fork
- `upstream` - pointing to the original repository

## Regular Sync Process

Follow these steps whenever you want to sync your fork:

### Step 1: Fetch Latest Changes from Upstream

```bash
git fetch upstream
```

This downloads the latest changes from the original repository without merging them.

### Step 2: Switch to Your Main Branch

```bash
git checkout main
```

Make sure you're on your main branch before merging.

### Step 3: Merge Upstream Changes

```bash
git merge upstream/main
```

This merges the latest changes from the upstream main branch into your local main branch.

### Step 4: Push to Your Fork

```bash
git push origin main
```

This updates your fork on GitHub with the latest changes.

## Alternative: Using Git Pull

You can also use a single command to fetch and merge:

```bash
git checkout main
git pull upstream main
git push origin main
```

## Sync Your Feature Branches (Optional)

If you have other branches that you want to update:

```bash
# Switch to your feature branch
git checkout your-feature-branch

# Merge or rebase with the updated main
git merge main
# OR
git rebase main

# Push the updated feature branch
git push origin your-feature-branch
```

## Best Practices

1. **Sync Regularly**: Sync your fork at least once a week or before starting new work.

2. **Clean Working Directory**: Make sure you have no uncommitted changes before syncing:

   ```bash
   git status
   git stash  # if you have uncommitted changes
   ```

3. **Create Feature Branches**: Always create new branches for your work instead of working directly on main:

   ```bash
   git checkout -b new-feature-branch
   ```

4. **Sync Before Creating PRs**: Always sync your fork before creating a new pull request.

## Troubleshooting

### Merge Conflicts

If you encounter merge conflicts during sync:

1. Git will mark conflicted files
2. Open the files and resolve conflicts manually
3. Add the resolved files: `git add filename`
4. Complete the merge: `git commit`
5. Push: `git push origin main`

### Force Push (Use with Caution)

If your fork's history has diverged significantly:

```bash
git checkout main
git reset --hard upstream/main
git push origin main --force
```

**Warning**: This will overwrite your fork's main branch history. Only use if you're sure you don't need your local changes.

## Using GitHub CLI (Alternative)

If you have GitHub CLI installed:

```bash
gh repo sync owner/repo-name
```

## Automation

You can set up GitHub Actions to automatically sync your fork. Create `.github/workflows/sync-fork.yml`:

```yaml
name: Sync Fork
on:
  schedule:
    - cron: "0 0 * * 0" # Weekly
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      - name: Sync upstream
        run: |
          git remote add upstream https://github.com/original-owner/original-repo.git
          git fetch upstream
          git checkout main
          git merge upstream/main
          git push origin main
```

## Summary

To keep your fork up-to-date, remember these key commands:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

Run these commands regularly to stay synchronized with the original repository!
