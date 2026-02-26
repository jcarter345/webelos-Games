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
