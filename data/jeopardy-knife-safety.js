// Jeopardy question bank — Chef's Knife (Knife Safety) Adventure
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Sources:
//   BSA Webelos Chef's Knife Adventure – https://www.scouting.org/programs/cub-scouts/adventures/webelos/
//   BSA Guide to Safe Scouting – https://www.scouting.org/health-and-safety/gss/
//   BSA Whittling Chip / Totin' Chip – https://www.scouting.org
//   USDA Food Safety for Kids – https://www.fsis.usda.gov
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_KNIFE_SAFETY = [
  {
    name: "KNIFE SAFETY RULES",
    emoji: "⚠️",
    color: "#1a1a0a",
    accent: "#eab308",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The first and most important rule of knife safety: always cut in this direction — away from your body.",
            question: "What is away from you (and away from others)?",
            hint: "If the knife slips, you don't want it heading toward your body",
          },
          {
            answer: "Before using any knife, you should always get permission from this person.",
            question: "What is your parent or adult leader?",
            hint: "Adults must know you're using a knife and must supervise you",
          },
          {
            answer: "When carrying a knife, you should always keep the blade in this position.",
            question: "What is closed (or sheathed / pointing down at your side)?",
            hint: "An open blade while walking is an accident waiting to happen",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The 'safety circle' (or 'blood circle') is an imaginary circle around you when using a knife. No one should be within this distance.",
            question: "What is arm's length plus the length of the knife (about 4-5 feet in all directions)?",
            hint: "Extend your arm with the knife — if you can touch someone, they're too close",
          },
          {
            answer: "A dull knife is actually MORE dangerous than a sharp one because you have to use more of this, which increases the chance of slipping.",
            question: "What is force (or pressure)?",
            hint: "A sharp knife cuts with less effort — you're more in control",
          },
          {
            answer: "When handing a knife to another person, you should present it with the handle pointing toward them and the blade pointing toward this person.",
            question: "What is yourself (the person handing it over)?",
            hint: "Handle to the receiver, blade away from them — 'give them the handle'",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "In the BSA, this card or chip gives a Scout permission to carry and use a pocketknife after demonstrating they know the safety rules.",
            question: "What is the Whittling Chip?",
            hint: "You earn it by showing you can safely handle a knife",
          },
          {
            answer: "If you lose or misuse your Whittling Chip, a corner of the card is cut off. After losing all four corners, you must do this.",
            question: "What is re-earn it (retake the training)?",
            hint: "Four strikes and you're out — but you can always learn the rules again",
          },
          {
            answer: "When using a knife at a table or cutting board, you should always keep your fingers in this position — curled inward like a claw — to protect them.",
            question: "What is the claw grip (or bear claw)?",
            hint: "Curl your fingertips under and use your knuckles as a guide for the blade",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "You should never use a knife when you are in this physical or emotional state, which impairs your judgment and coordination.",
            question: "What is tired, angry, or distracted (or in a hurry)?",
            hint: "A knife demands your full attention — if you're not focused, put it down",
          },
          {
            answer: "When closing a folding knife, you should use this part of your hand on the back (non-sharp) side of the blade to fold it shut.",
            question: "What is the palm of your hand (pushing the spine of the blade)?",
            hint: "Push the dull back edge — never put your fingers near the sharp edge while closing",
          },
          {
            answer: "If you drop a knife, you should NEVER try to catch it. Instead, you should do this.",
            question: "What is step back and let it fall?",
            hint: "A dropped knife has no handle — just blade. Let gravity do its thing safely.",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The BSA knife safety pledge includes these four promises: I will treat my knife with the respect due a useful tool. I will always close my knife or put it in its sheath when I'm done using it. I will never use a knife on something that will this or damage the blade, and I will hand knives safely.",
            question: "What is dull (or damage the blade)?",
            hint: "Don't cut on rocks, metal, or other surfaces that ruin the edge",
          },
          {
            answer: "A fixed-blade knife should always be carried in this protective covering, which keeps the blade from accidentally cutting you or others.",
            question: "What is a sheath?",
            hint: "It's like a sleeve for the blade — it covers the sharp edge for safe carrying",
          },
          {
            answer: "When whittling, you should always carve with the grain of the wood, not against it, to prevent the knife from catching and doing this.",
            question: "What is slipping (or jumping / kicking back)?",
            hint: "Going against the grain makes the knife dig in and suddenly jerk forward",
          },
        ],
      },
    ],
  },

  {
    name: "KITCHEN KNIVES",
    emoji: "🔪",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "This large, wide-bladed knife is the most versatile kitchen knife and is used for chopping, slicing, and dicing vegetables and meat.",
            question: "What is a chef's knife?",
            hint: "It's the go-to knife in every professional kitchen",
          },
          {
            answer: "This small knife with a 3-4 inch blade is used for peeling fruits and vegetables and other detailed cutting tasks.",
            question: "What is a paring knife?",
            hint: "'Pare' means to peel — that's what this little knife does best",
          },
          {
            answer: "Before using any kitchen knife, you should always make sure your cutting surface is this — not moving around on the counter.",
            question: "What is stable (or non-slip / secure)?",
            hint: "Put a damp towel under your cutting board to keep it from sliding",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This long knife with a serrated (wavy) edge is designed for cutting bread without crushing it.",
            question: "What is a bread knife?",
            hint: "The wavy edge grips the crust and saws through without squishing the soft inside",
          },
          {
            answer: "Kitchen knives should be stored in a knife block, on a magnetic strip, or in blade guards — NEVER loose in a drawer because of this danger.",
            question: "What is cutting your hand when reaching into the drawer?",
            hint: "You can't see the blades — reaching in blindly is asking for a cut",
          },
          {
            answer: "After using a kitchen knife, you should wash it by hand with soap and water — NEVER put it in this kitchen appliance.",
            question: "What is the dishwasher?",
            hint: "The banging around and harsh detergent dull the blade and can damage the handle",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This tool is used to keep a knife's edge aligned and sharp between professional sharpenings. It looks like a long steel rod with a handle.",
            question: "What is a honing steel (or sharpening steel / honing rod)?",
            hint: "Chefs swipe their knife along this rod to keep the edge straight",
          },
          {
            answer: "A utility knife is sized between a chef's knife and a paring knife, typically with a blade of this many inches, used for medium-sized tasks.",
            question: "What is 4 to 7 inches (about 5-6 inches)?",
            hint: "It's the middle child — bigger than a paring knife, smaller than a chef's knife",
          },
          {
            answer: "The part of a knife blade that extends into the handle, providing stability and balance, is called this.",
            question: "What is the tang?",
            hint: "A 'full tang' knife has metal running the entire length of the handle — stronger and more balanced",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "When selecting the right knife for a task, the blade should be longer than the food you're cutting. Using a too-small knife requires more this, increasing injury risk.",
            question: "What is force (or pressure)?",
            hint: "The right tool for the right job — don't force a small knife through a big watermelon",
          },
          {
            answer: "The sharp cutting edge of a knife blade is called the edge, and the flat top opposite side of the blade is called this.",
            question: "What is the spine?",
            hint: "Like your backbone — it runs along the top of the blade and is not sharp",
          },
          {
            answer: "A cleaver is a large, heavy knife with a rectangular blade that is used for chopping through this material that other knives can't handle.",
            question: "What is bone (or thick meat / hard vegetables)?",
            hint: "Its weight and thick blade let you chop through things that would damage a chef's knife",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Japanese santoku knives differ from Western chef's knives mainly in this blade characteristic — they use a flatter edge rather than a curved one.",
            question: "What is a flatter (straighter) blade profile?",
            hint: "Santoku means 'three virtues' — slicing, dicing, and mincing",
          },
          {
            answer: "The angle at which a knife blade is sharpened affects its cutting ability. Most Western kitchen knives are sharpened to approximately this many degrees per side.",
            question: "What is 20 degrees (15-20 degrees)?",
            hint: "Japanese knives are even sharper — around 15 degrees",
          },
          {
            answer: "High-carbon stainless steel is the most popular material for quality kitchen knives because it combines the sharpness of carbon steel with this property of stainless steel.",
            question: "What is rust resistance (corrosion resistance)?",
            hint: "Regular carbon steel gets sharp but rusts easily — stainless doesn't rust but is harder to sharpen",
          },
        ],
      },
    ],
  },

  {
    name: "CUTTING TECHNIQUES",
    emoji: "🥕",
    color: "#1a100a",
    accent: "#f97316",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "This basic cutting technique produces thin, flat pieces of food — like cutting a tomato or bread.",
            question: "What is slicing?",
            hint: "Long, smooth strokes from one side to the other",
          },
          {
            answer: "This cutting technique produces small, roughly equal cubes of food, usually about ¼ to ½ inch in size.",
            question: "What is dicing?",
            hint: "Like little dice — small cubes, all about the same size",
          },
          {
            answer: "Before cutting anything, you should always place food on this flat surface — never cut while holding food in your hand.",
            question: "What is a cutting board?",
            hint: "Stable, flat, and keeps your counter safe — it's the knife's best friend",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This technique produces the tiniest pieces of food — smaller than dicing — and is used for garlic, herbs, and onions.",
            question: "What is mincing?",
            hint: "The smallest cut — practically turning the food into paste",
          },
          {
            answer: "When cutting round foods like potatoes or carrots, you should first cut them in half to create this, which prevents them from rolling.",
            question: "What is a flat side (a stable base)?",
            hint: "A round vegetable on a cutting board is like a ball — cut it in half so it sits still",
          },
          {
            answer: "The rocking motion used with a chef's knife, where the tip stays on the board and the handle moves up and down, is used for this quick chopping action.",
            question: "What is chopping (or the rocking chop)?",
            hint: "The tip is the pivot point — the handle does the up-and-down motion",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The 'claw grip' used by chefs keeps fingers safe by curling them inward. The flat side of the blade rests against these body parts, which guide the knife.",
            question: "What are your knuckles?",
            hint: "Your fingertips are tucked safely behind your knuckle wall",
          },
          {
            answer: "This long, thin cutting technique — sometimes called matchstick cuts — produces thin strips of vegetables like carrots or bell peppers.",
            question: "What is julienne?",
            hint: "French cooking term — think thin strips like matchsticks",
          },
          {
            answer: "When using a knife, your dominant hand holds the knife handle, and your other hand (the 'guide hand') does this job.",
            question: "What is holds and guides the food (using the claw grip)?",
            hint: "One hand cuts, the other hand controls the food — teamwork!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The 'chiffonade' technique is used specifically for cutting leafy herbs and greens into thin ribbons by first doing this to the leaves.",
            question: "What is rolling (or stacking) them together?",
            hint: "Stack the leaves, roll them up like a cigar, then slice across into thin ribbons",
          },
          {
            answer: "Cross-contamination can occur when you use the same cutting board for raw meat and then vegetables without doing this first.",
            question: "What is washing (sanitizing) the cutting board?",
            hint: "Raw meat bacteria can transfer to foods you eat raw — like salad veggies",
          },
          {
            answer: "The Chef's Knife adventure requires scouts to demonstrate these three specific cutting techniques.",
            question: "What are slicing, dicing, and mincing?",
            hint: "Thin pieces, small cubes, and tiny bits — the three basic cuts",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A 'brunoise' is a precision dice cut where food is cut into tiny cubes of this very small size — about 1/8 inch.",
            question: "What is 1/8 inch (or 3mm)?",
            hint: "Smaller than a regular dice — these are like tiny, perfect cubes",
          },
          {
            answer: "Professional chefs use this technique called 'mise en place' (a French term) that means having all ingredients prepped and cut before starting to cook.",
            question: 'What is "everything in its place" (or preparation before cooking)?',
            hint: "French for 'put in place' — get organized before you turn on the stove",
          },
          {
            answer: "The 'pinch grip' on a chef's knife means gripping the handle with three fingers while your thumb and index finger pinch this part of the blade for maximum control.",
            question: "What is the heel (or the base / bolster area of the blade)?",
            hint: "Your thumb and pointer finger grip the blade itself, just above the handle — it feels weird at first but gives you much more control",
          },
        ],
      },
    ],
  },

  {
    name: "SAFETY IN ACTION",
    emoji: "🩹",
    color: "#0f0a1a",
    accent: "#a855f7",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "If you accidentally cut yourself while using a knife, the first thing you should do is apply firm pressure with a clean cloth and do this.",
            question: "What is tell an adult (or call for help)?",
            hint: "Even a small cut needs adult attention — and don't be embarrassed, cuts happen!",
          },
          {
            answer: "When working in the kitchen, you should never leave a knife in a sink full of soapy water because of this hidden danger.",
            question: "What is you can't see the blade and might cut your hand reaching in?",
            hint: "A knife hiding under bubbles is a trap — wash it separately and put it away",
          },
          {
            answer: "The safest way to carry a knife while walking in the kitchen is with the blade pointing down at your side and this body part close to your body.",
            question: "What is your arm (held close, blade down, tip pointing at the floor)?",
            hint: "Walk carefully, blade down, arm at your side — and say 'knife behind' if passing others",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "In a professional kitchen, when walking behind someone while carrying a knife, you should say this phrase to warn them.",
            question: 'What is "behind" (or "knife behind" / "sharp behind")?',
            hint: "It warns the person not to turn around suddenly — communication prevents accidents",
          },
          {
            answer: "You should use a separate cutting board for raw meat and a different one for fruits and vegetables to prevent this food safety hazard.",
            question: "What is cross-contamination?",
            hint: "Bacteria from raw meat can make you very sick if it gets on ready-to-eat food",
          },
          {
            answer: "The correct way to wipe a knife blade clean is to wipe from the spine (top) toward the edge, keeping the sharp edge pointing away from this.",
            question: "What is your fingers (or your hand / body)?",
            hint: "Always wipe AWAY from the sharp edge, not toward it",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "When a knife starts to feel dull, it actually becomes more dangerous because the blade is more likely to do this during cutting.",
            question: "What is slip (or slide off the food)?",
            hint: "A dull blade doesn't grip the food — it skids across and can hit your fingers",
          },
          {
            answer: "Before using a knife in the kitchen, you should make sure your cutting board is stable by placing this underneath it to prevent sliding.",
            question: "What is a damp towel (or non-slip mat)?",
            hint: "A sliding cutting board + a sharp knife = a recipe for disaster",
          },
          {
            answer: "In food safety, the 'danger zone' for bacteria growth is between 40°F and this temperature — food should not sit in this range for more than 2 hours.",
            question: "What is 140°F?",
            hint: "Below 40 (fridge) or above 140 (cooking) — in between is where bacteria thrive",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The most common kitchen knife injury happens to this finger on the guide hand, usually because the cook isn't using the proper claw grip.",
            question: "What is the index finger (or fingertips)?",
            hint: "The finger closest to the blade — curl it back behind your knuckle!",
          },
          {
            answer: "When preparing food, you should wash your hands with soap and warm water for at least this many seconds — about the time it takes to sing 'Happy Birthday' twice.",
            question: "What is 20 seconds?",
            hint: "🎵 Happy Birthday 🎵 x 2 = clean hands",
          },
          {
            answer: "If you need to taste food while cooking, you should never use the same utensil twice without washing it. This practice is called avoiding this.",
            question: "What is double-dipping (or reusing a tasting spoon)?",
            hint: "Use a clean spoon every time you taste — no one wants your germs in the pot",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The Chef's Knife adventure ultimately teaches scouts that a knife is a tool, not a toy, and should always be treated with this.",
            question: "What is respect?",
            hint: "The same lesson as the Scout Law — a useful tool deserves careful handling",
          },
          {
            answer: "In professional kitchens, knife safety is so important that there's a saying: 'A falling knife has no ___.' This means you should never try to catch a dropped knife.",
            question: "What is handle?",
            hint: "When a knife falls, every part is dangerous — just get out of the way",
          },
          {
            answer: "Food-grade cutting boards come in different colors to prevent cross-contamination. In the standard color system, this color is used for raw poultry.",
            question: "What is yellow?",
            hint: "Yellow for chicken, red for raw meat, green for produce, blue for seafood, white for dairy/bread",
          },
        ],
      },
    ],
  },
];
