// Jeopardy question bank — My Community (Citizenship) Adventure
//
// Structure: each difficulty value has a `pool` array.
// The game picks one question per value at random when a new game starts.
// Add more objects to any pool array to increase variety.
//
// Sources:
//   BSA Webelos My Community Adventure – https://www.scouting.org/programs/cub-scouts/adventures/webelos/
//   USA.gov – https://www.usa.gov
//   Ben's Guide to the U.S. Government – https://bensguide.gpo.gov
//   Congress.gov – https://www.congress.gov
//
// Pool object shape: { answer, question, hint }
//   answer   – the Jeopardy-style clue read aloud
//   question – the correct response ("What is ...?")
//   hint     – optional nudge shown on request

var JEOPARDY_CIVICS = [
  {
    name: "HOW WE VOTE",
    emoji: "🗳️",
    color: "#0f1a28",
    accent: "#3b82f6",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "In this type of voting, a candidate needs more than half of all votes cast to win.",
            question: "What is majority voting?",
            hint: "More than 50% — a clear 'most'",
          },
          {
            answer: "This is the process where citizens choose their leaders by casting a ballot.",
            question: "What is voting (or an election)?",
            hint: "It's the most important right in a democracy",
          },
          {
            answer: "The minimum age to vote in a United States presidential election.",
            question: "What is 18 years old?",
            hint: "You can drive at 16, but you have to wait two more years for this",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "In this type of voting, the candidate with the most votes wins — even if they don't get more than half.",
            question: "What is plurality voting?",
            hint: "If three candidates get 40%, 35%, and 25%, the 40% winner takes it",
          },
          {
            answer: "The difference between majority and plurality is that majority requires more than this percentage of votes.",
            question: "What is 50% (more than half)?",
            hint: "Plurality just needs the most votes; majority needs more than half",
          },
          {
            answer: "In the United States, citizens vote for the President on the first Tuesday after the first Monday in this month.",
            question: "What is November?",
            hint: "It's in the fall, right before Thanksgiving",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The place where people go to cast their votes on Election Day is called this.",
            question: "What is a polling place (or polling station)?",
            hint: "It's usually in a school, church, or community center near your home",
          },
          {
            answer: "This secret method of voting ensures that no one else can see who you voted for.",
            question: "What is a secret ballot?",
            hint: "You vote in a private booth — your choice is yours alone",
          },
          {
            answer: "When a community votes on a specific question or issue rather than choosing a candidate, this is called this.",
            question: "What is a referendum (or ballot measure/proposition)?",
            hint: "It's a yes-or-no question put directly to the voters",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "In the Electoral College system, the President is chosen not directly by popular vote but by these special voters from each state.",
            question: "What are electors?",
            hint: "Each state gets a number of them based on its population",
          },
          {
            answer: "Before the general election, political parties hold these events where party members vote to choose their candidate.",
            question: "What are primaries (or caucuses)?",
            hint: "Democrats and Republicans each pick their favorite before the big election",
          },
          {
            answer: "The 19th Amendment to the Constitution, ratified in 1920, guaranteed this group the right to vote.",
            question: "What are women (or women's suffrage)?",
            hint: "For the first 130+ years of the country, only men could vote",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The total number of electoral votes in the U.S. Electoral College, based on 435 House members, 100 Senators, and 3 for D.C.",
            question: "What is 538?",
            hint: "A candidate needs at least 270 of these to win the presidency",
          },
          {
            answer: "This amendment to the Constitution, ratified in 1971, lowered the voting age from 21 to 18.",
            question: "What is the 26th Amendment?",
            hint: "If you were old enough to fight in Vietnam, you should be old enough to vote",
          },
          {
            answer: "When no candidate wins a majority in a plurality election with many candidates, this potential problem means a leader is chosen by a minority of voters.",
            question: "What is the spoiler effect (or vote splitting)?",
            hint: "With 5 candidates, someone could win with only 21% of the vote",
          },
        ],
      },
    ],
  },

  {
    name: "THREE BRANCHES",
    emoji: "🏛️",
    color: "#1a1510",
    accent: "#f59e0b",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "The U.S. government is divided into this many branches to prevent any one person from having too much power.",
            question: "What is three?",
            hint: "Executive, Legislative, and one more",
          },
          {
            answer: "This branch of government includes the President and is responsible for carrying out and enforcing the laws.",
            question: "What is the Executive Branch?",
            hint: "The President 'executes' (carries out) the laws",
          },
          {
            answer: "This branch of government includes Congress and is responsible for making the laws.",
            question: "What is the Legislative Branch?",
            hint: "'Legislate' means to make laws — that's Congress's job",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This branch of government includes the Supreme Court and is responsible for interpreting the laws and deciding if they are constitutional.",
            question: "What is the Judicial Branch?",
            hint: "Judges and courts — they decide what the law means",
          },
          {
            answer: "Congress is made up of two parts: the Senate and this body, where the number of members from each state is based on population.",
            question: "What is the House of Representatives?",
            hint: "States with more people get more members in this chamber",
          },
          {
            answer: "Each state gets exactly this many U.S. Senators, regardless of the state's size or population.",
            question: "What is two?",
            hint: "Wyoming and California each get the same number",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The system where each branch of government can limit the power of the other two branches is called this.",
            question: "What is checks and balances?",
            hint: "No branch gets too powerful because the others can 'check' it",
          },
          {
            answer: "The President can reject a bill passed by Congress by using this power.",
            question: "What is a veto?",
            hint: "It means 'I forbid' in Latin — the President says 'no'",
          },
          {
            answer: "The number of justices who serve on the United States Supreme Court.",
            question: "What is nine?",
            hint: "One Chief Justice and eight Associate Justices",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Congress can override a presidential veto if this fraction of both the House and Senate vote to pass the bill anyway.",
            question: "What is two-thirds?",
            hint: "It takes a supermajority — way more than just half",
          },
          {
            answer: "Supreme Court justices are appointed by the President but must be confirmed by this body of Congress.",
            question: "What is the Senate?",
            hint: "The Senate votes yes or no on the President's choice — that's a 'check'",
          },
          {
            answer: "The total number of members in the U.S. House of Representatives.",
            question: "What is 435?",
            hint: "That's a lot of Representatives — the number has been fixed since 1913",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "The power of the Supreme Court to declare a law unconstitutional — essentially striking it down — is called this.",
            question: "What is judicial review?",
            hint: "The court 'reviews' whether laws follow the Constitution",
          },
          {
            answer: "The Constitution can be changed through this process, which requires approval by two-thirds of Congress and three-fourths of the states.",
            question: "What is an amendment?",
            hint: "There are 27 of these — the first 10 are called the Bill of Rights",
          },
          {
            answer: "The first three words of the U.S. Constitution, which establish that the government's power comes from the citizens.",
            question: 'What is "We the People"?',
            hint: "The very first words — they set the tone for the entire document",
          },
        ],
      },
    ],
  },

  {
    name: "LAWS & HISTORY",
    emoji: "📜",
    color: "#0a1510",
    accent: "#10b981",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "A proposed law that is being debated in Congress is called this before it is signed by the President.",
            question: "What is a bill?",
            hint: "It starts as a bill, and if it passes both chambers and gets signed, it becomes law",
          },
          {
            answer: "The supreme law of the United States, written in 1787, that sets up how our government works.",
            question: "What is the Constitution?",
            hint: "It's the oldest written national constitution still in use today",
          },
          {
            answer: "The first ten amendments to the Constitution, which protect basic rights like free speech and religion, are called this.",
            question: "What is the Bill of Rights?",
            hint: "Ratified in 1791 — they guarantee your freedoms",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "The First Amendment protects five freedoms: religion, speech, press, assembly, and this fifth freedom.",
            question: "What is the right to petition the government?",
            hint: "You can ask the government to change something — that's this right",
          },
          {
            answer: "Before a bill can reach the President's desk, it must pass both the House of Representatives and this other chamber of Congress.",
            question: "What is the Senate?",
            hint: "100 members, 2 per state — they're the 'upper chamber'",
          },
          {
            answer: "This document, signed on July 4, 1776, declared the American colonies free from British rule.",
            question: "What is the Declaration of Independence?",
            hint: "We celebrate this date every year as Independence Day",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "The Civil Rights Act of 1964 made it illegal to discriminate based on race, color, religion, sex, or this other characteristic.",
            question: "What is national origin?",
            hint: "Where you or your family originally came from",
          },
          {
            answer: "This President signed the Civil Rights Act of 1964 into law after it was championed by Dr. Martin Luther King Jr. and many others.",
            question: "Who is President Lyndon B. Johnson?",
            hint: "He took office after President Kennedy was assassinated",
          },
          {
            answer: "Laws that apply to the entire country and are passed by Congress are called this type of law.",
            question: "What are federal laws?",
            hint: "As opposed to state laws or local laws",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "The 13th Amendment, ratified in 1865, permanently abolished this practice in the United States.",
            question: "What is slavery?",
            hint: "It was passed right after the Civil War ended",
          },
          {
            answer: "For a bill to become a law, it follows this general path: introduced in Congress, debated in committee, voted on by both chambers, then sent here.",
            question: "What is the President's desk (for signature or veto)?",
            hint: "The final step — the President either signs it or rejects it",
          },
          {
            answer: "The Americans with Disabilities Act (ADA), signed in 1990, protects the rights of people with disabilities by requiring these kinds of accommodations in public places.",
            question: "What are reasonable accommodations (like wheelchair ramps, accessible bathrooms, sign language interpreters)?",
            hint: "Ramps, elevators, accessible parking — making public spaces usable for everyone",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "In 1803, the Supreme Court established the power of judicial review in this landmark case, the first time the Court struck down a law as unconstitutional.",
            question: "What is Marbury v. Madison?",
            hint: "Chief Justice John Marshall established this court power over 220 years ago",
          },
          {
            answer: "The 15th Amendment, ratified in 1870, guaranteed that the right to vote could not be denied based on this.",
            question: "What is race, color, or previous condition of servitude?",
            hint: "It was meant to ensure formerly enslaved men could vote",
          },
          {
            answer: "Congress has the 'power of the purse,' meaning only it can do this with taxpayer money.",
            question: "What is approve spending (or appropriate funds / control the budget)?",
            hint: "The President can propose a budget, but only Congress can open the wallet",
          },
        ],
      },
    ],
  },

  {
    name: "COMMUNITY SERVICE",
    emoji: "🤝",
    color: "#150f1a",
    accent: "#ec4899",
    questions: [
      {
        value: 100,
        pool: [
          {
            answer: "Work done by a person or group that benefits others in the community without being paid is called this.",
            question: "What is community service (or volunteering)?",
            hint: "You do it to help others, not for money",
          },
          {
            answer: "The Scout slogan that reminds Cub Scouts to help others every day.",
            question: 'What is "Do a Good Turn Daily"?',
            hint: "One good deed every single day",
          },
          {
            answer: "A person who is chosen by voters to represent them in government — like a mayor, governor, or senator — holds this type of position.",
            question: "What is an elected office (or elected position)?",
            hint: "They didn't just get the job — people voted for them",
          },
        ],
      },
      {
        value: 200,
        pool: [
          {
            answer: "This elected official is the leader of a city or town government.",
            question: "What is a mayor?",
            hint: "They run the city — from potholes to parks",
          },
          {
            answer: "This elected official is the leader of a state government.",
            question: "What is a governor?",
            hint: "Every state has one — they sign state laws and lead the state",
          },
          {
            answer: "Cleaning up a local park, collecting food for a food bank, or visiting a nursing home are all examples of this.",
            question: "What is community service (or service projects)?",
            hint: "Things Scouts do to make their community a better place",
          },
        ],
      },
      {
        value: 300,
        pool: [
          {
            answer: "Local government services like fire departments, police, libraries, and road maintenance are funded mainly by these payments from citizens.",
            question: "What are taxes?",
            hint: "Everyone pays a little so the community can provide services for all",
          },
          {
            answer: "This local government body, often made up of elected members, makes decisions and passes laws (ordinances) for a city or county.",
            question: "What is a city council (or county board / board of supervisors)?",
            hint: "They meet regularly to discuss and vote on local issues",
          },
          {
            answer: "The My Community adventure requires Webelos Scouts to participate in one of these to benefit their community.",
            question: "What is a service project?",
            hint: "It's hands-on helping — and it's a requirement for the badge",
          },
        ],
      },
      {
        value: 400,
        pool: [
          {
            answer: "Attending a city council meeting, writing a letter to your representative, or volunteering at a polling place are all examples of this type of civic participation.",
            question: "What is civic engagement (or active citizenship)?",
            hint: "Being an active, involved citizen — not just voting, but participating",
          },
          {
            answer: "The Scout Law says a Scout is helpful, and this point of the Scout Law specifically means a Scout follows the rules of their community.",
            question: "What is obedient?",
            hint: "One of the 12 points — a Scout follows the rules of family, school, and community",
          },
          {
            answer: "The Pledge of Allegiance ends with this six-word phrase about what our nation promises.",
            question: 'What is "with liberty and justice for all"?',
            hint: "Freedom and fairness for every single person",
          },
        ],
      },
      {
        value: 500,
        pool: [
          {
            answer: "When Scouts identify a need in their community, plan a project to address it, carry it out, and then reflect on the results, they are following this approach to service.",
            question: "What is service learning (or the project planning method)?",
            hint: "It's not just doing — it's planning, acting, and reflecting on what you learned",
          },
          {
            answer: "The Scout Oath includes the phrase 'to help other people at all times,' which ties directly to this Webelos adventure about giving back to where you live.",
            question: "What is the My Community adventure?",
            hint: "The citizenship adventure — learning about and serving your community",
          },
          {
            answer: "This concept means that all citizens have both rights (like voting and free speech) and these obligations (like jury duty, following laws, and paying taxes).",
            question: "What are civic responsibilities (or duties)?",
            hint: "Democracy is a two-way street — you get rights, but you also have to do your part",
          },
        ],
      },
    ],
  },
];
