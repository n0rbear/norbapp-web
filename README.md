# NorbApp Web

Official landing page for [norbapp.com](https://norbapp.com), built with Next.js, React and TypeScript and exported as a static site for GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build   # writes the static site to out/
npm start       # serves out/ locally
```

## Languages

German lives at the root (`/`, `/fuel/`, …), Hungarian under `/hu/` and English under `/en/`.
Old `?lang=hu` / `?lang=en` links are redirected in the browser to the matching page.

## Project status colours

Each project in `app/i18n.ts` has a `kind`: `live` (green), `beta` (yellow) or `dev` (brown).
The card background, icon and status pill follow it.

## Deployment (GitHub Pages)

- `.github/workflows/pages.yml` builds every pull request and deploys every push to `main`.
- Repository settings → Pages → Source: **GitHub Actions**.
- Custom domain: `norbapp.com` (also in `public/CNAME`), with **Enforce HTTPS** on.
