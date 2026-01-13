@echo off
echo ========================================
echo Pushing to GitHub
echo ========================================
echo.

REM Check if git user is configured
git config user.name >nul 2>&1
if errorlevel 1 (
    echo Git user not configured. Please set:
    echo   git config --global user.name "Your Name"
    echo   git config --global user.email "your.email@example.com"
    pause
    exit /b 1
)

echo Creating initial commit...
git commit -m "Initial commit: British Education Consultants website - Static HTML and Next.js versions"

if errorlevel 1 (
    echo Commit failed. Please check git status.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Commit successful!
echo ========================================
echo.
echo Next steps:
echo 1. Create a new repository on GitHub: https://github.com/new
echo 2. Name it: bec-website (or your preferred name)
echo 3. DO NOT initialize with README, .gitignore, or license
echo 4. Then run these commands:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/bec-website.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo Or if you have GitHub CLI installed:
echo    gh repo create bec-website --public --source=. --remote=origin --push
echo.
pause
