// Jeopardy question bank — Chef Tech (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   USDA Food Safety – https://www.fsis.usda.gov/food-safety
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_CHEF_TECH = [
  {
    name: "KITCHEN GADGETS",
    emoji: "🍳",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "An appliance that heats food quickly with invisible waves.",
            question: "What is a microwave?",
            hint: "Beep beep!",
          },
          {
            answer: "An appliance that browns bread.",
            question: "What is a toaster?",
            hint: "Pop!",
          },
          {
            answer: "An appliance that keeps food cold.",
            question: "What is a refrigerator?",
            hint: "Fridge",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "An appliance with spinning blades that makes smoothies.",
            question: "What is a blender?",
            hint: "Whirr!",
          },
          {
            answer: "A pot that cooks food slowly all day.",
            question: "What is a slow cooker (Crock-Pot)?",
            hint: "Slooow",
          },
          {
            answer: "An appliance that cooks food with hot blowing air.",
            question: "What is an air fryer?",
            hint: "Crispy!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A machine that mixes cake batter with beaters.",
            question: "What is a mixer?",
            hint: "Mix!",
          },
          {
            answer: "A flat, hot cooking surface for pancakes.",
            question: "What is a griddle?",
            hint: "Flip",
          },
          {
            answer: "A gadget that makes waffles with a pattern.",
            question: "What is a waffle iron (maker)?",
            hint: "Squares",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Microwaves make food hot by making these tiny particles in food move fast.",
            question: "What are water molecules?",
            hint: "H2O jiggle",
          },
          {
            answer: "You should never put this in a microwave.",
            question: "What is metal (foil)?",
            hint: "Sparks!",
          },
          {
            answer: "A machine that makes the inside of a pot very hot and cooks food fast with steam.",
            question: "What is a pressure cooker (Instant Pot)?",
            hint: "Under pressure",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A smart oven or fridge can connect to this.",
            question: "What is the internet (Wi-Fi)?",
            hint: "Online",
          },
          {
            answer: "A cooktop that heats only the pan using magnets.",
            question: "What is an induction cooktop?",
            hint: "In-duc-tion",
          },
          {
            answer: "A food processor is different from a blender because it does this better.",
            question: "What is chop (slice, shred)?",
            hint: "Chop chop",
          },
        ],
      },
    ],
  },
  {
    name: "APPLIANCE SAFETY",
    emoji: "⚠️",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Always cook with this person nearby.",
            question: "What is an adult?",
            hint: "Grown-up",
          },
          {
            answer: "Before cooking, always wash these.",
            question: "What are your hands?",
            hint: "Soap!",
          },
          {
            answer: "Use these to grab hot pans.",
            question: "What are oven mitts (potholders)?",
            hint: "Mittens!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Never put your hand in a blender while it is this.",
            question: "What is plugged in?",
            hint: "Unplug first",
          },
          {
            answer: "Turn pot handles this way so no one bumps them.",
            question: "What is inward (toward the back)?",
            hint: "Not sticking out",
          },
          {
            answer: "Before using an appliance, read these safety rules.",
            question: "What are the instructions (manual)?",
            hint: "Read first",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Unplug appliances by pulling this, not the cord.",
            question: "What is the plug?",
            hint: "Grab the plug",
          },
          {
            answer: "Never use appliances near this, because it and electricity don't mix.",
            question: "What is water?",
            hint: "Splash!",
          },
          {
            answer: "If a grease fire starts in a pan, cover it with this — never water.",
            question: "What is a lid?",
            hint: "Smother it",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Food in a microwave should be stirred because it heats this way.",
            question: "What is unevenly?",
            hint: "Hot spots",
          },
          {
            answer: "Steam from a covered bowl can cause this.",
            question: "What is a burn?",
            hint: "Ouch!",
          },
          {
            answer: "Long sleeves near a stove are dangerous because they can do this.",
            question: "What is catch fire?",
            hint: "Roll them up",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Food should be kept out of this temperature \"zone,\" between 40 and 140 degrees.",
            question: "What is the danger zone?",
            hint: "Germs grow",
          },
          {
            answer: "A meat thermometer checks if food is cooked to a safe this.",
            question: "What is temperature?",
            hint: "How hot inside",
          },
          {
            answer: "Raw chicken should be cooked to this internal temperature.",
            question: "What is 165 degrees (°F)?",
            hint: "One-six-five",
          },
        ],
      },
    ],
  },
  {
    name: "RECIPES",
    emoji: "📖",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Written steps for making food.",
            question: "What is a recipe?",
            hint: "Cookbook",
          },
          {
            answer: "The foods you need for a recipe.",
            question: "What are ingredients?",
            hint: "The list",
          },
          {
            answer: "A tool used to measure flour or milk.",
            question: "What is a measuring cup?",
            hint: "1 cup",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "\"tsp\" in a recipe stands for this.",
            question: "What is teaspoon?",
            hint: "Small spoon",
          },
          {
            answer: "\"Tbsp\" in a recipe stands for this.",
            question: "What is tablespoon?",
            hint: "Big spoon",
          },
          {
            answer: "Three teaspoons equal this.",
            question: "What is one tablespoon?",
            hint: "3 small = 1 big",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Heating the oven before you put food in is called this.",
            question: "What is preheating?",
            hint: "Pre = before",
          },
          {
            answer: "Stirring ingredients together quickly with a whisk.",
            question: "What is whisking (beating)?",
            hint: "Whisk!",
          },
          {
            answer: "Two cups equal this.",
            question: "What is one pint?",
            hint: "A pint's a pound...",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Reading the whole recipe before you start helps you avoid this.",
            question: "What is a surprise (missing an ingredient)?",
            hint: "Plan ahead",
          },
          {
            answer: "\"Simmer\" means to cook just below this.",
            question: "What is boiling?",
            hint: "Small bubbles",
          },
          {
            answer: "Cutting food into very small pieces.",
            question: "What is mincing (dicing)?",
            hint: "Tiny bits",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Four cups equal this.",
            question: "What is one quart?",
            hint: "Quarter of a gallon",
          },
          {
            answer: "Leveling off a cup of flour with a knife makes it this.",
            question: "What is accurate (exact)?",
            hint: "Not too much",
          },
          {
            answer: "Using an app to scale a recipe for more people uses this kind of tech.",
            question: "What is a calculator (smart app)?",
            hint: "Math!",
          },
        ],
      },
    ],
  },
  {
    name: "FOOD SCIENCE",
    emoji: "🧪",
    color: "#0f0a1a",
    accent: "#a78bfa",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Water boils at this temperature in Fahrenheit.",
            question: "What is 212 degrees?",
            hint: "Two-one-two",
          },
          {
            answer: "Water freezes at this temperature in Fahrenheit.",
            question: "What is 32 degrees?",
            hint: "Brrr",
          },
          {
            answer: "Bread rises because of this tiny living thing.",
            question: "What is yeast?",
            hint: "It eats sugar",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Toast turns brown because heat changes the sugars. This is called this.",
            question: "What is browning (the Maillard reaction)?",
            hint: "Toasty",
          },
          {
            answer: "Popcorn pops because water inside turns into this.",
            question: "What is steam?",
            hint: "Pressure builds",
          },
          {
            answer: "Baking soda and vinegar make bubbles of this gas.",
            question: "What is carbon dioxide?",
            hint: "Fizz!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "To make ice cream in a bag, you shake it in ice mixed with this to get extra cold.",
            question: "What is salt (rock salt)?",
            hint: "Same thing used on icy roads",
          },
          {
            answer: "Eggs turn from clear to white when they do this.",
            question: "What is cook (heat up)?",
            hint: "Fry!",
          },
          {
            answer: "Salt on ice makes it do this faster.",
            question: "What is melt?",
            hint: "Winter roads",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Jell-O sets because of this ingredient.",
            question: "What is gelatin?",
            hint: "Jiggly",
          },
          {
            answer: "A refrigerator keeps food fresh by slowing these down.",
            question: "What are germs (bacteria)?",
            hint: "Tiny critters",
          },
          {
            answer: "Cooking with a microwave is often faster than an oven because it heats this.",
            question: "What is the food directly?",
            hint: "Not the air",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Bread dough is kneaded to build this stretchy protein.",
            question: "What is gluten?",
            hint: "Glue-ten",
          },
          {
            answer: "Baking powder helps cakes do this.",
            question: "What is rise?",
            hint: "Fluffy",
          },
          {
            answer: "Freeze-dried astronaut food has had this removed.",
            question: "What is water?",
            hint: "Dry!",
          },
        ],
      },
    ],
  },
];
