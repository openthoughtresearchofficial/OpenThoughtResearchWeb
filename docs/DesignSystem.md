# Design System Documentation

## Philosophy

The Open Thought Research design system embodies timeless, architectural, and editorial design principles. It draws inspiration from Swiss editorial design, luxury brands, and scientific publications to create a premium, sophisticated aesthetic.

**Core Principles:**
- Timeless over trendy
- Content over decoration
- Clarity over complexity
- Typography as structure
- Monochrome sophistication

## Color System

### Monochrome Palette

**Strict Rule: No colors. Black, white, and gray only.**

```css
/* Background Shades */
--black: #000000
--gray-900: #090909
--gray-850: #111111
--gray-800: #181818
--gray-700: #222222
--gray-600: #2E2E2E

/* Text & UI Shades */
--gray-400: #666666
--gray-300: #B8B8B8
--white: #FFFFFF
```

### Usage Guidelines

**Background:**
- Primary: `#000000` (dark mode)
- Primary: `#FFFFFF` (light mode)
- Secondary: `#090909` - `#111111`

**Text:**
- Primary: `#FFFFFF` (dark) / `#000000` (light)
- Secondary: `#B8B8B8` (dark) / `#666666` (light)
- Muted: `#666666` (dark) / `#2E2E2E` (light)

**Borders:**
- Default: `#181818` (dark) / `#E5E5E5` (light)
- Subtle: `#111111` (dark) / `#F5F5F5` (light)

## Typography

### Font Families

```css
/* Sans Serif (Primary) */
font-family: 'Geist Sans', 'Inter', system-ui, sans-serif;

/* Monospace (Code/Data) */
font-family: 'Geist Mono', 'IBM Plex Mono', 'SF Mono', monospace;
```

### Type Scale

```css
/* Headings */
--text-9xl: clamp(2.5rem, 8vw, 6rem)      /* 40-96px */
--text-8xl: clamp(2rem, 5vw, 4rem)        /* 32-64px */
--text-7xl: clamp(1.875rem, 4vw, 3rem)    /* 30-48px */
--text-6xl: clamp(1.5rem, 3vw, 2.5rem)    /* 24-40px */
--text-5xl: clamp(1.25rem, 2.5vw, 2rem)   /* 20-32px */
--text-4xl: 1.5rem                         /* 24px */
--text-3xl: 1.25rem                        /* 20px */
--text-2xl: 1.125rem                       /* 18px */
--text-xl: 1rem                            /* 16px */

/* Body */
--text-base: 1rem        /* 16px */
--text-sm: 0.875rem      /* 14px */
--text-xs: 0.75rem       /* 12px */
```

### Font Weights

```css
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

### Line Heights

```css
--leading-none: 1
--leading-tight: 1.25
--leading-snug: 1.375
--leading-normal: 1.5
--leading-relaxed: 1.625
--leading-loose: 2
```

### Letter Spacing

```css
--tracking-tighter: -0.05em
--tracking-tight: -0.025em
--tracking-normal: 0
--tracking-wide: 0.025em
--tracking-wider: 0.05em
```

## Spacing System

### Scale

```css
--space-1: 0.25rem    /* 4px */
--space-2: 0.5rem     /* 8px */
--space-3: 0.75rem    /* 12px */
--space-4: 1rem       /* 16px */
--space-6: 1.5rem     /* 24px */
--space-8: 2rem       /* 32px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-24: 6rem      /* 96px */
--space-32: 8rem      /* 128px */
```

### Layout

```css
/* Container Widths */
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1280px
--container-2xl: 1536px

/* Content Width */
--content-max: 1280px (7xl)
--content-narrow: 768px (2xl)
```

## Components

### Buttons

**Variants:**
- `default`: Black background, white text
- `outline`: Transparent with border
- `ghost`: Transparent, hover background
- `link`: Underlined text

**Sizes:**
- `sm`: 36px height
- `default`: 40px height
- `lg`: 44px height
- `xl`: 56px height

**States:**
- Hover: Scale 1.02, opacity 0.9
- Active: Scale 0.98
- Disabled: Opacity 0.5, no pointer events
- Focus: 2px outline, 4px offset

```tsx
<Button variant="default" size="lg">
  Explore Research
</Button>
```

### Cards

**Anatomy:**
- Border: 1px
- Padding: 24px
- Radius: 8px
- Shadow: Subtle on hover

**States:**
- Default: Border only
- Hover: Shadow-md, scale 1.01
- Active: Shadow-sm

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Inputs

**Anatomy:**
- Height: 40px
- Padding: 12px
- Border: 1px
- Radius: 6px

**States:**
- Default: Border color
- Focus: 2px ring, ring offset
- Error: Destructive border
- Disabled: Opacity 0.5

```tsx
<Input
  type="text"
  placeholder="Enter text"
  aria-label="Input label"
/>
```

## Layout Patterns

### Hero Section

```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="max-w-7xl px-6 py-32 text-center">
    <h1 className="text-6xl sm:text-9xl">Title</h1>
    <p className="mt-8 text-xl">Description</p>
  </div>
</section>
```

### Content Section

```tsx
<section className="py-24 sm:py-32">
  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-2xl mb-16">
      <h2 className="text-4xl sm:text-5xl">Heading</h2>
      <p className="mt-6 text-lg">Description</p>
    </div>
    {/* Content */}
  </div>
</section>
```

### Grid Layout

```tsx
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
  {items.map(item => (
    <Card key={item.id}>{/* Content */}</Card>
  ))}
</div>
```

## Animation Guidelines

### Principles
1. **Subtle over flashy**: Animations should enhance, not distract
2. **Natural motion**: Use easing curves that mimic physics
3. **Purposeful**: Every animation should have a reason
4. **Performant**: Use transform and opacity only
5. **Respect reduced motion**: Disable for accessibility

### Timing

```css
--duration-fast: 150ms
--duration-normal: 300ms
--duration-slow: 500ms

--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-custom: cubic-bezier(0.25, 0.4, 0.25, 1)
```

### Common Animations

**Fade In:**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>
```

**Slide Up:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>
```

**Hover Scale:**
```tsx
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.2 }}
/>
```

## Accessibility

### Focus Indicators

```css
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Contrast

All text meets WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum

### Semantic HTML

Always use appropriate HTML elements:
- `<nav>` for navigation
- `<main>` for main content
- `<article>` for articles
- `<section>` for sections
- `<header>` for headers
- `<footer>` for footers

## Responsive Design

### Breakpoints

```css
--screen-sm: 640px
--screen-md: 768px
--screen-lg: 1024px
--screen-xl: 1280px
--screen-2xl: 1536px
```

### Mobile-First Approach

```tsx
{/* Mobile */}
<div className="text-base">

{/* Tablet and up */}
<div className="text-base md:text-lg">

{/* Desktop and up */}
<div className="text-base md:text-lg lg:text-xl">
```

## Best Practices

### Do's ✓
- Use large typography
- Embrace whitespace
- Keep it monochrome
- Focus on content
- Use subtle animations
- Maintain consistency
- Follow accessibility guidelines

### Don'ts ✗
- Add colors or gradients
- Use small fonts
- Overcrowd layouts
- Add excessive animations
- Ignore accessibility
- Break the grid
- Use decorative elements

## Resources

- Figma Design System: [Link to Figma]
- Component Storybook: [Link to Storybook]
- Brand Guidelines: [Link to Brand Guide]

---

For questions about the design system, contact the design team.
