// Jeopardy question bank — Paws for Action (Bear Required — Citizenship)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   U.S. Flag Code (4 U.S.C. §§ 5–10) – https://www.law.cornell.edu/uscode/text/4/chapter-1
//   U.S. Fish & Wildlife — Bald Eagle – https://www.fws.gov/species/bald-eagle-haliaeetus-leucocephalus
//   National Park Service — Statue of Liberty & Liberty Bell – https://www.nps.gov/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_PAWS = [
  {
    name: "FLAG FACTS",
    emoji: "🇺🇸",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The U.S. flag has this many stars.",
            question: "What is 50?",
            hint: "One for each state",
          },
          {
            answer: "The U.S. flag has this many stripes.",
            question: "What is 13?",
            hint: "One for each original colony",
          },
          {
            answer: "The three colors of the U.S. flag.",
            question: "What are red, white, and blue?",
            hint: "Look at the flag!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Each star on the flag stands for one of these.",
            question: "What is a state?",
            hint: "There are 50 of them",
          },
          {
            answer: "The 13 stripes stand for the 13 original these.",
            question: "What are colonies?",
            hint: "Before they were states",
          },
          {
            answer: "The flag's stars are on a field of this color.",
            question: "What is blue?",
            hint: "The top corner",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A famous nickname for the U.S. flag: \"Old ____.\"",
            question: "What is Glory?",
            hint: "Old Glory",
          },
          {
            answer: "Flag Day is celebrated on this date.",
            question: "What is June 14?",
            hint: "In June, the middle of the month",
          },
          {
            answer: "The flag has 7 stripes of this color.",
            question: "What is red?",
            hint: "One more than white",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "This man wrote \"The Star-Spangled Banner\" after watching a flag survive a battle.",
            question: "Who is Francis Scott Key?",
            hint: "His last name opens doors",
          },
          {
            answer: "\"The Star-Spangled Banner\" is the national this.",
            question: "What is anthem (song)?",
            hint: "We stand and sing it",
          },
          {
            answer: "The last star added to the flag was for this state in 1960.",
            question: "What is Hawaii?",
            hint: "Aloha!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Legend says this woman sewed one of the first American flags.",
            question: "Who is Betsy Ross?",
            hint: "She lived in Philadelphia",
          },
          {
            answer: "When you say the Pledge of Allegiance out of uniform, you place this hand over your heart.",
            question: "What is the right hand?",
            hint: "Not the left",
          },
          {
            answer: "The flag has had this many stars since 1960.",
            question: "What is 50?",
            hint: "Hasn't changed since Hawaii joined",
          },
        ],
      },
    ],
  },
  {
    name: "FLAG ETIQUETTE",
    emoji: "🎌",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The U.S. flag should never touch this.",
            question: "What is the ground?",
            hint: "Keep it up high",
          },
          {
            answer: "When you raise the flag, you do it this way.",
            question: "What is quickly (briskly)?",
            hint: "Up fast!",
          },
          {
            answer: "When you lower the flag, you do it this way.",
            question: "What is slowly (with ceremony)?",
            hint: "Down slow",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A flag folded the proper way ends up in this shape.",
            question: "What is a triangle?",
            hint: "Three sides",
          },
          {
            answer: "When the flag is folded correctly, only this part shows.",
            question: "What are the stars (blue field)?",
            hint: "The top corner",
          },
          {
            answer: "A flag flown halfway down the pole is at this.",
            question: "What is half-staff (half-mast)?",
            hint: "Half...",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Flags fly at half-staff to show this.",
            question: "What is respect (sadness when someone important dies)?",
            hint: "Remembering someone",
          },
          {
            answer: "To put a flag at half-staff, you first raise it to this spot.",
            question: "What is the top?",
            hint: "All the way up, then down halfway",
          },
          {
            answer: "It takes this many people to fold a flag the right way.",
            question: "What is two?",
            hint: "A pair",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "If the flag is flown at night, it should have this on it.",
            question: "What is a light?",
            hint: "So it can be seen",
          },
          {
            answer: "The flag should be flown only on dry days, unless it's made to handle this.",
            question: "What is bad weather (rain)?",
            hint: "All-weather flags",
          },
          {
            answer: "When the flag passes in a parade, Scouts in uniform do this.",
            question: "What is salute?",
            hint: "Two fingers to the cap",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A worn-out flag should be retired with respect, usually in this kind of ceremony.",
            question: "What is a flag retirement ceremony (burning)?",
            hint: "Done with dignity",
          },
          {
            answer: "When the U.S. flag is with other flags on the same pole, it goes in this spot.",
            question: "What is the top?",
            hint: "Highest place of honor",
          },
          {
            answer: "The proper flag fold has this many folds, like the 13 stripes.",
            question: "What is 13?",
            hint: "Same as the stripes",
          },
        ],
      },
    ],
  },
  {
    name: "U.S. SYMBOLS",
    emoji: "🦅",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The national bird of the United States.",
            question: "What is the bald eagle?",
            hint: "It isn't really bald!",
          },
          {
            answer: "This big green statue holding a torch stands in New York Harbor.",
            question: "What is the Statue of Liberty?",
            hint: "Lady Liberty",
          },
          {
            answer: "This famous bell in Philadelphia has a big crack.",
            question: "What is the Liberty Bell?",
            hint: "Ding dong!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This country gave the Statue of Liberty to the United States.",
            question: "What is France?",
            hint: "Bonjour!",
          },
          {
            answer: "The President of the United States lives here.",
            question: "What is the White House?",
            hint: "It's a color",
          },
          {
            answer: "A man with a white beard and a star hat who stands for the U.S.",
            question: "Who is Uncle Sam?",
            hint: "He says \"I want YOU\"",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This mountain has the faces of four presidents carved into it.",
            question: "What is Mount Rushmore?",
            hint: "In South Dakota",
          },
          {
            answer: "The bald eagle got this nickname because of its white feathered head.",
            question: "What is bald?",
            hint: "From an old word for \"white\"",
          },
          {
            answer: "The national mammal of the U.S. is this big shaggy animal.",
            question: "What is the bison (buffalo)?",
            hint: "Roamed the plains",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Washington, Jefferson, Theodore Roosevelt, and this president are on Mount Rushmore.",
            question: "Who is Abraham Lincoln?",
            hint: "Honest Abe",
          },
          {
            answer: "The national flower of the United States.",
            question: "What is the rose?",
            hint: "Red, thorny, and smells sweet",
          },
          {
            answer: "The Liberty Bell is in this city.",
            question: "What is Philadelphia?",
            hint: "Starts with \"Phil\"",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "\"E pluribus unum,\" on our money, means this.",
            question: "What is \"Out of many, one\"?",
            hint: "Many states, one country",
          },
          {
            answer: "The Statue of Liberty's crown has this many points (rays).",
            question: "What is seven?",
            hint: "Days in a week",
          },
          {
            answer: "The national tree of the United States.",
            question: "What is the oak?",
            hint: "Acorns grow on it",
          },
        ],
      },
    ],
  },
  {
    name: "NONPROFITS & SERVICE",
    emoji: "🤝",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A group that helps people and doesn't try to make money for owners is called this.",
            question: "What is a nonprofit?",
            hint: "Non + profit",
          },
          {
            answer: "People who help without getting paid.",
            question: "What are volunteers?",
            hint: "They volunteer their time",
          },
          {
            answer: "A place that collects food for families who need it.",
            question: "What is a food bank (food pantry)?",
            hint: "Food + bank",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A place that cares for dogs and cats until they find homes.",
            question: "What is an animal shelter?",
            hint: "Adopt a pet!",
          },
          {
            answer: "Money people give to help a nonprofit is called this.",
            question: "What is a donation?",
            hint: "A gift",
          },
          {
            answer: "Doing work to help your community, like picking up litter, is called this.",
            question: "What is a service project?",
            hint: "Service!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Cub Scout packs sell this snack to raise money.",
            question: "What is popcorn?",
            hint: "Pop pop pop",
          },
          {
            answer: "A nonprofit's main purpose or goal is called its this.",
            question: "What is mission?",
            hint: "Like a secret agent's job",
          },
          {
            answer: "A car wash or bake sale to raise money is called this.",
            question: "What is a fundraiser?",
            hint: "Fund + raise",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The group that helps people after disasters and collects blood.",
            question: "What is the Red Cross?",
            hint: "A red symbol",
          },
          {
            answer: "Scouting America is this kind of organization.",
            question: "What is a nonprofit?",
            hint: "It's not a business",
          },
          {
            answer: "The Scout Oath promise that service projects help you keep.",
            question: "What is \"to help other people at all times\"?",
            hint: "Duty to others",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Money a nonprofit gets from a big organization or the government for a project.",
            question: "What is a grant?",
            hint: "Sounds like a name",
          },
          {
            answer: "A Scout slogan that means doing something nice for someone every day.",
            question: "What is \"Do a Good Turn Daily\"?",
            hint: "Good ____ daily",
          },
          {
            answer: "Volunteers are important because they help a nonprofit save this.",
            question: "What is money?",
            hint: "They work for free",
          },
        ],
      },
    ],
  },
];
