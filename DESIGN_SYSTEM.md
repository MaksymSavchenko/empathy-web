# Empath Design System

Based on mobile app screenshots from iPhone 17 Pro simulator

## Color Palette

### Primary Colors
- **Background Dark**: `#0a0a0f` - Deep dark background
- **Background Card**: `rgba(255, 255, 255, 0.05)` - Semi-transparent glass effect
- **Primary Accent**: `#6366f1` - Indigo/blue accent
- **Secondary Accent**: `#8b5cf6` - Purple accent
- **Success Green**: `#10b981` - For success states

### Text Colors
- **Primary Text**: `#ffffff` - White for headings
- **Secondary Text**: `#a1a1aa` - Light gray for body text
- **Muted Text**: `#71717a` - Darker gray for subtle text

### Functional Colors
- **Error**: `#ef4444` - Red for errors
- **Warning**: `#f59e0b` - Amber for warnings
- **Info**: `#3b82f6` - Blue for information

## Typography

### Font Family
- **Primary**: System sans-serif (San Francisco on iOS, Inter on web)
- **Fallback**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Font Scale
- **Display Large**: `32px / 40px` - Hero headings
- **Display Medium**: `24px / 32px` - Section headings
- **Heading Large**: `20px / 28px` - Card titles
- **Heading Medium**: `18px / 24px` - Subsection headings
- **Body Large**: `16px / 24px` - Primary body text
- **Body Medium**: `14px / 20px` - Secondary body text
- **Body Small**: `12px / 16px` - Captions and labels

### Font Weights
- **Regular**: `400`
- **Medium**: `500`
- **Semibold**: `600`
- **Bold**: `700`

## Spacing Scale

### Base Spacing (4px grid)
- **xs**: `4px` - Micro spacing
- **sm**: `8px` - Small spacing
- **md**: `16px` - Medium spacing
- **lg**: `24px` - Large spacing
- **xl**: `32px` - Extra large spacing
- **2xl**: `48px` - Section spacing
- **3xl**: `64px` - Page spacing

### Component Spacing
- **Card Padding**: `24px`
- **Button Padding**: `12px 24px`
- **Section Gap**: `32px`
- **Grid Gap**: `16px`

## Border Radius

- **Small**: `8px` - Buttons, small cards
- **Medium**: `12px` - Feature cards
- **Large**: `16px` - Modals, large cards
- **Full**: `9999px` - Pills, circular elements

## Shadows

- **Small**: `0 1px 2px rgba(0, 0, 0, 0.1)`
- **Medium**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Large**: `0 10px 15px rgba(0, 0, 0, 0.1)`
- **Glow**: `0 0 20px rgba(99, 102, 241, 0.3)` - Accent glow effect

## Effects

### Glass Morphism
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Gradients
- **Primary Gradient**: `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`
- **Subtle Gradient**: `linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)`

## Components

### Liquid Glass Button
- **Background**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Border Radius**: `16px` (rounded-2xl)
- **Hover Effect**: Mouse-following glow, scale shadow
- **Ripple Effect**: White ripple on click (600ms animation)
- **Shadow**: `0 10px 30px -10px rgba(0, 0, 0, 0.3)` (default), `0 25px 50px -12px rgba(147, 51, 234, 0.25)` (hover)
- **Component**: `LiquidGlassButton` in `components/ui/LiquidGlassButton.tsx`

### Ripple Button
- **Simple ripple effect** on click
- **Background**: Transparent (inherits from className)
- **Ripple**: White/30 opacity, 100px size, 600ms animation
- **Component**: `RippleButton` in `components/ui/RippleButton.tsx`

### Liquid Glass Card
- **Background**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Border Radius**: `24px` (rounded-3xl)
- **Hover Effect**: Mouse-following glow, scale shadow
- **Component**: `LiquidGlassCard` in `components/ui/LiquidGlassCard.tsx`

### Navigation Bar (Desktop)
- **Height**: `Auto` (py-6)
- **Background**: Transparent
- **Position**: Fixed top
- **Icon Size**: `32px` for logo
- **Links**: Features, Library, Latest news, Privacy
- **Download Button**: White background, rounded-full

### Navigation Bar (Mobile)
- **Height**: `64px` (h-16)
- **Background**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Position**: Fixed bottom (bottom-4 on mobile, bottom-6 on tablet)
- **Border Radius**: Full (rounded-full)
- **Items**: Home, Companion, Library, Journal, Settings
- **Icon Size**: `20px`
- **Active State**: Indigo color with glow

### Feature Cards
- **Padding**: `24px` (p-6)
- **Background**: Glass morphism (via LiquidGlassCard)
- **Border Radius**: `24px` (via LiquidGlassCard)
- **Icon Container**: `48px x 48px` (w-12 h-12), rounded-xl, shadow-lg
- **Icon Size**: `24px`
- **Hover**: Scale `[1.02]` with transition
- **Component**: `FeatureCard` in `components/ui/FeatureCard.tsx`

### Breathing Exercise
- **Circle Sizes**:
  - Outer: `256px` (w-64 h-64)
  - Middle: `192px` (w-48 h-48)
  - Inner: `128px` (w-32 h-32)
- **Animation**: Smooth scaling (4s per phase)
- **Phases**: Inhale → Hold → Exhale → Hold
- **Colors**: Indigo-500/20 and indigo-500/40 for outer circles, gradient for inner
- **Inner Circle**: `bg-gradient-to-br from-indigo-500 to-purple-500`
- **Shadow**: `0 0 50px rgba(99, 102, 241, 0.6)`
- **Timer**: Text-2xl for phase, text-sm for time remaining
- **Total Duration**: 12 seconds
- **Trigger**: Hover or touch
- **Component**: `BreathingExercise` in `components/BreathingExercise.tsx`

### Discount Code Modal
- **Trigger**: After completing 12-second breathing exercise
- **Background**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Border Radius**: `16px` (rounded-2xl)
- **Padding**: `32px` (p-8)
- **Max Width**: `400px` (max-w-md)
- **Shadow**: `0 0 60px rgba(99, 102, 241, 0.5)`
- **Discount Code**: "breath10"
- **Copy Button**: White/20 background, rounded-xl, shows "Copied!" on success
- **Close Button**: Top-right, white/60 hover white

### Store Modal
- **Component**: `StoreModal` in `components/StoreModal.tsx`
- **Trigger**: Desktop "Download Now" button
- **Shows**: App Store and Google Play options

### Store Buttons
- **iOS Store**: `/iOS_store.svg` image, LiquidGlassButton wrapper
- **Google Play**: `/android_play.svg` image, LiquidGlassButton wrapper
- **Image Height**: `48px` (h-12)
- **Device Detection**: Auto-detects iOS/Android/desktop
- **iOS Link**: `https://apps.apple.com/app/placeholder`
- **Android Link**: `https://play.google.com/store/apps/details?id=placeholder`

### Modal (General)
- **Background**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Border Radius**: `16px` (rounded-2xl)
- **Animation**: Fade in + scale up

## Layout Patterns

### Grid System
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3-4 columns

### Container
- **Mobile**: `100%` width with `16px` padding
- **Tablet**: `768px` max width
- **Desktop**: `1024px` max width

### Section Structure
```
Section (64px vertical spacing)
  ├─ Heading (32px bottom)
  ├─ Content/Grid
  └─ CTA (if applicable)
```

## Animation Timing

- **Fast**: `150ms` - Micro interactions
- **Base**: `300ms` - Standard transitions
- **Slow**: `500ms` - Complex animations
- **Breathing**: `4000ms` - Breathing exercise phases

## Iconography

- **Style**: Line icons, 24px standard
- **Stroke Width**: `2px`
- **Library**: Lucide React
- **Color**: Inherit from text color

## Responsive Breakpoints

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

## Accessibility

- **Contrast Ratio**: Minimum 4.5:1 for text
- **Touch Targets**: Minimum 44px
- **Focus States**: Visible outline with accent color
- **Reduced Motion**: Respect prefers-reduced-motion

## Tailwind Configuration

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0a0a0f',
          card: 'rgba(255, 255, 255, 0.05)',
        },
        accent: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'glass': '12px',
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
}
```

## Component Implementation Notes

### Liquid Glass Button
```tsx
<LiquidGlassButton
  onClick={handleClick}
  className="flex items-center justify-center px-4 py-2"
>
  <img src="/iOS_store.svg" className="h-12 w-auto" alt="Download on the App Store" />
</LiquidGlassButton>
```

### Ripple Button
```tsx
<RippleButton
  onClick={handleClick}
  className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
>
  Download Now
</RippleButton>
```

### Liquid Glass Card
```tsx
<LiquidGlassCard className="p-6 flex flex-col gap-4 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-600 shadow-lg">
    <Icon size={24} className="text-white" />
  </div>
  <div>
    <h3 className="text-white font-semibold text-lg leading-tight">Title</h3>
    <p className="text-gray-400 text-sm leading-relaxed mt-2">Description</p>
  </div>
</LiquidGlassCard>
```

### Feature Card
```tsx
<FeatureCard
  title="Check In"
  desc="Name how you're feeling and build daily self-awareness."
  icon={Smile}
  color="bg-purple-600"
/>
```

### Breathing Exercise
```tsx
<BreathingExercise />
// Auto-triggers on hover or touch
// Shows discount code modal after 12 seconds
// Discount code: "breath10"
```

### Glass Card Component
```tsx
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
  {/* Content */}
</div>
```

### Gradient Button Component
```tsx
<button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg px-6 py-3 hover:shadow-lg transition-all">
  {/* Button text */}
</button>
```

### Breathing Circle Component
```tsx
<div className="w-48 h-48 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
  {/* Timer and phase text */}
</div>
```

### Mobile Navigation
```tsx
<div className="md:hidden fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full h-16 flex items-center justify-around px-4 z-50 shadow-2xl">
  {/* Navigation items */}
</div>
```

## Design Tokens Summary

| Category | Token | Value | Usage |
|----------|-------|-------|-------|
| Color | `--bg-dark` | `#0a0a0f` | Background |
| Color | `--accent-primary` | `#6366f1` | Primary accent |
| Color | `--text-primary` | `#ffffff` | Headings |
| Color | `--text-secondary` | `#a1a1aa` | Body text |
| Spacing | `--spacing-md` | `16px` | Medium spacing |
| Radius | `--radius-md` | `12px` | Cards |
| Shadow | `--shadow-glow` | `0 0 20px rgba(99, 102, 241, 0.3)` | Accent glow |

## Component File Locations

### UI Components
- `components/ui/LiquidGlassButton.tsx` - Liquid glass effect button with mouse-following glow
- `components/ui/RippleButton.tsx` - Simple ripple effect button
- `components/ui/LiquidGlassCard.tsx` - Glass morphism card with hover effects
- `components/ui/FeatureCard.tsx` - Feature card with icon and description
- `components/ui/Logo.tsx` - Empath logo component

### Main Components
- `components/BreathingExercise.tsx` - Breathing exercise with discount code modal
- `components/StoreModal.tsx` - Store modal for desktop download

### Pages
- `app/page.tsx` - Main landing page
- `app/layout.tsx` - Root layout
- `app/globals.css` - Global styles and design system variables

## Component Dependencies

### Liquid Glass Button
- Uses: React hooks (useState, useRef)
- Features: Mouse tracking, ripple effect, hover glow
- CSS: backdrop-blur-xl, glass morphism

### Liquid Glass Card
- Uses: React hooks (useState, useRef)
- Features: Mouse tracking, hover glow, scale effect
- CSS: backdrop-blur-xl, glass morphism

### Breathing Exercise
- Uses: React hooks (useState, useRef, useEffect)
- Features: Phase animation, timer, discount code modal
- Duration: 12 seconds total (4s per phase)
- Discount Code: "breath10" (copy to clipboard)

## Design System Variables (CSS)

```css
:root {
  /* Colors */
  --background-dark: #0a0a0f;
  --background-card: rgba(255, 255, 255, 0.05);
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;

  /* Glass Morphism */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: 10px;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3);
}
```

## Implementation Priority

1. **High Priority** ✅ (Completed)
   - Color palette setup
   - Typography scale
   - Glass morphism effects
   - Breathing exercise component
   - Liquid glass buttons
   - Mobile navigation

2. **Medium Priority** ✅ (Completed)
   - Feature cards
   - Navigation bar
   - Modal components
   - Button styles
   - Store links

3. **Low Priority**
   - Micro-interactions
   - Advanced animations
   - Responsive adjustments

---

*Last updated: April 13, 2026*
*Source: iPhone 17 Pro simulator screenshots*
