// Jeopardy question bank — Balancing Bears (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   NASA Space Place — Center of Gravity – https://spaceplace.nasa.gov/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_BALANCING = [
  {
    name: "BALANCE BASICS",
    emoji: "⚖️",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Standing on one foot without falling shows good this.",
            question: "What is balance?",
            hint: "Steady!",
          },
          {
            answer: "A playground board where two kids go up and down.",
            question: "What is a seesaw (teeter-totter)?",
            hint: "See-saw!",
          },
          {
            answer: "Holding your arms out helps you do this on a balance beam.",
            question: "What is stay balanced?",
            hint: "Like airplane wings",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The point where an object balances perfectly is called its center of this.",
            question: "What is gravity (balance)?",
            hint: "Center of ____",
          },
          {
            answer: "The pointy spot that a seesaw rests on in the middle.",
            question: "What is a fulcrum (pivot)?",
            hint: "Starts with \"f\"",
          },
          {
            answer: "A scale with two pans that compares weights.",
            question: "What is a balance scale?",
            hint: "Justice holds one",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A seesaw is a simple machine called this.",
            question: "What is a lever?",
            hint: "Lift with it",
          },
          {
            answer: "To balance a heavy kid on a seesaw, a lighter kid should sit this way.",
            question: "What is farther from the middle?",
            hint: "Distance helps",
          },
          {
            answer: "If one side of a balance scale goes down, that side is this.",
            question: "What is heavier?",
            hint: "More weight",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A low, wide object is harder to tip over because its center of gravity is this.",
            question: "What is low?",
            hint: "Close to the ground",
          },
          {
            answer: "Inside your ear, this part helps you keep your balance.",
            question: "What is the inner ear?",
            hint: "Deep inside",
          },
          {
            answer: "A tightrope walker carries a long pole to help with this.",
            question: "What is balance?",
            hint: "Spread out weight",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Spinning around makes you dizzy because the fluid in this keeps moving.",
            question: "What is your inner ear?",
            hint: "Sloshy",
          },
          {
            answer: "The force that pulls everything down toward the Earth.",
            question: "What is gravity?",
            hint: "Apples fall!",
          },
          {
            answer: "Bending your knees helps you balance because it lowers your this.",
            question: "What is center of gravity?",
            hint: "Get low!",
          },
        ],
      },
    ],
  },
  {
    name: "MOBILES & SCULPTURES",
    emoji: "🎐",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A hanging art piece with parts that balance and spin.",
            question: "What is a mobile?",
            hint: "Hangs over a baby crib",
          },
          {
            answer: "The artist famous for making big colorful mobiles.",
            question: "Who is Alexander Calder?",
            hint: "Starts with \"Cal\"",
          },
          {
            answer: "To hang a mobile, you need string and something to hang it from, like this.",
            question: "What is a hook (stick, dowel)?",
            hint: "Something sturdy",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "If a mobile tips to one side, you move the string toward this side.",
            question: "What is the heavier side?",
            hint: "Slide toward the weight",
          },
          {
            answer: "Stacking rocks so they balance is called rock this.",
            question: "What is balancing (stacking)?",
            hint: "Careful!",
          },
          {
            answer: "A mobile has to be balanced at every one of these.",
            question: "What is level (arm)?",
            hint: "Each branch",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Sticks or straws used as the arms of a mobile are called these.",
            question: "What are crossbars (arms)?",
            hint: "Across",
          },
          {
            answer: "Air moving through a room makes a mobile do this.",
            question: "What is spin (move)?",
            hint: "Whirl!",
          },
          {
            answer: "Paper clips can be added to a mobile to change this.",
            question: "What is the weight (balance)?",
            hint: "Tiny weights",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A sculpture that seems to float is balanced on its point of this.",
            question: "What is balance (center of gravity)?",
            hint: "Just right",
          },
          {
            answer: "A balancing bird toy balances on its beak because of weights in these.",
            question: "What are its wings?",
            hint: "Tips of the wings",
          },
          {
            answer: "A \"balance point\" can be found by resting a ruler on this.",
            question: "What is your finger?",
            hint: "Slide it",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A mobile balances when the weight times distance on each side is this.",
            question: "What is equal?",
            hint: "Same on both sides",
          },
          {
            answer: "A ruler with a heavy clip on one end balances closer to this end.",
            question: "What is the heavy end?",
            hint: "Weight pulls the point",
          },
          {
            answer: "A wobbly tower can be made steadier by adding a wider this.",
            question: "What is base?",
            hint: "The bottom",
          },
        ],
      },
    ],
  },
  {
    name: "BALANCING GAMES",
    emoji: "🧘",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A block-stacking game where you pull pieces out without the tower falling.",
            question: "What is Jenga?",
            hint: "Don't topple it!",
          },
          {
            answer: "Walking with a book on your head is a test of this.",
            question: "What is balance (posture)?",
            hint: "Stand tall",
          },
          {
            answer: "A yoga pose where you stand on one foot like a bird.",
            question: "What is tree pose (flamingo)?",
            hint: "Like a tree",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A circus performer who balances and walks on a rope.",
            question: "What is a tightrope walker?",
            hint: "High wire",
          },
          {
            answer: "Spinning a plate on a stick is a trick of this.",
            question: "What is balance?",
            hint: "Whirl!",
          },
          {
            answer: "A board on a roller that you stand on to practice balance.",
            question: "What is a balance board?",
            hint: "Wobble",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Riding a bike stays balanced mostly because you keep doing this.",
            question: "What is moving (pedaling)?",
            hint: "Stop and you tip!",
          },
          {
            answer: "A sport where you balance on a board and ride waves.",
            question: "What is surfing?",
            hint: "Hang ten",
          },
          {
            answer: "A sport where you glide on a board with wheels.",
            question: "What is skateboarding?",
            hint: "Kick, push",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Gymnasts use this narrow beam, about 4 inches wide.",
            question: "What is the balance beam?",
            hint: "Narrow!",
          },
          {
            answer: "Riding a unicycle is hard because it has only this many wheels.",
            question: "What is one?",
            hint: "Uni = one",
          },
          {
            answer: "Balancing a feather on your finger is easier than balancing a pencil because of its this.",
            question: "What is weight?",
            hint: "Light!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Closing your eyes makes balancing harder because your brain uses this sense.",
            question: "What is sight (vision)?",
            hint: "Eyes help balance",
          },
          {
            answer: "A \"balance challenge\" where you hop, freeze, and hold still tests this kind of control.",
            question: "What is body control (balance)?",
            hint: "Freeze!",
          },
          {
            answer: "A balance scale works like a seesaw because both are this simple machine.",
            question: "What is a lever?",
            hint: "Same as a seesaw",
          },
        ],
      },
    ],
  },
  {
    name: "EQUAL & FAIR",
    emoji: "🪨",
    color: "#0f0a1a",
    accent: "#a78bfa",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "When both sides of a balance scale are at the same height, they are this.",
            question: "What is equal (balanced)?",
            hint: "Even",
          },
          {
            answer: "A kilogram and a pound are both measures of this.",
            question: "What is weight (mass)?",
            hint: "How heavy",
          },
          {
            answer: "Which is heavier: a pound of feathers or a pound of rocks?",
            question: "What is neither (they weigh the same)?",
            hint: "Trick question!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A balanced meal has foods from many of these.",
            question: "What are food groups?",
            hint: "Fruits, veggies...",
          },
          {
            answer: "Balancing screen time with outdoor time is good for your this.",
            question: "What is health?",
            hint: "Healthy",
          },
          {
            answer: "This many ounces make a pound.",
            question: "What is 16?",
            hint: "Sixteen",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A balance scale can compare two objects without knowing this number.",
            question: "What is the weight?",
            hint: "Just which is heavier",
          },
          {
            answer: "If you add 2 blocks to one side of a balanced scale, you add this many to the other side.",
            question: "What is 2?",
            hint: "Same amount",
          },
          {
            answer: "A seesaw with the same-weight kids at the same distance does this.",
            question: "What is balance?",
            hint: "Even!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A ship is designed to stay upright in water because heavy weight called ballast is put here.",
            question: "What is the bottom?",
            hint: "Down low",
          },
          {
            answer: "A fair team has players balanced by this.",
            question: "What is skill?",
            hint: "Even teams",
          },
          {
            answer: "If an equation is like a balance, 3 + 2 balances with this number.",
            question: "What is 5?",
            hint: "Add them up",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Moving the fulcrum of a seesaw closer to a heavy kid makes it easier for a light kid to do this.",
            question: "What is lift them?",
            hint: "Leverage",
          },
          {
            answer: "A crane lifting heavy loads has a heavy weight on the back called this.",
            question: "What is a counterweight?",
            hint: "Counter + weight",
          },
          {
            answer: "When all the forces on an object cancel out, it's said to be in this.",
            question: "What is equilibrium (balance)?",
            hint: "Big word for balance",
          },
        ],
      },
    ],
  },
];
