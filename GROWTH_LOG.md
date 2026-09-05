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

### 2026-09-03 - Per-outlet launch reviews, named characters, and collectibles hub

- Task: Add per-outlet numeric scores to the reviews page (IGN 6/10 Travis Northup, PlayStation Universe 95, TheSixthAxis 9/10, Game Informer 8.5/10, Pure Xbox 9/10, Game Rant 7/10, Eurogamer 60); add the per-platform Metacritic tally and OpenCritic stance to the Metacritic page (PC 85 from ~36 reviews, PS5 80 from ~50 reviews, Xbox Series X|S 84 from ~8 reviews); expand the characters page to name Sophia's medieval companions Caesar and Lucas, the named Minoan antagonists King Minos (Chapter 12 boss), Asterion (Chapter 13 boss and Prima Macula carrier child), and The Presence (unkillable supernatural entity), plus the six Macula legacy creature types (Worm, Brutes, Puppets / Corrupted, Petrified, King Minos, Asterion); add a Minoan sphere upgrade tree and the published five-level difficulty set (Narrative / Easy / Normal / Hard / Nightmare) to the gameplay page; add Asterion, King Minos, and The Presence to the Minotaur mythos page; add a new `/collectibles` hub listing every Relic of the Present and Past (37), every Blade from Heroes' Graves (8, including the Heritage Pack Minoan Sword with its third-hit stun window and Alec's Pendant charm-scaling), every Charm (30), and every Theseus Echo (5) by chapter.
- Files changed: `src/data/pages/resonance-pages.ts` (new source-link constants for the launch-week cluster; updated reviews modules with per-outlet numeric scores and the high-end / mixed / polarized cluster framings; updated Metacritic modules with the per-platform tally and OpenCritic stance; updated characters modules with Caesar and Lucas, King Minos, Asterion, The Presence, and the six Macula legacy creature types; updated gameplay modules with the Minoan sphere upgrade tree (Beam Refraction / Lens Pulse / Echo Seal), the six creature types, the five-level difficulty set, and the Asterion and King Minos boss-tactics cross-link; updated Minotaur mythos modules with Asterion as Prima Macula carrier child, King Minos as Chapter 12 boss, and The Presence as unkillable supernatural entity; new `/collectibles` page with per-family totals and per-chapter breakdowns), `src/data/pages/home.ts` (homepage CTA to `/collectibles`, new `home-collectibles` module, updated `home-characters` and `home-trophies-and-runtime` modules to reference the new pages), `src/data/navigation.ts` (added `/collectibles` and `/trophy-achievements` to primary navigation; updated `/characters` and `/reviews` descriptions), `src/data/faq.ts` (added 16 new FAQ entries: `fixed-review-roundup-ign-score`, `fixed-review-roundup-high-cluster`, `fixed-review-roundup-mixed-cluster`, `fixed-metacritic-score-pc`, `fixed-metacritic-score-opencritic`, `fixed-characters-overview-companions`, `fixed-characters-overview-asterion`, `fixed-characters-overview-creatures`, `fixed-gameplay-explained-difficulty-modes`, `fixed-gameplay-explained-upgrade-tree`, `fixed-gameplay-explained-creature-types`, `fixed-minotaur-mythos-asterion`, `fixed-minotaur-mythos-king-minos`, `fixed-minotaur-mythos-presence`, `fixed-collectibles-totals`, `fixed-collectibles-chapter-select`, `fixed-collectibles-heritage-pack`, `fixed-collectibles-theseus`), `CONTENT_INDEX.md` (refreshed page inventory, content clusters, and internal linking map for the new and updated URLs), `GROWTH_LOG.md`.
- URLs affected: `/reviews`, `/metacritic`, `/characters`, `/gameplay`, `/minotaur-mythos`, `/collectibles` (new), `/` (homepage hero CTA), `/trophy-achievements` (cross-link target only).
- Source cluster: allthings.how Chapter 10 Parallel Paths, gamerpillar.com Chapter 2 + Chapter 4 collectibles, gamerant.com all-chapters collectibles + launch review, gamingpromax.com Minotaur creatures + Minotaur Room + all-chapters collectibles, worldeka.com Asterion and King Minos boss guide, powerpyx.com Chapter 6 What Lies Beneath, actugaming.net Relics / Charms / Weapons (French), IGN Chapter 13 As One wiki, Eurogamer Chapter 13 As One walkthrough, OpenCritic chart for Resonance A Plague Tale Legacy, Metacritic product page + critic reviews tab, Instant Gaming 2026-08-27 review summary, OpenCritic chart, TechTimes 2026-08-27 launch review, Newswire Games 2026-08-26 critical reception, GameTrader SG review roundup, GamesLink launch review roundup, VGTimes launch scores, IGN Travis Northup launch review, PlayStation Universe launch review (95/100), TheSixthAxis launch review (9/10), Game Informer launch review (8.5/10), Pure Xbox launch review (9/10), Game Rant launch review (7/10).
- Fact boundary: Per-outlet numeric scores are attributed to each outlet's launch review dated 2026-08-26 to 2026-08-28; aggregator numbers (per-platform Metacritic, OpenCritic stance) refresh after launch day and should be rechecked. Named character roster (Sophia, Caesar, Lucas, King Minos, Asterion, The Presence) and the six Macula legacy creature types (Worm, Brutes, Puppets / Corrupted, Petrified, King Minos, Asterion) are sourced from the launch-week guide cluster as of 2026-09-03. The published five-level difficulty set (Narrative / Easy / Normal / Hard / Nightmare) supersedes the older Story / Veteran / Curator framing. The collectible totals (37 / 8 / 30 / 5) and the 165 Resonance Points threshold are sourced from the launch-week guide cluster and cross-confirmed against the existing trophy page. A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) scores and trophy counts are not current-game facts for Resonance.
- Verification: Local `npm run verify` chain to be run after the change.
