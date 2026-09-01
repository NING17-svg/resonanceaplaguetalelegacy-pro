# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

### 2026-09-01 - Adsterra integration (Native Banner + 4 banners + Smartlink)

- Task: Populate the fixed six Adsterra ad units with real codes from the Adsterra dashboard and prepare the target site for live ad delivery.
- Files changed: `src/data/ads.ts`, `GROWTH_LOG.md`.
- Ad values: Native Banner, 728x90, 468x60, 320x50, 160x600, Smartlink — all six replaced from empty placeholders to active Adsterra placement codes.
- Verification: Local `npm run verify` chain run after the change.

### 2026-09-02 - Chapter 4 Minotaur Room puzzle walkthrough and 37-trophy roadmap

- Task: Add Chapter 4 'From Hell It Rose' Minotaur Room three-pair reflector solution to the walkthrough page and replace the launch-window placeholder on the trophy page with the full 37-trophy PS5 / 36-achievement Xbox-PC roadmap including the four Gold collectibles and the only confirmed missable.
- Files changed: `src/data/pages/resonance-pages.ts` (new source-link constants, walkthrough modules for Chapter 4 arena / Step 1 / Step 2 / Light Reveal ring scan / Step 3 / Sphere insertion / soldier ambush / common mistakes; trophy modules for tier breakdown / Xbox-PC equivalent / Platinum / Gold collectibles / missable Like a Warrior / missable-adjacent traps / exploration trophies / chapter-completion Bronzes / combat trophies / creature trophies / remaining Bronzes), `src/data/faq.ts` (five new FAQ entries: `fixed-walkthrough-ch4-minotaur-room`, `fixed-walkthrough-ch4-light-reveal`, `fixed-walkthrough-ch4-ambush`, `fixed-trophy-achievements-like-a-warrior`, `fixed-trophy-achievements-theatre-enthusiast`), `GROWTH_LOG.md`.
- URLs affected: `/walkthrough`, `/trophy-achievements`. URL paths and responsibilities unchanged.
- Source cluster: allthings.how, Dot Esports, Game Rant (Chapter 4 + trophy guide), GamerSocialClub (2026-08-11 list and 2026-08-26 100% guide), GamingProMax (Minotaur Room + puppet show), NoobFeed, IGN (Achievements and Trophy List + Chapter 4 walkthrough), RetroGems, SportsRant (All 36 Achievements).
- Fact boundary: Trophy tier counts, missable flag, and combat / creature trophy lists come from launch-week guides and may be updated by official PlayStation, Xbox, and Steam databases once they stabilize. A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) trophy counts are not used as current-game facts.
- Verification: Local `npm run verify` chain to be run after the change.
