// Jeopardy question bank — Whittling (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scouting America Whittling Chip – https://www.scouting.org/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_WHITTLING = [
  {
    name: "KNIFE SAFETY",
    emoji: "🔪",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Before using a pocketknife, check that everyone is out of your safety this.",
            question: "What is circle?",
            hint: "Arm's length around you",
          },
          {
            answer: "Always cut in this direction.",
            question: "What is away from your body?",
            hint: "Away!",
          },
          {
            answer: "When you're not using it, a pocketknife should be this.",
            question: "What is closed?",
            hint: "Fold it",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "To check your safety circle, hold out your arm with the closed knife and do this.",
            question: "What is turn in a circle?",
            hint: "Spin slowly",
          },
          {
            answer: "A pocketknife is a tool, never a this.",
            question: "What is a toy (weapon)?",
            hint: "Not for play",
          },
          {
            answer: "Never do this with a knife.",
            question: "What is throw it (run with it)?",
            hint: "Never!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Hand a knife to someone with this part toward them.",
            question: "What is the handle?",
            hint: "Not the blade",
          },
          {
            answer: "A sharp knife is safer than a dull one because it doesn't do this.",
            question: "What is slip?",
            hint: "Needs less push",
          },
          {
            answer: "Never carry an open knife while doing this.",
            question: "What is walking (running)?",
            hint: "Close first",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The card that shows a Bear has earned the right to carry a pocketknife.",
            question: "What is the Whittling Chip?",
            hint: "Wallet card",
          },
          {
            answer: "Breaking a knife safety rule can cost you one of these on your card.",
            question: "What is a corner?",
            hint: "Snip!",
          },
          {
            answer: "A knife should be kept clean and this.",
            question: "What is dry?",
            hint: "No rust",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Saying \"thank you\" when someone hands you a knife tells them this.",
            question: "What is you have it (they can let go)?",
            hint: "Hand-off signal",
          },
          {
            answer: "Never use a knife on these that can hurt living things.",
            question: "What are trees (live plants)?",
            hint: "Dead wood only",
          },
          {
            answer: "Many packs say a knife can't be used near this.",
            question: "What is a campfire (fire)?",
            hint: "Hot blade",
          },
        ],
      },
    ],
  },
  {
    name: "KNIFE PARTS",
    emoji: "🔧",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The sharp metal part of a knife.",
            question: "What is the blade?",
            hint: "Cuts!",
          },
          {
            answer: "The part of a knife you hold.",
            question: "What is the handle?",
            hint: "Grip it",
          },
          {
            answer: "The sharp end of the blade.",
            question: "What is the point (tip)?",
            hint: "Pointy",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The sharp side of the blade.",
            question: "What is the edge?",
            hint: "Cutting side",
          },
          {
            answer: "The dull back side of the blade.",
            question: "What is the spine (back)?",
            hint: "Your back bone",
          },
          {
            answer: "A small notch on the blade you use to open it.",
            question: "What is the nail nick?",
            hint: "Fingernail",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The pin that the blade rotates on.",
            question: "What is the pivot (rivet)?",
            hint: "Spin point",
          },
          {
            answer: "A knife with a blade that folds into the handle.",
            question: "What is a pocketknife (folding knife)?",
            hint: "Pocket!",
          },
          {
            answer: "A knife that locks open so it won't close on your fingers.",
            question: "What is a locking blade?",
            hint: "Click!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A stone used to sharpen a knife.",
            question: "What is a sharpening stone (whetstone)?",
            hint: "Whet!",
          },
          {
            answer: "Knives are sharpened by holding the blade at this small angle.",
            question: "What is about 20 degrees?",
            hint: "Small slant",
          },
          {
            answer: "Oil on a pocketknife's pivot helps it do this.",
            question: "What is open smoothly?",
            hint: "Smooth",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The metal piece between the blade and handle on some knives.",
            question: "What is the bolster?",
            hint: "Supports",
          },
          {
            answer: "Stainless steel knives resist this.",
            question: "What is rust?",
            hint: "Orange flakes",
          },
          {
            answer: "A multi-tool knife famous for its red handle comes from this country.",
            question: "What is Switzerland?",
            hint: "Swiss Army!",
          },
        ],
      },
    ],
  },
  {
    name: "WHITTLING SKILLS",
    emoji: "🪵",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Carving wood by shaving off small pieces.",
            question: "What is whittling?",
            hint: "The adventure name!",
          },
          {
            answer: "A bar of this is great for practicing carving.",
            question: "What is soap?",
            hint: "Wash up",
          },
          {
            answer: "Carving should be done in this position.",
            question: "What is sitting down?",
            hint: "Stay seated",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Basswood is good for whittling because it is this.",
            question: "What is soft?",
            hint: "Easy to cut",
          },
          {
            answer: "Cutting with the grain of the wood makes this easier.",
            question: "What is carving?",
            hint: "Follow the lines",
          },
          {
            answer: "A cut that goes straight down to stop the next cut.",
            question: "What is a stop cut?",
            hint: "Stop!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Pushing the back of the blade with your thumb for small cuts is called this.",
            question: "What is the thumb push (lever cut)?",
            hint: "Thumb power",
          },
          {
            answer: "Taking off big pieces at once can make the knife do this.",
            question: "What is slip (get stuck)?",
            hint: "Small shavings",
          },
          {
            answer: "A whittled ring that holds your neckerchief in place.",
            question: "What is a neckerchief slide?",
            hint: "Slides on the scarf",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Wood shavings from whittling are also called this.",
            question: "What are chips?",
            hint: "Whittling ____",
          },
          {
            answer: "Wearing a glove on your non-knife hand protects it from this.",
            question: "What is a cut?",
            hint: "Safety glove",
          },
          {
            answer: "Drawing your design on the wood first is called this.",
            question: "What is sketching (marking)?",
            hint: "Pencil first",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Removing wood from a block to make a shape is called this kind of art.",
            question: "What is subtractive (carving)?",
            hint: "Take away",
          },
          {
            answer: "Cutting against the grain can make wood do this.",
            question: "What is split (tear)?",
            hint: "Crack!",
          },
          {
            answer: "After carving, you can smooth your project with this.",
            question: "What is sandpaper?",
            hint: "Rough paper",
          },
        ],
      },
    ],
  },
  {
    name: "CAMP TOOLS",
    emoji: "🏕️",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A pocketknife can be used to cut this at camp.",
            question: "What is rope (string)?",
            hint: "Tie it up!",
          },
          {
            answer: "Whittling should always be done with this person nearby.",
            question: "What is an adult?",
            hint: "Watching",
          },
          {
            answer: "You should cut away from your this.",
            question: "What is body (hands, legs)?",
            hint: "Away!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Whittling a stick for marshmallows makes a roasting this.",
            question: "What is stick?",
            hint: "Toast!",
          },
          {
            answer: "Wood that has fallen to the ground is called this.",
            question: "What is deadwood (deadfall)?",
            hint: "Already down",
          },
          {
            answer: "Leave No Trace says to whittle wood that is this.",
            question: "What is dead and down?",
            hint: "Not live trees",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A sharpened stick used to hold a tent down.",
            question: "What is a tent stake (peg)?",
            hint: "Pound it in",
          },
          {
            answer: "A pocketknife is part of what older Scouts carry in their Ten this.",
            question: "What is Essentials?",
            hint: "Ten!",
          },
          {
            answer: "The Bear Whittling adventure lets you earn this card.",
            question: "What is the Whittling Chip?",
            hint: "Wallet card",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "When you're done whittling, sweep up these.",
            question: "What are wood chips (shavings)?",
            hint: "Clean up!",
          },
          {
            answer: "Before putting it away, wipe your knife to keep it this.",
            question: "What is clean and dry?",
            hint: "No rust",
          },
          {
            answer: "A whittled hiking stick is called a walking this.",
            question: "What is staff (stick)?",
            hint: "Trail buddy",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Older Scouts earn the Totin' Chip to use knives, saws, and this.",
            question: "What are axes?",
            hint: "Chop!",
          },
          {
            answer: "Knife laws can be different in each this.",
            question: "What is state (place)?",
            hint: "Know the rules",
          },
          {
            answer: "The motto that reminds you to keep your knife sharp and safe.",
            question: "What is \"Be Prepared\"?",
            hint: "Scout motto",
          },
        ],
      },
    ],
  },
];
