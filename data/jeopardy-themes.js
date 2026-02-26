// Theme registry for Jeopardy
//
// Each entry describes one Webelos Adventure / theme.
// The game reads this list to build the ThemePicker screen and
// to know which data file to load on demand.
//
// To add a new theme:
//   1. Create data/jeopardy-<id>.js  (same pool structure as existing files)
//   2. Add an entry here — the game picks it up automatically.

const JEOPARDY_THEMES = [
  {
    id: "natural-events",
    name: "Natural Events",
    emoji: "🌪️",
    description: "Tornadoes, flash floods, winter storms & emergency prep",
    dataFile: "jeopardy-natural-events.js",
    dataVar: "JEOPARDY_NATURAL_EVENTS",
  },
  {
    id: "camping",
    name: "Camping",
    emoji: "🏕️",
    description: "Campfires, knots, gear, outdoor cooking & Leave No Trace",
    dataFile: "jeopardy-camping.js",
    dataVar: "JEOPARDY_CAMPING",
  },
];
