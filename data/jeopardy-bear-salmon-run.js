// Jeopardy question bank — Salmon Run (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scouting America Safe Swim Defense – https://www.scouting.org/health-and-safety/gss/gss02/
//   NOAA Fisheries — Salmon – https://www.fisheries.noaa.gov/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_SALMON_RUN = [
  {
    name: "SWIM SKILLS",
    emoji: "🏊",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Lying on your back in the water without swimming.",
            question: "What is floating?",
            hint: "Like a starfish",
          },
          {
            answer: "Kicking your legs while holding onto the wall or a board.",
            question: "What is kicking (flutter kick)?",
            hint: "Splash!",
          },
          {
            answer: "Blowing these underwater through your nose.",
            question: "What are bubbles?",
            hint: "Blub blub",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A swim stroke where you lie on your back.",
            question: "What is the backstroke?",
            hint: "Back!",
          },
          {
            answer: "The most common fast stroke, with arms reaching forward.",
            question: "What is freestyle (front crawl)?",
            hint: "Free!",
          },
          {
            answer: "Treading water means staying in one place with your head this.",
            question: "What is above the water?",
            hint: "Up!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A stroke that looks like a frog kick.",
            question: "What is the breaststroke?",
            hint: "Ribbit",
          },
          {
            answer: "A swimmer's test: swim, then float, to show your swim this.",
            question: "What is ability (classification)?",
            hint: "Swimmer, beginner...",
          },
          {
            answer: "Swim goggles protect these.",
            question: "What are your eyes?",
            hint: "See underwater",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Scouts who can swim 100 yards and float are called this classification.",
            question: "What is swimmer?",
            hint: "Top level",
          },
          {
            answer: "Scouts who can swim 25 feet and back are called this classification.",
            question: "What is beginner?",
            hint: "Getting there",
          },
          {
            answer: "Scouts who haven't passed a swim test are called this.",
            question: "What is nonswimmer?",
            hint: "Not yet!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Jumping into water feet first should only be done where it's this deep.",
            question: "What is deep enough (checked by an adult)?",
            hint: "Check first!",
          },
          {
            answer: "Never dive headfirst into water that's this.",
            question: "What is shallow (unknown depth)?",
            hint: "Ouch!",
          },
          {
            answer: "Holding your breath and floating face down is called this float.",
            question: "What is a jellyfish (dead man's) float?",
            hint: "Jelly...",
          },
        ],
      },
    ],
  },
  {
    name: "SAFE SWIM",
    emoji: "🛟",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Every swimmer has one of these partners.",
            question: "What is a buddy?",
            hint: "Buddy system",
          },
          {
            answer: "A person who watches swimmers to keep them safe.",
            question: "What is a lifeguard?",
            hint: "Whistle!",
          },
          {
            answer: "When the lifeguard calls \"buddy check,\" you do this.",
            question: "What is hold up your buddy's hand?",
            hint: "Raise them up!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The Scouting America rules for safe swimming are called Safe Swim this.",
            question: "What is Defense?",
            hint: "Swim ____",
          },
          {
            answer: "Swimmers stay in areas marked by these floating lines.",
            question: "What are ropes (lines, buoys)?",
            hint: "Boundaries",
          },
          {
            answer: "A person who stands on shore and watches all swimmers.",
            question: "What is a lookout?",
            hint: "Look!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The safest place to swim is where there's this.",
            question: "What is a lifeguard?",
            hint: "Guarded area",
          },
          {
            answer: "If you hear thunder, you should do this.",
            question: "What is get out of the water?",
            hint: "Lightning!",
          },
          {
            answer: "Buddies should stay within this distance of each other.",
            question: "What is arm's length (close together)?",
            hint: "Close!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A \"buddy board\" or tag system helps lifeguards know this.",
            question: "What is who is in the water?",
            hint: "Count everyone",
          },
          {
            answer: "\"Wait an hour after eating before you swim\" is mostly this — not really true.",
            question: "What is a myth?",
            hint: "Just an old saying",
          },
          {
            answer: "Wearing sunscreen while swimming protects you from this.",
            question: "What is sunburn?",
            hint: "Ouch!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Strong currents that pull swimmers away from shore.",
            question: "What are rip currents?",
            hint: "Swim sideways out",
          },
          {
            answer: "If caught in a rip current, swim this way.",
            question: "What is parallel to shore (sideways)?",
            hint: "Not straight in",
          },
          {
            answer: "Safe Swim Defense says swimmers should be checked by this before swimming.",
            question: "What is a health check (adult)?",
            hint: "Feeling OK?",
          },
        ],
      },
    ],
  },
  {
    name: "REACH, THROW, DON'T GO",
    emoji: "🪢",
    color: "#0a1a1a",
    accent: "#14b8a6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "To help someone in the water, first try to do this from shore.",
            question: "What is reach?",
            hint: "Arm or pole",
          },
          {
            answer: "If you can't reach, do this with something that floats.",
            question: "What is throw?",
            hint: "Toss!",
          },
          {
            answer: "Kids should never do this to rescue someone.",
            question: "What is go in the water?",
            hint: "Don't go!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A pole used to reach swimmers.",
            question: "What is a reaching pole (shepherd's crook)?",
            hint: "Long stick",
          },
          {
            answer: "A ring that floats, thrown to swimmers.",
            question: "What is a ring buoy (life ring)?",
            hint: "Donut!",
          },
          {
            answer: "A bag with rope inside that you throw.",
            question: "What is a throw bag?",
            hint: "Throw!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "While helping, lie down on the dock so you don't do this.",
            question: "What is fall in?",
            hint: "Stay low",
          },
          {
            answer: "Before trying a rescue, always yell for this.",
            question: "What is help (an adult)?",
            hint: "Shout!",
          },
          {
            answer: "A towel or shirt can be used to do this.",
            question: "What is reach?",
            hint: "Grab on!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "If the swimmer is far away, the next step after throw is this, using a boat.",
            question: "What is row?",
            hint: "Row row",
          },
          {
            answer: "Calling this number brings emergency help.",
            question: "What is 911?",
            hint: "Nine-one-one",
          },
          {
            answer: "A panicking swimmer can pull a rescuer under, which is why we don't do this.",
            question: "What is go (in the water)?",
            hint: "Too dangerous",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A cooler or empty jug can be thrown because it does this.",
            question: "What is float?",
            hint: "Buoyant",
          },
          {
            answer: "The order of rescue is Reach, Throw, Row, and this.",
            question: "What is Go (with training)?",
            hint: "Last step",
          },
          {
            answer: "Throwing a rope past the swimmer and pulling it in helps them do this.",
            question: "What is grab it?",
            hint: "Catch!",
          },
        ],
      },
    ],
  },
  {
    name: "SALMON FACTS",
    emoji: "🐟",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Salmon are born in this kind of water.",
            question: "What is fresh water (rivers, streams)?",
            hint: "Not salty",
          },
          {
            answer: "Salmon grow up in this.",
            question: "What is the ocean?",
            hint: "Salty",
          },
          {
            answer: "Salmon swim up these to lay eggs.",
            question: "What are rivers (streams)?",
            hint: "Upstream!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Swimming upstream to lay eggs is called the salmon this.",
            question: "What is run?",
            hint: "The adventure name!",
          },
          {
            answer: "Salmon leap over these on their way upstream.",
            question: "What are waterfalls (rapids)?",
            hint: "Jump!",
          },
          {
            answer: "This big animal catches salmon jumping up waterfalls.",
            question: "What is a bear?",
            hint: "Grrr — that's us!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Salmon find their home stream using their sense of this.",
            question: "What is smell?",
            hint: "Sniff",
          },
          {
            answer: "Baby salmon are called this.",
            question: "What are fry?",
            hint: "Small fry",
          },
          {
            answer: "Ladders that help fish get around dams.",
            question: "What are fish ladders?",
            hint: "Steps for fish",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Salmon lay eggs in a gravel nest called this.",
            question: "What is a redd?",
            hint: "Sounds like a color",
          },
          {
            answer: "The pink color of salmon comes from eating these tiny shrimp-like animals.",
            question: "What is krill?",
            hint: "Tiny!",
          },
          {
            answer: "A salmon's journey back home can be this many miles.",
            question: "What is hundreds (even over 1,000)?",
            hint: "Long trip!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Fish that live in salt water but lay eggs in fresh water are called this.",
            question: "What is anadromous?",
            hint: "Ana-drom-ous",
          },
          {
            answer: "This type of salmon is the biggest, also called king salmon.",
            question: "What is Chinook?",
            hint: "King!",
          },
          {
            answer: "Swimming against the flow of water is called swimming this.",
            question: "What is upstream?",
            hint: "Up!",
          },
        ],
      },
    ],
  },
];
