# Favour Nwachukwu — portfolio

A quiet, typographic portfolio built with Vite, React, TypeScript, and hand-written CSS.

## Run it

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Edit the content

All projects, case studies, links, and social handles live in
[`src/data/projects.ts`](src/data/projects.ts). Each project has a `featured` flag for the
homepage, a `caseStudy` object for its page, and a `mark`/`cover` that map to the logo and
case-study artwork.

The homepage is [`src/pages/Home.tsx`](src/pages/Home.tsx). Shared sections live in
`src/components/`.

## Design

- Paper `#fbfaf6`, ink `#191811`, periwinkle `#5a52d8`
- Inter for text, JetBrains Mono for labels and metadata
- No UI framework. Styles are in [`src/styles.css`](src/styles.css).

## Deploying

The app is a client-side router, so every route must fall back to `index.html`.

- **Vercel**: `vercel.json` already rewrites all paths to `index.html`.
- **Netlify / Cloudflare Pages**: `public/_redirects` handles the fallback.
- **Other hosts**: configure an SPA fallback to `/index.html`.

Set the production domain in the `og:url`/`og:image` tags in `index.html` once the site has
one. `og.png` is a 1200×630 social card.
