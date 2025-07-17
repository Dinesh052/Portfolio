# Deployment Guide

## GitHub Pages Deployment

This portfolio is configured for easy deployment to GitHub Pages. Follow these steps:

### 1. Create GitHub Repository

1. Create a new repository on GitHub (e.g., `portfolio`)
2. Don't initialize with README, .gitignore, or license (we already have them)

### 2. Connect Local Repository

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website with crumpled paper theme"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Update Configuration

1. Update `package.json` homepage field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio"
   ```

2. Update `vite.config.js` base field:
   ```javascript
   base: '/portfolio/'
   ```

### 4. Deploy

#### Option A: Manual Deployment
```bash
npm run deploy
```

#### Option B: Automatic Deployment (Recommended)
The repository includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the main branch. Just push your changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

### 5. Configure GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select source: "Deploy from a branch"
4. Select branch: "gh-pages"
5. Select folder: "/ (root)"
6. Save

Your portfolio will be available at: `https://YOUR_USERNAME.github.io/portfolio`

## Local Development

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Customization Tips

- **Colors**: Modify CSS variables in `src/index.css`
- **Content**: Update resume information in each page component
- **Styling**: Enhance the paper theme by modifying the `.paper` classes
- **Navigation**: Add new pages by updating the `navItems` array in `Navigation.jsx`

## Performance

- ✅ Optimized images and assets
- ✅ Code splitting with React Router
- ✅ CSS variables for consistent theming
- ✅ Responsive design for all devices
- ✅ Smooth animations with Framer Motion
