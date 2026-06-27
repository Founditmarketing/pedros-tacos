# Pedro's Tacos & Tequila Bar

Website for **Pedro's Tacos & Tequila Bar** in Alexandria, Louisiana, rebuilt from scratch after the original WordPress site was compromised.

Art direction: **"El Codex de Oaxaca"** - a fashion-magazine editorial treatment (Bodoni Moda Didone display + Hanken Grotesk), a bone / agave-green / terracotta palette with one immersive charcoal "Agave Bar" section, running editorial numerals, a zig-zag photo feature rail, and a dotted-leader menu.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19, TypeScript
- Tailwind CSS v4
- [Motion](https://motion.dev) for micro-interactions
- `next/font` (Bodoni Moda + Hanken Grotesk), `next/image`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

- `app/` - routes: Home, `/menu`, `/about`, `/visit`, plus `sitemap`, `robots`, OG image, icons
- `components/` - Header, Footer, FeatureRail, DarkAgaveBar, MenuTabs, HoursLocation, PageHeader, SectionHeading, Tour, Reveal, JsonLd
- `lib/` - `site.ts` (business facts), `menu.ts` (menu data), `gallery.ts` (photos)
- `public/photos/` - food, interior, and exterior photography

## Content notes

- Business facts and menu are recovered from the previous site (lunch + drink menus transcribed verbatim).
- The dinner menu is a placeholder pending current pricing.
- The 360-degree tour embeds the venue's existing CloudPano tour.
