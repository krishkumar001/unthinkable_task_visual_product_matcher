# Troubleshooting Guide

## 🔧 Common Issues & Solutions

### Installation Issues

#### Issue: `npm install` fails
**Symptoms**: Dependency installation errors, permission denied

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock
rm -rf node_modules package-lock.json

# Reinstall
npm install

# If still failing, try with legacy peer deps
npm install --legacy-peer-deps
```

#### Issue: Node version error
**Symptoms**: "engine node incompatible"

**Solution**:
```bash
# Check current version
node --version

# Need 14+ , update Node:
# Using nvm (recommended)
nvm install 18
nvm use 18

# Or download from nodejs.org
```

---

### Development Server Issues

#### Issue: Port 5173 already in use
**Symptoms**: "EADDRINUSE: address already in use"

**Solutions**:
```bash
# Find and kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

#### Issue: Changes not reflecting
**Symptoms**: Code changes don't appear in browser

**Solutions**:
```bash
# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

---

### Image Upload Issues

#### Issue: "Failed to load image" error
**Symptoms**: Error message after uploading

**Possible Causes & Solutions**:

1. **CORS Issue** (most common with URLs)
   - **Problem**: Image host blocks cross-origin requests
   - **Solution**: Use file upload instead, or use CORS-friendly sources like Unsplash
   - **Test**: Try this known working URL:
     ```
     https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400
     ```

2. **Invalid Image Format**
   - **Problem**: File is not a valid image
   - **Solution**: Use JPG, PNG, GIF, or WebP
   - **Check**: File extension should be image type

3. **Image Too Large**
   - **Problem**: Memory issues with very large images
   - **Solution**: Use images under 10MB
   - **Note**: App auto-resizes to 64x64 for processing

#### Issue: Upload button doesn't work
**Symptoms**: Nothing happens when clicking upload

**Solutions**:
```javascript
// Check browser console (F12) for errors
// Common issue: Browser blocking file input

// Workaround: Try the URL method instead
```

---

### Processing Issues

#### Issue: Processing takes too long (>30 seconds)
**Symptoms**: Spinner runs indefinitely

**Possible Causes**:
1. **Too many products**: Database has 55 items, each processed individually
2. **Large image**: Despite resizing, initial load can be slow
3. **Slow browser/device**: Older devices may struggle

**Solutions**:
```bash
# Check browser console for errors
# Reduce product count for testing:

# Edit src/data/products.js
# Keep only first 10 products temporarily
export const products = [
  /* first 10 items only */
];
```

#### Issue: All similarity scores are very low (<30%)
**Symptoms**: No good matches found

**Possible Causes**:
1. **Uploaded image is very different**: Try uploading a product from our database
2. **Image quality issue**: Try a higher-quality image
3. **Algorithm limitation**: Color histogram works best with similar-looking items

**Solution**: Try these test images guaranteed to work:
```
Laptop: https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400
Headphones: https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400
```

---

### Build Issues

#### Issue: `npm run build` fails
**Symptoms**: Build errors, import errors

**Solutions**:
```bash
# Check for syntax errors in code
# Common issue: missing imports

# Verify all dependencies installed
npm install

# Try clean build
rm -rf dist node_modules
npm install
npm run build
```

#### Issue: Build succeeds but app doesn't work
**Symptoms**: Blank page after deployment

**Solutions**:
```bash
# Test production build locally first
npm run preview

# Check browser console for errors
# Common issue: incorrect base path

# For GitHub Pages, update vite.config.js:
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```

---

### Deployment Issues

#### Issue: Vercel deployment fails
**Symptoms**: Build fails on Vercel

**Solutions**:
1. **Check build logs** on Vercel dashboard
2. **Verify package.json** has correct build script:
   ```json
   "scripts": {
     "build": "vite build"
   }
   ```
3. **Check Node version**: Vercel uses Node 18 by default
4. **Try local build first**: `npm run build` should work locally

#### Issue: Images not loading on deployed site
**Symptoms**: Works locally, broken on production

**Solutions**:
1. **CORS Issue**: Some image hosts block production domains
   - Use Unsplash images (CORS-friendly)
   - Or implement image proxy

2. **Check Network tab** in browser DevTools
   - See which images fail to load
   - Check status codes (403 = CORS, 404 = not found)

#### Issue: 404 on deployed Netlify site
**Symptoms**: Page refresh gives 404

**Solution**: Add `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Browser Compatibility Issues

#### Issue: Doesn't work on Safari
**Symptoms**: Features broken on iOS/Safari

**Solutions**:
1. **Check Canvas API support**: Should work on Safari 11+
2. **Check Console**: Safari has stricter security
3. **File upload**: May need different approach on iOS

#### Issue: Doesn't work on older browsers
**Symptoms**: Blank page, errors on IE11

**Solution**: This app requires modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Not compatible with IE11
- Use modern browser

---

### Performance Issues

#### Issue: App is slow on mobile
**Symptoms**: Laggy interface, slow processing

**Solutions**:
1. **Reduce image size** before upload
2. **Close other tabs** to free memory
3. **Use WiFi** instead of cellular for image URLs
4. **Try newer device** - processing requires decent CPU

#### Issue: High memory usage
**Symptoms**: Browser tab crashes

**Solutions**:
```bash
# Reduce product count for testing
# Or implement pagination:
# Process 10 products at a time instead of all 55
```

---

### Filter Issues

#### Issue: Filters don't work
**Symptoms**: Selecting category/similarity doesn't change results

**Solutions**:
1. **Check browser console** for JavaScript errors
2. **Verify results exist**: Need to upload image first
3. **Try resetting**: Remove image and upload again

---

## 🆘 Getting Help

### Before Asking for Help

1. **Check browser console** (F12) for error messages
2. **Try incognito mode** to rule out extensions
3. **Test with sample images** from this guide
4. **Verify dependencies** with `npm list`

### Debug Checklist

- [ ] Node version 14 or higher?
- [ ] All dependencies installed?
- [ ] No errors in browser console?
- [ ] Works with sample Unsplash URLs?
- [ ] Tried hard refresh (Ctrl+Shift+R)?
- [ ] Tested in different browser?

### Still Stuck?

1. **Check GitHub Issues**: Someone may have faced same issue
2. **Review documentation**: README.md, QUICKSTART.md
3. **Test production build locally**: `npm run build && npm run preview`

---

## 🐛 Debugging Tips

### Enable Verbose Logging

Add to components for debugging:
```javascript
console.log('Image uploaded:', imageUrl);
console.log('Processing started');
console.log('Similarity calculated:', similarity);
console.log('Results:', results);
```

### Test Individual Functions

```javascript
// Test image loading
const img = new Image();
img.onload = () => console.log('Image loaded successfully');
img.onerror = () => console.error('Image failed to load');
img.src = 'YOUR_IMAGE_URL';

// Test histogram calculation
import { getImageSimilarity } from './utils/imageSimilarity';
getImageSimilarity(url1, url2).then(score => console.log('Score:', score));
```

### Monitor Performance

```javascript
// Add to imageSimilarity.js
console.time('Total Processing');
// ... processing code ...
console.timeEnd('Total Processing');
```

---

## 📞 Contact & Support

If you're using this for the technical assessment and encounter issues:

1. **Document the issue**: Screenshot + error message
2. **Check this guide first**
3. **Try workarounds**: Use file upload if URL fails
4. **Mention in submission**: "Encountered X issue, solved with Y"

For reviewers: All known limitations are documented in DEMO_GUIDE.md

---

Remember: Most issues are environment-related (Node version, dependencies, browser). A fresh install often solves 90% of problems! 🔄
