import type { ThemeConfig } from "@/types/theme";

// Resonance: A Plague Tale Legacy — V3 dark medieval-plague theme.
// Implemented strictly from /site-launch/tasks/resonanceaplaguetalelegacy-pro/design/theme-spec.md.
// Single shared theme for every launch locale (en-US); no per-locale token set,
// shell variant, or visual direction exists. Identity is conveyed through
// ink-dark surfaces, warm bronze-gold Minoan accents, oxblood Macula threat,
// and a low-density labyrinth line motif — never through the official logo.

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0E1015",
    surface1: "#161A22",
    surface2: "#1F2330",
    surface3: "#2A2F3F",
    surfaceInverse: "#E8DDC4",
    textPrimary: "#EFE6D2",
    textMuted: "#9C97A8",
    textInverse: "#0E1015",
    textOnAccentPrimary: "#0E1015",
    textLink: "#D89F4D",
    focusRing: "#F2C77E",
    line: "#2F3447",
    lineStrong: "#4D5167",
    accentPrimary: "#C89C5C",
    accentSecondary: "#7A3A3A",
    accentBright: "#E2B25C",
    statusConfirmed: "#6FB37C",
    statusCaution: "#C98A3C",
    statusUnknown: "#9C97A8",
  },
  typography: {
    headingFamily: "Cinzel, 'EB Garamond', 'Trajan Pro', Georgia, serif",
    bodyFamily: "Inter, 'Helvetica Neue', Arial, system-ui, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "4px",
    borderWidth: "1px",
    shadow: "0 1px 2px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.35)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.4, position: "center top" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;

// Single shared font fallback for the only declared launch locale (en-US).
// The fallback duplicates the shared stacks so the locale contract satisfies
// the theme-spec validation rule without inventing a per-locale direction.
export const localeFontFallbacks = [
  {
    locale: "en-US",
    heading: "Cinzel, 'EB Garamond', 'Trajan Pro', Georgia, serif",
    body: "Inter, 'Helvetica Neue', Arial, system-ui, sans-serif",
  },
];