# Push to GitHub - Instructions

Your repository is initialized and files are staged. Follow these steps:

## Step 1: Set Git User (if not already set)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 2: Create Initial Commit
```bash
git commit -m "Initial commit: British Education Consultants website - Static HTML and Next.js versions"
```

## Step 3: Create GitHub Repository

### Option A: Using GitHub CLI (if installed)
```bash
gh repo create bec-website --public --source=. --remote=origin --push
```

### Option B: Using GitHub Website
1. Go to https://github.com/new
2. Repository name: `bec-website` (or your preferred name)
3. Description: "British Education Consultants - Professional website with static HTML and Next.js versions"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 4: Connect and Push
After creating the repo on GitHub, run:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/bec-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Alternative: If you prefer SSH
```bash
git remote add origin git@github.com:YOUR_USERNAME/bec-website.git
git branch -M main
git push -u origin main
```

## What's Included
- ✅ Static HTML website (working version)
- ✅ Next.js website (with Windows compatibility fixes)
- ✅ All brand materials and brochures
- ✅ Complete .gitignore file
- ✅ README.md
