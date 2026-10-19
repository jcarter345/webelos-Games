// Jeopardy question bank — Marble Madness (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Smithsonian — History of Marbles – https://www.si.edu/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_MARBLES = [
  {
    name: "MARBLE GAMES",
    emoji: "🔵",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Small glass balls used in games.",
            question: "What are marbles?",
            hint: "Clink!",
          },
          {
            answer: "The big marble you flick to hit others.",
            question: "What is the shooter?",
            hint: "Bigger one",
          },
          {
            answer: "The circle drawn on the ground for a marble game.",
            question: "What is the ring?",
            hint: "Round",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A classic marble game where you knock marbles out of a circle.",
            question: "What is Ringer?",
            hint: "Ring!",
          },
          {
            answer: "Marbles are flicked using this finger.",
            question: "What is the thumb?",
            hint: "Thumbs up!",
          },
          {
            answer: "Playing \"for keeps\" means you keep the marbles you do this.",
            question: "What is win (knock out)?",
            hint: "Winner keeps",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Keeping one of these on the ground while shooting is the rule.",
            question: "What is a knuckle?",
            hint: "Knuckles down!",
          },
          {
            answer: "\"Knuckles down\" means you put your knuckles here.",
            question: "What is the ground?",
            hint: "Down low",
          },
          {
            answer: "Playing \"for fair\" means everyone gets this back at the end.",
            question: "What are their marbles?",
            hint: "Fair!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A marble game where you shoot into a small hole.",
            question: "What is Pot (Holes)?",
            hint: "Hole in one",
          },
          {
            answer: "A shiny marble made of steel instead of glass.",
            question: "What is a steelie?",
            hint: "Steel + ie",
          },
          {
            answer: "A marble with a colorful twist inside that looks like a cat's eye.",
            question: "What is a cat's eye?",
            hint: "Meow!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A big tournament held every year for marble players in the U.S.",
            question: "What is the National Marbles Tournament?",
            hint: "In Wildwood, New Jersey",
          },
          {
            answer: "Marbles were made from clay and this long ago.",
            question: "What is stone?",
            hint: "Rock!",
          },
          {
            answer: "An old word for a marble made of agate stone.",
            question: "What is an aggie?",
            hint: "Aggie",
          },
        ],
      },
    ],
  },
  {
    name: "RAMPS & RUNS",
    emoji: "🎢",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A track that marbles roll down.",
            question: "What is a marble run?",
            hint: "Run!",
          },
          {
            answer: "A slanted surface.",
            question: "What is a ramp?",
            hint: "Slide down",
          },
          {
            answer: "This force pulls the marble down the ramp.",
            question: "What is gravity?",
            hint: "Down!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A steeper ramp makes a marble go this.",
            question: "What is faster?",
            hint: "Zoom!",
          },
          {
            answer: "Paper towel tubes can be used to make these.",
            question: "What are tunnels (tubes)?",
            hint: "Through!",
          },
          {
            answer: "A marble that stops rolling has run out of this.",
            question: "What is energy (speed)?",
            hint: "Out of gas",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A ramp is this kind of simple machine.",
            question: "What is an inclined plane?",
            hint: "Slanted plane",
          },
          {
            answer: "A marble going around a curve wants to fly off in this direction.",
            question: "What is straight (outward)?",
            hint: "Keeps going",
          },
          {
            answer: "Rough surfaces slow marbles because of this force.",
            question: "What is friction?",
            hint: "Rubbing",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A marble at the top of a ramp has stored energy called this.",
            question: "What is potential energy?",
            hint: "Ready to go",
          },
          {
            answer: "A rolling marble has this kind of energy.",
            question: "What is kinetic energy?",
            hint: "Moving energy",
          },
          {
            answer: "A loop-de-loop works when the marble has enough of this.",
            question: "What is speed?",
            hint: "Fast enough!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Testing your marble run and making it better is part of this design process.",
            question: "What is engineering?",
            hint: "Build, test, fix",
          },
          {
            answer: "A marble run that makes one thing knock into another in a chain.",
            question: "What is a Rube Goldberg machine?",
            hint: "Chain reaction",
          },
          {
            answer: "Timing marbles with a stopwatch lets you measure this.",
            question: "What is speed (time)?",
            hint: "Tick tock",
          },
        ],
      },
    ],
  },
  {
    name: "MARBLE SCIENCE",
    emoji: "🔬",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Most marbles are made of this.",
            question: "What is glass?",
            hint: "Clear and hard",
          },
          {
            answer: "Marbles are this shape.",
            question: "What is a sphere (ball)?",
            hint: "Round",
          },
          {
            answer: "Glass is made by melting this.",
            question: "What is sand?",
            hint: "Beach!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "When one marble hits another, it passes on its this.",
            question: "What is energy (motion)?",
            hint: "Bump!",
          },
          {
            answer: "Newton's Cradle uses swinging metal balls to show this.",
            question: "What is energy transfer?",
            hint: "Click clack",
          },
          {
            answer: "A marble in a glass of water sinks because it's this.",
            question: "What is heavier (denser) than water?",
            hint: "Plop",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "When a moving marble hits a still one head-on, the moving one often does this.",
            question: "What is stop?",
            hint: "Freeze!",
          },
          {
            answer: "A heavier marble hitting a lighter one makes the light one go this.",
            question: "What is faster (farther)?",
            hint: "Zoom",
          },
          {
            answer: "Glass marbles are made by cutting hot glass rods with these.",
            question: "What are shears (scissors)?",
            hint: "Snip",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Sir Isaac Newton wrote laws about this.",
            question: "What is motion?",
            hint: "Moving stuff",
          },
          {
            answer: "Newton's first law says a rolling marble keeps rolling unless this stops it.",
            question: "What is a force (friction)?",
            hint: "Push or pull",
          },
          {
            answer: "When marbles collide, you hear a sound because energy turns into this.",
            question: "What is sound?",
            hint: "Clack!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Marbles roll farther on a hard floor than on carpet because of less of this.",
            question: "What is friction?",
            hint: "Smooth floor",
          },
          {
            answer: "Momentum depends on mass and this.",
            question: "What is speed (velocity)?",
            hint: "How fast",
          },
          {
            answer: "Hot glass is shaped into marbles by rolling it in these.",
            question: "What are molds (rollers)?",
            hint: "Spin it round",
          },
        ],
      },
    ],
  },
  {
    name: "MARBLE HISTORY",
    emoji: "📜",
    color: "#0f0a1a",
    accent: "#a78bfa",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Kids have played marbles for thousands of these.",
            question: "What are years?",
            hint: "Ancient!",
          },
          {
            answer: "Marbles have been found in the tombs of this ancient land with pyramids.",
            question: "What is Egypt?",
            hint: "Pharaohs",
          },
          {
            answer: "The marbles you try to knock out of the ring are called these, not shooters.",
            question: "What are target marbles (mibs)?",
            hint: "What you aim at",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The first machine-made marbles in America came from this state.",
            question: "What is Ohio (Akron)?",
            hint: "Buckeye State",
          },
          {
            answer: "Marbles were once made of this soft material from the ground.",
            question: "What is clay?",
            hint: "Squishy",
          },
          {
            answer: "Collecting marbles is this kind of activity.",
            question: "What is a hobby?",
            hint: "Fun to do",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A small bag used to hold marbles.",
            question: "What is a marble bag (pouch)?",
            hint: "Drawstring",
          },
          {
            answer: "Losing your marbles is a saying that means this.",
            question: "What is acting silly (going crazy)?",
            hint: "Lost it!",
          },
          {
            answer: "Very old marbles can be worth this.",
            question: "What is a lot of money?",
            hint: "Collectors pay",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Large marbles are called these.",
            question: "What are boulders (shooters)?",
            hint: "Big rocks!",
          },
          {
            answer: "Marbles made by hand before machines are called this.",
            question: "What are handmade marbles?",
            hint: "By hand",
          },
          {
            answer: "Clear marbles with no color are called these.",
            question: "What are clearies?",
            hint: "Clear!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The game \"Chinese checkers\" uses marbles on a board shaped like this.",
            question: "What is a star?",
            hint: "Six points",
          },
          {
            answer: "The game \"Hungry Hungry Hippos\" uses marbles and hippos that do this.",
            question: "What is chomp (eat)?",
            hint: "Munch!",
          },
          {
            answer: "West Virginia is famous for making these.",
            question: "What are marbles?",
            hint: "Marble capital",
          },
        ],
      },
    ],
  },
];
