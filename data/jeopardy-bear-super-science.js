// Jeopardy question bank — Super Science (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America — Super Science – https://www.scouting.org/cub-scout-adventures/super-science/
//   NASA Space Place – https://spaceplace.nasa.gov/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_SUPER_SCIENCE = [
  {
    name: "STATIC ELECTRICITY",
    emoji: "⚡",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Rubbing a balloon on your hair makes this kind of electricity.",
            question: "What is static electricity?",
            hint: "Zap!",
          },
          {
            answer: "Static electricity can make your hair do this.",
            question: "What is stand up?",
            hint: "Spiky!",
          },
          {
            answer: "Touching a doorknob after walking on carpet can give you this.",
            question: "What is a shock (zap)?",
            hint: "Ouch!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A rubbed balloon can stick to this.",
            question: "What is a wall?",
            hint: "Sticky!",
          },
          {
            answer: "Tiny particles with a negative charge.",
            question: "What are electrons?",
            hint: "E-lectrons",
          },
          {
            answer: "Opposite charges do this.",
            question: "What is attract?",
            hint: "Pull together",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Like charges do this.",
            question: "What is repel?",
            hint: "Push apart",
          },
          {
            answer: "Static electricity is stronger when the air is this.",
            question: "What is dry?",
            hint: "Winter!",
          },
          {
            answer: "A big spark of static electricity in the sky.",
            question: "What is lightning?",
            hint: "Flash!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A rubbed balloon can make this bend from a faucet.",
            question: "What is a stream of water?",
            hint: "Bend it!",
          },
          {
            answer: "A rubbed balloon can pick up tiny pieces of this.",
            question: "What is paper (cereal)?",
            hint: "Confetti!",
          },
          {
            answer: "Charges that build up and stay in one place are called this.",
            question: "What is static?",
            hint: "Not moving",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A machine with a metal ball that makes your hair stand up.",
            question: "What is a Van de Graaff generator?",
            hint: "Science museum!",
          },
          {
            answer: "When electrons move from your hair to a balloon, your hair becomes this charge.",
            question: "What is positive?",
            hint: "Plus!",
          },
          {
            answer: "The scientist who flew a kite in a storm to study electricity.",
            question: "Who is Benjamin Franklin?",
            hint: "On the $100 bill",
          },
        ],
      },
    ],
  },
  {
    name: "SINK OR FLOAT",
    emoji: "🛟",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A rock dropped in water does this.",
            question: "What is sink?",
            hint: "Plop!",
          },
          {
            answer: "A rubber duck in water does this.",
            question: "What is float?",
            hint: "Quack",
          },
          {
            answer: "Things that float are lighter than the same amount of this.",
            question: "What is water?",
            hint: "Splash",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "How tightly packed the stuff in an object is.",
            question: "What is density?",
            hint: "Dense",
          },
          {
            answer: "The upward push of water on objects.",
            question: "What is buoyancy?",
            hint: "Buoy!",
          },
          {
            answer: "An orange with its peel does this in water.",
            question: "What is float?",
            hint: "Peel is full of air",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "An orange without its peel does this.",
            question: "What is sink?",
            hint: "No air pockets",
          },
          {
            answer: "A ball of clay sinks, but shaped into this, it floats.",
            question: "What is a boat (bowl)?",
            hint: "Shape matters",
          },
          {
            answer: "Adding salt to water makes eggs do this.",
            question: "What is float?",
            hint: "Salty sea",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A huge metal ship floats because its shape pushes away lots of this.",
            question: "What is water?",
            hint: "Displace",
          },
          {
            answer: "The Dead Sea is so salty that people do this easily.",
            question: "What is float?",
            hint: "Super salty",
          },
          {
            answer: "A can of diet soda floats while regular soda sinks because regular has more of this.",
            question: "What is sugar?",
            hint: "Sweet = heavy",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The Greek scientist who shouted \"Eureka!\" in his bathtub.",
            question: "Who is Archimedes?",
            hint: "Starts with \"Arch\"",
          },
          {
            answer: "Ice floats because it is less this than water.",
            question: "What is dense?",
            hint: "Frozen",
          },
          {
            answer: "Guessing what will happen before an experiment is called this.",
            question: "What is a hypothesis (prediction)?",
            hint: "Educated guess",
          },
        ],
      },
    ],
  },
  {
    name: "COLOR MORPHING",
    emoji: "🌈",
    color: "#1a0a1a",
    accent: "#ec4899",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Mixing blue and yellow makes this color.",
            question: "What is green?",
            hint: "Grass!",
          },
          {
            answer: "Mixing red and yellow makes this color.",
            question: "What is orange?",
            hint: "A fruit",
          },
          {
            answer: "Mixing red and blue makes this color.",
            question: "What is purple?",
            hint: "Grapes!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Red, yellow, and blue are the primary these.",
            question: "What are colors?",
            hint: "First colors",
          },
          {
            answer: "Red cabbage juice changes color when you add this sour liquid.",
            question: "What is vinegar (lemon juice)?",
            hint: "Sour!",
          },
          {
            answer: "A liquid that changes color to show acids and bases is called this.",
            question: "What is an indicator?",
            hint: "It indicates!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Red cabbage juice turns this color with vinegar.",
            question: "What is pink (red)?",
            hint: "Pretty!",
          },
          {
            answer: "Red cabbage juice turns this color with baking soda.",
            question: "What is green (blue)?",
            hint: "Opposite!",
          },
          {
            answer: "Lemon juice is this — sour.",
            question: "What is an acid?",
            hint: "Sour",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Soap and baking soda are these — the opposite of acids.",
            question: "What are bases?",
            hint: "Bitter",
          },
          {
            answer: "The scale that measures acids and bases.",
            question: "What is pH?",
            hint: "p-H",
          },
          {
            answer: "A rainbow forms when sunlight passes through these.",
            question: "What are raindrops?",
            hint: "After rain",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Pure water is right in the middle of the pH scale at this number.",
            question: "What is 7?",
            hint: "Neutral",
          },
          {
            answer: "A glass prism splits white light into these.",
            question: "What are colors (the rainbow)?",
            hint: "ROY G BIV",
          },
          {
            answer: "Milk, food coloring, and dish soap make colors swirl because soap breaks up this.",
            question: "What is fat?",
            hint: "Swirl!",
          },
        ],
      },
    ],
  },
  {
    name: "COLOR LAYERING",
    emoji: "🧪",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Oil and water don't do this.",
            question: "What is mix?",
            hint: "They separate",
          },
          {
            answer: "Oil floats on top of this.",
            question: "What is water?",
            hint: "Layers!",
          },
          {
            answer: "Honey is this — it sinks to the bottom.",
            question: "What is heavy (dense)?",
            hint: "Thick!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Stacking liquids by how heavy they are makes a density this.",
            question: "What is column (tower)?",
            hint: "Layers!",
          },
          {
            answer: "Water with more sugar is this compared to plain water.",
            question: "What is denser (heavier)?",
            hint: "Sweet & heavy",
          },
          {
            answer: "A lava lamp works because blobs of wax do this.",
            question: "What is rise and fall?",
            hint: "Bloop",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Pouring liquids slowly over a spoon keeps them from doing this.",
            question: "What is mixing?",
            hint: "Slow pour",
          },
          {
            answer: "Of honey, water, and oil, this one goes on the bottom.",
            question: "What is honey?",
            hint: "Thickest",
          },
          {
            answer: "Adding food coloring helps you see these.",
            question: "What are the layers?",
            hint: "Colorful!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Dish soap goes between honey and this.",
            question: "What is water?",
            hint: "Middle layer",
          },
          {
            answer: "Rubbing alcohol floats on top of this.",
            question: "What is water (oil)?",
            hint: "Light liquid",
          },
          {
            answer: "Shaking oil and water together makes this temporary mix.",
            question: "What is an emulsion?",
            hint: "Salad dressing!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A rainbow in a jar uses water with different amounts of this.",
            question: "What is sugar (salt)?",
            hint: "Sweet stripes",
          },
          {
            answer: "Scientists write down what they see during experiments. These are called this.",
            question: "What are observations?",
            hint: "Observe!",
          },
          {
            answer: "Testing one change at a time in an experiment is controlling these.",
            question: "What are variables?",
            hint: "Things that change",
          },
        ],
      },
    ],
  },
];
