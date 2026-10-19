// Jeopardy question bank — Champions for Nature (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   U.S. Fish & Wildlife Service — Endangered Species – https://www.fws.gov/program/endangered-species
//   EPA Reduce, Reuse, Recycle – https://www.epa.gov/recycle
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_NATURE = [
  {
    name: "ENDANGERED ANIMALS",
    emoji: "🐼",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "An animal that is in danger of disappearing forever is called this.",
            question: "What is endangered?",
            hint: "In danger",
          },
          {
            answer: "When every animal of a kind is gone forever, it is this.",
            question: "What is extinct?",
            hint: "Like the dinosaurs",
          },
          {
            answer: "This black-and-white bear eats bamboo.",
            question: "What is a giant panda?",
            hint: "From China",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "America's national bird that was once endangered.",
            question: "What is the bald eagle?",
            hint: "It came back!",
          },
          {
            answer: "The main reason many animals are endangered is the loss of this.",
            question: "What is habitat (their home)?",
            hint: "Where they live",
          },
          {
            answer: "Big cats with stripes that are endangered.",
            question: "What are tigers?",
            hint: "Grr!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This U.S. law protects endangered animals.",
            question: "What is the Endangered Species Act?",
            hint: "E-S-A",
          },
          {
            answer: "This butterfly migrates to Mexico and needs milkweed.",
            question: "What is the monarch?",
            hint: "Orange and black",
          },
          {
            answer: "Big gray giants with trunks that are endangered.",
            question: "What are elephants?",
            hint: "Big ears",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Pesticides like DDT made bald eagles' eggs do this.",
            question: "What is break (have thin shells)?",
            hint: "Crack!",
          },
          {
            answer: "This large bird, North America's biggest flying bird, nearly went extinct.",
            question: "What is the California condor?",
            hint: "A vulture!",
          },
          {
            answer: "An animal that might become endangered soon is called this.",
            question: "What is threatened?",
            hint: "Danger ahead",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Zoos help endangered animals by doing this.",
            question: "What is breeding them (protecting them)?",
            hint: "More babies",
          },
          {
            answer: "The dodo bird, now extinct, lived on this island.",
            question: "What is Mauritius?",
            hint: "In the Indian Ocean",
          },
          {
            answer: "The red wolf lives in the wild in only this state.",
            question: "What is North Carolina?",
            hint: "Southeast U.S.",
          },
        ],
      },
    ],
  },
  {
    name: "POLLINATORS",
    emoji: "🐝",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "These buzzing insects make honey.",
            question: "What are bees?",
            hint: "Bzzz",
          },
          {
            answer: "Bees carry this yellow dust from flower to flower.",
            question: "What is pollen?",
            hint: "Achoo!",
          },
          {
            answer: "These colorful insects drink nectar with a long tongue.",
            question: "What are butterflies?",
            hint: "Flutter by",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A tiny bird that hovers and drinks nectar.",
            question: "What is a hummingbird?",
            hint: "Its wings hum",
          },
          {
            answer: "Moving pollen from one flower to another is called this.",
            question: "What is pollination?",
            hint: "Pollen + nation",
          },
          {
            answer: "The sweet liquid in flowers.",
            question: "What is nectar?",
            hint: "Sweet drink",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Bats pollinate the flowers of this plant, used to make tequila.",
            question: "What is agave?",
            hint: "A desert plant",
          },
          {
            answer: "Monarch caterpillars eat only this plant.",
            question: "What is milkweed?",
            hint: "Milky sap",
          },
          {
            answer: "About one out of every three bites of food we eat depends on these.",
            question: "What are pollinators?",
            hint: "Bees and friends",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Planting these that grow naturally in your area helps pollinators.",
            question: "What are native plants?",
            hint: "From here",
          },
          {
            answer: "A garden made just for bees and butterflies.",
            question: "What is a pollinator garden?",
            hint: "Flowers galore",
          },
          {
            answer: "A bee house with holes for bees that live alone.",
            question: "What is a bee hotel?",
            hint: "No room service",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Bees do this to tell other bees where flowers are.",
            question: "What is dance (the waggle dance)?",
            hint: "Shake it!",
          },
          {
            answer: "Chemicals that kill bugs and can hurt bees.",
            question: "What are pesticides?",
            hint: "Bug spray",
          },
          {
            answer: "Bees see this kind of light that humans can't.",
            question: "What is ultraviolet (UV)?",
            hint: "Beyond violet",
          },
        ],
      },
    ],
  },
  {
    name: "REDUCE, REUSE, RECYCLE",
    emoji: "♻️",
    color: "#0a1a1a",
    accent: "#14b8a6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The three R's are Reduce, Reuse, and this.",
            question: "What is Recycle?",
            hint: "Third R",
          },
          {
            answer: "Using a water bottle again and again is an example of this R.",
            question: "What is reuse?",
            hint: "Use again",
          },
          {
            answer: "Cans, paper, and plastic bottles can go in this bin.",
            question: "What is the recycling bin?",
            hint: "Blue bin",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Using less stuff is this R.",
            question: "What is reduce?",
            hint: "Less!",
          },
          {
            answer: "Turning food scraps into rich soil.",
            question: "What is composting?",
            hint: "Worms help",
          },
          {
            answer: "The symbol of three arrows in a triangle means this.",
            question: "What is recycle?",
            hint: "Round and round",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Turning off lights when you leave a room saves this.",
            question: "What is electricity (energy)?",
            hint: "Click!",
          },
          {
            answer: "Turning off the water while brushing your teeth saves this.",
            question: "What is water?",
            hint: "Drip drip",
          },
          {
            answer: "A place where trash is buried.",
            question: "What is a landfill?",
            hint: "Land + fill",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Plastic can take hundreds of these to break down.",
            question: "What are years?",
            hint: "A long time",
          },
          {
            answer: "Bringing your own bags to the store helps reduce this.",
            question: "What is plastic (waste)?",
            hint: "No plastic bags",
          },
          {
            answer: "Aluminum cans can be recycled and back on the shelf in about this long.",
            question: "What is 60 days (two months)?",
            hint: "Fast!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Turning old things into something new and useful is called this.",
            question: "What is upcycling?",
            hint: "Up + cycling",
          },
          {
            answer: "Earth Day is celebrated every year on this date.",
            question: "What is April 22?",
            hint: "In spring",
          },
          {
            answer: "The numbers inside the recycle symbol on plastic tell you this.",
            question: "What is the type of plastic?",
            hint: "Numbers 1 to 7",
          },
        ],
      },
    ],
  },
  {
    name: "HELPING NATURE",
    emoji: "🌱",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Planting one of these gives birds a home and cleans the air.",
            question: "What is a tree?",
            hint: "Leaves and branches",
          },
          {
            answer: "Picking up trash at a park is a service project that helps this.",
            question: "What is nature (the environment)?",
            hint: "Clean up!",
          },
          {
            answer: "People who protect nature are called this kind of champion.",
            question: "What is a conservation (nature) champion?",
            hint: "The adventure name!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Trees take in this gas that we breathe out.",
            question: "What is carbon dioxide?",
            hint: "CO2",
          },
          {
            answer: "Trees give off this gas that we need to breathe.",
            question: "What is oxygen?",
            hint: "O2",
          },
          {
            answer: "A bird feeder helps birds most in this season.",
            question: "What is winter?",
            hint: "Cold and snowy",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Plants that take over and crowd out native plants.",
            question: "What are invasive species?",
            hint: "Invaders!",
          },
          {
            answer: "A person who studies and protects wildlife.",
            question: "What is a wildlife biologist (conservationist)?",
            hint: "Bio = life",
          },
          {
            answer: "National parks protect land so it stays this.",
            question: "What is wild (natural)?",
            hint: "Untouched",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The president known for creating many national parks and forests.",
            question: "Who is Theodore Roosevelt?",
            hint: "Teddy bear!",
          },
          {
            answer: "A wet area like a swamp or marsh.",
            question: "What is a wetland?",
            hint: "Wet + land",
          },
          {
            answer: "Leave No Trace says to leave plants and rocks this way.",
            question: "What is where you found them?",
            hint: "Leave what you find",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Pollution in rivers can come from this washing off streets and lawns.",
            question: "What is rain (runoff)?",
            hint: "Storm drains",
          },
          {
            answer: "The first U.S. national park, created in 1872.",
            question: "What is Yellowstone?",
            hint: "Old Faithful!",
          },
          {
            answer: "A citizen scientist helps nature by doing this.",
            question: "What is counting and reporting wildlife (collecting data)?",
            hint: "Science helper",
          },
        ],
      },
    ],
  },
];
