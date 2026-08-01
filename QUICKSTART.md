# Quick Start Guide

## Installation

### Option 1: Using Install Script (Recommended)
```powershell
.\install.ps1
```

### Option 2: Manual Installation
```powershell
npm install --legacy-peer-deps
```

> **Note**: The `--legacy-peer-deps` flag is required due to React Three Fiber's React 18 dependency.

---

## Development

Start the development server:

```powershell
npm run dev
```

Visit: `http://localhost:3000`

---

## Build

Build for production:

```powershell
npm run build
```

Start production server:

```powershell
npm start
```

---

## Site Structure

### Pages
- **Home** (`/`) - Editorial hero, research blocks, timeline, vision
- **Research** (`/research`) - Six research areas with numbered sections
- **About** (`/about`) - Mission, philosophy, history
- **Vision** (`/vision`) - Large typography, principles

### Key Features
- ✅ Strict monochrome design (black/white/gray)
- ✅ Large editorial typography (8-9rem hero titles)
- ✅ Subtle Three.js particles with procedural lines
- ✅ Lenis smooth scrolling
- ✅ Minimal navigation (3 links only)
- ✅ Museum-style layouts
- ✅ Production-ready build

---

## Tech Stack

- **Framework**: Next.js 14
- **React**: 18.3.0 (locked for Three.js compatibility)
- **Styling**: Tailwind CSS
- **3D**: Three.js + React Three Fiber
- **Animation**: Framer Motion
- **Smooth Scroll**: Lenis
- **Font**: Inter (Google Fonts)

---

## Troubleshooting

### Build Errors
If you encounter peer dependency issues:
```powershell
npm install --legacy-peer-deps --force
```

### Port Already in Use
If port 3000 is busy:
```powershell
npm run dev -- -p 3001
```

### Clear Cache
```powershell
Remove-Item -Recurse -Force .next
npm run build
```

---

## Project Files

See `PROJECT_STATUS.md` for detailed documentation.

See `CONTRIBUTING.md` for contribution guidelines.

---

**Ready to go!** 🚀
