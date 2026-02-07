import { Question } from "../types";

export const grade910Questions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // MENTAL MATH (8 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-mm-1",
    sectionId: "mental-math",
    gradeLevel: "9-10",
    questionText:
      "What is forty-one thousand seven hundred twenty minus eighteen thousand four hundred twenty?",
    correctAnswer: "23300",
    answerType: "integer",
    explanation: [
      { label: "Subtract", content: "41720 \u2212 18420 = 23300." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g910-mm-2",
    sectionId: "mental-math",
    gradeLevel: "9-10",
    questionText:
      "How many integers x satisfy the following: the absolute value of x is less than \u03C0?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      { label: "Solve", content: "|x| < \u03C0 \u2248 3.14159, so x \u2208 {\u22123, \u22122, \u22121, 0, 1, 2, 3}." },
      { label: "Count", content: "7 integers." },
    ],
    tags: ["number theory", "inequalities"],
    difficulty: "easy",
  },
  {
    id: "g910-mm-3",
    sectionId: "mental-math",
    gradeLevel: "9-10",
    questionText:
      "If a, b and c are positive consecutive even integers with c > b > a, what is the value of b\u00B2 \u2212 ac?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      { label: "Let a = 2k", content: "Then b = 2k+2, c = 2k+4." },
      { label: "Compute", content: "b\u00B2 \u2212 ac = (2k+2)\u00B2 \u2212 2k(2k+4) = 4k\u00B2+8k+4 \u2212 4k\u00B2\u22128k = 4." },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },
  {
    id: "g910-mm-4",
    sectionId: "mental-math",
    gradeLevel: "9-10",
    questionText:
      "The sides of a triangle are 11, 60 and 61 inches. What is the area of the triangle, in square inches?",
    correctAnswer: "330",
    answerType: "integer",
    explanation: [
      { label: "Check right triangle", content: "11\u00B2 + 60\u00B2 = 121 + 3600 = 3721 = 61\u00B2. It's a right triangle!" },
      { label: "Area", content: "(1/2)(11)(60) = 330 square inches." },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },
  {
    id: "g910-mm-5",
    sectionId: "mental-math",
    gradeLevel: "9-10",
    questionText:
      "What number is one-third of the way from \u22124 to 71, and closer to \u22124?",
    correctAnswer: "21",
    answerType: "integer",
    explanation: [
      { label: "Distance", content: "71 \u2212 (\u22124) = 75." },
      { label: "One-third", content: "\u22124 + 75/3 = \u22124 + 25 = 21." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g910-mm-6",
    sectionId: "mental-math",
    gradeLevel: "9-10",
    questionText:
      "Two students working at a constant rate can paint one classroom in five hours. How many minutes would it take three students working at the same constant rate to paint two classrooms?",
    correctAnswer: "400",
    answerType: "integer",
    explanation: [
      { label: "Rate", content: "2 students paint 1 room in 5 hours = 300 min. Rate = 1/(2\u00D7300) room per student-minute." },
      { label: "3 students, 2 rooms", content: "Time = 2 rooms / (3 \u00D7 1/600) = 2 \u00D7 600/3 = 400 minutes." },
    ],
    tags: ["rates"],
    difficulty: "medium",
  },
  {
    id: "g910-mm-7",
    sectionId: "mental-math",
    gradeLevel: "9-10",
    questionText:
      "Amy's average on her six math tests is 75 points. Her teacher drops each student's lowest grade, which raises Amy's average to 85. What was her lowest test grade?",
    correctAnswer: "25",
    answerType: "integer",
    explanation: [
      { label: "Total of 6 tests", content: "6 \u00D7 75 = 450." },
      { label: "Total of top 5", content: "5 \u00D7 85 = 425." },
      { label: "Lowest", content: "450 \u2212 425 = 25." },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g910-mm-8",
    sectionId: "mental-math",
    gradeLevel: "9-10",
    questionText:
      "A palindrome is a number that reads the same forwards and backwards, like 121. How many five-digit palindromes are there that do not include the digit 9?",
    correctAnswer: "648",
    answerType: "integer",
    explanation: [
      { label: "Structure", content: "5-digit palindrome: abcba. First digit a: 1\u20138 (not 0, not 9) = 8 choices." },
      { label: "Other digits", content: "b: 0\u20138 = 9 choices. c: 0\u20138 = 9 choices." },
      { label: "Total", content: "8 \u00D7 9 \u00D7 9 = 648." },
    ],
    tags: ["combinatorics"],
    difficulty: "medium",
  },

  // ═══════════════════════════════════════════════════════════════════
  // INDIVIDUAL CONTEST (40 questions, including clear ones)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-ind-1",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText: "How many pints are in seven gallons?",
    correctAnswer: "56",
    answerType: "integer",
    explanation: [
      { label: "Convert", content: "1 gallon = 8 pints. 7 \u00D7 8 = 56 pints." },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-2",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "If the Southridge High School math team consists of 8 students, in how many ways can a team of 4 students be selected for the Math Is Cool Masters competition?",
    correctAnswer: "70",
    answerType: "integer",
    explanation: [
      { label: "Combination", content: "C(8,4) = 8!/(4!\u00D74!) = 70." },
    ],
    tags: ["combinatorics"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-3",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "How many of the following values for x make the inequality true? \u22123x < 60. Values: {\u221230, \u221221, \u221217, \u221225, \u221220, \u221215, \u221223, \u221219, \u221210, 0, 15}",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      { label: "Solve", content: "\u22123x < 60 \u2192 x > \u221220." },
      { label: "Count", content: "Values greater than \u221220: \u221217, \u221215, \u221219, \u221210, 0, 15 = 6 values." },
    ],
    tags: ["inequalities"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-4",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "Points A, B, C and D lie on the same line segment in that order. The ratio AB:BC:CD = 2:1:3. If AD = 6 units, what is the length of BD?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      { label: "Total parts", content: "2 + 1 + 3 = 6 parts. Each part = 6/6 = 1 unit." },
      { label: "BD", content: "BC + CD = 1 + 3 = 4 units." },
    ],
    tags: ["geometry", "ratios"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-5",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "A vendor puts 18 potatoes into n bags such that each bag contains the same number. There is more than 1 and fewer than 18 potatoes in each bag. What is the sum of all possible values of n?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      { label: "Find divisors", content: "18 = 1\u00D718 = 2\u00D79 = 3\u00D76 = 6\u00D73 = 9\u00D72. Potatoes per bag must be >1 and <18." },
      { label: "Valid n values", content: "2 potatoes/bag \u2192 n=9; 3\u2192n=6; 6\u2192n=3; 9\u2192n=2." },
      { label: "Sum", content: "9 + 6 + 3 + 2 = 20." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-6",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText: "What is the next number in the sequence: 3, 10, 31, 94, 283, \u2026?",
    correctAnswer: "850",
    answerType: "integer",
    explanation: [
      { label: "Find pattern", content: "Each term = previous \u00D7 3 + 1. 3\u00D73+1=10, 10\u00D73+1=31, 31\u00D73+1=94, 94\u00D73+1=283." },
      { label: "Next", content: "283 \u00D7 3 + 1 = 850." },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  {
    id: "g910-ind-7",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "A spinner is divided into 15 equal sections numbered 1\u201315. The probability of landing on a multiple of 5 or 3 can be written as A/B in lowest terms. What is A + B?",
    correctAnswer: "22",
    answerType: "integer",
    explanation: [
      { label: "Count multiples", content: "Multiples of 5: 5,10,15 (3). Multiples of 3: 3,6,9,12,15 (5). Overlap: 15 (1)." },
      { label: "Inclusion-exclusion", content: "3 + 5 \u2212 1 = 7. P = 7/15." },
      { label: "A + B", content: "7 + 15 = 22." },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  {
    id: "g910-ind-8",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "In rhombus ABCD, the measure of angle ABE equals 34\u00B0. If the measure of angle CBE equals (2x \u2212 2)\u00B0, what is the value of x?",
    correctAnswer: "18",
    answerType: "integer",
    explanation: [
      { label: "Property of rhombus", content: "The diagonal bisects the vertex angle, so angle ABE = angle CBE." },
      { label: "Solve", content: "2x \u2212 2 = 34 \u2192 2x = 36 \u2192 x = 18." },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-9",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "A school district orders 10 boxed lunches from Panera for $107.50. If each costs the same, how much do 19 boxed lunches cost, in cents?",
    correctAnswer: "20425",
    answerType: "integer",
    explanation: [
      { label: "Unit price", content: "$107.50 / 10 = $10.75 each." },
      { label: "19 lunches", content: "19 \u00D7 $10.75 = $204.25 = 20425 cents." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-11",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText: "Evaluate: 8 + 6 \u00D7 4\u00B2 \u2212 16",
    correctAnswer: "88",
    answerType: "integer",
    explanation: [
      { label: "Order of operations", content: "4\u00B2 = 16. 6 \u00D7 16 = 96. 8 + 96 \u2212 16 = 88." },
    ],
    tags: ["arithmetic", "order of operations"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-12",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "Exactly one of the following statements is false. Which one? (1) Statement 4 is true. (2) Statement 1 is false. (3) Statement 2 is false. (4) Statement 3 is true.",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      {
        label: "Logic",
        content: "If statement 2 is false, then statement 1 is true. Statement 1 says statement 4 is true. Statement 4 says statement 3 is true. Statement 3 says statement 2 is false. This is consistent \u2014 only statement 2 is false.",
      },
    ],
    tags: ["logic"],
    difficulty: "medium",
  },
  {
    id: "g910-ind-13",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText: "Solve for x: 8/(3x+9) = 3/(3x\u22126)",
    correctAnswer: "5",
    answerType: "integer",
    explanation: [
      { label: "Cross multiply", content: "8(3x\u22126) = 3(3x+9) \u2192 24x\u221248 = 9x+27." },
      { label: "Solve", content: "15x = 75 \u2192 x = 5." },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },
  {
    id: "g910-ind-14",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "Zhanlu spends $450 of his $1800 monthly income on food. What percent of his monthly income does not go towards food?",
    correctAnswer: "75",
    answerType: "integer",
    explanation: [
      { label: "Non-food", content: "1800 \u2212 450 = 1350." },
      { label: "Percentage", content: "1350/1800 = 0.75 = 75%." },
    ],
    tags: ["percentages"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-15",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "Find the 77th term of the arithmetic sequence that begins: 14, 3, \u22128, \u2026",
    correctAnswer: "-822",
    answerType: "integer",
    explanation: [
      { label: "Common difference", content: "d = 3 \u2212 14 = \u221211." },
      { label: "nth term formula", content: "a\u2087\u2087 = 14 + (77\u22121)(\u221211) = 14 \u2212 836 = \u2212822." },
    ],
    tags: ["sequences", "arithmetic"],
    difficulty: "medium",
  },
  {
    id: "g910-ind-16",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText: "What is the greatest common divisor of 2024! and 2024! + 1?",
    correctAnswer: "1",
    answerType: "integer",
    explanation: [
      { label: "GCD property", content: "For any integer n, gcd(n, n+1) = 1 since consecutive integers are coprime." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-18",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText: "How many x-intercepts does the parabola y = x\u00B2 \u2212 6x + 13 have?",
    correctAnswer: "0",
    answerType: "integer",
    explanation: [
      { label: "Discriminant", content: "\u0394 = 36 \u2212 52 = \u221216 < 0." },
      { label: "Conclusion", content: "No real roots, so 0 x-intercepts." },
    ],
    tags: ["algebra", "quadratics"],
    difficulty: "medium",
  },
  {
    id: "g910-ind-19",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "On a test with a normal distribution, a score of 38 falls two standard deviations above the mean, and 14 falls two standard deviations below the mean. What was the mean?",
    correctAnswer: "26",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "\u03BC + 2\u03C3 = 38 and \u03BC \u2212 2\u03C3 = 14." },
      { label: "Solve", content: "Adding: 2\u03BC = 52 \u2192 \u03BC = 26." },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g910-ind-21",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "Mrs. Stephenson has 20 students. 10 passed a test, 14 completed an assignment, and 4 failed the test AND didn't complete the assignment. What is the probability (as a percentage) that a student completed the assignment, given they passed the test?",
    correctAnswer: "80",
    answerType: "integer",
    explanation: [
      { label: "Inclusion-exclusion", content: "Students who did at least one: 20 \u2212 4 = 16. Passed AND completed = 10 + 14 \u2212 16 = 8." },
      { label: "Conditional probability", content: "P(completed | passed) = 8/10 = 80%." },
    ],
    tags: ["probability", "statistics"],
    difficulty: "medium",
  },
  {
    id: "g910-ind-23",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "Given f(x) = x\u00B2 + bx + c, with f(\u22121) = 1 and f(\u22123) + f(2) = \u22121. What is f(4)?",
    correctAnswer: "-54",
    answerType: "integer",
    explanation: [
      { label: "f(\u22121) = 1", content: "1 \u2212 b + c = 1 \u2192 c = b." },
      { label: "f(\u22123) + f(2)", content: "(9 \u2212 3b + c) + (4 + 2b + c) = 13 \u2212 b + 2c = \u22121. With c=b: 13 \u2212 b + 2b = 13 + b = \u22121 \u2192 b = \u221214." },
      { label: "f(4)", content: "c = \u221214. f(4) = 16 \u2212 56 \u2212 14 = \u221254." },
    ],
    tags: ["algebra", "functions"],
    difficulty: "hard",
  },
  {
    id: "g910-ind-30",
    sectionId: "individual",
    gradeLevel: "9-10",
    questionText:
      "How many positive integer factors does 10! have? (Note: 10! = 3,628,800)",
    correctAnswer: "270",
    answerType: "integer",
    explanation: [
      { label: "Prime factorize", content: "10! = 2\u2078 \u00D7 3\u2074 \u00D7 5\u00B2 \u00D7 7." },
      { label: "Count factors", content: "(8+1)(4+1)(2+1)(1+1) = 9\u00D75\u00D73\u00D72 = 270." },
    ],
    tags: ["number theory"],
    difficulty: "hard",
  },
];
