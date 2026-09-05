import type { FAQItem } from "@/types/content";

// FAQ entries for Resonance: A Plague Tale Legacy
// Drawn from the FAQ sections of every content-package page. Each FAQ must
// list every page id that references it so the validate-content script can
// verify the back-reference.

export const faqItems: FAQItem[] = [
  // --- Homepage ----------------------------------------------------------
  {
    id: "home-when-release",
    question: "When did Resonance: A Plague Tale Legacy launch?",
    answer:
      "Resonance: A Plague Tale Legacy launched worldwide on August 27, 2026, across PC (Steam), PlayStation 5, PS5 Pro, Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-game-pass",
    question: "Is Resonance: A Plague Tale Legacy on Xbox Game Pass?",
    answer:
      "Yes. The game is day-one on Xbox Game Pass and PC Game Pass. The exact Game Pass tier confirmation is published on the Xbox Store and Microsoft Store listing.",
    pageIds: ["home"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-pc-specs",
    question: "What PC specs does Resonance: A Plague Tale Legacy need?",
    answer:
      "The PC system requirements are published verbatim on the Steam store page (AppID 2713000), with Steam Deck performance labelled as dated status. See the /system-requirements/ page for the full table.",
    pageIds: ["home"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-protagonist",
    question: "Who is the new protagonist?",
    answer:
      "Sophia is the new protagonist of Resonance: A Plague Tale Legacy. Her age, voice actress and Macula lineage appear in the launch press and the /characters/ page.",
    pageIds: ["home"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-cross-progression",
    question: "Does Resonance: A Plague Tale Legacy support cross-progression?",
    answer:
      "Cross-progression between PS5, Xbox and Steam is not announced as of 2026-08-28. Check the /platforms/ page for the latest dated status.",
    pageIds: ["home"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-heritage-pack",
    question: "What is in the Heritage Pack DLC?",
    answer:
      "The Heritage Pack DLC includes the Minoan Sword, Alec's Pendant, and a digital art book. It is a separate pre-order DLC; full contents are listed on the /heritage-pack/ page.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- release-overview --------------------------------------------------
  {
    id: "fixed-release-overview-when-release",
    question: "When does Resonance: A Plague Tale Legacy release?",
    answer:
      "Resonance: A Plague Tale Legacy released worldwide on August 27, 2026, on PC (Steam), PlayStation 5, PS5 Pro, Xbox Series X|S, and Xbox Game Pass / PC Game Pass day one.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-release-overview-is-out",
    question: "Is Resonance: A Plague Tale Legacy out now?",
    answer:
      "Yes. As of 2026-08-28 the game is available worldwide on Steam, PlayStation Store, Xbox Store, and Xbox Game Pass / PC Game Pass.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-release-overview-game-pass-day-one",
    question: "Is Resonance: A Plague Tale Legacy on Game Pass day one?",
    answer:
      "Yes. The game is day-one on Xbox Game Pass and PC Game Pass. Tier confirmation is published on the Xbox Store / Microsoft Store listing.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-release-overview-regional-locks",
    question: "Are there regional release locks?",
    answer:
      "No regional release locks were surfaced as of 2026-08-28. Launch is simultaneous worldwide across PC, console, and Game Pass.",
    pageIds: ["fixed-release-overview-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- system-requirements ----------------------------------------------
  {
    id: "fixed-system-requirements-min",
    question: "What are the minimum PC requirements for Resonance: A Plague Tale Legacy?",
    answer:
      "The minimum tier is published verbatim on the Steam store page for AppID 2713000. It lists the supported operating systems, CPU, GPU, RAM and storage floor for entry-level PC play.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-system-requirements-ultra",
    question: "Does Resonance: A Plague Tale Legacy have an Ultra tier?",
    answer:
      "Yes. The Steam product page lists a separate Ultra tier with stronger GPU and VRAM requirements, intended for higher-fidelity 1440p and 4K play.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-system-requirements-steam-deck",
    question: "Is Resonance: A Plague Tale Legacy verified on Steam Deck?",
    answer:
      "Steam Deck verified performance is dated status as of 2026-08-28. Valve has not yet labelled Resonance: A Plague Tale Legacy on the Deck Verified list; portable play is unconfirmed.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-system-requirements-controllers",
    question: "Does Resonance: A Plague Tale Legacy support controllers on PC?",
    answer:
      "Yes. The Steam product page lists controller support, including DualSense on compatible hardware.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- platforms-console -------------------------------------------------
  {
    id: "fixed-platforms-console-on-ps5",
    question: "Is Resonance: A Plague Tale Legacy on PS5?",
    answer:
      "Yes. The game ships on PlayStation 5, with the PS5 Pro SKU published in the same PlayStation Store product entry.",
    pageIds: ["fixed-platforms-console-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-platforms-console-on-xbox",
    question: "Is Resonance: A Plague Tale Legacy on Xbox?",
    answer:
      "Yes. The game ships on Xbox Series X|S, with Xbox Game Pass and PC Game Pass day-one confirmation published on the Xbox Store / Microsoft Store listing.",
    pageIds: ["fixed-platforms-console-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-platforms-console-cross-progression",
    question: "Does Resonance: A Plague Tale Legacy support cross-progression?",
    answer:
      "Cross-progression between PS5, Xbox and Steam is not announced as of 2026-08-28. Check the official store pages for the latest dated status.",
    pageIds: ["fixed-platforms-console-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-platforms-console-ps5-pro",
    question: "What is the PS5 Pro enhanced mode?",
    answer:
      "PS5 Pro specific enhancements (resolution target, frame-rate target) are not announced as of 2026-08-28. Treat the PS5 Pro specifics as dated status until Asobo Studio or Sony publishes the patch notes.",
    pageIds: ["fixed-platforms-console-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- editions-pricing -------------------------------------------------
  {
    id: "fixed-editions-pricing-what-editions",
    question: "What editions does Resonance: A Plague Tale Legacy have?",
    answer:
      "The game ships in a Standard edition and a Collector's edition tier, with contents published on the official PlayStation Store product page and Steam store page (AppID 2713000).",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-editions-pricing-collectors",
    question: "Is there a Collector's edition?",
    answer:
      "Yes. The Collector's edition is published on the PlayStation Store product page with both physical and digital extras; contents are listed verbatim there.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-editions-pricing-heritage-pack",
    question: "What is in the Heritage Pack DLC?",
    answer:
      "The Heritage Pack DLC includes the Minoan Sword, Alec's Pendant, and a digital art book. It is sold separately from the Collector's edition.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-editions-pricing-pre-order",
    question: "Can I pre-order the Collector's edition?",
    answer:
      "Pre-order windows for the Collector's edition closed at launch on August 27, 2026, on Steam, PlayStation Store, and Xbox Store. Availability beyond launch is dated status.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- xbox-game-pass ---------------------------------------------------
  {
    id: "fixed-xbox-game-pass-on-launch",
    question: "Is Resonance: A Plague Tale Legacy on Xbox Game Pass at launch?",
    answer:
      "Yes. The Xbox Store and Microsoft Store listing for Resonance: A Plague Tale Legacy is published with day-one Game Pass inclusion on August 27, 2026, confirmed by the Focus Entertainment press release. Active subscribers on supported tiers can download the full standard edition on launch day.",
    pageIds: ["fixed-xbox-game-pass-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-xbox-game-pass-tier",
    question: "Do I need Xbox Game Pass Ultimate or just PC Game Pass?",
    answer:
      "Console players on Xbox Series X|S need an Xbox Game Pass membership that includes day-one new releases, and PC players need PC Game Pass for the Windows version. The exact tier split on launch day is not separately broken out as of 2026-08-28, so check the Microsoft Store product page for your region before subscribing.",
    pageIds: ["fixed-xbox-game-pass-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-xbox-game-pass-cloud",
    question: "Can I stream Resonance: A Plague Tale Legacy through Xbox Cloud Gaming?",
    answer:
      "Cloud streaming is listed in the Microsoft Store metadata but a specific cloud rollout date or frame target is not announced as of 2026-08-28. The standard xCloud entitlement applies once the title is enabled for cloud play.",
    pageIds: ["fixed-xbox-game-pass-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-xbox-game-pass-heritage",
    question: "Does the Heritage Pack DLC come with the Game Pass version?",
    answer:
      "The Heritage Pack is a pre-order DLC for paid editions on Steam, PlayStation and Xbox retail. It is not advertised as included with the Game Pass entitlement and should be treated as a separate purchase for subscribers as of 2026-08-28.",
    pageIds: ["fixed-xbox-game-pass-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- review-roundup ----------------------------------------------------
  {
    id: "fixed-review-roundup-embargo",
    question: "Is the Resonance: A Plague Tale Legacy review embargo still active?",
    answer:
      "No. Launch reviews from IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun all lifted on or before 2026-08-27. The Rock Paper Shotgun review carries a 2026-08-26 publication date, with the other four outlets following at launch. Scores and full quotes should be checked against each outlet directly because aggregator numbers refresh after launch day.",
    pageIds: ["fixed-review-roundup-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-review-roundup-rps-score",
    question: "What score did Rock Paper Shotgun give Resonance: A Plague Tale Legacy?",
    answer:
      "Rock Paper Shotgun's 2026-08-26 launch review describes the game as a \"competent action game spinoff.\" RPS does not use a numeric review scale, so the takeaway is the qualitative verdict in the body of the piece rather than a number. Treat any aggregator number attributed to RPS as a paraphrase until the source quote is verified.",
    pageIds: ["fixed-review-roundup-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-review-roundup-mino-branch",
    question: "Did the Resonance: A Plague Tale Legacy launch reviews mention the Minoan branch?",
    answer:
      "Yes. IGN, Eurogamer, Insider Gaming, Destructoid and Rock Paper Shotgun all discuss the dual-timeline structure between Sophia's medieval chapters and the ancient Minoan branch in their launch coverage. The Minoan sphere, Daedalus-themed Light Weaving puzzles and Minotaur's Island trials are covered as the headline mechanical additions.",
    pageIds: ["fixed-review-roundup-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-review-roundup-positive",
    question: "Are the launch reviews positive overall?",
    answer:
      "Yes. All five launch outlets treat Resonance: A Plague Tale Legacy as a competent Asobo Studio / Focus Entertainment spinoff that successfully transplants the Plague Tale formula onto a new protagonist and a new timeline. Criticisms cluster around pacing inside Minoan island trials rather than the combat or puzzle design pillars.",
    pageIds: ["fixed-review-roundup-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-review-roundup-latest-score",
    question: "Where can I find the latest critic score for Resonance: A Plague Tale Legacy?",
    answer:
      "The latest aggregator view is on the Metacritic page for Resonance: A Plague Tale Legacy, which collates critic and user scores by platform. The aggregator number refreshes after launch day, so check the page directly for the most current tally.",
    pageIds: ["fixed-review-roundup-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-review-roundup-ign-score",
    question: "What score did IGN give Resonance: A Plague Tale Legacy?",
    answer:
      "IGN's launch review by Travis Northup gives Resonance: A Plague Tale Legacy a 6/10. The IGN verdict sits at the low end of the launch cluster and frames the action-adventure reframing as a step away from the franchise's stealth roots, even as the dynamic melee loop and the Minoan sphere Light Weaving puzzles are credited.",
    pageIds: ["fixed-review-roundup-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-review-roundup-high-cluster",
    question: "Which launch outlets gave Resonance: A Plague Tale Legacy the highest scores?",
    answer:
      "The launch high-end cluster is PlayStation Universe 95/100, TheSixthAxis 9/10 (90/100), Pure Xbox 9/10 (90/100), and Game Informer 8.5/10 (85/100). The cluster treats the game as a confident action-adventure spinoff on combat readability and puzzle design terms.",
    pageIds: ["fixed-review-roundup-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-review-roundup-mixed-cluster",
    question: "Which launch outlets gave Resonance: A Plague Tale Legacy the lowest scores?",
    answer:
      "The launch mixed cluster is IGN 6/10 (Travis Northup), Eurogamer 60/100, and Game Rant 7/10. The mixed-cluster outlets share the framing that the action-adventure reframing is a step away from the slower stealth cadence of A Plague Tale: Innocence and A Plague Tale: Requiem.",
    pageIds: ["fixed-review-roundup-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- metacritic-score -------------------------------------------------
  {
    id: "fixed-metacritic-score-current",
    question: "What is the Resonance: A Plague Tale Legacy Metacritic score right now?",
    answer:
      "A stable Metacritic critic or user score for Resonance: A Plague Tale Legacy has not been published as of 2026-08-28 because the title launched on August 27, 2026 and the aggregator tab is still settling. The Metacritic product page exists and is being populated; recheck the page after the first week of release for a stable number.",
    pageIds: ["fixed-metacritic-score-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-metacritic-score-platform",
    question: "Does Metacritic track Resonance: A Plague Tale Legacy by platform?",
    answer:
      "Yes. The Metacritic product page separates critic and user scores by platform tabs for PC (Windows), PlayStation 5 and Xbox Series X|S. The per-platform tabs were thin at launch and will populate further as more critic reviews are submitted and as more user ratings are logged.",
    pageIds: ["fixed-metacritic-score-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-metacritic-score-stabilize",
    question: "How long does Metacritic take to stabilize a launch score?",
    answer:
      "Metacritic critic scores typically stabilize within the first week of release once the major outlet submissions are indexed. User scores require a minimum number of verified user ratings before the aggregator publishes a stable score, so the user tab usually takes longer to settle than the critic tab.",
    pageIds: ["fixed-metacritic-score-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-metacritic-score-rps",
    question: "Is the Rock Paper Shotgun review counted in the Metacritic score?",
    answer:
      "Rock Paper Shotgun does not use a numeric review scale, so any aggregator number attributed to RPS should be treated as a paraphrase rather than a numeric entry. The qualitative verdict is attributed to the outlet directly in the review roundup.",
    pageIds: ["fixed-metacritic-score-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-metacritic-score-pc",
    question: "What is the PC Metacritic score for Resonance: A Plague Tale Legacy?",
    answer:
      "The PC Metacritic critic score sits at 85 from approximately 36 critic reviews as of 2026-09-03. PC carries the high-end cluster (PlayStation Universe 95, TheSixthAxis 9/10, Pure Xbox 9/10, Game Informer 8.5/10) alongside the mixed cluster (IGN 6/10, Eurogamer 60, Game Rant 7/10).",
    pageIds: ["fixed-metacritic-score-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-metacritic-score-opencritic",
    question: "What is the OpenCritic stance on Resonance: A Plague Tale Legacy?",
    answer:
      "The OpenCritic chart for Resonance: A Plague Tale Legacy tracks a recommended-majority aggregate stance with a not-recommended minority tied to the IGN 6/10, Eurogamer 60 and Game Rant 7/10 cluster. OpenCritic does not weight per-outlet scores; treat the chart as a distribution rather than a weighted average.",
    pageIds: ["fixed-metacritic-score-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- how-long-to-beat -------------------------------------------------
  {
    id: "fixed-how-long-to-beat-main",
    question: "How long is the Resonance: A Plague Tale Legacy main story?",
    answer:
      "A stable Main Story hours figure for Resonance: A Plague Tale Legacy is not announced as of 2026-08-28. The HowLongToBeat product page is being populated with user runs from the launch window and should stabilize within the first week of release.",
    pageIds: ["fixed-how-long-to-beat-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-how-long-to-beat-side",
    question: "How long does Resonance: A Plague Tale Legacy take with side content?",
    answer:
      "A stable Main + Extras hours figure is not announced as of 2026-08-28. The number will surface on HowLongToBeat once enough players have logged optional-content runs across both the medieval and Minoan branches.",
    pageIds: ["fixed-how-long-to-beat-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-how-long-to-beat-completionist",
    question: "How long does a 100% Resonance: A Plague Tale Legacy run take?",
    answer:
      "A Completionist hours figure is not announced as of 2026-08-28. The Completionist number depends on the trophy and achievement list being final and on user runs being submitted for every optional activity. Recheck HowLongToBeat after the first two weeks of release for a stable Completionist tally.",
    pageIds: ["fixed-how-long-to-beat-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-how-long-to-beat-mino-branch",
    question: "Does the Minoan branch change the playtime estimate?",
    answer:
      "Yes. The Minoan branch adds the Minoan sphere puzzle sequence and the Minotaur's Island trial arc, which meaningfully extends both the Main Story and the Completionist timings. The exact hour split between the medieval and Minoan branches is not announced as of 2026-08-28 and will become visible once the HowLongToBeat product page settles.",
    pageIds: ["fixed-how-long-to-beat-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-how-long-to-beat-cite",
    question: "Should I cite the HowLongToBeat page or the launch press?",
    answer:
      "Cite the HowLongToBeat product page once it stabilizes. Launch-day press coverage discusses campaign pacing qualitatively but does not publish numeric hours figures, so it is not a reliable source for a specific Main, Side or Completionist number. For trophy-related timing, pair the HowLongToBeat figures with the trophy and achievement list once both are stable.",
    pageIds: ["fixed-how-long-to-beat-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- trophy-achievements ----------------------------------------------
  {
    id: "fixed-trophy-achievements-platinum",
    question: "Does Resonance: A Plague Tale Legacy have a Platinum trophy?",
    answer:
      "Yes. The PlayStation Store product page for the PS5 SKU lists a Platinum trophy category alongside the standard Bronze, Silver and Gold tiers. The Platinum trophy unlocks at 100% trophy completion and is the final unlock on the PlayStation ladder.",
    pageIds: ["fixed-trophy-achievements-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-trophy-achievements-how-many",
    question: "How many trophies does Resonance: A Plague Tale Legacy have?",
    answer:
      "The exact per-tier trophy count is not announced as of 2026-08-28. The PlayStation Store product page lists the trophy ladder categories and the PSNProfiles mirror page is being populated. The trophy count should stabilize within the first two weeks of release.",
    pageIds: ["fixed-trophy-achievements-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-trophy-achievements-missable",
    question: "Are any Resonance: A Plague Tale Legacy trophies missable?",
    answer:
      "The specific missable trophy list is not announced as of 2026-08-28. Apply missable flags only after the official trophy database confirms that a trophy can be missed by skipping an optional step. Do not assume a trophy is missable based on the trophy name or description alone.",
    pageIds: ["fixed-trophy-achievements-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-trophy-achievements-xbox-steam",
    question: "Do Xbox and Steam achievements match the PlayStation trophies?",
    answer:
      "The PlayStation 5, Xbox Series X|S and Steam achievement lists are expected to be near-parity, with the PlayStation version adding the Platinum tier and the Xbox version adding the Gamerscore total. Any per-platform delta in the trophy count is not announced as of 2026-08-28 and should be confirmed once the official trophy databases stabilize.",
    pageIds: ["fixed-trophy-achievements-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-trophy-achievements-official-list",
    question: "Where can I find the official Resonance: A Plague Tale Legacy trophy list?",
    answer:
      "The official PlayStation Store product page for the PS5 SKU lists the trophy ladder categories, and the Xbox Achievements and PSNProfiles mirror pages are being populated with launch submissions. The Steam achievement list surfaces through the Steam client once the title is installed. Treat any specific trophy name quoted outside these official sources as unverified until the database stabilizes.",
    pageIds: ["fixed-trophy-achievements-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-trophy-achievements-like-a-warrior",
    question: "Why is 'Like a Warrior' the only confirmed missable Resonance: A Plague Tale Legacy trophy?",
    answer:
      "'Like a Warrior' unlocks when Sophia collects 165 Resonance Points within a single save file, and Resonance Points do not transfer via Chapter Select. A player who skips Resonance Point pickups in an early chapter and tries to top up later via Chapter Select will not see the cumulative total carry over, which soft-locks the trophy. Clear the campaign once on Story while sweeping every visible Resonance Point pickup, or start a second playthrough from a fresh save and pick up every Resonance Point in chapter order.",
    pageIds: ["fixed-trophy-achievements-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-trophy-achievements-theatre-enthusiast",
    question: "How do I unlock the 'Theatre Enthusiast' Resonance: A Plague Tale Legacy trophy?",
    answer:
      "'Theatre Enthusiast' is a Silver exploration trophy that unlocks after watching the full Chapter 2 puppet show carnival sequence without skipping the optional cutscene. Skipping the puppet show during the chapter blocks the trophy, and Chapter Select cannot revisit the encounter to re-trigger it, which makes it the most common missable-adjacent trap on the list alongside 'Sea You Later'.",
    pageIds: ["fixed-trophy-achievements-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- gameplay-explained ------------------------------------------------
  {
    id: "fixed-gameplay-explained-stealth-combat",
    question: "Does Resonance A Plague Tale Legacy gameplay include both stealth and full combat?",
    answer:
      "Yes. The launch design pairs stealth in Sophia's medieval scenes with the dynamic melee loop and the boss encounters of the Minoan branch. Players can avoid most encounters in the medieval scenes, but the Minoan branch expects combat and puzzle engagement.",
    pageIds: ["fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-gameplay-explained-mino-length",
    question: "How long are the Minoan branch segments?",
    answer:
      "Launch press does not state a per-chapter length as of 2026-08-28. The general pacing reads shorter than the medieval scenes, with most Minoan chapters gating on a single Light Weaving puzzle or Macula's legacy boss.",
    pageIds: ["fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-gameplay-explained-skip-puzzles",
    question: "Can I skip Minoan sphere puzzles?",
    answer:
      "No confirmed skip option exists in launch-day press as of 2026-08-28. Some puzzles gate Minoan sphere upgrades that the next chapter expects, so skipping them is not part of the official flow.",
    pageIds: ["fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-gameplay-explained-boss-difficulty",
    question: "Does the Macula's legacy boss roster change with difficulty?",
    answer:
      "The roster is the same on every difficulty. Story mode reduces incoming damage and widens the parry and kick window, while Veteran tightens these timings and speeds up Macula exposure decay.",
    pageIds: ["fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-gameplay-explained-controller",
    question: "Is there a controller-only setup?",
    answer:
      "Launch coverage notes full controller remapping, subtitle sizing, and toggle options for the parry and kick window. A keyboard-and-mouse setup is supported on PC, but the title is primarily designed around a controller feel.",
    pageIds: ["fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-gameplay-explained-difficulty-modes",
    question: "How many difficulty modes does Resonance A Plague Tale Legacy have?",
    answer:
      "The published difficulty set is the five-level Narrative / Easy / Normal / Hard / Nightmare ladder. The older Story / Veteran / Curator framing is a launch-window paraphrase and has been replaced with the published set. Nightmare is the unlock-able mode that gates the combat Silver trophy 'Untouchable'.",
    pageIds: ["fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-gameplay-explained-upgrade-tree",
    question: "What is the Minoan sphere upgrade tree?",
    answer:
      "The Minoan sphere upgrade tree has three named abilities: Beam Refraction (Chapter 2, redirect a beam through two reflective panels), Lens Pulse (Chapter 6, short stun pulse that unlocks the chain sword stagger window on Brutes), and Echo Seal (Chapter 10, seal The Presence out of the active arena for the chapter).",
    pageIds: ["fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-gameplay-explained-creature-types",
    question: "What creature types appear in Resonance A Plague Tale Legacy?",
    answer:
      "The Macula legacy creature roster has six named types: Worm (floor-crawl swarm), Brutes (heavy armored), Puppets / Corrupted (humanoid Macula-infected), Petrified (static boss-adjacent statues), King Minos (Chapter 12 boss and human sovereign), and Asterion (Chapter 13 boss and Prima Macula carrier child).",
    pageIds: ["fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- characters-overview ----------------------------------------------
  {
    id: "fixed-characters-overview-protagonist",
    question: "Who is the new protagonist in Resonance A Plague Tale Legacy characters list?",
    answer:
      "Sophia is the new protagonist. She is cited as the head of the cast in launch press and the Steam product description as of 2026-08-28.",
    pageIds: ["fixed-characters-overview-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-characters-overview-age",
    question: "How old is Sophia in the game?",
    answer:
      "Launch press places Sophia in late adolescence / young adult range. Exact year values are not surfaced in launch coverage as of 2026-08-28 and are treated as a dated reference.",
    pageIds: ["fixed-characters-overview-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-characters-overview-voice",
    question: "Who voices Sophia?",
    answer:
      "The voice actress is named in the official launch trailer cast list and corroborated across IGN and Eurogamer launch reviews as of 2026-08-28. Detailed biographical copy is not surfaced.",
    pageIds: ["fixed-characters-overview-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-characters-overview-amicia",
    question: "Are Amicia and Hugo in the Resonance A Plague Tale Legacy characters cast?",
    answer:
      "They are referenced as previous protagonists but are not present as playable characters in the launch cast list as of 2026-08-28. They remain legacy predecessor characters cited only inside the versus Plague Tale series reference.",
    pageIds: ["fixed-characters-overview-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-characters-overview-mino-count",
    question: "How many new Minoan branch characters are in the cast?",
    answer:
      "Launch press does not publish a fixed new character count as of 2026-08-28. The launch trailer cast list shows a fresh ensemble distinct from the de Rune-era allies.",
    pageIds: ["fixed-characters-overview-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-characters-overview-difficulty",
    question: "Does the cast change with difficulty?",
    answer:
      "The Resonance A Plague Tale Legacy characters roster is fixed. Difficulty settings adjust parry and kick timing, Macula exposure decay, and puzzle tempo, not the cast.",
    pageIds: ["fixed-characters-overview-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-characters-overview-companions",
    question: "Who are Sophia's medieval companions in Resonance A Plague Tale Legacy?",
    answer:
      "Sophia's named medieval companions are Caesar (overwatch specialist with crossbow distraction) and Lucas (healing line with stim-shot). Both travel with Sophia through the medieval chapters and join the post-puzzle arena flow inside the Minoan branch; their voice cast credits are in the launch trailer cast list.",
    pageIds: ["fixed-characters-overview-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-characters-overview-asterion",
    question: "Who is Asterion in Resonance A Plague Tale Legacy?",
    answer:
      "Asterion is the Chapter 13 boss and the Prima Macula carrier child whose fear shaped Daedalus' labyrinth. His three-phase fight uses grapnels for arena evasion in Phase 1, lens rotation through the Minotaur head for Phase 2, and a three-sigil circular pedestal alignment for Phase 3.",
    pageIds: ["fixed-characters-overview-en-us", "fixed-minotaur-mythos-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-characters-overview-creatures",
    question: "What are the six Macula legacy creature types in Resonance A Plague Tale Legacy?",
    answer:
      "The Macula legacy creature roster has six named types: Worm (floor-crawl swarm), Brutes (heavy armored), Puppets / Corrupted (humanoid Macula-infected), Petrified (static boss-adjacent statues), King Minos (Chapter 12 boss and human sovereign), and Asterion (Chapter 13 boss and Prima Macula carrier child).",
    pageIds: ["fixed-characters-overview-en-us", "fixed-gameplay-explained-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- minotaur-mythos ---------------------------------------------------
  {
    id: "fixed-minotaur-mythos-standalone",
    question: "Is the Resonance A Plague Tale Legacy Minotaur mythos a standalone story?",
    answer:
      "No. The mythos is a parallel timeline that runs alongside the medieval Sophia chapters. It amplifies the Plague Tale Macula lore and Daedalus' labyrinth setting rather than replacing either.",
    pageIds: ["fixed-minotaur-mythos-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-minotaur-mythos-greek",
    question: "Do I need to know Greek myths to follow the Minoan branch?",
    answer:
      "Launch coverage does not require Greek myth familiarity as of 2026-08-28. The Minoan branch supplies enough in-game context that new players can follow the Minotaur mythos beats without prior reading.",
    pageIds: ["fixed-minotaur-mythos-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-minotaur-mythos-puzzle-hard",
    question: "Are the Minoan sphere puzzles hard?",
    answer:
      "Launch press describes the puzzles as mid-complexity and readable. The hardest moments are mid-chapter chain pulls, where two or three Minoan sphere inputs must be timed in sequence.",
    pageIds: ["fixed-minotaur-mythos-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-minotaur-mythos-medieval",
    question: "Does the Macula's legacy appear in the medieval scenes too?",
    answer:
      "Yes. Macula's legacy is referenced in the medieval scenes through dialogue beats, mentor figures, and exposure cutaways. The Minoan branch carries the headline confrontations, but the medieval chapters keep the lineage active.",
    pageIds: ["fixed-minotaur-mythos-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-minotaur-mythos-collectibles",
    question: "Are there collectibles tied to the Minotaur mythos?",
    answer:
      "Yes. The Minotaur mythos anchors five Theseus Echoes (Silver In the Name of My Kin) and per-chapter Relic / Blade / Charm pickups that gate the four Gold collectible trophies. The full per-chapter breakdown lives on the /collectibles/ hub.",
    pageIds: ["fixed-minotaur-mythos-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-minotaur-mythos-asterion",
    question: "Who is Asterion in the Minotaur mythos?",
    answer:
      "Asterion is the Prima Macula carrier child whose fear shaped Daedalus' labyrinth, and the Chapter 13 boss. His three-phase fight uses arena evasion with grapnels, lens rotation through the Minotaur head, and a three-sigil circular pedestal alignment.",
    pageIds: ["fixed-minotaur-mythos-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-minotaur-mythos-king-minos",
    question: "Who is King Minos in the Minotaur mythos?",
    answer:
      "King Minos is the Chapter 12 boss and the human sovereign whose fear of the Prima Macula drove the labyrinth's construction. He uses a three-phase Cleave / Sweep / Thrust pattern, with the stagger window tied to the Lens Pulse upgrade from the Minoan sphere upgrade tree.",
    pageIds: ["fixed-minotaur-mythos-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-minotaur-mythos-presence",
    question: "What is The Presence in the Minotaur mythos?",
    answer:
      "The Presence is the unkillable supernatural entity that watches the Minoan branch from the outer ring of Daedalus' labyrinth. It cannot be staggered, parried, or damaged; the only mechanic is the Echo Seal upgrade from the Minoan sphere upgrade tree, which seals The Presence out of the active arena for the duration of the chapter.",
    pageIds: ["fixed-minotaur-mythos-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- heritage-pack-dlc ------------------------------------------------
  {
    id: "fixed-heritage-pack-dlc-standard",
    question: "Do I get the Heritage Pack if I buy Standard at launch?",
    answer:
      "Heritage Pack eligibility depends on pre-order timing and edition tier. Standard edition purchased at general availability does not include the Heritage Pack; Standard pre-orders do, while Standalone DLC may be sold separately where each storefront permits.",
    pageIds: ["fixed-heritage-pack-dlc-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-heritage-pack-dlc-mino-sword",
    question: "Does the Minoan Sword change combat behaviour?",
    answer:
      "Yes. The Minoan Sword's third hit in a combo stuns enemies, which makes it a gameplay-affecting item compared with the default dagger. Stun timing and damage values follow the official Steam Heritage Pack DLC page as of 2026-08-28.",
    pageIds: ["fixed-heritage-pack-dlc-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-heritage-pack-dlc-alec",
    question: "Does Alec's Pendant boost charm stats?",
    answer:
      "Yes. Alec's Pendant boosts the stats of all your charms when equipped, so it is a gameplay-affecting accessory rather than a cosmetic-only item. The exact stat multipliers follow the official Steam Heritage Pack DLC page as of 2026-08-28.",
    pageIds: ["fixed-heritage-pack-dlc-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-heritage-pack-dlc-refund",
    question: "Can I refund the Heritage Pack after claiming it?",
    answer:
      "Refund terms follow each storefront's policy. Players seeking refunds should consult Steam, PlayStation Store, or Xbox Store's standard return rules; the Heritage Pack itself does not introduce a separate refund path.",
    pageIds: ["fixed-heritage-pack-dlc-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- walkthrough -------------------------------------------------------
  {
    id: "fixed-walkthrough-how-long",
    question: "How long is the Resonance A Plague Tale Legacy walkthrough?",
    answer:
      "The campaign length is not exhaustively stated in launch press as of 2026-08-28. Per HowLongToBeat-style coverage referenced by launch reviews, the main story sits in the standard Asobo campaign range, with side content extending the run.",
    pageIds: ["fixed-walkthrough-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-walkthrough-chapter-order",
    question: "Should I play the chapters in order?",
    answer:
      "Yes. The Resonance A Plague Tale Legacy walkthrough assumes the chapter order, because the dual-timeline structure relies on alternating scenes. Skipping ahead to the Minoan branch breaks the narrative beats.",
    pageIds: ["fixed-walkthrough-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-walkthrough-mino-mandatory",
    question: "Are the Minoan sphere puzzles mandatory?",
    answer:
      "Launch press treats the Minoan sphere puzzles as mandatory as of 2026-08-28. Some puzzles gate chapter progression through sphere upgrades, which the next chapter expects.",
    pageIds: ["fixed-walkthrough-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-walkthrough-trophies-across-runs",
    question: "Do trophies carry across runs?",
    answer:
      "Launch press does not exhaustively detail cross-run trophy behaviour as of 2026-08-28. The trophy and achievements reference is the canonical source for trophy carry rules.",
    pageIds: ["fixed-walkthrough-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-walkthrough-difficulty-mid-run",
    question: "Can I change difficulty mid-run?",
    answer:
      "Yes. The walkthrough confirms difficulty can be changed from the menu, which lets players step down for tough Macula's legacy boss encounters or step up for puzzle timing practice.",
    pageIds: ["fixed-walkthrough-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-walkthrough-ch4-minotaur-room",
    question: "How do I solve the Chapter 4 Minotaur Room symbols puzzle?",
    answer:
      "In Chapter 4 'From Hell It Rose', Sophia enters the Minotaur Room and walks the arena perimeter to auto-fill her journal with the symbol layout. Step 1 aims the left reflector at the T symbol and the right reflector at the bell. Step 2 finds the worn blank tablet between the reverse-3 and cone symbols and aims the left reflector at the triangle and the right reflector at the blank. Step 3 first uses Light Reveal on each ring on the raised Minotaur statue hands to reveal the hidden third symbol pair (an upside-down Y on the left and a W on the right), then pulls the right reflector toward the middle, aims the middle reflector at the W, and aims the left reflector at the upside-down Y to complete the third pair.",
    pageIds: ["fixed-walkthrough-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-walkthrough-ch4-light-reveal",
    question: "Why do I need to scan the Minotaur statue hands with Light Reveal in Chapter 4?",
    answer:
      "The Light Reveal scan on each ring of the raised Minotaur statue hands is what reveals the hidden third symbol pair on the arena wall: an upside-down Y on the left side and a W symbol on the right side. Skipping the ring scan leaves the third pair invisible, so the center reflector in Step 3 looks like it is bouncing into empty panels and the puzzle soft-locks. Launch-week walkthroughs flag skipping the ring scan as the most common cause of a soft-locked Chapter 4 puzzle.",
    pageIds: ["fixed-walkthrough-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-walkthrough-ch4-ambush",
    question: "What happens after the Chapter 4 Minotaur Room sphere insertion?",
    answer:
      "After Sophia inserts the Minoan Sphere, the post-puzzle cutscene unlocks the 'From Hell It Rose' chapter trophy and a single Resonance Point reward. A soldier ambush then triggers in the corridor leading out of the arena; the ambush is led by an armored brute supported by two or three regular soldiers. Perfect-parrying the brute's opening overhead swing unlocks Sophia's stagger-window combat ability against armored enemies, which she carries into the rest of the chapter.",
    pageIds: ["fixed-walkthrough-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- beginner-tips -----------------------------------------------------
  {
    id: "fixed-beginner-tips-first-do",
    question: "What should I do first in Resonance A Plague Tale Legacy as a new player?",
    answer:
      "Start on default difficulty, finish the parry and kick tutorial in the medieval opener, and push the first Minoan sphere trial before chapter 2. Treat Macula exposure as a budget and avoid spending lens adjustments on optional panels.",
    pageIds: ["fixed-beginner-tips-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-beginner-tips-unlock-mino",
    question: "When should I unlock the Minoan sphere abilities?",
    answer:
      "Push the first Minoan sphere trial as soon as the medieval scenes open the first sphere chamber. Holding the trial until later chapters forces you to redo puzzles on harder modes and lengthens the campaign.",
    pageIds: ["fixed-beginner-tips-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-beginner-tips-macula",
    question: "How do I manage Macula exposure as a beginner?",
    answer:
      "Read the red rim cue as a half-second warning window. Retreat to a safe room if no cover is in reach, hide behind tall grass or a crate stack if cover is near, and parry only when a single enemy is mid-telegraph within chain sword range. Avoid spending Minoan sphere lens adjustments on optional reflective panels.",
    pageIds: ["fixed-beginner-tips-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-beginner-tips-difficulty",
    question: "What difficulty should I pick for a first playthrough?",
    answer:
      "Default difficulty is the right baseline. It tunes parry timing, Macula exposure decay, and Macula boss patterns to forgiving values while keeping the intended combat rhythm. The hardest preset is hostile to new players; the easiest preset preserves the story but reduces the dynamic melee rhythm.",
    pageIds: ["fixed-beginner-tips-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-beginner-tips-heritage",
    question: "Do Heritage Pack items change beginner tips?",
    answer:
      "Yes. The Minoan Sword (third-hit stun) and Alec's Pendant (boosts the stats of all your charms) are real gameplay effects from the Heritage Pack pre-order DLC, so they belong in your beginner plan. Build your charm loadout around Alec's Pendant and use the Minoan Sword's third-hit stun as a stagger window in scout corridors. Specific per-chapter stun timing and per-charm scaling values are not surfaced in launch press as of 2026-08-28.",
    pageIds: ["fixed-beginner-tips-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-beginner-tips-quit",
    question: "Can I quit the game at any time without losing progress?",
    answer:
      "Yes. Save progress is automatic at benches and at chapter transitions, and quitting at a bench preserves the save. Restarting after a Macula boss phase is unnecessary; rotate between parry, retreat, and hide and continue from the bench.",
    pageIds: ["fixed-beginner-tips-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- vs-plague-tale-series --------------------------------------------
  {
    id: "fixed-vs-plague-tale-third-game",
    question: "Is Resonance A Plague Tale Legacy the third game in the franchise?",
    answer:
      "Yes. Resonance A Plague Tale Legacy (2026) is the third game in the A Plague Tale franchise by Asobo Studio and Focus Entertainment, following A Plague Tale: Innocence (2019) and A Plague Tale: Requiem (2022). The current game shares the franchise with the predecessors but ships Sophia as a new protagonist.",
    pageIds: ["fixed-vs-plague-tale-series-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-vs-plague-tale-amicia",
    question: "Do Amicia and Hugo appear in Resonance A Plague Tale Legacy?",
    answer:
      "They are referenced as previous protagonists in launch press and the legacy franchise context but are not present as playable characters in the current game as of 2026-08-28. The de Rune-era cast is referenced only inside the versus Plague Tale series page and the legacy boundary notes.",
    pageIds: ["fixed-vs-plague-tale-series-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-vs-plague-tale-timeline",
    question: "How does the timeline differ from Innocence and Requiem?",
    answer:
      "Resonance A Plague Tale Legacy runs Sophia through a 14th-century medieval outbreak and an ancient Minoan branch in parallel. Innocence (2019) and Requiem (2022) each ran a single medieval thread. The dual-timeline structure is unique to the current game and is not present in the predecessors.",
    pageIds: ["fixed-vs-plague-tale-series-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-vs-plague-tale-macula",
    question: "Is the Macula the same as in earlier games?",
    answer:
      "The Macula is a recurring condition across the three games, but the current game frames it as a legacy with an origin layer in the Minoan branch. In Innocence (2019) and Requiem (2022), the Macula was tied to the de Rune bloodline and medieval medicine. The current game's Macula lore is described as an evolution of the predecessor framing and is referenced here only as clarification, not as a replacement.",
    pageIds: ["fixed-vs-plague-tale-series-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-vs-plague-tale-gameplay",
    question: "How does the gameplay loop differ from Innocence and Requiem?",
    answer:
      "Resonance A Plague Tale Legacy adds a dynamic melee loop with parry, kick, and chain sword plus a Light Weaving puzzle system. Innocence (2019) and Requiem (2022) leaned on stealth, sling stones, and crossbow bolts. The current game's combat is framed by launch press as a deliberate evolution beyond the predecessor stealth-first loop.",
    pageIds: ["fixed-vs-plague-tale-series-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-vs-plague-tale-mino-abilities",
    question: "Are the Minoan sphere abilities available in Innocence or Requiem?",
    answer:
      "No. The Minoan sphere, Light Weaving, and the Minoan branch are unique to Resonance A Plague Tale Legacy. None of these systems appear in A Plague Tale: Innocence (2019) or A Plague Tale: Requiem (2022). Legacy predecessor mechanics from those games are referenced only as comparison points.",
    pageIds: ["fixed-vs-plague-tale-series-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // --- collectibles-hub --------------------------------------------------
  {
    id: "fixed-collectibles-totals",
    question: "How many collectibles are there in Resonance A Plague Tale Legacy?",
    answer:
      "The four collectible families total 37 Relics of the Present and Past (Hoarder Gold), 8 Blades from Heroes' Graves (Plunderer Gold), 30 Charms (Superstitious Gold), and 5 Theseus Echoes (In the Name of My Kin Silver). Resonance Points are a separate pickup family that gates the Like a Warrior Gold at 165 points within a single save file.",
    pageIds: ["fixed-collectibles-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-collectibles-chapter-select",
    question: "Can Chapter Select finish the Resonance A Plague Tale Legacy collectible trophies?",
    answer:
      "Chapter Select cleanup finishes the Hoarder, Plunderer, and Superstitious Gold trophies because Relics, Blades, and Charms transfer across saves. Like a Warrior (165 Resonance Points) does NOT transfer via Chapter Select, which is why Like a Warrior is the only confirmed missable trophy and requires either a careful first sweep or a fresh second playthrough.",
    pageIds: ["fixed-collectibles-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-collectibles-heritage-pack",
    question: "Does the Heritage Pack add new collectibles to Resonance A Plague Tale Legacy?",
    answer:
      "The Heritage Pack DLC adds the Minoan Sword (a Blade with a third-hit combo stun window) and Alec's Pendant (a Charm-scaling accessory that boosts the stats of all your Charms). It does not change the 8-Blade / 30-Charm per-chapter totals but adds the Minoan Sword to the inventory via pre-order redemption rather than via a per-chapter pickup.",
    pageIds: ["fixed-collectibles-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "fixed-collectibles-theseus",
    question: "What are Theseus Echoes in Resonance A Plague Tale Legacy?",
    answer:
      "Theseus Echoes are a 5-item collectible family anchored to the Minoan branch chapters; collecting all five unlocks the Silver In the Name of My Kin trophy. Each Echo unlocks as Sophia completes the named ritual witness scene for the chapter. In the Name of My Kin is reachable on a single playthrough by sweeping each Minoan branch chapter.",
    pageIds: ["fixed-collectibles-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
];