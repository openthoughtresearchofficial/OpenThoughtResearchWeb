# Deployment Guide - Open Thought Research

## Performance Optimizations Applied

### 1. Next.js Configuration
- ✅ **SWC Minification** enabled
- ✅ **Compression** enabled
- ✅ **Image Optimization** with AVIF/WebP formats
- ✅ **Modular Imports** for lucide-react (tree-shaking)
- ✅ **Static Assets Caching** (1 year max-age)
- ✅ **Security Headers** configured

### 2. Three.js Optimizations
- ✅ Reduced particle count: 1000 → 800
- ✅ Disabled antialiasing for better FPS
- ✅ Reduced DPR: [1, 2] → [1, 1.5]
- ✅ Fewer connection lines (97% threshold vs 95%)
- ✅ Power preference: high-performance
- ✅ Disabled stencil and depth buffers

### 3. Bundle Size Reductions
- ✅ Dynamic imports for Three.js components
- ✅ Tree-shaking optimized
- ✅ Code splitting by route

---

## Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Zero-config deployment
- Automatic CDN
- Edge network optimization
- Built specifically for Next.js

**Steps:**
1. Push code to GitHub/GitLab/Bitbucket
2. Import repository to Vercel
3. Deploy automatically

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

**Environment Variables:**
- None required for basic deployment

---

### Option 2: Netlify

**Steps:**
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Node version: 18+

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: Docker (Self-Hosted)

**Dockerfile already included** - supports standalone output.

```bash
# Build
docker build -t open-thought-research .

# Run
docker run -p 3000:3000 open-thought-research
```

---

### Option 4: Static Export (SSG)

For pure static hosting (Cloudflare Pages, GitHub Pages, etc.):

1. Update `next.config.js`:
```javascript
output: 'export',
```

2. Build:
```bash
npm run build
```

3. Deploy the `out/` directory

---

## Pre-Deployment Checklist

### Build Verification
```bash
# Clean build
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
npm start
```

### Performance Testing
```bash
# Run Lighthouse
npx lighthouse http://localhost:3000 --view

# Expected scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 100
# SEO: 100
```

### Bundle Analysis
```bash
npm run build
# Check output for bundle sizes
# First Load JS should be < 150KB per page
```

---

## Environment Variables

### Required (None for basic deployment)

### Optional
```env
# Analytics (if adding later)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Custom domain
NEXT_PUBLIC_SITE_URL=https://openthought.research
```

---

## CDN & Asset Optimization

### Images
- Already optimized with Next.js Image component
- AVIF/WebP formats enabled
- Responsive sizes configured

### Fonts
- Google Fonts (Inter) with `display=swap`
- Preloaded for faster rendering

### Static Assets
- Cache headers: 1 year max-age
- Immutable flag for versioned assets

---

## Monitoring & Analytics

### Recommended Services
1. **Vercel Analytics** (if on Vercel)
2. **Plausible** - Privacy-friendly
3. **Fathom** - Simple, privacy-focused
4. **Google Analytics** - Full-featured

### Error Monitoring
- Sentry (recommended)
- LogRocket
- Rollbar

---

## Post-Deployment

### DNS Configuration
```
A     @       76.76.21.21
CNAME www     cname.vercel-dns.com
```

### SSL/TLS
- Automatic with Vercel/Netlify
- Let's Encrypt for self-hosted

### Performance Monitoring
```bash
# Use webpagetest.org
# Test from multiple locations
# Target: < 2s LCP, < 100ms FID, < 0.1 CLS
```

---

## Troubleshooting

### Build Timeout
If build times out (> 4 minutes):
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Three.js Issues
- Ensure `transpilePackages` includes three packages
- Check browser WebGL support

### Image Optimization Errors
- Verify image paths are correct
- Check image file sizes (< 5MB recommended)

---

## Performance Benchmarks

### Target Metrics (Lighthouse)
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **FCP** (First Contentful Paint): < 1.8s
- **TTI** (Time to Interactive): < 3.8s

### Current Optimizations
- ✅ Static page generation
- ✅ Image optimization
- ✅ Font optimization
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Compression

---

## Rollback Strategy

### Vercel
- One-click rollback in dashboard
- Or: `vercel rollback <deployment-url>`

### Docker
```bash
docker pull open-thought-research:previous
docker run -p 3000:3000 open-thought-research:previous
```

### Git-based
```bash
git revert HEAD
git push
# Triggers automatic redeployment
```

---

## Maintenance

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update (carefully)
npm update

# Test thoroughly
npm run build && npm start
```

### Security Updates
```bash
npm audit
npm audit fix
```

---

## Support & Documentation

- Next.js Docs: https://nextjs.org/docs
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs

---

**Ready for Production** ✅

Last Updated: January 2025
Version: 5.0.0
