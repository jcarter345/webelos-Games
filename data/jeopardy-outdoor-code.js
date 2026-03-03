// Jeopardy question bank — Outdoor Code & Leave No Trace Adventure
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Sources:
//   BSA Webelos Walkabout Adventure – https://www.scouting.org/programs/cub-scouts/adventures/webelos/
//   BSA Outdoor Code – https://www.scouting.org/outdoor-programs/outdoor-ethics/
//   Leave No Trace Seven Principles – https://lnt.org/learn/seven-principles
//   Leave No Trace for Kids – https://lnt.org/learn/leave-no-trace-for-kids
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_OUTDOOR_CODE = [
  {
    name: "THE OUTDOOR CODE",
    emoji: "🌲",
    color: "#0a1a0a",
    accent: "#16a34a",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The Outdoor Code begins with this pledge: 'As an American, I will do my best to be clean in my outdoor ___.'",
            question: "What is manners?",
            hint: "How you behave outdoors — your outdoor etiquette",
          },
          {
            answer: "The Outdoor Code has four pledges, and the first one asks you to be clean in your outdoor this.",
            question: "What is manners?",
            hint: "It's about how you ACT in the outdoors",
          },
          {
            answer: "The Outdoor Code is a set of four promises that Scouts make about how to behave in this setting.",
            question: "What is the outdoors (or nature)?",
            hint: "It covers how to treat the natural world around you",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The second pledge of the Outdoor Code says: 'I will be careful with ___.' This substance destroys forests and wildlife habitats.",
            question: "What is fire?",
            hint: "Smokey Bear's message is the same: only YOU can prevent forest fires",
          },
          {
            answer: "The third pledge of the Outdoor Code says: 'I will be considerate in the ___.'",
            question: "What is the outdoors?",
            hint: "Being thoughtful of other people, animals, and plants when you're outside",
          },
          {
            answer: "The fourth and final pledge of the Outdoor Code says: 'I will be conservation-minded.' This means taking care of this for future generations.",
            question: "What is nature (or natural resources / the environment)?",
            hint: "Conservation = protecting and preserving what we have",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "In the Outdoor Code, being 'clean in my outdoor manners' means not littering and keeping this looking the same as when you arrived.",
            question: "What is your campsite (or the outdoors / nature)?",
            hint: "Leave it as good as — or better than — you found it",
          },
          {
            answer: "Being 'careful with fire' in the Outdoor Code means following fire rules, using existing fire rings, and always doing this before leaving your campfire.",
            question: "What is making sure it is completely out (dead out / cold to the touch)?",
            hint: "'If it's too hot to touch, it's too hot to leave'",
          },
          {
            answer: "Being 'conservation-minded' includes reducing, reusing, and this third R that helps protect natural resources.",
            question: "What is recycling?",
            hint: "Reduce, Reuse, and ___",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The Webelos Walkabout adventure requires Scouts to recite both the Outdoor Code and this set of principles from memory.",
            question: "What are the Leave No Trace Principles for Kids?",
            hint: "Seven rules for protecting the outdoors",
          },
          {
            answer: "Being 'considerate in the outdoors' means keeping noise down, yielding the trail to other hikers, and respecting these living inhabitants of the wild.",
            question: "What is wildlife (animals)?",
            hint: "Don't disturb or chase the creatures that live there",
          },
          {
            answer: "The Outdoor Code and Leave No Trace share this core philosophy: leave nature in the same or better condition than you found it.",
            question: "What is stewardship (or environmental ethics)?",
            hint: "Being a caretaker of the natural world",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Recite the full Outdoor Code: 'As an American, I will do my best to — be clean in my outdoor manners, be careful with fire, be considerate in the outdoors, and be ___-___.'",
            question: "What is conservation-minded?",
            hint: "The last pledge — protecting natural resources for the future",
          },
          {
            answer: "The Outdoor Code was adopted by the Boy Scouts of America in this decade, making it one of the organization's earliest environmental commitments.",
            question: "What is the 1950s (1959)?",
            hint: "It's been around for over 60 years — way before Earth Day",
          },
          {
            answer: "The Outdoor Code and Leave No Trace are part of BSA's Outdoor Ethics program, which has this goal of developing lifelong environmental responsibility in Scouts.",
            question: "What is conservation (or environmental stewardship)?",
            hint: "It's about building habits that protect the Earth for generations",
          },
        ],
      },
    ],
  },

  {
    name: "LEAVE NO TRACE",
    emoji: "👣",
    color: "#14140a",
    accent: "#eab308",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The total number of Leave No Trace Principles for Kids that Scouts learn.",
            question: "What is seven?",
            hint: "Lucky number seven — can you name them all?",
          },
          {
            answer: "The first Leave No Trace principle reminds you to do this before ever leaving home for an outdoor trip.",
            question: "What is know before you go (plan ahead and prepare)?",
            hint: "Check the weather, know the rules, bring the right gear",
          },
          {
            answer: "The famous Leave No Trace saying: 'Take only pictures, leave only ___.'",
            question: "What are footprints?",
            hint: "The only mark you should leave behind",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The Leave No Trace principle 'Stick to Trails' means staying on established paths to avoid damaging these.",
            question: "What are plants (or vegetation / fragile ground)?",
            hint: "Walking off-trail crushes plants and causes erosion",
          },
          {
            answer: "The principle 'Trash Your Trash' means carrying out everything you bring in — even small items like these fruit coverings.",
            question: "What are orange peels (or banana peels / fruit rinds)?",
            hint: "Just because it's 'natural' doesn't mean you should leave it — they take years to decompose",
          },
          {
            answer: "When washing dishes at camp, Leave No Trace says to carry water at least 200 feet away from lakes and streams to do this.",
            question: "What is wash dishes (or dispose of gray water / soapy water)?",
            hint: "Keep soap and food scraps far from the water source",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The principle 'Leave What You Find' means not picking wildflowers, not taking rocks, and not doing this to trees.",
            question: "What is carving into them (or peeling bark)?",
            hint: "Your initials don't belong carved in a living tree",
          },
          {
            answer: "The principle 'Be Careful with Fire' for kids reminds Scouts to use established fire rings and to keep fires this size.",
            question: "What is small?",
            hint: "A small fire is safer, uses less wood, and leaves less impact",
          },
          {
            answer: "The Leave No Trace principle about wildlife says to watch animals from a distance and never do this to them.",
            question: "What is feed them?",
            hint: "Human food makes wild animals sick and teaches them to approach people",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The seventh and final Leave No Trace principle for kids is 'Be Kind to Other Visitors,' which includes keeping these at a low level on the trail.",
            question: "What is noise (voices / music)?",
            hint: "Other hikers came to enjoy nature — loud music ruins that experience",
          },
          {
            answer: "All seven Leave No Trace Principles for Kids: Know Before You Go, Stick to Trails, Trash Your Trash, Leave What You Find, Be Careful with Fire, Respect Wildlife, and this.",
            question: "What is Be Kind to Other Visitors?",
            hint: "The last one is about sharing the outdoors respectfully",
          },
          {
            answer: "When hiking with a dog in an area that allows pets, Leave No Trace says you must pick up after them and keep them on this.",
            question: "What is a leash?",
            hint: "Even friendly dogs can scare wildlife or other hikers",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Leave No Trace was developed as a partnership between federal land agencies and this nonprofit organization, founded in 1994.",
            question: "What is the Leave No Trace Center for Outdoor Ethics?",
            hint: "They created the curriculum and train outdoor educators worldwide",
          },
          {
            answer: "The Leave No Trace principle 'Stick to Trails' specifically says that when you encounter a muddy section, you should do this rather than walk around it.",
            question: "What is walk straight through the mud?",
            hint: "Walking around widens the trail and kills more plants — muddy boots are OK!",
          },
          {
            answer: "In fragile alpine environments above the tree line, even walking off-trail for a short distance can damage tiny plants that take this many years to recover.",
            question: "What is hundreds of years (or decades)?",
            hint: "Those tiny plants grow incredibly slowly in harsh mountain conditions",
          },
        ],
      },
    ],
  },

  {
    name: "TRAIL SKILLS",
    emoji: "🧭",
    color: "#0f0f1a",
    accent: "#6366f1",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The Webelos Walkabout adventure requires scouts to determine their walking pace by walking this fraction of a mile.",
            question: "What is one quarter mile (¼ mile)?",
            hint: "Count your steps over this short distance to figure out your pace",
          },
          {
            answer: "Your 'pace' is the number of steps you take to walk a specific distance, and knowing it helps you estimate this while hiking.",
            question: "What is distance (how far you've traveled)?",
            hint: "If you know your pace, you can count steps and calculate distance",
          },
          {
            answer: "The Webelos Walkabout requires scouts to complete a walk of this distance while practicing Leave No Trace.",
            question: "What is 2 miles?",
            hint: "Long enough to be a good hike, short enough for 4th graders",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Before heading out on a hike, you should always tell someone your planned route and this — what time you expect to return.",
            question: "What is your expected return time (or your trip plan)?",
            hint: "If you don't come back on time, someone will know to look for you",
          },
          {
            answer: "On the trail, hikers going uphill generally have the right of way. Downhill hikers should step aside and do this.",
            question: "What is let them pass (yield to uphill hikers)?",
            hint: "Climbing is harder — don't make them stop and restart",
          },
          {
            answer: "The BSA 10 Essentials include these two navigation tools that work even when your phone battery dies.",
            question: "What are a map and compass?",
            hint: "Old school, but they never need charging",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "If you get lost on a hike, the BSA teaches you to STOP — which stands for Sit down, Think, Observe, and this fourth step.",
            question: "What is Plan?",
            hint: "S-T-O-P: don't panic, think it through, look around, then make a plan",
          },
          {
            answer: "On a trail, these colored markings painted on trees or posts show you which way to go and help prevent you from getting lost.",
            question: "What are trail blazes (or trail markers)?",
            hint: "They're usually rectangular paint marks — follow the same color!",
          },
          {
            answer: "The universal distress signal — whether by whistle, mirror, or flashlight — is this number of blasts or flashes.",
            question: "What is three?",
            hint: "Three short blasts means 'I need help!'",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "When hiking in a group, the pace of the group should be set by this person.",
            question: "What is the slowest hiker?",
            hint: "No one gets left behind — the group is only as fast as its slowest member",
          },
          {
            answer: "On a topographic map, these curving lines connect points of equal elevation and show you how steep the terrain is.",
            question: "What are contour lines?",
            hint: "When they're close together, the hill is steep; far apart, it's gentle",
          },
          {
            answer: "Experienced hikers follow the rule of turning back at this point on an out-and-back hike, even if the destination hasn't been reached.",
            question: "What is the turnaround time (halfway through your available daylight or energy)?",
            hint: "The return trip takes just as long — don't get caught in the dark",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "To calculate how long a 2-mile hike will take, you multiply your pace (steps per quarter mile) by this number and then divide by your step rate.",
            question: "What is 8 (because 2 miles = 8 quarter miles)?",
            hint: "How many quarter-miles fit in 2 miles?",
          },
          {
            answer: "A compass needle always points toward this type of north, which is different from 'true north' shown on most maps.",
            question: "What is magnetic north?",
            hint: "Earth's magnetic pole is not in the same spot as the geographic North Pole",
          },
          {
            answer: "The difference in degrees between magnetic north (where your compass points) and true north (on the map) is called this.",
            question: "What is declination?",
            hint: "You have to adjust for this to navigate accurately with a map and compass",
          },
        ],
      },
    ],
  },

  {
    name: "WILDLIFE & NATURE",
    emoji: "🦌",
    color: "#0a1515",
    accent: "#14b8a6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "When you see wildlife on the trail, you should observe from a distance and never try to do this.",
            question: "What is approach, touch, or feed them?",
            hint: "Look with your eyes, not your hands — wild animals are not pets",
          },
          {
            answer: "This three-word outdoor saying reminds hikers to only take photographs and leave only footprints.",
            question: 'What is "Leave No Trace"?',
            hint: "The core idea behind all seven principles",
          },
          {
            answer: "Trees, flowers, and grasses growing along the trail are all examples of native this, which hikers should never pick or trample.",
            question: "What are plants (or vegetation / flora)?",
            hint: "They were there first — let them keep growing for the next visitor",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Feeding wild animals human food is harmful because it teaches them to associate people with food and can make them this.",
            question: "What is sick (or aggressive / dependent on humans)?",
            hint: "Human food isn't healthy for wildlife, and bold animals often get put down",
          },
          {
            answer: "If you encounter a bear on the trail, the general advice is to make yourself look big, talk calmly, and never do this.",
            question: "What is run?",
            hint: "Running triggers their chase instinct — back away slowly instead",
          },
          {
            answer: "Poison ivy can be identified by its leaves growing in clusters of this number.",
            question: "What is three ('Leaves of three, let it be')?",
            hint: "A famous rhyme helps you remember to stay away",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "To prevent wildlife from raiding your campsite at night, you should store all food and scented items in a bear bag hung at least this many feet off the ground.",
            question: "What is 10 to 12 feet?",
            hint: "High enough that a bear standing on its hind legs can't reach it",
          },
          {
            answer: "This common trail pest, often found in tall grass and brush, can transmit Lyme disease through its bite.",
            question: "What is a tick?",
            hint: "Always do a full body check after hiking in wooded areas",
          },
          {
            answer: "The best time to see most wildlife on the trail is during these two periods of the day.",
            question: "What are dawn and dusk (early morning and late evening)?",
            hint: "Most animals are most active when the sun is low",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "When camping, the 'bear triangle' safety practice means separating your cooking area, food storage, and sleeping area by at least this many feet each.",
            question: "What is 200 feet (about 70 adult steps)?",
            hint: "Keep food smells far away from where you sleep",
          },
          {
            answer: "This woodland plant with white berries and three leaves is commonly confused with wild strawberry but is actually poisonous.",
            question: "What is white baneberry (or doll's eyes)?",
            hint: "If you're not 100% sure a berry is safe — DON'T eat it!",
          },
          {
            answer: "The Leave No Trace principle about wildlife says you should keep at least this many feet from large animals like elk or moose.",
            question: "What is 100 feet (about 25 yards)?",
            hint: "Farther than you think — about one-third of a football field",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "An ecosystem is a community of living organisms interacting with each other and their physical environment. The two main types are aquatic and this.",
            question: "What is terrestrial (land-based)?",
            hint: "Water ecosystems and land ecosystems — those are the two big categories",
          },
          {
            answer: "In ecology, a food chain starts with producers (plants), then primary consumers (herbivores), then secondary consumers (carnivores), and ends with these organisms that break down dead material.",
            question: "What are decomposers?",
            hint: "Fungi, bacteria, and worms — they recycle nutrients back into the soil",
          },
          {
            answer: "National Parks follow a stricter version of Leave No Trace and prohibit removing any natural objects, including rocks, feathers, and these shed items from deer and elk.",
            question: "What are antlers?",
            hint: "Even though they fall off naturally every year, you can't take them from national park land",
          },
        ],
      },
    ],
  },
];
