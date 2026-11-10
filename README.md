# Cup2Eat 2.0 — Immersive Edible Cups Website

A premium, responsive Next.js website concept for Cup2Eat, based on the brand information and Instagram screenshots supplied for this project. The direction is forest green, warm ivory and brass/gold, with a clear edible-cup product story, flavour catalogue, serving ideas, wholesale enquiries and restrained 3D motion.

## Run locally

Use Node.js 20 LTS for the most predictable local development experience with this Next.js 14 project. The project has been configured for Next.js 14.2.35 and ESLint 8.57.1.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm start
```

## What's included

- Responsive navigation and mobile menu.
- A brand-specific hero focused on the edible-cup idea: **Eat Your Drink!**
- A procedural 3D waffle-cup object built with React Three Fiber / Three.js.
- Smooth scrolling with Lenis and scroll-reveal transitions with Framer Motion.
- Four product cards: Chocolate, Vanilla, Elaichi and Chocolate-Coated.
- Serving ideas for tea/coffee, ice cream, desserts/savoury bites, cafes and events.
- Brand story, quick facts, FAQs and wholesale/contact links.
- Reduced-motion support and image fallbacks.

## Brand information used

The following details were visible in the Cup2Eat Instagram screenshots supplied with the project:

- Brand line: **Eat Your Drink!**
- Product positioning: edible cups.
- Flavour names: Chocolate, Vanilla and Elaichi, plus a Chocolate-Coated option.
- Cup capacity shown in promotional content: 100 ml.
- Uses shown: chai/coffee, ice cream, desserts and creative food/event servings.
- Business audience: cafes, restaurants, food businesses and events.
- FSSAI registration number shown in a supplied event image: `22725105002487`.
- Phone: `9818192575`.
- Email: `Varunkhera6@gmail.com`.
- Instagram: `https://www.instagram.com/cup2eat/`.

No current wholesale prices are displayed because the prices in older promotional posts may have expired. The CTA asks visitors to enquire for current pricing and available quantities.

## Images and usage note

`public/images/` contains cropped Cup2Eat Instagram post imagery supplied in this conversation. Other catalogue/application images are loaded from the same third-party edible-cup reference URLs used in the earlier site version; the page falls back to the local Cup2Eat images if an external host is unavailable.

Some external images are illustrative industry references, not verified photographs of Cup2Eat's exact product. Confirm each image's reuse rights and replace illustrative references with owner-approved product photography before commercial launch. Confirm all product claims, capacity, variants, FSSAI details and delivery terms with the business owner before publishing publicly.

## Important configuration

- `next.config.mjs` is used because Next.js 14.2.35 does not support `next.config.ts`.
- ESLint is pinned to `8.57.1` to match `eslint-config-next@14.2.35` peer dependency compatibility.
- The site does not include checkout, live stock, unverified pricing or automatic order placement.
