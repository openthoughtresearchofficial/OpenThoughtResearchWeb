import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Open Thought Research/)
  })

  test('should display hero section', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('h1', { hasText: 'Open Thought' })
    await expect(hero).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    await page.goto('/')
    
    // Click on Research link
    await page.click('nav a[href="/research"]')
    await expect(page).toHaveURL('/research')
    await expect(page.locator('h1')).toContainText('Research')
  })

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/')
    
    // Check for proper ARIA labels
    const nav = page.locator('nav[aria-label="Global"]')
    await expect(nav).toBeVisible()
  })

  test('should display footer with links', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    await expect(footer.locator('a[href="/privacy"]')).toBeVisible()
  })

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    const mobileMenu = page.locator('button[aria-label="Toggle menu"]')
    await expect(mobileMenu).toBeVisible()
  })
})
