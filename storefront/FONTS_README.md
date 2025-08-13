# Proxima Nova Font Setup

## Overview
This project is now configured to use your actual Proxima Nova font files. The font setup includes:

- **ProximaNova-Regular.woff2** (weight: 400) - Regular text
- **Proxima Nova Semibold.woff2** (weight: 600) - Semibold headings
- **Proxima Nova Thin.woff2** (weight: 100) - Thin accent text

## What's Been Updated

### 1. Font Configuration
- `src/app/layout.tsx` - Configured to use your actual Proxima Nova font files
- `tailwind.config.js` - Added `font-proxima` family and font weight utilities
- `src/styles/globals.css` - Applied Proxima Nova to all headings and text utilities

### 2. Components Updated
- **Hero component** - Main heading uses Proxima Nova Semibold (600), subtext uses Thin (100)
- **Navigation header** - Brand text uses Proxima Nova Semibold (600)
- **Product rail** - Collection titles use Proxima Nova Semibold (600)
- **All headings** (h1-h6) automatically use Proxima Nova

### 3. CSS Classes Available
- `.font-proxima` - Apply Proxima Nova font family
- `.font-thin` - Use Thin weight (100)
- `.font-normal` - Use Regular weight (400)
- `.font-semibold` - Use Semibold weight (600)

## Font Usage Examples

```tsx
// Thin weight for subtle text
<p className="font-proxima font-thin text-xs uppercase">
  Be light on your feet
</p>

// Semibold weight for headings
<h1 className="font-proxima font-semibold text-5xl">
  Portable Bestsellers
</h1>

// Regular weight for body text
<p className="font-proxima font-normal">
  Discover our collection...
</p>
```

## Current Status
✅ **Fonts are working!** Your Proxima Nova font files are properly configured and being used throughout the application.

## Font Weights Available
- **100 (Thin)** - Used for subtle accent text
- **400 (Regular)** - Used for body text and general content
- **600 (Semibold)** - Used for headings and important text

The font system is now fully functional with your actual Proxima Nova font files!
