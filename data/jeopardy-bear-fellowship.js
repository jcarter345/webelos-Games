// Jeopardy question bank — Fellowship (Bear Required — Family & Reverence)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Library of Congress — Holidays – https://www.loc.gov/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_FELLOWSHIP = [
  {
    name: "KINDNESS",
    emoji: "💝",
    color: "#1a0a1a",
    accent: "#ec4899",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Doing something nice for someone without being asked is called an act of this.",
            question: "What is kindness?",
            hint: "Be kind!",
          },
          {
            answer: "Holding the door for someone is an example of being this.",
            question: "What is courteous (polite, kind)?",
            hint: "Good manners",
          },
          {
            answer: "The Scout slogan is \"Do a Good Turn\" this often.",
            question: "What is daily (every day)?",
            hint: "Every single day",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Writing a thank-you note shows this feeling.",
            question: "What is gratitude (thankfulness)?",
            hint: "Thank you!",
          },
          {
            answer: "Sharing your snack with a friend who forgot theirs is an act of this.",
            question: "What is kindness (generosity)?",
            hint: "Sharing is caring",
          },
          {
            answer: "Helping with chores at home without being asked is a way to help this group of people.",
            question: "What is your family?",
            hint: "People at home",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A kind act done secretly, where no one knows it was you.",
            question: "What is a secret good deed (random act of kindness)?",
            hint: "Shhh!",
          },
          {
            answer: "Visiting or making cards for people at a nursing home brings them this.",
            question: "What is joy (happiness)?",
            hint: "Smiles!",
          },
          {
            answer: "Picking up litter is an act of kindness toward this.",
            question: "What is the Earth (nature, your community)?",
            hint: "Our planet",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Kindness can spread, because people who get kindness often do this.",
            question: "What is pass it on (do something kind too)?",
            hint: "Pay it forward",
          },
          {
            answer: "Including a new kid in your game is being this Scout Law point.",
            question: "What is friendly?",
            hint: "Make a friend",
          },
          {
            answer: "Helping people when they need it is the Scout Law point that's spelled H-E-L-P-F-U-L.",
            question: "What is helpful?",
            hint: "Spell it out!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Treating others the way you want to be treated is called this \"rule.\"",
            question: "What is the Golden Rule?",
            hint: "It's the color of a shiny metal",
          },
          {
            answer: "A big word for caring about how others feel and wanting to help.",
            question: "What is compassion?",
            hint: "Starts with \"com\"",
          },
          {
            answer: "Kindness to animals, like feeding your pet on time, is a way to be this Scout Law point.",
            question: "What is kind?",
            hint: "Rhymes with \"find\"",
          },
        ],
      },
    ],
  },
  {
    name: "TRADITIONS",
    emoji: "🏡",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Something a family does again and again, often on special days.",
            question: "What is a tradition?",
            hint: "Every year the same way",
          },
          {
            answer: "Eating a special meal together on a holiday is an example of this.",
            question: "What is a family tradition?",
            hint: "Grandma's recipe!",
          },
          {
            answer: "Baking a cake and singing on this special day is a tradition for many families.",
            question: "What is a birthday?",
            hint: "Happy ____ to you!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Telling stories about grandparents and great-grandparents helps you learn your family's this.",
            question: "What is history?",
            hint: "His + story",
          },
          {
            answer: "A drawing of all your relatives, with branches.",
            question: "What is a family tree?",
            hint: "It has roots!",
          },
          {
            answer: "Recipes passed down from grandparents are a way to keep these alive.",
            question: "What are traditions?",
            hint: "Old family ways",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Some families give thanks before meals by saying this.",
            question: "What is grace (a blessing or prayer)?",
            hint: "A short thank-you before eating",
          },
          {
            answer: "A gathering where many relatives come together.",
            question: "What is a family reunion?",
            hint: "Re + union",
          },
          {
            answer: "Old pictures of your family are kept in this.",
            question: "What is a photo album?",
            hint: "Flip the pages",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Making a new tradition, like family game night, can bring a family this.",
            question: "What is closer (together)?",
            hint: "Family time",
          },
          {
            answer: "Asking older relatives questions about their childhood is called an oral this.",
            question: "What is history?",
            hint: "Spoken stories",
          },
          {
            answer: "The country your family's ancestors came from is part of your this.",
            question: "What is heritage?",
            hint: "Where you come from",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Some families light candles or give gifts during holidays to celebrate this time of year.",
            question: "What is winter (the holiday season)?",
            hint: "December!",
          },
          {
            answer: "A family tradition can be as simple as eating pancakes on this day of the week.",
            question: "What is any day (like Saturday or Sunday)?",
            hint: "Weekend breakfast!",
          },
          {
            answer: "Respecting other people's traditions, even if yours are different, shows this Scout Law point.",
            question: "What is reverent (or friendly)?",
            hint: "Last point of the Law",
          },
        ],
      },
    ],
  },
  {
    name: "CELEBRATIONS",
    emoji: "🎉",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A holiday in November when Americans give thanks and often eat turkey.",
            question: "What is Thanksgiving?",
            hint: "Gobble gobble",
          },
          {
            answer: "The holiday on July 4th that celebrates America's birthday.",
            question: "What is Independence Day (the Fourth of July)?",
            hint: "Fireworks!",
          },
          {
            answer: "People celebrate this holiday on January 1st.",
            question: "What is New Year's Day?",
            hint: "Happy New Year!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Hanukkah is celebrated for this many nights.",
            question: "What is eight?",
            hint: "Light a candle each night",
          },
          {
            answer: "A candleholder used during Hanukkah.",
            question: "What is a menorah?",
            hint: "It holds 9 candles",
          },
          {
            answer: "Diwali, celebrated by Hindus, Sikhs, and Jains, is called the Festival of these.",
            question: "What are lights?",
            hint: "Lamps glow everywhere",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Lunar New Year is celebrated in many Asian countries; kids often get envelopes of this color.",
            question: "What is red?",
            hint: "Lucky color!",
          },
          {
            answer: "Eid al-Fitr is a Muslim holiday that marks the end of this month of fasting.",
            question: "What is Ramadan?",
            hint: "A holy month",
          },
          {
            answer: "Christmas, celebrated on December 25, is a Christian holiday that celebrates the birth of this person.",
            question: "Who is Jesus?",
            hint: "The center of the Christian faith",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Kwanzaa lasts seven days and uses a candleholder called this.",
            question: "What is a kinara?",
            hint: "Starts with \"k\"",
          },
          {
            answer: "Easter is a Christian holiday celebrated in this season.",
            question: "What is spring?",
            hint: "Flowers bloom",
          },
          {
            answer: "Día de los Muertos (Day of the Dead), from Mexico, honors family members who have done this.",
            question: "What is died (passed away)?",
            hint: "Remembering loved ones",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Passover is a Jewish holiday that remembers the Israelites' escape from this land.",
            question: "What is Egypt?",
            hint: "Pyramids!",
          },
          {
            answer: "Memorial Day is a holiday to remember these people who died serving our country.",
            question: "What are military members (soldiers)?",
            hint: "People who served",
          },
          {
            answer: "Lunar New Year gives each year one of these 12 animals.",
            question: "What is the zodiac animal (like dragon or tiger)?",
            hint: "Year of the ___",
          },
        ],
      },
    ],
  },
  {
    name: "REVERENCE & RESPECT",
    emoji: "🙏",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The last point of the Scout Law.",
            question: "What is reverent?",
            hint: "Starts with \"rev\"",
          },
          {
            answer: "Being reverent means having respect for God and for other people's this.",
            question: "What are beliefs?",
            hint: "What people believe",
          },
          {
            answer: "A place where people gather to worship.",
            question: "What is a church, synagogue, mosque, or temple (place of worship)?",
            hint: "Many different names",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Being quiet and still during a prayer or moment of silence shows this.",
            question: "What is respect (reverence)?",
            hint: "Shhh...",
          },
          {
            answer: "The first part of the Scout Oath says to do your duty to God and this.",
            question: "What is my country?",
            hint: "Where you live",
          },
          {
            answer: "A Jewish place of worship.",
            question: "What is a synagogue?",
            hint: "Starts with \"syn\"",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A Muslim place of worship.",
            question: "What is a mosque?",
            hint: "Rhymes with \"dusk\"? Not quite!",
          },
          {
            answer: "Many faiths teach this rule about treating others the way you want to be treated.",
            question: "What is the Golden Rule?",
            hint: "Gold!",
          },
          {
            answer: "Spending time with people who share your beliefs is called this — the name of this adventure.",
            question: "What is fellowship?",
            hint: "Friend + ship",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Scouts can earn special emblems from their own faith, called these.",
            question: "What are religious emblems?",
            hint: "Worn on the uniform above the left pocket",
          },
          {
            answer: "Respecting someone whose beliefs are different from yours shows this.",
            question: "What is respect (reverence)?",
            hint: "Be kind",
          },
          {
            answer: "Saying thank you for food, family, and friends is a way to show this feeling.",
            question: "What is gratitude?",
            hint: "Thankfulness",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A Hindu or Buddhist place of worship is often called this.",
            question: "What is a temple?",
            hint: "Starts with \"t\"",
          },
          {
            answer: "A moment of silence is often held to remember people or to do this.",
            question: "What is reflect (think quietly)?",
            hint: "Look inside",
          },
          {
            answer: "Helping your faith community or community group with a project is a way to show this.",
            question: "What is service (fellowship)?",
            hint: "Duty to others",
          },
        ],
      },
    ],
  },
];
