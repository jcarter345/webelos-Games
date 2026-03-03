// Jeopardy question bank — Earth Rocks! Adventure
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Sources:
//   BSA Webelos Earth Rocks! Adventure – https://www.scouting.org/cub-scout-adventures/earth-rocks/
//   USGS Geology – https://www.usgs.gov/science/science-explorer/geology
//   Mohs Hardness Scale – https://geology.com/minerals/mohs-hardness-scale.shtml
//   National Park Service Geology – https://www.nps.gov/subjects/geology/index.htm
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_EARTH_ROCKS = [
  {
    name: "ROCK TYPES",
    emoji: "🪨",
    color: "#1a150f",
    accent: "#d97706",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "These are the three main types of rocks that geologists classify all rocks into.",
            question: "What are igneous, sedimentary, and metamorphic?",
            hint: "One is made from heat, one from layers, and one from pressure changing an existing rock",
          },
          {
            answer: "This type of rock is formed when tiny pieces of sand, mud, and shells get pressed together in layers over millions of years.",
            question: "What is sedimentary rock?",
            hint: "Think of layers stacking up like a sandwich over time",
          },
          {
            answer: "Sandstone, limestone, and shale are all examples of this type of layered rock.",
            question: "What are sedimentary rocks?",
            hint: "They form from sediment — tiny bits that settle and get squished together",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This type of rock forms when melted rock (magma or lava) cools down and hardens.",
            question: "What is igneous rock?",
            hint: "'Ignis' is the Latin word for fire — these rocks are born from heat",
          },
          {
            answer: "Granite and basalt are two common examples of this type of rock that comes from volcanoes and magma.",
            question: "What are igneous rocks?",
            hint: "One cools slowly underground (granite), the other cools fast on the surface (basalt)",
          },
          {
            answer: "When igneous rock cools very quickly on Earth's surface, it can form this shiny black volcanic glass.",
            question: "What is obsidian?",
            hint: "Native Americans used it to make sharp arrowheads and tools",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This type of rock forms when existing rocks are changed by extreme heat and pressure deep underground — without melting.",
            question: "What is metamorphic rock?",
            hint: "'Meta' means change, 'morph' means form — these rocks changed form",
          },
          {
            answer: "Limestone transforms into this beautiful metamorphic rock that is used for statues and countertops.",
            question: "What is marble?",
            hint: "Michelangelo carved his famous sculptures from this stone",
          },
          {
            answer: "When shale is subjected to heat and pressure, it transforms into this metamorphic rock that splits into thin, flat sheets.",
            question: "What is slate?",
            hint: "It was once used to make chalkboards and roofing tiles",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "This common igneous rock makes up most of the ocean floor and forms when lava cools quickly on the surface.",
            question: "What is basalt?",
            hint: "It's dark-colored and fine-grained — Hawaii's islands are made of it",
          },
          {
            answer: "This sedimentary rock is made mostly from the mineral calcite and often contains fossils of ancient sea creatures.",
            question: "What is limestone?",
            hint: "Many caves are carved out of this rock by water over millions of years",
          },
          {
            answer: "Fossils are most commonly found in this type of rock, because the layers preserve the remains of ancient plants and animals.",
            question: "What is sedimentary rock?",
            hint: "The layers act like a time capsule, trapping things between them",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "This igneous rock is so full of air pockets from volcanic gas that it actually floats on water.",
            question: "What is pumice?",
            hint: "It's used to scrub rough skin — and it's the only rock that floats!",
          },
          {
            answer: "Quartzite is the metamorphic version of this common sedimentary rock made of sand grains.",
            question: "What is sandstone?",
            hint: "Sand gets compressed into rock, then heat and pressure make it even harder",
          },
          {
            answer: "This coarse-grained igneous rock, made of quartz, feldspar, and mica, is the most common rock in Earth's continental crust.",
            question: "What is granite?",
            hint: "Kitchen countertops and Mount Rushmore are made of this speckled stone",
          },
        ],
      },
    ],
  },

  {
    name: "MINERALS & CRYSTALS",
    emoji: "💎",
    color: "#0f1520",
    accent: "#8b5cf6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A mineral is a naturally occurring solid that is not made by living things and has this organized internal structure.",
            question: "What is a crystal structure (or crystalline structure)?",
            hint: "The atoms inside are arranged in a repeating pattern",
          },
          {
            answer: "This is the most common mineral found on Earth's surface — it's clear, hard, and found in many types of rock.",
            question: "What is quartz?",
            hint: "It comes in many colors — clear, pink, purple (amethyst), and smoky",
          },
          {
            answer: "The difference between a rock and a mineral is that a rock is made of a mixture of these.",
            question: "What are minerals (two or more minerals combined)?",
            hint: "A mineral is one substance; a rock is a recipe with several mineral ingredients",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This scale, numbered 1 to 10, ranks minerals by how resistant they are to being scratched.",
            question: "What is the Mohs Hardness Scale?",
            hint: "Named after German mineralogist Friedrich Mohs",
          },
          {
            answer: "On the Mohs Hardness Scale, this mineral is rated number 1 — the softest mineral that you can scratch with your fingernail.",
            question: "What is talc?",
            hint: "It's used to make baby powder — that's how soft it is!",
          },
          {
            answer: "On the Mohs Hardness Scale, this precious gemstone is rated number 10 — the hardest natural mineral on Earth.",
            question: "What is diamond?",
            hint: "Nothing can scratch it except another one of the same mineral",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "When geologists identify a mineral, they test these five main properties: hardness, luster, color, streak, and this property that describes how it breaks.",
            question: "What is cleavage (or fracture)?",
            hint: "Some minerals break in flat, smooth planes; others shatter unevenly",
          },
          {
            answer: "The 'streak test' identifies a mineral by rubbing it on a white tile to reveal this.",
            question: "What is the mineral's true color (the color of its powder)?",
            hint: "A mineral can look one color on the outside but leave a different colored streak",
          },
          {
            answer: "This mineral property describes how it reflects light — words like 'glassy,' 'metallic,' 'waxy,' and 'pearly' are used.",
            question: "What is luster?",
            hint: "It's about how shiny or dull the surface looks",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "On the Mohs scale, a fingernail has a hardness of about 2.5. This means your fingernail can scratch talc and this mineral rated number 2.",
            question: "What is gypsum?",
            hint: "It's used to make drywall for building houses",
          },
          {
            answer: "Crystals grow their signature shapes because the atoms inside arrange themselves in this kind of repeating pattern.",
            question: "What is a geometric (or regular/repeating) pattern?",
            hint: "It's like stacking blocks the same way over and over — the shape builds on itself",
          },
          {
            answer: "A copper penny has a Mohs hardness of about 3.5, which means it can scratch calcite (hardness 3) but NOT this mineral at hardness 4.",
            question: "What is fluorite?",
            hint: "It comes in beautiful purple, green, and yellow colors",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "These six-sided ice formations that fall from the sky during storms are actually mineral crystals made of frozen water.",
            question: "What are snowflakes (or ice crystals)?",
            hint: "No two are exactly alike, but they all have six sides",
          },
          {
            answer: "This purple variety of quartz gets its color from trace amounts of iron and is one of the most popular gemstones.",
            question: "What is amethyst?",
            hint: "It was once considered as valuable as diamonds — it's the birthstone for February",
          },
          {
            answer: "Geodes are round rocks that look plain on the outside but contain this sparkling surprise on the inside.",
            question: "What are crystals (often quartz or amethyst crystals)?",
            hint: "You have to crack them open to find the treasure inside",
          },
        ],
      },
    ],
  },

  {
    name: "THE ROCK CYCLE",
    emoji: "🔄",
    color: "#14140a",
    accent: "#eab308",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The rock cycle describes how rocks slowly change from one type to another over this very long time period.",
            question: "What is millions (or billions) of years?",
            hint: "Rocks change, but they take their sweet time about it",
          },
          {
            answer: "In the rock cycle, any type of rock can eventually become any other type — there is no set starting point or this.",
            question: "What is an ending point (it's a continuous cycle)?",
            hint: "That's why it's called a 'cycle' — it goes round and round forever",
          },
          {
            answer: "The rock cycle is powered by two main energy sources: heat from inside the Earth and energy from this star.",
            question: "What is the Sun?",
            hint: "The Sun drives wind, rain, and weathering on the surface",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This natural process breaks rocks into smaller and smaller pieces through wind, water, ice, and plant roots.",
            question: "What is weathering?",
            hint: "The 'weather' slowly wears rocks down over time",
          },
          {
            answer: "After weathering breaks rocks into small pieces, this process moves those pieces to new locations by water, wind, or gravity.",
            question: "What is erosion?",
            hint: "Rivers carry sediment downstream — that's this process in action",
          },
          {
            answer: "When eroded sediment settles in a new location and begins piling up in layers, this process is called this.",
            question: "What is deposition?",
            hint: "The sediment is 'deposited' — like making a deposit at a bank",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "In the rock cycle, sedimentary rock becomes metamorphic rock when it is buried deep underground and exposed to these two forces.",
            question: "What are heat and pressure?",
            hint: "Deep underground it gets very hot and very heavy — enough to change rock",
          },
          {
            answer: "When any type of rock melts completely, it becomes this hot liquid material found beneath Earth's surface.",
            question: "What is magma?",
            hint: "When it erupts onto the surface from a volcano, we call it lava",
          },
          {
            answer: "The process where loose sediments get cemented and compacted together to form sedimentary rock is called this.",
            question: "What is lithification (or compaction and cementation)?",
            hint: "'Lithos' is Greek for stone — the sediment is turning to stone",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Water seeping into cracks in rocks and then freezing is an example of this type of weathering, where ice expands and splits the rock apart.",
            question: "What is frost wedging (or ice wedging / physical weathering)?",
            hint: "Water expands when it freezes — enough force to crack solid rock",
          },
          {
            answer: "In the rock cycle, igneous rock can skip the metamorphic stage and go directly to sedimentary rock through weathering, erosion, and this process.",
            question: "What is deposition (and compaction/cementation)?",
            hint: "The igneous rock breaks down into sediment, which piles up and becomes new rock",
          },
          {
            answer: "When acid rain dissolves limestone, this is an example of this type of weathering that changes rock through chemical reactions.",
            question: "What is chemical weathering?",
            hint: "The rock isn't just breaking apart — its chemistry is actually changing",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Plant roots growing into rock cracks and slowly splitting the rock apart is an example of this type of weathering.",
            question: "What is biological weathering (or organic weathering)?",
            hint: "Living things can break rocks too — roots are surprisingly powerful",
          },
          {
            answer: "The Grand Canyon was primarily carved by this river's erosion cutting through layers of sedimentary rock over millions of years.",
            question: "What is the Colorado River?",
            hint: "This river runs through Arizona and carved one of the world's most famous geological features",
          },
          {
            answer: "In the rock cycle, metamorphic rock can become igneous rock only if it is subjected to enough heat to do this.",
            question: "What is melt (become magma)?",
            hint: "If metamorphic rock gets hot enough, it melts — then cools into igneous rock",
          },
        ],
      },
    ],
  },

  {
    name: "GEOLOGY IN ACTION",
    emoji: "🌋",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "This geological event happens when molten rock erupts from an opening in Earth's surface.",
            question: "What is a volcanic eruption?",
            hint: "Think of a mountain blowing its top 🌋",
          },
          {
            answer: "The preserved remains or traces of ancient plants and animals found in rock are called these.",
            question: "What are fossils?",
            hint: "Dinosaur bones and leaf imprints are examples",
          },
          {
            answer: "The hard outer layer of the Earth that we live on, made of rock and soil, is called this.",
            question: "What is the crust?",
            hint: "Like the crust of a pie — it's the thin outer layer",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "These giant puzzle-piece sections of Earth's crust slowly move and float on the hot mantle below.",
            question: "What are tectonic plates?",
            hint: "Earth's surface is cracked into about 15 major pieces that move a few inches per year",
          },
          {
            answer: "When tectonic plates collide, the pressure can push rock upward to form these tall landforms.",
            question: "What are mountains?",
            hint: "The Himalayas are still growing because two plates keep pushing together",
          },
          {
            answer: "Earthquakes happen most often along the boundaries where these geological features meet and grind against each other.",
            question: "What are tectonic plates (or fault lines)?",
            hint: "California's San Andreas Fault is a famous example",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Scientists who study rocks, minerals, and the history of the Earth are called this.",
            question: "What are geologists?",
            hint: "'Geo' means Earth, '-logist' means someone who studies",
          },
          {
            answer: "This geological principle says that in undisturbed sedimentary layers, the oldest rocks are on the bottom and the youngest are on top.",
            question: "What is the Law of Superposition?",
            hint: "The layers on the bottom were laid down first — they've been there the longest",
          },
          {
            answer: "The Ring of Fire is a horseshoe-shaped zone around this ocean where most of Earth's volcanoes and earthquakes occur.",
            question: "What is the Pacific Ocean?",
            hint: "It borders countries like Japan, Chile, and the west coast of the United States",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Soil is formed from the weathering of rock combined with decomposed plant and animal material called this.",
            question: "What is organic matter (or humus)?",
            hint: "Dead leaves and organisms break down and mix with ground-up rock to create soil",
          },
          {
            answer: "Stalactites and stalagmites form inside caves when water deposits this mineral (calcium carbonate) one drip at a time.",
            question: "What is calcite (or calcium carbonate)?",
            hint: "Stalactites hang 'tight' to the ceiling; stalagmites 'might' reach the ceiling someday",
          },
          {
            answer: "This type of fossil forms when a dead organism dissolves away and leaves a hollow space in the rock shaped like the original.",
            question: "What is a mold fossil?",
            hint: "It's like a cookie cutter impression — the shape is there, but the original is gone",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Earth's four main layers, from outside to inside, are the crust, mantle, outer core, and this innermost layer.",
            question: "What is the inner core?",
            hint: "It's a solid ball of mostly iron and nickel, hotter than the surface of the Sun",
          },
          {
            answer: "Petrified wood forms when minerals slowly replace the original wood cells through this geological process, turning the tree to stone.",
            question: "What is petrification (or permineralization)?",
            hint: "Mineral-rich water soaks into the wood and replaces it atom by atom",
          },
          {
            answer: "The Mohs scale mineral at hardness 7, commonly found in sand, is the main reason that walking on a sandy beach can scratch your sunglasses.",
            question: "What is quartz?",
            hint: "Beach sand is mostly tiny grains of this mineral — harder than glass!",
          },
        ],
      },
    ],
  },
];
