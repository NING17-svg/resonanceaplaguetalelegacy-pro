# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline for `resonanceaplaguetalelegacy.pro`. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Resonance A Plague Tale Legacy hub | Find launch facts and guide entry points | Walkthrough / Collectibles | Hub | CTAs: Release, Game Pass, Walkthrough, Collectibles, Tips. |
| `/release` | `src/data/pages/resonance-pages.ts` | Guide | Resonance A Plague Tale Legacy release date | Confirm launch date and language support | FAQ / Wiki / Reviews | Supporting hub | August 27, 2026 worldwide; 18 languages. |
| `/system-requirements` | `src/data/pages/resonance-pages.ts` | Reference | Resonance A Plague Tale Legacy PC specs | Check minimum/recommended PC specs | FAQ / Platforms | Supporting hub | Steam AppID 2713000. |
| `/platforms` | `src/data/pages/resonance-pages.ts` | Reference | Resonance A Plague Tale Legacy platforms | Confirm PS5/PS5 Pro/Xbox/Steam support | FAQ / Editions | Supporting hub | Day-one Game Pass. |
| `/editions` | `src/data/pages/resonance-pages.ts` | Reference | Resonance A Plague Tale Legacy editions | Compare Standard and Collector's tiers | Heritage Pack / Platforms | Supporting hub | Heritage Pack is a pre-order DLC. |
| `/xbox-game-pass` | `src/data/pages/resonance-pages.ts` | Reference | Resonance A Plague Tale Legacy Game Pass | Confirm Game Pass day one | Platforms / Editions | Supporting hub | Console + PC tiers. |
| `/reviews` | `src/data/pages/resonance-pages.ts` | List | Resonance A Plague Tale Legacy review roundup | See launch numeric scores and verdicts | Metacritic / Gameplay / Characters | Hub | High-end cluster (PSU 95, TSA 90, Pure Xbox 90, Game Informer 85) and mixed cluster (IGN 6/10, Eurogamer 60, Game Rant 70). |
| `/metacritic` | `src/data/pages/resonance-pages.ts` | Status | Resonance A Plague Tale Legacy Metacritic score | See per-platform critic tally | Reviews / Release / How Long to Beat | Supporting hub | PC 85 / PS5 80 / Xbox 84 per-platform tally as of 2026-09-03. |
| `/how-long-to-beat` | `src/data/pages/resonance-pages.ts` | Reference | Resonance A Plague Tale Legacy how long to beat | Plan main and completionist runtimes | Walkthrough / Trophies | Supporting hub | HowLongToBeat mirror. |
| `/trophy-achievements` | `src/data/pages/resonance-pages.ts` | Reference | Resonance A Plague Tale Legacy trophy achievements | Finish the PS5 37 / Xbox-PC 36 ladder | Walkthrough / Gameplay / How Long to Beat | Hub | 4 Gold collectibles + Like a Warrior missable flag. |
| `/gameplay` | `src/data/pages/resonance-pages.ts` | Explanation | Resonance A Plague Tale Legacy gameplay | Learn the dual-timeline combat and puzzle system | Walkthrough / Minotaur Mythos / Tips | Hub | Five-level Narrative / Easy / Normal / Hard / Nightmare ladder and the six Macula legacy creature types. |
| `/characters` | `src/data/pages/resonance-pages.ts` | Reference | Resonance A Plague Tale Legacy characters | Identify Sophia, Caesar, Lucas, King Minos, Asterion, The Presence | Minotaur Mythos / Walkthrough / vs Plague Tale Series | Hub | Six Macula legacy creature types documented. |
| `/minotaur-mythos` | `src/data/pages/resonance-pages.ts` | Explanation | Resonance A Plague Tale Legacy Minotaur mythos | Follow Asterion, King Minos, The Presence through the Minoan branch | Gameplay / Walkthrough / Characters | Hub | Asterion Prima Macula carrier, King Minos Chapter 12 boss, The Presence unkillable. |
| `/heritage-pack` | `src/data/pages/resonance-pages.ts` | Status | Resonance A Plague Tale Legacy Heritage Pack | Confirm Minoan Sword + Alec's Pendant contents | Editions / Platforms / Release | Supporting hub | Pre-order DLC. |
| `/walkthrough` | `src/data/pages/resonance-pages.ts` | Guide | Resonance A Plague Tale Legacy walkthrough | Walk through chapters including Chapter 4 Minotaur Room | Gameplay / Minotaur Mythos / Trophies / Tips | Hub | Chapter 4 three-pair reflector solution + post-puzzle soldier ambush + stagger-window unlock. |
| `/collectibles` | `src/data/pages/resonance-pages.ts` | Reference | Resonance A Plague Tale Legacy collectibles | Locate every Relic, Blade, Charm, Theseus Echo by chapter | Trophies / Walkthrough / Heritage Pack | Hub | 37 Relics / 8 Blades / 30 Charms / 5 Theseus Echoes + 165 Resonance Points. |
| `/tips` | `src/data/pages/resonance-pages.ts` | Guide | Resonance A Plague Tale Legacy beginner tips | Plan first-playthrough decisions | Gameplay / Characters / Walkthrough | Supporting hub | Beginner tip ladder. |
| `/vs-plague-tale-series` | `src/data/pages/resonance-pages.ts` | Comparison | Resonance A Plague Tale Legacy vs Innocence vs Requiem | Compare the three A Plague Tale entries | Characters / Walkthrough | Supporting hub | Legacy vs current-game fact boundary. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Resonance A Plague Tale Legacy Guide | Trust and editorial policy | Contact | Trust | Unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Resonance A Plague Tale Legacy Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Unofficial disclaimer. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release`, `/xbox-game-pass`, `/editions`, `/platforms`, `/system-requirements`
- Reviews and aggregators: `/reviews`, `/metacritic`
- Gameplay and narrative: `/gameplay`, `/characters`, `/minotaur-mythos`, `/walkthrough`
- Collectibles and trophies: `/collectibles`, `/trophy-achievements`
- DLC and trust: `/heritage-pack`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage CTAs: Release, Game Pass, Walkthrough, Collectibles, Tips.
- Reviews links: Metacritic, Gameplay, Characters, Collectibles.
- Metacritic links: Reviews, Release, How Long to Beat.
- Gameplay links: Walkthrough, Minotaur Mythos, Tips, Characters, Collectibles.
- Characters links: Minotaur Mythos, Walkthrough, vs Plague Tale Series, Collectibles.
- Minotaur Mythos links: Gameplay, Walkthrough, Characters, Collectibles.
- Walkthrough links: Gameplay, Minotaur Mythos, Trophies, Tips.
- Trophies links: Walkthrough, Gameplay, How Long to Beat, Characters, Reviews.
- Collectibles links: Trophies, Walkthrough, Heritage Pack, Gameplay, Characters.

## Open Questions

- None for the 2026-09-03 sweep; the named character roster (Sophia, Caesar, Lucas, King Minos, Asterion, The Presence) and the six Macula legacy creature types (Worm, Brutes, Puppets / Corrupted, Petrified, King Minos, Asterion) are sourced from the launch-week guide cluster and may be refined once official PlayStation, Xbox and Steam databases stabilize.
