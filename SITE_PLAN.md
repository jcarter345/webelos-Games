# Cub Scouts Game Site — Publishing Plan

## Current Files

| File | Purpose |
|------|---------|
| `natural-events-jeopardy.html` | Jeopardy game (ready to run in browser) |
| `webelos-walkabout.html` | Walkabout adventure game (ready to run in browser) |
| `jeopardy.jsx` | JSX source for Jeopardy |
| `walkabout.jsx` | JSX source for Walkabout |

Both HTML files are **self-contained** — they load React 18 + Babel via CDN with no build step required. This makes deployment very simple.

---

## Proposed File Structure

```
CubScouts/              ← repo root
├── index.html          ← landing page (NEW — links to games)
├── games/
│   ├── jeopardy.html   ← renamed from natural-events-jeopardy.html
│   └── walkabout.html  ← renamed from webelos-walkabout.html
├── src/                ← source files (not served, just for editing)
│   ├── jeopardy.jsx
│   └── walkabout.jsx
└── SITE_PLAN.md
```

**Why this structure:**
- `index.html` is the entry point every static host expects
- `games/` keeps the playable files organized and out of the root
- `src/` preserves the original JSX for future editing (optional — can skip if clutter)

---

## Step-by-Step Implementation

### Step 1 — Create the folder structure
1. Create a `games/` folder
2. Move `natural-events-jeopardy.html` → `games/jeopardy.html`
3. Move `webelos-walkabout.html` → `games/walkabout.html`
4. Optionally create `src/` and move the `.jsx` files there

### Step 2 — Create `index.html` (landing page)
Build a simple landing page with:
- Pack name / title
- Card or button for each game linking to `games/jeopardy.html` and `games/walkabout.html`
- Brief description of each game
- No framework needed — plain HTML + inline CSS

Suggested style: match the dark/retro aesthetic of the existing games.

### Step 3 — Initialize a Git repo
```bash
git init
git add .
git commit -m "Initial commit: Jeopardy + Walkabout games"
```

### Step 4 — Push to GitHub
1. Create a new **public** repo on GitHub (e.g., `cub-scouts-games`)
2. Push your local repo to it

```bash
git remote add origin https://github.com/YOUR_USERNAME/cub-scouts-games.git
git push -u origin main
```

### Step 5 — Enable GitHub Pages
1. Go to the repo on GitHub → **Settings** → **Pages**
2. Set Source to `Deploy from a branch` → branch: `main`, folder: `/ (root)`
3. Save — GitHub will publish your site at:
   `https://YOUR_USERNAME.github.io/cub-scouts-games/`

---

## Hosting Options Compared

| Option | Cost | Ease | Custom Domain | Notes |
|--------|------|------|---------------|-------|
| **GitHub Pages** | Free | Easy | Yes (free) | Best for static sites in a git repo |
| **Netlify** | Free tier | Very easy | Yes (free) | Drag-and-drop deploy option |
| **Vercel** | Free tier | Very easy | Yes (free) | Similar to Netlify |
| **Cloudflare Pages** | Free | Easy | Yes (free) | Good performance, unlimited bandwidth |

**Recommendation: GitHub Pages** — straightforward, no extra accounts, free forever for public repos.

---

## Adding More Games Later

1. Build/write a new standalone `.html` game file
2. Drop it in `games/`
3. Add a card for it on `index.html`
4. Commit and push — GitHub Pages auto-deploys

---

## Editing Games Going Forward

The `.jsx` files in `src/` are easier to edit (syntax highlighting, etc.). After making changes:
1. Edit the `.jsx` source
2. Copy the updated component into the corresponding `.html` file, replacing the script block between `<script type="text/babel">` tags
3. Test by opening the `.html` file locally in a browser
4. Commit and push

> **Tip:** Since these use Babel in-browser transpilation (not a real build), the `.html` files work by loading the JSX directly — no compile step needed. This is great for simplicity but means page load is slightly slower than a pre-built site. For a small Cub Scout game site this is totally fine.

---

## Next Actions

- [ ] Create `games/` folder and move HTML files
- [ ] Create `index.html` landing page
- [ ] Initialize git repo
- [ ] Create GitHub repo and push
- [ ] Enable GitHub Pages
