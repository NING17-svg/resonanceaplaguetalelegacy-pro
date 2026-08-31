import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-08-28";

const SUPPORT_EMAIL = "support@resonanceaplaguetalelegacy.pro";

const SITE_OFFICIAL = {
  label: "Steam store page for Resonance: A Plague Tale Legacy (AppID 2713000)",
  href: "https://store.steampowered.com/app/2713000",
  description: "Official store listing used as the canonical current-game fact source.",
};

const SUPPORT_LINK = {
  label: `Email ${SUPPORT_EMAIL}`,
  href: `mailto:${SUPPORT_EMAIL}`,
  description: "Direct mail link for corrections, official source links, and feedback.",
};

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About Resonance: A Plague Tale Legacy Guide: unofficial fan reference covering scope, sourcing rules, editorial principles, and current-game fact boundaries.",
    summary:
      "Trust page explaining that the Resonance: A Plague Tale Legacy Guide is an unofficial fan reference, how facts are sourced, and what readers should expect.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Explain what the Resonance: A Plague Tale Legacy Guide covers, how launch facts are sourced, and what readers should expect from the unofficial fan reference.",
      ctas: [
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    quickAnswer:
      `${site.name} is an unofficial fan reference for Resonance: A Plague Tale Legacy (Asobo Studio / Focus Entertainment, 2026). It summarises the Steam store page, PlayStation Store listing, Xbox Store listing, Focus Entertainment press release, and launch press coverage as of 2026-08-28, and labels anything that is not yet announced as a dated status statement.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Official sources first, dated status for gaps" },
      { label: "Scope", value: "Release, platforms, editions, gameplay, walkthrough, tips" },
      { label: "Reviewed", value: "2026-08-28" },
    ],
    modules: [
      {
        id: "about-mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, well-structured information about Resonance: A Plague Tale Legacy without pretending the site knows more than the official sources support. The hub centres Sophia's medieval and Minoan branch timelines, the launch editions, the Game Pass day-one status, and the trophy / achievement list, and labels anything not yet published as a dated status statement instead of filling the gap with speculation.",
        links: [SITE_OFFICIAL],
      },
      {
        id: "about-sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Launch facts come from the Steam store page (AppID 2713000), PlayStation Store product page, Xbox Store listing, Focus Entertainment press release, and launch-day press coverage from IGN, Eurogamer, Insider Gaming, Destructoid, and Rock Paper Shotgun. HowLongToBeat, Metacritic, Xbox Achievements, TrueAchievements, and PSNProfiles supply aggregated playtime, critic, achievement, and trophy figures. Facts that change after launch are tracked on the relevant fixed page and re-checked against official stores.",
        links: [SITE_OFFICIAL],
      },
      {
        id: "about-scope",
        type: "prose",
        heading: "Scope",
        body:
          "The guide covers release status, Game Pass day-one availability, supported platforms and consoles, launch editions, the Heritage Pack DLC, system requirements, gameplay mechanics, the characters and Minotaur mythos pages, the walkthrough, beginner tips, trophy and achievement data, and a comparison against A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022). Trust pages cover About, Contact, Privacy Policy, and Terms.",
        links: [SITE_OFFICIAL],
      },
      {
        id: "about-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-28",
        body:
          "Cross-progression between PS5, Xbox and Steam, the PS5 Pro native 4K and 60 fps target frame, demo availability, trophy and achievement exact unlock text per platform, and boss HP for Macula's legacy creatures are not announced as of 2026-08-28 and are treated as dated status statements on the relevant pages. Legacy material from A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022) appears only inside /vs-plague-tale-series/ to disambiguate from current-game facts.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `Contact ${site.name}`,
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact the Resonance: A Plague Tale Legacy Guide for corrections, official source links, and feedback via support@resonanceaplaguetalelegacy.pro.",
    summary:
      "Trust page listing the support mailbox for corrections, official source updates, and feedback on the Resonance: A Plague Tale Legacy Guide.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        `Use the support mailbox below for corrections, official source links, and feedback on the Resonance: A Plague Tale Legacy Guide. The address is ${SUPPORT_EMAIL}.`,
      ctas: [
        SUPPORT_LINK,
        { label: "Read About", href: "/about" },
      ],
    },
    quickAnswer:
      `The Resonance: A Plague Tale Legacy Guide accepts corrections, official source links, and feedback at ${SUPPORT_EMAIL}. Messages are read by the site maintainer; please do not send game account credentials or sensitive personal information.`,
    keyFacts: [
      { label: "Email", value: SUPPORT_EMAIL },
      { label: "Primary use", value: "Corrections, source links, feedback" },
      { label: "Response window", value: "Best-effort, no SLA" },
      { label: "Languages", value: "English" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: `Email ${SUPPORT_EMAIL}`,
        body:
          `The single contact method for the Resonance: A Plague Tale Legacy Guide is ${SUPPORT_EMAIL}. Use the address for corrections, official source links, feedback on launch facts, accessibility reports, or privacy questions. Mailto links throughout the guide route to the same mailbox.`,
        links: [SUPPORT_LINK],
      },
      {
        id: "contact-corrections",
        type: "prose",
        heading: "Corrections and official source updates",
        body:
          "When sending a correction, include the official source link (Steam store page, PlayStation Store product page, Xbox Store listing, Focus Entertainment press release, or launch press coverage) and the page or section the correction should land on. Source-aware corrections are accepted from any reader; the maintainer cross-checks the link before applying the change.",
        links: [SUPPORT_LINK],
      },
      {
        id: "contact-feedback",
        type: "prose",
        heading: "Feedback and accessibility",
        body:
          "Feedback on navigation, content depth, accessibility issues, or new fixed pages is welcome at the same address. Do not send game account credentials, payment details, or other sensitive personal information; the mailbox is read by the site maintainer only and is not used for marketing.",
        links: [SUPPORT_LINK],
      },
      {
        id: "contact-fact-boundary",
        type: "callout",
        tone: "tip",
        title: "Privacy note",
        body:
          `Messages sent to ${SUPPORT_EMAIL} are stored only as long as needed to respond and are not added to a marketing list. See the Privacy Policy page for the full data-handling note as of 2026-08-28.`,
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `Privacy Policy | ${site.name}`,
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Resonance: A Plague Tale Legacy Guide covering analytics, contact messages, advertising providers, and data-handling notes as of 2026-08-28.",
    summary:
      "Privacy policy page covering analytics, contact messages, advertising, and data-handling notes for the Resonance: A Plague Tale Legacy Guide.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the Resonance: A Plague Tale Legacy Guide collects, why it is used, and how visitors can reach the maintainer.",
      ctas: [
        SUPPORT_LINK,
        { label: "Terms", href: "/terms" },
      ],
    },
    quickAnswer:
      "The Resonance: A Plague Tale Legacy Guide does not include accounts, comments, or payments. The site may use Google Analytics 4 for aggregate usage information and may display advertising through third-party ad providers; the contact mailbox is the only direct channel for user-submitted information.",
    keyFacts: [
      { label: "Analytics", value: "Google Analytics 4 (optional, aggregate only)" },
      { label: "Accounts", value: "None in V1" },
      { label: "Contact", value: `${SUPPORT_EMAIL}` },
      { label: "Ads", value: "Third-party ad providers only when enabled" },
    ],
    modules: [
      {
        id: "privacy-data",
        type: "prose",
        heading: "Information we collect",
        body:
          "The Resonance: A Plague Tale Legacy Guide does not include user accounts, comments, or payments. If Google Analytics 4 is configured, the analytics service may collect aggregate usage information (pages visited, browser type, approximate region) according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads. Refer to the deploy-time configuration for the exact providers in use.",
        links: [SITE_OFFICIAL],
      },
      {
        id: "privacy-contact",
        type: "prose",
        heading: "Contact messages",
        body:
          `The single contact channel is ${SUPPORT_EMAIL}. Messages may include whatever the visitor chooses to send (typically corrections, source links, or feedback). Messages are stored only as long as needed to respond and are not added to a marketing list. Do not send game account credentials, payment details, or other sensitive personal information through this channel.`,
        links: [SUPPORT_LINK],
      },
      {
        id: "privacy-cookies",
        type: "prose",
        heading: "Cookies and similar technologies",
        body:
          "If advertising is enabled, the third-party ad provider may set cookies or use similar technologies to deliver and measure ads. If Google Analytics 4 is enabled, the analytics service may set cookies to associate requests with sessions. The site itself does not set functional cookies beyond the locale and consent state required to render pages.",
        links: [SITE_OFFICIAL],
      },
      {
        id: "privacy-updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes. The last-reviewed date on this page reflects the most recent substantive review and is regenerated alongside the launch content on 2026-08-28.",
        links: [SITE_OFFICIAL],
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `Terms of Use | ${site.name}`,
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the unofficial Resonance: A Plague Tale Legacy Guide covering unofficial status, informational use, scope, disclaimers, and acceptable use.",
    summary:
      "Terms of use page setting expectations for unofficial status, informational use, scope, disclaimers, and acceptable use of the Resonance: A Plague Tale Legacy Guide.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, scope, and acceptable use of the Resonance: A Plague Tale Legacy Guide.",
      ctas: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        SUPPORT_LINK,
      ],
    },
    quickAnswer:
      "The Resonance: A Plague Tale Legacy Guide is an unofficial fan reference. Information is provided for personal, non-commercial use; official stores and press remain the authoritative source for purchase, platform, and release decisions.",
    keyFacts: [
      { label: "Use", value: "Informational guide content only" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Trademarks", value: "Belong to Asobo Studio / Focus Entertainment" },
      { label: "Reviewed", value: "2026-08-28" },
    ],
    modules: [
      {
        id: "terms-unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "The Resonance: A Plague Tale Legacy Guide is not affiliated with Asobo Studio, Focus Entertainment, Sony, Microsoft, Valve, or any trademark owner associated with Resonance: A Plague Tale Legacy unless explicitly stated after launch. All game-related trademarks, logos, and brand names are the property of their respective owners and are referenced solely for informational identification.",
        links: [SITE_OFFICIAL],
      },
      {
        id: "terms-accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. The last-reviewed date on each fixed page reflects the most recent substantive review against the Steam store page (AppID 2713000), PlayStation Store product page, Xbox Store listing, Focus Entertainment press release, and launch press coverage. Use official sources for final purchase, platform, and release decisions.",
        links: [SITE_OFFICIAL],
      },
      {
        id: "terms-acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the Resonance: A Plague Tale Legacy Guide, scrape the site aggressively, interfere with service availability, or submit harmful content through the contact mailbox. The maintainer may block abusive clients and discard abusive messages without notice.",
        links: [SUPPORT_LINK],
      },
      {
        id: "terms-changes",
        type: "prose",
        heading: "Changes to these terms",
        body:
          "These terms may be updated alongside the launch content and re-reviewed on each substantive content pass. The last-reviewed date on this page reflects the most recent substantive review as of 2026-08-28.",
        links: [SITE_OFFICIAL],
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
];