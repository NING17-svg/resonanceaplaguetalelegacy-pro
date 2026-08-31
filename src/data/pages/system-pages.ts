import type { PageContent } from "@/types/content";

// Resonance: A Plague Tale Legacy — CollectionPage overview hubs.
// The V3 route contract requires `guides` and `wiki` translation keys; they
// expose curated entry points into the fixed pages but do not introduce
// content beyond what the approved localized copy covers.

const LAST_REVIEWED = "2026-08-28";

export const guidesPage: PageContent = {
  id: "guides",
  translationKey: "guides",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides",
  url: "/guides",
  pageType: "guides",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "Resonance: A Plague Tale Legacy Guides",
  seoTitle:
    "Resonance: A Plague Tale Legacy Guides | Walkthrough, Tips, Mythos",
  metaDescription:
    "Guides index for Resonance: A Plague Tale Legacy: walkthrough, beginner tips, gameplay mechanics, Minotaur mythos, and a comparison with the Plague Tale series.",
  summary:
    "A curated guides index for Resonance: A Plague Tale Legacy covering the walkthrough, beginner tips, gameplay mechanics, Minotaur mythos, and a comparison with A Plague Tale: Innocence and Requiem.",
  hero: {
    eyebrow: "Guides",
    subtitle:
      "Start with the walkthrough and beginner tips, then dive into the gameplay mechanics, the Minotaur mythos, and the comparison with the Plague Tale series.",
    ctas: [
      { label: "Walkthrough", href: "/walkthrough/" },
      { label: "Beginner Tips", href: "/tips/" },
    ],
  },
  quickAnswer:
    "Every guide on this site is sourced from the Steam store page (AppID 2713000), PlayStation Store product page, Xbox Store listing, Focus Entertainment press release, and launch press from IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun as of 2026-08-28. Unannounced details are labeled with dated status statements.",
  keyFacts: [
    { label: "Guide depth", value: "Status, reference, list, explanation, guide, comparison" },
    { label: "Source rule", value: "Official facts plus launch press, dated 2026-08-28" },
    { label: "Avoid", value: "Speculation, puzzle solutions, boss HP, build maths" },
    { label: "Next upgrade", value: "Update after post-launch press expands known facts" },
  ],
  modules: [
    {
      id: "guides-overview",
      type: "prose",
      heading: "Guide index",
      body:
        "The guides index groups every fixed page into a single hub. Use it to jump from release status or Game Pass listings straight into the walkthrough, beginner tips, or the Minoan mythos explanation.",
      links: [
        { label: "Walkthrough", href: "/walkthrough/", description: "Chapter-by-chapter reference through Sophia's medieval and Minotaur's Island branches." },
        { label: "Beginner Tips", href: "/tips/", description: "Safe early-game decisions and Minoan sphere unlock order." },
        { label: "Gameplay", href: "/gameplay/", description: "Dual timelines, dynamic melee, Light Weaving and Macula's legacy bosses." },
        { label: "Characters", href: "/characters/", description: "Sophia, new and returning cast, Macula lineage." },
        { label: "Minotaur Mythos", href: "/minotaur-mythos/", description: "Minoan branch, Daedalus, Light Weaving, Macula lore." },
        { label: "Vs Plague Tale Series", href: "/vs-plague-tale-series/", description: "Comparison with Innocence and Requiem." },
      ],
    },
    {
      id: "guides-sources",
      type: "prose",
      heading: "Sources",
      body:
        "- [Steam store page for Resonance: A Plague Tale Legacy (AppID 2713000)](https://store.steampowered.com/app/2713000) - `official/store` - checked 2026-08-28.\n- [Focus Entertainment press release](https://www.focus-entmtn.com/en/news) - `official/store` - checked 2026-08-28.\n- [Rock Paper Shotgun launch review (2026-08-26)](https://www.rockpapershotgun.com/resonance-a-plague-tale-legacy-review) - `media/interview` - checked 2026-08-28.",
    },
  ],
  faqIds: [],
  relatedPageIds: [
    "fixed-walkthrough-en-us",
    "fixed-beginner-tips-en-us",
    "fixed-gameplay-explained-en-us",
    "fixed-characters-overview-en-us",
    "fixed-minotaur-mythos-en-us",
    "fixed-vs-plague-tale-series-en-us",
  ],
  schemaTypes: ["CollectionPage", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: LAST_REVIEWED,
};

export const wikiPage: PageContent = {
  id: "wiki",
  translationKey: "wiki",
  locale: "en-US",
  routeKind: "fixed",
  slug: "wiki",
  url: "/wiki",
  pageType: "wiki",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "Resonance: A Plague Tale Legacy Wiki",
  seoTitle:
    "Resonance: A Plague Tale Legacy Wiki | Release, Game Pass, Mythos",
  metaDescription:
    "A wiki landing page for Resonance: A Plague Tale Legacy: release status, Game Pass day-one, platforms, editions, Heritage Pack, gameplay, characters, and Minotaur mythos.",
  summary:
    "A wiki landing page grouping release status, Game Pass day-one status, platforms, editions, Heritage Pack, gameplay mechanics, characters, and the Minotaur mythos.",
  hero: {
    eyebrow: "Wiki",
    subtitle:
      "Use the wiki landing page to move from the launch and Game Pass status pages into the gameplay, characters, and Minotaur mythos reference pages.",
    ctas: [
      { label: "Release", href: "/release/" },
      { label: "Game Pass", href: "/xbox-game-pass/" },
    ],
  },
  quickAnswer:
    "Every wiki entry below is sourced from the Steam store page (AppID 2713000), PlayStation Store product page, Xbox Store listing, Focus Entertainment press release, and launch press from IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun as of 2026-08-28.",
  keyFacts: [
    { label: "Fact source", value: "Official stores plus launch press" },
    { label: "Content depth", value: "Status, reference, explanation" },
    { label: "Update rule", value: "Update as launch facts expand" },
  ],
  modules: [
    {
      id: "wiki-overview",
      type: "prose",
      heading: "Wiki overview",
      body:
        "Use the wiki landing page to find the release status, Game Pass day-one status, supported platforms, editions, Heritage Pack, gameplay mechanics, characters, and the Minotaur mythos. Every entry below is a hub that links back to the canonical fixed pages.",
      links: [
        { label: "Release Date", href: "/release/", description: "Worldwide launch date and per-platform schedule." },
        { label: "Game Pass", href: "/xbox-game-pass/", description: "Xbox Game Pass and PC Game Pass day-one status." },
        { label: "Platforms", href: "/platforms/", description: "PS5, PS5 Pro, Xbox Series X|S and Steam SKUs." },
        { label: "Editions", href: "/editions/", description: "Standard, Collector's edition, and Heritage Pack." },
        { label: "Gameplay", href: "/gameplay/", description: "Dual timelines, dynamic melee, Light Weaving." },
        { label: "Characters", href: "/characters/", description: "Sophia, new and returning cast." },
        { label: "Minotaur Mythos", href: "/minotaur-mythos/", description: "Minoan branch, Daedalus, Macula lore." },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: [
    "fixed-release-overview-en-us",
    "fixed-platforms-console-en-us",
    "fixed-editions-pricing-en-us",
    "fixed-xbox-game-pass-en-us",
    "fixed-heritage-pack-dlc-en-us",
    "fixed-gameplay-explained-en-us",
    "fixed-characters-overview-en-us",
    "fixed-minotaur-mythos-en-us",
  ],
  schemaTypes: ["CollectionPage", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: LAST_REVIEWED,
};

export const faqPage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Resonance: A Plague Tale Legacy FAQ",
  seoTitle: "Resonance: A Plague Tale Legacy FAQ | Common Questions",
  metaDescription:
    "Common questions about the Resonance: A Plague Tale Legacy launch, Game Pass, platforms, gameplay, and walkthrough.",
  summary:
    "Short answers to the most common questions about the Resonance: A Plague Tale Legacy launch, Game Pass day-one status, platforms, gameplay, and walkthrough.",
  hero: {
    eyebrow: "FAQ",
    subtitle:
      "Quick answers to release, Game Pass, platforms, gameplay, and walkthrough questions without overclaiming.",
    ctas: [
      { label: "Release", href: "/release/" },
      { label: "Contact", href: "/contact" },
    ],
  },
  quickAnswer:
    "Every answer below is sourced to official facts or clear site policy so the FAQ stays accurate as launch facts change.",
  keyFacts: [
    { label: "FAQ source", value: "Official facts or site policy" },
    { label: "Schema", value: "FAQ JSON-LD enabled" },
    { label: "Review", value: "Update as launch facts change" },
  ],
  modules: [
    {
      id: "faq-policy",
      type: "prose",
      heading: "FAQ policy",
      body:
        "Keep answers short, source-aware, and easy to update. Avoid speculative claims about release dates, platforms, gameplay systems, or technical details.",
    },
  ],
  faqIds: [],
  relatedPageIds: [
    "fixed-release-overview-en-us",
    "fixed-xbox-game-pass-en-us",
    "fixed-platforms-console-en-us",
  ],
  schemaTypes: ["FAQPage", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: LAST_REVIEWED,
};