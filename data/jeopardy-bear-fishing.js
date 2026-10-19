// Jeopardy question bank — A Bear Goes Fishing (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Take Me Fishing (RBFF) – https://www.takemefishing.org/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_FISHING = [
  {
    name: "FISHING GEAR",
    emoji: "🎣",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The long pole you use to catch fish.",
            question: "What is a fishing rod (pole)?",
            hint: "Long and bendy",
          },
          {
            answer: "The sharp, curved piece of metal that catches the fish.",
            question: "What is a hook?",
            hint: "Ouch — careful!",
          },
          {
            answer: "The string that connects your hook to your rod.",
            question: "What is fishing line?",
            hint: "Thin and clear",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A worm on a hook is this.",
            question: "What is bait?",
            hint: "Fish food",
          },
          {
            answer: "The part of the rod you turn to wind in the line.",
            question: "What is the reel?",
            hint: "Crank it!",
          },
          {
            answer: "A floating ball on your line that bobs when a fish bites.",
            question: "What is a bobber?",
            hint: "Bob bob bob",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A fake fish or shiny spinner used to trick fish.",
            question: "What is a lure?",
            hint: "Not real food",
          },
          {
            answer: "Small weights that help your bait sink.",
            question: "What are sinkers?",
            hint: "They sink!",
          },
          {
            answer: "A box that holds hooks, lures, and bobbers.",
            question: "What is a tackle box?",
            hint: "Tackle!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A net with a handle used to scoop a fish out of the water.",
            question: "What is a landing net?",
            hint: "Lands the fish",
          },
          {
            answer: "A hook with the pointy barb squished flat is called this, which is easier to remove.",
            question: "What is barbless?",
            hint: "No barb",
          },
          {
            answer: "A simple rod with no reel, just line tied to the tip.",
            question: "What is a cane pole?",
            hint: "Old school!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A popular knot for tying a hook to your line.",
            question: "What is an improved clinch knot?",
            hint: "It clinches tight",
          },
          {
            answer: "A type of reel with a closed cover and a button you push to cast.",
            question: "What is a spincast reel?",
            hint: "Push-button",
          },
          {
            answer: "The pliers used to remove a hook from a fish's mouth.",
            question: "What are needle-nose pliers (forceps)?",
            hint: "Long pointy tip",
          },
        ],
      },
    ],
  },
  {
    name: "FISH FACTS",
    emoji: "🐟",
    color: "#0a1a1a",
    accent: "#14b8a6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Fish breathe using these on the sides of their heads.",
            question: "What are gills?",
            hint: "Not lungs",
          },
          {
            answer: "Fish use these to swim and steer.",
            question: "What are fins?",
            hint: "Flip flap",
          },
          {
            answer: "The shiny plates that cover a fish's body.",
            question: "What are scales?",
            hint: "Like armor",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A popular fish with a big mouth that lives in lakes.",
            question: "What is a largemouth bass?",
            hint: "Big mouth!",
          },
          {
            answer: "A small, round fish with a flat body, easy for kids to catch.",
            question: "What is a bluegill (sunfish)?",
            hint: "Blue + gill",
          },
          {
            answer: "A fish with \"whiskers\" that lives near the bottom.",
            question: "What is a catfish?",
            hint: "Meow!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The whiskers on a catfish are called these.",
            question: "What are barbels?",
            hint: "Sounds like \"barbell\"",
          },
          {
            answer: "A fish with colorful spots that likes cold, clear streams.",
            question: "What is a trout?",
            hint: "Rainbow ____",
          },
          {
            answer: "Fish are cold-blooded, meaning their body temperature matches this.",
            question: "What is the water?",
            hint: "Their surroundings",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A fish's body is covered in this slime, which protects it.",
            question: "What is a slime coat (mucus)?",
            hint: "Slippery!",
          },
          {
            answer: "A baby fish is called this.",
            question: "What is a fry (fingerling)?",
            hint: "Like French ___",
          },
          {
            answer: "Fish lay these to make more fish.",
            question: "What are eggs?",
            hint: "Like a chicken!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The line along a fish's side that helps it feel movement in water.",
            question: "What is the lateral line?",
            hint: "Lateral = side",
          },
          {
            answer: "This fish swims from the ocean up rivers to lay its eggs.",
            question: "What is a salmon?",
            hint: "Pink fish",
          },
          {
            answer: "Fish hide near logs and weeds because these places give them this.",
            question: "What is cover (shelter and food)?",
            hint: "Hiding spots",
          },
        ],
      },
    ],
  },
  {
    name: "SAFE FISHING",
    emoji: "🦺",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Fishing near water, you should always have one of these with you.",
            question: "What is a buddy (an adult)?",
            hint: "Never alone",
          },
          {
            answer: "Before you cast, look behind you to make sure no one is close to this.",
            question: "What is your hook?",
            hint: "Swing zone",
          },
          {
            answer: "Wearing this keeps you safe if you fall in the water.",
            question: "What is a life jacket (PFD)?",
            hint: "It floats",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Hooks should be stored this way when you're walking.",
            question: "What is hooked to the rod (covered)?",
            hint: "Don't let it dangle",
          },
          {
            answer: "Wearing sunglasses or glasses protects these from flying hooks.",
            question: "What are your eyes?",
            hint: "You only get two",
          },
          {
            answer: "If a hook gets stuck in skin, you should do this.",
            question: "What is get an adult (don't pull it out yourself)?",
            hint: "Stay calm",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Leftover fishing line should go here — not on the ground.",
            question: "What is the trash (recycling bin)?",
            hint: "Birds can get tangled",
          },
          {
            answer: "Wet rocks near water are dangerous because they are this.",
            question: "What is slippery?",
            hint: "Whoops!",
          },
          {
            answer: "If you hear thunder, put down your rod because it can act like this.",
            question: "What is a lightning rod?",
            hint: "Zap!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Rules about how many fish you can keep are called this.",
            question: "What is a limit (catch limit)?",
            hint: "Not too many",
          },
          {
            answer: "Older kids and adults usually need one of these to fish.",
            question: "What is a fishing license?",
            hint: "Like a permit",
          },
          {
            answer: "A fish too small to keep must be put back. This is called this.",
            question: "What is catch and release?",
            hint: "Let it go!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "When releasing a fish, wet your hands first to protect its this.",
            question: "What is slime coat?",
            hint: "Slippery shield",
          },
          {
            answer: "You should hold a fish gently and keep it in the water as much as possible so it can do this.",
            question: "What is breathe?",
            hint: "Gills need water",
          },
          {
            answer: "Your state's fish and wildlife agency makes these rules for fishing.",
            question: "What are fishing regulations?",
            hint: "Laws for fishing",
          },
        ],
      },
    ],
  },
  {
    name: "CASTING & CATCHING",
    emoji: "🌊",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Throwing your line out into the water is called this.",
            question: "What is casting?",
            hint: "Cast!",
          },
          {
            answer: "When a fish grabs your bait, it's called this.",
            question: "What is a bite (strike)?",
            hint: "Chomp",
          },
          {
            answer: "Pulling the line to set the hook is called this.",
            question: "What is setting the hook?",
            hint: "A quick tug",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "When your bobber goes under the water, it usually means this.",
            question: "What is a fish is biting?",
            hint: "Get ready!",
          },
          {
            answer: "Fish are often most active at these times of day.",
            question: "What are early morning and evening?",
            hint: "Sunrise and sunset",
          },
          {
            answer: "Practicing casting at a target like a hula hoop on the grass is good practice for this.",
            question: "What is accuracy?",
            hint: "Hit the spot",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Being patient and quiet helps because loud noises do this to fish.",
            question: "What is scare them away?",
            hint: "Shhh",
          },
          {
            answer: "Winding in line while a fish pulls is called this.",
            question: "What is reeling in?",
            hint: "Crank",
          },
          {
            answer: "If your line gets tangled in a big knot, it's called this.",
            question: "What is a bird's nest?",
            hint: "Like a bird's home",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "When a fish pulls hard and line slips off the reel, it's controlled by this setting.",
            question: "What is the drag?",
            hint: "Lets line slip",
          },
          {
            answer: "A good place to fish in a lake is near these underwater plants.",
            question: "What are weeds (weed beds)?",
            hint: "Fish hide there",
          },
          {
            answer: "Keeping your rod tip up while reeling helps keep this tight.",
            question: "What is the line?",
            hint: "No slack",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Fishing through a hole in frozen lake ice is called this.",
            question: "What is ice fishing?",
            hint: "Brrr!",
          },
          {
            answer: "A style of fishing that uses lightweight fake insects made of feathers.",
            question: "What is fly fishing?",
            hint: "Buzz buzz",
          },
          {
            answer: "A Bear might measure their fish with this tool.",
            question: "What is a ruler (tape measure)?",
            hint: "Inches",
          },
        ],
      },
    ],
  },
];
