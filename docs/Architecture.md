# Architecture Documentation

## Overview

The Open Thought Research website is built using a modern, scalable architecture based on Next.js 15 with the App Router, designed for optimal performance, maintainability, and developer experience.

## Technology Stack

### Core Framework
- **Next.js 15**: React framework with App Router for server-side rendering and static generation
- **React 19**: UI library with latest features (Server Components, Suspense)
- **TypeScript**: Type-safe development with strict mode enabled

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library built on Radix UI
- **Radix UI**: Unstyled, accessible component primitives
- **Geist Font**: Modern, clean typeface for UI

### Animation & Interaction
- **Framer Motion**: Production-ready motion library
- **GSAP**: Professional-grade animation toolkit
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **Lenis**: Smooth scroll library

### Forms & Validation
- **React Hook Form**: Performant form library
- **Zod**: TypeScript-first schema validation

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Staged file linting

### Testing
- **Vitest**: Unit testing framework
- **Playwright**: E2E testing framework
- **Testing Library**: React testing utilities

## Architecture Patterns

### 1. App Router Structure

```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx                # Homepage
├── (routes)/               # Route groups
│   ├── research/
│   ├── publications/
│   ├── projects/
│   ├── about/
│   └── ...
├── manifest.ts             # PWA manifest
├── robots.ts               # SEO robots
└── sitemap.ts              # Dynamic sitemap
```

### 2. Component Organization

**Atomic Design Inspired**

- **UI Components** (`components/ui/`): Basic building blocks (Button, Card, Input)
- **Layout Components** (`components/layout/`): Navigation, Footer
- **Section Components** (`components/sections/`): Page-specific sections
- **Animation Components** (`components/animations/`): Reusable animation wrappers
- **Three.js Components** (`components/three/`): 3D graphics components

### 3. Server vs Client Components

**Server Components (Default)**
- Used for static content
- Better performance (no JavaScript sent to client)
- Examples: Layout, Footer, Static sections

**Client Components ('use client')**
- Used for interactivity
- Examples: Navigation (with state), Forms, Animations, Three.js

### 4. Data Flow

```
┌─────────────────┐
│   Static Data   │
│  (Hardcoded)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Page Component │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Section/UI Comp │
└─────────────────┘
```

For future API integration:
```
┌─────────────────┐
│   API/CMS       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Server Actions │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Page Component │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Section/UI Comp │
└─────────────────┘
```

## Performance Optimization

### 1. Image Optimization
- Use Next.js `<Image>` component
- Automatic WebP/AVIF conversion
- Lazy loading by default
- Responsive images

### 2. Code Splitting
- Automatic route-based splitting
- Dynamic imports for heavy components
- React.lazy() for conditional components

### 3. Three.js Optimization
- Dynamic import (no SSR)
- Reduced particle count on mobile
- Disposed geometries and materials
- RequestAnimationFrame for smooth rendering

### 4. Font Optimization
- Variable fonts (Geist)
- Subset loading
- Font display swap
- Preconnect to font CDN

### 5. Bundle Optimization
- Tree shaking enabled
- Dead code elimination
- Minification in production
- Compression (gzip/brotli)

## Security

### Headers
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Content Security Policy
- Defined in `next.config.js`
- Restricts resource loading
- Prevents XSS attacks

### Input Validation
- Zod schema validation
- Server-side validation
- Sanitized user inputs

## Accessibility

### Implementation
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Skip links
- Alt text for images
- Color contrast (WCAG AA)
- Reduced motion support

### Testing
```bash
npm run test:a11y  # Accessibility tests
```

## SEO Implementation

### Static Metadata
```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {...},
  twitter: {...}
}
```

### Dynamic Sitemap
- Auto-generated from routes
- Updated on build
- Includes priority and change frequency

### Robots.txt
- Dynamic generation
- Allows all crawlers
- Points to sitemap

### Structured Data
- JSON-LD format
- Organization schema
- Article schema for publications

## Error Handling

### Error Boundaries
```typescript
// error.tsx in each route
export default function Error({ error, reset }) {
  return <ErrorUI error={error} reset={reset} />
}
```

### 404 Handling
- Custom `not-found.tsx`
- Helpful navigation
- Search functionality

### Loading States
```typescript
// loading.tsx in each route
export default function Loading() {
  return <LoadingSkeleton />
}
```

## State Management

### Server State
- Next.js cache
- React Server Components

### Client State
- React useState for local state
- React Context for global state (theme)
- Form state via React Hook Form

### URL State
- Search params
- Route parameters
- Query strings

## Testing Strategy

### Unit Tests (Vitest)
```bash
tests/components/      # Component tests
tests/hooks/          # Hook tests
tests/lib/            # Utility tests
```

### Integration Tests
```bash
tests/integration/    # Multi-component tests
```

### E2E Tests (Playwright)
```bash
tests/e2e/           # Full user flow tests
```

### Coverage Goals
- Components: >80%
- Utilities: >90%
- Critical paths: 100%

## Deployment

### Build Process
1. Type checking
2. Linting
3. Testing
4. Building
5. Optimization

### CI/CD Pipeline
```yaml
- Lint
- Test
- Build
- Deploy to staging
- E2E tests on staging
- Deploy to production
```

### Environment Strategy
- Development: Local
- Staging: Vercel Preview
- Production: Vercel Production

## Monitoring & Analytics

### Performance Monitoring
- Core Web Vitals tracking
- Error tracking (Sentry integration ready)
- Analytics (GA4 ready)

### Logging
- Server-side errors
- Client-side errors
- Performance metrics

## Future Enhancements

### Phase 2
- CMS integration (Sanity/Contentful)
- Blog with MDX
- Search functionality
- Multi-language support

### Phase 3
- User authentication
- Member portal
- Interactive demos
- Real-time collaboration tools

## Maintenance

### Updates
- Dependencies: Monthly security updates
- Next.js: Quarterly major updates
- React: As needed for features

### Monitoring
- Uptime monitoring
- Performance regression detection
- Broken link checking

---

For questions about architecture decisions, contact the development team.
