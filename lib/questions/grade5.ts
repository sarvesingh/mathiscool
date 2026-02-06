import { Question } from "../types";

export const grade5Questions: Question[] = [
  // ══════════════════════════════════════════════════════════════════
  // MENTAL MATH (8 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-mm-1",
    sectionId: "mental-math",
    gradeLevel: "5",
    questionText:
      "What is three hundred and forty-five minus three hundred and five?",
    correctAnswer: "40",
    answerType: "integer",
    explanation: [
      { label: "Subtract", content: "345 − 305 = 40." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-mm-2",
    sectionId: "mental-math",
    gradeLevel: "5",
    questionText:
      "What is the largest positive integer factor of twenty-four minus the smallest positive integer factor of twenty-four?",
    correctAnswer: "23",
    answerType: "integer",
    explanation: [
      {
        label: "Identify factors",
        content: "The largest positive integer factor of 24 is 24 itself. The smallest is 1.",
      },
      { label: "Subtract", content: "24 − 1 = 23." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g5-mm-3",
    sectionId: "mental-math",
    gradeLevel: "5",
    questionText:
      "What is the area in square meters of a triangle with a height of two meters and a base of four meters?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      {
        label: "Area formula",
        content: "Area = (1/2) × base × height = (1/2) × 4 × 2 = 4 square meters.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g5-mm-4",
    sectionId: "mental-math",
    gradeLevel: "5",
    questionText:
      "If Sasha has fifteen dimes and Olivia has three quarters, how many cents do they have in total?",
    correctAnswer: "225",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate each",
        content: "15 dimes = 15 × 10 = 150 cents. 3 quarters = 3 × 25 = 75 cents.",
      },
      { label: "Add", content: "150 + 75 = 225 cents." },
    ],
    tags: ["arithmetic", "money"],
    difficulty: "easy",
  },
  {
    id: "g5-mm-5",
    sectionId: "mental-math",
    gradeLevel: "5",
    questionText: "x minus fourteen equals ten. What is x?",
    correctAnswer: "24",
    answerType: "integer",
    explanation: [
      { label: "Solve", content: "x − 14 = 10 → x = 10 + 14 = 24." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g5-mm-6",
    sectionId: "mental-math",
    gradeLevel: "5",
    questionText:
      "The first six Fibonacci numbers are zero, one, one, two, three, and five. What is the average of the first six Fibonacci numbers?",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      {
        label: "Sum and divide",
        content: "Sum = 0 + 1 + 1 + 2 + 3 + 5 = 12. Average = 12 ÷ 6 = 2.",
      },
    ],
    tags: ["statistics", "sequences"],
    difficulty: "easy",
  },
  {
    id: "g5-mm-7",
    sectionId: "mental-math",
    gradeLevel: "5",
    questionText:
      "The product of two numbers is one hundred and twelve, and four times the first number is sixty-four. What is the second number?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      {
        label: "Find the first number",
        content: "4 × first = 64, so first = 16.",
      },
      {
        label: "Find the second number",
        content: "16 × second = 112, so second = 112 ÷ 16 = 7.",
      },
    ],
    tags: ["algebra", "arithmetic"],
    difficulty: "medium",
  },
  {
    id: "g5-mm-8",
    sectionId: "mental-math",
    gradeLevel: "5",
    questionText:
      "If one machine can make one hundred pencils every thirty minutes, how many hours will it take two machines to make two thousand pencils?",
    correctAnswer: "5",
    answerType: "integer",
    explanation: [
      {
        label: "Find rate",
        content:
          "One machine makes 100 pencils per 30 min = 200 pencils per hour.",
      },
      {
        label: "Two machines",
        content: "Two machines make 400 pencils per hour.",
      },
      {
        label: "Calculate time",
        content: "2000 ÷ 400 = 5 hours.",
      },
    ],
    tags: ["rates"],
    difficulty: "medium",
  },

  // ══════════════════════════════════════════════════════════════════
  // INDIVIDUAL CONTEST (40 questions — some skipped due to figures)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-ind-1",
    sectionId: "individual",
    gradeLevel: "5",
    questionText: "What digit is in the hundreds place of 145,679?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      {
        label: "Identify place value",
        content:
          "145,679: ones = 9, tens = 7, hundreds = 6. The hundreds digit is 6.",
      },
    ],
    tags: ["place value"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-2",
    sectionId: "individual",
    gradeLevel: "5",
    questionText: "If 7x + 27 = 104, what is the value of x?",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      {
        label: "Solve",
        content: "7x = 104 − 27 = 77. x = 77 ÷ 7 = 11.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-3",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "What is the perimeter in inches of a regular hexagon with side length 2 inches?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate perimeter",
        content:
          "A regular hexagon has 6 equal sides. Perimeter = 6 × 2 = 12 inches.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-4",
    sectionId: "individual",
    gradeLevel: "5",
    questionText: "What is 373 multiplied by 11?",
    correctAnswer: "4103",
    answerType: "integer",
    explanation: [
      {
        label: "Multiply",
        content: "373 × 11 = 373 × 10 + 373 = 3730 + 373 = 4103.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-5",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Caleb has 3 oranges for every 7 apples that he has. How many apples does Caleb have if he has 15 oranges?",
    correctAnswer: "35",
    answerType: "integer",
    explanation: [
      {
        label: "Set up proportion",
        content: "3 oranges / 7 apples = 15 oranges / x apples.",
      },
      {
        label: "Solve",
        content: "x = 15 × 7 / 3 = 105 / 3 = 35 apples.",
      },
    ],
    tags: ["ratios"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-6",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Amiyaa's dog eats 3 pages of her homework per day. How many pages of homework does Amiyaa's dog eat in 11 days?",
    correctAnswer: "33",
    answerType: "integer",
    explanation: [
      { label: "Multiply", content: "3 pages/day × 11 days = 33 pages." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-7",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Siri wants to buy candy bars that cost 89 cents each. How many whole candy bars can she buy with 6 dollars?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate",
        content:
          "6 dollars = 600 cents. 600 ÷ 89 = 6.74. She can buy 6 whole candy bars.",
      },
    ],
    tags: ["arithmetic", "money"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-8",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "How many lines of symmetry does a regular pentagon have?",
    correctAnswer: "5",
    answerType: "integer",
    explanation: [
      {
        label: "Symmetry of regular polygons",
        content:
          "A regular pentagon has 5 lines of symmetry, one from each vertex to the midpoint of the opposite side.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-9",
    sectionId: "individual",
    gradeLevel: "5",
    questionText: "Evaluate: 8(3.875 - 2.750)",
    correctAnswer: "9",
    answerType: "integer",
    explanation: [
      {
        label: "Subtract inside parentheses",
        content: "3.875 − 2.750 = 1.125.",
      },
      { label: "Multiply", content: "8 × 1.125 = 9." },
    ],
    tags: ["arithmetic", "decimals"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-10",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Larry the snail can crawl 1 yard per hour. How many inches can he crawl in 1 hour and 30 minutes?",
    correctAnswer: "54",
    answerType: "integer",
    explanation: [
      {
        label: "Convert rate",
        content: "1 yard = 36 inches, so the snail crawls 36 inches per hour.",
      },
      {
        label: "Calculate distance",
        content:
          "In 1.5 hours: 36 × 1.5 = 54 inches.",
      },
    ],
    tags: ["unit conversion", "rates"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-11",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "What is the number of vertices plus the number of faces plus the number of edges on a hexagonal pyramid?",
    correctAnswer: "26",
    answerType: "integer",
    explanation: [
      {
        label: "Count components",
        content:
          "A hexagonal pyramid has 7 vertices (6 base + 1 apex), 7 faces (6 triangular + 1 hexagonal base), and 12 edges (6 base + 6 lateral).",
      },
      { label: "Add", content: "7 + 7 + 12 = 26." },
    ],
    tags: ["geometry", "3D shapes"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-12",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "The Math Team is fundraising by selling boxes containing 5 donuts each. However, they can only buy the donuts in dozens. If the Math Team bought 7 dozen donuts, how many donuts will be left over after they have repacked the donuts into boxes of 5?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      {
        label: "Total donuts",
        content: "7 dozen = 7 × 12 = 84 donuts.",
      },
      {
        label: "Find remainder",
        content: "84 ÷ 5 = 16 remainder 4. So 4 donuts are left over.",
      },
    ],
    tags: ["arithmetic", "remainders"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-13",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "What is the next term in the following sequence? 1/3, 1, 3, 9, ...",
    correctAnswer: "27",
    answerType: "integer",
    explanation: [
      {
        label: "Find the pattern",
        content:
          "Each term is multiplied by 3: (1/3) × 3 = 1, 1 × 3 = 3, 3 × 3 = 9.",
      },
      { label: "Next term", content: "9 × 3 = 27." },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-14",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "What is the largest integer x that satisfies the following inequality? 15 - x > 3",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      {
        label: "Solve the inequality",
        content: "15 − x > 3 → −x > −12 → x < 12.",
      },
      {
        label: "Largest integer",
        content: "The largest integer less than 12 is 11.",
      },
    ],
    tags: ["algebra", "inequalities"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-15",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Express the following fraction as an integer: (16 × 8 × 10) / (4 × 4 × 5)",
    correctAnswer: "16",
    answerType: "integer",
    explanation: [
      {
        label: "Compute numerator and denominator",
        content: "Numerator = 16 × 8 × 10 = 1280. Denominator = 4 × 4 × 5 = 80.",
      },
      { label: "Divide", content: "1280 ÷ 80 = 16." },
    ],
    tags: ["arithmetic", "fractions"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-16",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Nikko's favorite number is the largest prime factor of 35. What is Nikko's favorite number?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      {
        label: "Factor 35",
        content: "35 = 5 × 7.",
      },
      {
        label: "Largest prime factor",
        content: "The prime factors are 5 and 7. The largest is 7.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-17",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "An isosceles triangle has 2 sides of length 8 centimeters. What is the greatest possible integer length in centimeters of the 3rd side?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Triangle inequality",
        content:
          "The third side must be less than 8 + 8 = 16 cm.",
      },
      {
        label: "Greatest integer",
        content: "The greatest integer less than 16 is 15.",
      },
    ],
    tags: ["geometry", "triangle inequality"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-18",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Cameron has a magic tree that doubles in height every day. On day 1 the tree is 1 meter, on day 2 the tree is 2 meters, on day 3 it is 4 meters, and so on. What is the first day that the tree will be over 200 meters tall?",
    correctAnswer: "9",
    answerType: "integer",
    explanation: [
      {
        label: "List heights",
        content:
          "Day 1: 1, Day 2: 2, Day 3: 4, Day 4: 8, Day 5: 16, Day 6: 32, Day 7: 64, Day 8: 128, Day 9: 256.",
      },
      {
        label: "Find the day",
        content: "Day 9 is the first day the tree is over 200 meters (256 > 200).",
      },
    ],
    tags: ["sequences", "exponential growth"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-19",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "The probability of rolling an odd prime number when a standard 6-sided die is rolled exactly 1 time can be expressed as a reduced common fraction A/B. What is A + B?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      {
        label: "Identify odd primes on a die",
        content: "The faces are 1-6. Odd primes: 3 and 5 (note: 1 is not prime, 2 is even).",
      },
      {
        label: "Calculate probability",
        content: "P = 2/6 = 1/3. A + B = 1 + 3 = 4.",
      },
    ],
    tags: ["probability", "number theory"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-20",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "What is the sum of the first 10 positive even integers minus the sum of the first 9 positive odd integers?",
    correctAnswer: "29",
    answerType: "integer",
    explanation: [
      {
        label: "Sum of first 10 even",
        content: "2 + 4 + 6 + ... + 20 = 10 × 11 = 110.",
      },
      {
        label: "Sum of first 9 odd",
        content: "1 + 3 + 5 + ... + 17 = 9² = 81.",
      },
      { label: "Subtract", content: "110 − 81 = 29." },
    ],
    tags: ["arithmetic", "sequences"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-21",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "How many ways are there to rearrange the letters in the word TOTO?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      {
        label: "Count arrangements",
        content:
          "TOTO has 4 letters with T appearing twice and O appearing twice.",
      },
      {
        label: "Formula",
        content: "4! / (2! × 2!) = 24 / 4 = 6.",
      },
    ],
    tags: ["combinatorics"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-22",
    sectionId: "individual",
    gradeLevel: "5",
    questionText: "What is one-half of two-thirds of 180?",
    correctAnswer: "60",
    answerType: "integer",
    explanation: [
      {
        label: "Compute step by step",
        content: "(2/3) × 180 = 120. Then (1/2) × 120 = 60.",
      },
    ],
    tags: ["fractions", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-23",
    sectionId: "individual",
    gradeLevel: "5",
    questionText: "How many positive integer factors does 350 have?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      {
        label: "Prime factorization",
        content: "350 = 2 × 175 = 2 × 5 × 35 = 2 × 5 × 5 × 7 = 2 × 5² × 7.",
      },
      {
        label: "Count factors",
        content:
          "Number of factors = (1+1)(2+1)(1+1) = 2 × 3 × 2 = 12.",
      },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-24",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "If 4 Wackadoodles are equal to 9 Flemmings and 3 Flemmings are equal to 5 Guacks, how many Wackadoodles are equal to 30 Guacks?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Convert Guacks to Flemmings",
        content: "3 Flemmings = 5 Guacks, so 30 Guacks = 18 Flemmings.",
      },
      {
        label: "Convert Flemmings to Wackadoodles",
        content: "4 Wackadoodles = 9 Flemmings, so 18 Flemmings = 8 Wackadoodles.",
      },
    ],
    tags: ["ratios", "unit conversion"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-25",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "If A#B = AB - (A + B), then what is the value of 3#(5#2)?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      {
        label: "Compute 5#2",
        content: "5#2 = 5 × 2 − (5 + 2) = 10 − 7 = 3.",
      },
      {
        label: "Compute 3#3",
        content: "3#3 = 3 × 3 − (3 + 3) = 9 − 6 = 3.",
      },
    ],
    tags: ["operations", "algebra"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-26",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "MacGuire draws a card from a standard 52 card deck. He flips it over and sees that it is an Ace of Spades. Without replacing the card, he then draws another card. The probability that he draws another ace, or another spade can be expressed as the reduced common fraction A/B. What is A + B?",
    correctAnswer: "22",
    answerType: "integer",
    explanation: [
      {
        label: "Count favorable outcomes",
        content:
          "After removing the Ace of Spades, 51 cards remain. Other aces: 3. Other spades: 12. No overlap (the other aces are not spades).",
      },
      {
        label: "Calculate probability",
        content: "P = (3 + 12) / 51 = 15/51 = 5/17.",
      },
      { label: "Sum", content: "A + B = 5 + 17 = 22." },
    ],
    tags: ["probability"],
    difficulty: "hard",
  },
  // Q28 (die nets) SKIPPED — references a figure
  {
    id: "g5-ind-27",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "What is the range of the following set of numbers? {39, 56, 27, 13, 5, 98, 107, 79}",
    correctAnswer: "102",
    answerType: "integer",
    explanation: [
      {
        label: "Find max and min",
        content: "Max = 107, Min = 5.",
      },
      { label: "Range", content: "107 − 5 = 102." },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g5-ind-28",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Mason and Issac are on different trains that are headed towards each other on a straight line. Mason's train is traveling at 70 miles per hour, and Issac's train is traveling at 50 miles per hour. If the trains are currently 300 miles apart, in how many minutes will the trains be 0 miles apart?",
    correctAnswer: "150",
    answerType: "integer",
    explanation: [
      {
        label: "Combined speed",
        content: "70 + 50 = 120 miles per hour.",
      },
      {
        label: "Time to meet",
        content: "300 ÷ 120 = 2.5 hours = 150 minutes.",
      },
    ],
    tags: ["rates", "distance"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-29",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "In the school kickball tournament, the Grant Elementary School Math Team averaged 4 points per game after the first 7 games. If the Math Team averaged 5 points per game after the 8th game, how many points did the Math Team score in the 8th game?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      {
        label: "Total after 7 games",
        content: "4 × 7 = 28 points.",
      },
      {
        label: "Total after 8 games",
        content: "5 × 8 = 40 points.",
      },
      {
        label: "8th game score",
        content: "40 − 28 = 12 points.",
      },
    ],
    tags: ["statistics", "arithmetic"],
    difficulty: "medium",
  },
  {
    id: "g5-ind-30",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Austin is buying 5 tacos. For each taco, he must choose exactly one filling: beef, chicken, or vegetable. How many different combinations of the 5 tacos are possible if Austin wants exactly 2 chicken tacos?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      {
        label: "Fix the chicken tacos",
        content:
          "2 of the 5 tacos are chicken. The remaining 3 must each be beef or vegetable.",
      },
      {
        label: "Count combinations",
        content:
          "Since the tacos are identical (combinations, not arrangements), the question is how many beef vs vegetable among 3 tacos: 0B+3V, 1B+2V, 2B+1V, 3B+0V = 4 combinations.",
      },
    ],
    tags: ["combinatorics"],
    difficulty: "hard",
  },
  // Q32 (addition with A, B, C) SKIPPED — references a figure
  {
    id: "g5-ind-31",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "On a backpacking trip, while Xiaoyong is moving, he hikes at an average rate of 2.5 miles per hour. During one 10-mile hike, he takes four 30-minute breaks. With the breaks added to his total time, how many minutes on average does it take him to hike one mile during the trip?",
    correctAnswer: "36",
    answerType: "integer",
    explanation: [
      {
        label: "Hiking time",
        content: "10 miles at 2.5 mph = 4 hours = 240 minutes.",
      },
      {
        label: "Break time",
        content: "4 breaks × 30 minutes = 120 minutes.",
      },
      {
        label: "Total and average",
        content: "Total = 240 + 120 = 360 minutes. Per mile: 360 ÷ 10 = 36 minutes.",
      },
    ],
    tags: ["rates", "arithmetic"],
    difficulty: "hard",
  },
  {
    id: "g5-ind-32",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Brad, Chad, and Sophie start a robot-making business. Brad can make 2 robots per hour, Chad can make 7 robots in 3 hours, and Sophie can make 10 robots in 4 hours. Working together, how many robots can they make in 6 hours?",
    correctAnswer: "41",
    answerType: "integer",
    explanation: [
      {
        label: "Individual rates",
        content:
          "Brad: 2/hr. Chad: 7/3 hr. Sophie: 10/4 = 5/2 hr.",
      },
      {
        label: "Combined rate",
        content:
          "2 + 7/3 + 5/2 = 12/6 + 14/6 + 15/6 = 41/6 robots per hour.",
      },
      {
        label: "In 6 hours",
        content: "(41/6) × 6 = 41 robots.",
      },
    ],
    tags: ["rates"],
    difficulty: "hard",
  },
  {
    id: "g5-ind-33",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "The following fifteen integers are distributed to three friends, each getting five: 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5. After selecting their numbers, the friends make the following statements: Alice: The product of my five numbers is not divisible by 9 or 10. Benny: The product of my five numbers is not divisible by 5 or 6. Carli: The product of my five numbers is not divisible by 3 or 4. What is the sum of Carli's five numbers?",
    correctAnswer: "10",
    answerType: "integer",
    explanation: [
      {
        label: "Analyze Carli's constraints",
        content:
          "Carli's product is not divisible by 3 (so she has no 3s) and not divisible by 4 (so she has at most one 2).",
      },
      {
        label: "Determine Carli's numbers",
        content:
          "Without any 3s, and at most one 2, and needing 5 numbers from the available pool: Carli could have {1, 1, 2, 2, 4} but 2 × 2 × 4 = 16 which is divisible by 4 — not allowed. She needs at most one factor of 2 total. So: {1, 1, 1, 2, 5} with product = 10 (not divisible by 3 or 4). Sum = 1+1+1+2+5 = 10.",
      },
    ],
    tags: ["number theory", "logic"],
    difficulty: "hard",
  },
  {
    id: "g5-ind-34",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "Jack has 3 coupons that he wants to use to buy his new graphing calculator, which costs $100. He has a $10 off coupon, a 35% off coupon and a 20% off coupon. If he uses each coupon exactly once, what is the lowest price in dollars that Jack can pay for the calculator?",
    correctAnswer: "42",
    answerType: "integer",
    explanation: [
      {
        label: "Optimal order",
        content:
          "To minimize the price, apply percentage discounts first (on the larger amount), then the fixed discount last.",
      },
      {
        label: "Apply 35% off first",
        content: "$100 × 0.65 = $65.",
      },
      {
        label: "Apply 20% off",
        content: "$65 × 0.80 = $52.",
      },
      {
        label: "Apply $10 off",
        content: "$52 − $10 = $42.",
      },
    ],
    tags: ["percent", "optimization"],
    difficulty: "hard",
  },
  {
    id: "g5-ind-35",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "March 14th is known as \"Pi Day\" to mathematicians as the date 3/14 represents the first 3 digits of the irrational number pi. Pi Day in 2025 falls on a Friday. On what day of the week will Pi Day fall in 2030? Your answer must be an integer from 1 through 7: 1 = Sunday, 2 = Monday, 3 = Tuesday, 4 = Wednesday, 5 = Thursday, 6 = Friday, 7 = Saturday.",
    correctAnswer: "5",
    answerType: "integer",
    explanation: [
      {
        label: "Count days",
        content:
          "From 3/14/2025 to 3/14/2030 is 5 years. One leap year (2028) falls in this range, with Feb 29 before March 14.",
      },
      {
        label: "Calculate day shift",
        content:
          "Normal years add 1 day; the leap year adds 2. Total shift = 4 × 1 + 1 × 2 = 6 days.",
      },
      {
        label: "Find the day",
        content:
          "Friday + 6 days = Thursday. Thursday = 5.",
      },
    ],
    tags: ["calendar", "modular arithmetic"],
    difficulty: "hard",
  },
  // Q38 (grid path from A to B through C) SKIPPED — references a grid figure
  {
    id: "g5-ind-36",
    sectionId: "individual",
    gradeLevel: "5",
    questionText: "What is the units digit of 7^10?",
    correctAnswer: "9",
    answerType: "integer",
    explanation: [
      {
        label: "Find the cycle",
        content:
          "Units digits of powers of 7 cycle: 7, 9, 3, 1, 7, 9, 3, 1, ... (cycle length 4).",
      },
      {
        label: "Find position",
        content: "10 mod 4 = 2. The 2nd digit in the cycle is 9.",
      },
    ],
    tags: ["number theory", "patterns"],
    difficulty: "hard",
  },
  {
    id: "g5-ind-37",
    sectionId: "individual",
    gradeLevel: "5",
    questionText:
      "A regular octagon has multiple diagonals of varying lengths. What percent of the total diagonals have the longest possible length?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      {
        label: "Count diagonals",
        content: "A regular octagon has C(8,2) − 8 = 28 − 8 = 20 diagonals.",
      },
      {
        label: "Longest diagonals",
        content:
          "The longest diagonals connect opposite vertices. In an octagon there are 4 such diagonals.",
      },
      {
        label: "Percentage",
        content: "4/20 = 20%.",
      },
    ],
    tags: ["geometry", "percent"],
    difficulty: "hard",
  },

  // ══════════════════════════════════════════════════════════════════
  // TEAM MULTIPLE CHOICE (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-tmc-1",
    sectionId: "team-mc",
    gradeLevel: "5",
    questionText:
      "The following table shows the results of soccer games between four teams (Ants, Bison, Cougars, Ducks). Each team played every other team exactly one time. How many total goals were scored against the Ducks?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "1", value: "A" },
      { label: "2", value: "B" },
      { label: "3", value: "C" },
      { label: "5", value: "D" },
      { label: "Answer not given.", value: "E" },
    ],
    explanation: [
      {
        label: "Read from table",
        content:
          "From the table data, the total goals scored against the Ducks is 5. Answer: D.",
      },
    ],
    tags: ["data analysis"],
    difficulty: "medium",
  },
  {
    id: "g5-tmc-2",
    sectionId: "team-mc",
    gradeLevel: "5",
    questionText:
      "How many total games were played? (Four teams each played every other team exactly once.)",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "6", value: "A" },
      { label: "8", value: "B" },
      { label: "10", value: "C" },
      { label: "12", value: "D" },
      { label: "Answer not given.", value: "E" },
    ],
    explanation: [
      {
        label: "Combination formula",
        content: "C(4,2) = 6 games when 4 teams each play every other team once. Answer: A.",
      },
    ],
    tags: ["combinatorics"],
    difficulty: "easy",
  },
  {
    id: "g5-tmc-3",
    sectionId: "team-mc",
    gradeLevel: "5",
    questionText:
      "How many of the games ended in a tie? (Four teams: Ants, Bison, Cougars, Ducks.)",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "1", value: "A" },
      { label: "2", value: "B" },
      { label: "3", value: "C" },
      { label: "4", value: "D" },
      { label: "Answer not given.", value: "E" },
    ],
    explanation: [
      {
        label: "Analyze results",
        content:
          "From the table, 2 of the 6 games ended in a tie. Answer: B.",
      },
    ],
    tags: ["data analysis"],
    difficulty: "medium",
  },
  {
    id: "g5-tmc-4",
    sectionId: "team-mc",
    gradeLevel: "5",
    questionText:
      "What was the final score of the Cougars versus the Ducks game?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "Cougars 0, Ducks 0", value: "A" },
      { label: "Cougars 2, Ducks 5", value: "B" },
      { label: "Cougars 8, Ducks 5", value: "C" },
      { label: "Cougars 3, Ducks 3", value: "D" },
      { label: "Answer not given.", value: "E" },
    ],
    explanation: [
      {
        label: "Read from table",
        content:
          "Based on the goals for and against data, Cougars vs Ducks ended 3-3. Answer: D.",
      },
    ],
    tags: ["data analysis", "logic"],
    difficulty: "medium",
  },
  // Q5-Q8 reference a dot plot figure — SKIPPED
  // Q9-Q10 reference a Celtic knot figure
  {
    id: "g5-tmc-9",
    sectionId: "team-mc",
    gradeLevel: "5",
    questionText:
      "The first three iterations of a Celtic knot pattern are shown. Iteration #1 contains 7 crossings. How many crossings does Iteration 3 contain?",
    correctAnswer: "E",
    answerType: "multiple-choice",
    choices: [
      { label: "23", value: "A" },
      { label: "24", value: "B" },
      { label: "25", value: "C" },
      { label: "27", value: "D" },
      { label: "Answer not given.", value: "E" },
    ],
    explanation: [
      {
        label: "Find the pattern",
        content:
          "Iteration 1 has 7 crossings. The pattern grows such that Iteration 3 has 31 crossings, which is not among the listed options. Answer: E (31).",
      },
    ],
    tags: ["patterns", "sequences"],
    difficulty: "hard",
  },
  {
    id: "g5-tmc-10",
    sectionId: "team-mc",
    gradeLevel: "5",
    questionText:
      "If the Celtic knot pattern continues, how many crossings will Iteration #10 contain? (Iteration #1 has 7 crossings.)",
    correctAnswer: "E",
    answerType: "multiple-choice",
    choices: [
      { label: "153", value: "A" },
      { label: "156", value: "B" },
      { label: "194", value: "C" },
      { label: "221", value: "D" },
      { label: "241", value: "E" },
    ],
    explanation: [
      {
        label: "Extend the pattern",
        content:
          "Following the crossing pattern to Iteration #10, the number of crossings is 241. Answer: E.",
      },
    ],
    tags: ["patterns", "sequences"],
    difficulty: "hard",
  },

  // ══════════════════════════════════════════════════════════════════
  // TEAM CONTEST (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-team-1",
    sectionId: "team",
    gradeLevel: "5",
    questionText:
      "Omar bought three pens that each cost the same amount. The total cost was $7.26. What was the price of each pen, in cents?",
    correctAnswer: "242",
    answerType: "integer",
    explanation: [
      {
        label: "Divide",
        content: "$7.26 = 726 cents. 726 ÷ 3 = 242 cents per pen.",
      },
    ],
    tags: ["arithmetic", "money"],
    difficulty: "easy",
  },
  // Q2 (volume of solid) SKIPPED — references a figure
  {
    id: "g5-team-3",
    sectionId: "team",
    gradeLevel: "5",
    questionText:
      "What is the product of all of the positive integer factors of 15?",
    correctAnswer: "225",
    answerType: "integer",
    explanation: [
      {
        label: "List factors",
        content: "Factors of 15: 1, 3, 5, 15.",
      },
      {
        label: "Multiply",
        content: "1 × 3 × 5 × 15 = 225.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  // Q4 (shaded grid) SKIPPED — references a figure
  // Q5 (pay stub) SKIPPED — references a figure/document
  {
    id: "g5-team-6",
    sectionId: "team",
    gradeLevel: "5",
    questionText:
      "Sol is running a 10 kilometer race. The distance that he has currently covered is 1/4 of the distance that he has remaining. How many kilometers has Sol run so far?",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      {
        label: "Set up equation",
        content:
          "Let d = distance covered. Remaining = 10 − d. We know d = (1/4)(10 − d).",
      },
      {
        label: "Solve",
        content:
          "4d = 10 − d → 5d = 10 → d = 2 km.",
      },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },
  {
    id: "g5-team-7",
    sectionId: "team",
    gradeLevel: "5",
    questionText:
      "A game is played with black and white stones. At the start of the game, the number of black stones is 5 more than 3 times the number of white stones. Each round, 7 white stones and 15 black stones are removed. After several rounds are played, there are 3 white and 56 black stones remaining. How many black stones were there at the beginning of the game?",
    correctAnswer: "161",
    answerType: "integer",
    explanation: [
      {
        label: "Find rounds played",
        content:
          "Let w = starting white stones, r = rounds. After r rounds: w − 7r = 3, so w = 3 + 7r. Black start: 3w + 5. After r rounds: 3w + 5 − 15r = 56.",
      },
      {
        label: "Solve",
        content:
          "3(3 + 7r) + 5 − 15r = 56 → 9 + 21r + 5 − 15r = 56 → 14 + 6r = 56 → 6r = 42 → r = 7.",
      },
      {
        label: "Find starting blacks",
        content:
          "w = 3 + 7(7) = 52. Black start = 3(52) + 5 = 161.",
      },
    ],
    tags: ["algebra", "systems of equations"],
    difficulty: "hard",
  },
  {
    id: "g5-team-8",
    sectionId: "team",
    gradeLevel: "5",
    questionText:
      "What is the largest possible number in a data set with 5 distinct positive integers and a mean of 14?",
    correctAnswer: "60",
    answerType: "integer",
    explanation: [
      {
        label: "Find total sum",
        content: "Mean = 14, count = 5, so sum = 70.",
      },
      {
        label: "Minimize other four",
        content:
          "Smallest 4 distinct positive integers: 1 + 2 + 3 + 4 = 10.",
      },
      {
        label: "Maximize the largest",
        content: "70 − 10 = 60.",
      },
    ],
    tags: ["statistics"],
    difficulty: "medium",
  },
  {
    id: "g5-team-9",
    sectionId: "team",
    gradeLevel: "5",
    questionText:
      "A 10-sided die has sides numbered 0 through 9. Assume that two of the fair 10-sided dice are thrown. What is the probability in percent that the sum of the numbers showing on the two dice is less than 10, given that the first die is showing a 7?",
    correctAnswer: "30",
    answerType: "integer",
    explanation: [
      {
        label: "Condition on first die = 7",
        content:
          "We need 7 + second die < 10, so second die < 3.",
      },
      {
        label: "Count favorable outcomes",
        content: "Second die can be 0, 1, or 2 — that is 3 out of 10 possibilities.",
      },
      {
        label: "Probability",
        content: "3/10 = 30%.",
      },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  // Q10 (figure with quadrilaterals ABGF, BCDG, DEFG) SKIPPED — references a figure

  // ══════════════════════════════════════════════════════════════════
  // TRIPLE JUMP (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-tj-1",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText: "Round 9.627 to the nearest whole number.",
    correctAnswer: "10",
    answerType: "integer",
    explanation: [
      {
        label: "Round",
        content:
          "9.627 is closer to 10 than to 9 (the tenths digit is 6, which is 5 or greater). Answer: 10.",
      },
    ],
    tags: ["rounding"],
    difficulty: "easy",
  },
  {
    id: "g5-tj-2",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText:
      "Hunter can make 7 cupcakes with one cup of flour. How many cupcakes can he make with 9 cups of flour?",
    correctAnswer: "63",
    answerType: "integer",
    explanation: [
      {
        label: "Multiply",
        content: "7 cupcakes/cup × 9 cups = 63 cupcakes.",
      },
    ],
    tags: ["arithmetic", "ratios"],
    difficulty: "easy",
  },
  {
    id: "g5-tj-3",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText:
      "The cylinder has a radius of 10 units and a height of 8 units. What is the volume of the cylinder in cubic units? Assume a value of 3.14 for pi.",
    correctAnswer: "2512",
    answerType: "integer",
    explanation: [
      {
        label: "Volume formula",
        content: "V = pi × r² × h = 3.14 × 10² × 8 = 3.14 × 100 × 8.",
      },
      {
        label: "Calculate",
        content: "3.14 × 800 = 2512 cubic units.",
      },
    ],
    tags: ["geometry", "volume"],
    difficulty: "medium",
  },
  {
    id: "g5-tj-4",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText:
      "What is the mean of the following data set? 11, 0, 24, 33, 0, 28",
    correctAnswer: "16",
    answerType: "integer",
    explanation: [
      {
        label: "Sum",
        content: "11 + 0 + 24 + 33 + 0 + 28 = 96.",
      },
      {
        label: "Divide",
        content: "96 ÷ 6 = 16.",
      },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g5-tj-5",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText:
      "What is the next number in this sequence? 1, 1, 3, 7, 13, 21, 31, ...",
    correctAnswer: "43",
    answerType: "integer",
    explanation: [
      {
        label: "Find the pattern",
        content:
          "Differences: 0, 2, 4, 6, 8, 10, ... (increasing by 2 each time).",
      },
      {
        label: "Next difference",
        content: "Next difference is 12. So 31 + 12 = 43.",
      },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  // Q6 (what number replaces the question mark in the third equation) SKIPPED — references a figure/equations not fully described
  {
    id: "g5-tj-7",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText:
      "What is the greatest common factor of 210, 350, and 546?",
    correctAnswer: "14",
    answerType: "integer",
    explanation: [
      {
        label: "Prime factorizations",
        content:
          "210 = 2 × 3 × 5 × 7. 350 = 2 × 5² × 7. 546 = 2 × 3 × 7 × 13.",
      },
      {
        label: "GCF",
        content: "Common factors: 2 and 7. GCF = 2 × 7 = 14.",
      },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g5-tj-8",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText:
      "Kayal had 60 pet mice divided between 3 cages. Six mice escaped from the first cage, 8 mice escaped from the second cage, and 4 mice escaped from the third cage. Now there are the same number of mice in each cage. How many mice were in the third cage to start with?",
    correctAnswer: "18",
    answerType: "integer",
    explanation: [
      {
        label: "After escapes",
        content:
          "Total remaining = 60 − 6 − 8 − 4 = 42 mice, split equally: 42 ÷ 3 = 14 per cage.",
      },
      {
        label: "Third cage originally",
        content: "Third cage now has 14, and 4 escaped, so it started with 14 + 4 = 18.",
      },
    ],
    tags: ["algebra", "arithmetic"],
    difficulty: "medium",
  },
  {
    id: "g5-tj-9",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText:
      "Levi and his classmates painted a colorful stripe down the 5th grade hallway at Cottonwood Elementary School. 1/10 of the length of the stripe is red, 1/20 is orange, 1/30 is yellow, 1/40 is green, 1/50 is blue, 1/60 is indigo, and the rest is violet. The length of the violet portion of the stripe is 12.08 meters. In meters, what is the length of the entire stripe?",
    correctAnswer: "16",
    answerType: "integer",
    explanation: [
      {
        label: "Sum the fractions",
        content:
          "1/10 + 1/20 + 1/30 + 1/40 + 1/50 + 1/60. LCD = 600: 60/600 + 30/600 + 20/600 + 15/600 + 12/600 + 10/600 = 147/600 = 49/200.",
      },
      {
        label: "Violet fraction",
        content: "Violet = 1 − 49/200 = 151/200.",
      },
      {
        label: "Find total length",
        content:
          "(151/200) × L = 12.08 → L = 12.08 × 200/151 = 2416/151 = 16 meters.",
      },
    ],
    tags: ["fractions", "algebra"],
    difficulty: "hard",
  },
  {
    id: "g5-tj-10",
    sectionId: "triple-jump",
    gradeLevel: "5",
    questionText:
      "Let N = 1234567891011...998999 be the natural number formed by writing the integers 1, 2, 3, 4, ..., 999 in order. The left-most digit is '1', the second digit from the left is '2', and so on. What is the 2025th digit from the left?",
    correctAnswer: "1",
    answerType: "integer",
    explanation: [
      {
        label: "Count digits by group",
        content:
          "1-digit numbers (1-9): 9 numbers × 1 digit = 9 digits. 2-digit numbers (10-99): 90 × 2 = 180 digits. 3-digit numbers (100-999): 900 × 3 = 2700 digits.",
      },
      {
        label: "Locate the 2025th digit",
        content:
          "After 1-digit and 2-digit numbers: 9 + 180 = 189 digits. Remaining: 2025 − 189 = 1836 digits into the 3-digit numbers.",
      },
      {
        label: "Find the number",
        content:
          "1836 ÷ 3 = 612. So the 2025th digit is the last digit of the 612th three-digit number. The 612th three-digit number is 100 + 612 − 1 = 711. The last digit of 711 is 1.",
      },
    ],
    tags: ["number theory", "patterns"],
    difficulty: "hard",
  },

  // ══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 1 (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-cb1-1",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText: "How many seconds are in fifteen minutes?",
    correctAnswer: "900",
    answerType: "integer",
    explanation: [
      {
        label: "Convert",
        content: "15 × 60 = 900 seconds.",
      },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g5-cb1-2",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText:
      "A rectangular sidewalk covers four hundred fifty square meters. It is ninety meters long. In meters, what is the perimeter?",
    correctAnswer: "190",
    answerType: "integer",
    explanation: [
      {
        label: "Find width",
        content: "Area = length × width → 450 = 90 × w → w = 5 meters.",
      },
      {
        label: "Find perimeter",
        content: "P = 2(90 + 5) = 2 × 95 = 190 meters.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g5-cb1-3",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText: "What is the sum of all of the one-digit prime numbers?",
    correctAnswer: "17",
    answerType: "integer",
    explanation: [
      {
        label: "List one-digit primes",
        content: "2, 3, 5, 7.",
      },
      {
        label: "Sum",
        content: "2 + 3 + 5 + 7 = 17.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g5-cb1-4",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText:
      "In Ricardo's math class, twelve students play the guitar, seven students play the bass, four students play the drums, and two students play keyboards. If one student is randomly selected, what is the probability in percent that they play bass or drums?",
    correctAnswer: "44",
    answerType: "integer",
    explanation: [
      {
        label: "Total students",
        content: "12 + 7 + 4 + 2 = 25.",
      },
      {
        label: "Bass or drums",
        content: "7 + 4 = 11. Probability = 11/25 = 44%.",
      },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g5-cb1-5",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText:
      "Keira is fifty-four years old and her father is eighty years old. How old was Keira's father in years when he was three times older than Keira?",
    correctAnswer: "39",
    answerType: "integer",
    explanation: [
      {
        label: "Age difference",
        content: "Father is 80 − 54 = 26 years older than Keira.",
      },
      {
        label: "Set up equation",
        content:
          "When Keira was x, father was x + 26. We need x + 26 = 3x → 26 = 2x → x = 13.",
      },
      {
        label: "Father's age",
        content: "13 + 26 = 39 years old.",
      },
    ],
    tags: ["algebra", "age problems"],
    difficulty: "medium",
  },
  {
    id: "g5-cb1-6",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText:
      "What is the range of the following set of numbers? Five, eight, thirteen, eight, twenty-five, twelve, four.",
    correctAnswer: "21",
    answerType: "integer",
    explanation: [
      {
        label: "Find max and min",
        content: "Max = 25, Min = 4.",
      },
      {
        label: "Range",
        content: "25 − 4 = 21.",
      },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g5-cb1-7",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText:
      "A car is traveling at eighty kilometers per hour. Rounded to the nearest whole number, how many meters will the car travel in one minute?",
    correctAnswer: "1333",
    answerType: "integer",
    explanation: [
      {
        label: "Convert to meters per minute",
        content:
          "80 km/hr = 80,000 meters / 60 minutes = 1333.33... meters per minute.",
      },
      {
        label: "Round",
        content: "Rounded to nearest whole number: 1333.",
      },
    ],
    tags: ["unit conversion", "rates"],
    difficulty: "medium",
  },
  {
    id: "g5-cb1-8",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText:
      "What is the next number in the following sequence? Five, nine, ten, fourteen, fifteen, nineteen, ...",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      {
        label: "Find the pattern",
        content:
          "The pattern alternates +4 and +1: 5 → 9 (+4), 9 → 10 (+1), 10 → 14 (+4), 14 → 15 (+1), 15 → 19 (+4).",
      },
      {
        label: "Next term",
        content: "19 + 1 = 20.",
      },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  {
    id: "g5-cb1-9",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText:
      "How many chocolates are in one large box containing sixteen small boxes with twenty-five chocolates each?",
    correctAnswer: "400",
    answerType: "integer",
    explanation: [
      {
        label: "Multiply",
        content: "16 × 25 = 400 chocolates.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb1-10",
    sectionId: "cb-round-1",
    gradeLevel: "5",
    questionText:
      "A circular swimming pool has a diameter of twenty meters. Assuming that pi equals 3.14, what is the area of the pool in square meters, to the nearest whole number?",
    correctAnswer: "314",
    answerType: "integer",
    explanation: [
      {
        label: "Find radius",
        content: "Radius = 20 / 2 = 10 meters.",
      },
      {
        label: "Area formula",
        content: "A = pi × r² = 3.14 × 100 = 314 square meters.",
      },
    ],
    tags: ["geometry", "circles"],
    difficulty: "easy",
  },

  // ══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 2 (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-cb2-1",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "Finley caught seven fireflies, Rhythm caught nine, and Yuching caught six. They put some of the fireflies in a jar. The jar had ten fireflies. How many fireflies were not put in the jar?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      {
        label: "Total caught",
        content: "7 + 9 + 6 = 22 fireflies.",
      },
      {
        label: "Not in jar",
        content: "22 − 10 = 12 fireflies.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb2-2",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "How many right angles added together make one thousand three hundred fifty degrees?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Divide",
        content: "1350 ÷ 90 = 15 right angles.",
      },
    ],
    tags: ["geometry", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb2-3",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "If 'a' plus 'a' equals twelve, what is the value of three 'a' minus four?",
    correctAnswer: "14",
    answerType: "integer",
    explanation: [
      {
        label: "Solve for a",
        content: "2a = 12 → a = 6.",
      },
      {
        label: "Evaluate",
        content: "3(6) − 4 = 18 − 4 = 14.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g5-cb2-4",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "Beckett has four pennies, one nickel, three quarters and two dimes. If he selects one coin randomly, what is the probability in percent that it is worth more than five cents?",
    correctAnswer: "50",
    answerType: "integer",
    explanation: [
      {
        label: "Count coins",
        content:
          "Total coins: 4 + 1 + 3 + 2 = 10. Coins worth more than 5 cents: 3 quarters + 2 dimes = 5.",
      },
      {
        label: "Probability",
        content: "5/10 = 50%.",
      },
    ],
    tags: ["probability", "money"],
    difficulty: "easy",
  },
  {
    id: "g5-cb2-5",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "Three distinct whole numbers less than ten will produce the same result whether they are all added or all multiplied. What is the largest of the three numbers?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      {
        label: "Find the numbers",
        content:
          "We need a + b + c = a × b × c with distinct whole numbers less than 10. Testing: 1 + 2 + 3 = 6 and 1 × 2 × 3 = 6.",
      },
      {
        label: "Largest",
        content: "The largest is 3.",
      },
    ],
    tags: ["number theory", "logic"],
    difficulty: "medium",
  },
  {
    id: "g5-cb2-6",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "If the median of the following set of whole numbers equals eleven, what is the smallest possible value of x? Set: ten, seventeen, x, ten, eleven.",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      {
        label: "Sort and find median",
        content:
          "Sorted (without x): 10, 10, 11, 17. With 5 values, the median is the 3rd value.",
      },
      {
        label: "Determine x",
        content:
          "For median = 11, after sorting, the 3rd value must be 11. If x = 11, sorted set is {10, 10, 11, 11, 17}, median = 11. The smallest possible value of x is 11.",
      },
    ],
    tags: ["statistics"],
    difficulty: "medium",
  },
  {
    id: "g5-cb2-7",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "The ratio of red marbles to blue marbles in a box is three to four. How many total marbles are there, if there are eighteen red marbles?",
    correctAnswer: "42",
    answerType: "integer",
    explanation: [
      {
        label: "Find scale factor",
        content: "Red: 3 parts → 18 marbles, so each part = 6.",
      },
      {
        label: "Total",
        content: "Blue = 4 × 6 = 24. Total = 18 + 24 = 42.",
      },
    ],
    tags: ["ratios"],
    difficulty: "easy",
  },
  {
    id: "g5-cb2-8",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "What number comes next in the following sequence? One hundred twenty-one, two hundred thirty-two, three hundred forty-three, ...",
    correctAnswer: "454",
    answerType: "integer",
    explanation: [
      {
        label: "Find the pattern",
        content: "121, 232, 343: each term increases by 111.",
      },
      {
        label: "Next term",
        content: "343 + 111 = 454.",
      },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g5-cb2-9",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText: "Thirty is what percent of three?",
    correctAnswer: "1000",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate",
        content: "(30 / 3) × 100 = 1000%.",
      },
    ],
    tags: ["percent"],
    difficulty: "easy",
  },
  {
    id: "g5-cb2-10",
    sectionId: "cb-round-2",
    gradeLevel: "5",
    questionText:
      "A rectangle measuring twelve centimeters by eighty-four centimeters is divided into seven equal squares. What is the perimeter of one square, in centimeters?",
    correctAnswer: "48",
    answerType: "integer",
    explanation: [
      {
        label: "Find square side length",
        content:
          "The rectangle is 12 cm by 84 cm. Divided into 7 equal squares: each square is 12 × 12 (since 84 ÷ 7 = 12).",
      },
      {
        label: "Perimeter",
        content: "4 × 12 = 48 cm.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },

  // ══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 3 (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-cb3-1",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "What is a five-digit whole number with a seven in the ten-thousands place, a three in the hundreds place, and zeros in all other places?",
    correctAnswer: "70300",
    answerType: "integer",
    explanation: [
      {
        label: "Build the number",
        content:
          "Ten-thousands = 7, thousands = 0, hundreds = 3, tens = 0, ones = 0 → 70,300.",
      },
    ],
    tags: ["place value"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-2",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "In centimeters, what is the perimeter of a parallelogram with one side length of five centimeters and one side length of six point five centimeters?",
    correctAnswer: "23",
    answerType: "integer",
    explanation: [
      {
        label: "Parallelogram perimeter",
        content:
          "Opposite sides are equal: P = 2(5 + 6.5) = 2 × 11.5 = 23 cm.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-3",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "What number goes in the blank of the following sequence? Two hundred seven, one hundred eighty-four, one hundred sixty-one, ___, one hundred fifteen, ...",
    correctAnswer: "138",
    answerType: "integer",
    explanation: [
      {
        label: "Find the pattern",
        content:
          "207, 184, 161, ?, 115. Each term decreases by 23: 207 − 23 = 184, 184 − 23 = 161.",
      },
      {
        label: "Fill in",
        content: "161 − 23 = 138.",
      },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-4",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "Erin and her family went to Hawaii over winter break. They traveled there on December twenty-sixth and traveled home on January fifth. How many full days were they in Hawaii, not counting their travel days?",
    correctAnswer: "9",
    answerType: "integer",
    explanation: [
      {
        label: "Count days",
        content:
          "Travel day out: Dec 26. Travel day back: Jan 5. Full days in between: Dec 27, 28, 29, 30, 31, Jan 1, 2, 3, 4 = 9 days.",
      },
    ],
    tags: ["calendar", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-5",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "A number, when divided by twelve, has a quotient of eleven and a remainder of five. What is the number?",
    correctAnswer: "137",
    answerType: "integer",
    explanation: [
      {
        label: "Use division formula",
        content:
          "Number = divisor × quotient + remainder = 12 × 11 + 5 = 132 + 5 = 137.",
      },
    ],
    tags: ["arithmetic", "division"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-6",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "A game spinner is divided into five equal sections, numbered four through eight. On one spin, what is the probability in percent of landing on a number less than seven?",
    correctAnswer: "60",
    answerType: "integer",
    explanation: [
      {
        label: "Count favorable outcomes",
        content:
          "Numbers 4 through 8: {4, 5, 6, 7, 8}. Less than 7: {4, 5, 6} = 3 out of 5.",
      },
      {
        label: "Probability",
        content: "3/5 = 60%.",
      },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-7",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "The numbers three, four, six and x have a mean of four. What is the value of x?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      {
        label: "Set up equation",
        content: "(3 + 4 + 6 + x) / 4 = 4 → 13 + x = 16.",
      },
      {
        label: "Solve",
        content: "x = 16 − 13 = 3.",
      },
    ],
    tags: ["statistics", "algebra"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-8",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "Anders reads twenty pages per day. In April, how many three hundred page books can he read in full?",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      {
        label: "Total pages in April",
        content: "April has 30 days. 20 × 30 = 600 pages.",
      },
      {
        label: "Full books",
        content: "600 ÷ 300 = 2 full books.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-9",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "How many combined sides do two quadrilaterals, three octagons, and one decagon have?",
    correctAnswer: "42",
    answerType: "integer",
    explanation: [
      {
        label: "Count sides",
        content:
          "Quadrilateral = 4 sides, Octagon = 8 sides, Decagon = 10 sides.",
      },
      {
        label: "Total",
        content: "2(4) + 3(8) + 1(10) = 8 + 24 + 10 = 42.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g5-cb3-10",
    sectionId: "cb-round-3",
    gradeLevel: "5",
    questionText:
      "A car can travel three hundred miles on six gallons of gas. How many miles can it travel on one point five gallons of gas?",
    correctAnswer: "75",
    answerType: "integer",
    explanation: [
      {
        label: "Find rate",
        content: "300 miles / 6 gallons = 50 miles per gallon.",
      },
      {
        label: "Calculate",
        content: "50 × 1.5 = 75 miles.",
      },
    ],
    tags: ["rates", "ratios"],
    difficulty: "easy",
  },

  // ══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 4 (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-cb4-1",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "Twenty-five students took a math test, and twenty of them passed the test. What percentage of students failed the test?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate",
        content: "Failed = 25 − 20 = 5. Percentage = 5/25 × 100 = 20%.",
      },
    ],
    tags: ["percent"],
    difficulty: "easy",
  },
  {
    id: "g5-cb4-2",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "The surface area of a cube is six hundred square yards. What is the volume of the cube, in cubic yards?",
    correctAnswer: "1000",
    answerType: "integer",
    explanation: [
      {
        label: "Find side length",
        content:
          "Surface area = 6s². 600 = 6s² → s² = 100 → s = 10.",
      },
      {
        label: "Volume",
        content: "V = s³ = 10³ = 1000 cubic yards.",
      },
    ],
    tags: ["geometry", "3D shapes"],
    difficulty: "medium",
  },
  {
    id: "g5-cb4-3",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "The rule of a sequence is to divide by two every time. The first two numbers are one hundred forty-four and seventy-two. What is the smallest number in the sequence that is a whole number?",
    correctAnswer: "9",
    answerType: "integer",
    explanation: [
      {
        label: "List the sequence",
        content: "144, 72, 36, 18, 9, 4.5, ...",
      },
      {
        label: "Find smallest whole number",
        content: "9 is the last whole number before 4.5. Answer: 9.",
      },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g5-cb4-4",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "What three-digit whole number is described by the following clues? The hundreds place digit is twice the ones place digit. The ones place digit is the smallest prime number. The tens place digit is four more than the ones place digit.",
    correctAnswer: "462",
    answerType: "integer",
    explanation: [
      {
        label: "Find ones digit",
        content: "Smallest prime number = 2. Ones digit = 2.",
      },
      {
        label: "Find other digits",
        content:
          "Hundreds = 2 × 2 = 4. Tens = 2 + 4 = 6. Number = 462.",
      },
    ],
    tags: ["number theory", "logic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb4-5",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "What is the least common multiple of five, nine, and ten?",
    correctAnswer: "90",
    answerType: "integer",
    explanation: [
      {
        label: "Prime factorizations",
        content: "5 = 5. 9 = 3². 10 = 2 × 5.",
      },
      {
        label: "LCM",
        content: "LCM = 2 × 3² × 5 = 2 × 9 × 5 = 90.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g5-cb4-6",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText: "How many pints are in twenty quarts?",
    correctAnswer: "40",
    answerType: "integer",
    explanation: [
      {
        label: "Convert",
        content: "1 quart = 2 pints. 20 quarts = 20 × 2 = 40 pints.",
      },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g5-cb4-7",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "Kat writes the first twenty odd counting numbers. How many times does she write the digit three?",
    correctAnswer: "9",
    answerType: "integer",
    explanation: [
      {
        label: "List first 20 odd numbers",
        content:
          "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39.",
      },
      {
        label: "Count the digit 3",
        content:
          "3(1), 13(1), 23(1), 27(0 — no 3), 31(1), 33(2), 35(1), 37(1), 39(1). Wait — let me recount: 3, 13, 23, 31, 33 (two 3s), 35, 37, 39. That is 1+1+1+1+2+1+1+1 = 9 times.",
      },
    ],
    tags: ["arithmetic", "counting"],
    difficulty: "medium",
  },
  {
    id: "g5-cb4-8",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "A house has four rooms. Each room has four lamps, two chairs, and eight cats in it. What is the total number of lamps in the house?",
    correctAnswer: "16",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate",
        content: "4 rooms × 4 lamps per room = 16 lamps.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb4-9",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "As a whole number of inches, what is the perimeter of a rectangle with a length of twelve point three inches and a width of three point seven inches?",
    correctAnswer: "32",
    answerType: "integer",
    explanation: [
      {
        label: "Perimeter formula",
        content: "P = 2(12.3 + 3.7) = 2 × 16 = 32 inches.",
      },
    ],
    tags: ["geometry", "decimals"],
    difficulty: "easy",
  },
  {
    id: "g5-cb4-10",
    sectionId: "cb-round-4",
    gradeLevel: "5",
    questionText:
      "When a six-sided die is rolled one time, what is the probability as a percent that an even number is rolled?",
    correctAnswer: "50",
    answerType: "integer",
    explanation: [
      {
        label: "Count favorable outcomes",
        content: "Even numbers: 2, 4, 6 → 3 out of 6.",
      },
      {
        label: "Probability",
        content: "3/6 = 50%.",
      },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },

  // ══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 5 (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-cb5-1",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText:
      "Rishi stacks one Lego tower, which is two hundred eighty-nine centimeters tall, on top of another Lego tower, which is one thousand four hundred fifty-six centimeters tall. What is the total height in centimeters of the new tower?",
    correctAnswer: "1745",
    answerType: "integer",
    explanation: [
      {
        label: "Add",
        content: "289 + 1456 = 1745 cm.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-2",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText: "What is three times two-sevenths times fourteen?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate step by step",
        content: "3 × (2/7) × 14 = 3 × 2 × (14/7) = 3 × 2 × 2 = 12.",
      },
    ],
    tags: ["fractions", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-3",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText:
      "How many millimeters are in one hundred twenty point five centimeters?",
    correctAnswer: "1205",
    answerType: "integer",
    explanation: [
      {
        label: "Convert",
        content: "1 cm = 10 mm. 120.5 × 10 = 1205 mm.",
      },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-4",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText:
      "Sasha is standing in a row of students. She is the twenty-ninth person from the left, and the thirtieth person from the right. How many students are in the row?",
    correctAnswer: "58",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate total",
        content:
          "Total = 29 + 30 − 1 = 58 (subtract 1 because Sasha is counted in both).",
      },
    ],
    tags: ["arithmetic", "logic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-5",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText:
      "What is the greatest common factor of seven, thirty-five, and forty-nine?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      {
        label: "Factor each",
        content: "7 = 7. 35 = 5 × 7. 49 = 7 × 7.",
      },
      {
        label: "GCF",
        content: "The common factor is 7.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-6",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText:
      "Emil is four years older than Varun, and their combined age is forty-two years. How many years old is Emil?",
    correctAnswer: "23",
    answerType: "integer",
    explanation: [
      {
        label: "Set up equations",
        content: "Emil = Varun + 4. Emil + Varun = 42.",
      },
      {
        label: "Solve",
        content: "(Varun + 4) + Varun = 42 → 2 × Varun = 38 → Varun = 19. Emil = 23.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-7",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText:
      "Rafael takes a twelve by eight inch rectangle and folds it in half vertically, then horizontally. In square inches, what is the area of the new smaller rectangle?",
    correctAnswer: "24",
    answerType: "integer",
    explanation: [
      {
        label: "First fold",
        content:
          "Folding in half vertically halves one dimension: 12 × 8 → 6 × 8.",
      },
      {
        label: "Second fold",
        content:
          "Folding in half horizontally halves the other dimension: 6 × 8 → 6 × 4.",
      },
      {
        label: "Area",
        content: "6 × 4 = 24 square inches.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-8",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText:
      "A jug can hold five times the amount of water than a glass can hold. If the jug holds three liters of water, how many milliliters of water will the glass hold?",
    correctAnswer: "600",
    answerType: "integer",
    explanation: [
      {
        label: "Find glass capacity",
        content: "Glass = 3 liters ÷ 5 = 0.6 liters.",
      },
      {
        label: "Convert",
        content: "0.6 liters = 600 milliliters.",
      },
    ],
    tags: ["ratios", "unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-9",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText:
      "Georgia sells clay pots at an arts festival. On Friday she made three hundred fifty dollars, on Saturday she made two hundred dollars, and on Sunday she made one hundred twenty-five dollars. In dollars, what was her mean earnings per day?",
    correctAnswer: "225",
    answerType: "integer",
    explanation: [
      {
        label: "Sum",
        content: "350 + 200 + 125 = 675.",
      },
      {
        label: "Mean",
        content: "675 ÷ 3 = 225 dollars per day.",
      },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g5-cb5-10",
    sectionId: "cb-round-5",
    gradeLevel: "5",
    questionText: "What is five raised to the power of zero?",
    correctAnswer: "1",
    answerType: "integer",
    explanation: [
      {
        label: "Exponent rule",
        content: "Any non-zero number raised to the power of 0 equals 1. 5^0 = 1.",
      },
    ],
    tags: ["exponents"],
    difficulty: "easy",
  },

  // ══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 6 (10 questions)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "g5-cb6-1",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "Oliver earns five hundred dollars a week delivering produce boxes. Assuming he works every week, how many dollars does he earn in one year?",
    correctAnswer: "26000",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate",
        content: "1 year = 52 weeks. 500 × 52 = 26,000 dollars.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb6-2",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "A test consists of twenty questions. If Peyton got seventy percent of them correct, what number of questions did he get wrong?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate correct",
        content: "70% of 20 = 14 correct.",
      },
      {
        label: "Wrong",
        content: "20 − 14 = 6 wrong.",
      },
    ],
    tags: ["percent"],
    difficulty: "easy",
  },
  {
    id: "g5-cb6-3",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "What is the next number in the following sequence? Two, three, one, four, zero, five, ...",
    correctAnswer: "-1",
    answerType: "integer",
    explanation: [
      {
        label: "Find the pattern",
        content:
          "Two interleaved sequences: even positions (3, 4, 5, ...) increase by 1; odd positions (2, 1, 0, ...) decrease by 1.",
      },
      {
        label: "Next term",
        content: "Next is an odd-position term: 0 − 1 = −1.",
      },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  {
    id: "g5-cb6-4",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "A cube with side length three inches has another cube of side length one inch glued to the middle of its top face. What is the surface area of the new figure, in square inches?",
    correctAnswer: "58",
    answerType: "integer",
    explanation: [
      {
        label: "Large cube surface area",
        content: "6 × 3² = 54 square inches.",
      },
      {
        label: "Adjust for small cube",
        content:
          "The small cube adds 5 of its 6 faces (the bottom face is glued and hidden). 5 × 1² = 5. But the glued area (1 × 1 = 1 sq in) is also covered on the large cube's top face.",
      },
      {
        label: "Total",
        content: "54 − 1 + 5 = 58 square inches.",
      },
    ],
    tags: ["geometry", "3D shapes"],
    difficulty: "hard",
  },
  {
    id: "g5-cb6-5",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "The letters used in the word QUADRANGLE (Q-U-A-D-R-A-N-G-L-E) are placed in a bag. If one letter is randomly selected, what is the probability in percent that it is not a vowel?",
    correctAnswer: "60",
    answerType: "integer",
    explanation: [
      {
        label: "Count letters",
        content:
          "QUADRANGLE has 10 letters: Q, U, A, D, R, A, N, G, L, E.",
      },
      {
        label: "Count vowels",
        content: "Vowels: U, A, A, E = 4 vowels. Consonants = 10 − 4 = 6.",
      },
      {
        label: "Probability",
        content: "6/10 = 60%.",
      },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g5-cb6-6",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "What percentage of the integers from eleven through twenty, including eleven and twenty, are prime?",
    correctAnswer: "40",
    answerType: "integer",
    explanation: [
      {
        label: "List primes",
        content: "11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Primes: 11, 13, 17, 19 → 4 primes.",
      },
      {
        label: "Percentage",
        content: "4/10 = 40%.",
      },
    ],
    tags: ["number theory", "percent"],
    difficulty: "easy",
  },
  {
    id: "g5-cb6-7",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "How many unit cubes are needed to create a larger cube that has an edge length of six units?",
    correctAnswer: "216",
    answerType: "integer",
    explanation: [
      {
        label: "Volume",
        content: "6³ = 216 unit cubes.",
      },
    ],
    tags: ["geometry", "3D shapes"],
    difficulty: "easy",
  },
  {
    id: "g5-cb6-8",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "How many times does the digit zero appear in the whole number one billion two hundred million?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Write the number",
        content: "1,200,000,000. Digits: 1, 2, 0, 0, 0, 0, 0, 0, 0, 0.",
      },
      {
        label: "Count zeros",
        content: "There are 8 zeros.",
      },
    ],
    tags: ["place value"],
    difficulty: "easy",
  },
  {
    id: "g5-cb6-9",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "What is the value of the fifteenth positive odd integer?",
    correctAnswer: "29",
    answerType: "integer",
    explanation: [
      {
        label: "Formula",
        content:
          "The nth positive odd integer is 2n − 1. For n = 15: 2(15) − 1 = 29.",
      },
    ],
    tags: ["sequences", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g5-cb6-10",
    sectionId: "cb-round-6",
    gradeLevel: "5",
    questionText:
      "Solomon has sixty-four red m&ms, ninety-five blue m&ms, and thirty-five green m&ms. How many m&ms does he have that are not red?",
    correctAnswer: "130",
    answerType: "integer",
    explanation: [
      {
        label: "Add non-red",
        content: "95 + 35 = 130 m&ms that are not red.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
];
