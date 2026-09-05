import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  description?: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release", labels: { "en-US": "Release" }, description: { "en-US": "Worldwide launch date, supported languages, Game Pass day one." } },
  { href: "/system-requirements", labels: { "en-US": "PC Specs" }, description: { "en-US": "Minimum and recommended PC specs plus Steam Deck status." } },
  { href: "/platforms", labels: { "en-US": "Platforms" }, description: { "en-US": "PS5, PS5 Pro, Xbox Series X|S, Steam and cross-progression status." } },
  { href: "/editions", labels: { "en-US": "Editions" }, description: { "en-US": "Standard, Collector's edition and Heritage Pack DLC contents." } },
  { href: "/gameplay", labels: { "en-US": "Gameplay" }, description: { "en-US": "Dual timelines, dynamic melee, Light Weaving, Macula exposure." } },
  { href: "/characters", labels: { "en-US": "Characters" }, description: { "en-US": "Sophia, Caesar, Lucas, King Minos, Asterion, The Presence, Macula legacy creatures." } },
  { href: "/walkthrough", labels: { "en-US": "Walkthrough" }, description: { "en-US": "Medieval and Minotaur's Island chapter sequencing." } },
  { href: "/collectibles", labels: { "en-US": "Collectibles" }, description: { "en-US": "37 Relics, 8 Blades, 30 Charms, 5 Theseus Echoes by chapter." } },
  { href: "/trophy-achievements", labels: { "en-US": "Trophies" }, description: { "en-US": "37-trophy PS5 / 36-achievement Xbox-PC roadmap and missable flags." } },
  { href: "/tips", labels: { "en-US": "Tips" }, description: { "en-US": "Beginner tips and Minoan sphere unlock priority." } },
  { href: "/reviews", labels: { "en-US": "Reviews" }, description: { "en-US": "Launch reviews, per-outlet numeric scores and aggregator stance." } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}

export function navigationDescription(
  item: LocalizedNavigationItem,
  locale: string,
): string | undefined {
  if (!item.description) return undefined;
  return (
    item.description[locale] ||
    item.description[site.primaryLocale] ||
    Object.values(item.description)[0]
  );
}