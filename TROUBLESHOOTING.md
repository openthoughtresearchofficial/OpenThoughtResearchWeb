# Troubleshooting Guide

## Installation Issues

### Issue: Dependency Conflict Error

**Error Message:**
```
npm error ERESOLVE unable to resolve dependency tree
npm error peer react@">=18 <19" from @react-three/fiber
```

**Cause:** React Three Fiber currently only supports React 18, not React 19.

**Solution:**

#### Option 1: Use Installation Script (Recommended for Windows)
```powershell
.\install.ps1
```

#### Option 2: Manual Installation
```bash
# Remove old files
rm -rf node_modules package-lock.json .next

# Install with legacy peer deps
npm install --legacy-peer-deps
```

#### Option 3: Use Yarn
```bash
yarn install
```

#### Option 4: Use pnpm
```bash
pnpm install
```

---

## Common Errors

### 1. 'next' is not recognized

**Error:**
```
'next' is not recognized as an internal or external command
```

**Cause:** Dependencies not installed or node_modules corrupted.

**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

### 2. Font Import Error

**Error:**
```
Module not found: Can't resolve 'geist/font/sans'
```

**Solution:** Already fixed! We're now using Inter from Google Fonts.

---

### 3. TypeScript Errors

**Error:**
```
Type error: Cannot find module '@/...'
```

**Solution:**
```bash
# Regenerate TypeScript definitions
rm -rf .next
npm run dev
```

---

### 4. Three.js Window Error

**Error:**
```
ReferenceError: window is not defined
```

**Solution:** Already handled with dynamic imports. If you see this:
```tsx
// Make sure Three.js components use dynamic import
const Scene = dynamic(() => import('@/components/three/scene'), { ssr: false })
```

---

### 5. Build Errors

**Error:**
```
Error: Failed to compile
```

**Solutions:**

1. **Clear cache and rebuild:**
```bash
rm -rf .next
npm run build
```

2. **Check TypeScript:**
```bash
npx tsc --noEmit
```

3. **Check for ESLint errors:**
```bash
npm run lint
```

---

## Development Issues

### Hot Reload Not Working

**Solution:**
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

---

### Port Already in Use

**Error:**
```
Port 3000 is already in use
```

**Solution:**

#### Windows:
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F
```

#### Alternative: Use different port
```bash
# Run on port 3001
next dev -p 3001
```

---

### Styling Not Applied

**Solution:**

1. **Check Tailwind config:**
```bash
# Verify tailwind.config.ts exists
ls tailwind.config.ts
```

2. **Restart dev server:**
```bash
npm run dev
```

3. **Clear browser cache:**
- Chrome: Ctrl+Shift+Delete
- Firefox: Ctrl+Shift+Delete

---

## Performance Issues

### Slow Development Server

**Solutions:**

1. **Reduce file watching:**
```javascript
// next.config.js
module.exports = {
  // ... other config
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  }
}
```

2. **Disable source maps (dev only):**
```javascript
// next.config.js
module.exports = {
  productionBrowserSourceMaps: false,
}
```

---

### High Memory Usage

**Solution:**
```bash
# Increase Node.js memory limit
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run dev
```

---

## Deployment Issues

### Vercel Deployment Fails

**Solutions:**

1. **Check build locally:**
```bash
npm run build
```

2. **Verify environment variables in Vercel dashboard**

3. **Check build logs in Vercel**

---

### Docker Build Fails

**Solutions:**

1. **Update Dockerfile for standalone output:**
```dockerfile
# Already configured in project
```

2. **Build with verbose output:**
```bash
docker build -t openthought-website . --progress=plain
```

---

## Testing Issues

### Vitest Tests Fail

**Solution:**
```bash
# Clear cache
rm -rf node_modules/.vitest

# Run tests again
npm test
```

---

### Playwright Tests Fail

**Solutions:**

1. **Install browsers:**
```bash
npx playwright install
```

2. **Run with debug:**
```bash
npx playwright test --debug
```

---

## Environment Variables

### Variables Not Loading

**Solution:**

1. **Check file name:**
   - Development: `.env.local`
   - Production: `.env.production`

2. **Restart server after changing env variables**

3. **Verify NEXT_PUBLIC_ prefix for client-side variables:**
```env
# Client-side (accessible in browser)
NEXT_PUBLIC_SITE_URL=https://example.com

# Server-side only
API_SECRET=secret123
```

---

## Node Version Issues

### Wrong Node Version

**Error:**
```
The engine "node" is incompatible with this module
```

**Solution:**

1. **Check Node version:**
```bash
node -v
# Should be 18.x or later
```

2. **Use nvm (Node Version Manager):**
```bash
# Install nvm from https://github.com/nvm-sh/nvm

# Install Node 18
nvm install 18

# Use Node 18
nvm use 18
```

---

## Package Manager Issues

### npm vs yarn vs pnpm

**Recommended:** Use the same package manager throughout.

**If switching:**
```bash
# Remove lock files
rm package-lock.json  # npm
rm yarn.lock          # yarn
rm pnpm-lock.yaml     # pnpm

# Remove node_modules
rm -rf node_modules

# Install with your chosen manager
npm install --legacy-peer-deps
# OR
yarn install
# OR
pnpm install
```

---

## Quick Fixes Checklist

When something breaks, try these in order:

1. ☐ Clear `.next` folder
   ```bash
   rm -rf .next
   ```

2. ☐ Restart dev server
   ```bash
   npm run dev
   ```

3. ☐ Clear node_modules and reinstall
   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

4. ☐ Check for TypeScript errors
   ```bash
   npx tsc --noEmit
   ```

5. ☐ Check for ESLint errors
   ```bash
   npm run lint
   ```

6. ☐ Clear browser cache

7. ☐ Restart your IDE/editor

---

## Getting Help

### Before Asking for Help

Provide:
- Error message (full stack trace)
- Node version (`node -v`)
- npm version (`npm -v`)
- Operating system
- Steps to reproduce
- What you've already tried

### Where to Get Help

- 📧 Email: dev@openthought.research
- 🐛 GitHub Issues: Create an issue
- 📚 Documentation: Check `/docs` folder
- 💬 Community: GitHub Discussions

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

*Last Updated: 2024*
