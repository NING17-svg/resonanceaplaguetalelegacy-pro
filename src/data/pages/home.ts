import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-08-28";

// Reuse the same official source links as the fixed pages so the homepage
// CTA cards and module prose point at the canonical launch sources.
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
const RESONANCE_RPS = {
  label: "Rock Paper Shotgun launch review (2026-08-26)",
  href: "https://www.rockpapershotgun.com/resonance-a-plague-tale-legacy-review",
  description: "\"Competent action game spinoff\" framing and launch verdict.",
};

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Resonance: A Plague Tale Legacy: Game Info & Guide Hub",
  seoTitle: "Resonance: A Plague Tale Legacy Game Info & Guide",
  metaDescription:
    "Launch hub for Resonance: A Plague Tale Legacy by Asobo Studio. Find the release date, Game Pass day-one status, supported platforms, editions, reviews, and tips.",
  summary:
    "Launch hub for Resonance: A Plague Tale Legacy, gathering the confirmed release date, Game Pass day-one status, supported platforms, editions, launch reviews, gameplay mechanics, walkthrough, beginner tips, character roster, and Minotaur mythos in one place.",
  hero: {
    eyebrow: "Launch hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Release overview", href: "/release" },
      { label: "Game Pass day one", href: "/xbox-game-pass" },
      { label: "Walkthrough", href: "/walkthrough" },
      { label: "Beginner tips", href: "/tips" },
    ],
  },
  quickAnswer:
    "Resonance: A Plague Tale Legacy is the third entry in the A Plague Tale franchise, developed by Asobo Studio and published by Focus Entertainment. The game launched worldwide on August 27, 2026, on PC (Steam), PlayStation 5, PS5 Pro, Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. Eighteen supported languages include Simplified and Traditional Chinese, and pre-purchase plus Heritage Pack DLC were open before launch.",
  keyFacts: [
    { label: "Launch date", value: "2026-08-27 (worldwide)" },
    { label: "Game Pass", value: "Day-one on console + PC tiers" },
    { label: "Platforms", value: "Steam, PS5, PS5 Pro, Xbox Series X|S" },
    { label: "Developer / publisher", value: "Asobo Studio / Focus Entertainment" },
    { label: "Heritage Pack", value: "Minoan Sword + Alec's Pendant + art book" },
  ],
  modules: [
    {
      id: "home-launch-summary",
      type: "prose",
      heading: "What is Resonance: A Plague Tale Legacy?",
      body:
        "Resonance: A Plague Tale Legacy is the third entry in the A Plague Tale franchise, developed by Asobo Studio and published by Focus Entertainment. The game launched worldwide on August 27, 2026, on PC (Steam), PlayStation 5, PS5 Pro, Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. This hub gathers the confirmed release window, platform lineup, edition options, launch reviews, gameplay mechanics, walkthrough, beginner tips, character roster and Minotaur mythos in one place.",
      links: [RESONANCE_STEAM, RESONANCE_FOCUS],
    },
    {
      id: "home-release-and-game-pass",
      type: "prose",
      heading: "Release date and Game Pass day-one status",
      body:
        "Resonance: A Plague Tale Legacy shipped worldwide on August 27, 2026, with simultaneous release on Steam (AppID 2713000), PlayStation 5 (including the PS5 Pro SKU), Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one. Eighteen supported languages include Simplified and Traditional Chinese, and pre-purchase plus Heritage Pack DLC were open before launch. The full per-platform schedule and language list live on the /release/ page.",
      links: [RESONANCE_STEAM, RESONANCE_XBOX, RESONANCE_FOCUS],
    },
    {
      id: "home-platforms",
      type: "prose",
      heading: "Platforms and console versions",
      body:
        "The game ships natively on Steam for PC, PlayStation 5, the PS5 Pro SKU, and Xbox Series X|S. Day-one Game Pass availability covers both Xbox Game Pass and PC Game Pass tiers. Cross-progression status between PS5, Xbox and Steam is not announced as of 2026-08-28. Full per-platform detail lives on the /platforms/ page.",
      links: [RESONANCE_STEAM, RESONANCE_PSN, RESONANCE_XBOX],
    },
    {
      id: "home-editions",
      type: "prose",
      heading: "Launch editions and pricing",
      body:
        "Editions confirmed by official stores cover the Standard edition (base game) and a Collector's edition tier on PlayStation. The Heritage Pack is a separate pre-order DLC containing the Minoan Sword, Alec's Pendant, and a digital art book. Per-platform price matrices and exact edition contents live on the /editions/ page and the /heritage-pack/ page.",
      links: [RESONANCE_PSN, RESONANCE_STEAM],
    },
    {
      id: "home-reviews",
      type: "prose",
      heading: "Launch critical reception",
      body:
        "IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun all published launch-day coverage on 2026-08-26 and 2026-08-27, with the Rock Paper Shotgun review describing Resonance: A Plague Tale Legacy as a \"competent action game spinoff.\" Aggregated verdicts and recurring praise and criticism themes are summarised on the /reviews/ page.",
      links: [RESONANCE_RPS, RESONANCE_FOCUS],
    },
    {
      id: "home-gameplay",
      type: "prose",
      heading: "Gameplay: dual timelines, dynamic melee, Light Weaving",
      body:
        "Gameplay splits between Sophia's medieval timeline and an ancient Minoan branch. Combat layers dagger, chain sword, parry and kick into a dynamic melee loop, while Light Weaving uses the Minoan sphere and Daedalus mechanics to solve labyrinth puzzles. Macula's legacy supplies creature bosses. Full mechanics live on the /gameplay/ page.",
      links: [RESONANCE_STEAM],
    },
    {
      id: "home-walkthrough-tips",
      type: "prose",
      heading: "Walkthrough and beginner tips",
      body:
        "The walkthrough covers both timelines chapter by chapter, including recommended Light Weaving puzzle order and key Minoan trials. The tips page focuses on safe early-game decisions and which Minoan sphere ability to unlock first. Both reference /gameplay/, /characters/ and /trophy-achievements/.",
      links: [RESONANCE_STEAM],
    },
    {
      id: "home-characters",
      type: "prose",
      heading: "Characters and Minotaur mythos",
      body:
        "Sophia is the new protagonist of Resonance: A Plague Tale Legacy, anchoring a new cast alongside returning characters from the Plague Tale franchise. The Minotaur mythos adds an ancient Minoan layer through Minotaur's Island, Daedalus' labyrinth, and Macula's legacy creatures. Full casts live on /characters/ and /minotaur-mythos/.",
      links: [RESONANCE_STEAM, RESONANCE_FOCUS],
    },
    {
      id: "home-trophies-and-runtime",
      type: "prose",
      heading: "Trophies, achievements and how long to beat",
      body:
        "Trophy and achievement data is published in line with the PlayStation Store product page, Xbox Achievements and TrueAchievements records. Main story, side content, and completionist runtimes are aggregated from HowLongToBeat and launch press. See /trophy-achievements/ and /how-long-to-beat/ for the full tables.",
      links: [RESONANCE_PSN, RESONANCE_XBOX],
    },
    {
      id: "home-vs-series",
      type: "prose",
      heading: "Comparing Resonance: A Plague Tale Legacy to the Plague Tale series",
      body:
        "Resonance: A Plague Tale Legacy differs from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) in protagonist, timeline structure, Macula lore scope, and combat pacing. The dedicated /vs-plague-tale-series/ page separates current-game facts from legacy reference material.",
      links: [RESONANCE_STEAM],
    },
    {
      id: "home-fact-boundary",
      type: "callout",
      tone: "caution",
      title: "Fact boundary — 2026-08-28",
      body:
        "Current-game facts on this hub (launch date 2026-08-27, Steam AppID 2713000, PS5 + PS5 Pro + Xbox Series X|S + Game Pass day one, 18 supported languages including Simplified and Traditional Chinese, Heritage Pack DLC contents, Sophia as the new protagonist, Minotaur's Island setting, Light Weaving mechanics, Macula's legacy creature design) are sourced only from the Steam store page, PlayStation Store product page, Xbox Store listing, Focus Entertainment press release, and launch press from IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun as of 2026-08-28. Cross-progression between PS5, Xbox and Steam, PS5 Pro native 4K and 60 fps target frame, demo availability, trophy and achievement exact unlock text per platform, and boss HP for Macula's legacy creatures are not announced as of 2026-08-28 and are treated as a dated reference. Legacy material from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) appears only inside /vs-plague-tale-series/ to disambiguate from current-game facts.",
    },
  ],
  faqIds: [
    "home-when-release",
    "home-game-pass",
    "home-pc-specs",
    "home-protagonist",
    "home-cross-progression",
    "home-heritage-pack",
  ],
  relatedPageIds: [
    "fixed-release-overview-en-us",
    "fixed-system-requirements-en-us",
    "fixed-platforms-console-en-us",
    "fixed-editions-pricing-en-us",
    "fixed-xbox-game-pass-en-us",
    "fixed-review-roundup-en-us",
    "fixed-metacritic-score-en-us",
    "fixed-how-long-to-beat-en-us",
    "fixed-trophy-achievements-en-us",
    "fixed-gameplay-explained-en-us",
    "fixed-characters-overview-en-us",
    "fixed-minotaur-mythos-en-us",
    "fixed-heritage-pack-dlc-en-us",
    "fixed-walkthrough-en-us",
    "fixed-beginner-tips-en-us",
    "fixed-vs-plague-tale-series-en-us",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: LAST_REVIEWED,
};