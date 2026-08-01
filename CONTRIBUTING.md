# Contributing to Open Thought Research Website

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

Be respectful, inclusive, and constructive in all interactions.

## Getting Started

### 1. Fork and Clone

```bash
git clone https://github.com/your-username/openthought-website.git
cd openthought-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

## Development Workflow

### Running Locally

```bash
npm run dev
```

### Code Style

We use ESLint and Prettier for code formatting:

```bash
# Lint code
npm run lint

# Format code
npm run format
```

### Testing

```bash
# Run tests
npm test

# Run E2E tests
npm run test:e2e

# Run with coverage
npm run test:coverage
```

## Commit Guidelines

### Commit Message Format

```
type(scope): subject

body

footer
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Test additions or changes
- `chore`: Build process or auxiliary tool changes

### Examples

```bash
git commit -m "feat(research): add search functionality to publications page"
git commit -m "fix(navigation): resolve mobile menu not closing on link click"
git commit -m "docs(readme): update installation instructions"
```

## Pull Request Process

### 1. Update Your Branch

```bash
git fetch origin
git rebase origin/main
```

### 2. Run Tests

```bash
npm test
npm run lint
```

### 3. Push Changes

```bash
git push origin feature/your-feature-name
```

### 4. Create Pull Request

- Use a clear, descriptive title
- Reference any related issues
- Provide context and screenshots if applicable
- Ensure all checks pass

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## Component Guidelines

### Creating New Components

1. **Location**: Place in appropriate directory
   - UI components: `components/ui/`
   - Layout components: `components/layout/`
   - Sections: `components/sections/`

2. **TypeScript**: Always use TypeScript
3. **Props**: Define interfaces for props
4. **Accessibility**: Include ARIA labels
5. **Documentation**: Add JSDoc comments

### Example Component

```tsx
import { cn } from '@/lib/utils'

interface MyComponentProps {
  /** The title to display */
  title: string
  /** Optional description */
  description?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * MyComponent displays a title and optional description
 */
export function MyComponent({
  title,
  description,
  className
}: MyComponentProps) {
  return (
    <div className={cn('p-4', className)}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
```

## Testing Guidelines

### Unit Tests

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MyComponent } from './my-component'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
```

### E2E Tests

```typescript
import { test, expect } from '@playwright/test'

test('user can navigate to research page', async ({ page }) => {
  await page.goto('/')
  await page.click('a[href="/research"]')
  await expect(page).toHaveURL('/research')
})
```

## Documentation

### Code Comments

- Use JSDoc for functions and components
- Explain "why" not "what"
- Keep comments up to date

### Documentation Files

- Update README.md for user-facing changes
- Update Architecture.md for technical changes
- Update DesignSystem.md for UI changes

## Design System

Follow the established design system:

- **Colors**: Monochrome only (black, white, gray)
- **Typography**: Geist Sans, Geist Mono
- **Spacing**: Use Tailwind spacing scale
- **Components**: Use shadcn/ui components

## Accessibility

Ensure all contributions meet WCAG AA:

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast
- Focus indicators
- Screen reader support

## Performance

- Optimize images
- Lazy load components
- Minimize bundle size
- Use Next.js Image component
- Implement proper caching

## Questions?

- Open an issue for bugs
- Start a discussion for features
- Contact the maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
