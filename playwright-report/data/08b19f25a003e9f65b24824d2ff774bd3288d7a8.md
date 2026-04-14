# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Empath Navigation & Components >> Breathing exercise circle works
- Location: tests/navigation.spec.ts:35:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Inhale').or(locator('text=Hold'))
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Inhale').or(locator('text=Hold'))

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e8]: Empath
      - generic [ref=e9]:
        - link "Features" [ref=e10] [cursor=pointer]:
          - /url: "#features"
        - link "Library" [ref=e11] [cursor=pointer]:
          - /url: "#library"
        - link "Latest news" [ref=e12] [cursor=pointer]:
          - /url: "#news"
        - link "Privacy" [ref=e13] [cursor=pointer]:
          - /url: "#privacy"
      - button "Download Now" [ref=e14] [cursor=pointer]
    - generic [ref=e15]:
      - generic [ref=e16]:
        - generic [ref=e19]: Your Support Space
        - heading "Mental wellness, simplified." [level=1] [ref=e20]:
          - text: Mental wellness,
          - text: simplified.
        - paragraph [ref=e21]: Everything here is private and stays on your device. Check in, reframe thoughts, and explore guided tools designed for your mind.
        - generic [ref=e22]:
          - button "Download on the App Store" [ref=e23] [cursor=pointer]:
            - img "Download on the App Store" [ref=e25]
          - button "Get it on Google Play" [ref=e26] [cursor=pointer]:
            - img "Get it on Google Play" [ref=e28]
      - button "Box breathing exercise — hover or touch to begin" [ref=e30] [cursor=pointer]
    - generic [ref=e34]:
      - heading "Powerful Tools at Your Fingertips" [level=2] [ref=e35]
      - generic [ref=e36]:
        - generic [ref=e38] [cursor=pointer]:
          - img [ref=e40]
          - generic [ref=e43]:
            - heading "Check In" [level=3] [ref=e44]
            - paragraph [ref=e45]: Name how you're feeling and build daily self-awareness.
        - generic [ref=e47] [cursor=pointer]:
          - img [ref=e49]
          - generic [ref=e54]:
            - heading "Reframe" [level=3] [ref=e55]
            - paragraph [ref=e56]: A structured 7-step process to unpack unhelpful thinking.
        - generic [ref=e58] [cursor=pointer]:
          - img [ref=e60]
          - generic [ref=e62]:
            - heading "Library" [level=3] [ref=e63]
            - paragraph [ref=e64]: Access 50+ evidence-based grounding and breathing exercises.
        - generic [ref=e66] [cursor=pointer]:
          - img [ref=e68]
          - generic [ref=e70]:
            - heading "Journal" [level=3] [ref=e71]
            - paragraph [ref=e72]: Reflect on your journey with a secure, private daily mood log.
    - generic [ref=e73]:
      - generic [ref=e75]:
        - paragraph [ref=e76]: Explore Tools
        - heading "Featured in Library" [level=2] [ref=e77]
      - generic [ref=e78]:
        - generic [ref=e79] [cursor=pointer]:
          - img [ref=e80]
          - generic [ref=e84]: Grounding · 3 min
          - heading "5-4-3-2-1 Grounding Technique" [level=3] [ref=e85]:
            - text: 5-4-3-2-1 Grounding
            - text: Technique
          - img [ref=e86]
        - generic [ref=e88]:
          - generic [ref=e90] [cursor=pointer]:
            - generic [ref=e91]:
              - paragraph [ref=e92]: Stress
              - heading "Box Breathing Reset" [level=4] [ref=e93]
            - img [ref=e94]
          - generic [ref=e97] [cursor=pointer]:
            - generic [ref=e98]:
              - paragraph [ref=e99]: Self-Criticism
              - heading "The Perfectionism Trap" [level=4] [ref=e100]
            - img [ref=e101]
          - generic [ref=e104] [cursor=pointer]:
            - generic [ref=e105]:
              - paragraph [ref=e106]: Sleep
              - heading "Wind Down for Better Sleep" [level=4] [ref=e107]
            - img [ref=e108]
    - generic [ref=e116]:
      - heading "Your data is yours." [level=2] [ref=e117]
      - paragraph [ref=e118]: Empath was built with privacy at its core. We don't track you, we don't sell your data, and we don't even have access to your journal entries. Everything stays on your device.
    - generic [ref=e119]:
      - generic [ref=e120]:
        - paragraph [ref=e121]: Mental Health & AI
        - heading "Latest News & Research" [level=2] [ref=e122]
      - generic [ref=e123]:
        - link "Clinical Trial AI Chatbot Cuts Depression & Anxiety Therabot trial shows 51% reduction in depression symptoms and 31% in anxiety after 8 weeks of use." [ref=e126] [cursor=pointer]:
          - /url: https://www.apa.org/monitor/2026/01-02/trends-personalized-mental-health-care
          - paragraph [ref=e127]: Clinical Trial
          - heading "AI Chatbot Cuts Depression & Anxiety" [level=3] [ref=e128]
          - paragraph [ref=e129]: Therabot trial shows 51% reduction in depression symptoms and 31% in anxiety after 8 weeks of use.
          - img [ref=e130]
        - link "Survey 2026 Mental Health Language Goes Mainstream 51% of Americans now use mental health terms daily; 23% turn to AI chatbots for emotional support." [ref=e134] [cursor=pointer]:
          - /url: https://www.cincinnati.com/press-release/story/41082/study-finds-51-use-mental-health-language-23-turn-to-ai-for-emotional-support/
          - paragraph [ref=e135]: Survey 2026
          - heading "Mental Health Language Goes Mainstream" [level=3] [ref=e136]
          - paragraph [ref=e137]: 51% of Americans now use mental health terms daily; 23% turn to AI chatbots for emotional support.
          - img [ref=e138]
        - link "Ethics Alert AI \"Therapy\" Chatbots Risky Brown University study identifies 15 risk categories including \"deceptive empathy\" and poor crisis handling." [ref=e142] [cursor=pointer]:
          - /url: https://www.sciencedaily.com/releases/2026/03/260302030642.htm
          - paragraph [ref=e143]: Ethics Alert
          - heading "AI \"Therapy\" Chatbots Risky" [level=3] [ref=e144]
          - paragraph [ref=e145]: Brown University study identifies 15 risk categories including "deceptive empathy" and poor crisis handling.
          - img [ref=e146]
        - link "Trust Study People Distrust AI Mental Health Bots Study finds participants trust \"human\" versions more even when responses are identical." [ref=e150] [cursor=pointer]:
          - /url: https://news.utdallas.edu/health-medicine/study-chatbots-in-mental-health-study-2026/
          - paragraph [ref=e151]: Trust Study
          - heading "People Distrust AI Mental Health Bots" [level=3] [ref=e152]
          - paragraph [ref=e153]: Study finds participants trust "human" versions more even when responses are identical.
          - img [ref=e154]
        - link "Workforce AI Anxiety in Mental Health Workforce Clinicians fear job displacement as AI tools are adopted for notes, scheduling, and triage." [ref=e158] [cursor=pointer]:
          - /url: https://www.npr.org/2026/04/07/nx-s1-5771707/mental-health-care-workforce-artificial-intelligence-ai
          - paragraph [ref=e159]: Workforce
          - heading "AI Anxiety in Mental Health Workforce" [level=3] [ref=e160]
          - paragraph [ref=e161]: Clinicians fear job displacement as AI tools are adopted for notes, scheduling, and triage.
          - img [ref=e162]
        - link "Conference Digital Mental Health Conferences 2026 Major conferences focus on real-world AI implementation, ethics, and digital biomarkers from wearables." [ref=e166] [cursor=pointer]:
          - /url: https://www.digitalmentalhealth2026.org
          - paragraph [ref=e167]: Conference
          - heading "Digital Mental Health Conferences 2026" [level=3] [ref=e168]
          - paragraph [ref=e169]: Major conferences focus on real-world AI implementation, ethics, and digital biomarkers from wearables.
          - img [ref=e170]
    - contentinfo [ref=e172]:
      - paragraph [ref=e173]: © 2026 Empath Project. All rights reserved.
      - generic [ref=e174]:
        - link "Privacy Policy" [ref=e175] [cursor=pointer]:
          - /url: "#"
        - link "Terms of Service" [ref=e176] [cursor=pointer]:
          - /url: "#"
        - link "Support" [ref=e177] [cursor=pointer]:
          - /url: "#"
  - button "Open Next.js Dev Tools" [ref=e183] [cursor=pointer]:
    - img [ref=e184]
  - alert [ref=e187]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Empath Navigation & Components', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/');
  6   |   });
  7   | 
  8   |   test('page loads with correct title', async ({ page }) => {
  9   |     await expect(page).toHaveTitle(/Empath/);
  10  |     await expect(page.locator('text=Mental wellness')).toBeVisible();
  11  |   });
  12  | 
  13  |   test('navigation links exist', async ({ page }) => {
  14  |     const nav = page.locator('nav');
  15  |     await expect(nav).toContainText('Features');
  16  |     await expect(nav).toContainText('Library');
  17  |     await expect(nav).toContainText('Latest news');
  18  |     await expect(nav).toContainText('Privacy');
  19  |   });
  20  | 
  21  |   test('Download Now button opens store modal', async ({ page }) => {
  22  |     await page.locator('button:has-text("Download Now")').click();
  23  |     await expect(page.locator('text=Download Empath')).toBeVisible();
  24  |     await page.locator('button[aria-label="Close modal"]').click();
  25  |     await expect(page.locator('text=Download Empath')).not.toBeVisible();
  26  |   });
  27  | 
  28  |   test('Feature cards are visible', async ({ page }) => {
  29  |     await expect(page.locator('text=Check In').first()).toBeVisible();
  30  |     await expect(page.locator('text=Reframe').first()).toBeVisible();
  31  |     await expect(page.locator('text=Library').first()).toBeVisible();
  32  |     await expect(page.locator('text=Journal').first()).toBeVisible();
  33  |   });
  34  | 
  35  |   test('Breathing exercise circle works', async ({ page }) => {
  36  |     const breathing = page.locator('[aria-label*="breathing exercise"]').first();
  37  |     await expect(breathing).toBeVisible();
  38  |     await breathing.hover();
  39  |     await page.waitForTimeout(500);
> 40  |     await expect(page.locator('text=Inhale').or(page.locator('text=Hold'))).toBeVisible();
      |                                                                             ^ Error: expect(locator).toBeVisible() failed
  41  |   });
  42  | 
  43  |   test('Breathing exercise animation phases', async ({ page }) => {
  44  |     const breathing = page.locator('[aria-label*="breathing exercise"]').first();
  45  |     await breathing.hover();
  46  |     
  47  |     // Wait for initial Inhale phase
  48  |     await expect(page.locator('text=Inhale')).toBeVisible({ timeout: 2000 });
  49  |     
  50  |     // Wait for phase transition (each phase is 4 seconds)
  51  |     await page.waitForTimeout(5000);
  52  |     
  53  |     // Check that we're in a different phase (Hold, Exhale, or Hold)
  54  |     const phaseText = await page.locator('[role="timer"]').locator('..').locator('div').first().textContent();
  55  |     expect(['Inhale', 'Hold', 'Exhale']).toContain(phaseText);
  56  |   });
  57  | 
  58  |   test('Breathing exercise timer counts down', async ({ page }) => {
  59  |     const breathing = page.locator('[aria-label*="breathing exercise"]').first();
  60  |     await breathing.hover();
  61  |     
  62  |     // Get initial time
  63  |     const initialTime = await page.locator('[role="timer"]').textContent();
  64  |     expect(initialTime).toBeTruthy();
  65  |     
  66  |     // Wait 2 seconds
  67  |     await page.waitForTimeout(2000);
  68  |     
  69  |     // Get updated time (should be different)
  70  |     const updatedTime = await page.locator('[role="timer"]').textContent();
  71  |     expect(updatedTime).not.toBe(initialTime);
  72  |   });
  73  | 
  74  |   test.skip('Breathing exercise completion modal appears', async ({ page }) => {
  75  |     // Skip this test as it requires 12+ seconds to complete
  76  |     // Can be run manually with: npx playwright test --grep "completion modal"
  77  |     const breathing = page.locator('[aria-label*="breathing exercise"]').first();
  78  |     await breathing.hover();
  79  |     
  80  |     // Wait for 12 seconds for completion
  81  |     await page.waitForTimeout(13000);
  82  |     
  83  |     // Check completion modal appears
  84  |     await expect(page.locator('text=Well Done!')).toBeVisible();
  85  |     await expect(page.locator('text=Thank you for completing your breathing exercise session')).toBeVisible();
  86  |     
  87  |     // Close the modal
  88  |     await page.locator('button[aria-label="Close modal"]').click();
  89  |     await expect(page.locator('text=Well Done!')).not.toBeVisible();
  90  |   });
  91  | 
  92  |   test('Discount code copy functionality', async ({ page }) => {
  93  |     const breathing = page.locator('[aria-label*="breathing exercise"]').first();
  94  |     await breathing.hover();
  95  |     
  96  |     // Wait for 12 seconds for completion (breathing exercise duration)
  97  |     await page.waitForTimeout(13000);
  98  |     
  99  |     // Wait for completion modal to appear
  100 |     await expect(page.locator('text=Well Done!')).toBeVisible({ timeout: 15000 });
  101 |     await expect(page.locator('text=breath10')).toBeVisible();
  102 |     
  103 |     // Click copy button using aria-label for better reliability
  104 |     await page.locator('button[aria-label="Copy discount code"]').click();
  105 |     
  106 |     // Check for "Copied!" text
  107 |     await expect(page.locator('text=Copied!')).toBeVisible({ timeout: 3000 });
  108 |     
  109 |     // Close modal
  110 |     await page.locator('button[aria-label="Close modal"]').click();
  111 |     
  112 |     // Verify modal is closed
  113 |     await expect(page.locator('text=Well Done!')).not.toBeVisible();
  114 |   });
  115 | 
  116 |   test('Hero store buttons visible', async ({ page }) => {
  117 |     await expect(page.locator('img[alt*="App Store"]')).toBeVisible();
  118 |     await expect(page.locator('img[alt*="Google Play"]')).toBeVisible();
  119 |   });
  120 | });
  121 | 
```