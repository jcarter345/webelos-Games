// Jeopardy question bank
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Sources:
//   NOAA / NWS  – https://www.noaa.gov
//   NWS Turn Around Don't Drown – https://www.weather.gov/safety/flood-turn-around-dont-drown
//   Red Cross Winter Storm – https://www.redcross.org
//   BSA Be Prepared for Natural Events – https://www.scouting.org/cub-scout-activities/be-prepared-for-natural-events/
//   Ready.gov – https://www.ready.gov
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

const JEOPARDY_NATURAL_EVENTS = [
  {
    name: "TORNADOES",
    emoji: "🌪️",
    color: "#1a1a2e",
    accent: "#e94560",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "This is the safest place to go in your house during a tornado.",
            question: "What is the basement or lowest floor interior room?",
            hint: "Think: go LOW and stay AWAY from windows",
          },
          {
            answer: "The official BSA tornado safety phrase that tells you exactly what to do when a tornado is coming.",
            question: 'What is "Get In, Get Down, and Cover Up"?',
            hint: "Three actions — where you go, what you do, and how you protect yourself",
          },
          {
            answer: "Inside a home, these two rooms on the lowest floor are among the best places to shelter from a tornado.",
            question: "What is an interior closet or bathroom?",
            hint: "No windows, lots of walls between you and the storm",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A tornado sounds like this loud vehicle when it passes nearby.",
            question: "What is a freight train?",
            hint: "Choo choo... but MUCH scarier",
          },
          {
            answer: "Approximately this many tornadoes are reported across the United States each year.",
            question: "What is 1,000?",
            hint: "That's almost 3 a day somewhere in the country!",
          },
          {
            answer: "If a tornado catches you outside with no building nearby, you should find the lowest spot on the ground and do this.",
            question: "What is lie flat and cover your head with your hands?",
            hint: "Get as low as possible — you want to be smaller than the wind",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This is the difference between a Tornado WATCH and a Tornado WARNING.",
            question: "What is: a Watch means conditions could produce a tornado, a Warning means one has been spotted or detected?",
            hint: "One means 'be ready,' the other means 'take action NOW'",
          },
          {
            answer: "The scale used to rate tornado strength, from 0 to 5, based on the damage it causes.",
            question: "What is the Enhanced Fujita Scale (EF Scale)?",
            hint: "Named after the meteorologist who created the original version",
          },
          {
            answer: "On the Enhanced Fujita Scale, this is the highest and most destructive rating a tornado can receive.",
            question: "What is EF5?",
            hint: "Less than 1% of all tornadoes ever reach this level",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "You should put this on your head for protection if a tornado is coming and you don't have a helmet.",
            question: "What is a bike helmet, or cover your head with your arms, pillows, or blankets?",
            hint: "Protect your noggin!",
          },
          {
            answer: "If you are in a car when a tornado approaches and you cannot get to a sturdy building, experts say you should do this instead of trying to outrun it.",
            question: "What is get out of the car and lie flat in a low ditch, covering your head?",
            hint: "Cars can be tossed by tornadoes — a ditch is lower and sturdier",
          },
          {
            answer: "This is why you should NEVER shelter under a highway overpass during a tornado.",
            question: "What is that overpasses create a wind tunnel effect and offer no real protection?",
            hint: "It actually makes the wind faster and more dangerous right where you're hiding",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The region of the U.S. where the most tornadoes happen, which includes Oklahoma.",
            question: "What is Tornado Alley?",
            hint: "It's right here in our part of the country!",
          },
          {
            answer: "An EF5 tornado, the strongest category, has winds greater than this speed in miles per hour.",
            question: "What is 200 mph?",
            hint: "That's more than three times highway speed",
          },
          {
            answer: "Less than this percentage of all U.S. tornadoes are ever rated EF5.",
            question: "What is 1%?",
            hint: "They're incredibly rare — but incredibly deadly when they happen",
          },
        ],
      },
    ],
  },

  {
    name: "FLASH FLOODS",
    emoji: "🌊",
    color: "#0a1628",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The National Weather Service safety phrase that tells you never to drive through floodwater.",
            question: 'What is "Turn Around, Don\'t Drown"?',
            hint: "If the road is flooded, go the OTHER way",
          },
          {
            answer: "Flash floods are the number one cause of this in the United States, killing more people per year than tornadoes, hurricanes, or lightning.",
            question: "What are weather-related deaths?",
            hint: "It's the most dangerous weather event most people don't take seriously enough",
          },
          {
            answer: "The very first thing you should do when you hear or see water rushing toward you on the trail.",
            question: "What is drop your gear and move to higher ground immediately?",
            hint: "No backpack is worth your life",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This many inches of moving floodwater can knock a grown adult off their feet.",
            question: "What is 6 inches?",
            hint: "It's about as tall as a dollar bill is long",
          },
          {
            answer: "Nearly this fraction of all flash flood deaths happen when people try to drive through flooded roads.",
            question: "What is two-thirds?",
            hint: "More than half — and every one of those deaths was preventable",
          },
          {
            answer: "You should monitor this government agency's radio broadcasts to get flood warnings even when the power is out.",
            question: "What is NOAA (National Oceanic and Atmospheric Administration)?",
            hint: "They run the National Weather Service and broadcast alerts 24/7",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "When a flash flood is coming, you should immediately move to this kind of ground.",
            question: "What is higher ground?",
            hint: "Go UP, not down!",
          },
          {
            answer: "This many inches of fast-moving water is enough to carry away a small car.",
            question: "What is 12 inches (1 foot)?",
            hint: "About the height of a ruler — that's all it takes",
          },
          {
            answer: "Flash floods are different from regular floods because they develop in this amount of time after heavy rain.",
            question: "What is minutes to a few hours?",
            hint: "The word 'flash' is the clue — it happens very fast",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "This many feet of rushing water can sweep away an SUV or large truck.",
            question: "What is 2 feet?",
            hint: "It's about as tall as your knee — water is MUCH heavier than it looks",
          },
          {
            answer: "Flash floods kill more people per year than these three other major weather events combined.",
            question: "What are tornadoes, hurricanes, and lightning?",
            hint: "The most dangerous weather hazard is often the most underestimated",
          },
          {
            answer: "This is why a flooded road that looks calm and shallow is still extremely dangerous to drive through.",
            question: "What is that you cannot tell how deep it is, and moving water has hidden force that can sweep a car away?",
            hint: "Still water can hide a 3-foot drop underneath — you can't see the road surface",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Flash floods are different from regular floods because of this — they can happen in minutes or hours after heavy rain.",
            question: "What is speed (they happen very fast/suddenly)?",
            hint: "The word 'flash' gives you a clue!",
          },
          {
            answer: "Flood water is especially dangerous because this substance — often mixed into the water invisibly — can make it contaminated and unsafe to touch.",
            question: "What is sewage, chemicals, or other pollutants?",
            hint: "The water might look brownish-gray for a reason",
          },
          {
            answer: "According to NOAA, even if a flooded road has been safe to cross before, you should still do this every single time.",
            question: "What is turn around and find another route?",
            hint: "Conditions change — what was safe an hour ago may be deadly now",
          },
        ],
      },
    ],
  },

  {
    name: "WINTER STORMS",
    emoji: "❄️",
    color: "#0f172a",
    accent: "#a78bfa",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The dangerous condition when your body temperature drops too low from being out in the cold.",
            question: "What is hypothermia?",
            hint: "'Hypo' means low, 'thermia' means temperature",
          },
          {
            answer: "A body temperature below this number, in degrees Fahrenheit, is considered a hypothermia emergency.",
            question: "What is 95 degrees?",
            hint: "Normal body temperature is 98.6 — this is only a few degrees lower but very dangerous",
          },
          {
            answer: "These are typically the first body parts affected by frostbite when you're out in the cold.",
            question: "What are the fingers, nose, ears, cheeks, and toes?",
            hint: "The parts farthest from your heart — your body is protecting your core",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "You should dress this way in winter to stay warm — NOT with one big sweater.",
            question: "What is wearing layers of clothing?",
            hint: "Like an onion... or an ogre",
          },
          {
            answer: "When going outside in extreme cold, young children should wear this many more layers than an adult.",
            question: "What is one extra layer?",
            hint: "Their bodies lose heat faster than grown-ups",
          },
          {
            answer: "This term describes how much colder the wind makes your exposed skin feel compared to the actual air temperature.",
            question: "What is wind chill?",
            hint: "The thermometer might say 20°F, but this factor can make it feel like -10°F",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A blizzard must have winds of at least this speed (in mph) and last at least 3 hours.",
            question: "What is 35 mph?",
            hint: "That's about the speed limit on a neighborhood street",
          },
          {
            answer: "These are warning signs that a person may be suffering from hypothermia.",
            question: "What are shivering, confusion, slurred speech, and fumbling hands?",
            hint: "Their body is struggling to stay warm — they need help immediately",
          },
          {
            answer: "Wind chill is a measure of how cold the wind makes your skin feel — but this is what the thermometer is actually measuring.",
            question: "What is the air temperature (not the wind chill)?",
            hint: "Wind chill is how it FEELS, not what the thermometer reads",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "This condition happens when skin on your fingers, ears, nose, or toes freezes and turns pale or gray.",
            question: "What is frostbite?",
            hint: "Jack Frost is literally 'biting' you!",
          },
          {
            answer: "During a blizzard, a NWS blizzard warning also requires visibility to drop below this distance.",
            question: "What is a quarter mile?",
            hint: "That's about 4 city blocks — you literally can't see anything",
          },
          {
            answer: "If you are stranded in your car during a winter storm, you should run the engine only 10 minutes per hour and check this regularly to avoid carbon monoxide poisoning.",
            question: "What is the exhaust pipe (to make sure it's not blocked by snow)?",
            hint: "Snow can plug the pipe and send deadly gas back into the car",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "During a winter storm power outage, you should NEVER use a generator in this location because of carbon monoxide.",
            question: "What is indoors (or inside your house/garage)?",
            hint: "Generators make an invisible, deadly gas",
          },
          {
            answer: "This colorless, odorless gas — produced by generators, camp stoves, and gas heaters — is why you should never run them indoors.",
            question: "What is carbon monoxide?",
            hint: "You can't see it, smell it, or taste it — install a detector!",
          },
          {
            answer: "The Red Cross recommends keeping one of these kits in your car during winter, in case you become stranded in a storm.",
            question: "What is a winter survival kit (with blankets, snacks, water, flashlight, and a whistle)?",
            hint: "You might be sitting in that car for hours — be ready",
          },
        ],
      },
    ],
  },

  {
    name: "BE PREPARED",
    emoji: "⚡",
    color: "#1a0f0a",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Every family should have one of these kits ready with water, food, flashlight, and a first aid kit.",
            question: "What is an emergency kit (or disaster supply kit)?",
            hint: "Pack it BEFORE the emergency happens",
          },
          {
            answer: "FEMA recommends that every family have at least this many days' worth of supplies in their emergency kit.",
            question: "What is 3 days (72 hours)?",
            hint: "Help may not arrive immediately — you need to be able to manage on your own",
          },
          {
            answer: "This hand-powered or battery-powered device in your emergency kit lets you hear weather alerts even when the electricity is out.",
            question: "What is a hand-crank or battery-powered radio?",
            hint: "No power? No internet? No problem — if you have this",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Your family should plan to have at least this much water per person per day in an emergency.",
            question: "What is one gallon?",
            hint: "Think of a big milk jug",
          },
          {
            answer: "This type of food is best to store in an emergency kit because it lasts a long time without refrigeration.",
            question: "What is non-perishable or canned food?",
            hint: "Peanut butter, canned beans, granola bars — things that last on the shelf",
          },
          {
            answer: "For a family of four, the total amount of water FEMA recommends storing for a 3-day emergency kit.",
            question: "What is 12 gallons?",
            hint: "4 people × 1 gallon × 3 days — do the math!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This is the 3-digit number you call in any emergency.",
            question: "What is 9-1-1?",
            hint: "Every Scout should know this one!",
          },
          {
            answer: "Your family's fire escape plan should always include at least this many ways out of every room.",
            question: "What is two ways out?",
            hint: "One might be blocked by smoke or fire — always have a backup",
          },
          {
            answer: "During a disaster, local phone lines can get jammed. Your family plan should include a contact person in this location who everyone can call.",
            question: "What is out of state (a distant relative or family friend)?",
            hint: "Long-distance calls often go through even when local lines are overloaded",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Your family should have a plan for where to meet if you get separated during a disaster. This is called a family _____ plan.",
            question: "What is a family communication plan (or meeting plan)?",
            hint: "How will you find each other?",
          },
          {
            answer: "Your family's emergency meeting spot should be at this location outside your home in case of fire.",
            question: "What is a specific spot in front of the house (like a neighbor's mailbox or a specific tree)?",
            hint: "Everyone needs to know exactly where to go — 'outside' isn't specific enough",
          },
          {
            answer: "The Red Cross recommends keeping a winter survival kit in this location so you're prepared if you get stranded during a storm.",
            question: "What is your car?",
            hint: "You might be stuck in it for hours — blankets, snacks, and a flashlight go a long way",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A battery-powered or hand-crank version of this device helps you get weather updates when the power is out.",
            question: "What is a weather radio (or NOAA radio)?",
            hint: "No electricity or internet needed!",
          },
          {
            answer: "The government agency that broadcasts weather alerts on NOAA Weather Radio 24 hours a day, 7 days a week.",
            question: "What is NOAA — the National Oceanic and Atmospheric Administration?",
            hint: "They also run the National Weather Service",
          },
          {
            answer: "In addition to water, food, and a flashlight, the Red Cross says every home emergency kit should include one of these to treat cuts and injuries.",
            question: "What is a first aid kit?",
            hint: "Bandages, antiseptic, gloves — the basics for handling minor injuries while you wait for help",
          },
        ],
      },
    ],
  },
];
