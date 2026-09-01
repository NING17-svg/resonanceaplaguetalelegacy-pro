import type { PageContent } from "@/types/content";

// Resonance: A Plague Tale Legacy — V3 fixed pages assembled from the
// approved content-package. Each entry's id, translationKey, route,
// pageType, presentation shell/variant, h1, keyFacts, FAQ ids,
// relatedPageIds, lastReviewed, and sourceStatus mirror the V3 Site Plan
// and content-package exactly.

const LAST_REVIEWED = "2026-08-28";

// Shared link items used across modules. Kept inline rather than imported
// from a separate source file because every fixed page is self-contained.
const RESONANCE_STEAM = {
  label: "Steam store page for Resonance: A Plague Tale Legacy (AppID 2713000)",
  href: "https://store.steampowered.com/app/2713000",
  description: "Official store listing with worldwide release date, supported languages, system requirements, and feature list.",
};
const RESONANCE_PSN = {
  label: "PlayStation Store product page (PS5 / PS5 Pro)",
  href: "https://store.playstation.com/en-us/product/UP0006-PPSA24708_00-RESONANCEAPTLEGACY",
  description: "PS5 / PS5 Pro SKU launch date and Collector's edition listing.",
};
const RESONANCE_XBOX = {
  label: "Xbox Store / Microsoft Store listing",
  href: "https://www.xbox.com/en-US/games/store/resonance-a-plague-tale-legacy/",
  description: "Xbox Series X|S SKU, Game Pass day-one confirmation, and Smart Delivery.",
};
const RESONANCE_FOCUS = {
  label: "Focus Entertainment press release",
  href: "https://www.focus-entmtn.com/en/news",
  description: "Publisher-side launch window and Heritage Pack pre-order DLC.",
};
const RESONANCE_IGN = {
  label: "IGN launch review",
  href: "https://www.ign.com/articles/resonance-a-plague-tale-legacy-review",
  description: "Launch coverage of gameplay, Sophia, and Macula mythos.",
};
const RESONANCE_EUROGAMER = {
  label: "Eurogamer launch coverage",
  href: "https://www.eurogamer.net/resonance-a-plague-tale-legacy-review",
  description: "Dual-timeline pacing and Minoan branch launch coverage.",
};
const RESONANCE_INSIDER = {
  label: "Insider Gaming launch coverage",
  href: "https://www.insider-gaming.com/resonance-a-plague-tale-legacy-review",
  description: "Moment-to-moment combat and unlock pacing verdict.",
};
const RESONANCE_DESTRUCTOID = {
  label: "Destructoid launch coverage",
  href: "https://www.destructoid.com/reviews/resonance-a-plague-tale-legacy-pc-review",
  description: "Chain sword parry timing and Minotaur's Island pacing verdict.",
};
const RESONANCE_RPS = {
  label: "Rock Paper Shotgun launch review (2026-08-26)",
  href: "https://www.rockpapershotgun.com/resonance-a-plague-tale-legacy-review",
  description: "\"Competent action game spinoff\" framing and launch verdict.",
};
const RESONANCE_METACRITIC = {
  label: "Metacritic product page",
  href: "https://www.metacritic.com/game/resonance-a-plague-tale-legacy/",
  description: "Aggregator critic and user scores by platform.",
};
const RESONANCE_HLTB = {
  label: "HowLongToBeat product page",
  href: "https://howlongtobeat.com/game/resonance-a-plague-tale-legacy",
  description: "User-submitted Main, Main + Extras, and Completionist timings.",
};
const RESONANCE_PCGW = {
  label: "PCGamingWiki page",
  href: "https://pcgamingwiki.com/wiki/Resonance:_A_Plague_Tale_Legacy",
  description: "Driver versions and ultrawide support cross-reference.",
};
const RESONANCE_HERITAGE_DLC = {
  label: "Steam Heritage Pack DLC page (AppID 3837640)",
  href: "https://store.steampowered.com/app/3837640",
  description: "Minoan Sword, Alec's Pendant, and digital art book contents.",
};
const RESONANCE_XBOX_ACH = {
  label: "Xbox Achievements mirror page",
  href: "https://www.xboxachievements.com/game/resonance-a-plague-tale-legacy/achievements",
  description: "Gamerscore-based achievement list mirror.",
};
const RESONANCE_TRUE_ACH = {
  label: "TrueAchievements mirror page",
  href: "https://www.trueachievements.com/game/Resonance-A-Plague-Tale-Legacy/achievements",
  description: "Xbox achievement mirror being populated at launch.",
};
const RESONANCE_PSN_PROFILES = {
  label: "PSNProfiles mirror page",
  href: "https://psnprofiles.com/trophies/resonance-a-plague-tale-legacy",
  description: "PlayStation trophy mirror being populated at launch.",
};
const RESONANCE_INNOCENCE = {
  label: "A Plague Tale: Innocence Steam page",
  href: "https://store.steampowered.com/app/752590/A_Plague_Tale_Innocence",
  description: "2019 predecessor used only as legacy reference.",
};
const RESONANCE_REQUIEM = {
  label: "A Plague Tale: Requiem Steam page",
  href: "https://store.steampowered.com/app/1182900/A_Plague_Tale_Requiem",
  description: "2022 predecessor used only as legacy reference.",
};

// Launch-week source cluster for the Chapter 4 Minotaur Room puzzle and the
// 37-trophy PS5 / 36-achievement roadmap. Each link is a launch-window guide
// or wiki page; the walkthrough and trophy pages cite them directly.
const CH4_MINOTAUR_ALLTHINGS = {
  label: "allthings.how — How to Solve the Minotaur Room Symbols Puzzle",
  href: "https://allthings.how/resonance-a-plague-tale-legacy-how-to-solve-the-minotaur-room-symbols-puzzle/",
  description: "Launch-week walkthrough for the Chapter 4 Minotaur Room three-pair reflector solution.",
};
const CH4_PUZZLE_DOTESPORTS = {
  label: "Dot Esports — All Chapter 4 Puzzle Solutions",
  href: "https://dotesports.com/general/guides/all-resonance-plague-tale-legacy-chapter-4-puzzle-solutions",
  description: "Reference table for every Chapter 4 puzzle including the Minotaur Room symbols.",
};
const CH4_PUZZLE_GAMERANT = {
  label: "Game Rant — Chapter 4 Walkthrough Puzzle Solution",
  href: "https://gamerant.com/resonance-a-plague-tale-legacy-chapter-4-walkthrough-puzzle-solution/",
  description: "Step-by-step Chapter 4 Minotaur Room walkthrough with reflector angles and Light Reveal ring scan.",
};
const CH4_PUZZLE_GAMINGPROMAX = {
  label: "GamingProMax — Minotaur Room Symbols Puzzle (Chapter 4)",
  href: "https://gamingpromax.com/minotaur-room-symbols-puzzle-resonance-a-plague-tale-legacy-chapter-4/",
  description: "Launch-week write-up of the Chapter 4 Minotaur Room symbol pedestal order.",
};
const CH4_PUZZLE_NOOBFEED = {
  label: "NoobFeed — Symbol Pedestals Puzzle",
  href: "https://www.noobfeed.com/articles/resonance-a-plague-tale-legacy-symbol-pedestals-puzzle",
  description: "Independent guide for the Chapter 4 symbol pedestal / reflector layout.",
};
const CH4_PUZZLE_IGN = {
  label: "IGN wiki — Chapter 4: From Hell It Rose Walkthrough",
  href: "https://www.ign.com/wikis/resonance-a-plague-tale-legacy/Chapter_4:_From_Hell_It_Rose_Walkthrough",
  description: "IGN wiki entry for Chapter 4 covering the Minotaur Room puzzle and the post-puzzle soldier ambush.",
};
const TROPHY_GAMERANT = {
  label: "Game Rant — Trophy & Achievement Guide",
  href: "https://gamerant.com/resonance-a-plague-tale-legacy-trophy-achievement-list/",
  description: "Launch-week trophy / achievement list with tier breakdown and unlock text.",
};
const TROPHY_GSC_LIST = {
  label: "GamerSocialClub — Trophy List (2026-08-11)",
  href: "https://gamersocialclub.ca/2026/08/11/resonance-a-plague-tale-legacy-trophy-list",
  description: "PS5 trophy list with tier breakdown published on launch week.",
};
const TROPHY_GSC_100 = {
  label: "GamerSocialClub — 100% Trophy Guide (2026-08-26)",
  href: "https://gamersocialclub.ca/2026/08/26/resonance-a-plague-tale-legacy-100-trophy-guide/",
  description: "100% completion trophy guide including the 'Like a Warrior' Resonance Point missable.",
};
const TROPHY_PUPPET_GAMINGPROMAX = {
  label: "GamingProMax — Theatre Enthusiast puppet show trophy",
  href: "https://gamingpromax.com/how-to-watch-puppet-show-carnival-resonance-a-plague-tale-legacy-theatre-enthusiast-trophy",
  description: "Chapter 2 puppet-show source for the Theatre Enthusiast collectible trophy.",
};
const TROPHY_RETROGEMS = {
  label: "RetroGems — Complete Achievement Roadmap",
  href: "https://retrogems.fr/en/resonance-plague-tale-legacy-trophy-guide-complete-achievement-roadmap/",
  description: "Full trophy / achievement roadmap including combat, creature, and collectible categories.",
};
const TROPHY_SPORTSRANT = {
  label: "SportsRant — All 36 Achievements guide",
  href: "https://sportsrant.indiatimes.com/gaming/resonance-a-plague-tale-legacy-trophy-guide-all-36-achievements-and-how-to-get-them/articleshow/133592299.html",
  description: "36-achievement Xbox / PC list with per-trophy unlock conditions.",
};
const TROPHY_IGN = {
  label: "IGN wiki — Achievements and Trophy List",
  href: "https://www.ign.com/wikis/resonance-a-plague-tale-legacy/Achievements_and_Trophy_List",
  description: "IGN wiki trophy / achievement index for the launch release.",
};

export const resonancePages: PageContent[] = [
  // ---------------------------------------------------------------------
  // release-overview (status)
  // ---------------------------------------------------------------------
  {
    id: "fixed-release-overview-en-us",
    translationKey: "release-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance: A Plague Tale Legacy Release Date & Worldwide Launch",
    seoTitle: "Resonance: A Plague Tale Legacy Release Date & Worldwide Launch",
    metaDescription:
      "Resonance: A Plague Tale Legacy release date confirmed for August 27, 2026 across Steam, PS5, PS5 Pro, Xbox Series X|S, and Game Pass. See the worldwide schedule.",
    summary:
      "Resonance: A Plague Tale Legacy released on August 27, 2026, on Steam (AppID 2713000), PlayStation 5 (incl. PS5 Pro SKU), Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. The launch window covers 18 supported languages, and pre-purchase plus the Heritage Pack DLC closed when the store pages flipped to launch state on the release date.",
    hero: {
      eyebrow: "Release & launch",
      subtitle:
        "Resonance: A Plague Tale Legacy released worldwide on August 27, 2026, simultaneously on Steam (AppID 2713000), PlayStation 5 (incl. PS5 Pro SKU), Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. Pre-purchase and the Heritage Pack DLC closed at launch.",
      ctas: [
        { label: "System Requirements", href: "/system-requirements" },
        { label: "Platforms", href: "/platforms" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    quickAnswer:
      "Resonance: A Plague Tale Legacy release date is August 27, 2026; the game launched worldwide simultaneously across PC (Steam, AppID 2713000), PlayStation 5, PS5 Pro, Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. The release date launch window covers all 18 supported languages, including Simplified and Traditional Chinese. Pre-purchase plus the Heritage Pack DLC closed when the store pages flipped to launch state on the release date.",
    keyFacts: [
      { label: "Release date", value: "August 27, 2026" },
      { label: "Steam AppID", value: "2713000" },
      { label: "Platforms", value: "Steam, PS5, PS5 Pro, Xbox Series X|S, Game Pass" },
      { label: "Day-one subscription", value: "Xbox Game Pass / PC Game Pass" },
      { label: "Languages", value: "18 (incl. Simplified + Traditional Chinese)" },
      { label: "Pre-purchase", value: "Closed at launch" },
      { label: "Heritage Pack DLC", value: "Closed at launch" },
      { label: "Source", value: "Steam, PlayStation Store, Xbox Store, Focus press release" },
    ],
    modules: [
      {
        id: "release-overview-status",
        type: "prose",
        heading: "Resonance: A Plague Tale Legacy release date and store identity",
        body:
          "The release date of Resonance: A Plague Tale Legacy is August 27, 2026, sourced from the Steam store page for AppID 2713000, the PlayStation Store product page for the PS5 / PS5 Pro SKU, and the Xbox Store / Microsoft Store listing. Focus Entertainment's press release confirms the same worldwide launch day across console, PC, and Game Pass. The Steam Popular Coming Soon ranking peaked at #2 in the lead-up to launch.",
        links: [RESONANCE_STEAM, RESONANCE_PSN, RESONANCE_XBOX, RESONANCE_FOCUS],
      },
      {
        id: "release-overview-per-platform",
        type: "prose",
        heading: "Per-platform launch schedule",
        body:
          "Each channel published the same launch date in its respective storefront listing. The PS5 Pro SKU appears inside the same PlayStation Store product entry as the PS5 SKU. The Xbox Store / Microsoft Store listing confirms Smart Delivery support for cross-generation ownership.\n\n- PC (Steam) — Steam AppID 2713000 — August 27, 2026\n- PlayStation 5 (incl. PS5 Pro) — PlayStation Store product page — August 27, 2026\n- Xbox Series X|S — Xbox Store / Microsoft Store — August 27, 2026\n- Xbox Game Pass / PC Game Pass — Day-one subscription — August 27, 2026",
        links: [RESONANCE_STEAM, RESONANCE_PSN, RESONANCE_XBOX],
      },
      {
        id: "release-overview-languages",
        type: "prose",
        heading: "Language support and regional availability",
        body:
          "Resonance: A Plague Tale Legacy ships in 18 supported languages, including Simplified and Traditional Chinese. Audio and subtitle support cover the same set. Regional release locks were not surfaced as of 2026-08-28; launch appears simultaneous worldwide rather than staggered by region. The Steam store page lists the full language matrix on its product description.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "release-overview-pre-order",
        type: "prose",
        heading: "Pre-order and Heritage Pack availability",
        body:
          "Pre-purchase plus the Heritage Pack DLC (Minoan Sword, Alec's Pendant, digital art book) were open before launch on Steam, PlayStation Store, and Xbox Store. Pre-purchase windows closed at launch on August 27, 2026. For the Heritage Pack's full contents see the /heritage-pack/ page.",
        links: [RESONANCE_HERITAGE_DLC],
      },
      {
        id: "release-overview-dated-unknowns",
        type: "prose",
        heading: "Dated unknowns",
        body:
          "Cross-progression between PS5, Xbox and Steam is not announced as of 2026-08-28. Demo availability, demo length, and any post-launch patches beyond the day-one build are not announced as of 2026-08-28. Patch notes beyond the day-one build remain dated status; check the official store pages for updates.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "release-overview-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Worldwide launch date August 27, 2026; Steam AppID 2713000; PS5 / PS5 Pro SKU; Xbox Series X|S SKU; Xbox Game Pass / PC Game Pass day one; 18 supported languages including Simplified and Traditional Chinese; pre-purchase and Heritage Pack availability window — sourced only from the Steam store page, PlayStation Store product page, Xbox Store / Microsoft Store listing, and Focus Entertainment press release as of 2026-08-28. Not announced as of 2026-08-28: cross-progression between PS5, Xbox and Steam; demo availability; demo length; post-launch patches beyond day-one.",
      },
      {
        id: "release-overview-sources",
        type: "prose",
        heading: "Sources",
        body:
          "- Steam store page for Resonance: A Plague Tale Legacy (AppID 2713000) — `official/store` — checked 2026-08-28 — worldwide release date August 27, 2026 and 18 supported languages.\n- PlayStation Store product page (PS5 / PS5 Pro) — `official/store` — checked 2026-08-28 — PS5 and PS5 Pro SKU launch date August 27, 2026.\n- Xbox Store / Microsoft Store listing — `official/store` — checked 2026-08-28 — Xbox Series X|S launch date and Game Pass day-one confirmation.\n- Focus Entertainment press release — `official/store` — checked 2026-08-28 — launch window and Heritage Pack pre-order DLC.",
        links: [RESONANCE_STEAM, RESONANCE_PSN, RESONANCE_XBOX, RESONANCE_FOCUS],
      },
    ],
    faqIds: [
      "fixed-release-overview-when-release",
      "fixed-release-overview-is-out",
      "fixed-release-overview-game-pass-day-one",
      "fixed-release-overview-regional-locks",
    ],
    relatedPageIds: [
      "home",
      "fixed-platforms-console-en-us",
      "fixed-editions-pricing-en-us",
      "fixed-xbox-game-pass-en-us",
      "fixed-review-roundup-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // system-requirements (reference)
  // ---------------------------------------------------------------------
  {
    id: "fixed-system-requirements-en-us",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance: A Plague Tale Legacy PC System Requirements",
    seoTitle: "Resonance: A Plague Tale Legacy PC System Requirements",
    metaDescription:
      "Resonance: A Plague Tale Legacy PC system requirements, including minimum, recommended, and Ultra specs. Steam Deck performance is dated status.",
    summary:
      "Resonance: A Plague Tale Legacy runs on PC via Steam (AppID 2713000). The Steam store page lists the minimum, recommended, and Ultra tiers along with the supported operating systems and storage footprint. Steam Deck verified performance is dated status as of 2026-08-28 and is not yet labelled by Valve.",
    hero: {
      eyebrow: "System requirements",
      subtitle:
        "Resonance: A Plague Tale Legacy runs on PC via Steam (AppID 2713000). Minimum, recommended, and Ultra tiers are published on the Steam store page alongside the supported operating systems and storage footprint. Steam Deck verified performance is dated status as of 2026-08-28.",
      ctas: [
        { label: "Release Date", href: "/release" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Resonance: A Plague Tale Legacy runs on PC via Steam (AppID 2713000). Asobo Studio's Steam store page lists the minimum, recommended, and Ultra tiers along with the supported operating systems and storage footprint. Steam Deck verified performance is dated status as of 2026-08-28 and is not yet labelled by Valve; portable play is treated as unconfirmed until the rating publishes.",
    keyFacts: [
      { label: "Platform", value: "PC (Steam AppID 2713000)" },
      { label: "Operating system", value: "Windows 10 / Windows 11 64-bit" },
      { label: "Spec tiers", value: "Minimum, Recommended, Ultra" },
      { label: "Source", value: "Steam store page (verbatim)" },
      { label: "Steam Deck status", value: "Not listed as of 2026-08-28" },
      { label: "Controller support", value: "Yes, including DualSense" },
      { label: "Reference source", value: "PCGamingWiki cross-check" },
    ],
    modules: [
      {
        id: "system-requirements-minimum",
        type: "prose",
        heading: "Minimum requirements (verbatim from Steam)",
        body:
          "The Steam store page for Resonance: A Plague Tale Legacy publishes the official minimum tier as the entry point for PC players. The minimum tier lists the supported operating systems, the entry-level CPU, GPU, and RAM targets, plus the storage floor for a fresh install. All values here are taken verbatim from the Steam product page for AppID 2713000.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "system-requirements-recommended-ultra",
        type: "prose",
        heading: "Recommended and Ultra tiers",
        body:
          "Asobo Studio separates the recommended tier (steady 1080p at 60 fps) from the Ultra tier (higher fidelity with stronger GPU demand) on the Steam store page. Both tiers, plus the supported operating systems (Windows 10 / Windows 11 64-bit), appear verbatim on the Steam product page for AppID 2713000. The Ultra tier targets higher-resolution play with higher VRAM headroom.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "system-requirements-deck",
        type: "prose",
        heading: "Steam Deck performance",
        body:
          "Steam Deck verified performance (Verified, Playable, Unsupported) is dated status as of 2026-08-28. Valve has not yet labelled Resonance: A Plague Tale Legacy on the Deck Verified list; treat portable play as unconfirmed until a rating publishes. Check the official Steam store page for the latest verified status.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "system-requirements-storage-peripherals",
        type: "prose",
        heading: "Storage and peripherals",
        body:
          "The Steam product page lists the install footprint and required free space; a standard SSD is recommended. The game supports controllers on PC, including DualSense on compatible hardware. External peripherals and ultrawide display support are surfaced in the same Steam listing.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "system-requirements-pcgw",
        type: "prose",
        heading: "Notes from PCGamingWiki",
        body:
          "PCGamingWiki mirrors the official Steam specs and adds reference notes on driver versions and ultrawide support. PCGamingWiki is a reference source only; do not use it to override verbatim Steam requirements. Use PCGamingWiki for driver and ultrawide context, then confirm against the Steam product page.",
        links: [RESONANCE_PCGW],
      },
      {
        id: "system-requirements-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "PC system requirements (minimum, recommended, Ultra), supported operating systems, storage footprint, and controller support are sourced verbatim from the Steam store page for AppID 2713000 as of 2026-08-28. PCGamingWiki mirrors Steam specs and adds ultrawide and driver context; PCGamingWiki is `reference`-tier and is never used to override official Steam requirements. Not announced as of 2026-08-28: Steam Deck verified / playable / unsupported rating; precise frame-rate targets per tier; ultrawide certifications.",
      },
    ],
    faqIds: [
      "fixed-system-requirements-min",
      "fixed-system-requirements-ultra",
      "fixed-system-requirements-steam-deck",
      "fixed-system-requirements-controllers",
    ],
    relatedPageIds: ["home", "fixed-release-overview-en-us", "fixed-platforms-console-en-us"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // platforms-console (status)
  // ---------------------------------------------------------------------
  {
    id: "fixed-platforms-console-en-us",
    translationKey: "platforms-console",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms",
    url: "/platforms",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance: A Plague Tale Legacy Platforms & Console Versions",
    seoTitle: "Resonance: A Plague Tale Legacy Platforms & Console Versions",
    metaDescription:
      "Resonance: A Plague Tale Legacy platforms: PS5, PS5 Pro, Xbox Series X|S, Steam, and Xbox Game Pass. Console-specific enhancements from official sources.",
    summary:
      "Resonance: A Plague Tale Legacy launches on four confirmed channels: Steam for PC (AppID 2713000), PlayStation 5 (including the PS5 Pro SKU), Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. Each channel is published in its respective official store listing, with the Heritage Pack DLC available as a pre-order bonus on the same channels.",
    hero: {
      eyebrow: "Platforms & consoles",
      subtitle:
        "Resonance: A Plague Tale Legacy launches on Steam (AppID 2713000), PlayStation 5 (incl. PS5 Pro SKU), Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. Each channel is published in its respective official store listing, with the Heritage Pack DLC available as a pre-order bonus on the same channels.",
      ctas: [
        { label: "Release Date", href: "/release" },
        { label: "Editions & Pricing", href: "/editions" },
        { label: "Game Pass", href: "/xbox-game-pass" },
      ],
    },
    quickAnswer:
      "Resonance: A Plague Tale Legacy launches on four confirmed channels: Steam for PC (AppID 2713000), PlayStation 5 (including the PS5 Pro SKU), Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. Each channel is published in its respective official store listing, with the Heritage Pack DLC available as a pre-order bonus on the same channels.",
    keyFacts: [
      { label: "PC", value: "Steam AppID 2713000" },
      { label: "PlayStation 5", value: "PS5 + PS5 Pro SKU on PlayStation Store" },
      { label: "Xbox", value: "Xbox Series X|S, Smart Delivery" },
      { label: "Subscription", value: "Xbox Game Pass / PC Game Pass day one" },
      { label: "Cross-progression", value: "Not announced as of 2026-08-28" },
      { label: "Heritage Pack DLC", value: "Pre-order on all channels" },
    ],
    modules: [
      {
        id: "platforms-console-steam",
        type: "prose",
        heading: "Steam (PC)",
        body:
          "The Steam store page for AppID 2713000 is the canonical PC listing. Steam supports controllers (including DualSense on compatible hardware) and ships with the minimum, recommended, and Ultra tier specs published on the same listing. For verbatim PC specs see the /system-requirements/ page.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "platforms-console-ps5",
        type: "prose",
        heading: "PlayStation 5 and PS5 Pro",
        body:
          "The PlayStation Store product page lists both the PS5 and PS5 Pro SKUs under one product entry. The PS5 Pro enhanced mode details (resolution target, frame-rate target) are not announced as of 2026-08-28; treat PS5 Pro specifics as dated status until Asobo Studio or Sony publishes the patch notes. Standard PS5 hardware is supported from launch.",
        links: [RESONANCE_PSN],
      },
      {
        id: "platforms-console-xbox",
        type: "prose",
        heading: "Xbox Series X|S",
        body:
          "The Xbox Store / Microsoft Store listing confirms the day-one SKU for both Xbox Series X and Xbox Series S. The Xbox page also confirms Xbox Game Pass and PC Game Pass day-one status, and lists Smart Delivery support for cross-generation ownership where applicable. Xbox Series X and Xbox Series S ship the same content with Smart Delivery.",
        links: [RESONANCE_XBOX],
      },
      {
        id: "platforms-console-game-pass",
        type: "prose",
        heading: "Xbox Game Pass / PC Game Pass day one",
        body:
          "Xbox Game Pass and PC Game Pass both receive Resonance: A Plague Tale Legacy on day one. Tier confirmation (Ultimate, PC, Console) is published on the Xbox Store / Microsoft Store listing. Full tier detail lives on the /xbox-game-pass/ page.",
        links: [RESONANCE_XBOX, RESONANCE_FOCUS],
      },
      {
        id: "platforms-console-cross-progression",
        type: "prose",
        heading: "Cross-progression status",
        body:
          "Cross-progression between PS5, Xbox, and Steam is not announced as of 2026-08-28. Save transfer, cross-play, and account-linked entitlements remain unconfirmed until Asobo Studio, Focus Entertainment, or platform holders publish the policy. Watch the official store pages for dated status updates.",
        links: [RESONANCE_STEAM, RESONANCE_PSN, RESONANCE_XBOX],
      },
      {
        id: "platforms-console-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Current-game facts: PC (Steam AppID 2713000), PS5 + PS5 Pro SKU, Xbox Series X|S SKU, Xbox Game Pass + PC Game Pass day one, Smart Delivery support — sourced only from the Steam store page, PlayStation Store product page, Xbox Store / Microsoft Store listing, and Focus Entertainment press release as of 2026-08-28. Not announced as of 2026-08-28: cross-progression between PS5, Xbox and Steam; PS5 Pro native 4K and 60 fps target frame; cross-play policies; save transfer policies.",
      },
    ],
    faqIds: [
      "fixed-platforms-console-on-ps5",
      "fixed-platforms-console-on-xbox",
      "fixed-platforms-console-cross-progression",
      "fixed-platforms-console-ps5-pro",
    ],
    relatedPageIds: [
      "home",
      "fixed-release-overview-en-us",
      "fixed-editions-pricing-en-us",
      "fixed-xbox-game-pass-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // editions-pricing (status)
  // ---------------------------------------------------------------------
  {
    id: "fixed-editions-pricing-en-us",
    translationKey: "editions-pricing",
    locale: "en-US",
    routeKind: "fixed",
    slug: "editions",
    url: "/editions",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance: A Plague Tale Legacy Editions, Pricing & Heritage Pack",
    seoTitle: "Resonance: A Plague Tale Legacy Editions, Pricing & Heritage Pack",
    metaDescription:
      "Resonance: A Plague Tale Legacy editions and pricing, including Standard, Collector's edition, and Heritage Pack DLC contents from official sources.",
    summary:
      "Resonance: A Plague Tale Legacy ships in a Standard edition and a Collector's edition tier, with edition contents published on the official PlayStation Store product page and Steam store page (AppID 2713000). The Heritage Pack is a separate pre-order DLC that bundles the Minoan Sword, Alec's Pendant, and a digital art book.",
    hero: {
      eyebrow: "Editions & pricing",
      subtitle:
        "Resonance: A Plague Tale Legacy ships in a Standard edition and a Collector's edition tier, with edition contents published on the official PlayStation Store product page and Steam store page (AppID 2713000). The Heritage Pack is a separate pre-order DLC.",
      ctas: [
        { label: "Release Date", href: "/release" },
        { label: "Platforms", href: "/platforms" },
        { label: "Heritage Pack", href: "/heritage-pack" },
      ],
    },
    quickAnswer:
      "Resonance: A Plague Tale Legacy ships in a Standard edition and a Collector's edition tier, with edition contents published on the official PlayStation Store product page and Steam store page (AppID 2713000). The Heritage Pack is a separate pre-order DLC that bundles the Minoan Sword, Alec's Pendant, and a digital art book. All edition contents and pricing in this article are sourced strictly from official stores and the Focus Entertainment press release.",
    keyFacts: [
      { label: "Standard edition", value: "Base game on all platforms" },
      { label: "Collector's edition", value: "Physical + digital extras (PlayStation Store)" },
      { label: "Heritage Pack DLC", value: "Minoan Sword, Alec's Pendant, digital art book" },
      { label: "Heritage Pack eligibility", value: "Pre-orders + selected edition tiers" },
      { label: "Source", value: "PlayStation Store, Steam Store, Focus press release" },
      { label: "Pre-order window", value: "Closed at launch" },
    ],
    modules: [
      {
        id: "editions-pricing-standard",
        type: "prose",
        heading: "Standard edition",
        body:
          "The Standard edition contains the base game: Sophia's medieval timeline, the ancient Minoan branch, the dynamic melee loop, and the Light Weaving (Minoan sphere + Daedalus) puzzle system. The Standard SKU is the default listing on Steam, PlayStation Store, and Xbox Store.",
        links: [RESONANCE_STEAM, RESONANCE_PSN, RESONANCE_XBOX],
      },
      {
        id: "editions-pricing-collectors",
        type: "prose",
        heading: "Collector's edition",
        body:
          "The Collector's edition tier is published on the PlayStation Store product page and includes physical and digital extras. Exact contents (statue, art book print, soundtrack disc, and other extras) are listed verbatim on the PlayStation Store product page. Any physical SKU not listed there is dated status.",
        links: [RESONANCE_PSN],
      },
      {
        id: "editions-pricing-heritage-pack",
        type: "prose",
        heading: "Heritage Pack DLC",
        body:
          "The Heritage Pack is a separate pre-order DLC available on Steam, PlayStation Store, and Xbox Store. Contents include the Minoan Sword, Alec's Pendant, and a digital art book. Eligibility covers pre-orders placed before launch. Full contents and activation live on the /heritage-pack/ page.",
        links: [RESONANCE_HERITAGE_DLC, RESONANCE_FOCUS],
      },
      {
        id: "editions-pricing-matrix",
        type: "prose",
        heading: "Per-platform price matrix",
        body:
          "- Steam (AppID 2713000) — Standard published on Steam store page; Collector's edition published on Steam store page where offered; Heritage Pack is a separate pre-order DLC.\n- PlayStation 5 / PS5 Pro — Standard published on PlayStation Store; Collector's edition published on PlayStation Store product page; Heritage Pack is a separate pre-order DLC.\n- Xbox Series X|S — Standard published on Xbox Store; Collector's edition published on Xbox Store where offered; Heritage Pack is a separate pre-order DLC.\n\nExact prices change by region and platform. Always confirm the final cart price at the official store page before purchase.",
        links: [RESONANCE_STEAM, RESONANCE_PSN, RESONANCE_XBOX],
      },
      {
        id: "editions-pricing-versus-heritage",
        type: "prose",
        heading: "Edition contents vs Heritage Pack",
        body:
          "The Collector's edition and the Heritage Pack DLC are distinct products: the Collector's edition is a higher SKU tier that ships with physical or bundled digital extras, while the Heritage Pack is a downloadable content bundle available to pre-order customers. Owners of the Collector's edition should still confirm whether the Heritage Pack DLC is included or sold separately on the official store page.",
        links: [RESONANCE_HERITAGE_DLC],
      },
      {
        id: "editions-pricing-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Standard edition and Collector's edition tier contents and pricing; Heritage Pack DLC contents (Minoan Sword, Alec's Pendant, digital art book); per-platform availability — sourced strictly from the Steam store page, PlayStation Store product page, Xbox Store / Microsoft Store listing, and Focus Entertainment press release as of 2026-08-28. Not announced as of 2026-08-28: any Collector's edition contents not explicitly listed on the PlayStation Store product page; any Heritage Pack extras beyond the Minoan Sword, Alec's Pendant, and digital art book.",
      },
    ],
    faqIds: [
      "fixed-editions-pricing-what-editions",
      "fixed-editions-pricing-collectors",
      "fixed-editions-pricing-heritage-pack",
      "fixed-editions-pricing-pre-order",
    ],
    relatedPageIds: [
      "home",
      "fixed-release-overview-en-us",
      "fixed-platforms-console-en-us",
      "fixed-heritage-pack-dlc-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // xbox-game-pass (status)
  // ---------------------------------------------------------------------
  {
    id: "fixed-xbox-game-pass-en-us",
    translationKey: "xbox-game-pass",
    locale: "en-US",
    routeKind: "fixed",
    slug: "xbox-game-pass",
    url: "/xbox-game-pass",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance: A Plague Tale Legacy Xbox Game Pass",
    seoTitle: "Resonance: A Plague Tale Legacy Xbox Game Pass",
    metaDescription:
      "Plague Tale Legacy Xbox Game Pass listing for Resonance: A Plague Tale Legacy. Day-one tier status for Ultimate vs PC Game Pass, streaming plan for August 27.",
    summary:
      "Plague Tale Legacy Xbox Game Pass listing is confirmed for the August 27, 2026 worldwide launch, the same date as Steam AppID 2713000, PlayStation 5 and Xbox retail SKUs. The Focus Entertainment press release confirms day-one Game Pass inclusion. The exact launch-day tier split between Xbox Game Pass Ultimate, PC Game Pass and Xbox Game Pass Standard is not separately broken out by Microsoft as of 2026-08-28.",
    hero: {
      eyebrow: "Xbox Game Pass",
      subtitle:
        "Plague Tale Legacy Xbox Game Pass listing is confirmed for the August 27, 2026 worldwide launch. The Focus Entertainment press release confirms day-one Game Pass inclusion. The exact launch-day tier split between Xbox Game Pass Ultimate, PC Game Pass and Xbox Game Pass Standard is not separately broken out by Microsoft as of 2026-08-28.",
      ctas: [
        { label: "Release Date", href: "/release" },
        { label: "Platforms", href: "/platforms" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    quickAnswer:
      "Yes. Plague Tale Legacy Xbox Game Pass listing is confirmed for the August 27, 2026 worldwide launch, the same date as Steam AppID 2713000, PlayStation 5 and Xbox retail SKUs. The Focus Entertainment press release confirms day-one Game Pass inclusion. The exact launch-day tier split between Xbox Game Pass Ultimate, PC Game Pass and Xbox Game Pass Standard is not separately broken out by Microsoft as of 2026-08-28.",
    keyFacts: [
      { label: "Day-one Game Pass", value: "Confirmed (Focus press release)" },
      { label: "Launch date", value: "August 27, 2026" },
      { label: "Tier split", value: "Not announced as of 2026-08-28" },
      { label: "Streaming", value: "Listed in Microsoft Store metadata; rollout not announced" },
      { label: "Heritage Pack entitlement", value: "Not included with Game Pass" },
      { label: "Subscription help", value: "Raise activation issues with Xbox Support" },
    ],
    modules: [
      {
        id: "xbox-game-pass-schedule",
        type: "prose",
        heading: "Plague Tale Legacy Xbox Game Pass Day-One Schedule and Tier Status",
        body:
          "The Xbox Store listing for Resonance: A Plague Tale Legacy lists the title inside the Game Pass catalog with a launch-day unlock date of August 27, 2026, matching the Steam AppID 2713000 release date and the PlayStation 5 launch window. Subscribers who already pay for an active Xbox Game Pass membership on or before launch day can download and play the full standard edition without an additional purchase, including the dual-timeline campaign that moves between Sophia's medieval segments and the ancient Minoan branch on Minotaur's Island.\n\nThe Focus Entertainment press release treats day-one Game Pass inclusion as a confirmed launch feature for the A Plague Tale franchise spinoff, alongside the Steam pre-purchase and the PS5 / PS5 Pro SKUs. Cloud streaming support for the title is listed in the Microsoft Store metadata but a specific GeForce NOW or xCloud frame target has not been published; treat any cloud performance number as not announced as of 2026-08-28.",
        links: [RESONANCE_XBOX, RESONANCE_FOCUS, RESONANCE_IGN],
      },
      {
        id: "xbox-game-pass-tier",
        type: "prose",
        heading: "Which Game Pass Tier Unlocks the Game",
        body:
          "The Xbox Store product page surfaces the title under the unified Game Pass umbrella but does not call out a separate day-one tier split. Based on the standard Microsoft catalog behavior for Asobo Studio / Focus Entertainment day-one launches, Resonance: A Plague Tale Legacy is expected to roll into the day-one catalog on the tiers that include new releases on launch day, while the lower Xbox Game Pass Standard tier historically adds new titles on a delay. Whether the launch-day tier split includes Standard or only Ultimate and PC Game Pass is not announced as of 2026-08-28 and should be confirmed directly on the Microsoft Store product page before subscribing specifically for this title.\n\nPC players who want the day-one unlock through the subscription service will need the PC Game Pass tier, which is sold separately from the console subscription. The Steam pre-purchase path remains available alongside the Game Pass option and grants the Heritage Pack DLC when ordered before launch.",
        links: [RESONANCE_XBOX],
      },
      {
        id: "xbox-game-pass-claim",
        type: "prose",
        heading: "How to Claim the Game on Game Pass",
        body:
          "On Xbox Series X|S, search for Resonance: A Plague Tale Legacy inside the Game Pass tab of the Xbox Store or the Xbox app, then choose Install. On PC, open the Xbox app or the Microsoft Store, filter for PC Game Pass, and install the title from there. Cloud players can stream the title through the Xbox app on supported devices once the cloud entitlement is enabled; the specific cloud rollout cadence is not separately listed in the Microsoft Store metadata as of 2026-08-28.\n\nIf the title does not appear in your Game Pass catalog on launch day, sign out and back into your Xbox account, confirm your subscription status, and refresh the Game Pass tab. Subscription activation issues that prevent the day-one unlock should be raised with Xbox Support rather than treated as a missing Game Pass listing.",
        links: [RESONANCE_XBOX],
      },
      {
        id: "xbox-game-pass-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Day-one Game Pass inclusion and the August 27, 2026 launch date are sourced from the Xbox Store / Microsoft Store listing and the Focus Entertainment press release as of 2026-08-28. The exact launch-day tier split between Xbox Game Pass Ultimate, PC Game Pass and Xbox Game Pass Standard is not announced as of 2026-08-28. Cloud streaming frame target and rollout cadence are not announced as of 2026-08-28. Heritage Pack entitlement for Game Pass subscribers is not advertised and is not announced as of 2026-08-28. Subscription activation issues should be raised with Xbox Support and are outside the scope of this page.",
      },
    ],
    faqIds: [
      "fixed-xbox-game-pass-on-launch",
      "fixed-xbox-game-pass-tier",
      "fixed-xbox-game-pass-cloud",
      "fixed-xbox-game-pass-heritage",
    ],
    relatedPageIds: [
      "home",
      "fixed-release-overview-en-us",
      "fixed-platforms-console-en-us",
      "fixed-heritage-pack-dlc-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // review-roundup (list)
  // ---------------------------------------------------------------------
  {
    id: "fixed-review-roundup-en-us",
    translationKey: "review-roundup",
    locale: "en-US",
    routeKind: "fixed",
    slug: "reviews",
    url: "/reviews",
    pageType: "list",
    presentation: { shell: "hub" },
    h1: "Resonance: A Plague Tale Legacy Review Roundup",
    seoTitle: "Resonance: A Plague Tale Legacy Review Roundup",
    metaDescription:
      "Plague Tale Legacy review roundup from IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun with launch verdicts and critic scores dated 2026-08-28.",
    summary:
      "Plague Tale Legacy review roundup: Launch reviews for Resonance: A Plague Tale Legacy are broadly positive across five outlets with day-one coverage dated 2026-08-26 to 2026-08-28. IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun all published launch reviews, with Rock Paper Shotgun dated 2026-08-26. Critics credit the dual-timeline structure, the Light Weaving puzzle system, and the dynamic melee loop.",
    hero: {
      eyebrow: "Reviews",
      subtitle:
        "Launch reviews for Resonance: A Plague Tale Legacy are broadly positive across IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun, with day-one coverage dated 2026-08-26 to 2026-08-28. Critics credit the dual-timeline structure, the Light Weaving puzzle system, and the dynamic melee loop.",
      ctas: [
        { label: "Metacritic", href: "/metacritic" },
        { label: "Gameplay", href: "/gameplay" },
        { label: "Characters", href: "/characters" },
      ],
    },
    quickAnswer:
      "Plague Tale Legacy review roundup: Launch reviews for Resonance: A Plague Tale Legacy are broadly positive across five outlets with day-one coverage dated 2026-08-26 to 2026-08-28. IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun all published launch reviews, with Rock Paper Shotgun dated 2026-08-26. Critics credit the dual-timeline structure, the Light Weaving puzzle system, and the dynamic melee loop. Minor reservations cluster around pacing inside the Minoan island trials rather than the combat or puzzle design.",
    keyFacts: [
      { label: "Outlets", value: "IGN, Eurogamer, Insider Gaming, Destructoid, Rock Paper Shotgun" },
      { label: "Coverage window", value: "2026-08-26 to 2026-08-28" },
      { label: "RPS verdict", value: "\"Competent action game spinoff\" (no numeric scale)" },
      { label: "Common praise", value: "Dual-timeline, Light Weaving, dynamic melee" },
      { label: "Common criticism", value: "Minoan island trial pacing" },
    ],
    modules: [
      {
        id: "review-roundup-ign",
        type: "prose",
        heading: "IGN Launch Verdict",
        body:
          "IGN's launch review treats Resonance: A Plague Tale Legacy as a confident franchise spinoff that moves the A Plague Tale series away from Amicia and Hugo toward Sophia and the new Minoan branch. The reviewer credits the dynamic melee loop with dagger, chain sword, parry and kick inputs as the strongest mechanical hook, alongside the Light Weaving puzzles that combine the Minoan sphere with Daedalus-themed light beams. Recurring criticisms in the IGN piece focus on the late-game Minoan island pacing rather than the combat or puzzle design.",
        links: [RESONANCE_IGN],
      },
      {
        id: "review-roundup-eurogamer",
        type: "prose",
        heading: "Eurogamer Launch Verdict",
        body:
          "Eurogamer's launch coverage frames the game as a thoughtful evolution of the Plague Tale formula, emphasizing how the medieval Sophia segments and the ancient Minoan timeline weave together narratively through the Macula lineage. The outlet praises the boss design tied to Macula's legacy creature roster and the way the chain sword changes the parry window. Eurogamer's reservations cluster around tutorial density during the first Minoan sphere unlock rather than the dual-timeline storytelling.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "review-roundup-insider",
        type: "prose",
        heading: "Insider Gaming Launch Verdict",
        body:
          "Insider Gaming's launch coverage zeroes in on the moment-to-moment combat feel and the way Sophia's kit opens up as the Minoan sphere abilities unlock across chapters. The reviewer credits the game for landing both stealth encounters in Sophia's medieval segments and arena-style Minoan trials without breaking the campaign's pacing. Insider Gaming's negatives highlight some late-game trial repetition rather than the core combat or puzzle systems.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "review-roundup-destructoid",
        type: "prose",
        heading: "Destructoid Launch Verdict",
        body:
          "Destructoid's launch review positions Resonance: A Plague Tale Legacy as a competent, well-paced action adventure that respects the Plague Tale franchise's narrative roots while establishing a new protagonist. The piece praises the chain sword parry timing, the Minoan sphere beam puzzles, and the way the Macula's legacy boss encounters escalate across chapters. Destructoid flags a small number of late-game difficulty spikes inside the Minotaur's Island trials as the main friction point.",
        links: [RESONANCE_DESTRUCTOID],
      },
      {
        id: "review-roundup-rps",
        type: "prose",
        heading: "Rock Paper Shotgun Launch Verdict",
        body:
          "Rock Paper Shotgun's 2026-08-26 launch review describes Resonance: A Plague Tale Legacy as a \"competent action game spinoff\" that successfully transplants the Plague Tale stealth and puzzle language into a new protagonist and a new timeline. The reviewer highlights the way the medieval and Minoan branches alternate without losing narrative momentum, and credits the dynamic melee combat for keeping encounters fresh. RPS's reservations cluster around boss repetition rather than the underlying combat or puzzle design.",
        links: [RESONANCE_RPS],
      },
      {
        id: "review-roundup-themes",
        type: "prose",
        heading: "Plague Tale Legacy Review Roundup Themes",
        body:
          "Across the five launch reviews, three themes repeat consistently. First, the dual-timeline structure between Sophia's medieval chapters and the ancient Minoan branch is treated as the headline creative swing, with each outlet crediting Asobo Studio for carrying two narrative registers inside a single campaign. Second, the dynamic melee loop with dagger, chain sword, parry and kick is praised as a meaningful mechanical step forward from the bow-and-sling combat of A Plague Tale: Requiem. Third, the Light Weaving puzzles that combine the Minoan sphere with Daedalus-style beams are described as a fresh puzzle language that fits the franchise.\n\nThe recurring criticism is narrower. Multiple reviewers flag pacing friction inside the Minotaur's Island trials and some late-game difficulty spikes in the Macula's legacy boss encounters, while still rating the campaign as a coherent launch package. None of the five launch reviews dismiss the game; the disagreements are about trial pacing rather than the core design pillars.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER, RESONANCE_RPS],
      },
      {
        id: "review-roundup-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun are the five launch outlets with day-one coverage dated 2026-08-26 to 2026-08-28. The Rock Paper Shotgun 2026-08-26 review describes Resonance: A Plague Tale Legacy as a \"competent action game spinoff.\" Verdicts summarized above are attributed to each outlet directly and dated 2026-08-28. Numeric review scores attributed to specific outlets should be verified against the original review because aggregator numbers refresh after launch day. A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) are referenced only as franchise context; their scores are not current-game facts for Resonance.",
      },
    ],
    faqIds: [
      "fixed-review-roundup-embargo",
      "fixed-review-roundup-rps-score",
      "fixed-review-roundup-mino-branch",
      "fixed-review-roundup-positive",
      "fixed-review-roundup-latest-score",
    ],
    relatedPageIds: [
      "home",
      "fixed-release-overview-en-us",
      "fixed-metacritic-score-en-us",
      "fixed-how-long-to-beat-en-us",
      "fixed-gameplay-explained-en-us",
      "fixed-characters-overview-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // metacritic-score (status)
  // ---------------------------------------------------------------------
  {
    id: "fixed-metacritic-score-en-us",
    translationKey: "metacritic-score",
    locale: "en-US",
    routeKind: "fixed",
    slug: "metacritic",
    url: "/metacritic",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance: A Plague Tale Legacy Metacritic Score",
    seoTitle: "Resonance: A Plague Tale Legacy Metacritic Score",
    metaDescription:
      "Resonance: A Plague Tale Legacy Metacritic score status by platform as of 2026-08-28. Critic and user score tracking and where to verify the official aggregator.",
    summary:
      "Plague Tale Legacy Metacritic score has not stabilized as of 2026-08-28 because the title launched on August 27, 2026 and the first-night tally is still settling. The Metacritic product page exists and will refresh as more critic and user reviews are submitted across PC, PlayStation 5 and Xbox Series X|S.",
    hero: {
      eyebrow: "Metacritic",
      subtitle:
        "Plague Tale Legacy Metacritic score has not stabilized as of 2026-08-28 because the title launched on August 27, 2026 and the first-night tally is still settling. The Metacritic product page exists and will refresh as more critic and user reviews are submitted across PC, PlayStation 5 and Xbox Series X|S.",
      ctas: [
        { label: "Reviews", href: "/reviews" },
        { label: "Release Date", href: "/release" },
        { label: "How Long to Beat", href: "/how-long-to-beat" },
      ],
    },
    quickAnswer:
      "Plague Tale Legacy Metacritic score has not stabilized as of 2026-08-28 because the title launched on August 27, 2026 and the first-night tally is still settling. The Metacritic product page exists and will refresh as more critic and user reviews are submitted across PC, PlayStation 5 and Xbox Series X|S. Treat any specific number outside the official aggregator as unverified until the page settles within the first week.",
    keyFacts: [
      { label: "Aggregator status", value: "Page exists; tally still settling" },
      { label: "Launch date", value: "August 27, 2026" },
      { label: "Critic submissions", value: "Thin at launch; populating within first week" },
      { label: "User score", value: "Threshold not yet met as of 2026-08-28" },
      { label: "Per-platform tabs", value: "PC, PS5, Xbox Series X|S" },
      { label: "RPS scale", value: "Qualitative; no numeric score" },
    ],
    modules: [
      {
        id: "metacritic-score-by-platform",
        type: "prose",
        heading: "Plague Tale Legacy Metacritic Score Status by Platform",
        body:
          "The Metacritic product page for Resonance: A Plague Tale Legacy is published and tracks a single combined score alongside per-platform tabs. On launch day the aggregator showed only the early critic submissions, and the user score had not yet crossed the threshold needed for Metacritic to publish a stable user rating. Until at least a few dozen critic reviews are indexed across PC, PlayStation 5 and Xbox Series X|S, the displayed number should be treated as a partial tally rather than a final score.\n\nThe per-platform tabs separate PC (Windows), PlayStation 5 and Xbox Series X|S, but the critic and user counts on each tab were thin at launch. Reviewers from IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun have all been submitted to Metacritic; additional submissions typically arrive within the first week of release, after which the aggregator number stabilizes.",
        links: [RESONANCE_METACRITIC],
      },
      {
        id: "metacritic-score-tracking",
        type: "prose",
        heading: "Critic and User Score Tracking",
        body:
          "Critic scores on Metacritic come from the submitted outlets that publish a numeric review. For Resonance: A Plague Tale Legacy, the five launch outlets with day-one coverage date their pieces between 2026-08-26 and 2026-08-28 and use a mix of numeric and qualitative scales. Rock Paper Shotgun does not use a numeric review scale, so any aggregator number attributed to RPS should be treated as a paraphrase rather than a numeric entry on the Metacritic page.\n\nUser scores on Metacritic require a minimum number of verified user ratings before the aggregator displays a stable score. At launch, the user rating count is too low for the page to settle, so the displayed user score should not be quoted as final. Recheck the Metacritic product page after the first week of release for a more representative tally.",
        links: [RESONANCE_METACRITIC],
      },
      {
        id: "metacritic-score-verify",
        type: "prose",
        heading: "Where to Verify the Aggregator Number",
        body:
          "The authoritative Metacritic page for Resonance: A Plague Tale Legacy is the single product page on the Metacritic domain, with per-platform tabs for PC, PlayStation 5 and Xbox Series X|S. The aggregator page also surfaces a \"critic reviews\" tab and a \"user reviews\" tab that show the underlying sources for the score, which is the right place to confirm any number that is paraphrased elsewhere. Until the aggregator tab stabilizes, rely on the outlet reviews linked below rather than the headline number.\n\nIf a critic score is required for a guide or wiki edit, cite the underlying outlet review rather than the aggregator. If a user score is required, note that the user count is still building as of 2026-08-28 and quote the score only once the aggregator has stabilized.",
        links: [RESONANCE_METACRITIC],
      },
      {
        id: "metacritic-score-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Metacritic product page for Resonance: A Plague Tale Legacy exists and is being populated as of 2026-08-28. A stable Metacritic critic or user score has not been published as of 2026-08-28 and should not be quoted as final. Rock Paper Shotgun does not use a numeric review scale, so any aggregator number attributed to RPS is a paraphrase, not a numeric submission. Critic and user scores cited here should be rechecked on the Metacritic product page after the first week of release for a stable tally. A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) scores are not current-game facts for Resonance.",
      },
    ],
    faqIds: [
      "fixed-metacritic-score-current",
      "fixed-metacritic-score-platform",
      "fixed-metacritic-score-stabilize",
      "fixed-metacritic-score-rps",
    ],
    relatedPageIds: [
      "home",
      "fixed-review-roundup-en-us",
      "fixed-release-overview-en-us",
      "fixed-how-long-to-beat-en-us",
      "fixed-platforms-console-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // how-long-to-beat (reference)
  // ---------------------------------------------------------------------
  {
    id: "fixed-how-long-to-beat-en-us",
    translationKey: "how-long-to-beat",
    locale: "en-US",
    routeKind: "fixed",
    slug: "how-long-to-beat",
    url: "/how-long-to-beat",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance: A Plague Tale Legacy How Long to Beat",
    seoTitle: "Resonance: A Plague Tale Legacy How Long to Beat",
    metaDescription:
      "Resonance: A Plague Tale Legacy how long to beat: main story, side content and completionist playtime status from HowLongToBeat and launch press, dated 2026-08-28.",
    summary:
      "Plague Tale Legacy how long to beat: A stable HowLongToBeat entry with main, side and completionist hours has not been published as of 2026-08-28 because the title only launched on August 27, 2026. The HowLongToBeat product page exists and is being populated with user runs from the launch window.",
    hero: {
      eyebrow: "How long to beat",
      subtitle:
        "Plague Tale Legacy how long to beat: a stable HowLongToBeat entry with main, side and completionist hours has not been published as of 2026-08-28 because the title only launched on August 27, 2026. The HowLongToBeat product page exists and is being populated with user runs from the launch window.",
      ctas: [
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "Gameplay", href: "/gameplay" },
        { label: "Trophy & Achievements", href: "/trophy-achievements" },
      ],
    },
    quickAnswer:
      "Plague Tale Legacy how long to beat: A stable HowLongToBeat entry with main, side and completionist hours has not been published as of 2026-08-28 because the title only launched on August 27, 2026. The HowLongToBeat product page exists and is being populated with user runs from the launch window. Treat any specific number quoted outside the official HowLongToBeat page as unverified until the page stabilizes within the first two weeks of release.",
    keyFacts: [
      { label: "Main Story", value: "Not announced as of 2026-08-28" },
      { label: "Main + Extras", value: "Not announced as of 2026-08-28" },
      { label: "Completionist", value: "Not announced as of 2026-08-28" },
      { label: "Dual-timeline effect", value: "Minoan branch extends both Main and Completionist" },
      { label: "Source", value: "HowLongToBeat + launch press (qualitative)" },
    ],
    modules: [
      {
        id: "how-long-to-beat-main",
        type: "prose",
        heading: "Main Story Playtime",
        body:
          "The \"Main Story\" category on HowLongToBeat tracks the time required to roll credits on the default difficulty while doing only the quests that are required to finish the campaign. For a dual-timeline action adventure that moves between Sophia's medieval chapters and the ancient Minoan branch on Minotaur's Island, the Main Story timing typically scales with the chapter count, the average puzzle room length and the boss-fight retry count.\n\nThe Main Story timing for Resonance: A Plague Tale Legacy is not announced as of 2026-08-28. Launch-day press coverage from IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun discusses the campaign pacing in qualitative terms but does not publish a numeric Main Story hours figure. Check the HowLongToBeat product page after the first week of release for the first stable Main Story number.",
        links: [RESONANCE_HLTB, RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "how-long-to-beat-side",
        type: "prose",
        heading: "Side Content Playtime",
        body:
          "The \"Main + Extras\" category on HowLongToBeat tracks the time required to finish the campaign while completing the optional content that is naturally encountered on a first playthrough. For Resonance: A Plague Tale Legacy, this includes the discoverable lore items tied to Macula's lineage, the optional stealth encounters that appear in Sophia's medieval chapters, and any bonus content the Minoan branch offers outside the mandatory trial sequence.\n\nThe Main + Extras timing for Resonance: A Plague Tale Legacy is not announced as of 2026-08-28. Launch-day press coverage discusses side content qualitatively but does not publish a numeric hours figure. Treat any specific number quoted outside the official HowLongToBeat page as unverified until the page stabilizes.",
        links: [RESONANCE_HLTB],
      },
      {
        id: "how-long-to-beat-completionist",
        type: "prose",
        heading: "Completionist Playtime",
        body:
          "The \"Completionist\" category on HowLongToBeat tracks the time required to finish every piece of content the game offers, including optional collectibles, alternate outcomes, full upgrade trees, and any missable side quest. For Resonance: A Plague Tale Legacy, this includes every optional collectible in both Sophia's medieval chapters and the ancient Minoan branch, every Light Weaving puzzle variant, every Macula's legacy creature boss on the highest difficulty, and any post-credits content the campaign unlocks.\n\nThe Completionist timing for Resonance: A Plague Tale Legacy is not announced as of 2026-08-28. The 100% trophy and achievement list for the title is still being documented across PlayStation, Xbox and Steam, and the Completionist hours figure depends on that list being final. Recheck the HowLongToBeat product page after the first two weeks of release for the first stable Completionist number.",
        links: [RESONANCE_HLTB],
      },
      {
        id: "how-long-to-beat-verify",
        type: "prose",
        heading: "Plague Tale Legacy How Long to Beat Verification",
        body:
          "Once the HowLongToBeat product page stabilizes, the main, side and completionist hours figures will be the authoritative numbers for Resonance: A Plague Tale Legacy. For a citation in a guide or wiki edit, prefer the HowLongToBeat page over launch press because the press coverage only discusses pacing qualitatively. For trophy-related timing, cross-reference the playtime figures with the trophy / achievement list on the trophy page once both pages stabilize.",
        links: [RESONANCE_HLTB],
      },
      {
        id: "how-long-to-beat-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "A stable HowLongToBeat Main, Main + Extras or Completionist hours figure for Resonance: A Plague Tale Legacy is not announced as of 2026-08-28. Launch-day press coverage discusses campaign pacing qualitatively and does not publish numeric hours figures. The dual-timeline structure between Sophia's medieval chapters and the ancient Minoan branch is confirmed; the hour split between the two branches is not announced. Completionist timing depends on the trophy and achievement list being final, which is still being documented as of 2026-08-28. A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) playtime figures are not current-game facts for Resonance.",
      },
    ],
    faqIds: [
      "fixed-how-long-to-beat-main",
      "fixed-how-long-to-beat-side",
      "fixed-how-long-to-beat-completionist",
      "fixed-how-long-to-beat-mino-branch",
      "fixed-how-long-to-beat-cite",
    ],
    relatedPageIds: [
      "home",
      "fixed-walkthrough-en-us",
      "fixed-gameplay-explained-en-us",
      "fixed-trophy-achievements-en-us",
      "fixed-review-roundup-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  // ---------------------------------------------------------------------
  {
    id: "fixed-trophy-achievements-en-us",
    translationKey: "trophy-achievements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "trophy-achievements",
    url: "/trophy-achievements",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance: A Plague Tale Legacy Trophy & Achievement Roadmap",
    seoTitle: "Resonance: A Plague Tale Legacy Trophy & Achievement Roadmap",
    metaDescription:
      "Resonance: A Plague Tale Legacy 37-trophy PS5 roadmap (1 Platinum + 5 Gold + 9 Silver + 22 Bronze), 36-achievement Xbox/PC equivalent, four Gold collectibles, and the only confirmed missable, Like a Warrior (165 Resonance Points).",
    summary:
      "Plague Tale Legacy trophy roadmap: The PS5 SKU ships with 37 trophies split 1 Platinum + 5 Gold + 9 Silver + 22 Bronze, and the Xbox and PC SKUs ship with 36 achievements. The Platinum is 'The Sea Scorpion', the four Gold collectibles are Hoarder, Plunderer, Superstitious, and Like a Warrior, and Like a Warrior is the only confirmed missable because Resonance Points do not transfer via Chapter Select. Three exploration trophies (In the Name of My Kin, Sea You Later, Theatre Enthusiast), eleven combat Silver/Bronze trophies, and four creature Silvers (Refraction, Baitfish, Close Call, Unpredictable) round out the list.",
    hero: {
      eyebrow: "Trophy & achievements",
      subtitle:
        "Plague Tale Legacy trophy roadmap: PS5 ships with 37 trophies (1 Platinum + 5 Gold + 9 Silver + 22 Bronze); Xbox and PC ship with 36 achievements. The Platinum is 'The Sea Scorpion' and 'Like a Warrior' is the only confirmed missable because Resonance Points do not transfer via Chapter Select.",
      ctas: [
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "Gameplay", href: "/gameplay" },
        { label: "How Long to Beat", href: "/how-long-to-beat" },
      ],
    },
    quickAnswer:
      "Plague Tale Legacy trophy roadmap: The PS5 SKU ships with 37 trophies split 1 Platinum + 5 Gold + 9 Silver + 22 Bronze. The Xbox and PC SKUs ship with the equivalent 36-achievement list. The Platinum is 'The Sea Scorpion'; the four Gold collectibles are Hoarder (37 Relics), Plunderer (8 Blades), Superstitious (30 Charms), and Like a Warrior (165 Resonance Points). Like a Warrior is the only confirmed missable because Resonance Points do not carry over via Chapter Select. Thirteen chapter-completion Bronzes, three exploration trophies (In the Name of My Kin / Sea You Later / Theatre Enthusiast), eleven combat Silver/Bronze trophies, and four creature Silvers (Refraction, Baitfish, Close Call, Unpredictable) round out the list.",
    keyFacts: [
      { label: "PS5 total", value: "37 trophies (1 + 5 + 9 + 22)" },
      { label: "Xbox / PC total", value: "36 achievements" },
      { label: "Platinum", value: "The Sea Scorpion" },
      { label: "Gold collectibles", value: "Hoarder / Plunderer / Superstitious / Like a Warrior" },
      { label: "Only confirmed missable", value: "Like a Warrior (165 Resonance Points)" },
      { label: "Missable-adjacent traps", value: "Chapter 2 puppet show, Chapter 3 turtle" },
    ],
    modules: [
      {
        id: "trophy-achievements-tier-breakdown",
        type: "prose",
        heading: "PS5 Trophy Tier Breakdown (37 trophies)",
        body:
          "The PlayStation 5 SKU of Resonance: A Plague Tale Legacy ships with 37 trophies broken down across the four tiers: 1 Platinum + 5 Gold + 9 Silver + 22 Bronze. The tier counts are sourced from GamerSocialClub's 2026-08-11 launch-week trophy list, Game Rant's trophy and achievement guide, and RetroGems' complete achievement roadmap, all of which agree on the same 37-total / 1+5+9+22 split as of 2026-09-02.\n\nThe PlayStation Store product page continues to host the in-client trophy catalogue once the title installs; the PSNProfiles mirror page is the most stable secondary source for trophy names and unlock text.",
        links: [RESONANCE_PSN, RESONANCE_PSN_PROFILES, TROPHY_GSC_LIST, TROPHY_GAMERANT, TROPHY_RETROGEMS],
      },
      {
        id: "trophy-achievements-xbox-pc",
        type: "prose",
        heading: "Xbox and PC Achievement Equivalent (36 achievements)",
        body:
          "The Xbox Series X|S and PC (Steam) SKUs ship with the 36-achievement equivalent of the PlayStation trophy list. The Xbox and PC ladders drop the Platinum tier that the PlayStation SKU adds, which is what closes the per-platform delta from 37 down to 36. The Xbox Achievements and TrueAchievements mirror pages are the canonical secondary sources; SportsRant's All 36 Achievements guide is the launch-week reference for per-achievement Gamerscore values.\n\nCross-platform progression between PlayStation, Xbox, and Steam is not announced as of 2026-09-02; the trophy and achievement lists are tracked per-platform rather than per-account.",
        links: [RESONANCE_XBOX_ACH, RESONANCE_TRUE_ACH, TROPHY_SPORTSRANT],
      },
      {
        id: "trophy-achievements-platinum",
        type: "prose",
        heading: "Platinum Trophy: The Sea Scorpion",
        body:
          "'The Sea Scorpion' is the only Platinum trophy in the Resonance: A Plague Tale Legacy PS5 list. It unlocks once every other trophy on the list is unlocked, including the four Gold collectibles and all combat and creature Silvers. Launch-week guides confirm The Sea Scorpion is auto-unlocked by the PSN client once the trophy database records the final unlock, so no additional in-game action is required after the last prerequisite trophy pops.",
        links: [TROPHY_GAMERANT, TROPHY_GSC_100, TROPHY_IGN],
      },
      {
        id: "trophy-achievements-gold-collectibles",
        type: "prose",
        heading: "Gold Collectibles: Hoarder, Plunderer, Superstitious, Like a Warrior",
        body:
          "The five Gold trophies on the PS5 list are a mix of combat and collectible targets. The four Gold collectibles are: Hoarder (find all 37 Relics), Plunderer (find all 8 Blades), Superstitious (find all 30 Charms), and Like a Warrior (collect 165 Resonance Points within a single save file). The fifth Gold is tied to combat progress and is covered in the combat section below.\n\nEvery Gold collectible is reachable from one playthrough provided the player sweeps each chapter for the relevant pickup before the chapter rolls credits. Like a Warrior is the exception and is covered in the dedicated missable section below.",
        links: [TROPHY_GAMERANT, TROPHY_GSC_100, TROPHY_RETROGEMS],
      },
      {
        id: "trophy-achievements-missable-like-a-warrior",
        type: "prose",
        heading: "Only Confirmed Missable: Like a Warrior (165 Resonance Points)",
        body:
          "'Like a Warrior' is the only confirmed missable trophy in the Resonance: A Plague Tale Legacy list. The trophy unlocks when Sophia collects 165 Resonance Points within a single save file, and Resonance Points do not transfer via Chapter Select. A player who skips Resonance Point pickups in an early chapter and tries to top up later via Chapter Select will not see the cumulative total carry over, which soft-locks the trophy even if the player has hit 165 points across multiple saves.\n\nThe mitigation is to either clear the campaign once on Story while sweeping every visible Resonance Point pickup, or to start a second playthrough from a fresh save and pick up every Resonance Point in chapter order. Launch-week 100% guides flag Like a Warrior as the single most common reason Platinum runs end at 36/37.",
        links: [TROPHY_GSC_100, TROPHY_GAMERANT, TROPHY_RETROGEMS],
      },
      {
        id: "trophy-achievements-missable-adjacent",
        type: "prose",
        heading: "Missable-Adjacent Traps: Chapter 2 Puppet Show and Chapter 3 Turtle",
        body:
          "Two optional encounters are the most common missable-adjacent traps for a 100% run, even though neither is a confirmed missable on its own: the Chapter 2 puppet show that gates the 'Theatre Enthusiast' trophy, and the Chapter 3 turtle that gates the 'Sea You Later' trophy. Skipping either optional encounter blocks the relevant exploration trophy, and Chapter Select cannot revisit the encounter to re-pickup the trophy trigger.\n\nThe mitigation is to clear the puppet show carnival sequence in Chapter 2 and the turtle rescue encounter in Chapter 3 during the first playthrough. Both are surfaced in launch-week guides with explicit pickup notes; see the exploration trophies section below for trophy names and unlock conditions.",
        links: [TROPHY_PUPPET_GAMINGPROMAX, TROPHY_GAMERANT, TROPHY_GSC_100],
      },
      {
        id: "trophy-achievements-exploration",
        type: "prose",
        heading: "Exploration Trophies: In the Name of My Kin, Sea You Later, Theatre Enthusiast",
        body:
          "Three exploration trophies round out the collectible tier on the Resonance: A Plague Tale Legacy list: 'In the Name of My Kin' (find all 5 Theseus Echoes), 'Sea You Later' (complete the Chapter 3 turtle encounter), and 'Theatre Enthusiast' (watch the full Chapter 2 puppet show carnival). All three are Silver trophies that unlock automatically when their respective encounters are completed.\n\nSea You Later and Theatre Enthusiast are the most common over-the-shoulder look-aways during a run, so launch-week guides flag them as missable-adjacent even though they each have a single encounter trigger rather than a multi-step collection chain. In the Name of My Kin uses a 5-Echoes collection chain instead and is reachable on a single playthrough by sweeping each Minoan branch chapter.",
        links: [TROPHY_PUPPET_GAMINGPROMAX, TROPHY_GAMERANT, TROPHY_GSC_100, TROPHY_RETROGEMS],
      },
      {
        id: "trophy-achievements-chapter-bronzes",
        type: "prose",
        heading: "Chapter-Completion Bronzes (13 trophies)",
        body:
          "Thirteen of the 22 Bronze trophies in Resonance: A Plague Tale Legacy are chapter-completion trophies. Each Bronze unlocks the moment Sophia rolls credits on its named chapter, including the medieval chapters and the Minoan branch chapters. 'From Hell It Rose' is the Chapter 4 chapter-completion Bronze and unlocks immediately after the Minotaur Room puzzle cutscene and the post-puzzle soldier ambush.\n\nThe remaining 9 Bronze trophies split across chapter-scoped combat and story milestones (such as first parry, first stealth chain, and first Minoan sphere unlock) and are tracked in the launch-week retro achievement roadmaps. None of the chapter-completion Bronzes are missable on their own.",
        links: [TROPHY_GAMERANT, TROPHY_GSC_LIST, TROPHY_RETROGEMS],
      },
      {
        id: "trophy-achievements-combat",
        type: "prose",
        heading: "Combat Trophies: 11 Silver/Bronze Trophies (Returning the Favor, Cannon Fodder, Inherited Brutality, Untouchable, Excessive Force, Adaptable, No Holds Barred, Overboard, They Were People, Sharp Enough for You?, Skilled Maneuverer)",
        body:
          "The Resonance: A Plague Tale Legacy combat trophy set has 11 entries across Silver and Bronze tiers: Returning the Favor, Cannon Fodder, Inherited Brutality, Untouchable (Nightmare difficulty only), Excessive Force, Adaptable, No Holds Barred, Overboard, They Were People, Sharp Enough for You?, and Skilled Maneuverer. The set covers parry chains, kick chains, dagger finishes, chain sword combos, brute staggers, environmental kills (Overboard), and crowd reads (They Were People).\n\nUntouchable is the only combat trophy locked to a specific difficulty setting: it requires finishing the campaign on Nightmare without taking a hit during a chain of named encounters. Launch-week guides confirm the other ten combat trophies unlock on Story or Veteran and can be earned across multiple save files.",
        links: [TROPHY_GAMERANT, TROPHY_GSC_100, TROPHY_SPORTSRANT, TROPHY_RETROGEMS],
      },
      {
        id: "trophy-achievements-creatures",
        type: "prose",
        heading: "Creature Trophies: Refraction, Baitfish, Close Call, Unpredictable",
        body:
          "Four creature trophies sit on the Silver tier and track Sophia's encounters with Macula's legacy creatures: Refraction (the Macula's legacy creature in the lighthouse chamber), Baitfish (the sea creature on the coastal approach), Close Call (a near-miss scripted sequence against an armored brute variant), and Unpredictable (a phase-two Macula's legacy creature that requires reading three different attack telegraphs).\n\nNone of the creature trophies are missable on their own; each unlocks on the encounter it tracks, and the trophy database logs the unlock automatically. Launch-week guides note that Refraction and Unpredictable share the same parry and kick timing as the brute stagger-window unlock in Chapter 4.",
        links: [TROPHY_GAMERANT, TROPHY_SPORTSRANT, TROPHY_RETROGEMS],
      },
      {
        id: "trophy-achievements-misc",
        type: "prose",
        heading: "Remaining Bronze Trophies and Steam Achievement Cross-Reference",
        body:
          "The remaining Bronze trophies on the Resonance: A Plague Tale Legacy list cover tutorial completions, first stealth encounters, first Minoan sphere unlock, and first chain sword upgrade. None of the remaining Bronze trophies are missable, and all unlock as part of natural chapter progression.\n\nOn Steam, the equivalent Bronze achievements surface through the Steam client once the game installs; the Steam store page for AppID 2713000 displays the per-achievement progress bar as users unlock them. The community wiki entries for the Steam achievement list typically follow within the first two weeks of release; IGN's Achievements and Trophy List wiki page is the launch-week secondary reference.",
        links: [TROPHY_IGN, TROPHY_GAMERANT, RESONANCE_STEAM],
      },
      {
        id: "trophy-achievements-parity",
        type: "prose",
        heading: "Cross-Platform Trophy Parity and Gamerscope Total",
        body:
          "The PlayStation 5, Xbox Series X|S, and Steam achievement lists for Resonance: A Plague Tale Legacy are near-parity at launch, matching the parity used by previous A Plague Tale franchise entries from Asobo Studio. The PlayStation version adds the Platinum tier that the Xbox and Steam versions do not carry, while the Xbox version adds the Gamerscore total that the PlayStation and Steam versions do not carry. The per-platform delta is 37 vs 36 in trophy count; the per-achievement Gamerscope breakdown on Xbox is sourced from the launch-week SportsRant 36-achievements guide and the TrueAchievements mirror page.",
        links: [RESONANCE_PSN, RESONANCE_XBOX, RESONANCE_STEAM, TROPHY_SPORTSRANT, RESONANCE_TRUE_ACH],
      },
      {
        id: "trophy-achievements-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "The PS5 37-trophy / 1 + 5 + 9 + 22 tier breakdown, the Xbox / PC 36-achievement equivalent, the Platinum 'The Sea Scorpion', the four Gold collectibles (Hoarder 37 Relics / Plunderer 8 Blades / Superstitious 30 Charms / Like a Warrior 165 Resonance Points), the three exploration trophies (In the Name of My Kin / Sea You Later / Theatre Enthusiast), the eleven combat Silver/Bronze trophies, the four creature Silvers (Refraction / Baitfish / Close Call / Unpredictable), and the Like a Warrior missable flag are sourced from GamerSocialClub's 2026-08-11 trophy list and 2026-08-26 100% trophy guide, Game Rant's trophy and achievement guide, GamingProMax's puppet-show source, RetroGems' complete achievement roadmap, SportsRant's 36-achievements guide, the IGN Achievements and Trophy List wiki page, and the IGN Chapter 4 walkthrough wiki page as of 2026-09-02. The per-achievement Gamerscore breakdown on Xbox / PC, the exact Resonance Point pickup list per chapter, and the Nightmare-only Untouchable threshold are referenced from the launch-week guides but may be updated by official sources within the first two weeks of release. A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) trophy counts are not current-game facts for Resonance.",
      },
    ],
    faqIds: [
      "fixed-trophy-achievements-platinum",
      "fixed-trophy-achievements-how-many",
      "fixed-trophy-achievements-missable",
      "fixed-trophy-achievements-xbox-steam",
      "fixed-trophy-achievements-official-list",
      "fixed-trophy-achievements-like-a-warrior",
      "fixed-trophy-achievements-theatre-enthusiast",
    ],
    relatedPageIds: [
      "home",
      "fixed-walkthrough-en-us",
      "fixed-gameplay-explained-en-us",
      "fixed-how-long-to-beat-en-us",
      "fixed-characters-overview-en-us",
      "fixed-review-roundup-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-02",
  },

  // ---------------------------------------------------------------------
  // gameplay-explained (explanation)
  // ---------------------------------------------------------------------
  {
    id: "fixed-gameplay-explained-en-us",
    translationKey: "gameplay-explained",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gameplay",
    url: "/gameplay",
    pageType: "explanation",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "How Does Resonance A Plague Tale Legacy Gameplay Work?",
    seoTitle: "Resonance A Plague Tale Legacy Gameplay Explained",
    metaDescription:
      "Resonance A Plague Tale Legacy gameplay explained across Sophia's stealth, dynamic melee, Minoan sphere Light Weaving puzzles and Macula's legacy boss fights.",
    summary:
      "Resonance A Plague Tale Legacy gameplay blends a medieval stealth story with Sophia and an ancient Minoan branch timeline. Players alternate between Sophia's medieval encounters, the dynamic melee loop with parry, kick, dagger and chain sword, and the Minoan sphere Light Weaving puzzle system tied to Daedalus' labyrinth.",
    hero: {
      eyebrow: "Gameplay explained",
      subtitle:
        "Resonance A Plague Tale Legacy gameplay blends a medieval stealth story with Sophia and an ancient Minoan branch timeline. Players alternate between Sophia's medieval encounters, the dynamic melee loop, and the Minoan sphere Light Weaving puzzle system tied to Daedalus' labyrinth.",
      ctas: [
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "Minotaur Mythos", href: "/minotaur-mythos" },
        { label: "Beginner Tips", href: "/tips" },
      ],
    },
    quickAnswer:
      "Resonance A Plague Tale Legacy gameplay blends a medieval stealth story with Sophia and an ancient Minoan branch timeline. Players alternate between Sophia's medieval encounters, the dynamic melee loop with parry, kick, dagger and chain sword, and the Minoan sphere Light Weaving puzzle system tied to Daedalus' labyrinth. Boss fights draw on Macula's legacy creatures and rhythm-based tells, with a 3rd-person action adventure structure confirmed by launch reviews and the Steam product description as of 2026-08-28.",
    keyFacts: [
      { label: "Structure", value: "Dual timeline (medieval + Minoan branch)" },
      { label: "Combat loop", value: "Parry, kick, dagger, chain sword" },
      { label: "Puzzle layer", value: "Minoan sphere Light Weaving + Daedalus mechanisms" },
      { label: "Bosses", value: "Macula's legacy creatures with phase structure" },
      { label: "Difficulty modes", value: "Story, Veteran, Curator" },
      { label: "Saves", value: "Autosaves at chapter transitions + manual saves" },
    ],
    modules: [
      {
        id: "gameplay-explained-dual-timeline",
        type: "prose",
        heading: "Resonance A Plague Tale Legacy Gameplay Across Sophia's Medieval Branch and the Ancient Minoan Branch",
        body:
          "The two timelines form the spine of Resonance A Plague Tale Legacy gameplay. The medieval timeline follows Sophia through dark corridors, guarded interiors, and outbreak zones, while the Minoan branch opens the labyrinthine interior of Minotaur's Island. Both branches interleave chapter by chapter rather than running as separate modes, which keeps each new puzzle or boss anchored in the surrounding stealth loop.",
        links: [RESONANCE_STEAM, RESONANCE_IGN],
      },
      {
        id: "gameplay-explained-medieval",
        type: "prose",
        heading: "Medieval stealth with Sophia",
        body:
          "In Sophia's branch, encounters begin as stealth puzzles. Players scout guard sight lines, time crowd cover, and bait patrols with thrown objects, mirroring the breathing rhythm that Asobo Studio established in A Plague Tale: Requiem. Macula exposure is a constant resource, so loud encounters can escalate into something more dangerous. Reviewers at IGN and Eurogamer describe the medieval segments as the campaign's narrative backbone, with Sophia's age and Macula lineage shaping each encounter's emotional weight.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "gameplay-explained-mino",
        type: "prose",
        heading: "Minoan branch and Minotaur's Island",
        body:
          "The Minoan branch places Sophia inside an ancient labyrinthe setting where sunlight, stone, and reflective crystal take over from torches. Minotaur's Island is split across environmental acts that gate progression through Minoan sphere trials. The branch is fully integrated with the medieval scenes rather than treated as a side mode.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "gameplay-explained-combat",
        type: "prose",
        heading: "Dynamic Melee, Parry / Kick, and Chain Sword Combat",
        body:
          "Combat is built around a responsive melee loop that triggers the moment a stealth check fails. The loop rewards clean directional reads rather than button mashing, which is why launch press coverage highlights parry and kick timing as the central skill check across every platform.",
        links: [RESONANCE_IGN, RESONANCE_RPS],
      },
      {
        id: "gameplay-explained-parry-kick",
        type: "prose",
        heading: "The parry and kick timing window",
        body:
          "Parry intercepts a committed enemy swing during a short wind-up, while kick knocks shields or large creatures out of a defensive stance. Both inputs open a brief stun window where chain sword combos and dagger finishers deal elevated damage. The window narrows on Veteran difficulty and widens on Story difficulty, which is the setting most launch reviewers recommend for a first playthrough of Resonance A Plague Tale Legacy gameplay.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "gameplay-explained-finishers",
        type: "prose",
        heading: "Dagger and chain sword as combo finishers",
        body:
          "The dagger covers single-target melee finishers, while the chain sword reaches around shields and pulls clusters into reach. Combo finishers can stagger elite guards, opening room for Sophia's companions to land their own crowd-control abilities. Launch coverage consistently frames the melee system as competent rather than overhaul-deep, anchored in the same Plague Tale DNA that fans of Innocence and Requiem already know.",
        links: [RESONANCE_RPS],
      },
      {
        id: "gameplay-explained-light-weaving",
        type: "prose",
        heading: "Light Weaving Puzzles: Minoan Sphere and Daedalus' Labyrinth",
        body:
          "The Minoan branch replays the medieval stealth loop through a puzzle system called Light Weaving, which uses the Minoan sphere as Sophia's primary tool. Light Weaving activates reflective panels and resets sensor arrays as Sophia threads beams across each labyrinthe chamber.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "gameplay-explained-sphere",
        type: "prose",
        heading: "Minoan sphere as the puzzle lens",
        body:
          "The Minoan sphere refactors ordinary light beams into usable puzzle inputs. Players rotate the sphere, snap angles, and chain reflections into target panels to open doors or trigger Daedalus-style mechanisms. Launch press coverage describes the puzzles as mid-complexity and tightly readable, which matches the broader \"competent action game spinoff\" tone observed across the August 2026 review window.",
        links: [RESONANCE_RPS, RESONANCE_EUROGAMER],
      },
      {
        id: "gameplay-explained-daedalus",
        type: "prose",
        heading: "Daedalus' mechanisms and runtime gates",
        body:
          "Some puzzles gate progression by requiring the Minoan sphere to upgrade mid-chapter. The exact upgrade tree is not detailed in launch press and remains a dated reference. What is confirmed is that each Minoan chapter introduces at least one puzzle that cannot be brute-forced and that the Daedalus theme runs through every labyrinthe environment in the campaign.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "gameplay-explained-bosses",
        type: "prose",
        heading: "Macula's Legacy Boss Pacing",
        body:
          "Bosses anchor the Minoan branch in heavier encounters than the medieval stealth scenes. Macula's legacy creatures each carry a phase structure that rewards memorising tells before committing to a damage window.",
        links: [RESONANCE_IGN],
      },
      {
        id: "gameplay-explained-tells",
        type: "prose",
        heading: "Shadow bleeds and parry / kick windows",
        body:
          "Macula's legacy creatures telegraph through shadow bleeds, ground cracks, and audio cues. Players have a short window to parry or kick before the boss recovers; mistimed inputs trigger Macula exposure surges. Reviewers frame each encounter as a rhythm puzzle rather than a damage race, which keeps fights readable on Story mode and demanding on Veteran mode. Specific hit-point values for Macula's legacy creatures are not surfaced in launch coverage as of 2026-08-28 and are treated as a dated reference.",
        links: [RESONANCE_IGN, RESONANCE_INSIDER],
      },
      {
        id: "gameplay-explained-echoes",
        type: "prose",
        heading: "Minoan sphere echoes as soft control",
        body:
          "Outside puzzle segments, the Minoan sphere offers brief echoes that can re-position or freeze lesser creatures. These echoes buy time for chain sword combos or healing, and they sit alongside the melee toolkit rather than replacing it. Launch coverage does not confirm a long upgrade track for sphere echoes, so this surface is treated as a dated reference for the launch window.",
        links: [RESONANCE_RPS],
      },
      {
        id: "gameplay-explained-difficulty",
        type: "prose",
        heading: "Recommended Difficulty, Save Points, and First-Playthrough Pacing",
        body:
          "Difficulty and pacing shape how steep the curve feels during the early hours. The medieval stealth scenes and the Minoan puzzle rooms both lean on these settings.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "gameplay-explained-modes",
        type: "prose",
        heading: "Story, Veteran, and Curator",
        body:
          "Launch coverage recommends Story for players who want the narrative and puzzle beats without attrition combat. Veteran tightens the parry and kick window and increases Macula exposure decay. Curator, where available, leans hardest on stealth avoidance and puzzle timing. Whichever setting players choose, the Resonance A Plague Tale Legacy gameplay system tends to plateau by chapter three, so starting on Story and switching to Veteran later is a workable rhythm for first runs.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "gameplay-explained-saves",
        type: "prose",
        heading: "Save points and chapter pacing",
        body:
          "Autosaves trigger at chapter transitions, and manual saves are available from the menu. Per launch press, mid-chapter saves cluster around the start of each puzzle or boss rather than every stealth room. The pacing keeps chapters at a manageable length, which is one of the reasons IGN and Eurogamer describe the campaign as a competent spinoff that respects the Plague Tale legacy.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "gameplay-explained-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "The dual-timeline structure (medieval Sophia branch plus ancient Minoan branch), the Minoan sphere, and the Light Weaving puzzle mechanics are supported by the Steam product description and launch-day press as of 2026-08-28. Boss names and hit-point values for Macula's legacy creatures are launch-press summaries only; specific values are not surfaced in launch coverage as of 2026-08-28. The Minoan sphere upgrade tree and the per-puzzle Light Weaving step-by-step solutions are not detailed in launch press and remain a dated reference as of 2026-08-28. Legacy predecessor material from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) is referenced for context only and is not used as a current-game fact source for Resonance A Plague Tale Legacy gameplay. Cross-progression between PS5, Xbox, and Steam is not announced as of 2026-08-28 and is therefore not represented in this gameplay overview.",
      },
    ],
    faqIds: [
      "fixed-gameplay-explained-stealth-combat",
      "fixed-gameplay-explained-mino-length",
      "fixed-gameplay-explained-skip-puzzles",
      "fixed-gameplay-explained-boss-difficulty",
      "fixed-gameplay-explained-controller",
    ],
    relatedPageIds: [
      "home",
      "fixed-walkthrough-en-us",
      "fixed-minotaur-mythos-en-us",
      "fixed-characters-overview-en-us",
      "fixed-beginner-tips-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // characters-overview (reference)
  // ---------------------------------------------------------------------
  {
    id: "fixed-characters-overview-en-us",
    translationKey: "characters-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "characters",
    url: "/characters",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Who Are the Resonance A Plague Tale Legacy Characters?",
    seoTitle: "Resonance A Plague Tale Legacy Characters and Cast List",
    metaDescription:
      "Resonance A Plague Tale Legacy characters list covering Sophia, the Macula lineage, the Minoan branch cast, and returning companions cited from launch press.",
    summary:
      "The Resonance A Plague Tale Legacy characters list leads with Sophia, the new medieval protagonist whose Macula lineage ties the dual-timeline story together. Companions returning from earlier A Plague Tale installments follow Sophia through the medieval scenes, while a fresh Minoan branch cast anchors the ancient branch.",
    hero: {
      eyebrow: "Characters",
      subtitle:
        "The Resonance A Plague Tale Legacy characters list leads with Sophia, the new medieval protagonist whose Macula lineage ties the dual-timeline story together. Returning companions and a fresh Minoan branch cast round out the roster.",
      ctas: [
        { label: "Minotaur Mythos", href: "/minotaur-mythos" },
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "vs Plague Tale Series", href: "/vs-plague-tale-series" },
      ],
    },
    quickAnswer:
      "The Resonance A Plague Tale Legacy characters list leads with Sophia, the new medieval protagonist whose Macula lineage ties the dual-timeline story together. Companions returning from earlier A Plague Tale installments follow Sophia through the medieval scenes, while a fresh Minoan branch cast anchors the ancient branch. Voice, lineage, and cast details are drawn from the official launch trailer cast list and launch reviews as of 2026-08-28.",
    keyFacts: [
      { label: "Protagonist", value: "Sophia (first non-de Rune lead)" },
      { label: "Macula lineage", value: "Ties medieval + Minoan branches" },
      { label: "Voice cast", value: "Launch trailer cast list" },
      { label: "Returning companions", value: "Small set, medieval scenes" },
      { label: "Minoan branch cast", value: "New ensemble: puzzle partners, witnesses, antagonists" },
      { label: "Amicia & Hugo", value: "Referenced; not playable" },
    ],
    modules: [
      {
        id: "characters-overview-sophia",
        type: "prose",
        heading: "Sophia as the Head of the Resonance A Plague Tale Legacy Characters Roster",
        body:
          "Sophia is the new head of the cast and the first protagonist of the franchise outside the de Rune siblings. Launch coverage consistently frames her as a young adult navigating the medieval outbreak and the ancient Minoan branch in parallel. Her Macula lineage is the connecting thread: every scene reflects either her training with the Minoan sphere or her family's responsibility to the Plague Tale Macula lore.",
        links: [RESONANCE_STEAM, RESONANCE_IGN],
      },
      {
        id: "characters-overview-age",
        type: "prose",
        heading: "Age and casting as of 2026-08-28",
        body:
          "Launch press cites Sophia in late adolescence / young adult range, aligning with the 2026-08-28 research date. Her voice cast is listed in the launch trailer cast list and confirmed by IGN and Eurogamer launch coverage. Exact lines and copy vary by outlet, but the research date, age range, and voice cast attribution are stable across press references as of 2026-08-28.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "characters-overview-role",
        type: "prose",
        heading: "Role across the dual timeline",
        body:
          "Sophia is present in every medieval scene and every Minoan branch segment, which is unusual for a Plague Tale protagonist. Macula exposure and Minoan sphere trials are framed around her choices rather than around the de Rune child companions. The result is that the Resonance A Plague Tale Legacy characters list hangs on one central protagonist rather than a duo.",
        links: [RESONANCE_IGN],
      },
      {
        id: "characters-overview-returning",
        type: "prose",
        heading: "Returning Companions from the Plague Tale Franchise",
        body:
          "A small group of returning companions anchor the medieval scenes alongside Sophia. Their roles lean on the same de Rune-era structure that A Plague Tale: Innocence and A Plague Tale: Requiem established.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "characters-overview-de-rune-allies",
        type: "prose",
        heading: "De Rune-adjacent allies",
        body:
          "The returning allies operate as Sophia's medieval support crew. Each carries a passive role (overwatch, distraction, healing) and an active ability keyed to a controller face button. Their dialogue references the Macula lineage inherited from earlier games, though specific dialogue copy is not surfaced in launch press and is treated as a dated reference.",
        links: [RESONANCE_IGN],
      },
      {
        id: "characters-overview-mentors",
        type: "prose",
        heading: "Mentor figures and Macula lore keepers",
        body:
          "Mentor figures reappear to bridge the medieval scenes to the Minoan branch. They explain the Macula's legacy in fragments that the Minoan branch picks up in full. Their full names and backstories are not exhaustively detailed in launch press; readers should treat mentor biographies as a dated reference as of 2026-08-28.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "characters-overview-mino-new",
        type: "prose",
        heading: "The Minoan Branch Cast: New Characters",
        body:
          "The Minoan branch carries its own ensemble distinct from the medieval cast. The new characters function as puzzle partners, ritual witnesses, and Macula's legacy antagonists.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "characters-overview-puzzle-partners",
        type: "prose",
        heading: "Puzzle partners and ritual witnesses",
        body:
          "Puzzle partners operate alongside Sophia inside Daedalus-themed chambers, retriggering reflective panels, adjusting Minoan sphere lenses, and rebalancing chain mechanisms. Ritual witnesses appear at story beats that connect the medieval scenes to the ancient timeline. Their names are listed in the launch trailer cast list, with detailed biographic copy not yet surfaced in launch press as of 2026-08-28.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "characters-overview-antagonists",
        type: "prose",
        heading: "Macula's legacy antagonists",
        body:
          "The Macula's legacy antagonists drive the boss encounters. They are announced in launch press as the headline threats of the Minoan branch, but their individual names and biographies are not exhaustively listed in launch-day coverage and are treated as a dated reference as of 2026-08-28.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "characters-overview-voice",
        type: "prose",
        heading: "Voice Cast and Production Credits",
        body:
          "Voice production is led by the Plague Tale lineage that has carried the franchise since A Plague Tale: Innocence. Audio is mixed for both controller and headphone users, with subtitle support across the 18 launch languages.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "characters-overview-lead-voice",
        type: "prose",
        heading: "Lead voice cast entries",
        body:
          "The lead voice cast is published in the launch trailer cast list and cross-confirmed by IGN, Eurogamer, and Insider Gaming launch coverage. Specific voice actor / actress pairs are not exhaustively reproduced here; readers seeking casting credits should consult the launch trailer cast list as the primary cited source.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER, RESONANCE_INSIDER],
      },
      {
        id: "characters-overview-production",
        type: "prose",
        heading: "Production team and audio direction",
        body:
          "Audio direction follows Asobo Studio's house style for the Plague Tale franchise, with Macula exposure surges, parry and kick cues, and Minoan sphere hums all layered on top of the medieval soundscape. Production team credits are not exhaustively listed in launch press as of 2026-08-28 and remain a dated reference.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "characters-overview-use",
        type: "prose",
        heading: "How to Use This Cast Reference",
        body:
          "This Resonance A Plague Tale Legacy characters reference is a hub. It links to walkthrough chapters for puzzle partners, to the Minotaur mythos page for Macula's legacy antagonists, and to the versus Plague Tale series page for returning companions.",
        links: [RESONANCE_STEAM, RESONANCE_IGN],
      },
      {
        id: "characters-overview-sources-note",
        type: "prose",
        heading: "Cited sources and research date",
        body:
          "All voice, cast, and lineage facts cite the launch trailer cast list, the Steam product description, and launch reviews. Any cast detail not surfaced in those primary sources is labelled as a dated reference as of 2026-08-28.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "characters-overview-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Sophia is confirmed as the new protagonist in the Steam product description and launch press as of 2026-08-28. Sophia's precise age in calendar years and exact voice actress biography are not exhaustively reproduced in launch press; they are cited with the 2026-08-28 research date and treated as a dated reference until further detail is published. Returning companion names and biographies are referenced from the launch trailer cast list and launch reviews as of 2026-08-28; specific dialogue copy is not yet surfaced. Macula's legacy antagonist names and biographies are referenced but not exhaustively listed in launch press as of 2026-08-28. Legacy predecessor characters from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) are referenced only inside the versus Plague Tale series page and the legacy boundary notes, never as current-game facts for the Resonance A Plague Tale Legacy characters cast.",
      },
    ],
    faqIds: [
      "fixed-characters-overview-protagonist",
      "fixed-characters-overview-age",
      "fixed-characters-overview-voice",
      "fixed-characters-overview-amicia",
      "fixed-characters-overview-mino-count",
      "fixed-characters-overview-difficulty",
    ],
    relatedPageIds: [
      "home",
      "fixed-gameplay-explained-en-us",
      "fixed-minotaur-mythos-en-us",
      "fixed-walkthrough-en-us",
      "fixed-vs-plague-tale-series-en-us",
      "fixed-beginner-tips-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // minotaur-mythos (explanation)
  // ---------------------------------------------------------------------
  {
    id: "fixed-minotaur-mythos-en-us",
    translationKey: "minotaur-mythos",
    locale: "en-US",
    routeKind: "fixed",
    slug: "minotaur-mythos",
    url: "/minotaur-mythos",
    pageType: "explanation",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "What Is the Resonance A Plague Tale Legacy Minotaur Mythos?",
    seoTitle: "Resonance A Plague Tale Legacy Minotaur Mythos Explained",
    metaDescription:
      "Resonance A Plague Tale Legacy Minotaur mythos covering the Minoan branch, Daedalus' labyrinth, Light Weaving, and Macula's legacy creature design from launch press.",
    summary:
      "The Resonance A Plague Tale Legacy Minotaur mythos is the ancient Minoan branch layer that runs underneath the medieval Sophia story. It recasts the Minotaur myth through Daedalus' labyrinthe setting, the Minoan sphere Light Weaving puzzle system, and Macula's legacy creature bosses that anchor the ancient branch.",
    hero: {
      eyebrow: "Minotaur mythos",
      subtitle:
        "The Resonance A Plague Tale Legacy Minotaur mythos is the ancient Minoan branch layer that runs underneath the medieval Sophia story. It recasts the Minotaur myth through Daedalus' labyrinthe setting, the Minoan sphere Light Weaving puzzle system, and Macula's legacy creature bosses.",
      ctas: [
        { label: "Gameplay", href: "/gameplay" },
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "Characters", href: "/characters" },
      ],
    },
    quickAnswer:
      "The Resonance A Plague Tale Legacy Minotaur mythos is the ancient Minoan branch layer that runs underneath the medieval Sophia story. It recasts the Minotaur myth through Daedalus' labyrinthe setting, the Minoan sphere Light Weaving puzzle system, and Macula's legacy creature bosses that anchor the ancient branch. The Minoan branch is treated by Asobo Studio as an integrated second timeline, not as DLC-style content, and is sourced from launch reviews and the Steam product description as of 2026-08-28.",
    keyFacts: [
      { label: "Setting", value: "Minotaur's Island (Bronze Age)" },
      { label: "Puzzle system", value: "Minoan sphere Light Weaving + Daedalus mechanisms" },
      { label: "Bosses", value: "Macula's legacy creatures (shadow bleeds, audio cues)" },
      { label: "Sophia's role", value: "Carrier of Macula lineage + Minoan sphere training" },
      { label: "Continuity", value: "Origin layer for Plague Tale Macula lore" },
    ],
    modules: [
      {
        id: "minotaur-mythos-setting",
        type: "prose",
        heading: "The Resonance A Plague Tale Legacy Minotaur Branch Setting on Minotaur's Island",
        body:
          "The Minoan branch is a separate story layer set on Minotaur's Island in the Bronze Age. Its visual register and audio design are deliberately distinct from the medieval scenes, which is why launch coverage describes Minotaur's Island as a setting shift rather than a cosmetic re-skin of the medieval chapters.",
        links: [RESONANCE_STEAM, RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "minotaur-mythos-bronze-age",
        type: "prose",
        heading: "Minotaur's Island as a Bronze Age stage",
        body:
          "Minotaur's Island is rendered in reflective stone, sandstone corridors, and shaft-lit chambers. The architectural language is mid-Minoan rather than medieval, with circular layouts and reflective stonework that map directly onto the Light Weaving puzzle system. IGN and Eurogamer both describe the setting as a calm counterweight to the medieval scenes, which keeps the dual-timeline pacing readable.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "minotaur-mythos-continuity",
        type: "prose",
        heading: "Continuity with the Plague Tale franchise",
        body:
          "The Minoan branch is not a tutorial or a flashback. It carries its own arc and antagonist roster, and it references Plague Tale Macula lore in fragments that the medieval scenes do not always spell out. Asobo Studio's framing keeps the Minoan branch connected to the franchise rather than presented as a standalone DLC. This positioning is consistent across launch reviews and the Steam product description.",
        links: [RESONANCE_STEAM, RESONANCE_IGN],
      },
      {
        id: "minotaur-mythos-daedalus",
        type: "prose",
        heading: "Daedalus' Labyrinth and Light Weaving Mechanics",
        body:
          "Light Weaving is the puzzle mechanic that carries the Minoan branch forward. It is built around Daedalus' labyrinthe mechanisms and the Minoan sphere tool, which Sophia activates at the start of every Minoan chapter.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "minotaur-mythos-mechanisms",
        type: "prose",
        heading: "Daedalus-themed mechanisms and reflective chambers",
        body:
          "Daedalus' mechanisms are reflective discs, beam splitters, rotating columns, and chain-pull gates. Each chamber requires a specific combination of angles and switch chains, with mid-chapter save points in case a chain breaks. Launch coverage frames the puzzle complexity as readable but mid-stacked, which suits a 3rd-person action adventure pacing rather than a pure puzzle game.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "minotaur-mythos-sphere-backbone",
        type: "prose",
        heading: "Minoan sphere and Light Weaving as the puzzle backbone",
        body:
          "The Minoan sphere is the only Light Weaving tool Sophia carries. It pulls beams, refracts panels, and resets sensor arrays. Specific upgrade paths inside the Minoan sphere are not detailed in launch press and remain a dated reference. What is confirmed is that the Minoan sphere is the chain that links every ancient chapter and binds the Minotaur mythos to the Plague Tale Macula lore.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "minotaur-mythos-macula-legacy",
        type: "prose",
        heading: "Macula's Legacy: How the Minotaur Mythos Reaches the Plague Tale Story",
        body:
          "Macula's legacy is the bridge between the medieval cast and the Minoan branch. The Minotaur mythos does not replace the Plague Tale Macula storyline; it amplifies it by giving the medieval lore a Bronze Age origin.",
        links: [RESONANCE_IGN],
      },
      {
        id: "minotaur-mythos-seam",
        type: "prose",
        heading: "Macula's legacy as narrative seam",
        body:
          "In launch reviews, Macula's legacy functions as the narrative seam between the two timelines. The Minoan branch shows what Macula was before the medieval chapters, and the medieval chapters show what Macula's legacy becomes. The seam avoids the \"flashback\" framing and instead reads as a parallel timeline.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "minotaur-mythos-lineage",
        type: "prose",
        heading: "Macula's legacy and the Macula lineage",
        body:
          "Macula's legacy also reinforces the Macula lineage that Sophia carries. Her training in the Minoan sphere, her companions' roles as puzzle partners, and her confrontations with Macula's legacy creatures are all anchored in this lineage. The result is that the Resonance A Plague Tale Legacy Minotaur mythos is not a separate story; it is the lineage that the medieval chapters already half-know.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "minotaur-mythos-sophia",
        type: "prose",
        heading: "Sophia's Connection to the Minotaur Mythos",
        body:
          "Sophia is the protagonist of both timelines, and her connection to the Minotaur mythos is the engine of the Minoan branch. She carries the Minoan sphere, navigates Daedalus' labyrinth, and confronts Macula's legacy creatures directly.",
        links: [RESONANCE_IGN],
      },
      {
        id: "minotaur-mythos-inheritance",
        type: "prose",
        heading: "Minoan sphere training and line of inheritance",
        body:
          "The Resonance A Plague Tale Legacy Minotaur mythos rests on a line of inheritance that Sophia represents. Training sequences in the Minoan branch teach the player how to use the Minoan sphere under pressure, blending puzzle and combat beats. Launch press presents these training moments as soft tutorials rather than forced lessons.",
        links: [RESONANCE_IGN, RESONANCE_INSIDER],
      },
      {
        id: "minotaur-mythos-arc",
        type: "prose",
        heading: "How the mythos reshapes Sophia's character arc",
        body:
          "The mythos reshapes Sophia by giving her a Macula-rooted reason to enter the ancient branch. Her character arc is built around her lineage rather than around rescue or revenge. The Minoan branch therefore reads as a homecoming story as much as a quest, which differentiates Resonance: A Plague Tale Legacy from earlier Plague Tale titles.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "minotaur-mythos-bosses",
        type: "prose",
        heading: "Boss Design and Creature Roster in the Minoan Branch",
        body:
          "Macula's legacy creature roster is the headline threat list of the Minoan branch. The roster is anchored in the Minotaur mythos and reinforced through Daedalus' labyrinthe imagery.",
        links: [RESONANCE_IGN, RESONANCE_INSIDER],
      },
      {
        id: "minotaur-mythos-shadow",
        type: "prose",
        heading: "Shadow bleeds and Macula's legacy creatures",
        body:
          "Macula's legacy creatures announce themselves through shadow bleeds, ground cracks, and ritual audio. Each creature has a phase structure that matches the Minoan sphere's combat role, with the parry and kick window tightest on Veteran difficulty. Specific creature names and hit-point values are not surfaced in launch press and remain a dated reference.",
        links: [RESONANCE_IGN, RESONANCE_INSIDER],
      },
      {
        id: "minotaur-mythos-mythos-bosses",
        type: "prose",
        heading: "Why the mythos and the bosses reinforce each other",
        body:
          "The Minotaur mythos supplies every boss with a narrative reason for being inside Daedalus' labyrinth, and the labyrinthe architecture supplies every creature with a stage. This alignment between narrative and level design is what makes the Minoan branch cohere as a setting rather than as a stack of boss arenas.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "minotaur-mythos-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "The Minoan branch setting, Minotaur's Island, Daedalus' labyrinth, Minoan sphere, and Light Weaving mechanics are sourced from the Steam product description and launch reviews as of 2026-08-28. Specific Macula's legacy creature names and hit-point values are not exhaustively published in launch press as of 2026-08-28 and are treated as a dated reference. Minoan sphere upgrade paths and per-puzzle step-by-step Light Weaving solutions are not detailed in launch press as of 2026-08-28. The Minoan Bronze Age framing is supported by launch press and the Steam product description; specific historical terms are not used as current-game facts. Legacy predecessor material from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) is used only inside the legacy boundary notes and the versus Plague Tale series reference, never as a current-game fact source for Resonance A Plague Tale Legacy Minotaur mythos.",
      },
    ],
    faqIds: [
      "fixed-minotaur-mythos-standalone",
      "fixed-minotaur-mythos-greek",
      "fixed-minotaur-mythos-puzzle-hard",
      "fixed-minotaur-mythos-medieval",
      "fixed-minotaur-mythos-collectibles",
    ],
    relatedPageIds: [
      "home",
      "fixed-gameplay-explained-en-us",
      "fixed-walkthrough-en-us",
      "fixed-characters-overview-en-us",
      "fixed-beginner-tips-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // heritage-pack-dlc (status)
  // ---------------------------------------------------------------------
  {
    id: "fixed-heritage-pack-dlc-en-us",
    translationKey: "heritage-pack-dlc",
    locale: "en-US",
    routeKind: "fixed",
    slug: "heritage-pack",
    url: "/heritage-pack",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "What Is the Plague Tale Legacy Heritage Pack?",
    seoTitle: "Plague Tale Legacy Heritage Pack Contents and Effects",
    metaDescription:
      "Plague Tale Legacy Heritage Pack DLC with Minoan Sword stun, Alec's Pendant charm stat boost, and digital art book. Pre-order Steam, PlayStation, Xbox 2026-08-28.",
    summary:
      "The Plague Tale Legacy Heritage Pack is a pre-order DLC that adds three items: the Minoan Sword, Alec's Pendant, and a digital art book. The Minoan Sword's third hit in a combo stuns enemies, while Alec's Pendant boosts the stats of all your charms.",
    hero: {
      eyebrow: "Heritage Pack",
      subtitle:
        "The Plague Tale Legacy Heritage Pack is a pre-order DLC that adds three items: the Minoan Sword, Alec's Pendant, and a digital art book. The Minoan Sword's third hit in a combo stuns enemies, while Alec's Pendant boosts the stats of all your charms.",
      ctas: [
        { label: "Editions & Pricing", href: "/editions" },
        { label: "Platforms", href: "/platforms" },
        { label: "Release Date", href: "/release" },
      ],
    },
    quickAnswer:
      "The Plague Tale Legacy Heritage Pack is a pre-order DLC that adds three items: the Minoan Sword, Alec's Pendant, and a digital art book. The Minoan Sword's third hit in a combo stuns enemies, while Alec's Pendant boosts the stats of all your charms. The art book is a digital-only bonus. Eligibility runs through pre-orders on Steam, PlayStation Store, and Xbox Store, and through higher-tier editions per official sources as of 2026-08-28.",
    keyFacts: [
      { label: "Contents", value: "Minoan Sword, Alec's Pendant, digital art book" },
      { label: "Minoan Sword", value: "Third-hit combo stuns enemies" },
      { label: "Alec's Pendant", value: "Boosts stats of all charms when equipped" },
      { label: "Digital art book", value: "Digital-only bonus" },
      { label: "Eligibility", value: "Pre-orders + selected edition tiers" },
      { label: "Refund path", value: "Follows storefront policy" },
    ],
    modules: [
      {
        id: "heritage-pack-dlc-contents",
        type: "prose",
        heading: "What's Inside the Plague Tale Legacy Heritage Pack",
        body:
          "The Plague Tale Legacy Heritage Pack ships with three items. Two of them change combat or charm performance, which keeps the DLC aligned with launch pre-order norms without altering campaign difficulty or progression systems beyond the documented effects.",
        links: [RESONANCE_HERITAGE_DLC],
      },
      {
        id: "heritage-pack-dlc-mino-sword",
        type: "prose",
        heading: "Minoan Sword gameplay weapon",
        body:
          "The Minoan Sword is a gameplay-affecting weapon for Sophia. Its third hit in a combo stuns enemies, so it changes how fights resolve compared with the default dagger. The sword is themed around the Minoan branch, which makes it a visual counterpart to the Minoan sphere puzzle toolkit used in the ancient timeline.",
        links: [RESONANCE_HERITAGE_DLC],
      },
      {
        id: "heritage-pack-dlc-alec-pendant",
        type: "prose",
        heading: "Alec's Pendant charm stat boost",
        body:
          "Alec's Pendant boosts the stats of all your charms when equipped, which makes it a gameplay-affecting accessory rather than a cosmetic-only item. Its inclusion in the Plague Tale Legacy Heritage Pack fits Alec's role in the de Rune lineage referenced across the Plague Tale franchise.",
        links: [RESONANCE_HERITAGE_DLC],
      },
      {
        id: "heritage-pack-dlc-art-book",
        type: "prose",
        heading: "Digital art book",
        body:
          "The digital art book is a PDF or in-app gallery that gathers concept art for the dual timeline, including Sophia's medieval scenes, the Minoan branch setting, and Macula's legacy creature roster. It is a digital-only bonus; physical Collector's edition contents are confirmed only from the PlayStation Store product page. Page counts and chapter breakdowns for the art book are not exhaustively published as of 2026-08-28.",
        links: [RESONANCE_HERITAGE_DLC, RESONANCE_PSN],
      },
      {
        id: "heritage-pack-dlc-eligibility",
        type: "prose",
        heading: "Eligibility and How It Activates",
        body:
          "Eligibility for the Plague Tale Legacy Heritage Pack runs through the launch pre-order window and selected edition tiers. Activation is automatic on supported platforms.",
        links: [RESONANCE_HERITAGE_DLC],
      },
      {
        id: "heritage-pack-dlc-pre-order",
        type: "prose",
        heading: "Pre-order eligibility on each storefront",
        body:
          "Players who pre-order the Standard edition through Steam, PlayStation Store, or Xbox Store before launch unlock the Plague Tale Legacy Heritage Pack at launch. Eligibility is not extended to post-launch Standard purchases beyond a defined redemption window, and that window is cited from each storefront.",
        links: [RESONANCE_HERITAGE_DLC, RESONANCE_PSN, RESONANCE_XBOX],
      },
      {
        id: "heritage-pack-dlc-editions",
        type: "prose",
        heading: "Selected edition tiers",
        body:
          "The Collector's edition and other higher tiers ship with the Plague Tale Legacy Heritage Pack included. Players who buy higher tiers do not need to redeem the DLC separately; it activates alongside the main game at launch.",
        links: [RESONANCE_PSN],
      },
      {
        id: "heritage-pack-dlc-versus",
        type: "prose",
        heading: "How the Heritage Pack Differs From Standard and Collector's Editions",
        body:
          "The Heritage Pack is a DLC add-on rather than a tier. This distinction matters because it appears across edition tiers rather than replacing one of them.",
        links: [RESONANCE_HERITAGE_DLC, RESONANCE_PSN],
      },
      {
        id: "heritage-pack-dlc-versus-standard",
        type: "prose",
        heading: "Heritage Pack versus Standard edition",
        body:
          "The Standard edition does not include the Plague Tale Legacy Heritage Pack. Players who buy Standard and want the Heritage Pack must pre-order during the launch pre-order window, or pick up the Heritage Pack separately where the storefront allows standalone DLC sales after launch.",
        links: [RESONANCE_HERITAGE_DLC],
      },
      {
        id: "heritage-pack-dlc-versus-collectors",
        type: "prose",
        heading: "Heritage Pack versus Collector's edition",
        body:
          "The Collector's edition does include the Plague Tale Legacy Heritage Pack as part of its contents. Higher tiers add physical or digital extras beyond the Heritage Pack, which means the Heritage Pack is best understood as the common in-game bonus across tiers rather than as a tier of its own.",
        links: [RESONANCE_PSN],
      },
      {
        id: "heritage-pack-dlc-editorial",
        type: "prose",
        heading: "Editorial Note",
        body:
          "This page is a status reference. DLC contents, eligibility windows, and storefront policies are stable across launch press as of 2026-08-28 and are not expected to shift between pre-order and general availability. If any storefront revises its redemption terms, that revision will be reflected in a follow-up note rather than silently patched into the editorial copy above.",
        links: [RESONANCE_FOCUS],
      },
      {
        id: "heritage-pack-dlc-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "The Plague Tale Legacy Heritage Pack contents (Minoan Sword, Alec's Pendant, digital art book) and eligibility windows are sourced from the official Steam Heritage Pack DLC page (AppID 3837640), the Steam store page (AppID 2713000), the PlayStation Store, and the Xbox Store product pages as of 2026-08-28. The Minoan Sword's third-hit combo stun and Alec's Pendant's all-charms stat boost are gameplay effects confirmed from the official Steam Heritage Pack DLC page (AppID 3837640); the page does not describe either item as cosmetic-only or non-gameplay-affecting. The digital art book is a digital-only bonus on Steam; physical Collector's edition contents are confirmed only from the PlayStation Store product page (UP0006-PPSA24708_00-RESONANCEAPTLEGACY) and are not duplicated in the Steam Heritage Pack DLC listing. Specific page counts and chapter breakdowns of the digital art book are not exhaustively published in launch press as of 2026-08-28 and remain a dated reference. Standalone DLC sales after launch are not announced for every storefront as of 2026-08-28; the FAQ reflects this uncertainty without inventing storefront behaviour. Legacy predecessor material from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) is referenced only for Alec's lineage context and is not used as a current-game fact source for the Plague Tale Legacy Heritage Pack.",
      },
    ],
    faqIds: [
      "fixed-heritage-pack-dlc-standard",
      "fixed-heritage-pack-dlc-mino-sword",
      "fixed-heritage-pack-dlc-alec",
      "fixed-heritage-pack-dlc-refund",
    ],
    relatedPageIds: [
      "home",
      "fixed-editions-pricing-en-us",
      "fixed-platforms-console-en-us",
      "fixed-release-overview-en-us",
      "fixed-how-long-to-beat-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // walkthrough (guide)
  // ---------------------------------------------------------------------
  {
    id: "fixed-walkthrough-en-us",
    translationKey: "walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "walkthrough",
    url: "/walkthrough",
    pageType: "guide",
    presentation: { shell: "hub" },
    h1: "Resonance A Plague Tale Legacy Walkthrough: Chapter by Chapter",
    seoTitle: "Resonance A Plague Tale Legacy Walkthrough and Chapters",
    metaDescription:
      "Resonance A Plague Tale Legacy walkthrough covering Sophia's chapters, Minotaur's Island, Light Weaving puzzles, Macula's legacy bosses, and recommended difficulty.",
    summary:
      "The Resonance A Plague Tale Legacy walkthrough follows Sophia chapter by chapter, alternating between medieval stealth scenes and Minotaur's Island Minoan branch segments. Each chapter layers a stealth or combat section with a Light Weaving puzzle room or a Macula's legacy boss.",
    hero: {
      eyebrow: "Walkthrough",
      subtitle:
        "The Resonance A Plague Tale Legacy walkthrough follows Sophia chapter by chapter, alternating between medieval stealth scenes and Minotaur's Island Minoan branch segments. Each chapter layers a stealth or combat section with a Light Weaving puzzle room or a Macula's legacy boss.",
      ctas: [
        { label: "Gameplay", href: "/gameplay" },
        { label: "Minotaur Mythos", href: "/minotaur-mythos" },
        { label: "Trophy & Achievements", href: "/trophy-achievements" },
        { label: "Beginner Tips", href: "/tips" },
      ],
    },
    quickAnswer:
      "The Resonance A Plague Tale Legacy walkthrough follows Sophia chapter by chapter, alternating between medieval stealth scenes and Minotaur's Island Minoan branch segments. Each chapter layers a stealth or combat section with a Light Weaving puzzle room or a Macula's legacy boss, with autosaves at the chapter transitions and manual save options in the menu. Per-puzzle step-by-step solutions and exact boss hit-point values remain a dated reference until launch press details them further as of 2026-08-28.",
    keyFacts: [
      { label: "Structure", value: "Medieval chapters + Minoan branch segments" },
      { label: "Recommended difficulty", value: "Story for first run; Veteran later" },
      { label: "Save points", value: "Autosaves + mid-chapter + manual" },
      { label: "Puzzle order", value: "Alternate chamber types, not specialism" },
      { label: "Trophy cues", value: "Companion dialogue + ritual witnesses" },
    ],
    modules: [
      {
        id: "walkthrough-structure",
        type: "prose",
        heading: "Resonance A Plague Tale Legacy Walkthrough Structure: Medieval Chapters and Minoan Branch",
        body:
          "The Resonance A Plague Tale Legacy walkthrough divides into two halves: Sophia's medieval chapters and the Minotaur's Island Minoan branch segments. The campaign alternates between the two halves chapter by chapter rather than treating them as separate modes, which keeps both halves present in the player's session flow.",
        links: [RESONANCE_STEAM, RESONANCE_IGN],
      },
      {
        id: "walkthrough-medieval",
        type: "prose",
        heading: "Medieval Sophia chapters",
        body:
          "The medieval chapters open with stealth training and crowd reads, then widen into multi-stage encounters that include escort beats, distraction chains, and Macula exposure surges. Each chapter ends with a save point cluster rather than a single autosave. Players leaning on stealth should plan bow replenishment and Macula exposure decay windows before starting a chapter.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "walkthrough-mino",
        type: "prose",
        heading: "Minotaur's Island Minoan branch segments",
        body:
          "The Minotaur's Island Minoan branch segments open with a Minoan sphere tutorial and then thread Daedalus' labyrinthe chambers. Each segment hangs on a single puzzle room or boss, which keeps the Minoan branch chapters tighter than the medieval chapters. The dual-timeline structure means that Minotaur's Island segments do not bury the medieval narrative; they amplify it.",
        links: [RESONANCE_RPS],
      },
      {
        id: "walkthrough-difficulty",
        type: "prose",
        heading: "Recommended Difficulty and Early-Game Pacing",
        body:
          "Recommended difficulty is a launch-window decision that shapes how readable the early-game pacing feels. The Resonance A Plague Tale Legacy walkthrough recommends Story for first playthroughs and flags Veteran as the post-launch option.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "walkthrough-story",
        type: "prose",
        heading: "Story difficulty for first runs",
        body:
          "Story difficulty widens the parry and kick window, slows Macula exposure decay, and reduces incoming enemy damage. It lets players focus on the dual-timeline structure and the medieval story beats without high attrition combat. Story also keeps Minoan puzzle timers readable, which matters because Minotaur's Island puzzles become time-pressured on harder settings.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "walkthrough-veteran",
        type: "prose",
        heading: "Veteran and Curator as second-playthrough options",
        body:
          "Veteran tightens parry and kick windows, accelerates Macula exposure decay, and increases enemy damage. Curator leans hardest on stealth avoidance and puzzle timing, which makes it the third-playthrough setting for players who have already cleared Story and Veteran. Difficulty can be changed mid-run from the menu, which lets players step down temporarily for tough Macula's legacy encounters.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "walkthrough-puzzle-order",
        type: "prose",
        heading: "Light Weaving Puzzle Order and Mid-Game Pacing",
        body:
          "Mid-game pacing is anchored in the Minoan branch, where the Resonance A Plague Tale Legacy walkthrough expects players to keep up with Light Weaving chains and sensor arrays. The recommended puzzle order alternates between chamber types rather than specialising per chapter.",
        links: [RESONANCE_STEAM],
      },
      {
        id: "walkthrough-lens",
        type: "prose",
        heading: "Minoan sphere lens and chain puzzles",
        body:
          "The Minoan sphere lens is the basic Light Weaving tool. Players rotate the lens to refract beams into target panels and chain puzzle inputs through rotating columns. Lens puzzles are the earliest type of Light Weaving room and serve as the on-ramp to the more difficult chain puzzles.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "walkthrough-sensors",
        type: "prose",
        heading: "Sensor arrays and reflective disks",
        body:
          "Sensor arrays and reflective disks become more common in mid-game. A reflective disk pushes a beam into a sensor, while a sensor array gates a chain reaction that opens the next chamber. Mid-game pacing expects players to chain two or three sensors per chamber without losing tempo. Per-room step-by-step solutions are not published in launch press and remain a dated reference for the walkthrough.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "walkthrough-bosses",
        type: "prose",
        heading: "Macula's Legacy Boss Encounters in the Minoan Branch",
        body:
          "Boss encounters cap the Minoan branch chapters in the Resonance A Plague Tale Legacy walkthrough. Each Macula's legacy creature uses a recognisable phase structure that the player reads through shadow bleeds and ground cracks.",
        links: [RESONANCE_IGN],
      },
      {
        id: "walkthrough-boss-pacing",
        type: "prose",
        heading: "Boss pacing and the parry / kick window",
        body:
          "Boss pacing in the Minoan branch mirrors classic Plague Tale boss pacing: short wind-ups, a tight parry / kick window, and a stun opening for chain sword combos. The first Macula's legacy encounter at the launch window sets the cadence, with each subsequent creature adding a phase or a new behaviour rather than reworking the timing.",
        links: [RESONANCE_IGN],
      },
      {
        id: "walkthrough-sphere-echoes",
        type: "prose",
        heading: "Minoan sphere echoes as a boss tool",
        body:
          "Minoan sphere echoes are usable during boss encounters as a soft-control tool. The echoes buy time for chain sword combos or healing, but they are not a one-shot win condition. Specific boss HP and full attack pattern lists are not surfaced in launch press and remain a dated reference for the walkthrough.",
        links: [RESONANCE_RPS],
      },
      {
        id: "walkthrough-save-points",
        type: "prose",
        heading: "Save Points, Trophy Cues, and Completionist Tips",
        body:
          "Save points and trophy cues shape how players plan the campaign. The Resonance A Plague Tale Legacy walkthrough treats mid-chapter saves as part of the pacing strategy, especially for trophy-sensitive runs.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "walkthrough-autosaves",
        type: "prose",
        heading: "Autosaves at chapter transitions and mid-chapter saves",
        body:
          "Autosaves trigger at chapter transitions and at the start of each major boss or puzzle. Manual saves can be triggered from the menu and are recommended before stealth-heavy chapters. The saving system is consistent across PS5, Xbox, and PC, which makes platform-to-platform transfer of save strategies straightforward.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "walkthrough-trophies",
        type: "prose",
        heading: "Trophy-sensitive beats and missable flags",
        body:
          "Trophy-sensitive beats and missable flags cluster around companion dialogue and ritual witness scenes. Launch coverage notes that companion dialogue choices can affect trophies, and the walkthrough flags each confirmed missable. Trophy text and unlock conditions are detailed in the separate trophy and achievements reference, which is the canonical source for trophy-specific paths.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "walkthrough-ch4-overview",
        type: "prose",
        heading: "Chapter 4 'From Hell It Rose' Walkthrough: The Minotaur Room Symbols Puzzle",
        body:
          "Chapter 4 'From Hell It Rose' culminates in the Minotaur Room Symbols Puzzle, the First Trial climax on Minotaur's Island. Sophia enters the arena through a circular corridor that auto-fills her journal with the room's symbol layout. The puzzle asks Sophia to illuminate three pairs of symbols on the arena wall using three movable reflectors; once the third pair lights, the Minoan Sphere accepts a slot insert and triggers the post-puzzle cutscene. Launch-week walkthroughs confirm this is the only puzzle in the chapter, and that solving it unlocks the 'From Hell It Rose' chapter trophy and a single Resonance Point reward.",
        links: [CH4_PUZZLE_DOTESPORTS, CH4_PUZZLE_GAMERANT, CH4_PUZZLE_IGN],
      },
      {
        id: "walkthrough-ch4-arena",
        type: "prose",
        heading: "Arena perimeter walk and the auto-filled journal",
        body:
          "On entry, Sophia walks the arena perimeter once. Sophia's journal auto-fills with a sketch of the symbol positions on the wall and the three reflector pedestals; revisit the journal at any time to recheck which symbol each pedestal is currently aimed at. Launch-week guides stress that the auto-sketch is the only reliable reference because the worn blank tablet in Step 2 looks identical to several blank panels around the arena.",
        links: [CH4_MINOTAUR_ALLTHINGS, CH4_PUZZLE_GAMERANT],
      },
      {
        id: "walkthrough-ch4-step1",
        type: "prose",
        heading: "Step 1 reflector angles: left reflector to the T, right reflector to the bell",
        body:
          "Rotate the left reflector until the beam points at the T-shaped symbol on the left wall, then rotate the right reflector until its beam hits the bell symbol on the right wall. The two beams bounce through the arena to a first pair of symbols that light up at the same time. Launch-week guides confirm the bell symbol sits opposite the T symbol and that the auto-filled journal sketch pinpoints both within a single rotation of each reflector.",
        links: [CH4_MINOTAUR_ALLTHINGS, CH4_PUZZLE_GAMINGPROMAX, CH4_PUZZLE_NOOBFEED],
      },
      {
        id: "walkthrough-ch4-step2",
        type: "prose",
        heading: "Step 2 worn blank tablet: left to the triangle, right to the blank between reverse-3 and cone",
        body:
          "Look for the worn blank tablet set into the right wall between the reverse-3 symbol and the cone symbol. Aim the left reflector at the triangle symbol above the worn blank tablet, and aim the right reflector at the blank itself. A second pair of symbols lights when both beams land; the worn blank tablet turns into the second completed pair. Several blank panels around the arena look identical, so use the journal sketch rather than guessing.",
        links: [CH4_MINOTAUR_ALLTHINGS, CH4_PUZZLE_GAMERANT, CH4_PUZZLE_NOOBFEED],
      },
      {
        id: "walkthrough-ch4-light-reveal",
        type: "prose",
        heading: "Light Reveal scan on the raised Minotaur statue hands: upside-down Y and W",
        body:
          "Before aiming the third reflector, scan each of the two rings on the raised Minotaur statue hands with Light Reveal. The hidden third symbol pair only appears on the arena wall after both rings light up: an upside-down Y on the left side and a W symbol on the right side. Skipping the ring scan leaves the third pair invisible, so the center reflector in Step 3 looks like it is bouncing into empty panels. Launch-week guides flag skipping the ring scan as the most common cause of a soft-locked puzzle.",
        links: [CH4_MINOTAUR_ALLTHINGS, CH4_PUZZLE_GAMERANT, CH4_PUZZLE_IGN],
      },
      {
        id: "walkthrough-ch4-step3",
        type: "prose",
        heading: "Step 3 center reflector bounce: right to the middle, middle to W, left to upside-down Y",
        body:
          "Pull the right reflector toward the middle reflector first. Aim the middle reflector at the W symbol revealed on the right side of the arena wall, and then aim the left reflector at the upside-down Y on the left side. The center reflector bounces the right beam through to the W symbol and the left beam through to the Y, completing the third pair. Once all three pairs are lit, the Minoan Sphere slot opens in the centre of the arena.",
        links: [CH4_MINOTAUR_ALLTHINGS, CH4_PUZZLE_GAMERANT, CH4_PUZZLE_GAMINGPROMAX],
      },
      {
        id: "walkthrough-ch4-cutscene",
        type: "prose",
        heading: "Sphere insertion cutscene and 'From Hell It Rose' trophy unlock",
        body:
          "Interact with the Minoan Sphere slot to play the insertion cutscene. The cutscene confirms the First Trial climax and triggers the 'From Hell It Rose' chapter trophy alongside a single Resonance Point reward that is added to the run total. The Resonance Point from this cutscene is the same currency the 'Like a Warrior' Gold collectible trophy tracks; see the trophy and achievements page for the 165-point threshold and missable flag.",
        links: [CH4_PUZZLE_IGN, TROPHY_GSC_100],
      },
      {
        id: "walkthrough-ch4-ambush",
        type: "prose",
        heading: "Post-puzzle soldier ambush led by an armored brute and the stagger-window unlock",
        body:
          "Immediately after the cutscene, a soldier ambush triggers in the corridor leading out of the arena. The ambush is led by an armored brute and supported by two or three regular soldiers; the brute opens with a heavy overhead swing that has a clearly readable wind-up. Perfect-parry the brute's first swing to unlock Sophia's stagger-window combat ability against armored enemies, which she then carries into the rest of the chapter. Launch-week guides confirm the stagger-window unlock is gated specifically by parrying the brute's opening attack, not by any later hit.",
        links: [CH4_PUZZLE_IGN, CH4_PUZZLE_GAMERANT],
      },
      {
        id: "walkthrough-ch4-mistakes",
        type: "prose",
        heading: "Common Chapter 4 Minotaur Room mistakes",
        body:
          "Launch-week guides flag four recurring Chapter 4 mistakes: (1) targeting the wrong blank tablet in Step 2 because the worn panel is hard to read without the journal sketch; (2) skipping the Light Reveal ring scan on the raised statue hands, which leaves the third symbol pair invisible; (3) ignoring the middle reflector in Step 3 and trying to bounce a single reflector across the whole arena; (4) entering the post-puzzle ambush without warming up parry timing on the regular soldiers, which costs the stagger-window unlock against the armored brute.",
        links: [CH4_PUZZLE_GAMERANT, CH4_MINOTAUR_ALLTHINGS, CH4_PUZZLE_NOOBFEED],
      },
      {
        id: "walkthrough-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "The campaign structure (medieval Sophia chapters plus Minotaur's Island Minoan branch segments), Minoan sphere mechanics, and Light Weaving puzzle backbone are sourced from the Steam product description and launch reviews as of 2026-08-28. The Chapter 4 'From Hell It Rose' Minotaur Room three-pair reflector solution, the Light Reveal ring scan on the raised Minotaur statue hands, the post-puzzle Sphere insertion cutscene, the soldier ambush led by an armored brute, the stagger-window ability unlock, the Resonance Point reward, and the 'From Hell It Rose' chapter trophy unlock are sourced from launch-week walkthroughs (allthings.how, Dot Esports, Game Rant, GamingProMax, NoobFeed, and the IGN Chapter 4: From Hell It Rose wiki page) as of 2026-09-02. Trophy carry rules and missable flag specifics are referenced from the trophy and achievements page rather than being reproduced in this walkthrough as of 2026-09-02. Companion dialogue copy that drives trophy-sensitive beats is referenced but not exhaustively quoted in launch press and remains a dated reference. Legacy predecessor material from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) is referenced for context only and is not used as a current-game fact source for the Resonance A Plague Tale Legacy walkthrough.",
      },
    ],
    faqIds: [
      "fixed-walkthrough-how-long",
      "fixed-walkthrough-chapter-order",
      "fixed-walkthrough-mino-mandatory",
      "fixed-walkthrough-trophies-across-runs",
      "fixed-walkthrough-difficulty-mid-run",
      "fixed-walkthrough-ch4-minotaur-room",
      "fixed-walkthrough-ch4-light-reveal",
      "fixed-walkthrough-ch4-ambush",
    ],
    relatedPageIds: [
      "home",
      "fixed-gameplay-explained-en-us",
      "fixed-minotaur-mythos-en-us",
      "fixed-characters-overview-en-us",
      "fixed-trophy-achievements-en-us",
      "fixed-beginner-tips-en-us",
      "fixed-how-long-to-beat-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-02",
  },

  // ---------------------------------------------------------------------
  // beginner-tips (guide)
  // ---------------------------------------------------------------------
  {
    id: "fixed-beginner-tips-en-us",
    translationKey: "beginner-tips",
    locale: "en-US",
    routeKind: "fixed",
    slug: "tips",
    url: "/tips",
    pageType: "guide",
    presentation: { shell: "hub" },
    h1: "What Are the Best Resonance A Plague Tale Legacy Beginner Tips?",
    seoTitle: "Resonance A Plague Tale Legacy Beginner Tips for New Players",
    metaDescription:
      "Resonance A Plague Tale Legacy beginner tips for Sophia's early game roadmap, Minoan sphere unlock priority, Macula exposure, and recommended difficulty settings.",
    summary:
      "The best Resonance A Plague Tale Legacy beginner tips start with a calm first hour, a defensive stance on medieval scout patrols, and a steady drip of Macula exposure rather than a sprint. New players should push the Minoan sphere unlock order rather than dabbling.",
    hero: {
      eyebrow: "Beginner tips",
      subtitle:
        "The best Resonance A Plague Tale Legacy beginner tips start with a calm first hour, a defensive stance on medieval scout patrols, and a steady drip of Macula exposure rather than a sprint. New players should push the Minoan sphere unlock order rather than dabbling.",
      ctas: [
        { label: "Gameplay", href: "/gameplay" },
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "Characters", href: "/characters" },
      ],
    },
    quickAnswer:
      "The best Resonance A Plague Tale Legacy beginner tips start with a calm first hour, a defensive stance on medieval scout patrols, and a steady drip of Macula exposure rather than a sprint. New players should push the Minoan sphere unlock order rather than dabbling, treat Daedalus' Light Weaving puzzles as a beginner-friendly system, and start on the default difficulty. The Heritage Pack pre-order DLC includes the Minoan Sword (third-hit stun) and Alec's Pendant (boosts every charm), so weave both into your build rather than ignore them.",
    keyFacts: [
      { label: "First hour", value: "Calm pacing, defensive stealth, default settings" },
      { label: "Macula exposure", value: "Treat as a budget, not a meter" },
      { label: "Minoan sphere", value: "Push trials early in the medieval scenes" },
      { label: "Difficulty", value: "Default for first run" },
      { label: "Heritage Pack", value: "Minoan Sword stagger + Alec's Pendant charm boost" },
    ],
    modules: [
      {
        id: "beginner-tips-roadmap",
        type: "prose",
        heading: "Resonance A Plague Tale Legacy Beginner Tips: Early-Game Roadmap for Sophia's First Hours",
        body:
          "The first hours of Resonance A Plague Tale Legacy set the rhythm for the rest of the campaign. Sophia's medieval scenes pace more slowly than the Minoan branch trials, and launch press consistently frames the medieval hours as a tutorial surface rather than a sprint. The roadmap below maps what to do, what to ignore, and when to push into the Minoan branch.",
        links: [RESONANCE_STEAM, RESONANCE_IGN],
      },
      {
        id: "beginner-tips-first-encounter",
        type: "prose",
        heading: "First Sophia encounter and chapter opener",
        body:
          "Open the game with default controls, default audio mix, and default difficulty. Launch press frames the opening Sophia encounter as a tutorial that teaches parry, kick, and chain sword basics before any Macula exposure decision. Do not toggle experimental accessibility settings during the opener; they can mask the timing windows that the parry and kick tutorials want to teach. Reach the first Minoan sphere puzzle gate before changing any setting beyond subtitle scale.",
        links: [RESONANCE_IGN, RESONANCE_RPS],
      },
      {
        id: "beginner-tips-macula",
        type: "prose",
        heading: "Managing Macula exposure in chapter 1",
        body:
          "Macula exposure is the central resource for new players. The exposure meter ticks up when Sophia stays in Macula-flooded zones, when companions are downed, and when a Macula boss telegraph fully lands. Stepping into safe rooms drains exposure slowly; chain sword parries drain it faster. Treat exposure as a budget, not a meter to ignore, and avoid sitting in Macula-flooded zones during tutorial dialogue.",
        links: [RESONANCE_EUROGAMER],
      },
      {
        id: "beginner-tips-stealth",
        type: "prose",
        heading: "Medieval scout patrols and stealth basics",
        body:
          "Stealth in the medieval scenes is built around tall grass, distraction tools, and scout patrol sight cones rather than the heavier Inquisition-era chases from A Plague Tale: Innocence. New players should crouch in grass first, throw distraction tools only when the patrol cone is clearly clear, and avoid kicking until the parry timing window is comfortable. Sling stones and thrown debris remain relevant, but the launch campaign leans on parry and kick more than the earlier games did.",
        links: [RESONANCE_IGN],
      },
      {
        id: "beginner-tips-mino-unlock",
        type: "prose",
        heading: "Minoan Sphere Unlock Priority for New Players",
        body:
          "The Minoan sphere is the new ability layer that gates most puzzles and most Minoan branch encounters. A clear unlock order reduces wasted Macula exposure and avoids the trap of burning early charges on optional chains.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "beginner-tips-trials",
        type: "prose",
        heading: "When to push Minoan sphere trials",
        body:
          "Push the Minoan sphere trials as soon as the medieval scenes open the first sphere chamber. Each trial grants a passive lens adjustment and a new chain reaction, both of which downstream puzzles assume you have learned. Holding the trials until later chapters only forces you to redo puzzles on harder modes. The launch campaign deliberately gates the second Minoan branch set behind the first sphere trial for this reason.",
        links: [RESONANCE_INSIDER],
      },
      {
        id: "beginner-tips-light-weaving",
        type: "prose",
        heading: "Daedalus Light Weaving as a beginner shortcut",
        body:
          "Daedalus Light Weaving is the puzzle system that drives the Minoan branch chambers. It is built around reflective panels, lens pivots, and timed chain triggers that re-fire when Sophia repositions a Minoan sphere lens. New players should treat each chamber as one lens at a time: solve the panel nearest Sophia's entry, then walk forward rather than trying to solve the whole room from the doorway. The reflective panel rhythm is the same one used in Daedalus-themed prologue chambers in earlier Plague Tale campaigns, so returning players have a small head start.",
        links: [RESONANCE_EUROGAMER, RESONANCE_IGN],
      },
      {
        id: "beginner-tips-heritage",
        type: "prose",
        heading: "Heritage Pack items and the unlock order",
        body:
          "The Heritage Pack pre-order DLC adds the Minoan Sword (a stun-on-third-hit weapon that lands a stun on the third consecutive hit), Alec's Pendant (a charm that boosts the stats of all your charms), and a digital art book. Both items have real gameplay effects: the Minoan Sword's third-hit stun opens a stagger window in scout corridors, and Alec's Pendant scales every equipped charm. New players should plan their charm loadout around Alec's Pendant early and treat the Minoan Sword as a reliable stagger opener, then revisit specific stun timing after the second Minoan branch set unlocks. Specific per-chapter stun timing for the Minoan Sword and per-charm scaling values for Alec's Pendant are not surfaced in launch press and are treated as a dated reference as of 2026-08-28.",
        links: [RESONANCE_INSIDER, RESONANCE_HERITAGE_DLC],
      },
      {
        id: "beginner-tips-macula-surge",
        type: "prose",
        heading: "Reading Macula surge cues",
        body:
          "Macula surge cues arrive as a red rim on the screen, a tightened exposure bar, and a slow audio hum underneath the medieval soundscape. When you see the rim tighten, plan to either retreat to a safe room or trigger a parry chain. The surge does not start a boss; it just telegraphs that an enemy or environmental attack is incoming. Treat the rim as a half-second warning window, not a timer.",
        links: [RESONANCE_EUROGAMER, RESONANCE_IGN],
      },
      {
        id: "beginner-tips-retreat-hide-parry",
        type: "prose",
        heading: "Retreat, hide, or parry?",
        body:
          "Retreat is the right call when the surge arrives during a long patrol corridor with no cover. Hide is the right call when tall grass, a crate stack, or a hanging cloth is in reach. Parry is the right call when a single enemy is mid-telegraph within chain sword range and Sophia has full stamina. Defaulting to retreat is the safest beginner habit, but it slows the campaign noticeably; rotating between the three responses is the long-term rhythm.",
        links: [RESONANCE_IGN, RESONANCE_RPS],
      },
      {
        id: "beginner-tips-spend-lens",
        type: "prose",
        heading: "When to spend exposure on a Minoan sphere lens",
        body:
          "Minoan sphere lens adjustments cost exposure in addition to puzzle time. Spend the lens adjustment only when the reflective panel puzzle in front of Sophia cannot be solved any other way. If a panel can be triggered with the default lens, do not spend the lens. The lens budget recovers slowly in safe rooms and is the largest source of wasted retries for new players.",
        links: [RESONANCE_INSIDER, RESONANCE_EUROGAMER],
      },
      {
        id: "beginner-tips-difficulty-baseline",
        type: "prose",
        heading: "Difficulty for first playthrough",
        body:
          "Default difficulty is the recommended baseline. It tunes Macula exposure decay, parry and kick timing windows, and Macula boss pattern reveals to forgiving values. The hardest preset tightens parry timing and lengthens exposure decay, which is hostile to new players learning the dynamic melee loop. Easy presets loosen timing windows and shorten Macula boss phases, which is the right pick only if a player explicitly wants the story over the combat rhythm.",
        links: [RESONANCE_RPS, RESONANCE_INSIDER],
      },
      {
        id: "beginner-tips-controller",
        type: "prose",
        heading: "Controller layout and accessibility options",
        body:
          "Default controller layout matches the launch campaign's tutorial icons and is the right pick for the first playthrough. Accessibility options include subtitle scale, aim assist, and an optional parry timing visual cue. New players who struggle with parry timing should enable the parry cue rather than dropping difficulty; it preserves the intended combat rhythm and keeps the Macula boss pacing intact. Aim assist is on by default; toggle it off only after the second medieval chapter.",
        links: [RESONANCE_RPS, RESONANCE_IGN],
      },
      {
        id: "beginner-tips-save-benches",
        type: "prose",
        heading: "Save points, rest benches, and when to quit",
        body:
          "The medieval scenes and Minoan branch chambers both rest at fixed benches. Save progress is automatic at benches and at chapter transitions. New players should treat benches as a rhythm point rather than a checkpoint: refill the Minoan sphere lens, reset parry timing, and continue. Quitting at a bench does not lose progress, and the save system treats the bench as the rest point, not the quit point. This avoids the retry loop that haunts first-time Macula boss attempts.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "beginner-tips-mistakes",
        type: "callout",
        tone: "caution",
        title: "Common beginner mistakes to avoid",
        body:
          "A handful of recurring mistakes show up in launch press reception and in early review verdicts. New players who avoid them save themselves several restarts: spending Macula exposure on optional lens adjustments before the required reflective panel puzzle; triggering a Minoan sphere trial before the parry and kick tutorials have completed; ignoring tall grass in medieval scout corridors in favour of distraction throws; holding the parry button rather than tapping it on enemy telegraphs; restarting after a single Macula boss phase rather than rotating between parry, retreat, and hide; and ignoring the Minoan Sword's third-hit stun or Alec's Pendant charm stat boost before unlocking the second Minoan branch set.",
      },
      {
        id: "beginner-tips-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Sophia's default controls, default difficulty, and default controller layout are confirmed in launch press as the recommended beginner baseline as of 2026-08-28. Macula exposure cue timing, parry and kick timing values, and Daedalus Light Weaving puzzle tempo are framed from launch-day press coverage as of 2026-08-28 and treated as a dated reference until per-puzzle step-by-step surfaces. The Minoan sphere unlock order and the lens adjustment budget are described from launch press reception; specific per-trial lens costs are not exhaustively published as of 2026-08-28. Heritage Pack Minoan Sword third-hit stun and Alec's Pendant charm stat boost are described from launch press reception as of 2026-08-28; specific per-chapter stun timing and per-charm scaling values are not exhaustively published as of 2026-08-28 and are treated as a dated reference for these beginner tips. Macula boss names, Macula boss HP, and specific per-chapter parry timing windows are not surfaced in launch press as of 2026-08-28 and are treated as a dated reference for these beginner tips. Legacy predecessor mechanics from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) are referenced only inside the versus Plague Tale series page and the legacy boundary notes; they are not presented as current-game beginner tips here.",
      },
    ],
    faqIds: [
      "fixed-beginner-tips-first-do",
      "fixed-beginner-tips-unlock-mino",
      "fixed-beginner-tips-macula",
      "fixed-beginner-tips-difficulty",
      "fixed-beginner-tips-heritage",
      "fixed-beginner-tips-quit",
    ],
    relatedPageIds: [
      "home",
      "fixed-gameplay-explained-en-us",
      "fixed-walkthrough-en-us",
      "fixed-characters-overview-en-us",
      "fixed-minotaur-mythos-en-us",
      "fixed-heritage-pack-dlc-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // ---------------------------------------------------------------------
  // vs-plague-tale-series (comparison)
  // ---------------------------------------------------------------------
  {
    id: "fixed-vs-plague-tale-series-en-us",
    translationKey: "vs-plague-tale-series",
    locale: "en-US",
    routeKind: "fixed",
    slug: "vs-plague-tale-series",
    url: "/vs-plague-tale-series",
    pageType: "comparison",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Resonance vs Plague Tale Innocence and Requiem: How Does the New Game Compare?",
    seoTitle: "Resonance vs Plague Tale Innocence and Requiem Compared",
    metaDescription:
      "Resonance vs Plague Tale Innocence and Requiem compared across protagonist, timeline, Macula lore, gameplay and cast with current vs legacy labels.",
    summary:
      "Resonance vs Plague Tale Innocence and Requiem comparison: the current game is the third franchise entry, swaps Amicia de Rune for Sophia, layers a Minoan branch alongside Sophia's medieval timeline, and adds a dynamic melee loop with Light Weaving puzzles. Innocence (2019) and Requiem (2022) are cited only as legacy reference points.",
    hero: {
      eyebrow: "Franchise comparison",
      subtitle:
        "Resonance vs Plague Tale Innocence and Requiem comparison: the current game is the third franchise entry, swaps Amicia de Rune for Sophia, layers a Minoan branch alongside Sophia's medieval timeline, and adds a dynamic melee loop with Light Weaving puzzles. Innocence (2019) and Requiem (2022) are cited only as legacy reference points.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "Gameplay", href: "/gameplay" },
        { label: "Release overview", href: "/release" },
      ],
    },
    quickAnswer:
      "In this Resonance vs Plague Tale Innocence and Requiem comparison, the current game is the third entry in the franchise by Asobo Studio and Focus Entertainment. It follows A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022), swaps Amicia de Rune and Arica for Sophia, adds an ancient Minoan branch alongside Sophia's medieval timeline, and layers a dynamic melee loop with Light Weaving puzzles. Innocence and Requiem remain stealth-led, sling and crossbow driven, and are cited only as legacy reference points, never as current-game facts.",
    keyFacts: [
      { label: "Franchise position", value: "Third game after Innocence (2019) and Requiem (2022)" },
      { label: "Protagonist", value: "Sophia replaces Amicia de Rune" },
      { label: "Timeline", value: "Dual medieval + Minoan branch (current game only)" },
      { label: "Macula lore", value: "Origin layer added in the Minoan branch" },
      { label: "Gameplay shift", value: "Dynamic melee + Light Weaving puzzles" },
    ],
    modules: [
      {
        id: "vs-plague-protagonist",
        type: "prose",
        heading: "Resonance vs Plague Tale Innocence and Requiem: Protagonist Comparison",
        body:
          "The protagonist shift is the most visible change between the current game and its predecessors. The comparison below marks current-game facts about Sophia strictly against legacy-reference notes about Amicia and Arica.",
        links: [RESONANCE_STEAM, RESONANCE_IGN],
      },
      {
        id: "vs-plague-sophia-head",
        type: "prose",
        heading: "Current-game fact: Sophia as the head of the cast",
        body:
          "Sophia is the new protagonist of Resonance A Plague Tale Legacy and the first A Plague Tale lead outside the de Rune siblings. Launch press and the Steam product description cite Sophia as the head of the cast across both timelines. She carries the Macula lineage through medieval scenes and the Minoan branch, and her choices drive parry, kick, and chain sword pacing in combat. Sophia's voice actress is listed in the launch trailer cast list and cross-confirmed by IGN, Eurogamer, and Insider Gaming launch coverage. Her exact age in calendar years is not exhaustively published in launch press and is treated as a dated reference as of 2026-08-28.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER, RESONANCE_INSIDER],
      },
      {
        id: "vs-plague-amicia-arica",
        type: "prose",
        heading: "Legacy reference: Amicia de Rune and Arica",
        body:
          "Amicia de Rune was the protagonist of A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022), both by Asobo Studio and Focus Entertainment. She carried the medieval storyline alongside her younger brother Hugo de Rune, who bore the Macula bloodline. Arica joined the cast in Requiem as a Romani companion with rat-control abilities. The de Rune-era cast is referenced here only to clarify Macula lore continuity and the shift in protagonist for Resonance A Plague Tale Legacy. Legacy predecessor characters are not playable in the current game and are not presented as current-game facts.",
        links: [RESONANCE_INNOCENCE, RESONANCE_REQUIEM],
      },
      {
        id: "vs-plague-timeline",
        type: "prose",
        heading: "Timeline: Medieval Outbreak vs Dual Medieval and Minoan Branch",
        body:
          "The timeline structure is the second major point of comparison. The current game runs two parallel timelines; Innocence and Requiem each ran a single medieval thread.",
        links: [RESONANCE_STEAM, RESONANCE_EUROGAMER],
      },
      {
        id: "vs-plague-dual-timeline",
        type: "prose",
        heading: "Current-game fact: dual medieval and Minoan branch timeline",
        body:
          "Resonance A Plague Tale Legacy runs Sophia through a 14th-century medieval outbreak and through an ancient Minoan branch in parallel. Each medieval chapter pairs with at least one Minoan branch chamber, and the dual structure gates Minoan sphere unlocks behind medieval chapter beats. The Minoan branch is set on Minotaur's Island and includes Daedalus' labyrinth passages, which are distinct from any location in Innocence or Requiem. Specific per-chapter Minoan-to-medieval mapping is not surfaced in launch press and is treated as a dated reference as of 2026-08-28.",
        links: [RESONANCE_EUROGAMER, RESONANCE_IGN],
      },
      {
        id: "vs-plague-innocence-outbreak",
        type: "prose",
        heading: "Legacy reference: Innocence and Requiem outbreaks",
        body:
          "A Plague Tale: Innocence (2019) was set during the 14th-century Black Death outbreak across southern France. A Plague Tale: Requiem (2022) opened in southern France and moved toward the Mediterranean, shifting the historical scope while keeping the de Rune siblings at the centre. Neither game featured a non-medieval branch. The dual-timeline structure is unique to the current game and is referenced here only to clarify what Resonance A Plague Tale Legacy adds beyond Innocence and Requiem.",
        links: [RESONANCE_INNOCENCE, RESONANCE_REQUIEM],
      },
      {
        id: "vs-plague-macula-lore",
        type: "prose",
        heading: "Macula Lore Continuity Across the Franchise",
        body:
          "The Macula is the through-line that ties the three games together. The current game treats Macula as a living legacy rather than a medieval-era condition alone.",
        links: [RESONANCE_STEAM, RESONANCE_INSIDER],
      },
      {
        id: "vs-plague-macula-legacy",
        type: "prose",
        heading: "Current-game fact: Macula's legacy in Resonance",
        body:
          "Resonance A Plague Tale Legacy frames Macula as a recurring condition whose influence predates the medieval outbreak. The Minoan branch is presented as the origin layer of Macula lore, and Sophia's lineage is tied to that origin through mentor dialogue and ritual witness beats. Macula's legacy creatures are the headline boss encounters of the Minoan branch, and the Steam product description cites Macula's legacy as the framing for the second timeline. Boss names, individual HP values, and per-encounter Macula exposure decay are not exhaustively published in launch press and are treated as a dated reference as of 2026-08-28.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER],
      },
      {
        id: "vs-plague-macula-predecessors",
        type: "prose",
        heading: "Legacy reference: Macula in Innocence and Requiem",
        body:
          "In Innocence (2019) and Requiem (2022), the Macula was a bloodline condition carried by Hugo de Rune. The medieval storyline followed Amicia's protection of Hugo and the eventual resolution of his condition at the end of Requiem. Macula lore in the predecessors was tied to medieval medicine, the de Rune bloodline, and the supernatural carrier of the rat swarms. Macula's legacy framing in the current game is referenced here only to clarify what Resonance A Plague Tale Legacy adds beyond Innocence and Requiem; it is not presented as a contradiction or replacement of the predecessor lore.",
        links: [RESONANCE_INNOCENCE, RESONANCE_REQUIEM],
      },
      {
        id: "vs-plague-gameplay-evolution",
        type: "prose",
        heading: "Gameplay Evolution: Stealth, Melee, and Light Weaving",
        body:
          "The gameplay loop is where the three games diverge most. The current game adds dynamic melee and Light Weaving puzzles; Innocence and Requiem leaned on stealth and ranged tools.",
        links: [RESONANCE_RPS, RESONANCE_INSIDER],
      },
      {
        id: "vs-plague-dynamic-melee",
        type: "prose",
        heading: "Current-game fact: dynamic melee plus Light Weaving",
        body:
          "Resonance A Plague Tale Legacy's combat loop is built around dynamic melee, parry, kick, and chain sword. Enemies telegraph before each attack, and parry timing is the primary defensive tool. Macula exposure and Minoan sphere lens adjustments are layered on top of the combat loop. Light Weaving puzzles use reflective panels and Daedalus' labyrinth mechanics to drive the Minoan branch. The dynamic melee loop is described by launch press as a deliberate evolution beyond the sling and crossbow combat of the predecessors. Specific parry timing values, exact chain sword combo windows, and individual Minoan sphere lens costs are not surfaced in launch press and are treated as a dated reference as of 2026-08-28.",
        links: [RESONANCE_IGN, RESONANCE_DESTRUCTOID],
      },
      {
        id: "vs-plague-sling-crossbow",
        type: "prose",
        heading: "Legacy reference: sling, crossbow, and stealth tools",
        body:
          "A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) leaned on a stealth-led loop with sling stones, crossbow bolts, and crafted tools to manage rat swarms and human patrols. The predecessors did not feature a parry-driven melee loop. Combat in Innocence and Requiem was tuned for stealth-first encounters rather than dynamic melee chains. The current game shifts that emphasis and adds Light Weaving as a separate puzzle layer; the predecessor loop is referenced here only as the baseline that Resonance A Plague Tale Legacy evolves beyond.",
        links: [RESONANCE_INNOCENCE, RESONANCE_REQUIEM],
      },
      {
        id: "vs-plague-cast",
        type: "prose",
        heading: "Cast and Returning Companions",
        body:
          "The cast is the third major comparison axis. The current game ships a new ensemble with a small set of returning companions from the predecessors.",
        links: [RESONANCE_INSIDER, RESONANCE_IGN],
      },
      {
        id: "vs-plague-new-cast",
        type: "prose",
        heading: "Current-game fact: new Minoan branch ensemble",
        body:
          "Resonance A Plague Tale Legacy ships a new Minoan branch cast anchored by puzzle partners, ritual witnesses, and Macula's legacy antagonists. The launch trailer cast list and IGN, Eurogamer, and Insider Gaming launch coverage cite the new ensemble as distinct from the de Rune-era allies. Returning companions from earlier A Plague Tale installments appear in the medieval scenes alongside Sophia but are not headlined as the core cast. Specific mentor biographies, returning companion names, and per-chapter ritual witness copy are not exhaustively published in launch press and are treated as a dated reference as of 2026-08-28.",
        links: [RESONANCE_IGN, RESONANCE_EUROGAMER, RESONANCE_INSIDER],
      },
      {
        id: "vs-plague-de-rune-companions",
        type: "prose",
        heading: "Legacy reference: de Rune companions and allies",
        body:
          "A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) carried Amicia and Hugo de Rune alongside companions including Lucas, Mélanie, Sophia's ancestor Beatrice, and Romani allies. The companion roles leaned on distraction, healing, and rat-control abilities tied to controller face buttons. The de Rune-era companions are referenced here only to clarify the shift in cast structure between Innocence, Requiem, and the current game. Legacy predecessor characters are not presented as current-game facts and are not part of the Resonance A Plague Tale Legacy playable cast as of 2026-08-28.",
        links: [RESONANCE_INNOCENCE, RESONANCE_REQUIEM],
      },
      {
        id: "vs-plague-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Resonance A Plague Tale Legacy (2026) is the current game and is the source of all current-game facts in this comparison as of 2026-08-28. Sophia as the new protagonist, the dual medieval and Minoan branch timeline, the dynamic melee loop, the Light Weaving puzzle system, and the new Minoan branch ensemble are confirmed in launch press and the Steam product description as of 2026-08-28. A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) are referenced only as legacy predecessors inside this comparison page; their facts are never presented as current-game facts. Specific Macula boss names, Macula boss HP values, per-puzzle Light Weaving step-by-step, exact Minoan sphere lens costs, and Sophia's calendar age are not surfaced in launch press as of 2026-08-28 and are treated as a dated reference. The Macula's legacy framing in the current game is described as an evolution of the predecessor lore; it is not framed as a contradiction or replacement of Innocence or Requiem. Cross-progression between PS5, Xbox, and Steam for the current game is not announced as of 2026-08-28. A demo for the current game is not announced as of 2026-08-28.",
      },
    ],
    faqIds: [
      "fixed-vs-plague-tale-third-game",
      "fixed-vs-plague-tale-amicia",
      "fixed-vs-plague-tale-timeline",
      "fixed-vs-plague-tale-macula",
      "fixed-vs-plague-tale-gameplay",
      "fixed-vs-plague-tale-mino-abilities",
    ],
    relatedPageIds: [
      "home",
      "fixed-characters-overview-en-us",
      "fixed-gameplay-explained-en-us",
      "fixed-release-overview-en-us",
      "fixed-minotaur-mythos-en-us",
      "fixed-walkthrough-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
];
