// Jeopardy question bank — Standing Tall (Bear Required — Personal Safety)
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Written for Bear Cub Scouts (3rd grade reading level).
//
// Sources:
//   Scouting America Bear Adventures – https://www.scouting.org/programs/cub-scouts/adventures/bear/
//   Scouting America Youth Protection – https://www.scouting.org/training/youth-protection/
//   StopBullying.gov – https://www.stopbullying.gov/
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_BEAR_STANDING_TALL = [
  {
    name: "PERSONAL SPACE",
    emoji: "🫧",
    color: "#0a0f1a",
    accent: "#0ea5e9",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The invisible space around your body that's just for you.",
            question: "What is a personal space bubble?",
            hint: "Like a bubble around you",
          },
          {
            answer: "If someone is too close and you feel uncomfortable, you can say this word.",
            question: "What is \"no\" (or \"stop\")?",
            hint: "Short and strong",
          },
          {
            answer: "Before you hug someone, it's polite to do this.",
            question: "What is ask?",
            hint: "\"Can I give you a hug?\"",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A personal space bubble is about this big — an arm's length.",
            question: "What is an arm's length?",
            hint: "Stretch out your arm",
          },
          {
            answer: "Everyone's personal space bubble can be this — some people like more space.",
            question: "What is different?",
            hint: "Not all the same size",
          },
          {
            answer: "If a friend says \"please stop,\" you should do this.",
            question: "What is stop right away?",
            hint: "Respect their words",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Giving someone a high five instead of a hug is a way to show this.",
            question: "What is respect (for their space)?",
            hint: "Ask first!",
          },
          {
            answer: "Your body belongs to this person.",
            question: "What is you?",
            hint: "Look in a mirror",
          },
          {
            answer: "Standing too close when talking can make others feel this.",
            question: "What is uncomfortable?",
            hint: "Not comfy",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "If you feel weird or uneasy about something, that feeling is called your this.",
            question: "What is your gut feeling (instinct)?",
            hint: "Listen to your tummy!",
          },
          {
            answer: "Your personal space bubble might be smaller with family and bigger with these people.",
            question: "What are strangers (people you don't know)?",
            hint: "People you've never met",
          },
          {
            answer: "Wrestling should stop as soon as anyone says this.",
            question: "What is \"stop\"?",
            hint: "Game over",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "You can tell someone about your space nicely by saying \"I need a little this, please.\"",
            question: "What is space?",
            hint: "Personal ____",
          },
          {
            answer: "Respecting other people's bubbles is part of being this point of the Scout Law.",
            question: "What is courteous (or kind)?",
            hint: "Good manners",
          },
          {
            answer: "If someone keeps getting in your bubble after you said stop, you should do this.",
            question: "What is tell a trusted adult?",
            hint: "Get help",
          },
        ],
      },
    ],
  },
  {
    name: "SAY NO, GET AWAY, TELL",
    emoji: "🛑",
    color: "#1a0a0a",
    accent: "#ef4444",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A grown-up you know and can count on for help is called this.",
            question: "What is a trusted adult?",
            hint: "Trust + adult",
          },
          {
            answer: "If something feels unsafe, the first step is to say this.",
            question: "What is \"no\"?",
            hint: "Two letters",
          },
          {
            answer: "After you say no, the next step is to get this.",
            question: "What is away?",
            hint: "Go to a safe place",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "After you get away, the last step is to do this.",
            question: "What is tell a trusted adult?",
            hint: "Tell!",
          },
          {
            answer: "Parents, teachers, and den leaders are examples of these.",
            question: "What are trusted adults?",
            hint: "People who keep you safe",
          },
          {
            answer: "A secret that makes you feel bad or scared is one you should do this with.",
            question: "What is tell a trusted adult?",
            hint: "Not all secrets should be kept",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "A surprise, like a birthday present, is different from a secret because it's this.",
            question: "What is shared later (it's happy and fun)?",
            hint: "Everyone finds out soon",
          },
          {
            answer: "If the first adult you tell doesn't help, you should do this.",
            question: "What is tell another trusted adult?",
            hint: "Keep telling until someone helps",
          },
          {
            answer: "If something bad happens to you, it is never this.",
            question: "What is your fault?",
            hint: "You didn't cause it",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "You should have at least this many trusted adults you can talk to.",
            question: "What is more than one (several)?",
            hint: "More than 1",
          },
          {
            answer: "Before going anywhere with anyone, you should do this first.",
            question: "What is check with a parent or guardian?",
            hint: "Check first!",
          },
          {
            answer: "If you get separated from your group at a store, look for one of these.",
            question: "What is a worker (employee) or a mom with kids?",
            hint: "Someone with a name tag",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Knowing your full name, address, and this number helps keep you safe.",
            question: "What is a parent's phone number?",
            hint: "Digits to call home",
          },
          {
            answer: "A safe adult will never ask you to keep this kind of secret.",
            question: "What is an unsafe (scary or uncomfortable) secret?",
            hint: "The bad kind",
          },
          {
            answer: "Being brave enough to tell about something hard is a point of the Scout Law.",
            question: "What is brave?",
            hint: "Courage!",
          },
        ],
      },
    ],
  },
  {
    name: "BULLY BUSTERS",
    emoji: "🦸",
    color: "#1a0f00",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Being mean to someone again and again on purpose is called this.",
            question: "What is bullying?",
            hint: "Bully...",
          },
          {
            answer: "Someone who sees bullying happen is called this.",
            question: "What is a bystander?",
            hint: "They stand by",
          },
          {
            answer: "If you see bullying, you should tell this person.",
            question: "What is a trusted adult?",
            hint: "Get help!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "A bystander who helps stop bullying is called this.",
            question: "What is an upstander?",
            hint: "They stand UP",
          },
          {
            answer: "Calling names and teasing is this kind of bullying.",
            question: "What is verbal bullying?",
            hint: "Words",
          },
          {
            answer: "Leaving someone out on purpose is called this.",
            question: "What is excluding?",
            hint: "Not letting them join",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Being mean to someone online or by text is called this.",
            question: "What is cyberbullying?",
            hint: "Cyber = computer",
          },
          {
            answer: "One way to help a kid being bullied is to invite them to do this.",
            question: "What is sit with you (play with you)?",
            hint: "Be their friend",
          },
          {
            answer: "Telling an adult to help someone is not tattling — it's this.",
            question: "What is reporting (getting help)?",
            hint: "Keeping someone safe",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "If someone bullies you, a strong response is to say \"stop\" and then do this.",
            question: "What is walk away (and tell an adult)?",
            hint: "Don't fight back",
          },
          {
            answer: "Standing tall, looking someone in the eye, and using a strong voice shows this.",
            question: "What is confidence?",
            hint: "Brave body",
          },
          {
            answer: "Treating everyone with kindness, even kids who are different, shows this Scout Law point.",
            question: "What is kind (or friendly)?",
            hint: "Be a friend to all",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Thinking about how someone else feels is called this.",
            question: "What is empathy?",
            hint: "Walk in their shoes",
          },
          {
            answer: "If you said something mean, the right thing to do is this.",
            question: "What is say sorry (apologize)?",
            hint: "I'm sorry",
          },
          {
            answer: "A den Code of Conduct can help stop bullying by setting these.",
            question: "What are rules for how we treat each other?",
            hint: "Den promises",
          },
        ],
      },
    ],
  },
  {
    name: "FEELINGS",
    emoji: "💛",
    color: "#0a1a0f",
    accent: "#22c55e",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Happy, sad, mad, and scared are all these.",
            question: "What are feelings (emotions)?",
            hint: "We all have them",
          },
          {
            answer: "When you feel mad, taking deep these can help calm you down.",
            question: "What are breaths?",
            hint: "In and out",
          },
          {
            answer: "Talking about your feelings with someone you trust can make you feel this.",
            question: "What is better?",
            hint: "Lighter!",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "Counting to this number slowly can help you calm down when you're angry.",
            question: "What is 10?",
            hint: "Fingers on two hands",
          },
          {
            answer: "Your heart beating fast and sweaty hands can be signs of this feeling.",
            question: "What is fear (nervousness)?",
            hint: "Butterflies in your tummy",
          },
          {
            answer: "Crying when you are sad is this — everyone does it.",
            question: "What is normal (OK)?",
            hint: "It's alright!",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Saying \"I feel...\" instead of yelling is a good way to do this.",
            question: "What is share your feelings?",
            hint: "Use your words",
          },
          {
            answer: "When a friend looks sad, a kind thing to ask is this.",
            question: "What is \"Are you OK?\"",
            hint: "Check on them",
          },
          {
            answer: "Feeling proud after doing something hard is a sign you did this.",
            question: "What is your best?",
            hint: "Cub Scout motto!",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Drawing, writing, or playing music are ways to let out these.",
            question: "What are feelings?",
            hint: "Express yourself",
          },
          {
            answer: "Feeling nervous before trying something new is called this.",
            question: "What is being anxious (nervous)?",
            hint: "Jitters",
          },
          {
            answer: "Getting enough sleep makes it easier to handle these.",
            question: "What are big feelings (emotions)?",
            hint: "Tired = grumpy",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "Being able to calm yourself down is called self-____.",
            question: "What is self-control?",
            hint: "Control yourself",
          },
          {
            answer: "Feeling thankful for what you have is called this.",
            question: "What is gratitude?",
            hint: "Say thank you!",
          },
          {
            answer: "Knowing that feelings come and go, like weather, helps you stay this — a Scout Law point.",
            question: "What is cheerful?",
            hint: "Sunshine after rain",
          },
        ],
      },
    ],
  },
];
