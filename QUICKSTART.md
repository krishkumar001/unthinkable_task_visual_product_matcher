# Quick Start Guide

## 🚀 Get Running in 3 Minutes

### Prerequisites
- Node.js 14+ installed
- npm or yarn

### Installation

```bash
# 1. Extract/Clone the project
cd visual-product-matcher

# 2. Install dependencies (takes ~1 minute)
npm install

# 3. Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### First Test

1. Click "Upload File" 
2. Select any product image (try a phone, shoe, or laptop)
3. Wait 3-5 seconds for processing
4. See similar products ranked by visual similarity!

### Try These Test Images

Use these Unsplash URLs to test:
- Laptop: `https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400`
- Headphones: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400`
- Sneakers: `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy Now

```bash
# Deploy to Vercel (easiest)
npm i -g vercel
vercel
```

## 📚 Next Steps

- Read `README.md` for full documentation
- Check `DEPLOYMENT.md` for detailed deployment options
- Review `TECHNICAL_APPROACH.md` for implementation details

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
# Kill the process
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
# Check Node version (needs 14+)
node --version

# Update Node if needed
```

## 💡 Tips

- Use Chrome DevTools to see image processing in real-time
- Try different similarity thresholds to refine results
- Upload high-quality, well-lit product images for best results
- The app works completely offline after initial load!

Happy coding! 🎉
