# Webelos Games - Claude Code Project Configuration

## Project Overview
Interactive games hub for Cub Scouts (Webelos rank), built with React 18 via CDN. No build tools required — all games are self-contained HTML files deployed to GitHub Pages.

## Tech Stack
- **React 18** loaded from CDN (no npm/node)
- **Babel standalone** for in-browser JSX transpilation
- **Inline CSS** with dark theme throughout
- **Google Fonts**: Press Start 2P, VT323

## Project Structure
- `index.html` — Landing page / game hub
- `games/` — Self-contained game HTML files
- `data/` — JavaScript data files (Jeopardy question banks, theme registry)

## Development Guidelines
- Each game is a standalone `.html` file with all dependencies loaded via CDN
- Use relative paths for all internal links
- Dark theme with pixel/retro aesthetic (Press Start 2P font)
- Games must work offline and on GitHub Pages
- No build step — everything runs directly in the browser

## Available Agents (from The Agency)
This project includes curated agents from [agency-agents](https://github.com/msitarzewski/agency-agents) in `.claude/agents/`. Activate them by name:

### Game Development
- **Game Designer** — Game mechanics, balance, and player experience
- **Level Designer** — Level layouts, progression, and difficulty curves
- **Narrative Designer** — Story, dialogue, and educational content
- **Technical Artist** — Visual effects, animations, and art pipeline
- **Game Audio Engineer** — Sound design and audio implementation

### Engineering
- **Frontend Developer** — React, HTML/CSS, web performance
- **Senior Developer** — Architecture, code review, best practices

### Design
- **UI Designer** — Interface design, visual hierarchy, interaction patterns
- **UX Architect** — Information architecture, user flows
- **UX Researcher** — User testing, usability analysis

### Quality
- **Accessibility Auditor** — WCAG compliance, inclusive design
- **Reality Checker** — Production readiness verification
- **Evidence Collector** — Testing documentation and coverage

### Product
- **Feedback Synthesizer** — User feedback analysis and prioritization

The full set of 128 agents is also installed globally at `~/.claude/agents/`.
