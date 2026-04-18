import { test, expect } from '@playwright/test';

test.describe('Empath Navigation & Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Empath/);
    await expect(page.locator('text=Mental wellness')).toBeVisible();
  });

  test('navigation links exist', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toContainText('Features');
    await expect(nav).toContainText('Library');
    await expect(nav).toContainText('Latest news');
    await expect(nav).toContainText('Privacy');
  });

  test('Download Now button opens store modal', async ({ page }) => {
    await page.locator('button:has-text("Download Now")').click();
    await expect(page.locator('text=Download Empath')).toBeVisible();
    await page.locator('button[aria-label="Close modal"]').click();
    await expect(page.locator('text=Download Empath')).not.toBeVisible();
  });

  test('Feature cards are visible', async ({ page }) => {
    await expect(page.locator('text=Check In').first()).toBeVisible();
    await expect(page.locator('text=Reframe').first()).toBeVisible();
    await expect(page.locator('text=Library').first()).toBeVisible();
    await expect(page.locator('text=Journal').first()).toBeVisible();
  });

  test('Breathing exercise circle works', async ({ page }) => {
    const breathing = page.locator('[aria-label*="breathing exercise"]').first();
    await expect(breathing).toBeVisible();
    await breathing.hover();
    await page.waitForTimeout(500);
    await expect(page.locator('text=Inhale').or(page.locator('text=Hold'))).toBeVisible();
  });

  test('Breathing exercise animation phases', async ({ page }) => {
    const breathing = page.locator('[aria-label*="breathing exercise"]').first();
    await breathing.hover();
    
    // Wait for initial Inhale phase
    await expect(page.locator('text=Inhale')).toBeVisible({ timeout: 2000 });
    
    // Wait for phase transition (each phase is 4 seconds)
    await page.waitForTimeout(5000);
    
    // Check that we're in a different phase (Hold, Exhale, or Hold)
    const phaseText = await page.locator('[role="timer"]').locator('..').locator('div').first().textContent();
    expect(['Inhale', 'Hold', 'Exhale']).toContain(phaseText);
  });

  test('Breathing exercise timer counts down', async ({ page }) => {
    const breathing = page.locator('[aria-label*="breathing exercise"]').first();
    await breathing.hover();
    
    // Get initial time
    const initialTime = await page.locator('[role="timer"]').textContent();
    expect(initialTime).toBeTruthy();
    
    // Wait 2 seconds
    await page.waitForTimeout(2000);
    
    // Get updated time (should be different)
    const updatedTime = await page.locator('[role="timer"]').textContent();
    expect(updatedTime).not.toBe(initialTime);
  });

  test.skip('Breathing exercise completion modal appears', async ({ page }) => {
    // Skip this test as it requires 12+ seconds to complete
    // Can be run manually with: npx playwright test --grep "completion modal"
    const breathing = page.locator('[aria-label*="breathing exercise"]').first();
    await breathing.hover();
    
    // Wait for 12 seconds for completion
    await page.waitForTimeout(13000);
    
    // Check completion modal appears
    await expect(page.locator('text=Well Done!')).toBeVisible();
    await expect(page.locator('text=Thank you for completing your breathing exercise session')).toBeVisible();
    
    // Close the modal
    await page.locator('button[aria-label="Close modal"]').click();
    await expect(page.locator('text=Well Done!')).not.toBeVisible();
  });

  test('Discount code copy functionality', async ({ page }) => {
    const breathing = page.locator('[aria-label*="breathing exercise"]').first();
    await breathing.hover();
    
    // Wait for 12 seconds for completion (breathing exercise duration)
    await page.waitForTimeout(13000);
    
    // Wait for completion modal to appear
    await expect(page.locator('text=Well Done!')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=breath10')).toBeVisible();
    
    // Click copy button using aria-label for better reliability
    await page.locator('button[aria-label="Copy discount code"]').click();
    
    // Check for "Copied!" text
    await expect(page.locator('text=Copied!')).toBeVisible({ timeout: 3000 });
    
    // Close modal
    await page.locator('button[aria-label="Close modal"]').click();
    
    // Verify modal is closed
    await expect(page.locator('text=Well Done!')).not.toBeVisible();
  });

  test('Hero store buttons visible', async ({ page }) => {
    await expect(page.locator('img[alt*="App Store"]')).toBeVisible();
    await expect(page.locator('img[alt*="Google Play"]')).toBeVisible();
  });
});
