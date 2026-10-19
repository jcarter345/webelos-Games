// Jeopardy question bank — Bobcat (Bear Required — Character & Leadership)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scout Oath and Scout Law – https://www.scouting.org/about/faq/question10/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_BOBCAT = [
  {
    name: "SCOUT OATH",
    emoji: "🤞",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The Scout Oath starts with these three words.",
            question: "What is \"On my honor\"?",
            hint: "It's a promise — you give your word",
          },
          {
            answer: "In the Scout Oath, you promise to do this, which is also the Cub Scout motto.",
            question: "What is \"do my best\"?",
            hint: "Three words — the Cub Scout motto",
          },
          {
            answer: "The Scout Oath says to help other people at this time.",
            question: "What is \"at all times\"?",
            hint: "Not just sometimes...",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The Scout Oath says you will do your duty to God and to this.",
            question: "What is my country?",
            hint: "Where you live — like the United States",
          },
          {
            answer: "The Scout Oath says you will obey this — the list of 12 good things a Scout is.",
            question: "What is the Scout Law?",
            hint: "Trustworthy, loyal, helpful...",
          },
          {
            answer: "The Scout Oath promises to keep yourself physically this.",
            question: "What is strong?",
            hint: "Exercise, sleep, and healthy food help with this",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The Scout Oath says to keep yourself mentally this — meaning ready to learn.",
            question: "What is awake?",
            hint: "Not asleep — your brain is switched on!",
          },
          {
            answer: "The Scout Oath ends by promising to be morally this — meaning doing what is right.",
            question: "What is straight?",
            hint: "Honest and fair, not crooked",
          },
          {
            answer: "Duty to God and country, duty to others, and duty to self are the three of these in the Scout Oath.",
            question: "What are the three points (parts) of the Scout Oath?",
            hint: "The Oath has three main parts",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "\"To help other people at all times\" is the Oath's point about duty to these.",
            question: "What are others?",
            hint: "People besides you",
          },
          {
            answer: "\"Keep myself physically strong, mentally awake, and morally straight\" is the Oath's point about duty to this person.",
            question: "What is self (yourself)?",
            hint: "Look in a mirror!",
          },
          {
            answer: "When you say the Scout Oath, you stand and make this hand sign.",
            question: "What is the Cub Scout sign?",
            hint: "Two fingers up",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "You say the Oath \"on my honor.\" Honor means people can count on you to do this.",
            question: "What is keep your word (tell the truth)?",
            hint: "If you promise, you follow through",
          },
          {
            answer: "Saying the Scout Oath by heart, with no help, is called reciting it from this.",
            question: "What is memory?",
            hint: "It's stored in your brain",
          },
          {
            answer: "The Scout Oath and Scout Law are the same for Cub Scouts and this older Scouting program.",
            question: "What is Scouts BSA?",
            hint: "The troop you might join after Arrow of Light",
          },
        ],
      },
    ],
  },
  {
    name: "SCOUT LAW",
    emoji: "📜",
    color: "#0f0a1a",
    accent: "#a78bfa",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The Scout Law has this many points.",
            question: "What is 12?",
            hint: "One dozen",
          },
          {
            answer: "The very first point of the Scout Law. A Scout who is this can be trusted.",
            question: "What is trustworthy?",
            hint: "Trust + worthy",
          },
          {
            answer: "The last point of the Scout Law.",
            question: "What is reverent?",
            hint: "It's about respecting God and other people's beliefs",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A Scout who holds the door and picks up trash for a neighbor is being this.",
            question: "What is helpful?",
            hint: "Help + ful",
          },
          {
            answer: "A Scout who says \"please\" and \"thank you\" is being this.",
            question: "What is courteous?",
            hint: "Good manners!",
          },
          {
            answer: "A Scout who sticks by their friends and family is this.",
            question: "What is loyal?",
            hint: "Always on your team",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A Scout who cares about others and treats animals gently is this.",
            question: "What is kind?",
            hint: "Rhymes with \"mind\"",
          },
          {
            answer: "A Scout who follows the rules of the den and the family is this.",
            question: "What is obedient?",
            hint: "Listens and follows rules",
          },
          {
            answer: "A Scout who smiles and stays positive even when things go wrong is this.",
            question: "What is cheerful?",
            hint: "Cheer + ful",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A Scout who saves money and doesn't waste things is this.",
            question: "What is thrifty?",
            hint: "Like shopping at a thrift store",
          },
          {
            answer: "A Scout who stands up for what is right even when scared is this.",
            question: "What is brave?",
            hint: "Courage!",
          },
          {
            answer: "A Scout who keeps their body, clothes, and words neat is this.",
            question: "What is clean?",
            hint: "Wash up!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A Scout who is a friend to everyone, even kids who are different from them, is this.",
            question: "What is friendly?",
            hint: "Friend + ly",
          },
          {
            answer: "The Scout Law point that comes right after \"cheerful.\"",
            question: "What is thrifty?",
            hint: "Then brave, clean, reverent",
          },
          {
            answer: "Trustworthy, loyal, helpful, friendly — the Scout Law's 5th point comes next.",
            question: "What is courteous?",
            hint: "Then kind, obedient, cheerful...",
          },
        ],
      },
    ],
  },
  {
    name: "SIGNS & SALUTES",
    emoji: "✋",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The Cub Scout motto is these three words.",
            question: "What is \"Do Your Best\"?",
            hint: "D - Y - B",
          },
          {
            answer: "The two Cub Scout colors.",
            question: "What are blue and gold?",
            hint: "Think of your neckerchief and the Blue & Gold banquet",
          },
          {
            answer: "To make the Cub Scout sign, you hold up this many fingers.",
            question: "What is two?",
            hint: "Like a peace sign, but fingers together",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The two fingers in the Cub Scout sign stand for the ears of this animal.",
            question: "What is a wolf?",
            hint: "A pack animal that howls",
          },
          {
            answer: "When a leader holds up the Cub Scout sign, everyone does this.",
            question: "What is get quiet (stop talking and make the sign too)?",
            hint: "Shhh!",
          },
          {
            answer: "You use this hand to make the Cub Scout salute.",
            question: "What is the right hand?",
            hint: "Not your left...",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "To make the Cub Scout salute, you touch your two fingers to the edge of this.",
            question: "What is your cap (or eyebrow)?",
            hint: "On your head, above your eye",
          },
          {
            answer: "In the Cub Scout handshake, you put these two fingers along the inside of the other person's wrist.",
            question: "What are your first two fingers (pointer and middle)?",
            hint: "The same fingers as the Cub Scout sign",
          },
          {
            answer: "You salute the U.S. flag when it passes by or during this pledge.",
            question: "What is the Pledge of Allegiance?",
            hint: "\"I pledge allegiance...\"",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The rank Cub Scouts earn in 3rd grade.",
            question: "What is Bear?",
            hint: "Grrr!",
          },
          {
            answer: "The rank that comes right after Bear.",
            question: "What is Webelos?",
            hint: "It stands for \"WE'll BE LOyal Scouts\"",
          },
          {
            answer: "The rank that comes right before Bear.",
            question: "What is Wolf?",
            hint: "The animal from the Cub Scout sign",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The highest rank in Cub Scouts.",
            question: "What is the Arrow of Light?",
            hint: "Earned in 5th grade",
          },
          {
            answer: "The adventure every Cub Scout completes first, every year, for every rank.",
            question: "What is Bobcat?",
            hint: "A wild cat — and this adventure!",
          },
          {
            answer: "The Cub Scout salute uses two fingers, but the Scouts BSA salute uses this many.",
            question: "What is three?",
            hint: "One more than two",
          },
        ],
      },
    ],
  },
  {
    name: "DEN LIFE",
    emoji: "🐻",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A small group of Cub Scouts in the same grade who meet together.",
            question: "What is a den?",
            hint: "Bears live in one!",
          },
          {
            answer: "The leader of your den.",
            question: "What is the den leader?",
            hint: "The grown-up who runs den meetings",
          },
          {
            answer: "All of the dens together make up this bigger group.",
            question: "What is a pack?",
            hint: "Wolves travel in one",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A den member chosen to help the den leader for a while.",
            question: "What is a denner?",
            hint: "Sounds like \"den\"",
          },
          {
            answer: "A list of rules the den agrees to follow at meetings.",
            question: "What is a den Code of Conduct?",
            hint: "Code of C...",
          },
          {
            answer: "The denner might help with these jobs: setting up, cleaning up, and leading this.",
            question: "What is the flag ceremony (or opening)?",
            hint: "Starting the meeting",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The best way to get to know your den is to learn their names and ask about these things they like.",
            question: "What are hobbies (interests)?",
            hint: "Sports, games, books...",
          },
          {
            answer: "A den Code of Conduct works best when this many people agree to it.",
            question: "What is everyone (the whole den)?",
            hint: "All of us",
          },
          {
            answer: "Being a good den member means you raise your hand and wait for this.",
            question: "What is your turn?",
            hint: "Take turns!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The yearly pack party where Cub Scouts celebrate Scouting's birthday in February.",
            question: "What is the Blue and Gold Banquet?",
            hint: "Named after the Cub Scout colors",
          },
          {
            answer: "The big pack meeting where Scouts get their adventure loops and pins.",
            question: "What is a pack meeting (or awards ceremony)?",
            hint: "Once a month, the whole pack!",
          },
          {
            answer: "If you tried your hardest but didn't win, you still did this — the Cub Scout motto.",
            question: "What is your best?",
            hint: "Do Your ____",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "If someone breaks the den Code of Conduct, the den should do this — not yell.",
            question: "What is calmly remind them (talk about it)?",
            hint: "Be kind and courteous",
          },
          {
            answer: "A denner usually serves for a short time so this can happen.",
            question: "What is everyone gets a turn?",
            hint: "Fair!",
          },
          {
            answer: "The adult who leads the whole pack.",
            question: "What is the Cubmaster?",
            hint: "Cub + master",
          },
        ],
      },
    ],
  },
];
