# Cup2Eat 2.0 — Immersive Brand Website

A premium editorial dessert-brand website built with Next.js, React Three Fiber, Three.js, Framer Motion and Lenis.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a new empty GitHub repository (e.g. `cup2eat-2.0`).
2. Upload/push this project to the repository.
3. Import the repository in Vercel. Framework preset: Next.js. Build command: `npm run build`.

## Notes before client handoff

- Current product photography uses remote Unsplash image URLs as visual placeholders. Replace with client-approved Cup2Eat photography before launch.
- The hero 3D composition is procedural Three.js geometry, not a photorealistic custom dessert model. Replace with a compressed GLB product model when a suitable licensed/approved asset is available.
- Confirm actual address, menu, pricing, hours and ordering/contact workflow with the business before publishing.
- Remote Google Fonts and Unsplash images require internet access.
- Motion respects `prefers-reduced-motion`; the 3D scene is dynamically imported and capped at 1.5 device pixel ratio.
