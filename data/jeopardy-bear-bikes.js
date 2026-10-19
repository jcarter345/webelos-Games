// Jeopardy question bank — Bears on Bikes (Bear Elective)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   NHTSA Bicycle Safety – https://www.nhtsa.gov/road-safety/bicycle-safety
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_BIKES = [
  {
    name: "HELMETS",
    emoji: "⛑️",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "You should wear this on your head every time you ride.",
            question: "What is a helmet?",
            hint: "Protects your brain",
          },
          {
            answer: "A helmet protects this important body part inside your head.",
            question: "What is your brain?",
            hint: "Thinking machine",
          },
          {
            answer: "Helmet straps should make this letter shape around your ears.",
            question: "What is V?",
            hint: "Like a peace sign upside down",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A helmet should sit this far above your eyebrows.",
            question: "What is two fingers?",
            hint: "Count your fingers",
          },
          {
            answer: "The chin strap should be tight enough that only this many fingers fit under it.",
            question: "What is one (or two)?",
            hint: "Snug!",
          },
          {
            answer: "A helmet should not do this when you shake your head.",
            question: "What is move (wobble)?",
            hint: "Stay put",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "After a crash, a helmet should be this.",
            question: "What is replaced?",
            hint: "Even if it looks OK",
          },
          {
            answer: "A helmet sitting too far back leaves this part of your head unprotected.",
            question: "What is your forehead?",
            hint: "Front of your head",
          },
          {
            answer: "The foam inside a helmet does this in a crash.",
            question: "What is absorb the hit (crush)?",
            hint: "Squish",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Bike helmets should have a sticker from this safety group.",
            question: "What is the CPSC (Consumer Product Safety Commission)?",
            hint: "Government safety stamp",
          },
          {
            answer: "Opening your mouth wide should make the helmet do this.",
            question: "What is pull down (hug your head)?",
            hint: "Snug test",
          },
          {
            answer: "Bright colors and reflectors on a helmet help drivers do this.",
            question: "What is see you?",
            hint: "Be seen!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The \"eyes, ears, mouth\" test checks this.",
            question: "What is helmet fit?",
            hint: "Three checks",
          },
          {
            answer: "Pads inside a helmet are used to adjust this.",
            question: "What is the fit (size)?",
            hint: "Comfy",
          },
          {
            answer: "A helmet's hard outer shell helps it do this on the ground.",
            question: "What is slide (protect from scrapes)?",
            hint: "Smooth",
          },
        ],
      },
    ],
  },
  {
    name: "BIKE CHECK",
    emoji: "🔧",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Before a ride, squeeze these to make sure you can stop.",
            question: "What are the brakes?",
            hint: "Stop!",
          },
          {
            answer: "Before a ride, squeeze these to make sure they have enough air.",
            question: "What are the tires?",
            hint: "Round and rubber",
          },
          {
            answer: "The part of a bike you push with your feet.",
            question: "What are pedals?",
            hint: "Push!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The chain connects the pedals to this wheel.",
            question: "What is the back (rear) wheel?",
            hint: "Back",
          },
          {
            answer: "The part you hold to steer.",
            question: "What are the handlebars?",
            hint: "Handles!",
          },
          {
            answer: "The tire pressure number is written on the side of this.",
            question: "What is the tire?",
            hint: "Look closely",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The \"ABC Quick Check\" stands for Air, Brakes, and this.",
            question: "What is Chain (Cranks)?",
            hint: "C!",
          },
          {
            answer: "Tire air pressure is measured in this unit.",
            question: "What is PSI (pounds per square inch)?",
            hint: "P-S-I",
          },
          {
            answer: "The seat should be high enough that your leg is almost this at the bottom of a pedal stroke.",
            question: "What is straight?",
            hint: "Just a little bend",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A bike chain should be kept clean and this.",
            question: "What is oiled (lubricated)?",
            hint: "Not rusty",
          },
          {
            answer: "Reflectors on the pedals and wheels help you be seen at this time.",
            question: "What is night?",
            hint: "When it's dark",
          },
          {
            answer: "A bike bell is used to do this.",
            question: "What is warn others (let people know you're coming)?",
            hint: "Ring ring!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The quick release lever holds this on.",
            question: "What is the wheel?",
            hint: "Flip and open",
          },
          {
            answer: "Brakes you squeeze with your hands are called these.",
            question: "What are hand brakes (rim brakes)?",
            hint: "Squeeze",
          },
          {
            answer: "Brakes you use by pedaling backward are called these.",
            question: "What are coaster brakes?",
            hint: "Backpedal",
          },
        ],
      },
    ],
  },
  {
    name: "RULES OF THE ROAD",
    emoji: "🚦",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Bikes ride on this side of the road.",
            question: "What is the right side?",
            hint: "Same as cars",
          },
          {
            answer: "At a stop sign, a bike rider must do this.",
            question: "What is stop?",
            hint: "S-T-O-P",
          },
          {
            answer: "A red light means this.",
            question: "What is stop?",
            hint: "Red!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Riding in a single line with friends is called this.",
            question: "What is single file?",
            hint: "One behind the other",
          },
          {
            answer: "Before crossing a street, look left, right, and this.",
            question: "What is left again?",
            hint: "Twice to the left",
          },
          {
            answer: "When riding on a sidewalk, you should give way to these.",
            question: "What are walkers (pedestrians)?",
            hint: "People on foot",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Bikes are treated like these by traffic laws.",
            question: "What are vehicles (cars)?",
            hint: "Follow the same rules",
          },
          {
            answer: "Riding toward traffic is dangerous because cars come this way.",
            question: "What is straight at you (head-on)?",
            hint: "Wrong way!",
          },
          {
            answer: "A car door opening suddenly is called getting this.",
            question: "What is doored?",
            hint: "Watch parked cars",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Riding with headphones is unsafe because you can't do this.",
            question: "What is hear (traffic)?",
            hint: "Ears matter",
          },
          {
            answer: "Making eye contact with drivers helps make sure they do this.",
            question: "What is see you?",
            hint: "Look at them",
          },
          {
            answer: "At driveways and alleys, watch for cars backing this way.",
            question: "What is out (into the street)?",
            hint: "Reverse!",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "A bike lane is marked by a white line and a picture of this.",
            question: "What is a bicycle?",
            hint: "Two wheels",
          },
          {
            answer: "When passing a walker from behind, you say this.",
            question: "What is \"on your left\"?",
            hint: "Heads up!",
          },
          {
            answer: "Riding at night requires a white front light and a red rear this.",
            question: "What is light (reflector)?",
            hint: "Red in back",
          },
        ],
      },
    ],
  },
  {
    name: "HAND SIGNALS",
    emoji: "🖐️",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Hand signals let drivers know what you plan to do, like turn or this.",
            question: "What is stop?",
            hint: "Halt!",
          },
          {
            answer: "Sticking your left arm straight out means this.",
            question: "What is turn left?",
            hint: "Point the way",
          },
          {
            answer: "You give hand signals with this hand most of the time.",
            question: "What is the left hand?",
            hint: "Toward the traffic",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Left arm out with the hand pointing down means this.",
            question: "What is stop (slow down)?",
            hint: "Down = stop",
          },
          {
            answer: "Left arm out with the hand bent up means this.",
            question: "What is turn right?",
            hint: "Up = right",
          },
          {
            answer: "You can also signal a right turn by pointing this arm straight out.",
            question: "What is the right arm?",
            hint: "Point right",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "You should signal this long before you turn.",
            question: "What is early (ahead of time)?",
            hint: "Give a warning",
          },
          {
            answer: "During a turn, put your hand back on the handlebars to do this.",
            question: "What is control the bike (steer, brake)?",
            hint: "Two hands!",
          },
          {
            answer: "Before signaling, you should look this way for cars.",
            question: "What is behind you (over your shoulder)?",
            hint: "Look back",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A 30-minute ride is part of this Bear adventure.",
            question: "What is Bears on Bikes?",
            hint: "Ride on!",
          },
          {
            answer: "You should ride with this person on your 30-minute ride.",
            question: "What is a buddy (an adult)?",
            hint: "Two's better",
          },
          {
            answer: "Riding with one hand is fine only for these.",
            question: "What are short signals?",
            hint: "Quickly",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Practicing signals in an empty parking lot first is a good idea because there's no this.",
            question: "What is traffic?",
            hint: "No cars",
          },
          {
            answer: "Bike riders should ride in a straight line so drivers can guess this.",
            question: "What is where you're going?",
            hint: "Be predictable",
          },
          {
            answer: "A practice course with cones to weave through is called a bike this.",
            question: "What is rodeo?",
            hint: "Yeehaw!",
          },
        ],
      },
    ],
  },
];
