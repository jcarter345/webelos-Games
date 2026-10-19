// Jeopardy question bank — Race Time (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scouting America Pinewood Derby – https://www.scouting.org/programs/cub-scouts/pinewood-derby/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_RACE_TIME = [
  {
    name: "PINEWOOD DERBY",
    emoji: "🏎️",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The famous Cub Scout race with small wooden cars.",
            question: "What is the Pinewood Derby?",
            hint: "Vroom!",
          },
          {
            answer: "Pinewood Derby cars are made from a block of this wood.",
            question: "What is pine?",
            hint: "Pine-wood",
          },
          {
            answer: "Pinewood cars roll down this.",
            question: "What is a track?",
            hint: "Slanted",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A Pinewood Derby car usually can weigh no more than this.",
            question: "What is 5 ounces?",
            hint: "Five",
          },
          {
            answer: "Pinewood cars have this many wheels.",
            question: "What is four?",
            hint: "Like a real car",
          },
          {
            answer: "The race starts when this is dropped at the top of the track.",
            question: "What is the starting gate (pin)?",
            hint: "Go!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Adding weights to the back of the car helps it do this.",
            question: "What is go faster?",
            hint: "Stored energy",
          },
          {
            answer: "A shiny metal rod that the wheels spin on.",
            question: "What is an axle?",
            hint: "Ax-le",
          },
          {
            answer: "Powdered graphite helps wheels spin by reducing this.",
            question: "What is friction?",
            hint: "Slippery",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A sleek, pointy car shape cuts through air, which is called this.",
            question: "What is aerodynamic?",
            hint: "Like a jet",
          },
          {
            answer: "The person who checks cars before the race.",
            question: "What is the inspector (judge)?",
            hint: "Rules check",
          },
          {
            answer: "Polishing axles makes them this.",
            question: "What is smooth?",
            hint: "Shiny",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Pinewood Derby started in 1953 in this state.",
            question: "What is California?",
            hint: "Manhattan Beach",
          },
          {
            answer: "Cars race in these, so each car runs in every lane.",
            question: "What are heats?",
            hint: "Rounds",
          },
          {
            answer: "The part of the car that holds the axles.",
            question: "What is the axle slot (car body)?",
            hint: "Grooves",
          },
        ],
      },
    ],
  },
  {
    name: "SPEED SCIENCE",
    emoji: "⚡",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The force that pulls cars down the track.",
            question: "What is gravity?",
            hint: "Down!",
          },
          {
            answer: "The force that slows things down when they rub.",
            question: "What is friction?",
            hint: "Rub rub",
          },
          {
            answer: "A car that goes faster has more of this.",
            question: "What is speed?",
            hint: "Zoom!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Air pushing against a moving car is called air this.",
            question: "What is resistance (drag)?",
            hint: "Push back",
          },
          {
            answer: "A smooth, low car has less of this.",
            question: "What is drag (wind resistance)?",
            hint: "Sleek",
          },
          {
            answer: "A heavier car rolling downhill has more of this.",
            question: "What is momentum (energy)?",
            hint: "Hard to stop",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Energy stored at the top of a ramp.",
            question: "What is potential energy?",
            hint: "Waiting",
          },
          {
            answer: "Energy of a moving car.",
            question: "What is kinetic energy?",
            hint: "Moving",
          },
          {
            answer: "Wheels that wobble lose this.",
            question: "What is speed (energy)?",
            hint: "Wobbly",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Speed is how far you go divided by this.",
            question: "What is time?",
            hint: "Distance ÷ ?",
          },
          {
            answer: "Testing one change at a time is called a fair this.",
            question: "What is test?",
            hint: "Science!",
          },
          {
            answer: "A ramp's height and length decide how much this the car gets.",
            question: "What is speed (energy)?",
            hint: "Steeper = ?",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The scientist who described gravity after an apple fell.",
            question: "Who is Isaac Newton?",
            hint: "Apple!",
          },
          {
            answer: "Speeding up is called this.",
            question: "What is acceleration?",
            hint: "Gas pedal",
          },
          {
            answer: "Raising one front wheel so it doesn't touch the track reduces this.",
            question: "What is friction?",
            hint: "Three-wheeler trick",
          },
        ],
      },
    ],
  },
  {
    name: "RACE CARS",
    emoji: "🏁",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The flag waved when a race is won.",
            question: "What is the checkered flag?",
            hint: "Black and white",
          },
          {
            answer: "The place where race cars get new tires and fuel.",
            question: "What is the pit (pit stop)?",
            hint: "Pit crew",
          },
          {
            answer: "A famous car race held every year in Indianapolis.",
            question: "What is the Indy 500?",
            hint: "500 miles",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The green flag means this.",
            question: "What is go (start)?",
            hint: "Green!",
          },
          {
            answer: "The yellow flag means this.",
            question: "What is slow down (caution)?",
            hint: "Careful",
          },
          {
            answer: "A team that fixes cars quickly during a race.",
            question: "What is a pit crew?",
            hint: "Fast hands",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The red flag in racing means this.",
            question: "What is stop the race?",
            hint: "Red!",
          },
          {
            answer: "NASCAR race cars are a type of this.",
            question: "What are stock cars?",
            hint: "Stock!",
          },
          {
            answer: "A soapbox derby car has no this.",
            question: "What is an engine (motor)?",
            hint: "Gravity powered",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Race car drivers wear these to protect their heads.",
            question: "What are helmets?",
            hint: "Head safety",
          },
          {
            answer: "Wings on race cars push them down to help them do this.",
            question: "What is grip the road?",
            hint: "Stick!",
          },
          {
            answer: "A race car's tires have no grooves so they grip more, called this.",
            question: "What are slicks?",
            hint: "Smooth",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The Soap Box Derby finals are held every year in this Ohio city.",
            question: "What is Akron?",
            hint: "Rubber capital",
          },
          {
            answer: "One trip around the racetrack.",
            question: "What is a lap?",
            hint: "Round and round",
          },
          {
            answer: "The fastest qualifier starts in this spot at the front.",
            question: "What is pole position?",
            hint: "Pole!",
          },
        ],
      },
    ],
  },
  {
    name: "BUILDING A RACER",
    emoji: "🛠️",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Before cutting your car, you draw this on paper.",
            question: "What is a design (plan)?",
            hint: "Sketch it",
          },
          {
            answer: "Sanding the car makes it this.",
            question: "What is smooth?",
            hint: "No bumps",
          },
          {
            answer: "You decorate your car with this.",
            question: "What is paint (stickers)?",
            hint: "Colorful",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Cars made of cardboard boxes are raced in a box this.",
            question: "What is a box car (cardboard derby)?",
            hint: "Box!",
          },
          {
            answer: "A car powered by a stretched rubber band.",
            question: "What is a rubber band car?",
            hint: "Snap!",
          },
          {
            answer: "A car powered by air from a balloon.",
            question: "What is a balloon car?",
            hint: "Whoosh",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A balloon car moves forward because air rushes out this way.",
            question: "What is backward?",
            hint: "Opposite!",
          },
          {
            answer: "Weights are best placed this far back on a Pinewood car.",
            question: "What is near the back (about 1 inch in front of the rear axle)?",
            hint: "Rear!",
          },
          {
            answer: "Straws can be used as these on a homemade car.",
            question: "What are axle holders?",
            hint: "Tubes",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A car powered by sunlight.",
            question: "What is a solar car?",
            hint: "Sun!",
          },
          {
            answer: "A good sport says this to other racers whether they win or lose.",
            question: "What is \"good race\" (congratulations)?",
            hint: "Be kind",
          },
          {
            answer: "Most Pinewood Derby rules say a car can be no longer than this many inches.",
            question: "What is 7?",
            hint: "Less than a ruler",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Newton's third law: every action has an equal and opposite this.",
            question: "What is reaction?",
            hint: "Balloon car!",
          },
          {
            answer: "A car that goes straight has wheels lined up correctly, called this.",
            question: "What is alignment?",
            hint: "Line up!",
          },
          {
            answer: "A car that rolls to the side instead of straight is said to do this.",
            question: "What is drift (pull)?",
            hint: "Swerve",
          },
        ],
      },
    ],
  },
];
