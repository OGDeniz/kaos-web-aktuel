# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Tech Stack

- **Next.js 16.1.6** (App Router, Turbopack)
- **React 19**, TypeScript 5.9
- **Tailwind CSS 4** via `@tailwindcss/postcss` – uses `@theme {}` block in globals.css for design tokens (not a tailwind.config.ts)
- **Framer Motion** for scroll animations
- **Font:** Inter (Google Fonts, weights 300–800)

## Architecture

### Routing

Pages live under `src/app/pages/<name>/page.tsx`. The homepage (`src/app/page.tsx`) is a one-pager composing all section components. Sub-pages use the shared `Layout` component from `src/layouts/Layout.tsx` which wraps content with Navbar + Footer + `pt-20` offset.

### Design System

Dark theme only. All colors defined as CSS custom properties in `src/styles/globals.css` inside `@theme {}`:
- Background: `#000000` / `#0a0a0a` (alt)
- Accent: `#cc0000` (red), hover `#ff0000`
- Text: `#ffffff` (primary), `#999999` (secondary), `#666666` (muted)

Use Tailwind classes like `bg-background`, `text-accent`, `border-border` – these map to the `@theme` tokens.

**Important:** Do NOT add a `* { margin: 0 }` CSS reset – it breaks Tailwind's `mx-auto`. Tailwind v4's `@import "tailwindcss"` includes its own preflight.

### Component Organization

- `src/components/ui/` – Shared atomic components: `Button`, `SectionWrapper`, `SectionHeading`, `Navbar`, `Footer`
- `src/components/sections/` – Homepage sections: `Hero`, `ServicesSection`, `AboutSection`, `PortfolioSection`, `BlogSection`, `ContactSection`
- `src/layouts/` – Page wrappers (`Layout.tsx` is the standard one)

### Patterns

- All interactive components need `'use client'` directive
- Scroll animations use `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- Staggered lists: `transition={{ delay: i * 0.1 }}`
- `SectionWrapper` handles consistent padding, max-width, bg color alternation, and scroll-in animation
- Import alias: `@/*` maps to `./src/*`
- Content is hardcoded in component files (no CMS)

### Build Gotchas

- `kaos-reset/` subfolder exists inside the project – excluded in `tsconfig.json` to prevent build conflicts
- `next.config.ts` uses deprecated `images.domains` (should be `images.remotePatterns`)
- Empty page files cause build errors – every `page.tsx` must have a default export
- Logo file: `/public/kaosLogo.jpeg` used in Navbar and Footer via next/image
