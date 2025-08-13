# 🌍 Translation System Setup

## Overview
Your Bravur webshop now has a comprehensive translation system supporting:
- **English (en)** - Default language
- **Norwegian (no)** - For Norwegian market (/no routes)

## 🚀 How It Works

### 1. **URL-Based Language Detection**
- `/us` → English translations
- `/no` → Norwegian translations

### 2. **Translation Files Structure**
```
src/lib/translations/
├── index.ts          # Main export and utilities
├── en.ts            # English translations
└── no.ts            # Norwegian translations
```

### 3. **Translation Hook**
Use `useTranslation()` hook in any client component:

```tsx
import { useTranslation } from "@/lib/hooks/use-translation"

function MyComponent() {
  const t = useTranslation()
  
  return (
    <h1>{t.hero.title}</h1>
    <p>{t.hero.description}</p>
  )
}
```

## 📝 Adding New Translations

### Step 1: Add to English Base File
```tsx
// src/lib/translations/en.ts
export const en = {
  // ... existing translations
  newSection: {
    title: "New Section Title",
    description: "New section description"
  }
}
```

### Step 2: Add to Norwegian
```tsx
// src/lib/translations/no.ts
export const no = {
  // ... existing translations
  newSection: {
    title: "Ny Sektion Titel",
    description: "Ny sektion beskrivelse"
  }
}
```

### Step 3: Use in Components
```tsx
const t = useTranslation()
return <h2>{t.newSection.title}</h2>
```

## 🎯 Current Translation Keys

### Navigation
- `t.nav.home` - Home
- `t.nav.products` - Products
- `t.nav.cart` - Cart
- `t.nav.account` - Account

### Hero Section
- `t.hero.subtitle` - "Be light on your feet"
- `t.hero.title` - "Our Bestsellers"
- `t.hero.description` - Hero description
- `t.hero.shopNow` - "Shop Now"
- `t.hero.learnMore` - "Learn More"

### Actions
- `t.actions.viewAll` - "View all"
- `t.actions.addToCart` - "Add to Cart"
- `t.actions.buyNow` - "Buy Now"

### Products
- `t.products.outOfStock` - "Out of Stock"
- `t.products.price` - "Price"
- `t.products.quantity` - "Quantity"

## 🔧 Language Switcher

The language switcher is automatically added to the navigation header. Users can:
- Switch between English and Norwegian
- Maintain their current page when switching languages
- See the language change reflected immediately

## 📱 Component Usage Examples

### Hero Component
```tsx
"use client"
import { useTranslation } from "@/lib/hooks/use-translation"

const Hero = () => {
  const t = useTranslation()
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>
      <button>{t.hero.shopNow}</button>
    </div>
  )
}
```

### Product Component
```tsx
"use client"
import { useTranslation } from "@/lib/hooks/use-translation"

const ProductCard = () => {
  const t = useTranslation()
  
  return (
    <div>
      <span>{t.products.price}</span>
      <button>{t.actions.addToCart}</button>
    </div>
  )
}
```

## 🌐 Adding New Languages

### Step 1: Create Language File
```tsx
// src/lib/translations/fr.ts
export const fr = {
  nav: { home: "Accueil", products: "Produits" },
  hero: { title: "Nos Meilleures Ventes" },
  // ... copy structure from en.ts
}
```

### Step 2: Add to Index
```tsx
// src/lib/translations/index.ts
import { fr } from './fr'

export const translations = {
  en, no, fr
}
```

### Step 3: Add Country Code Mapping
```tsx
// src/lib/hooks/use-translation.tsx
const localeMap: Record<string, string> = {
  'no': 'no', 'us': 'en',
  'fr': 'fr', // Add new mapping
}
```

## 🎨 Styling with Translations

### Dynamic Text Classes
```tsx
const t = useTranslation()
return (
  <h1 className="font-proxima font-semibold">
    {t.hero.title}
  </h1>
)
```

### Conditional Rendering
```tsx
const t = useTranslation()
return (
  <div>
    {t.products.inStock ? (
      <span className="text-green-600">{t.products.inStock}</span>
    ) : (
      <span className="text-red-600">{t.products.outOfStock}</span>
    )}
  </div>
)
```

## 🔍 Testing Translations

### 1. **Switch URLs**
- Visit `/us` for English
- Visit `/no` for Norwegian

### 2. **Use Language Switcher**
- Click the language dropdown in navigation
- Select different language
- Verify text changes

### 3. **Check Console**
- Open browser dev tools
- Look for any translation errors

## 🚨 Common Issues & Solutions

### Issue: Translation not working
**Solution**: Ensure component is client-side (`"use client"`) and using `useTranslation()` hook

### Issue: Language not switching
**Solution**: Check URL structure matches `/no`, `/us` pattern

### Issue: Missing translation key
**Solution**: Add the key to all language files (en.ts, no.ts)

## 📚 Best Practices

1. **Always use translation keys** instead of hardcoded text
2. **Keep translations organized** by feature/section
3. **Test all languages** when adding new content
4. **Use consistent naming** for translation keys
5. **Provide fallbacks** for missing translations

## 🎉 You're All Set!

Your translation system is now fully functional with English and Norwegian support. Users can:
- Browse in their preferred language
- Switch languages seamlessly
- See localized content throughout the site

The system automatically detects the language based on the URL and applies the appropriate translations!
