// Theme registry for Jeopardy
//
// Each entry describes one Webelos Adventure / theme.
// The game reads this list to build the ThemePicker screen and
// to know which data file to load on demand.
//
// To add a new theme:
//   1. Create data/jeopardy-<id>.js  (same pool structure as existing files)
//   2. Add an entry here — the game picks it up automatically.

var JEOPARDY_THEMES = [
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
  {
    id: "earth-rocks",
    name: "Earth Rocks!",
    emoji: "🪨",
    description: "Rock types, minerals, Mohs scale, the rock cycle & geology",
    dataFile: "jeopardy-earth-rocks.js",
    dataVar: "JEOPARDY_EARTH_ROCKS",
  },
  {
    id: "civics",
    name: "My Community",
    emoji: "🏛️",
    description: "Voting, three branches of government, laws & community service",
    dataFile: "jeopardy-civics.js",
    dataVar: "JEOPARDY_CIVICS",
  },
  {
    id: "outdoor-code",
    name: "Outdoor Code & LNT",
    emoji: "🌲",
    description: "Outdoor Code, Leave No Trace principles, trail skills & wildlife",
    dataFile: "jeopardy-outdoor-code.js",
    dataVar: "JEOPARDY_OUTDOOR_CODE",
  },
  {
    id: "fitness",
    name: "Fitness & Nutrition",
    emoji: "💪",
    description: "Balanced meals, exercise, stretching, rest & recovery",
    dataFile: "jeopardy-fitness.js",
    dataVar: "JEOPARDY_FITNESS",
  },
  {
    id: "water-safety",
    name: "Water Safety",
    emoji: "🏊",
    description: "Rescue order, swimming safety, water science & preparedness",
    dataFile: "jeopardy-water-safety.js",
    dataVar: "JEOPARDY_WATER_SAFETY",
  },
  {
    id: "knife-safety",
    name: "Knife Safety",
    emoji: "🔪",
    description: "Knife rules, kitchen knives, cutting techniques & food safety",
    dataFile: "jeopardy-knife-safety.js",
    dataVar: "JEOPARDY_KNIFE_SAFETY",
  },
];
