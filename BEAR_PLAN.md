# Bear Adventures — Expansion Plan

Plan for adding Bear (3rd grade) content to the Cub Scouts Activity Hub,
reusing the existing Jeopardy engine and Walkabout game where possible.

> **Verify before building content.** Requirements below come from web
> search summaries of council PDFs and scouting sites (2024 program). The
> official Scouting America pages could not be fetched directly. Check
> each adventure against the current Bear handbook before writing
> questions.

---

## 1. Rank Structure (2024 program)

- **Bear badge** = 6 required adventures + 2 electives.
- Bobcat is now the first required adventure **every year**, not a one-time badge.
- Bears are ~8–9 years old, so we write for a **3rd-grade reading level**.

---

## 2. Adventure Scan

### Required Adventures

| Adventure | Category | Key Requirements (summary) | Game Fit |
| --- | --- | --- | --- |
| **Bobcat** | Character & Leadership | Get to know den; Scout Oath & Law; 3 points of the Oath; den Code of Conduct; denner role; sign, salute, handshake; "Do Your Best" story; parent's guide | ⭐ Jeopardy + Oath/Law word game |
| **Bear Habitat** | Outdoors | Six Essentials + weather clothing; find 1-mile route on map; pack a backpack; trash plan; check fire danger rating; spot 6 signs of wildlife; 1-mile walk with LNT for Kids | ⭐⭐ Walkabout reskin ("Bear Trail") + Jeopardy |
| **Bear Strong** | Personal Fitness | Sample 3 food groups; 30-min group activity with stretching; 15-min personal exercise; 10-min relaxing activity | ⭐ Jeopardy (lighter Fitness bank) |
| **Paws for Action** | Citizenship | U.S. flag history and etiquette (raise, lower, fold); identify 3 U.S. symbols plus craft; how nonprofits are funded and use volunteers; service project | ⭐⭐ Jeopardy + Flag Etiquette sequencing game |
| **Standing Tall** | Personal Safety | Protect Yourself Rules video; personal space bubble worksheet; family digital device policy | ⚠️ Sensitive. A light "Safe or Not Safe?" scenario quiz at most. Leave it to the official video and parents. |
| **Fellowship** | Family & Reverence | Faith-specific; sources conflict (family traditions, holidays, act of kindness vs. duty-to-God discussion) | ❌ Skip. Faith-specific content belongs to families. |

### Elective Adventures (pick 2)

| Elective | Key Requirements (summary) | Game Fit |
| --- | --- | --- |
| **Forensics** | What forensics is; analyze fingerprints; test salt / sugar / baking soda / cornstarch | ⭐⭐ "Forensics Lab" mini-game + Jeopardy |
| **Super Science** | Static electricity, sink or float, color-morphing, color-layering investigations | ⭐⭐ Jeopardy + virtual "sink or float" predictor |
| **Bears on Bikes** | Helmet fit, hand signals, brakes, tire pressure, 30-min buddy ride | ⭐ Jeopardy (overlaps planned Bike Safety game) |
| **Critter Care** | Pet-care task log for 2 weeks (or research a pet), animal needs | ⭐ Jeopardy |
| **Salmon Run** | Water safety, lifeguards, boating and paddling basics | ♻️ Reuse the existing Water Safety bank |
| **Let's Camp** | Camping skills | ♻️ Reuse the existing Camping bank |
| **Roaring Laughter** | Jokes, tongue twisters, charades | ⭐ Tongue Twister / Charades card generator (fun party tool) |
| **Chef Tech** | Kitchen appliance safety, recipe, cook with an adult | Low. Hands-on. |
| A Bear Goes Fishing, Balancing Bears, Baloo the Builder, Bears Afloat, Champions for Nature, Marble Madness, Race Time, Summertime Fun, Whittling | Mostly hands-on or physical | Low priority. Revisit after the handbook check. |
| Archery, BB Guns, Slingshot | Range activities with qualified instructors only | ❌ Not a fit |

---

## 3. Architecture Changes

The Jeopardy engine already loads themes from a registry, so Bear support
needs **one new field and a filter** rather than a new engine.

### 3a. Add `rank` to the theme registry — `data/jeopardy-themes.js`

```js
{
  id: "bear-habitat",
  rank: "bear",            // NEW: "bear" | "webelos" | "all"
  name: "Bear Habitat",
  emoji: "🐻",
  description: "Six Essentials, wildlife signs, fire danger & LNT",
  dataFile: "jeopardy-bear-habitat.js",
  dataVar: "JEOPARDY_BEAR_HABITAT",
},
```

- Tag the existing 8 themes `rank: "webelos"`.
- Tag shared banks (Camping, Water Safety) `rank: "all"` so they show for both ranks.

### 3b. Rank filter in `games/jeopardy.html`

- Add a **Bear / Webelos** toggle at the top of `ThemePicker`.
- Support `?rank=bear` (and the existing `?theme=` param) for direct links.
- Default to "all" so existing links keep working.

### 3c. Landing page — `index.html`

- Change the heading to "Cub Scouts Activity Hub" (already rank-neutral).
- Add rank chips on each card (🐻 Bear, ⚜️ Webelos).
- Add a **Bear Trail** card once that game ships.

### 3d. Naming convention

- Data files: `data/jeopardy-bear-<adventure>.js`
- Games: `games/bear-<name>.html`

---

## 4. Content Guidelines (Bear-specific)

- **Reading level:** short sentences, 3rd-grade vocabulary, no trick wording.
- **Values:** $100–$500 still apply, but $500 = "a Bear can figure it out with a hint." No Webelos-level detail.
- **Hints:** every clue gets a `hint`, since leaders will lean on them more with this age.
- **Same structure** as existing banks: 4 categories × 5 values × 3-question pools = **60 questions per theme**.

---

## 5. Build List

### Phase 1 — Quick wins (Jeopardy banks plus rank filter)

| # | Item | Adventure | Notes |
| --- | --- | --- | --- |
| 1 | Rank field + ThemePicker filter | — | Engine change, small |
| 2 | `jeopardy-bear-habitat.js` | Bear Habitat | Six Essentials, Wildlife Signs, Leave No Trace for Kids, Trail Prep and Fire Danger |
| 3 | `jeopardy-bear-paws-for-action.js` | Paws for Action | Flag Facts, Flag Etiquette, U.S. Symbols, Nonprofits and Service |
| 4 | `jeopardy-bear-bobcat.js` | Bobcat | Scout Oath, Scout Law, Signs and Salutes, Den Life |
| 5 | `jeopardy-bear-strong.js` | Bear Strong | Food Groups, Stretch and Move, Exercise Types, Rest and Relax |
| 6 | Tag Camping + Water Safety `rank: "all"` | Let's Camp / Salmon Run | Free coverage |

### Phase 2 — Electives

| # | Item | Adventure |
| --- | --- | --- |
| 7 | `jeopardy-bear-forensics.js` | Forensics |
| 8 | `jeopardy-bear-super-science.js` | Super Science |
| 9 | `jeopardy-bear-bikes.js` | Bears on Bikes |
| 10 | `jeopardy-bear-critter-care.js` | Critter Care |

### Phase 3 — New games

| # | Game | Adventure | Concept |
| --- | --- | --- | --- |
| 11 | **Bear Trail** (`games/bear-trail.html`) | Bear Habitat | Walkabout reskin: pack the **Six Essentials** (not Ten), plan a 1-mile route, check the fire danger sign, spot 6 wildlife signs, make LNT choices |
| 12 | **Flag Folder** (`games/bear-flag.html`) | Paws for Action | Put the flag-folding and raising/lowering steps in order. Identify U.S. symbols. |
| 13 | **Forensics Lab** (`games/bear-forensics.html`) | Forensics | Match fingerprint types (loop, whorl, arch). Identify mystery powders by test results. |
| 14 | **Oath & Law Builder** | Bobcat | Unscramble or fill in the Scout Oath and Law, word by word |
| 15 | **Giggle Generator** | Roaring Laughter | Random tongue twister and charades cards for den meetings |

---

## 6. Decisions Needed

1. **Standing Tall:** skip it, or build a light "Safe / Not Safe" scenario quiz?
2. **Fellowship:** skip it (recommended)?
3. **Shared banks:** OK to show Camping and Water Safety for both ranks?
4. **Which electives** is your den actually doing? Prioritize those in Phase 2.
5. **Repo/site name:** the site is `webelos-Games`. Rename it to something rank-neutral later, or leave it?

---

## Sources (web search, Oct 2026)

- [Scouting America — Bear Adventures](https://www.scouting.org/programs/cub-scouts/adventures/bear/)
- [Scouting America — Super Science](https://www.scouting.org/cub-scout-adventures/super-science/)
- [Scouter Mom — Bear Badge Requirements 2024](https://scoutermom.com/resource/bear-badge-requirements-2024/)
- [Scouter Mom — Bear Habitat](https://scoutermom.com/45173/bear-habitat-adventure)
- [Boy Scout Trail — Bear Adventures](https://www.boyscouttrail.com/24cub-scouts/bear_adventures.php)
- [Dan Beard Council — Bear Adventure Requirements (PDF)](https://danbeard.org/wp-content/uploads/2024/05/Bear-Adventure-Requirements.pdf)
- [Black Hills Council — Bear Adventure Requirements (PDF)](https://blackhillsbsa.org/wp-content/uploads/2024/09/Bear-Adventure-Requirements.pdf)
- [Michigan Scouting — Required Adventures (PDF)](https://michiganscouting.org/wp-content/uploads/2024/02/Required-Adventures-022824.pdf)
- [Grand Canyon Council — Bear Den Leader Guide (PDF)](https://support.scoutingaz.org/wp-content/uploads/2024/09/Bear-Den-Leader-Guide.pdf)
- [Scouting ATL — Bear Rank Advancement](https://www.scoutingatl.org/BearAdvancement)
- [The Badge Archive — 2024 Bear Adventure List](https://thebadgearchive.com/2024-bears-adventure-list/)
- [Ultimate Scouts — Standing Tall Requirements](https://www.ultimatescouts.com/standing-tall-requirements/)
