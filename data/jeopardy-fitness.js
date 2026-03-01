// Jeopardy question bank — Stronger, Faster, Higher (Fitness & Nutrition) Adventure
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Sources:
//   BSA Webelos Stronger, Faster, Higher Adventure – https://www.scouting.org/programs/cub-scouts/adventures/webelos/
//   USDA MyPlate – https://www.myplate.gov
//   CDC Physical Activity Guidelines for Children – https://www.cdc.gov/physicalactivity/
//   KidsHealth – https://kidshealth.org
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_FITNESS = [
  {
    name: "FUEL YOUR BODY",
    emoji: "🍎",
    color: "#1a0f0f",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The USDA's guide to healthy eating divides your plate into these five food groups: fruits, vegetables, grains, protein, and this dairy product.",
            question: "What is dairy?",
            hint: "Milk, cheese, and yogurt are all part of this group",
          },
          {
            answer: "According to MyPlate, this food group should fill about half of your plate at every meal.",
            question: "What are fruits and vegetables?",
            hint: "The colorful stuff — the more variety, the better!",
          },
          {
            answer: "Water makes up about 60% of your body and is the best drink to stay hydrated. Kids should drink about this many cups per day.",
            question: "What is 6 to 8 cups?",
            hint: "Keep a water bottle with you and sip throughout the day",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "These nutrients, found in foods like bread, pasta, and fruit, are your body's main source of quick energy.",
            question: "What are carbohydrates?",
            hint: "Think of them as fuel in your gas tank — they keep you going",
          },
          {
            answer: "This nutrient, found in meat, beans, eggs, and nuts, helps build and repair your muscles.",
            question: "What is protein?",
            hint: "Your muscles are made of this — athletes need plenty of it",
          },
          {
            answer: "Whole wheat bread, brown rice, and oatmeal are all examples of this healthier type of grain.",
            question: "What are whole grains?",
            hint: "They still have all three parts of the grain — more fiber and nutrients than white/refined",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This mineral, found in milk and cheese, is essential for building strong bones and teeth — especially important for growing kids.",
            question: "What is calcium?",
            hint: "Your skeleton is still growing — it needs this mineral to be strong",
          },
          {
            answer: "A balanced meal should include foods from at least three different food groups. The Stronger, Faster, Higher adventure requires scouts to plan, cook, and eat one of these.",
            question: "What is a balanced meal?",
            hint: "Not just pizza — a meal with variety from multiple food groups",
          },
          {
            answer: "The nutrition facts label on packaged food tells you the serving size, calories, and amounts of these important nutrients.",
            question: "What are fat, sodium, sugar, protein, vitamins, etc.?",
            hint: "The label on the back of every food package — it tells you what's inside",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "This vitamin, found in citrus fruits and strawberries, helps your immune system fight off colds and helps heal cuts.",
            question: "What is Vitamin C?",
            hint: "Oranges and lemons are famous for having lots of it",
          },
          {
            answer: "Eating a variety of colorful fruits and vegetables is important because different colors provide different types of these health-boosting nutrients.",
            question: "What are vitamins and minerals (or antioxidants)?",
            hint: "Red, orange, green, purple — each color has its own superpowers",
          },
          {
            answer: "Sports drinks contain sugar and these minerals (like sodium and potassium) that your body loses through sweat during intense exercise.",
            question: "What are electrolytes?",
            hint: "They help your muscles and nerves work properly",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "This B vitamin, found in leafy greens and fortified cereals, is important for making red blood cells and helping your body use energy from food.",
            question: "What is folate (or folic acid / Vitamin B9)?",
            hint: "'Folate' comes from 'foliage' — think green leafy vegetables",
          },
          {
            answer: "The recommended daily amount of added sugar for children is no more than this many teaspoons — about the amount in one can of soda.",
            question: "What is 6 teaspoons (25 grams)?",
            hint: "One soda has about 10 teaspoons — that's already way over the limit!",
          },
          {
            answer: "Iron is a mineral needed to carry oxygen in your blood. A deficiency of iron leads to this condition that causes tiredness and weakness.",
            question: "What is anemia?",
            hint: "Without enough iron, your blood can't carry enough oxygen to your muscles",
          },
        ],
      },
    ],
  },

  {
    name: "WARM UP & COOL DOWN",
    emoji: "🤸",
    color: "#1a150a",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "You should always do this type of activity before exercising to warm up your muscles and prevent injury.",
            question: "What is stretching (or a warm-up)?",
            hint: "Get your muscles ready before you push them hard",
          },
          {
            answer: "The purpose of a warm-up is to gradually increase your heart rate and blood flow to these body parts before intense exercise.",
            question: "What are your muscles?",
            hint: "Cold muscles are more likely to get injured — warm them up first",
          },
          {
            answer: "After exercising, you should spend 5 to 10 minutes doing this to help your body recover and prevent soreness.",
            question: "What is cooling down (stretching / walking slowly)?",
            hint: "Don't just stop suddenly — ease your body back to rest",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This type of stretching, where you hold a position for 15-30 seconds without bouncing, is best done during your cool-down.",
            question: "What is static stretching?",
            hint: "Static means still — hold the stretch and don't bounce",
          },
          {
            answer: "This type of stretching, which involves moving your body through a range of motion, is best done during your warm-up.",
            question: "What is dynamic stretching?",
            hint: "Arm circles, leg swings, high knees — you're moving while you stretch",
          },
          {
            answer: "A good warm-up should last at least this many minutes to prepare your body for exercise.",
            question: "What is 5 to 10 minutes?",
            hint: "Long enough to break a light sweat",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The Stronger, Faster, Higher adventure requires Scouts to be active for this many minutes with their den doing both stretching and moving.",
            question: "What is 30 minutes?",
            hint: "Half an hour of combined stretching and movement",
          },
          {
            answer: "Bouncing during a stretch is called ballistic stretching and is NOT recommended because it can cause this.",
            question: "What is a muscle tear (or injury / pulled muscle)?",
            hint: "Bouncing forces the muscle beyond its safe range — hold still instead",
          },
          {
            answer: "When stretching, you should feel a gentle pull but never this sensation, which means you've gone too far.",
            question: "What is pain?",
            hint: "Stretch to the point of mild tension — if it hurts, you've overdone it",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "This part of your leg — the large muscle on the back of your thigh — is one of the most commonly injured muscles when people skip their warm-up.",
            question: "What is the hamstring?",
            hint: "It's on the back of your upper leg, opposite the quadriceps",
          },
          {
            answer: "Flexibility is the ability of your joints and muscles to move through their full range of this.",
            question: "What is motion?",
            hint: "How far you can bend, twist, and reach",
          },
          {
            answer: "A proper cool-down helps remove this waste product that builds up in your muscles during hard exercise and causes soreness.",
            question: "What is lactic acid?",
            hint: "It makes your muscles burn and feel sore after intense exercise",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The 'RICE' method for treating a minor muscle or joint injury stands for Rest, Ice, Compression, and this.",
            question: "What is Elevation?",
            hint: "Raise the injured area above your heart to reduce swelling",
          },
          {
            answer: "Stretching regularly over time improves flexibility, which helps prevent injuries and improves this aspect of athletic performance.",
            question: "What is range of motion (or agility / performance)?",
            hint: "Flexible athletes can move more freely and efficiently",
          },
          {
            answer: "Yoga, an ancient practice from India, combines physical poses, breathing exercises, and this mental component that helps reduce stress.",
            question: "What is meditation (or mindfulness)?",
            hint: "It's exercise for your body AND your mind",
          },
        ],
      },
    ],
  },

  {
    name: "GET MOVING",
    emoji: "🏃",
    color: "#0a1a15",
    accent: "#10b981",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The CDC recommends that children ages 6-17 get at least this many minutes of physical activity every day.",
            question: "What is 60 minutes (1 hour)?",
            hint: "An hour a day keeps the doctor away!",
          },
          {
            answer: "Running, swimming, biking, and dancing are all examples of this type of exercise that makes your heart and lungs stronger.",
            question: "What is aerobic exercise (or cardio)?",
            hint: "'Aerobic' means 'with oxygen' — these activities get you breathing hard",
          },
          {
            answer: "The organ in your body that gets stronger with regular cardiovascular exercise and pumps blood to all your muscles.",
            question: "What is the heart?",
            hint: "It's a muscle too — and exercise makes it stronger",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Push-ups, pull-ups, and carrying heavy things are examples of this type of exercise that builds stronger muscles.",
            question: "What is strength training (or muscle-building exercise)?",
            hint: "These exercises make your muscles work against resistance",
          },
          {
            answer: "The Stronger, Faster, Higher adventure requires Scouts to be active for this many minutes doing personal exercises that boost heart rate, use muscles, and work on flexibility.",
            question: "What is 15 minutes?",
            hint: "A quarter of an hour of focused personal exercise",
          },
          {
            answer: "Your heart rate is measured in beats per minute. You can feel your heartbeat by pressing two fingers on your wrist or on the side of this body part.",
            question: "What is your neck (the carotid artery)?",
            hint: "Press gently on the side — you'll feel a steady pulse",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "This type of exercise improves your body's ability to bend and move freely — yoga and stretching are great examples.",
            question: "What is flexibility exercise?",
            hint: "Being limber and able to touch your toes is this fitness component",
          },
          {
            answer: "The three main types of fitness that the Stronger, Faster, Higher adventure focuses on are cardiovascular endurance, muscular strength, and this.",
            question: "What is flexibility?",
            hint: "Heart, muscles, and the ability to bend — the three fitness pillars",
          },
          {
            answer: "An exercise that uses only your own body weight — like push-ups, squats, and planks — without any equipment is called this.",
            question: "What is a bodyweight exercise (or calisthenics)?",
            hint: "No gym needed — your body IS the equipment",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "During vigorous exercise, your body cools itself down by producing this liquid from glands in your skin.",
            question: "What is sweat (perspiration)?",
            hint: "As it evaporates off your skin, it cools you down",
          },
          {
            answer: "Your resting heart rate is the number of times your heart beats per minute when you're sitting still. For most kids, it's between 70 and this number.",
            question: "What is 100 beats per minute?",
            hint: "During exercise it can go much higher — up to 200!",
          },
          {
            answer: "This fitness quality, tested by exercises like running a mile or biking a long distance, measures how long your body can keep going.",
            question: "What is endurance (or stamina)?",
            hint: "It's not about being fast — it's about lasting a long time",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The 'talk test' is a simple way to know if you're exercising at a moderate intensity — if you can talk but not do this, you're in the right zone.",
            question: "What is sing?",
            hint: "If you can chat but can't belt out a tune, your effort level is just right",
          },
          {
            answer: "Bone-strengthening activities, like jumping rope and running, cause this beneficial effect where your bones become denser and stronger.",
            question: "What is increased bone density (or bone remodeling)?",
            hint: "Impact and weight-bearing forces signal your bones to build themselves up",
          },
          {
            answer: "This chemical released by your brain during and after exercise is sometimes called the 'feel-good' hormone because it improves your mood and reduces pain.",
            question: "What are endorphins?",
            hint: "It's why people talk about a 'runner's high' — your brain rewards you for exercising",
          },
        ],
      },
    ],
  },

  {
    name: "REST & RECOVERY",
    emoji: "😴",
    color: "#0f0f1a",
    accent: "#8b5cf6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Kids ages 6-12 need this many hours of sleep per night for healthy growth and development.",
            question: "What is 9 to 12 hours?",
            hint: "More than adults need — your growing body does a lot of work while you sleep",
          },
          {
            answer: "The Stronger, Faster, Higher adventure requires Scouts to do a relaxing activity for this many minutes.",
            question: "What is 10 minutes?",
            hint: "Just 10 minutes of calm can make a big difference",
          },
          {
            answer: "Getting enough sleep helps your brain do this important process — organizing what you learned during the day.",
            question: "What is forming memories (or consolidating memory / learning)?",
            hint: "Your brain replays and files away information while you snooze",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Taking a rest day between intense workouts gives your muscles time to do this essential repair process.",
            question: "What is recover (repair / rebuild)?",
            hint: "Muscles actually get stronger during rest, not during the workout itself",
          },
          {
            answer: "Deep breathing, reading, gentle stretching, and meditation are all examples of these activities that help reduce stress.",
            question: "What are relaxation activities (or mindfulness / calming activities)?",
            hint: "They slow your heart rate and help you feel calm",
          },
          {
            answer: "Looking at screens (phone, tablet, TV) before bed can hurt your sleep because the blue light suppresses this sleep hormone.",
            question: "What is melatonin?",
            hint: "Your brain releases it when it gets dark to make you sleepy — blue light tricks your brain into thinking it's daytime",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A consistent bedtime routine helps signal to your brain that it's time to sleep. This might include brushing teeth, reading, and turning off these devices.",
            question: "What are screens (phones, tablets, TVs)?",
            hint: "Power them down at least 30 minutes before bed",
          },
          {
            answer: "This relaxation technique involves tightening and then releasing each muscle group in your body, from toes to head.",
            question: "What is progressive muscle relaxation?",
            hint: "Squeeze tight, then let go — your muscles relax more deeply after being tensed",
          },
          {
            answer: "Regular physical activity actually improves sleep quality by helping you fall asleep faster and sleep more this way.",
            question: "What is deeply (or soundly)?",
            hint: "Active kids sleep better — but don't exercise right before bed!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Overtraining — exercising too hard without enough rest — can lead to this negative outcome where performance actually gets worse instead of better.",
            question: "What is burnout (or overtraining syndrome / decreased performance)?",
            hint: "More isn't always better — your body needs time to recover",
          },
          {
            answer: "The BSA Annual Health and Medical Record, which the Stronger, Faster, Higher adventure asks Scouts to review with a parent, documents this important information about a Scout's well-being.",
            question: "What is their health history (medical conditions, allergies, medications, fitness level)?",
            hint: "It tells leaders what they need to know to keep you safe during activities",
          },
          {
            answer: "Drinking water throughout the day is important for recovery because water helps transport nutrients to muscles and flush out this type of waste.",
            question: "What are metabolic waste products (or toxins / lactic acid)?",
            hint: "Your body produces waste during exercise — water helps carry it away",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "During deep sleep, your pituitary gland releases this hormone that is essential for children's growth and muscle repair.",
            question: "What is growth hormone (or human growth hormone / HGH)?",
            hint: "You literally grow taller while you sleep — this hormone makes it happen",
          },
          {
            answer: "Chronic sleep deprivation in children has been linked to difficulty concentrating in school, mood problems, and an increased risk of this health condition related to weight.",
            question: "What is obesity?",
            hint: "Not getting enough sleep disrupts hormones that control hunger",
          },
          {
            answer: "This mindfulness practice, often done sitting quietly and focusing on your breathing, has been shown to reduce stress, improve focus, and lower blood pressure.",
            question: "What is meditation?",
            hint: "Just sitting still, breathing, and clearing your mind — it works!",
          },
        ],
      },
    ],
  },
];
