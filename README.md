# Cub Scouts Activity Hub

Interactive games for den and pack meetings, built with React. No build tools required — every game runs directly in the browser.

**Live site:** *(add your GitHub Pages URL here once deployed)*

---

## Games

### 🌪️ Natural Events Jeopardy

A team Jeopardy-style game covering natural disaster preparedness.

- **Players:** 2–6 teams
- **Categories:** Tornadoes, Flash Floods, Winter Storms, Be Prepared
- **Questions:** 20 total across 5 difficulty levels ($100–$500)
- **Features:** Live scoreboard, hints, answer reveal, confetti on completion

### 🥾 Webelos Walkabout

A solo hiking simulation that teaches the BSA 10 Essentials and first aid skills.

- **Players:** 1 (solo)
- **Covers:** Webelos Adventure requirements 5 (First Aid) and 7 (Debrief discussion)
- **Features:** Gear packing phase, first aid kit builder, 20+ hiking scenarios, post-hike debrief questions

---

## Project Structure

```text
├── index.html        # Landing page
└── games/
    ├── jeopardy.html # Natural Events Jeopardy
    └── walkabout.html# Webelos Walkabout
```

Each file in `games/` is self-contained — React 18 and Babel load via CDN, so they work without any install or build step. The JSX lives directly in the `<script type="text/babel">` block inside each HTML file.

---

## Running Locally

Just open `index.html` in a browser. No server, no `npm install`, nothing.

```bash
# macOS / Linux
open index.html

# Windows
start index.html
```

---

## Deploying to GitHub Pages

1. Create a new public repo on GitHub
2. Push this folder to it
3. Go to **Settings → Pages** and set the source to the `main` branch, root folder
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

---

## Adding a New Game

1. Build your game as a standalone `.html` file (React via CDN works great)
2. Drop it in `games/`
3. Add a card for it in `index.html`
4. Commit and push — GitHub Pages deploys automatically

---

## Editing an Existing Game

Open the `.html` file in `games/` and edit the JSX directly inside the `<script type="text/babel">` block. Open the file in a browser to test, then commit and push — GitHub Pages deploys automatically.
