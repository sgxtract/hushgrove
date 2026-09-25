# hushgrove

My personal portfolio, a calm, Everforest-themed site built with Next.js.

## Stack

- **Next.js** (App Router) + **TypeScript** + **React**
- **Tailwind CSS v4** with Everforest design tokens
- **next-themes** for dark/light mode
- Deployed on **Vercel**

## Structure

```
app/          routes, layout, generated icons and OG image
components/   ui primitives, layout, sections, effects
data/         all content (profile, skills, projects, experience)
hooks/        client hooks (active section tracking)
lib/          utilities (class merging, dates, brand)
types/        shared TypeScript types
```

All content lives in `data/`. Editing the site never requires touching JSX.

## Run locally

```bash
npm install
npm run dev
```
