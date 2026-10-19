// Jeopardy question bank — Baloo the Builder (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scouting America Guide to Safe Scouting — Tool Use – https://www.scouting.org/health-and-safety/gss/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_BUILDER = [
  {
    name: "TOOLS",
    emoji: "🔨",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The tool you use to pound nails.",
            question: "What is a hammer?",
            hint: "Bang bang!",
          },
          {
            answer: "The tool that cuts wood with a back-and-forth motion.",
            question: "What is a saw?",
            hint: "Teeth on a blade",
          },
          {
            answer: "The tool that turns screws.",
            question: "What is a screwdriver?",
            hint: "Twist it",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A screwdriver with a plus-shaped tip.",
            question: "What is a Phillips screwdriver?",
            hint: "Plus sign",
          },
          {
            answer: "A screwdriver with a flat tip.",
            question: "What is a flathead (slotted) screwdriver?",
            hint: "Flat!",
          },
          {
            answer: "A tool that holds wood still while you work.",
            question: "What is a clamp (vise)?",
            hint: "Squeeze",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Paper that is rough and makes wood smooth.",
            question: "What is sandpaper?",
            hint: "Sand + paper",
          },
          {
            answer: "A tool that measures how long something is.",
            question: "What is a tape measure (ruler)?",
            hint: "Inches!",
          },
          {
            answer: "A tool with a bubble that tells if something is flat.",
            question: "What is a level?",
            hint: "Center the bubble",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A tool that makes holes in wood.",
            question: "What is a drill?",
            hint: "Spin",
          },
          {
            answer: "A small saw for cutting curves, used by many Cub Scouts.",
            question: "What is a coping saw?",
            hint: "Curvy cuts",
          },
          {
            answer: "A square tool used to draw straight 90-degree lines.",
            question: "What is a carpenter's square (speed square)?",
            hint: "Right angles",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The claw on the back of a hammer is used to do this.",
            question: "What is pull out nails?",
            hint: "Backwards",
          },
          {
            answer: "Sandpaper with a high number, like 220, is this.",
            question: "What is fine (smooth)?",
            hint: "High = smooth",
          },
          {
            answer: "Holes drilled before putting in screws are called these.",
            question: "What are pilot holes?",
            hint: "Like a pilot leading",
          },
        ],
      },
    ],
  },
  {
    name: "TOOL SAFETY",
    emoji: "🥽",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "You should wear these to protect your eyes when building.",
            question: "What are safety glasses (goggles)?",
            hint: "Eye shields",
          },
          {
            answer: "You should only use tools with one of these watching.",
            question: "What is an adult?",
            hint: "Supervision!",
          },
          {
            answer: "After you're done with tools, you should do this.",
            question: "What is put them away (clean up)?",
            hint: "Neat!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Long hair should be tied back so it doesn't get caught in this.",
            question: "What is a tool (machine)?",
            hint: "Safety!",
          },
          {
            answer: "Always cut away from this.",
            question: "What is your body?",
            hint: "Away from you",
          },
          {
            answer: "Loose sleeves and jewelry are dangerous around these.",
            question: "What are spinning tools (drills, saws)?",
            hint: "Can grab",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A sharp tool should be carried with the point facing this way.",
            question: "What is down?",
            hint: "Toward the ground",
          },
          {
            answer: "When hammering, hold the nail near the top and start with these.",
            question: "What are light taps?",
            hint: "Gentle first",
          },
          {
            answer: "Wearing closed-toe shoes protects you from dropped tools and these.",
            question: "What are nails (sharp things)?",
            hint: "Ouch!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Clamping your wood keeps your hands away from this part of a saw.",
            question: "What is the blade?",
            hint: "Sharp part",
          },
          {
            answer: "Pulling a saw on the first strokes, without pushing hard, helps start this.",
            question: "What is the cut (groove)?",
            hint: "Kerf!",
          },
          {
            answer: "A messy work area is dangerous because you can do this.",
            question: "What is trip (lose tools)?",
            hint: "Clean as you go",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Wearing gloves helps prevent these from rough wood.",
            question: "What are splinters?",
            hint: "Tiny wood pieces",
          },
          {
            answer: "When you hand someone a tool, give them this end.",
            question: "What is the handle?",
            hint: "Not the sharp part",
          },
          {
            answer: "Dust from sanding can bother your lungs, so you might wear this.",
            question: "What is a dust mask?",
            hint: "Over your nose",
          },
        ],
      },
    ],
  },
  {
    name: "WOOD & BUILDING",
    emoji: "🪵",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Wood used for building is called this.",
            question: "What is lumber?",
            hint: "Sounds like \"lumberjack\"",
          },
          {
            answer: "Small pointy metal pieces you hammer into wood.",
            question: "What are nails?",
            hint: "Bang!",
          },
          {
            answer: "Metal pieces with threads that you twist into wood.",
            question: "What are screws?",
            hint: "Twisty",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The lines you see on a piece of wood.",
            question: "What is the grain?",
            hint: "Like stripes",
          },
          {
            answer: "Wood glue works best when you do this to the pieces while it dries.",
            question: "What is clamp (press) them?",
            hint: "Squeeze",
          },
          {
            answer: "A soft, light wood often used for models.",
            question: "What is balsa?",
            hint: "Very light!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Wood from oak and maple trees is this kind of wood.",
            question: "What is hardwood?",
            hint: "Hard!",
          },
          {
            answer: "Wood from pine trees is this kind of wood.",
            question: "What is softwood?",
            hint: "Soft!",
          },
          {
            answer: "A plan or drawing that shows how to build something.",
            question: "What is a blueprint (plan)?",
            hint: "Blue + print",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Measuring carefully before cutting follows this saying: \"Measure twice, cut ____.\"",
            question: "What is once?",
            hint: "Don't waste wood",
          },
          {
            answer: "A paint or stain that protects wood is called this.",
            question: "What is a finish?",
            hint: "The last step",
          },
          {
            answer: "A box for birds to live in that Cub Scouts often build.",
            question: "What is a birdhouse?",
            hint: "Tweet",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A strong joint where the end of one board fits into a slot in another.",
            question: "What is a dado (or mortise and tenon)?",
            hint: "Woodworking joint",
          },
          {
            answer: "Wood cut from a tree is dried so it doesn't do this.",
            question: "What is warp (shrink, crack)?",
            hint: "Bend out of shape",
          },
          {
            answer: "Plywood is made from thin layers of wood glued with the grain going this way.",
            question: "What is crisscross (alternating directions)?",
            hint: "Makes it strong",
          },
        ],
      },
    ],
  },
  {
    name: "PROJECTS",
    emoji: "🏗️",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Building a race car out of a pine block is part of this Cub Scout race.",
            question: "What is the Pinewood Derby?",
            hint: "Vroom",
          },
          {
            answer: "A feeder lets you watch these animals eat.",
            question: "What are birds?",
            hint: "Tweet tweet",
          },
          {
            answer: "A box with a lid for keeping treasures.",
            question: "What is a toy (treasure) box?",
            hint: "Lock it up!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Before you start building, you gather all your these.",
            question: "What are materials (supplies)?",
            hint: "Wood, nails...",
          },
          {
            answer: "A \"simple machine\" with a ramp shape.",
            question: "What is an inclined plane?",
            hint: "Slanted",
          },
          {
            answer: "Fixing something that's broken is called this.",
            question: "What is repairing?",
            hint: "Fix it!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Checking that each step is done right before going on is called this.",
            question: "What is checking your work?",
            hint: "Double-check",
          },
          {
            answer: "Building something to help others, like a library box, is a service this.",
            question: "What is project?",
            hint: "Service!",
          },
          {
            answer: "A \"Little Free\" one of these lets neighbors share books.",
            question: "What is a library?",
            hint: "Take a book, leave a book",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Sanding wood before painting makes the paint go on this way.",
            question: "What is smoothly (evenly)?",
            hint: "No bumps",
          },
          {
            answer: "Painting outside or with windows open gives you this.",
            question: "What is fresh air (ventilation)?",
            hint: "Breathe easy",
          },
          {
            answer: "Wiping glue right away keeps it from doing this.",
            question: "What is drying (making a mess)?",
            hint: "Sticky!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Making a project better after testing it is called this.",
            question: "What is improving (iterating)?",
            hint: "Try again",
          },
          {
            answer: "Builders who design bridges and buildings are called these.",
            question: "What are engineers?",
            hint: "Starts with \"e\"",
          },
          {
            answer: "Leaving a work area cleaner than you found it follows this outdoor idea.",
            question: "What is Leave No Trace?",
            hint: "Leave it better",
          },
        ],
      },
    ],
  },
];
