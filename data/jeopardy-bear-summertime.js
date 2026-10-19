// Jeopardy question bank — Summertime Fun (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   CDC Heat and Health – https://www.cdc.gov/heat-health/
//   American Academy of Dermatology — Sun Safety – https://www.aad.org/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_SUMMERTIME = [
  {
    name: "SUN SAFETY",
    emoji: "☀️",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Lotion that protects your skin from the sun.",
            question: "What is sunscreen?",
            hint: "Rub it in",
          },
          {
            answer: "A hat with a wide brim protects your face and this.",
            question: "What is your neck (ears)?",
            hint: "Shade!",
          },
          {
            answer: "These protect your eyes from bright sun.",
            question: "What are sunglasses?",
            hint: "Cool shades",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Red, painful skin from too much sun.",
            question: "What is sunburn?",
            hint: "Ouch!",
          },
          {
            answer: "SPF on sunscreen stands for Sun Protection this.",
            question: "What is Factor?",
            hint: "S-P-F",
          },
          {
            answer: "Sunscreen should be at least this SPF number.",
            question: "What is 30?",
            hint: "Thirty",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "You should put on more sunscreen about every this many hours.",
            question: "What is two?",
            hint: "And after swimming",
          },
          {
            answer: "The sun is strongest between these hours.",
            question: "What is 10 a.m. and 4 p.m.?",
            hint: "Middle of the day",
          },
          {
            answer: "Sitting under a tree or umbrella gives you this.",
            question: "What is shade?",
            hint: "Cool spot",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Invisible rays from the sun that cause sunburn.",
            question: "What are UV (ultraviolet) rays?",
            hint: "U-V",
          },
          {
            answer: "You can get sunburned even on this kind of day.",
            question: "What is a cloudy day?",
            hint: "Clouds don't block it all",
          },
          {
            answer: "Water, sand, and snow make sunburn worse because they do this to sunlight.",
            question: "What is reflect it?",
            hint: "Bounce!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Sunscreen should be put on this many minutes before going outside.",
            question: "What is 15?",
            hint: "Quarter hour",
          },
          {
            answer: "\"Broad spectrum\" sunscreen protects from UVA and this.",
            question: "What is UVB?",
            hint: "Two kinds",
          },
          {
            answer: "The UV index tells you this.",
            question: "What is how strong the sun is?",
            hint: "Higher = stronger",
          },
        ],
      },
    ],
  },
  {
    name: "STAY COOL",
    emoji: "💧",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "On hot days, drink lots of this.",
            question: "What is water?",
            hint: "H2O",
          },
          {
            answer: "When you're hot, your body does this to cool down.",
            question: "What is sweat?",
            hint: "Drip drip",
          },
          {
            answer: "A cool place to take a break on a hot day.",
            question: "What is shade (indoors)?",
            hint: "Out of the sun",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Not having enough water in your body.",
            question: "What is dehydration?",
            hint: "De-hydrate",
          },
          {
            answer: "Wearing these colors helps you stay cooler.",
            question: "What are light colors?",
            hint: "White reflects",
          },
          {
            answer: "Feeling dizzy and sweaty on a hot day can be a sign of heat this.",
            question: "What is exhaustion?",
            hint: "Tired!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A very dangerous heat sickness where the body stops sweating.",
            question: "What is heat stroke?",
            hint: "Emergency!",
          },
          {
            answer: "You should drink water before you feel this.",
            question: "What is thirsty?",
            hint: "Don't wait",
          },
          {
            answer: "Playing in a sprinkler is a fun way to do this.",
            question: "What is cool off?",
            hint: "Splash!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Dark yellow pee can mean you need more of this.",
            question: "What is water?",
            hint: "Drink up!",
          },
          {
            answer: "Never leave kids or pets in a hot one of these.",
            question: "What is a car?",
            hint: "Gets super hot",
          },
          {
            answer: "A wet bandana around your neck helps you do this.",
            question: "What is stay cool?",
            hint: "Ahh",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "If someone has heat exhaustion, move them to shade and give them this.",
            question: "What is water (cool drinks)?",
            hint: "Cool down",
          },
          {
            answer: "Fruits like watermelon help you stay hydrated because they're full of this.",
            question: "What is water?",
            hint: "Juicy",
          },
          {
            answer: "Sports drinks replace salts in your body called these.",
            question: "What are electrolytes?",
            hint: "Electric!",
          },
        ],
      },
    ],
  },
  {
    name: "SUMMER CRITTERS",
    emoji: "🦟",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Buzzing bugs that bite and leave itchy bumps.",
            question: "What are mosquitoes?",
            hint: "Bzzz slap!",
          },
          {
            answer: "Bugs that light up on summer nights.",
            question: "What are fireflies (lightning bugs)?",
            hint: "Glow!",
          },
          {
            answer: "Spray that keeps bugs away.",
            question: "What is bug spray (insect repellent)?",
            hint: "Psst!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Tiny bugs that stick to skin and should be checked for after hiking.",
            question: "What are ticks?",
            hint: "Check!",
          },
          {
            answer: "These insects chirp at night by rubbing their wings.",
            question: "What are crickets?",
            hint: "Chirp chirp",
          },
          {
            answer: "Mosquitoes lay eggs in still this.",
            question: "What is water?",
            hint: "Puddles",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A plant with three shiny leaves that makes you itch.",
            question: "What is poison ivy?",
            hint: "Leaves of three",
          },
          {
            answer: "Bees can sting when they feel this.",
            question: "What is scared (threatened)?",
            hint: "Leave them be",
          },
          {
            answer: "A tick should be removed with these.",
            question: "What are tweezers?",
            hint: "Pinch and pull",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Fireflies light up to find these.",
            question: "What are mates (other fireflies)?",
            hint: "Flashing hello",
          },
          {
            answer: "Wearing long sleeves and pants helps protect you from these.",
            question: "What are bugs (ticks)?",
            hint: "Cover up",
          },
          {
            answer: "Cicadas that come out every 13 or 17 years are called this.",
            question: "What are periodical cicadas?",
            hint: "So loud!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A firefly's glow is made by a chemical reaction called this.",
            question: "What is bioluminescence?",
            hint: "Living light",
          },
          {
            answer: "Ticks like to hide in tall grass and in these places on your body.",
            question: "What are warm spots (behind ears, knees, hair)?",
            hint: "Check everywhere",
          },
          {
            answer: "Only female mosquitoes do this.",
            question: "What is bite?",
            hint: "They need blood",
          },
        ],
      },
    ],
  },
  {
    name: "SUMMER GAMES",
    emoji: "🏖️",
    color: "#1a0a1a",
    accent: "#ec4899",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Filled with water and thrown at friends.",
            question: "What are water balloons?",
            hint: "Splash!",
          },
          {
            answer: "A flying disc game.",
            question: "What is Frisbee?",
            hint: "Fly!",
          },
          {
            answer: "A game where you hide and others look.",
            question: "What is hide-and-seek?",
            hint: "Ready or not!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A summer camp for Cub Scouts during the day.",
            question: "What is day camp?",
            hint: "Sun's up",
          },
          {
            answer: "A game played with a ball, bat, and bases.",
            question: "What is baseball (kickball)?",
            hint: "Home run!",
          },
          {
            answer: "A game where you catch glowing bugs at night.",
            question: "What is catching fireflies?",
            hint: "Jar!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Drawing a court on the sidewalk and hopping.",
            question: "What is hopscotch?",
            hint: "Hop!",
          },
          {
            answer: "A game of throwing bean bags at a board with a hole.",
            question: "What is cornhole?",
            hint: "Bag in the hole!",
          },
          {
            answer: "Squirting water from guns at each other.",
            question: "What is a water fight?",
            hint: "Splash!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A camp where Cub Scouts stay overnight with their families.",
            question: "What is family camp (resident camp)?",
            hint: "Sleep over!",
          },
          {
            answer: "The award a pack earns for holding one Scouting event in each of June, July, and August.",
            question: "What is the National Summertime Pack Award?",
            hint: "Summer + award",
          },
          {
            answer: "Popsicles melt fast because heat makes ice do this.",
            question: "What is melt?",
            hint: "Drip!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Making shadows of animals with your hands is called this.",
            question: "What is shadow puppets?",
            hint: "Flashlight fun",
          },
          {
            answer: "A day with the most daylight of the year is the summer this.",
            question: "What is solstice?",
            hint: "June 20 or 21",
          },
          {
            answer: "The star pattern shaped like a big ladle that you can find on summer nights.",
            question: "What is the Big Dipper?",
            hint: "Big spoon",
          },
        ],
      },
    ],
  },
];
