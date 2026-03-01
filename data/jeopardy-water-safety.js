// Jeopardy question bank — Aquanaut (Water Safety) Adventure
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Sources:
//   BSA Webelos Aquanaut Adventure – https://www.scouting.org/programs/cub-scouts/adventures/webelos/
//   BSA Safe Swim Defense – https://www.scouting.org/health-and-safety/gss/gss02/
//   American Red Cross Water Safety – https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety.html
//   CDC Drowning Prevention – https://www.cdc.gov/drowning/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_WATER_SAFETY = [
  {
    name: "ORDER OF RESCUE",
    emoji: "🛟",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The first step in any water rescue — and the safest for the rescuer — is to do this from shore without entering the water.",
            question: "What is reach?",
            hint: "Use a pole, branch, towel, or anything long to reach the person",
          },
          {
            answer: "The four steps of water rescue, in order from safest to most dangerous, are: Reach, Throw, Row, and this.",
            question: "What is Go?",
            hint: "The last resort — actually going into the water yourself",
          },
          {
            answer: "If someone is struggling in the water and you're on shore, you should always try to rescue them without entering the water because of this reason.",
            question: "What is because you could drown too (the rescuer can become a victim)?",
            hint: "A panicking person can pull you under — stay on dry land if possible",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The second step of water rescue is to 'throw' — this means tossing one of these flotation devices to the person in trouble.",
            question: "What is a life ring, throw bag, or any floating object (cooler, jug, etc.)?",
            hint: "Anything that floats — even an empty cooler can save a life",
          },
          {
            answer: "Before attempting any rescue, the very first thing you should do is call for help by yelling or calling this emergency number.",
            question: "What is 911?",
            hint: "Get professional help on the way immediately",
          },
          {
            answer: "The 'reach' step of rescue can be done using a pole, branch, oar, towel, or even this article of clothing.",
            question: "What is a shirt (or belt / jacket)?",
            hint: "Anything long enough to bridge the gap — hold tight to one end!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The third step in the rescue order is 'row,' which means using a boat or this type of flotation board to get to the person.",
            question: "What is a surfboard (or paddleboard / kayak / canoe)?",
            hint: "Get on something that floats to go to them — don't just swim out",
          },
          {
            answer: "The reason 'Go' (swimming to the victim) is the last resort in water rescue is because a panicking person will often do this to the rescuer.",
            question: "What is grab onto them and push them under (climb on top of them)?",
            hint: "A drowning person is in survival mode — they'll use anything as a flotation device, including you",
          },
          {
            answer: "If you must do a swimming rescue ('Go'), you should bring one of these with you to place between you and the victim.",
            question: "What is a flotation device (rescue tube, life jacket, kickboard, or any float)?",
            hint: "Give them something to grab instead of you",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "When reaching to rescue someone, you should lie flat on the ground or dock and hold onto something solid to prevent being pulled into this.",
            question: "What is the water?",
            hint: "Brace yourself — a panicking person is surprisingly strong",
          },
          {
            answer: "A throw bag used for water rescue contains a coiled rope inside a floating bag. You throw the bag to the person and then do this.",
            question: "What is pull them in to shore?",
            hint: "The person grabs the bag, you pull the rope — teamwork!",
          },
          {
            answer: "Even trained lifeguards are taught to use 'Reach, Throw, Row' before 'Go' because statistics show that this percentage of would-be rescuers become victims themselves.",
            question: "What is a significant percentage (drowning rescuers are common)?",
            hint: "Every year, people drown trying to save others — that's why we try safer methods first",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "If a victim is unconscious in the water and you must enter, you should approach from behind to avoid being grabbed and use this swimming technique to tow them to safety.",
            question: "What is a cross-chest carry (or rescue tow)?",
            hint: "Wrap your arm across their chest from behind and sidestroke to shore",
          },
          {
            answer: "In the BSA, all waterfront activities must follow this safety policy that includes a buddy system, qualified supervision, and a safe swimming area.",
            question: "What is Safe Swim Defense?",
            hint: "BSA's water safety plan — it has eight essential points",
          },
          {
            answer: "The BSA Safe Swim Defense requires that all swimming activities have this minimum number of certified adult supervisors present.",
            question: "What is one qualified supervisor (with Safe Swim Defense training)?",
            hint: "At least one trained adult must be watching at all times",
          },
        ],
      },
    ],
  },

  {
    name: "SWIMMING SAFETY",
    emoji: "🏊",
    color: "#0a1520",
    accent: "#3b82f6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The BSA buddy system for swimming means you are always paired with a partner and never do this in or near water.",
            question: "What is swim alone?",
            hint: "Always have a buddy — they watch you, you watch them",
          },
          {
            answer: "Before swimming in any body of water, you should always check for this to make sure it's safe — including depth, currents, and hazards.",
            question: "What is water conditions (or the swimming area)?",
            hint: "Don't just jump in — look first!",
          },
          {
            answer: "This personal flotation device should be worn by all non-swimmers and weak swimmers when near or on the water.",
            question: "What is a life jacket (or PFD — Personal Flotation Device)?",
            hint: "It keeps you floating even if you're tired or unconscious",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "At a BSA swim area, different colored tags or wristbands mark swimmers into these three skill levels.",
            question: "What are non-swimmer, beginner, and swimmer?",
            hint: "You take a swim test to determine which level you are",
          },
          {
            answer: "You should never dive headfirst into water unless you know it is at least this deep, to avoid hitting the bottom.",
            question: "What is 9 feet (or deep enough to be safe)?",
            hint: "Shallow water diving causes serious spinal cord injuries every year",
          },
          {
            answer: "If you get caught in a current while swimming in a river or ocean, you should NOT try to swim against it. Instead, swim in this direction to escape.",
            question: "What is parallel to shore (or sideways/across the current)?",
            hint: "Don't fight the current head-on — swim out of it by going sideways",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The BSA buddy check is performed regularly during swim time — a whistle blows and buddies must do this immediately.",
            question: "What is find your buddy, hold hands (or clasp wrists), and raise your joined hands in the air?",
            hint: "Hands up so the lifeguard can count and see that everyone is paired",
          },
          {
            answer: "Swimming in this type of body of water is generally more dangerous than a pool because of currents, uneven bottoms, and limited visibility.",
            question: "What is open water (lakes, rivers, oceans)?",
            hint: "Pools are controlled environments — nature is unpredictable",
          },
          {
            answer: "If a swimmer becomes tired in deep water, they can rest by floating on their back in this energy-saving position.",
            question: "What is the survival float (or back float)?",
            hint: "Lie on your back, spread out like a starfish, and breathe — you'll float!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "A life jacket must be this type of fit to be effective — too big and you could slip out, too small and it won't support your weight.",
            question: "What is a snug (proper / correctly sized) fit?",
            hint: "It should not ride up over your chin when someone lifts the shoulders",
          },
          {
            answer: "According to the CDC, children ages 1-14 drown most commonly in these two locations.",
            question: "What are swimming pools and open water (lakes, rivers, oceans)?",
            hint: "Pools for younger kids, open water for older ones",
          },
          {
            answer: "A rip current in the ocean pulls swimmers away from shore. The best way to escape is to swim parallel to the beach until you're out of the current, then swim at this angle back to shore.",
            question: "What is at an angle (diagonally toward shore)?",
            hint: "Don't swim straight back — angle your way in after escaping the pull",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The BSA Safe Swim Defense includes eight points: qualified supervision, personal health review, safe area, response personnel, lookout, ability groups, buddy system, and this.",
            question: "What is discipline (following the rules)?",
            hint: "All the rules in the world don't help if people don't follow them",
          },
          {
            answer: "Drowning is called the 'silent killer' because real drowning usually does NOT look like what you see in movies — victims often can't do this.",
            question: "What is call for help (yell or wave their arms)?",
            hint: "Real drowning is quiet — the person is using all their energy just to breathe",
          },
          {
            answer: "Secondary drowning (also called dry drowning) can occur up to this many hours after a water incident, when water in the lungs causes breathing problems.",
            question: "What is 24 hours (or up to 72 hours)?",
            hint: "If someone swallowed a lot of water, watch them closely even after they seem fine",
          },
        ],
      },
    ],
  },

  {
    name: "WATER SCIENCE",
    emoji: "🌊",
    color: "#0a0f1a",
    accent: "#6366f1",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The force that makes you float in water — the same force that keeps a boat from sinking — is called this.",
            question: "What is buoyancy?",
            hint: "The water pushes up on you while gravity pulls down — when they balance, you float",
          },
          {
            answer: "Humans naturally float better in salt water (like the ocean) than in fresh water because salt water is more this.",
            question: "What is dense (heavier per volume)?",
            hint: "The salt makes the water heavier, so it pushes you up more",
          },
          {
            answer: "A life jacket works by trapping this substance inside foam or inflatable chambers, which is much less dense than water.",
            question: "What is air?",
            hint: "Air is lighter than water — pack enough of it around you and you'll float",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The current in a river moves fastest in the center and slowest along these edges where the water is shallow.",
            question: "What are the banks (or the shore / edges)?",
            hint: "Friction from the bottom and sides slows the water down at the edges",
          },
          {
            answer: "Water temperature drops quickly as you swim deeper because sunlight cannot warm water below this zone near the surface.",
            question: "What is the surface layer (or the warm upper layer / thermocline)?",
            hint: "The sun heats the top — deeper water stays cold",
          },
          {
            answer: "Hypothermia in cold water happens much faster than in cold air because water conducts heat away from your body this many times faster.",
            question: "What is 25 times faster?",
            hint: "Water steals your body heat incredibly fast — that's why cold water is so dangerous",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "When you exhale and let the air out of your lungs, you become less buoyant and tend to do this in the water.",
            question: "What is sink?",
            hint: "Your lungs act like built-in life jackets when full of air",
          },
          {
            answer: "Ocean waves are primarily caused by the energy from this weather phenomenon pushing against the water's surface.",
            question: "What is wind?",
            hint: "No wind, no waves — that's why calm days produce flat water",
          },
          {
            answer: "The movement of ocean water caused by the gravitational pull of the moon and sun, creating high and low water levels, is called this.",
            question: "What are tides?",
            hint: "They go in and out roughly every 6 hours — the moon is pulling the water",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "In water colder than 70°F, your body loses heat faster than it can produce it. This dangerous cooling of core body temperature below 95°F is called this.",
            question: "What is hypothermia?",
            hint: "'Hypo' = low, 'thermia' = temperature — your body is getting too cold",
          },
          {
            answer: "When your body hits cold water suddenly, an involuntary gasp reflex can cause you to inhale water. This dangerous reaction is called this.",
            question: "What is cold water shock (or the gasp reflex)?",
            hint: "Your body gasps automatically — if your head is underwater, you'll inhale water",
          },
          {
            answer: "Archimedes' Principle states that an object in water is buoyed up by a force equal to the weight of this that the object displaces.",
            question: "What is the water (the fluid it pushes aside)?",
            hint: "The bigger you are, the more water you push out of the way, and the more force pushes you up",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Steel ships float despite being heavier than water because their hull shape displaces a volume of water that weighs more than the ship. This demonstrates this famous scientific principle.",
            question: "What is Archimedes' Principle (or the principle of displacement)?",
            hint: "A solid block of steel sinks — but shape it into a hollow boat and it floats!",
          },
          {
            answer: "Water has a specific heat capacity about 4 times higher than air, which means it takes 4 times as much energy to change its temperature by 1 degree. This is why the ocean moderates this.",
            question: "What is coastal temperatures (or climate)?",
            hint: "Cities near the ocean have milder temperatures than inland cities",
          },
          {
            answer: "The 1-10-1 rule for cold water survival says you have 1 minute to control your breathing, 10 minutes of meaningful movement, and 1 hour before you lose consciousness from this.",
            question: "What is hypothermia?",
            hint: "1 minute, 10 minutes, 1 hour — know your survival timeline",
          },
        ],
      },
    ],
  },

  {
    name: "BE PREPARED",
    emoji: "⚓",
    color: "#15100a",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Before any water activity, you should always tell someone where you're going and when you plan to return. This is called a this plan.",
            question: "What is a float plan (or trip plan)?",
            hint: "Just like hikers leave a trip plan — boaters and swimmers should too",
          },
          {
            answer: "Every person on a boat is required by law to have one of these safety devices available to them.",
            question: "What is a life jacket (or PFD — Personal Flotation Device)?",
            hint: "One per person, properly sized, readily accessible",
          },
          {
            answer: "If a thunderstorm approaches while you're swimming, you should immediately exit the water because of the danger from this.",
            question: "What is lightning?",
            hint: "Water conducts electricity — lightning + water = extreme danger",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Signs posted at beaches that say 'No Swimming' or display a red flag mean this condition exists.",
            question: "What are dangerous conditions (strong currents, rip currents, high waves, contamination)?",
            hint: "Red means stop — don't go in the water when you see these warnings",
          },
          {
            answer: "The BSA 'Safe Swim Defense' plan is a set of eight safety requirements that must be followed before any Scout does this activity.",
            question: "What is swimming?",
            hint: "Every BSA swim must follow these eight safety rules — no exceptions",
          },
          {
            answer: "At a beach, these colored flags indicate water conditions: green means safe, yellow means caution, and this color means dangerous — stay out.",
            question: "What is red?",
            hint: "Same as a traffic light — red means STOP",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "If you see someone drowning from shore and can't reach them with a pole, the next best action is to throw them something that does this.",
            question: "What is floats?",
            hint: "A cooler, jug, pool noodle, kickboard — anything buoyant",
          },
          {
            answer: "When boating, passengers should remain seated and keep their weight centered in the boat to prevent this dangerous event.",
            question: "What is capsizing (tipping over)?",
            hint: "Standing up or leaning to one side can flip a small boat",
          },
          {
            answer: "If your boat capsizes, you should stay with the boat rather than try to swim to shore because the boat does this.",
            question: "What is floats (provides buoyancy / is easier to spot)?",
            hint: "Even upside-down boats float — and rescuers can see a boat much easier than a swimmer",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The Red Cross recommends that children learn to swim by age this, and that all families should learn basic water safety regardless of swimming ability.",
            question: "What is 4 years old (or by school age)?",
            hint: "Learning to swim early is one of the best ways to prevent drowning",
          },
          {
            answer: "Water wings, inflatable toys, and pool noodles are NOT substitutes for this actual safety device that can save your life.",
            question: "What is a U.S. Coast Guard-approved life jacket (PFD)?",
            hint: "Pool toys are toys — they can pop, deflate, or slip off. Only approved PFDs save lives",
          },
          {
            answer: "After a heavy rainstorm, swimming in lakes, rivers, and streams can be especially dangerous because of increased current and this type of water contamination.",
            question: "What is runoff pollution (bacteria, sewage, chemicals washed in by stormwater)?",
            hint: "Rain washes all kinds of nasty stuff off roads, farms, and neighborhoods into the water",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The five layers of protection against drowning recommended by the American Academy of Pediatrics include: fencing, supervision, swim lessons, life jackets, and learning this skill.",
            question: "What is CPR (cardiopulmonary resuscitation)?",
            hint: "If you pull someone from the water who isn't breathing, this can save their life",
          },
          {
            answer: "HELP (Heat Escape Lessening Position) is a survival position in cold water where you draw your knees to your chest and cross your arms. It reduces heat loss from these three body areas.",
            question: "What are the head, torso (sides), and groin?",
            hint: "These areas have the most blood flow near the surface — protect them from cold water",
          },
          {
            answer: "According to the CDC, formal swimming lessons can reduce the risk of drowning in children ages 1-4 by this approximate percentage.",
            question: "What is 88%?",
            hint: "Almost 9 out of 10 drownings could be prevented — swim lessons save lives",
          },
        ],
      },
    ],
  },
];
