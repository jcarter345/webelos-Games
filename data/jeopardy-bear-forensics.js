// Jeopardy question bank — Forensics (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   FBI — Fingerprints – https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/fingerprints-and-other-biometrics
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_FORENSICS = [
  {
    name: "DETECTIVE BASICS",
    emoji: "🔍",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Using science to help solve crimes is called this.",
            question: "What is forensics?",
            hint: "The adventure name!",
          },
          {
            answer: "A person who solves mysteries and crimes.",
            question: "What is a detective?",
            hint: "Sherlock!",
          },
          {
            answer: "A tool that makes small things look bigger.",
            question: "What is a magnifying glass?",
            hint: "Zoom in",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A piece of information that helps solve a mystery.",
            question: "What is a clue?",
            hint: "Look for it!",
          },
          {
            answer: "Objects found at a crime scene are called this.",
            question: "What is evidence?",
            hint: "Proof",
          },
          {
            answer: "This famous fictional detective lived at 221B Baker Street.",
            question: "Who is Sherlock Holmes?",
            hint: "Elementary!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Investigators wear these so they don't leave their own prints.",
            question: "What are gloves?",
            hint: "Hands covered",
          },
          {
            answer: "Yellow tape keeps people out of this.",
            question: "What is a crime scene?",
            hint: "Do not cross",
          },
          {
            answer: "A person who saw what happened.",
            question: "What is a witness?",
            hint: "They saw it",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Taking pictures of a scene before touching anything helps do this.",
            question: "What is record evidence?",
            hint: "Snap!",
          },
          {
            answer: "Evidence is put into these and labeled.",
            question: "What are bags (evidence bags)?",
            hint: "Seal it",
          },
          {
            answer: "Forensic scientists work in this.",
            question: "What is a lab (laboratory)?",
            hint: "Test tubes",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Hair, fibers, and dirt that move from one place to another are called this kind of evidence.",
            question: "What is trace evidence?",
            hint: "Tiny traces",
          },
          {
            answer: "A scientist who studies bugs to help solve crimes.",
            question: "What is a forensic entomologist?",
            hint: "Bugs!",
          },
          {
            answer: "Making a careful drawing of a scene is called this.",
            question: "What is sketching (mapping) the scene?",
            hint: "Draw it",
          },
        ],
      },
    ],
  },
  {
    name: "FINGERPRINTS",
    emoji: "👆",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The swirly lines on your fingertips.",
            question: "What are fingerprints?",
            hint: "Look closely!",
          },
          {
            answer: "No two people have the same these — not even twins.",
            question: "What are fingerprints?",
            hint: "One of a kind",
          },
          {
            answer: "To take your fingerprint, you press your finger onto this.",
            question: "What is an ink pad?",
            hint: "Stamp!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The most common fingerprint pattern, shaped like a hook.",
            question: "What is a loop?",
            hint: "Loop-de-loop",
          },
          {
            answer: "A fingerprint pattern shaped like a circle or spiral.",
            question: "What is a whorl?",
            hint: "Whirlpool",
          },
          {
            answer: "A fingerprint pattern shaped like a hill or wave.",
            question: "What is an arch?",
            hint: "Like a bridge",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "About 60 to 65 percent of people have this fingerprint pattern.",
            question: "What is a loop?",
            hint: "Most common",
          },
          {
            answer: "Detectives dust for prints with this fine material.",
            question: "What is powder?",
            hint: "Dusty",
          },
          {
            answer: "The raised lines of a fingerprint are called these.",
            question: "What are ridges?",
            hint: "Bumps",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Hidden fingerprints you can't see without powder are called this.",
            question: "What are latent prints?",
            hint: "Hidden",
          },
          {
            answer: "Clear tape is used to do this to a dusted print.",
            question: "What is lift it?",
            hint: "Pick it up",
          },
          {
            answer: "The least common fingerprint pattern.",
            question: "What is an arch?",
            hint: "Rare!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The FBI keeps millions of fingerprints in this computer system.",
            question: "What is a database (NGI/IAFIS)?",
            hint: "Big computer",
          },
          {
            answer: "Your fingerprints form before you are this.",
            question: "What is born?",
            hint: "In the womb",
          },
          {
            answer: "A pencil scribble and clear tape can be used to do this.",
            question: "What is take your own fingerprint?",
            hint: "DIY!",
          },
        ],
      },
    ],
  },
  {
    name: "MYSTERY POWDERS",
    emoji: "🧂",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Salt, sugar, baking soda, and cornstarch are all white these.",
            question: "What are powders?",
            hint: "They look alike",
          },
          {
            answer: "You should never do this to a mystery powder.",
            question: "What is taste it?",
            hint: "Not safe!",
          },
          {
            answer: "A powder that makes food sweet.",
            question: "What is sugar?",
            hint: "Sweet!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This powder fizzes when you add vinegar.",
            question: "What is baking soda?",
            hint: "Fizz!",
          },
          {
            answer: "This powder turns into a gooey \"oobleck\" when mixed with water.",
            question: "What is cornstarch?",
            hint: "Squishy",
          },
          {
            answer: "This powder has cube-shaped crystals under a magnifying glass.",
            question: "What is salt?",
            hint: "Cubes!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Iodine turns this powder dark blue or black.",
            question: "What is cornstarch?",
            hint: "Starch test",
          },
          {
            answer: "When dropped in water, salt and sugar both do this.",
            question: "What is dissolve?",
            hint: "Disappear",
          },
          {
            answer: "Cornstarch feels this way when you rub it between your fingers.",
            question: "What is squeaky (silky)?",
            hint: "Smooth",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Heating sugar makes it turn brown and become this.",
            question: "What is caramel?",
            hint: "Yummy",
          },
          {
            answer: "Testing a powder with water, vinegar, and iodine is called a series of these.",
            question: "What are tests (experiments)?",
            hint: "Science!",
          },
          {
            answer: "Writing down what each powder does is called keeping these.",
            question: "What are notes (observations, a data table)?",
            hint: "Write it down",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Using known samples to compare to mystery ones is called using these.",
            question: "What are controls (known samples)?",
            hint: "Compare!",
          },
          {
            answer: "Baking soda fizzes in vinegar because it's a base and vinegar is this.",
            question: "What is an acid?",
            hint: "Sour",
          },
          {
            answer: "Wearing these protects your eyes when doing powder tests.",
            question: "What are safety goggles?",
            hint: "Safety first",
          },
        ],
      },
    ],
  },
  {
    name: "CRIME LAB",
    emoji: "🧪",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A crime scene detective uses this light to see things in the dark.",
            question: "What is a flashlight (UV light)?",
            hint: "Shine it",
          },
          {
            answer: "Shoe prints left in mud can be matched to these.",
            question: "What are shoes?",
            hint: "Tread",
          },
          {
            answer: "Handwriting can be compared to find out who wrote this.",
            question: "What is a note (letter)?",
            hint: "Signature",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Separating ink colors on a coffee filter is called this.",
            question: "What is chromatography?",
            hint: "Color writing",
          },
          {
            answer: "Animal tracks can tell you what kind of animal was this.",
            question: "What is there?",
            hint: "Who passed by?",
          },
          {
            answer: "Tire marks can tell detectives the type of this.",
            question: "What is a car (vehicle)?",
            hint: "Vroom",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Plaster can be poured into a footprint to make this.",
            question: "What is a cast?",
            hint: "Like a cast on a broken arm",
          },
          {
            answer: "The instructions in every cell that make you unique.",
            question: "What is DNA?",
            hint: "Three letters",
          },
          {
            answer: "Detectives compare hair under this tool.",
            question: "What is a microscope?",
            hint: "Super zoom",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Black markers can be made of many ink colors, which chromatography shows by doing this.",
            question: "What is spreading them apart (separating)?",
            hint: "Rainbow!",
          },
          {
            answer: "Bite marks in food can be matched to these.",
            question: "What are teeth?",
            hint: "Chomp",
          },
          {
            answer: "A record of who handled evidence is called a chain of this.",
            question: "What is custody?",
            hint: "Linked",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Glowing chemicals that show hidden blood.",
            question: "What is luminol?",
            hint: "Glow!",
          },
          {
            answer: "A scientist who studies teeth to identify people.",
            question: "What is a forensic odontologist (dentist)?",
            hint: "Teeth!",
          },
          {
            answer: "Fibers from clothes can show where a person has been because they do this.",
            question: "What is transfer (stick to things)?",
            hint: "Fuzz moves!",
          },
        ],
      },
    ],
  },
];
