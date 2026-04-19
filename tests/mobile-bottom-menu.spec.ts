import { test, expect } from '@playwright/test';

test.describe('Mobile Bottom Menu - Comprehensive Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
  });

  test('mobile bottom menu is visible on mobile viewport', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await expect(mobileNav).toBeVisible();
  });

  test('mobile bottom menu has correct positioning', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    
    // Check positioning classes
    await expect(mobileNav).toHaveClass(/fixed/);
    await expect(mobileNav).toHaveClass(/bottom-0/);
    await expect(mobileNav).toHaveClass(/left-0/);
    await expect(mobileNav).toHaveClass(/right-0/);
  });

  test('mobile bottom menu has correct z-index', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await expect(mobileNav).toHaveClass(/z-50/);
  });

  test('mobile bottom menu is hidden on md screens and above', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await expect(mobileNav).not.toBeVisible();
  });

  test('mobile bottom menu contains all four navigation items', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    
    await expect(mobileNav.locator('text=Features')).toBeVisible();
    await expect(mobileNav.locator('text=News')).toBeVisible();
    await expect(mobileNav.locator('text=Privacy')).toBeVisible();
    await expect(mobileNav.locator('text=Download')).toBeVisible();
  });

  test('Features button is an anchor tag with correct href', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const featuresLink = mobileNav.locator('a[href="#features"]');
    
    await expect(featuresLink).toBeVisible();
    await expect(featuresLink).toHaveAttribute('href', '#features');
  });

  test('News button is an anchor tag with correct href', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const newsLink = mobileNav.locator('a[href="#news"]');
    
    await expect(newsLink).toBeVisible();
    await expect(newsLink).toHaveAttribute('href', '#news');
  });

  test('Privacy button is an anchor tag with correct href', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const privacyLink = mobileNav.locator('a[href="#privacy"]');
    
    await expect(privacyLink).toBeVisible();
    await expect(privacyLink).toHaveAttribute('href', '#privacy');
  });

  test('Download button is a button element (not anchor)', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const downloadButton = mobileNav.locator('button:has-text("Download")');
    
    await expect(downloadButton).toBeVisible();
  });

  test('Features button navigates to features section', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('a[href="#features"]').click();
    
    await page.waitForTimeout(500);
    expect(page.url()).toContain('#features');
  });

  test('News button navigates to news section', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('a[href="#news"]').click();
    
    await page.waitForTimeout(500);
    expect(page.url()).toContain('#news');
  });

  test('Privacy button navigates to privacy section', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('a[href="#privacy"]').click();
    
    await page.waitForTimeout(500);
    expect(page.url()).toContain('#privacy');
  });

  test('Download button opens download dialog', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('button:has-text("Download")').click();
    
    await expect(page.getByRole('dialog').getByText('Download Empath')).toBeVisible({ timeout: 3000 });
  });

  test('Download dialog contains App Store button', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('button:has-text("Download")').click();
    
    await expect(page.getByRole('dialog').getByText('Download Empath')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('img[alt*="App Store"]')).toBeVisible();
  });

  test('Download dialog contains Google Play button', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('button:has-text("Download")').click();
    
    await expect(page.getByRole('dialog').getByText('Download Empath')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('img[alt*="Google Play"]')).toBeVisible();
  });

  test('Download dialog can be closed with Escape key', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    await mobileNav.locator('button:has-text("Download")').click();
    
    await expect(page.getByRole('dialog').getByText('Download Empath')).toBeVisible({ timeout: 3000 });
    await page.keyboard.press('Escape');
    
    await expect(page.getByRole('dialog')).not.toBeVisible({ timeout: 3000 });
  });

  test('mobile bottom menu has transparent background', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const menuContainer = mobileNav.locator('div').first();
    
    // Check that the menu container doesn't have a solid background color
    const classes = await menuContainer.getAttribute('class');
    expect(classes).not.toMatch(/bg-[\w-]+\/(90|80|70|60|50)/);
  });

  test('mobile bottom menu buttons have visible background', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const firstButton = mobileNav.locator('a, button').first();
    
    // Check that buttons have a background
    const classes = await firstButton.getAttribute('class');
    expect(classes).toMatch(/bg-/);
  });

  test('mobile bottom menu has border', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const menuContainer = mobileNav.locator('div').nth(1);
    
    const classes = await menuContainer.getAttribute('class');
    expect(classes).toMatch(/border/);
  });

  test('mobile bottom menu has shadow', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const menuContainer = mobileNav.locator('div').nth(1);
    
    const classes = await menuContainer.getAttribute('class');
    expect(classes).toMatch(/shadow/);
  });

  test('mobile bottom menu icons are visible', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    
    // Check that icons (SVG elements) are present
    const icons = mobileNav.locator('svg');
    await expect(icons).toHaveCount(4);
  });

  test('mobile bottom menu text labels are visible', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    
    await expect(mobileNav.locator('text=Features')).toBeVisible();
    await expect(mobileNav.locator('text=News')).toBeVisible();
    await expect(mobileNav.locator('text=Privacy')).toBeVisible();
    await expect(mobileNav.locator('text=Download')).toBeVisible();
  });

  test('mobile bottom menu is clickable and interactive', async ({ page }) => {
    const mobileNav = page.locator('nav.fixed.bottom-0');
    const featuresButton = mobileNav.locator('a[href="#features"]');
    
    // Check that the button is clickable
    await expect(featuresButton).toBeEnabled();
    await featuresButton.click();
    
    // Verify navigation occurred
    await page.waitForTimeout(500);
    expect(page.url()).toContain('#features');
  });
});
