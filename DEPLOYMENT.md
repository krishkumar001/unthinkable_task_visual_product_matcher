# Deployment Guide

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Option 1: Deploy from GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-github-repo-url]
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"
7. Your app will be live in ~2 minutes!

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Netlify

### Option 1: Drag & Drop

```bash
# Build your project
npm run build

# Go to netlify.com/drop
# Drag the 'dist' folder
# Done!
```

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Option 3: Connect GitHub

1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

## Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Update vite.config.js to add base:
export default defineConfig({
  plugins: [react()],
  base: '/visual-product-matcher/'
})

# Deploy
npm run deploy
```

## Environment Variables

No environment variables needed! Everything runs client-side.

## Post-Deployment Checklist

- [ ] Test image upload functionality
- [ ] Test URL input
- [ ] Verify mobile responsiveness
- [ ] Check all 55 products load correctly
- [ ] Test filtering features
- [ ] Update README with live URL
- [ ] Test on different browsers (Chrome, Firefox, Safari)

## Troubleshooting

### Images not loading
- Check CORS settings for image URLs
- Verify Unsplash images are accessible
- Check browser console for errors

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node version (requires Node 14+)

### App not loading after deployment
- Verify build command is `npm run build`
- Verify publish directory is `dist`
- Check deployment logs for errors
