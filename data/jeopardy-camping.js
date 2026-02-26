// Jeopardy question bank — Camping Adventure
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Sources:
//   BSA Webelos Camping Adventure – https://www.scouting.org
//   Leave No Trace Seven Principles – https://lnt.org/learn/seven-principles
//   BSA Guide to Safe Scouting – https://www.scouting.org/health-and-safety/gss/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_CAMPING = [
  {
    name: "CAMPFIRES & COOKING",
    emoji: "🔥",
    color: "#1a1008",
    accent: "#f97316",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "These are the three things a fire needs to burn: heat, fuel, and this.",
            question: "What is oxygen (the fire triangle)?",
            hint: "You breathe it in — fire needs it too",
          },
          {
            answer: "Before building a campfire, you should always clear the ground down to bare dirt in a circle at least this many feet across.",
            question: "What is 10 feet?",
            hint: "About the length of a car — you need room!",
          },
          {
            answer: "You should never leave a campfire without doing this first.",
            question: "What is making sure it is completely out (cold to the touch)?",
            hint: "'If it's too hot to touch, it's too hot to leave'",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This thin, dry material like dry grass or dryer lint catches a spark and starts a fire.",
            question: "What is tinder?",
            hint: "The smallest stuff — it's what catches the first spark",
          },
          {
            answer: "After tinder catches fire, you add these small sticks (about pencil-sized) to build the flame.",
            question: "What is kindling?",
            hint: "Bigger than tinder, smaller than firewood — twigs and small sticks",
          },
          {
            answer: "The BSA method for putting out a campfire uses three steps: sprinkle water, stir the ashes, and then do this.",
            question: "What is feel the ashes with the back of your hand to make sure they are cold?",
            hint: "If it's too hot to touch, it's not out yet!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This simple camp cooking method wraps food in aluminum foil and places it in the coals.",
            question: "What is a foil packet (or hobo dinner)?",
            hint: "Wrap it up tight and toss it in the coals!",
          },
          {
            answer: "A small homemade stove made from a tuna can filled with corrugated cardboard and wax, often used in Cub Scouts.",
            question: "What is a buddy burner?",
            hint: "Your 'buddy' keeps you fed on a camping trip",
          },
          {
            answer: "When cooking over a campfire, you should always have a bucket of this nearby for safety.",
            question: "What is water?",
            hint: "The quickest way to drown a fire if something goes wrong",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "This type of campfire lay is shaped like a small log cabin and is great for cooking because it creates a bed of coals.",
            question: "What is a log cabin (or crisscross) fire lay?",
            hint: "Stack the logs like you're building a tiny house",
          },
          {
            answer: "In BSA camping, food should be stored in one of these overnight to keep it safe from animals.",
            question: "What is a bear bag (hung from a tree) or a bear canister?",
            hint: "Hang it high or lock it tight — bears are hungry!",
          },
          {
            answer: "The safe distance you should keep between your cooking fire and your tent or sleeping area.",
            question: "What is at least 15 feet?",
            hint: "Sparks can fly and nylon melts — keep your tent far away",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "This campfire lay uses a large log as a wind break, with the fire built against it — great for reflecting heat toward your shelter.",
            question: "What is a reflector fire?",
            hint: "The big log 'reflects' the heat back at you like a mirror",
          },
          {
            answer: "When using a camp stove, you should never do this because the fumes are invisible and deadly.",
            question: "What is use it inside a tent or enclosed space (carbon monoxide danger)?",
            hint: "Same reason you don't run a generator indoors",
          },
          {
            answer: "The 'drown, stir, feel' method for extinguishing a fire is recommended by the BSA — this is the last step before you can safely leave.",
            question: "What is feel the ashes and coals with the back of your hand to confirm they are cold?",
            hint: "Your hand is the final safety check — cold means safe",
          },
        ],
      },
    ],
  },

  {
    name: "KNOTS & GEAR",
    emoji: "🪢",
    color: "#0f1a0a",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "This basic knot, used to tie two rope ends together, is sometimes called a joining knot. Scouts learn it first.",
            question: "What is a square knot?",
            hint: "Right over left, left over right — makes a knot both tidy and tight",
          },
          {
            answer: "The Scout motto that reminds you to always have your gear ready before heading outdoors.",
            question: 'What is "Be Prepared"?',
            hint: "Two words every Scout knows by heart",
          },
          {
            answer: "When packing a backpack for a hike, heavy items should be placed in this position for the best balance.",
            question: "What is close to your back and near your shoulders (high and center)?",
            hint: "Keep the weight close to your body's center of gravity",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This adjustable knot slides up and down a rope and is used to tighten tent guy lines.",
            question: "What is a taut-line hitch?",
            hint: "It slides to make the line 'taut' — that means tight!",
          },
          {
            answer: "BSA's list of 10 essential items every Scout should carry on a hike starts with this item that shows you the way.",
            question: "What is a map and compass (or trail map)?",
            hint: "Your phone might die — these never run out of batteries",
          },
          {
            answer: "This knot is used to attach a rope to a post or tree and is one of the most useful hitches in Scouting.",
            question: "What is a clove hitch?",
            hint: "Two loops around a post — quick and simple",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The BSA 10 Essentials include a first aid kit, sun protection, a flashlight, and this important hydration item.",
            question: "What is water (and a water bottle)?",
            hint: "You can survive days without food, but not without this",
          },
          {
            answer: "This knot creates a fixed loop at the end of a rope that won't slip. Rescue workers use it because it's reliable under load.",
            question: "What is a bowline?",
            hint: "'The rabbit comes out of the hole, goes around the tree, and back down the hole'",
          },
          {
            answer: "A pocketknife should always be passed to another person in this safe way.",
            question: "What is with the blade closed (or handle-first)?",
            hint: "Never hand someone an open blade — close it first",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The BSA 10 Essentials list includes a rain jacket, a flashlight, a first aid kit, sun protection, a knife, water, food, a map/compass, a whistle, and this item that keeps you warm in an emergency.",
            question: "What is an emergency shelter (or space blanket / extra clothing)?",
            hint: "If you get lost or hurt, you need to stay warm overnight",
          },
          {
            answer: "This two-half-hitch knot is used to tie a rope to a ring, post, or tree and is very secure.",
            question: "What is two half hitches?",
            hint: "It's literally two of the same simple hitch, one after the other",
          },
          {
            answer: "The BSA rule that says a Scout should always carry a pocketknife safely and only use it with proper training is called earning this.",
            question: "What is the Whittling Chip (or Totin' Chip)?",
            hint: "This card gives you permission to carry and use a knife in Scouts",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A square knot should never be used for this purpose because it can slip under heavy or life-safety loads.",
            question: "What is climbing or supporting a person's weight?",
            hint: "It's great for first aid bandages, but NOT for holding you over a cliff",
          },
          {
            answer: "This lashing technique uses rope to bind two poles together at a 90-degree angle, often used to build camp gadgets and structures.",
            question: "What is a square lashing?",
            hint: "The rope wraps in a square pattern around the crossed poles",
          },
          {
            answer: "According to BSA, the complete list of 10 Essentials for a hike includes a map, compass, sun protection, first aid kit, knife, flashlight, food, water, rain gear, and this tenth item.",
            question: "What is a whistle (or emergency signaling device)?",
            hint: "Three blasts means 'I need help!' — and it carries farther than your voice",
          },
        ],
      },
    ],
  },

  {
    name: "LEAVE NO TRACE",
    emoji: "🌿",
    color: "#081510",
    accent: "#10b981",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The outdoor ethics program that teaches Scouts to leave nature exactly as they found it.",
            question: "What is Leave No Trace?",
            hint: "Seven principles that keep the outdoors beautiful for everyone",
          },
          {
            answer: "Instead of picking wildflowers or collecting rocks, Leave No Trace says you should do this to remember them.",
            question: "What is take a photo (or take only pictures)?",
            hint: "'Take only pictures, leave only footprints'",
          },
          {
            answer: "The first Leave No Trace principle tells you to do this before you even leave home for a camping trip.",
            question: "What is plan ahead and prepare?",
            hint: "Know the rules, check the weather, bring the right gear",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "When hiking and you come to a muddy section of the trail, Leave No Trace says you should do this instead of walking around it.",
            question: "What is walk straight through the middle of the mud?",
            hint: "Walking around widens the trail and damages more plants",
          },
          {
            answer: "The Leave No Trace principle that says to pack out all of your trash, leftover food, and litter.",
            question: 'What is "Dispose of Waste Properly" (or pack it in, pack it out)?',
            hint: "If you carried it in, you can carry it out!",
          },
          {
            answer: "When camping, you should set up your tent at least 200 feet away from these natural features to protect water quality.",
            question: "What are lakes and streams (water sources)?",
            hint: "About 70 adult steps — keep your camp away from the water",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "When you need to go to the bathroom outdoors, Leave No Trace says to dig a cathole this many inches deep.",
            question: "What is 6 to 8 inches?",
            hint: "About as deep as your hand is long — dig, use, and cover it up",
          },
          {
            answer: "The Leave No Trace principle that tells you not to carve your name in trees, move rocks, or build structures.",
            question: 'What is "Leave What You Find"?',
            hint: "Let the next person discover the same nature you did",
          },
          {
            answer: "The total number of Leave No Trace principles that Scouts learn to follow in the outdoors.",
            question: "What is seven?",
            hint: "Lucky number — and these principles are golden",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Leave No Trace says campfires should be kept small and you should only burn wood that is this size or smaller.",
            question: "What is wrist-sized (or small enough to break by hand)?",
            hint: "If you need a saw or axe, it's too big for a Leave No Trace fire",
          },
          {
            answer: "The Leave No Trace principle about wildlife says you should observe animals from a distance and never do this.",
            question: "What is feed them (or approach or follow them)?",
            hint: "Human food makes wild animals sick and dependent on people",
          },
          {
            answer: "When hiking in a group, the Leave No Trace principle about being considerate of others says to do this when faster hikers approach from behind.",
            question: "What is step aside and let them pass?",
            hint: "Share the trail — yield to uphill hikers and horses too",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "These are all seven Leave No Trace principles in order: Plan Ahead, Travel on Durable Surfaces, Dispose of Waste Properly, Leave What You Find, Minimize Campfire Impacts, Respect Wildlife, and this seventh one.",
            question: 'What is "Be Considerate of Other Visitors"?',
            hint: "The last one is all about sharing the outdoors with other people",
          },
          {
            answer: "In areas where campfires are allowed, Leave No Trace recommends using an existing fire ring or this portable alternative instead of building a new ring.",
            question: "What is a fire pan or a mound fire?",
            hint: "It leaves no permanent scar on the ground when you're done",
          },
          {
            answer: "Leave No Trace says you should camp on 'durable surfaces' — these include established campsites, rock, gravel, dry grass, and this frozen surface.",
            question: "What is snow?",
            hint: "It melts and recovers — no lasting damage to the ground beneath",
          },
        ],
      },
    ],
  },

  {
    name: "SHELTER & WEATHER",
    emoji: "⛺",
    color: "#0c0f1a",
    accent: "#6366f1",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "This waterproof sheet goes over your tent to keep rain out.",
            question: "What is a rain fly?",
            hint: "It 'flies' over the top of your tent",
          },
          {
            answer: "Before setting up your tent, you should always clear the ground of these sharp or lumpy objects.",
            question: "What are rocks and sticks?",
            hint: "They'll poke you through the tent floor all night!",
          },
          {
            answer: "When choosing a campsite, you should never set up your tent at the bottom of a hill because of this water danger.",
            question: "What is flooding (water flows downhill and collects at the bottom)?",
            hint: "Rain runs downhill — don't be where it all ends up",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The part of a sleeping bag rated in degrees that tells you the coldest temperature it can handle.",
            question: "What is the temperature rating?",
            hint: "A bag rated to 30°F keeps you warm down to 30 degrees",
          },
          {
            answer: "You should set up your tent with the door facing this direction to avoid wind blowing rain straight inside.",
            question: "What is away from the wind (downwind or leeward)?",
            hint: "Face the door away from where the wind is coming from",
          },
          {
            answer: "When dark clouds build up tall and look like anvils or towers, this type of dangerous weather is likely on the way.",
            question: "What is a thunderstorm?",
            hint: "Those towering clouds are called cumulonimbus — and they mean business",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "If you hear thunder, the BSA safety rule says you should seek shelter immediately because lightning can strike this many miles away from the storm.",
            question: "What is 10 miles?",
            hint: "If you can hear it, you can be hit by it",
          },
          {
            answer: "In a tent, you stay warmer by sleeping on this item instead of directly on the ground.",
            question: "What is a sleeping pad (or foam mat)?",
            hint: "The cold ground steals your heat — you need insulation beneath you",
          },
          {
            answer: "This weather safety rule tells you to count the seconds between a lightning flash and the sound of thunder, then divide by 5, to estimate the storm's distance in miles.",
            question: "What is the flash-to-bang method (or the 30-30 rule)?",
            hint: "5 seconds per mile — if you count less than 30 seconds, get to shelter!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A tarp shelter set up in an A-frame shape is one of the simplest emergency shelters. It's named after this letter because of its triangular shape.",
            question: "What is the letter A?",
            hint: "Look at it from the end — it looks exactly like this letter",
          },
          {
            answer: "If you are caught outdoors in a lightning storm with no shelter, the BSA says to crouch low and do this with your feet.",
            question: "What is keep your feet together (and stay on the balls of your feet)?",
            hint: "Make yourself small and reduce ground contact — never lie flat",
          },
          {
            answer: "Guy lines are ropes attached to your tent that serve this important purpose in windy conditions.",
            question: "What is keeping the tent stable and preventing it from collapsing or blowing away?",
            hint: "They 'guy' the tent down — pulling the walls taut against the wind",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Cotton clothing is a dangerous choice for camping in cool or wet weather because of this property — outdoor experts say 'cotton kills.'",
            question: "What is that cotton absorbs and holds water, making you cold (it loses all insulation when wet)?",
            hint: "Once cotton gets wet, it stays wet and sucks the heat right out of you",
          },
          {
            answer: "The BSA lightning safety rule called the '30-30 rule' says to seek shelter when the flash-to-bang count is under 30 seconds, and to wait this long after the last thunder before going back outside.",
            question: "What is 30 minutes?",
            hint: "The first 30 gets you inside — the second 30 keeps you there",
          },
          {
            answer: "When setting up camp, experienced Scouts look for natural windbreaks like tree lines but avoid camping directly under large trees because of this danger.",
            question: "What is falling branches (or 'widow makers')?",
            hint: "Dead branches above you can fall at any time — especially in wind or storms",
          },
        ],
      },
    ],
  },
];
