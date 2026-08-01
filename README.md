# Open Thought Research Website

> Building the Future of Thought

A premium, production-ready website for Open Thought Research—an independent AI research institute dedicated to advancing intelligence through artificial intelligence, computational reasoning, and scientific discovery.

## 🚀 Features

- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom monochrome design system
- **shadcn/ui** component library with Radix UI primitives
- **Three.js** particle system with React Three Fiber
- **Framer Motion** for smooth animations
- **Lenis** for smooth scrolling
- **Responsive Design** across all devices
- **SEO Optimized** with metadata, sitemap, and robots.txt
- **Accessibility** WCAG AA compliant
- **Testing** with Vitest and Playwright
- **Type-safe Forms** with React Hook Form and Zod

## 📁 Project Structure

```
├── app/                        # Next.js App Router pages
│   ├── (routes)/              # Page routes
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── manifest.ts            # PWA manifest
│   ├── robots.ts              # Robots.txt
│   └── sitemap.ts             # Dynamic sitemap
├── components/                # React components
│   ├── animations/            # Animation components
│   ├── layout/                # Layout components
│   ├── sections/              # Page sections
│   ├── three/                 # Three.js components
│   └── ui/                    # UI components
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── public/                    # Static assets
│   └── assets/                # Images, icons, logos
├── tests/                     # Test files
│   ├── components/            # Component tests
│   └── e2e/                   # E2E tests
└── docs/                      # Documentation

```

## 🎨 Design System

### Colors (Monochrome)

- Black: `#000000`
- Grays: `#090909`, `#111111`, `#181818`, `#222222`, `#2E2E2E`, `#666666`, `#B8B8B8`
- White: `#FFFFFF`

### Typography

- Sans: Geist Sans, Inter, system-ui
- Mono: Geist Mono, IBM Plex Mono, monospace

### Spacing & Layout

- Maximum content width: 1280px (7xl)
- Consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Large whitespace for editorial feel

## 🛠 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/openthought/website.git
cd website

# Clean install (Windows PowerShell)
.\install.ps1

# OR manually with legacy peer deps
npm install --legacy-peer-deps

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run unit tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run linting
npm run lint
```

## 📝 Environment Variables

Create a `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://openthought.research

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (optional)
CONTACT_FORM_ENDPOINT=https://api.example.com/contact
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t openthought-website .

# Run container
docker run -p 3000:3000 openthought-website
```

## 📦 Key Dependencies

- **next**: ^14.2.0 (React 18 compatible)
- **react**: ^18.3.0
- **react-dom**: ^18.3.0
- **typescript**: ^5.3.3
- **tailwindcss**: ^3.4.1
- **framer-motion**: ^11.0.0
- **three**: ^0.163.0
- **@react-three/fiber**: ^8.16.0
- **react-hook-form**: ^7.51.0
- **zod**: ^3.22.4

**Note:** Using React 18 for compatibility with React Three Fiber.

## 🎯 Performance

- Lighthouse Score: 95+ (Performance)
- Lighthouse Score: 100 (Accessibility)
- Lighthouse Score: 100 (SEO)
- Lighthouse Score: 100 (Best Practices)
- CLS: <0.1
- LCP: <2.5s
- INP: <200ms

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimized
- Reduced motion support
- Focus indicators
- Color contrast ratios meet AA standards

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## 📧 Contact

- Website: [openthought.research](https://openthought.research)
- Email: info@openthought.research
- GitHub: [@openthought](https://github.com/openthought)

---

Built with ❤️ by Open Thought Research Institute
# web
