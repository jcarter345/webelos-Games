// Jeopardy question bank — Roaring Laughter (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scouting America Campfire Program Planner – https://www.scouting.org/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_LAUGHTER = [
  {
    name: "JOKE TIME",
    emoji: "😂",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Why did the bear cross the road? To get to the other this!",
            question: "What is side?",
            hint: "Classic!",
          },
          {
            answer: "A joke that starts with \"Knock knock.\" The listener says this.",
            question: "What is \"Who's there?\"",
            hint: "Then the name...",
          },
          {
            answer: "What do you call a bear with no teeth? A gummy this!",
            question: "What is bear?",
            hint: "Candy!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "What do you call a sleeping dinosaur? A dino-this!",
            question: "What is snore?",
            hint: "Zzz",
          },
          {
            answer: "Why are fish so smart? Because they live in these!",
            question: "What are schools?",
            hint: "School of fish",
          },
          {
            answer: "What has a face and two hands but no arms or legs?",
            question: "What is a clock?",
            hint: "Tick tock",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A joke that plays on words that sound alike.",
            question: "What is a pun?",
            hint: "Rhymes with \"fun\"",
          },
          {
            answer: "What did the ocean say to the beach? Nothing, it just did this!",
            question: "What is waved?",
            hint: "Hi!",
          },
          {
            answer: "The last line of a joke that makes people laugh.",
            question: "What is the punch line?",
            hint: "Pow!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Why did the scarecrow win an award? Because he was outstanding in his this!",
            question: "What is field?",
            hint: "Out standing",
          },
          {
            answer: "What do you call cheese that isn't yours? Nacho this!",
            question: "What is cheese?",
            hint: "Nacho = not your",
          },
          {
            answer: "What kind of tree fits in your hand? A palm this!",
            question: "What is tree?",
            hint: "Hand part!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Telling a joke at the right moment is called good comic this.",
            question: "What is timing?",
            hint: "When to say it",
          },
          {
            answer: "Laughing releases happy chemicals in your brain called these.",
            question: "What are endorphins?",
            hint: "Feel-good chemicals",
          },
          {
            answer: "A good joke never makes fun of these.",
            question: "What are other people's feelings (people)?",
            hint: "Be kind",
          },
        ],
      },
    ],
  },
  {
    name: "TONGUE TWISTERS",
    emoji: "👅",
    color: "#1a0a1a",
    accent: "#ec4899",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "\"Peter Piper picked a peck of pickled ____.\"",
            question: "What are peppers?",
            hint: "Spicy!",
          },
          {
            answer: "\"She sells sea shells by the sea ____.\"",
            question: "What is shore?",
            hint: "Beach",
          },
          {
            answer: "\"How much wood would a woodchuck chuck if a woodchuck could chuck ____?\"",
            question: "What is wood?",
            hint: "Same word again",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "\"Red lorry, yellow ____.\"",
            question: "What is lorry?",
            hint: "A truck in England",
          },
          {
            answer: "\"Toy boat\" — say it this many times fast and it gets hard.",
            question: "What is five (or more)?",
            hint: "Try it!",
          },
          {
            answer: "A sentence that's hard to say fast is called this.",
            question: "What is a tongue twister?",
            hint: "Twisty tongue",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "\"Fuzzy Wuzzy was a ____.\"",
            question: "What is a bear?",
            hint: "That's us!",
          },
          {
            answer: "\"Betty Botter bought some ____.\"",
            question: "What is butter?",
            hint: "But...",
          },
          {
            answer: "\"Unique New York\" is hard because it repeats these sounds.",
            question: "What are \"n\" and \"y\" (similar sounds)?",
            hint: "Mouth gymnastics",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "\"Six slippery snails slid slowly ____.\"",
            question: "What is seaward?",
            hint: "Toward the sea",
          },
          {
            answer: "\"I scream, you scream, we all scream for ____.\"",
            question: "What is ice cream?",
            hint: "Cold treat",
          },
          {
            answer: "Tongue twisters help actors and speakers practice this.",
            question: "What is speaking clearly (diction)?",
            hint: "Clear words",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "\"Fuzzy Wuzzy had no ____.\"",
            question: "What is hair?",
            hint: "Bald bear!",
          },
          {
            answer: "Repeating the same beginning sound in words is called this.",
            question: "What is alliteration?",
            hint: "Peter Piper picked...",
          },
          {
            answer: "A tongue twister in which you say \"Irish wristwatch\" is hard because of this sound.",
            question: "What is the \"r\" (or \"sh\") sound?",
            hint: "Try it fast!",
          },
        ],
      },
    ],
  },
  {
    name: "CHARADES & SKITS",
    emoji: "🎭",
    color: "#0f0a1a",
    accent: "#a78bfa",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A game where you act out words without talking.",
            question: "What is charades?",
            hint: "Shhh, act it!",
          },
          {
            answer: "In charades, you can't use this.",
            question: "What is your voice (words)?",
            hint: "Silent!",
          },
          {
            answer: "A short, funny play acted out at a campfire.",
            question: "What is a skit?",
            hint: "Act!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Tapping your arm with fingers in charades means the word has this many these.",
            question: "What are syllables?",
            hint: "Parts of a word",
          },
          {
            answer: "Pretending to crank an old movie camera in charades means this.",
            question: "What is a movie?",
            hint: "Lights, camera!",
          },
          {
            answer: "A super-short joke acted out between campfire skits.",
            question: "What is a run-on?",
            hint: "Runs on stage",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Holding your hands like an open book means this in charades.",
            question: "What is a book (title)?",
            hint: "Open it!",
          },
          {
            answer: "A skit should never be this toward others.",
            question: "What is mean (hurtful)?",
            hint: "Keep it kind",
          },
          {
            answer: "Actors who make up lines on the spot are doing this.",
            question: "What is improv (improvisation)?",
            hint: "No script",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Cupping your hand to your ear in charades means \"sounds like.\" This hint gives a word that does this.",
            question: "What is rhymes?",
            hint: "Same ending",
          },
          {
            answer: "Funny campfire skits are part of this kind of program.",
            question: "What is a campfire program?",
            hint: "Around the fire",
          },
          {
            answer: "A song where everyone repeats lines after the leader.",
            question: "What is a repeat-after-me song (echo song)?",
            hint: "Echo!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Making silly faces without words is called this.",
            question: "What is pantomime (mime)?",
            hint: "No sound",
          },
          {
            answer: "The person who runs a campfire program is called this.",
            question: "What is the master of ceremonies (emcee)?",
            hint: "M.C.",
          },
          {
            answer: "Holding up one finger at the start of charades means this word.",
            question: "What is the first word?",
            hint: "Number one",
          },
        ],
      },
    ],
  },
  {
    name: "RIDDLES",
    emoji: "❓",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "What has to be broken before you can use it?",
            question: "What is an egg?",
            hint: "Breakfast",
          },
          {
            answer: "What gets wetter the more it dries?",
            question: "What is a towel?",
            hint: "After a bath",
          },
          {
            answer: "What has keys but can't open locks?",
            question: "What is a piano (keyboard)?",
            hint: "Plink!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "What has legs but can't walk?",
            question: "What is a table (chair)?",
            hint: "Furniture",
          },
          {
            answer: "What goes up but never comes down?",
            question: "What is your age?",
            hint: "Birthday!",
          },
          {
            answer: "What has a neck but no head?",
            question: "What is a bottle?",
            hint: "Drink up",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "What can you catch but not throw?",
            question: "What is a cold?",
            hint: "Achoo!",
          },
          {
            answer: "What has many teeth but can't bite?",
            question: "What is a comb?",
            hint: "Hair tool",
          },
          {
            answer: "The more you take, the more you leave behind. What are they?",
            question: "What are footsteps?",
            hint: "Walking",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "What runs but never walks?",
            question: "What is water (a river)?",
            hint: "Flows",
          },
          {
            answer: "What has one eye but can't see?",
            question: "What is a needle?",
            hint: "Sewing",
          },
          {
            answer: "What can travel around the world while staying in a corner?",
            question: "What is a stamp?",
            hint: "On an envelope",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "What word is spelled wrong in every dictionary?",
            question: "What is \"wrong\"?",
            hint: "Read it again!",
          },
          {
            answer: "What belongs to you but other people use it more?",
            question: "What is your name?",
            hint: "They call you",
          },
          {
            answer: "I'm tall when I'm young and short when I'm old. What am I?",
            question: "What is a candle?",
            hint: "Melts!",
          },
        ],
      },
    ],
  },
];
