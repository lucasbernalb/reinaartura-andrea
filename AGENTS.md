# AGENTS.md - Developer Guidelines for Reina Artura

This document provides coding guidelines and operational instructions for AI agents working in this repository.

---

## 1. Project Overview

- **Name**: Reina Artura - Premium Art Gallery Ecommerce
- **Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Supabase
- **Purpose**: Online art gallery for selling paintings and prints by artist Andrea Bernasconi

---

## 2. Build & Development Commands

### Core Commands
```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Start production server
npm run lint         # Lint code
npx tsc --noEmit    # Type checking
```

---

## 3. Code Style Guidelines

### Import Order
```typescript
// Order: external → internal → types → components
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
```

### File Naming
- **Components**: PascalCase (`ProductCard.tsx`, `Navbar.tsx`)
- **Utils/Hooks**: camelCase (`cn.ts`, `useCart.ts`)
- **Types**: PascalCase (`product.ts`, `order.ts`)
- **Pages**: `page.tsx` for App Router

### Type Definitions
```typescript
// Use interfaces for public API types
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  category: 'classical' | 'modern';
  medium?: 'oil' | 'acrylic' | 'watercolor' | 'mixed' | 'digital' | 'print';
  dimensions?: string;
  year?: number;
  artist?: string;
  featured?: boolean;
  in_stock?: boolean;
  stock_quantity?: number;
}

// Use types for unions
export type CartItem = Product & { quantity: number };
```

### Tailwind CSS - Design System Colors
Use the project color palette (ivory/olive/lilac):

| Color | Hex | Usage |
|-------|-----|-------|
| **Background** | `#0a0808` | Main background |
| **Surface** | `#1a1412`, `#231a16` | Cards, surfaces |
| **Ivory** | `#F5F0E6`, `#FFFFF5` | Text, buttons, accents |
| **Olive** | `#6B8E23`, `#8FBC3C` | Primary accent, prices, links |
| **Lilac** | `#C8A2C8`, `#D8BFD8` | Secondary accent, classical category |

**Text Colors:**
- `text-ivory` — Primary text
- `text-ivory/70` — Secondary text  
- `text-ivory/40` — Muted text

**Accent Colors:**
- `text-olive-light` / `bg-olive` — Primary buttons, prices, links
- `text-lilac` / `bg-lilac` — Classical category badge
- `text-ivory` / `bg-ivory` — Button backgrounds, highlights

**Glows & Shadows:**
- `shadow-olive-glow`, `shadow-olive-glow-sm`
- `shadow-lilac-glow`, `shadow-lilac-glow-sm`
- `shadow-ivory-glow`

### Framer Motion
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
```

---

## 4. Component Guidelines

### Client Components
Add `'use client'` for components using:
- React hooks (`useState`, `useEffect`, `useContext`)
- Framer Motion
- Browser APIs / Event handlers

### Folder Structure
```
src/
├── app/              # Pages (page.tsx, layout.tsx)
├── components/      # Reusable components
│   ├── layout/       # Navbar, Footer, CartDrawer
│   ├── home/         # HeroSection
│   ├── product/      # ProductCard, ProductGrid
│   └── ui/           # UI primitives (Toast, Price)
├── context/         # React Context (CartContext)
├── data/             # Mock data
├── types/            # TypeScript interfaces
├── lib/              # Supabase client
└── utils/            # Utilities (cn.ts)
```

---

## 5. Linting & Type Checking

```bash
npm run lint              # Full lint
npm run lint -- --fix    # Fix auto-fixable issues
npx tsc --noEmit         # Type errors
```

---

## 6. Common Operations

### Adding a Product
```typescript
// src/data/mockProducts.ts
{
  id: '11',
  title: 'New Artwork',
  description: 'Description...',
  price: 5000,
  image_url: 'https://...',
  category: 'modern',
  medium: 'oil',
  dimensions: '50 x 70 cm',
  year: 2024,
  artist: 'Andrea Bernasconi',
  featured: false,
  in_stock: true,
  stock_quantity: 1,
}
```

### Error Handling (Spanish)
```typescript
if (!product) {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold text-ivory">Obra no encontrada</h1>
      <Link href="/" className="text-olive-light">
        Volver al inicio
      </Link>
    </div>
  );
}
```

---

## 7. Important Notes

- **Design System**: Use ivory/olive/lilac palette — don't use hardcoded colors
- **Artist**: All products must have `artist: "Andrea Bernasconi"`
- **Language**: UI text is in Spanish
- **Fonts**: 
  - Headings: Cormorant Garamond (elegant serif)
  - Body: Work Sans (clean sans-serif)
  - Signature: Great Vibes (script font for artist name, use `font-signature` class)

---

## 8. Troubleshooting

```bash
# Port in use
taskkill /F /IM node.exe && npm run dev

# Clear cache
rm -rf .next && npm run build
```
