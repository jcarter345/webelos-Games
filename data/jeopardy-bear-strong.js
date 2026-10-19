// Jeopardy question bank — Bear Strong (Bear Required — Personal Fitness)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   USDA MyPlate – https://www.myplate.gov/
//   CDC Physical Activity for Children – https://www.cdc.gov/physical-activity-basics/guidelines/children.html
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_STRONG = [
  {
    name: "FOOD GROUPS",
    emoji: "🍎",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Apples, bananas, and grapes belong to this food group.",
            question: "What are fruits?",
            hint: "Sweet and from plants",
          },
          {
            answer: "Carrots, broccoli, and spinach belong to this food group.",
            question: "What are vegetables?",
            hint: "Veggies!",
          },
          {
            answer: "Milk, cheese, and yogurt belong to this food group.",
            question: "What is dairy?",
            hint: "Comes from cows (mostly)",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Bread, rice, and pasta belong to this food group.",
            question: "What are grains?",
            hint: "Made from wheat, rice, or oats",
          },
          {
            answer: "Chicken, beans, eggs, and fish belong to this food group.",
            question: "What is protein?",
            hint: "Builds muscles",
          },
          {
            answer: "The picture of a plate that shows the food groups is called this.",
            question: "What is MyPlate?",
            hint: "My + Plate",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "MyPlate shows this many food groups.",
            question: "What is five?",
            hint: "Fruits, veggies, grains, protein, dairy",
          },
          {
            answer: "MyPlate says to fill this much of your plate with fruits and vegetables.",
            question: "What is half?",
            hint: "1/2",
          },
          {
            answer: "The Bear Strong adventure asks you to try foods from this many food groups.",
            question: "What is three?",
            hint: "More than two",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "This drink is the best choice when you're thirsty from playing.",
            question: "What is water?",
            hint: "It has no sugar",
          },
          {
            answer: "Soda and candy have a lot of this, so they are \"sometimes\" foods.",
            question: "What is sugar?",
            hint: "Sweet!",
          },
          {
            answer: "Whole-wheat bread is a better choice than white bread because it has more of this.",
            question: "What is fiber?",
            hint: "Helps your tummy",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Protein helps your body build and fix these.",
            question: "What are muscles?",
            hint: "Flex!",
          },
          {
            answer: "Dairy foods have lots of this, which makes your bones strong.",
            question: "What is calcium?",
            hint: "Starts with \"cal\"",
          },
          {
            answer: "Carrots have vitamin A, which helps these body parts.",
            question: "What are your eyes?",
            hint: "See better!",
          },
        ],
      },
    ],
  },
  {
    name: "STRETCH & MOVE",
    emoji: "🤸",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "You should do this before exercise to get your muscles ready.",
            question: "What is warm up (stretch)?",
            hint: "Like warming up a car",
          },
          {
            answer: "Jumping jacks, running, and dancing make this beat faster.",
            question: "What is your heart?",
            hint: "Thump thump!",
          },
          {
            answer: "Touching your toes stretches the muscles on the back of these.",
            question: "What are your legs?",
            hint: "Hamstrings!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The Bear Strong group activity is this many minutes long.",
            question: "What is 30?",
            hint: "Half an hour",
          },
          {
            answer: "Kids should be active for this many minutes every day.",
            question: "What is 60?",
            hint: "One hour",
          },
          {
            answer: "Stretching makes you more of this — able to bend and move easily.",
            question: "What is flexible?",
            hint: "Like a rubber band",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "You should hold a stretch for about this long, not bounce.",
            question: "What is 10 to 30 seconds?",
            hint: "Count slowly",
          },
          {
            answer: "After exercise, a slow walk and stretching is called this.",
            question: "What is a cool down?",
            hint: "The opposite of warm up",
          },
          {
            answer: "Push-ups make these body parts stronger.",
            question: "What are your arms (and chest)?",
            hint: "Up and down",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Your pulse tells you how fast this is beating.",
            question: "What is your heart?",
            hint: "Feel your wrist or neck",
          },
          {
            answer: "Running, swimming, and biking are this type of exercise that's good for your heart.",
            question: "What is cardio (aerobic)?",
            hint: "Gets you breathing hard",
          },
          {
            answer: "The Bear Strong adventure asks you to exercise on your own for this many minutes.",
            question: "What is 15?",
            hint: "A quarter of an hour",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Planks and sit-ups make these middle muscles strong.",
            question: "What are your core (stomach) muscles?",
            hint: "The center of your body",
          },
          {
            answer: "Drinking water during exercise keeps you from getting this.",
            question: "What is dehydrated?",
            hint: "Not enough water",
          },
          {
            answer: "If something hurts — a sharp pain, not just tired — you should do this.",
            question: "What is stop and tell an adult?",
            hint: "Don't push through pain",
          },
        ],
      },
    ],
  },
  {
    name: "GAMES & TEAMWORK",
    emoji: "⚽",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A game where one person is \"it\" and chases others.",
            question: "What is tag?",
            hint: "You're it!",
          },
          {
            answer: "A game where two teams pull a rope.",
            question: "What is tug-of-war?",
            hint: "Pull!",
          },
          {
            answer: "A race where you hop inside a bag.",
            question: "What is a sack race?",
            hint: "Boing!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Saying \"good game\" to the other team shows this.",
            question: "What is good sportsmanship?",
            hint: "Being a good sport",
          },
          {
            answer: "In a relay race, you pass this to the next runner.",
            question: "What is a baton?",
            hint: "A stick",
          },
          {
            answer: "Freeze tag, Simon Says, and Red Light Green Light are all this kind of game.",
            question: "What are active (group) games?",
            hint: "Get moving together",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "When your team loses, a good sport does this.",
            question: "What is shake hands (and congratulate the winners)?",
            hint: "Be cheerful!",
          },
          {
            answer: "A game where you copy only the actions the leader names first.",
            question: "What is Simon Says?",
            hint: "Simon didn't say!",
          },
          {
            answer: "Working together to reach a goal is called this.",
            question: "What is teamwork?",
            hint: "Team + work",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A game where you balance an egg on a spoon while racing.",
            question: "What is an egg-and-spoon race?",
            hint: "Don't drop it!",
          },
          {
            answer: "Before starting a game, the group agrees on these.",
            question: "What are the rules?",
            hint: "How to play",
          },
          {
            answer: "Playing games outside also gives you this vitamin from sunshine.",
            question: "What is vitamin D?",
            hint: "Sun vitamin",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "When picking teams, a kind Scout makes sure this happens.",
            question: "What is no one is left out?",
            hint: "Everyone plays",
          },
          {
            answer: "An obstacle course works your strength, speed, and this.",
            question: "What is balance (agility)?",
            hint: "Wobble!",
          },
          {
            answer: "Jumping rope is great exercise for your heart and these lower body muscles.",
            question: "What are your calves (legs)?",
            hint: "Bounce on your toes",
          },
        ],
      },
    ],
  },
  {
    name: "REST & RELAX",
    emoji: "😴",
    color: "#0f0a1a",
    accent: "#a78bfa",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Kids your age need about this many hours of sleep each night.",
            question: "What is 9 to 12?",
            hint: "More than 8!",
          },
          {
            answer: "Taking slow, deep ones of these helps you calm down.",
            question: "What are breaths?",
            hint: "In through the nose...",
          },
          {
            answer: "The Bear Strong relaxing activity is this many minutes long.",
            question: "What is 10?",
            hint: "Count your fingers",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Reading, coloring, and listening to quiet music are all ways to do this.",
            question: "What is relax?",
            hint: "Calm down and chill",
          },
          {
            answer: "Too much screen time before bed makes it harder to do this.",
            question: "What is fall asleep?",
            hint: "Zzz",
          },
          {
            answer: "Stretching slowly while breathing, in poses like \"downward dog.\"",
            question: "What is yoga?",
            hint: "Namaste",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Rest helps your muscles do this after exercise.",
            question: "What is recover (heal, grow stronger)?",
            hint: "Fix and rebuild",
          },
          {
            answer: "Going to bed at the same time every night is a good bedtime this.",
            question: "What is routine?",
            hint: "Same time, same way",
          },
          {
            answer: "If you feel worried or upset, talking to this person can help.",
            question: "What is a trusted adult (parent, teacher, leader)?",
            hint: "Someone you trust",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Squeezing your muscles tight and then letting them go loose helps you do this.",
            question: "What is relax?",
            hint: "Tense... and release",
          },
          {
            answer: "Breathing in for 4 counts, holding, and out for 4 counts is called this kind of breathing.",
            question: "What is box (square) breathing?",
            hint: "A shape with 4 sides",
          },
          {
            answer: "Your brain does this while you sleep, which helps you learn.",
            question: "What is sort and save memories?",
            hint: "Like saving a file",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Sleep, food, and exercise all help keep you physically strong — a promise in this.",
            question: "What is the Scout Oath?",
            hint: "On my honor...",
          },
          {
            answer: "Being mentally awake means your brain is rested and ready to do this.",
            question: "What is learn (think)?",
            hint: "School time!",
          },
          {
            answer: "Lying still and noticing each body part from your toes to your head is called a body this.",
            question: "What is scan?",
            hint: "Like a scanner",
          },
        ],
      },
    ],
  },
];
