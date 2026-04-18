---
trigger: always_on
glob: "**/*.{tsx,jsx,ts,js}"
description: Best practices for SEO in React and Next.js components
---

# SEO Best Practices for Next.js & React components

## 1. Metadata API
- Use the built-in Metadata API in `layout.tsx` or `page.tsx`.
- Prefer the static `metadata` object for constant values.
- Use `generateMetadata` for dynamic values based on route parameters or data.
- **Example:**
  ```tsx
  import { Metadata } from 'next';

  export const metadata: Metadata = {
    title: 'Page Title',
    description: 'A concise description (150-160 characters)...',
    openGraph: {
      title: 'OG Title',
      description: 'OG Description',
      images: ['/og-image.png'],
    },
  };
  ```

## 2. Semantic HTML
- Use proper HTML5 semantic tags: `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`.
- Avoid "div-soup".
- Use `<h1>` for the main page title (strictly one per page).
- Ensure a logical heading hierarchy (`h1` -> `h2` -> `h3`). Do not skip levels for styling purposes.

## 3. Image Optimization
- Use the `next/image` component for automatic resizing, optimization, and lazy loading.
- Always provide descriptive `alt` text. Use `alt=""` for strictly decorative images.
- Use the `priority` attribute for LCP (Largest Contentful Paint) images.

## 4. Links and Navigation
- Use `next/link` for internal navigation to enable prefetching and client-side transitions.
- Ensure link text is descriptive and contains keywords. Avoid "click here" or "read more".
- For external links, use `target="_blank"` with `rel="noopener noreferrer"`.

## 5. Structured Data (JSON-LD)
- Implement schema.org structured data using JSON-LD to help search engines understand the content and provide Rich Results.
- Use the `<script type="application/ld+json">` pattern.
- Common schemas: `WebSite`, `Organization`, `BreadcrumbList`, `Article`, `Product`.

## 6. Canonical Tags
- Use the `metadata.alternates.canonical` property to prevent duplicate content issues by specifying the "preferred" version of a page.
- `canonical: 'https://example.com/actual-page-path'`

## 7. Performance & Core Web Vitals
- Optimize for **LCP** (Largest Contentful Paint), **INP** (Interaction to Next Paint), and **CLS** (Cumulative Layout Shift).
- Set explicit `width` and `height` on images or use aspect-ratio containers to prevent layout shifts.

## 8. Accessibility (A11y)
- Good A11y correlates with good SEO. Use `aria-label`, `aria-labelledby`, and ensure keyboard navigability.
- Use a minimum contrast ratio of 4.5:1 for text.

## 9. Robots and Sitemaps
- Use `robots.ts` and `sitemap.ts` in the `app` directory to dynamically generate these files based on your content.

## 10. Dynamic Rendering
- Be mindful of `force-dynamic` or `revalidate` settings. Ensure critical SEO content is available in the initial HTML response (not fetched only on the client).
