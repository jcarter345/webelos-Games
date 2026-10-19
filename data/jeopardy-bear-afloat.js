// Jeopardy question bank — Bears Afloat (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scouting America Safety Afloat – https://www.scouting.org/health-and-safety/gss/gss02/
//   U.S. Coast Guard Boating Safety – https://uscgboating.org/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_AFLOAT = [
  {
    name: "LIFE JACKETS",
    emoji: "🦺",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A jacket that keeps you floating in water.",
            question: "What is a life jacket (PFD)?",
            hint: "It floats!",
          },
          {
            answer: "You must wear a life jacket any time you're in one of these.",
            question: "What is a boat (canoe, kayak)?",
            hint: "On the water",
          },
          {
            answer: "A life jacket should be this snug — not loose.",
            question: "What is snug (tight)?",
            hint: "Hug fit",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "PFD stands for \"personal flotation\" this.",
            question: "What is device?",
            hint: "P-F-D",
          },
          {
            answer: "To check fit, an adult pulls up on the shoulders. It shouldn't come up past this.",
            question: "What is your chin (ears)?",
            hint: "Not over your face",
          },
          {
            answer: "Life jackets should be approved by the U.S. Coast this.",
            question: "What is Guard?",
            hint: "Coast ____",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Bright colors on a life jacket help rescuers do this.",
            question: "What is see you?",
            hint: "Easy to spot",
          },
          {
            answer: "You should always fasten every one of these on a life jacket.",
            question: "What is buckle (zipper, strap)?",
            hint: "Click!",
          },
          {
            answer: "A life jacket that's too big can slip off over this.",
            question: "What is your head?",
            hint: "Too loose",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Kids should wear a life jacket that fits their size and this.",
            question: "What is weight?",
            hint: "Check the label",
          },
          {
            answer: "A cushion thrown to someone in the water is this type of PFD.",
            question: "What is a throwable device?",
            hint: "Toss it",
          },
          {
            answer: "A life jacket with a collar that keeps your head up has this support.",
            question: "What is head (neck) support?",
            hint: "Floats your head",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Safety Afloat is the Scouting America plan for this.",
            question: "What is safe boating?",
            hint: "Afloat = on water",
          },
          {
            answer: "Life jackets should be checked for rips, rust, and this before use.",
            question: "What is mildew (damage)?",
            hint: "Inspect it",
          },
          {
            answer: "In cold water, a life jacket helps you keep this.",
            question: "What is body heat (stay warm)?",
            hint: "Brrr",
          },
        ],
      },
    ],
  },
  {
    name: "BOATS",
    emoji: "🛶",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A narrow boat you paddle with a single-blade paddle.",
            question: "What is a canoe?",
            hint: "Starts with \"c\"",
          },
          {
            answer: "A small boat you sit in and paddle with a double-blade paddle.",
            question: "What is a kayak?",
            hint: "Spelled the same backwards!",
          },
          {
            answer: "A boat powered by the wind.",
            question: "What is a sailboat?",
            hint: "Sail!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The front of a boat.",
            question: "What is the bow?",
            hint: "Rhymes with \"cow\"",
          },
          {
            answer: "The back of a boat.",
            question: "What is the stern?",
            hint: "Sounds like \"turn\"",
          },
          {
            answer: "A boat you row with two long oars.",
            question: "What is a rowboat?",
            hint: "Row row row",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The left side of a boat, facing forward.",
            question: "What is port?",
            hint: "Port and left both have 4 letters",
          },
          {
            answer: "The right side of a boat, facing forward.",
            question: "What is starboard?",
            hint: "Star!",
          },
          {
            answer: "A flat stick with a blade used to move a canoe.",
            question: "What is a paddle?",
            hint: "Not an oar",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A floating dock or raft you can swim to is called this.",
            question: "What is a float (platform)?",
            hint: "Floats",
          },
          {
            answer: "An inflatable boat filled with air.",
            question: "What is a raft?",
            hint: "Bouncy",
          },
          {
            answer: "A boat that tips over is said to have done this.",
            question: "What is capsize?",
            hint: "Flip!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "When getting into a canoe, you stay low and step into this part.",
            question: "What is the center?",
            hint: "Middle",
          },
          {
            answer: "The person in the back of a canoe usually does this.",
            question: "What is steer?",
            hint: "Driver",
          },
          {
            answer: "A board you stand on and paddle.",
            question: "What is a stand-up paddleboard (SUP)?",
            hint: "Stand up!",
          },
        ],
      },
    ],
  },
  {
    name: "PADDLING",
    emoji: "🌊",
    color: "#0a1a1a",
    accent: "#14b8a6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Pushing the paddle back through the water makes the boat go this way.",
            question: "What is forward?",
            hint: "Go!",
          },
          {
            answer: "When paddling, you should sit still and not do this.",
            question: "What is stand up (rock the boat)?",
            hint: "Stay seated",
          },
          {
            answer: "Paddlers in a canoe should paddle on these sides.",
            question: "What are opposite sides?",
            hint: "One left, one right",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A paddle stroke that moves the boat straight ahead.",
            question: "What is the forward stroke?",
            hint: "Basic stroke",
          },
          {
            answer: "A paddle stroke that slows or stops the boat.",
            question: "What is the backstroke (back paddle)?",
            hint: "Backwards",
          },
          {
            answer: "Wind and waves make paddling this.",
            question: "What is harder?",
            hint: "Push back",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Working together in a canoe needs good this.",
            question: "What is teamwork (communication)?",
            hint: "Talk together",
          },
          {
            answer: "A J-stroke helps the person in back do this.",
            question: "What is keep the canoe straight (steer)?",
            hint: "Shaped like a letter",
          },
          {
            answer: "Paddling in a circle is a sign that you need to do this.",
            question: "What is switch sides (steer)?",
            hint: "Fix it!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A draw stroke pulls the boat this way.",
            question: "What is sideways (toward the paddle)?",
            hint: "Pull!",
          },
          {
            answer: "If your boat tips over, you should stay with this.",
            question: "What is the boat?",
            hint: "It floats!",
          },
          {
            answer: "Before going out, check this to see if it will be windy or stormy.",
            question: "What is the weather?",
            hint: "Look at the sky",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Paddling close to shore is safer because help is this.",
            question: "What is nearby (close)?",
            hint: "Not far",
          },
          {
            answer: "A sweep stroke makes a wide arc to do this.",
            question: "What is turn the boat?",
            hint: "Sweep!",
          },
          {
            answer: "In a canoe, your top hand goes on this part of the paddle.",
            question: "What is the grip (top)?",
            hint: "T-shape",
          },
        ],
      },
    ],
  },
  {
    name: "WATER RULES",
    emoji: "🛟",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Never go boating without one of these.",
            question: "What is a buddy (adult)?",
            hint: "Buddy system",
          },
          {
            answer: "If you hear thunder, you should do this.",
            question: "What is get off the water?",
            hint: "Go to shore!",
          },
          {
            answer: "A grown-up who watches swimmers and boaters.",
            question: "What is a lifeguard?",
            hint: "Guards lives",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Telling someone your plan for going boating is called a float this.",
            question: "What is plan?",
            hint: "Where and when",
          },
          {
            answer: "Scouts must pass this to go boating in deep water.",
            question: "What is a swim test?",
            hint: "Show your skills",
          },
          {
            answer: "Before boating, Scouts are put into groups by their swim this.",
            question: "What is ability (level)?",
            hint: "Swimmer, beginner...",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Boats should never have more people than this says.",
            question: "What is the capacity plate (limit)?",
            hint: "Max people",
          },
          {
            answer: "Before you go, check that the boat isn't this.",
            question: "What is leaking (damaged)?",
            hint: "Look for holes",
          },
          {
            answer: "Cold water can make you very tired and cold, a danger called this.",
            question: "What is hypothermia?",
            hint: "Too cold",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A boat should carry a whistle to do this.",
            question: "What is signal for help?",
            hint: "Tweet!",
          },
          {
            answer: "Under Safety Afloat, everyone in a boat must be watched by these.",
            question: "What are adults (qualified supervisors)?",
            hint: "Grown-ups watching",
          },
          {
            answer: "Swimmers, beginners, and nonswimmers each have their own swim this.",
            question: "What is area?",
            hint: "Swim zones",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The safest place to get in and out of a canoe.",
            question: "What is the dock (shore)?",
            hint: "Steady place",
          },
          {
            answer: "Boats should stay away from these that can pull you over.",
            question: "What are dams (waterfalls)?",
            hint: "Danger!",
          },
          {
            answer: "When passing another boat head-on, both should turn to this side.",
            question: "What is the right (starboard)?",
            hint: "Like driving a car",
          },
        ],
      },
    ],
  },
];
