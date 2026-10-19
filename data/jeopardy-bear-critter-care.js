// Jeopardy question bank — Critter Care (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   ASPCA Pet Care – https://www.aspca.org/pet-care
//   AVMA Pet Owners – https://www.avma.org/resources-tools/pet-owners
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_CRITTER_CARE = [
  {
    name: "PET NEEDS",
    emoji: "🐶",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "All pets need fresh this every day to drink.",
            question: "What is water?",
            hint: "Fill the bowl",
          },
          {
            answer: "A doctor for animals.",
            question: "What is a veterinarian (vet)?",
            hint: "Vet!",
          },
          {
            answer: "Dogs need to go on these to get exercise.",
            question: "What are walks?",
            hint: "Leash up!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A pet's home, food, water, and care are called its basic this.",
            question: "What are needs?",
            hint: "Must-haves",
          },
          {
            answer: "Brushing a pet's fur is called this.",
            question: "What is grooming?",
            hint: "Fancy hair day",
          },
          {
            answer: "Shots that keep pets from getting sick.",
            question: "What are vaccines (vaccinations)?",
            hint: "Like your shots",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A tag on a collar helps a lost pet do this.",
            question: "What is get back home?",
            hint: "Name and phone",
          },
          {
            answer: "A tiny chip under a pet's skin that helps find its owner.",
            question: "What is a microchip?",
            hint: "Scan it!",
          },
          {
            answer: "Cleaning up after your dog on a walk is part of being a good this.",
            question: "What is neighbor (pet owner)?",
            hint: "Bring a bag",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Dogs need their nails trimmed so they don't do this.",
            question: "What is grow too long (hurt their paws)?",
            hint: "Click click on the floor",
          },
          {
            answer: "Pets should visit the vet at least this often.",
            question: "What is once a year?",
            hint: "Yearly checkup",
          },
          {
            answer: "A pet that's too hot needs shade and this.",
            question: "What is water?",
            hint: "Cool down",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Chocolate is dangerous for dogs because it has this chemical.",
            question: "What is theobromine?",
            hint: "Not caffeine, but close",
          },
          {
            answer: "Grapes and raisins can hurt this organ in dogs.",
            question: "What are the kidneys?",
            hint: "Bean-shaped organs",
          },
          {
            answer: "Keeping a log of feeding and walks for two weeks is part of this Bear adventure.",
            question: "What is Critter Care?",
            hint: "Care for critters!",
          },
        ],
      },
    ],
  },
  {
    name: "PET FACTS",
    emoji: "🐱",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A baby cat.",
            question: "What is a kitten?",
            hint: "Meow",
          },
          {
            answer: "A baby dog.",
            question: "What is a puppy?",
            hint: "Woof",
          },
          {
            answer: "Cats make this sound when they're happy.",
            question: "What is purr?",
            hint: "Rrrrr",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A dog wagging its tail usually means it's this.",
            question: "What is happy (excited)?",
            hint: "Wag wag",
          },
          {
            answer: "A rabbit's teeth never stop doing this.",
            question: "What is growing?",
            hint: "Chew toys help",
          },
          {
            answer: "A goldfish lives in this.",
            question: "What is a fish tank (aquarium, bowl)?",
            hint: "Water home",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A cat uses this box as a bathroom.",
            question: "What is a litter box?",
            hint: "Scoop it",
          },
          {
            answer: "Hamsters store food in these pouches.",
            question: "What are cheek pouches?",
            hint: "Chubby cheeks",
          },
          {
            answer: "Dogs sweat mostly through their paws and cool off by doing this.",
            question: "What is panting?",
            hint: "Tongue out",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Cats spend about this much of their day sleeping.",
            question: "What is two-thirds (12 to 16 hours)?",
            hint: "Lots of naps",
          },
          {
            answer: "A turtle or lizard is this kind of animal.",
            question: "What is a reptile?",
            hint: "Scaly",
          },
          {
            answer: "A guinea pig needs this vitamin from fresh veggies every day.",
            question: "What is vitamin C?",
            hint: "Like oranges",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Dogs have a sense of smell this many times better than people.",
            question: "What is 10,000 (or more)?",
            hint: "Super sniffer!",
          },
          {
            answer: "A cat's whiskers help it do this in the dark.",
            question: "What is feel its way (measure spaces)?",
            hint: "Touch sensors",
          },
          {
            answer: "Animals that are active at night are called this.",
            question: "What is nocturnal?",
            hint: "Night owls",
          },
        ],
      },
    ],
  },
  {
    name: "ANIMAL JOBS",
    emoji: "🦮",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A dog that helps a person who is blind.",
            question: "What is a guide dog?",
            hint: "Guides the way",
          },
          {
            answer: "Dogs that help police find things.",
            question: "What are police dogs (K-9s)?",
            hint: "K-9",
          },
          {
            answer: "Animals that live on a farm and give us milk.",
            question: "What are cows (goats)?",
            hint: "Moo!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A dog that visits hospitals to cheer people up.",
            question: "What is a therapy dog?",
            hint: "Hugs!",
          },
          {
            answer: "Dogs that help find people after earthquakes.",
            question: "What are search and rescue dogs?",
            hint: "Sniff sniff",
          },
          {
            answer: "Sheepdogs help farmers do this.",
            question: "What is herd sheep?",
            hint: "Round them up",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Animals that help people with disabilities are called this kind of animal.",
            question: "What is a service animal?",
            hint: "Service!",
          },
          {
            answer: "You should never pet a service dog without doing this.",
            question: "What is asking the owner?",
            hint: "It's working",
          },
          {
            answer: "Horses and oxen once pulled these on farms.",
            question: "What are plows (wagons)?",
            hint: "Plowing fields",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Dogs that sniff luggage at airports.",
            question: "What are detection dogs?",
            hint: "Sniffing for danger",
          },
          {
            answer: "Pigs are used to find these fancy underground mushrooms.",
            question: "What are truffles?",
            hint: "Oink oink",
          },
          {
            answer: "Cats were kept on ships to catch these.",
            question: "What are mice (rats)?",
            hint: "Squeak!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Some dogs can detect changes in a person's blood sugar for this condition.",
            question: "What is diabetes?",
            hint: "Medical alert",
          },
          {
            answer: "Llamas are sometimes used to guard these from coyotes.",
            question: "What are sheep (goats)?",
            hint: "Big fluffy guards",
          },
          {
            answer: "Carrier pigeons were used long ago to do this.",
            question: "What is deliver messages?",
            hint: "Bird mail",
          },
        ],
      },
    ],
  },
  {
    name: "CHOOSING A PET",
    emoji: "🐹",
    color: "#0f0a1a",
    accent: "#a78bfa",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A place where you can adopt a pet that needs a home.",
            question: "What is an animal shelter?",
            hint: "Adopt!",
          },
          {
            answer: "Taking a shelter pet home is called this.",
            question: "What is adopting?",
            hint: "Forever home",
          },
          {
            answer: "A small pet that runs on a wheel.",
            question: "What is a hamster?",
            hint: "Spin!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Before getting a pet, a family should think about how much this it takes.",
            question: "What is time (work)?",
            hint: "Lots of care",
          },
          {
            answer: "Some people sneeze around cats and dogs because of these.",
            question: "What are allergies?",
            hint: "Achoo!",
          },
          {
            answer: "A big dog needs more of this than a small fish.",
            question: "What is space (exercise)?",
            hint: "Room to run",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Pets cost money for food, toys, and this.",
            question: "What are vet bills?",
            hint: "Doctor visits",
          },
          {
            answer: "Some pets, like parrots, can live longer than this.",
            question: "What is 50 years?",
            hint: "Lifetime pets",
          },
          {
            answer: "A pet that lives in water and needs its tank cleaned.",
            question: "What is a fish?",
            hint: "Glub glub",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Wild animals should not be kept as these.",
            question: "What are pets?",
            hint: "They belong outside",
          },
          {
            answer: "Spaying and neutering pets helps prevent too many of these.",
            question: "What are homeless pets?",
            hint: "Fewer strays",
          },
          {
            answer: "Reading books about a pet before getting one is called doing this.",
            question: "What is research?",
            hint: "Learn first!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A dog that is gentle and good with kids is said to have a good this.",
            question: "What is temperament?",
            hint: "Personality",
          },
          {
            answer: "Some dog breeds are called this because they shed very little.",
            question: "What is hypoallergenic?",
            hint: "Allergy-friendly",
          },
          {
            answer: "The most popular pet in the United States.",
            question: "What is a dog?",
            hint: "Man's best friend",
          },
        ],
      },
    ],
  },
];
