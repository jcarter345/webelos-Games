// Jeopardy question bank — Range Sports — Archery, BB Guns & Slingshot (Bear Electives)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scouting America Shooting Sports – https://www.scouting.org/outdoor-programs/shooting-sports/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_RANGE = [
  {
    name: "RANGE RULES",
    emoji: "🛑",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The adult in charge of a shooting range.",
            question: "What is the range safety officer (RSO)?",
            hint: "R-S-O",
          },
          {
            answer: "Always follow these from the range officer.",
            question: "What are commands (instructions)?",
            hint: "Listen!",
          },
          {
            answer: "You should wear these to protect your eyes on the range.",
            question: "What are safety glasses?",
            hint: "Eye shields",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Shooting sports for Cub Scouts happen only at this kind of place.",
            question: "What is a council range (camp)?",
            hint: "Not your backyard",
          },
          {
            answer: "When anyone yells \"cease fire,\" you do this.",
            question: "What is stop shooting immediately?",
            hint: "Freeze!",
          },
          {
            answer: "Only aim at these.",
            question: "What are targets?",
            hint: "Bullseye",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The line you stand behind while shooting.",
            question: "What is the firing (shooting) line?",
            hint: "Line up!",
          },
          {
            answer: "Everyone waits behind this line when not shooting.",
            question: "What is the waiting (ready) line?",
            hint: "Behind",
          },
          {
            answer: "Never walk forward on the range until the officer says it's this.",
            question: "What is safe (clear)?",
            hint: "All clear",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Running on the range is never allowed because you could do this.",
            question: "What is trip (cause an accident)?",
            hint: "Walk!",
          },
          {
            answer: "Hearing protection is worn on ranges where this is loud.",
            question: "What is shooting (noise)?",
            hint: "Earplugs",
          },
          {
            answer: "Anyone can call this if they see something unsafe.",
            question: "What is \"cease fire\"?",
            hint: "Stop!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Shooting sports are fun but are taught as a lesson in this.",
            question: "What is safety (responsibility)?",
            hint: "Safety first!",
          },
          {
            answer: "Cub Scouts can only do archery, BB guns, and slingshots at these events.",
            question: "What are council or district events (day camp)?",
            hint: "Organized events",
          },
          {
            answer: "A safety rule: never point at anything you don't want to do this to.",
            question: "What is shoot (hit)?",
            hint: "Think first",
          },
        ],
      },
    ],
  },
  {
    name: "ARCHERY",
    emoji: "🏹",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Archery uses a bow and these.",
            question: "What are arrows?",
            hint: "Pointy",
          },
          {
            answer: "The center of the target.",
            question: "What is the bullseye?",
            hint: "Yellow!",
          },
          {
            answer: "The string on a bow is pulled back to do this.",
            question: "What is shoot (draw)?",
            hint: "Pull back",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Two whistle blasts mean archers do this.",
            question: "What is go to the shooting line?",
            hint: "Two = step up",
          },
          {
            answer: "One whistle blast means this.",
            question: "What is begin shooting?",
            hint: "One = shoot",
          },
          {
            answer: "Three whistle blasts mean this.",
            question: "What is go get (retrieve) your arrows?",
            hint: "Three = fetch",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Five or more whistle blasts mean this.",
            question: "What is stop (cease fire) right away?",
            hint: "Emergency!",
          },
          {
            answer: "The notch at the end of an arrow that clips onto the string.",
            question: "What is the nock?",
            hint: "Snap on",
          },
          {
            answer: "Feathers or plastic fins on an arrow.",
            question: "What are fletchings (vanes)?",
            hint: "Help it fly straight",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Putting an arrow on the bow is called this.",
            question: "What is nocking?",
            hint: "Nock it",
          },
          {
            answer: "A guard worn on the arm that holds the bow.",
            question: "What is an arm guard?",
            hint: "Protects your arm",
          },
          {
            answer: "Never \"dry fire\" a bow, meaning shooting it without this.",
            question: "What is an arrow?",
            hint: "Can break the bow",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A bag that holds arrows.",
            question: "What is a quiver?",
            hint: "Shake!",
          },
          {
            answer: "The bullseye on an archery target is this color.",
            question: "What is gold (yellow)?",
            hint: "Shiny",
          },
          {
            answer: "Pulling arrows from the target, stand to the side so no one gets hit by this end.",
            question: "What is the back (nock end)?",
            hint: "Watch out!",
          },
        ],
      },
    ],
  },
  {
    name: "BB GUNS",
    emoji: "🎯",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The first safety rule: always point the muzzle in this direction.",
            question: "What is a safe direction (downrange)?",
            hint: "Away from people",
          },
          {
            answer: "The end of the barrel where the BB comes out.",
            question: "What is the muzzle?",
            hint: "Front end",
          },
          {
            answer: "Keep your finger off this until you're ready to shoot.",
            question: "What is the trigger?",
            hint: "Off until ready",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Treat every BB gun as if it is this.",
            question: "What is loaded?",
            hint: "Always!",
          },
          {
            answer: "A switch that keeps a BB gun from firing.",
            question: "What is the safety?",
            hint: "Click on",
          },
          {
            answer: "The direction toward the targets is called this.",
            question: "What is downrange?",
            hint: "Down there",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "You should be sure of your target and what is this.",
            question: "What is behind it?",
            hint: "Backstop",
          },
          {
            answer: "A BB gun should be carried with the muzzle pointed this way.",
            question: "What is up or down (safe direction)?",
            hint: "Never at people",
          },
          {
            answer: "Shooting sports teach these three things: safety, responsibility, and this.",
            question: "What is marksmanship (skill)?",
            hint: "Aim!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Lining up the front and rear sights is called sight this.",
            question: "What is alignment?",
            hint: "Line up",
          },
          {
            answer: "Taking a breath and slowly letting it out helps you do this.",
            question: "What is hold steady?",
            hint: "Calm",
          },
          {
            answer: "A BB gun should be stored this way.",
            question: "What is unloaded (locked up)?",
            hint: "Safe",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Squeezing the trigger slowly is called trigger this.",
            question: "What is control (squeeze)?",
            hint: "Gentle",
          },
          {
            answer: "A BB can bounce back off hard surfaces, called this.",
            question: "What is a ricochet?",
            hint: "Bounce!",
          },
          {
            answer: "Shooting positions include standing, kneeling, and this.",
            question: "What is prone (lying down)?",
            hint: "Belly down",
          },
        ],
      },
    ],
  },
  {
    name: "SLINGSHOT",
    emoji: "🪀",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A Y-shaped tool with rubber bands that shoots small objects.",
            question: "What is a slingshot?",
            hint: "Y!",
          },
          {
            answer: "The stretchy part of a slingshot.",
            question: "What are bands (rubber bands)?",
            hint: "Stretch!",
          },
          {
            answer: "Slingshots should only be aimed at these.",
            question: "What are targets?",
            hint: "Not people",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The small object a slingshot shoots.",
            question: "What is ammo (a ball)?",
            hint: "Shoot it",
          },
          {
            answer: "The pouch holds the ammo before you do this.",
            question: "What is let go (release)?",
            hint: "Snap!",
          },
          {
            answer: "Slingshots are never aimed at people or these.",
            question: "What are animals?",
            hint: "Be kind",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Before shooting, check that the bands aren't this.",
            question: "What is torn (cracked)?",
            hint: "Snap!",
          },
          {
            answer: "Safety glasses protect you if a band does this.",
            question: "What is break (snap back)?",
            hint: "Ouch!",
          },
          {
            answer: "The Y-shaped part of a slingshot.",
            question: "What is the frame (fork)?",
            hint: "Handle",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Pulling the bands back is called this.",
            question: "What is drawing?",
            hint: "Pull!",
          },
          {
            answer: "A slingshot ball that misses a target should land against this.",
            question: "What is a backstop?",
            hint: "Catches it",
          },
          {
            answer: "You shouldn't pick up ammo until the range is this.",
            question: "What is clear (safe)?",
            hint: "All clear",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A slingshot is powered by energy stored in the stretched bands. This is called this kind of energy.",
            question: "What is elastic (potential) energy?",
            hint: "Stretch!",
          },
          {
            answer: "Slingshot bands are usually made of this stretchy material.",
            question: "What is rubber (latex)?",
            hint: "Like a balloon",
          },
          {
            answer: "Slingshots have been used for hunting for thousands of these.",
            question: "What are years?",
            hint: "Long ago",
          },
        ],
      },
    ],
  },
];
