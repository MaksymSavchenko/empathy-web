import { test, expect } from '@playwright/test';

test.describe('Mobile Bottom Menu', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
  });

  test('mobile bottom menu is visible on mobile viewport', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await expect(mobileNav).toBeVisible();
  });

  test('mobile bottom menu contains all navigation buttons', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await expect(mobileNav).toContainText('Features');
    await expect(mobileNav).toContainText('News');
    await expect(mobileNav).toContainText('Privacy');
    await expect(mobileNav).toContainText('Download');
  });

  test('Features button navigates to features section', async ({ page }) => {
    // Click Features button in mobile bottom menu
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('a[href="#features"]').click();
    
    // Wait for navigation
    await page.waitForTimeout(500);
    
    // Check URL hash
    expect(page.url()).toContain('#features');
  });

  test('News button navigates to news section', async ({ page }) => {
    // Click News button in mobile bottom menu
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('a[href="#news"]').click();
    
    // Wait for navigation
    await page.waitForTimeout(500);
    
    // Check URL hash
    expect(page.url()).toContain('#news');
  });

  test('Privacy button navigates to privacy section', async ({ page }) => {
    // Click Privacy button in mobile bottom menu
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('a[href="#privacy"]').click();
    
    // Wait for navigation
    await page.waitForTimeout(500);
    
    // Check URL hash
    expect(page.url()).toContain('#privacy');
  });

  test('Download button opens dialog', async ({ page }) => {
    // Click Download button in mobile bottom menu
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('button:has-text("Download")').click();
    
    // Wait for dialog to open
    await expect(page.locator('text=Download Empath')).toBeVisible({ timeout: 3000 });
  });

  test('Download dialog contains App Store and Play Store buttons', async ({ page }) => {
    // Open dialog from mobile bottom menu
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('button:has-text("Download")').click();
    
    // Wait for dialog to open
    await expect(page.locator('text=Download Empath')).toBeVisible({ timeout: 3000 });
    
    // Check for App Store and Play Store buttons
    await expect(page.locator('img[alt*="App Store"]')).toBeVisible();
    await expect(page.locator('img[alt*="Google Play"]')).toBeVisible();
  });

  test('Download dialog can be closed', async ({ page }) => {
    // Open dialog from mobile bottom menu
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('button:has-text("Download")').click();
    
    // Wait for dialog to open
    await expect(page.locator('text=Download Empath')).toBeVisible({ timeout: 3000 });
    
    // Close dialog by clicking outside or pressing escape
    await page.keyboard.press('Escape');
    
    // Wait for dialog to close
    await expect(page.locator('text=Download Empath')).not.toBeVisible({ timeout: 3000 });
  });

  test('mobile bottom menu is hidden on desktop viewport', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    
    // Mobile bottom menu should be hidden
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await expect(mobileNav).not.toBeVisible();
  });

  test('mobile top header is visible on mobile viewport', async ({ page }) => {
    const mobileHeader = page.locator('nav.fixed.top-0.md\\:hidden');
    await expect(mobileHeader).toBeVisible();
    await expect(mobileHeader).toContainText('Empath');
  });
});
