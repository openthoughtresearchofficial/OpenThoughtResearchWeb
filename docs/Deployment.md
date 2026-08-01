# Deployment Guide

## Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm
- Git

## Environment Variables

Create a `.env.production` file:

```env
NEXT_PUBLIC_SITE_URL=https://openthought.research
NEXT_PUBLIC_GA_ID=your-ga-id
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Setup

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login**
```bash
vercel login
```

3. **Deploy**
```bash
# Production
vercel --prod

# Preview
vercel
```

#### Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["sfo1"]
}
```

#### Environment Variables

Add in Vercel Dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add each variable

### Option 2: Docker

#### Build Image

```bash
docker build -t openthought-website .
```

#### Run Container

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://openthought.research \
  openthought-website
```

#### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://openthought.research
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

### Option 3: Static Export

For static hosting (Netlify, Cloudflare Pages, etc.):

1. **Update next.config.js**
```javascript
module.exports = {
  output: 'export',
  // ...rest of config
}
```

2. **Build**
```bash
npm run build
```

3. **Deploy `out/` directory**

**Note:** Some features require a server:
- API Routes
- ISR
- Server Components with dynamic data

### Option 4: Custom Server

#### Node.js

```bash
# Build
npm run build

# Start
npm start
```

#### PM2 (Process Manager)

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "openthought" -- start

# Save process list
pm2 save

# Setup startup script
pm2 startup
```

#### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name openthought.research;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Build Optimization

### Analyze Bundle

```bash
# Install analyzer
npm install @next/bundle-analyzer

# Run analysis
ANALYZE=true npm run build
```

### Environment-specific Builds

```bash
# Development
npm run dev

# Production
npm run build && npm start

# Test build locally
npm run build && NODE_ENV=production npm start
```

## Performance Checklist

Before deploying, verify:

- [ ] Images optimized
- [ ] Fonts subset and optimized
- [ ] Unused dependencies removed
- [ ] Bundle size acceptable
- [ ] Lighthouse score >90
- [ ] All tests passing
- [ ] Security headers configured
- [ ] CSP implemented
- [ ] Sitemap generated
- [ ] Robots.txt configured

## Post-Deployment

### 1. Verify Deployment

```bash
# Check homepage
curl https://openthought.research

# Check specific routes
curl https://openthought.research/research
curl https://openthought.research/about
```

### 2. Run Lighthouse Audit

```bash
npx lighthouse https://openthought.research --view
```

### 3. Check SEO

- Test sitemap: `/sitemap.xml`
- Test robots: `/robots.txt`
- Verify meta tags
- Test social sharing (OpenGraph)

### 4. Monitor

Set up monitoring for:
- Uptime
- Performance metrics
- Error tracking
- Analytics

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## Rollback Strategy

### Vercel

```bash
# List deployments
vercel list

# Promote a previous deployment
vercel promote <deployment-url>
```

### Docker

```bash
# Tag previous version
docker tag openthought-website:latest openthought-website:v1.0.0

# Rollback
docker run -d -p 3000:3000 openthought-website:v1.0.0
```

### Git

```bash
# Revert to previous commit
git revert HEAD
git push origin main
```

## Troubleshooting

### Build Fails

1. Check Node.js version
2. Clear `.next` folder
3. Delete `node_modules` and reinstall
4. Check for TypeScript errors

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Runtime Errors

1. Check environment variables
2. Verify API endpoints
3. Check server logs
4. Test locally with production build

```bash
npm run build
NODE_ENV=production npm start
```

### Performance Issues

1. Check bundle size
2. Optimize images
3. Enable compression
4. Use CDN for static assets
5. Implement caching headers

## Monitoring & Maintenance

### Uptime Monitoring

Services to consider:
- UptimeRobot
- Pingdom
- StatusCake

### Error Tracking

Integration ready for:
- Sentry
- Bugsnag
- Rollbar

### Analytics

Integration ready for:
- Google Analytics 4
- Plausible
- Fathom

### Performance Monitoring

- Vercel Analytics
- Cloudflare Analytics
- New Relic

## Security

### SSL/TLS

Ensure HTTPS is enabled:
- Vercel: Automatic
- Custom: Let's Encrypt

### Security Headers

Configured in `next.config.js`:
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- CSP

### Regular Updates

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Security audit
npm audit
npm audit fix
```

## Backup Strategy

### Database (if applicable)

```bash
# Daily automated backups
# Weekly full backups
# Monthly archive
```

### Code

- Git repository (GitHub/GitLab)
- Multiple branches
- Tagged releases

### Assets

- Cloud storage backup
- CDN backup
- Local backup

## Support

For deployment issues:
- Email: devops@openthought.research
- Slack: #deployment
- Documentation: /docs

---

For production deployment checklist, see [Production Checklist](./ProductionChecklist.md)
