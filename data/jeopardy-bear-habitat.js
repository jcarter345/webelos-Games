// Jeopardy question bank — Bear Habitat (Bear Required — Outdoors)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Leave No Trace for Kids – https://lnt.org/
//   Smokey Bear Fire Danger – https://smokeybear.com/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_HABITAT = [
  {
    name: "SIX ESSENTIALS",
    emoji: "🎒",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The Cub Scout Six Essentials include this item for scrapes and cuts.",
            question: "What is a first aid kit?",
            hint: "Bandages live inside",
          },
          {
            answer: "You should bring a full one of these so you can drink on the trail.",
            question: "What is a water bottle?",
            hint: "Stay hydrated!",
          },
          {
            answer: "Blow this if you get lost — 3 blasts means \"help!\"",
            question: "What is a whistle?",
            hint: "Tweeeet!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This essential helps you see if it gets dark.",
            question: "What is a flashlight?",
            hint: "Light in your hand",
          },
          {
            answer: "Granola bars and trail mix are examples of this essential.",
            question: "What is trail food (a snack)?",
            hint: "Food for the trail",
          },
          {
            answer: "Sunscreen, a hat, and sunglasses are all this kind of essential.",
            question: "What is sun protection?",
            hint: "The sun can burn you",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The Cub Scout outdoor list has this many essentials.",
            question: "What is six?",
            hint: "Count them: first aid kit, water, flashlight, trail food, sun protection, whistle",
          },
          {
            answer: "Older Scouts carry this many essentials.",
            question: "What is ten?",
            hint: "Six plus four",
          },
          {
            answer: "You should carry your Six Essentials in this.",
            question: "What is a backpack (daypack)?",
            hint: "Goes on your back",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "When packing a backpack, put these items near the top so you can grab them fast.",
            question: "What are the things you need most (water, first aid kit, whistle)?",
            hint: "Think quick grab",
          },
          {
            answer: "If it might rain, you should also pack this.",
            question: "What is a rain jacket (poncho)?",
            hint: "Keeps you dry",
          },
          {
            answer: "Shoes for a hike should be this — not flip-flops.",
            question: "What is closed-toe (sturdy, comfortable)?",
            hint: "Protects your toes",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "If you get lost, the rule is to \"hug a tree,\" which means you should do this.",
            question: "What is stay in one place?",
            hint: "Don't wander — let people find you",
          },
          {
            answer: "Wearing layers of clothes helps because you can do this when you get hot or cold.",
            question: "What is take them off or put them on?",
            hint: "Like an onion!",
          },
          {
            answer: "The number of whistle blasts that means \"I need help.\"",
            question: "What is three?",
            hint: "1 ... 2 ...",
          },
        ],
      },
    ],
  },
  {
    name: "WILDLIFE SIGNS",
    emoji: "🐾",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A print left in mud by an animal's foot.",
            question: "What is a track (footprint)?",
            hint: "Look down!",
          },
          {
            answer: "Animal poop is called this — it's a sign that an animal was nearby.",
            question: "What is scat?",
            hint: "Don't touch it!",
          },
          {
            answer: "Birds build these in trees to lay eggs.",
            question: "What is a nest?",
            hint: "A bird's home",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Woodpeckers leave these in tree trunks.",
            question: "What are holes?",
            hint: "Peck peck peck",
          },
          {
            answer: "A snake leaves this behind when it grows.",
            question: "What is shed skin?",
            hint: "It wiggles out of it",
          },
          {
            answer: "Bears often leave these marks on tree bark.",
            question: "What are claw marks (scratches)?",
            hint: "Sharp claws!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Chewed pine cones and nut shells are clues that this animal ate nearby.",
            question: "What is a squirrel?",
            hint: "Bushy tail",
          },
          {
            answer: "A pile of sticks blocking a stream is a sign of this animal.",
            question: "What is a beaver?",
            hint: "It has big front teeth",
          },
          {
            answer: "A spider builds this to catch bugs.",
            question: "What is a web?",
            hint: "Silky!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The Bear Habitat adventure asks you to find this many signs of wildlife.",
            question: "What is six?",
            hint: "Same as the number of essentials",
          },
          {
            answer: "Watching animals from this far is the right way to respect wildlife.",
            question: "What is a safe distance (far away)?",
            hint: "Use binoculars!",
          },
          {
            answer: "You should never do this to wild animals — it makes them sick and too bold.",
            question: "What is feed them?",
            hint: "No snacks for squirrels",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Nibbled leaves with holes in them are a clue that these crawling creatures were there.",
            question: "What are caterpillars (insects)?",
            hint: "They turn into butterflies",
          },
          {
            answer: "The place where an animal lives and finds food, water, and shelter.",
            question: "What is a habitat?",
            hint: "It's in the adventure name!",
          },
          {
            answer: "A rule for wildlife: if an animal changes what it's doing because of you, you are this.",
            question: "What is too close?",
            hint: "Back away slowly",
          },
        ],
      },
    ],
  },
  {
    name: "LEAVE NO TRACE",
    emoji: "🌿",
    color: "#0a1a1a",
    accent: "#14b8a6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Leave No Trace means leaving a place this way — or better.",
            question: "What is the way you found it?",
            hint: "Like no one was there",
          },
          {
            answer: "Your trash on the trail should go here until you find a trash can.",
            question: "What is in your backpack (pack it out)?",
            hint: "Pack it in, pack it ____",
          },
          {
            answer: "You should stay on this when walking so you don't hurt plants.",
            question: "What is the trail?",
            hint: "The path",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Leaving flowers and rocks where you found them follows this LNT rule.",
            question: "What is \"Leave what you find\"?",
            hint: "Take pictures, not things",
          },
          {
            answer: "Leave No Trace for Kids has this many principles.",
            question: "What is seven?",
            hint: "Days in a week",
          },
          {
            answer: "Being quiet on the trail and letting others pass is being kind to these.",
            question: "What are other visitors (other hikers)?",
            hint: "Share the trail",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "If you find someone else's trash on the trail, a good Scout does this.",
            question: "What is pick it up (pack it out)?",
            hint: "Leave it better!",
          },
          {
            answer: "\"Know Before You Go\" means doing this before your walk.",
            question: "What is plan ahead (and prepare)?",
            hint: "Check the map and weather",
          },
          {
            answer: "Taking a shortcut off the trail can cause this to the land.",
            question: "What is erosion (damage)?",
            hint: "The dirt washes away",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "An apple core is trash, because it can hurt this if they eat it.",
            question: "What are animals (wildlife)?",
            hint: "It's not their natural food",
          },
          {
            answer: "You can find your walk's location on this before you go.",
            question: "What is a map?",
            hint: "Paper or phone",
          },
          {
            answer: "The Bear Habitat walk is this many miles long.",
            question: "What is one?",
            hint: "Not two...",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "\"Be careful with fire\" is a LNT principle; the safest choice on a short walk is to have this many fires.",
            question: "What is zero (none)?",
            hint: "You don't need one!",
          },
          {
            answer: "\"Choose the right path\" means walking on these surfaces that won't get hurt.",
            question: "What are durable surfaces (trails, rock, gravel)?",
            hint: "Tough ground",
          },
          {
            answer: "Walking in a single line on a narrow trail is called this.",
            question: "What is single file?",
            hint: "One behind another",
          },
        ],
      },
    ],
  },
  {
    name: "FIRE DANGER & TRAIL",
    emoji: "🔥",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "This famous bear says \"Only you can prevent wildfires.\"",
            question: "Who is Smokey Bear?",
            hint: "He wears a ranger hat",
          },
          {
            answer: "Signs at parks show this rating, from low to extreme.",
            question: "What is the fire danger rating?",
            hint: "Smokey points at it!",
          },
          {
            answer: "When the fire danger is green, it means this.",
            question: "What is low?",
            hint: "Go = low danger",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "On the Smokey Bear fire danger sign, the orange color means this.",
            question: "What is very high?",
            hint: "One step below extreme",
          },
          {
            answer: "The fire danger is highest when the weather is hot, windy, and this.",
            question: "What is dry?",
            hint: "No rain for a long time",
          },
          {
            answer: "You should check this before your walk to know if you need a jacket.",
            question: "What is the weather forecast?",
            hint: "Sunny? Rainy?",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The color for \"extreme\" fire danger on the Smokey sign.",
            question: "What is red?",
            hint: "Stop color? Close...",
          },
          {
            answer: "Never walk alone — always bring one of these.",
            question: "What is a buddy?",
            hint: "Buddy system!",
          },
          {
            answer: "Before a walk, tell an adult where you are going and this.",
            question: "What is when you'll be back?",
            hint: "Time matters",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Blazes painted on trees are used to do this.",
            question: "What is mark the trail?",
            hint: "Follow the color",
          },
          {
            answer: "If you hear thunder, you should do this.",
            question: "What is go inside (get to shelter)?",
            hint: "When thunder roars, go indoors",
          },
          {
            answer: "If you see a wild animal on the trail, you should do this.",
            question: "What is stop, stay calm, and back away (give it space)?",
            hint: "Don't run, don't chase",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A walk of one mile takes most kids about this long.",
            question: "What is 20 to 30 minutes?",
            hint: "Less than an hour",
          },
          {
            answer: "Poison ivy has leaves in groups of this many.",
            question: "What is three?",
            hint: "Leaves of three, let it be",
          },
          {
            answer: "If there is a muddy puddle on the trail, LNT says to do this instead of stomping on plants beside it.",
            question: "What is walk through the middle of it (stay on the trail)?",
            hint: "Muddy boots are OK!",
          },
        ],
      },
    ],
  },
];
