import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Resonance: A Plague Tale Legacy Guide",
  brandMark: "RPL",
  gameName: "Resonance: A Plague Tale Legacy",
  domain: "resonanceaplaguetalelegacy.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://resonanceaplaguetalelegacy.pro").replace(/\/$/, ""),
  description:
    "An unofficial US-English reference for Resonance: A Plague Tale Legacy (Asobo Studio / Focus Entertainment) covering release, Game Pass day-one status, editions and Heritage Pack, trophy / achievement list, system requirements, Sophia and Minotaur mythos, gameplay, walkthrough, beginner tips, and a comparison with A Plague Tale: Innocence and Requiem.",
  tagline: "Release, Game Pass, Heritage Pack, Sophia, Minotaur mythos and trophy reference for the August 2026 launch.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Resonance: A Plague Tale Legacy Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Resonance: A Plague Tale Legacy Steam store page (AppID 2713000, Asobo Studio / Focus Entertainment)",
      href: "https://store.steampowered.com/app/2713000",
      description: "Official store listing with release status, supported languages, system requirements, and feature list.",
    },
  ],
  disclaimer:
    "This is an unofficial Resonance: A Plague Tale Legacy fan reference. Current-game facts are sourced from the Steam store page (AppID 2713000), PlayStation Store product page, Xbox Store listing, Focus Entertainment press release, and launch-day press coverage as of 2026-08-28. Unannounced details are labeled with dated status statements.",
};
