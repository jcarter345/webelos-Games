# Cub Scouts Game Site — Publishing Plan

## File Structure

```text
CubScouts/              ← repo root
├── index.html          ← landing page (entry point)
├── games/
│   ├── jeopardy.html   ← Natural Events Jeopardy (self-contained)
│   └── walkabout.html  ← Webelos Walkabout (self-contained)
├── README.md
└── SITE_PLAN.md
```

Each file in `games/` is self-contained — React 18 and Babel load via CDN,
so no build step or install is required. The JSX lives directly inside each
HTML file's `<script type="text/babel">` block.

---

## Hosting

**Live site:** <https://jcarter345.github.io/webelos-Games/>

Hosted on **GitHub Pages** (free, auto-deploys on every push to `main`).

To enable Pages on a new repo:

1. Go to **Settings → Pages**
2. Set Source → `Deploy from a branch` → `main`, `/ (root)`
3. Save

### Other Options

| Option | Cost | Notes |
| --- | --- | --- |
| **GitHub Pages** | Free | Auto-deploy from git, no extra accounts |
| **Netlify** | Free tier | Drag-and-drop deploy option |
| **Vercel** | Free tier | Similar to Netlify |
| **Cloudflare Pages** | Free | Unlimited bandwidth |

---

## Workflow

### Adding a New Game

1. Build a new standalone `.html` file (React via CDN works great)
2. Drop it in `games/`
3. Add a card for it in `index.html`
4. Commit and push — GitHub Pages deploys automatically

### Editing an Existing Game

1. Open the game's `.html` file in `games/`
2. Edit the JSX inside the `<script type="text/babel">` block
3. Test by opening the file in a browser (or use VS Code Live Server)
4. Commit and push

---

## Notes

- Babel transpiles JSX in-browser at load time — no compile step needed.
  Page load is slightly slower than a pre-built site, but fine for this use case.
- For local testing without a server, open `index.html` directly in a browser.
  All game links use relative paths so they resolve correctly from `file://`.

---

## Jeopardy Multi-Theme Expansion Plan

### Goal

Allow scouts to pick a **theme / Webelos Adventure** before playing Jeopardy,
then load the correct set of categories and randomized questions for that
adventure. The first two themes will be **"Be Prepared for Natural Events"**
(the existing game) and **"Camping"** (new).

---

### Updated File Structure

```text
webelos-Games/
├── index.html
├── games/
│   ├── jeopardy.html        ← game engine (shared across all themes)
│   └── walkabout.html
├── data/
│   ├── jeopardy-themes.js   ← theme registry (metadata for every adventure)
│   ├── jeopardy-natural-events.js  ← current questions (renamed from jeopardy-questions.js)
│   └── jeopardy-camping.js         ← new Camping question bank
├── README.md
└── SITE_PLAN.md
```

---

### Step-by-Step Implementation

#### 1. Create the Theme Registry — `data/jeopardy-themes.js`

A single JS file that lists every available adventure. Each entry contains
display metadata and the global variable name used in its question file.

```js
const JEOPARDY_THEMES = [
  {
    id: "natural-events",
    name: "Be Prepared for Natural Events",
    emoji: "🌪️",
    description: "Tornadoes, flash floods, winter storms & emergency prep",
    dataFile: "jeopardy-natural-events.js",   // loaded on demand
    dataVar: "JEOPARDY_NATURAL_EVENTS",       // global var the file creates
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
```

#### 2. Rename & Namespace the Existing Question Bank

- Rename `data/jeopardy-questions.js` → `data/jeopardy-natural-events.js`
- Change the exported variable from `JEOPARDY_QUESTIONS` →
  `JEOPARDY_NATURAL_EVENTS`
- Internal data structure stays identical (categories → questions → pool).

#### 3. Write the Camping Question Bank — `data/jeopardy-camping.js`

Same structure as the Natural Events file. Four categories, five
value levels ($100 – $500), 3 questions per pool.

| Category | Emoji | Sample Topics |
| --- | --- | --- |
| **Campfires & Cooking** | 🔥 | Fire safety triangle, buddy burner, foil packets, extinguishing fires |
| **Knots & Gear** | 🪢 | Square knot, taut-line hitch, clove hitch, packing a pack |
| **Leave No Trace** | 🌿 | 7 LNT principles, proper waste disposal, trail etiquette |
| **Shelter & Weather** | ⛺ | Tent setup, rain fly, reading the sky, staying dry |

Total: 4 categories × 5 values × 3 pool items = **60 questions**.

#### 4. Lazy-Load Question Data in `jeopardy.html`

Instead of a static `<script src>`, dynamically load the chosen theme's
data file after the scout picks a theme. Approach:

```
Page Load
  ├── Load jeopardy-themes.js (always — it's tiny)
  ├── Show ThemePicker screen
  └── Scout selects a theme
        ├── Dynamically inject <script src="data/{dataFile}">
        ├── Wait for the global variable to exist
        └── Proceed to TeamSetup with the loaded questions
```

This keeps page load fast — only the selected theme's questions are fetched.

#### 5. Add a `ThemePicker` React Component

Inserted **before** the existing `TeamSetup` screen. The game state flow
becomes:

```
"theme-select"  →  "setup"  →  "playing"  →  "finished"
  ThemePicker       TeamSetup     Board        Results
```

**ThemePicker** renders a card for each entry in `JEOPARDY_THEMES`:
- Adventure emoji + name
- Short description
- "Select" button

On selection:
1. Load the question JS file (if not already loaded).
2. Store the selected theme + question data in App state.
3. Transition to `"setup"` (TeamSetup).

#### 6. Make the Game Engine Theme-Aware

Current hard-coded references to replace:

| Location | Current | Updated |
| --- | --- | --- |
| `<title>` tag | "Natural Events Jeopardy" | Dynamic: `{theme.name} Jeopardy` |
| TeamSetup heading | "Natural Events Jeopardy" | `{theme.name} Jeopardy` |
| TeamSetup subtitle | "BE PREPARED FOR NATURAL EVENTS ADVENTURE" | `{theme.name} Adventure` |
| Board header | "🏕️ Natural Events Jeopardy" | `{theme.emoji} {theme.name} Jeopardy` |
| `pickQuestions()` call | `pickQuestions(JEOPARDY_QUESTIONS)` | `pickQuestions(selectedQuestions)` |

The `pickQuestions` function itself is already generic — it only needs to
receive the categories array, not a specific global variable name.

#### 7. Support Direct-Link with Query Param (optional)

Allow linking straight to a theme:

```
games/jeopardy.html?theme=camping
```

On load, if `?theme=<id>` is present, auto-select that theme and skip the
ThemePicker. This lets `index.html` link to a specific adventure directly.

#### 8. Update `index.html` Landing Page

Replace the single Jeopardy card with one that communicates the multi-theme
nature, or list separate cards per adventure. Options:

- **Option A — Single card, generic:** "Jeopardy — Pick your Adventure"
  linking to `games/jeopardy.html` (ThemePicker handles the rest).
- **Option B — One card per adventure:** Two Jeopardy cards linking to
  `jeopardy.html?theme=natural-events` and `jeopardy.html?theme=camping`.

Recommend **Option A** to keep the landing page clean — new themes
automatically appear in the ThemePicker without touching `index.html`.

---

### Adding Future Themes

Once this architecture is in place, adding a new Jeopardy adventure is:

1. Create `data/jeopardy-<adventure>.js` with the standard structure.
2. Add an entry to `JEOPARDY_THEMES` in `data/jeopardy-themes.js`.
3. Commit & push — no changes needed to `jeopardy.html` or `index.html`.

---

### Implementation Order

| # | Task | Files Touched |
| --- | --- | --- |
| 1 | Create `data/jeopardy-themes.js` registry | new file |
| 2 | Rename & re-namespace the Natural Events question bank | `data/jeopardy-questions.js` → `data/jeopardy-natural-events.js` |
| 3 | Write the Camping question bank (60 questions) | new `data/jeopardy-camping.js` |
| 4 | Add `ThemePicker` component + lazy-load logic in `jeopardy.html` | `games/jeopardy.html` |
| 5 | Make all headings/titles dynamic based on selected theme | `games/jeopardy.html` |
| 6 | Update `index.html` card to reflect multi-theme Jeopardy | `index.html` |
| 7 | Test both themes end-to-end (randomization, scoring, Play Again) | — |
