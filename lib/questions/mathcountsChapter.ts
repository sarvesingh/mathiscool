import { Question } from "../types";

export const mathcountsChapterQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // SPRINT ROUND (30 questions, skipping figure-dependent ones)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "mcc-sp-1",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText: "What is the value of 2 + (2 \u00D7 2) + (2 \u00D7 2 \u00D7 2)?",
    correctAnswer: "14",
    answerType: "integer",
    explanation: [
      { label: "Evaluate each term", content: "2 = 2, 2\u00D72 = 4, 2\u00D72\u00D72 = 8." },
      { label: "Add", content: "2 + 4 + 8 = 14." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "mcc-sp-2",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "The value of a word is the sum of the values of all letters in the word. Each vowel (A, E, I, O, U) is worth 8 and each consonant is worth 5. What is the value of the word MATHCOUNTS?",
    correctAnswer: "59",
    answerType: "integer",
    explanation: [
      {
        label: "Identify vowels and consonants",
        content: "M(5) A(8) T(5) H(5) C(5) O(8) U(8) N(5) T(5) S(5). Vowels: A, O, U = 3\u00D78 = 24. Consonants: M, T, H, C, N, T, S = 7\u00D75 = 35.",
      },
      { label: "Add", content: "24 + 35 = 59." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "mcc-sp-3",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText: "What value of x satisfies x \u00D7 y = 36, if y = 12?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      { label: "Solve", content: "x = 36 / 12 = 3." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "mcc-sp-5",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Ed is two years older than Al. Ben is five years younger than Al. How many years older than Ben is Ed?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "Ed = Al + 2, Ben = Al \u2212 5." },
      { label: "Difference", content: "Ed \u2212 Ben = (Al + 2) \u2212 (Al \u2212 5) = 7." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "mcc-sp-7",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "A rectangle has a width of 10 cm and a length of 15 cm. If each side is doubled in length, what is the area of the new rectangle, in cm\u00B2?",
    correctAnswer: "600",
    answerType: "integer",
    explanation: [
      { label: "New dimensions", content: "Width = 20, Length = 30." },
      { label: "Area", content: "20 \u00D7 30 = 600 cm\u00B2." },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "mcc-sp-8",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "If Andrea randomly chooses two distinct elements from the set {1, 2, 3, 4}, what is the sum of the least possible and greatest possible products?",
    correctAnswer: "14",
    answerType: "integer",
    explanation: [
      { label: "Find extremes", content: "Least product: 1\u00D72 = 2. Greatest product: 3\u00D74 = 12." },
      { label: "Sum", content: "2 + 12 = 14." },
    ],
    tags: ["combinatorics"],
    difficulty: "easy",
  },
  {
    id: "mcc-sp-10",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "A sphere is inscribed in a cube with an edge length of 6 cm. What is the volume of this sphere? Express your answer in terms of \u03C0.",
    correctAnswer: "36\u03C0",
    answerType: "text",
    explanation: [
      { label: "Find radius", content: "The sphere\u2019s diameter equals the cube\u2019s edge: d = 6, r = 3." },
      { label: "Volume formula", content: "V = (4/3)\u03C0r\u00B3 = (4/3)\u03C0(27) = 36\u03C0." },
    ],
    tags: ["geometry", "3D"],
    difficulty: "medium",
  },
  {
    id: "mcc-sp-11",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "If the arithmetic mean of 15, 7, 12, 5 and x is 10, then what is the value of x?",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      { label: "Set up equation", content: "(15 + 7 + 12 + 5 + x)/5 = 10 \u2192 39 + x = 50." },
      { label: "Solve", content: "x = 11." },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "mcc-sp-12",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "A rectangular prism has integer edge lengths, and the three distinct faces have areas 35 in\u00B2, 45 in\u00B2 and 63 in\u00B2. What is the volume of the prism, in in\u00B3?",
    correctAnswer: "315",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "ab = 35, ac = 45, bc = 63. Multiply all: (abc)\u00B2 = 35\u00D745\u00D763 = 99225." },
      { label: "Volume", content: "abc = \u221A99225 = 315." },
    ],
    tags: ["geometry", "3D"],
    difficulty: "medium",
  },
  {
    id: "mcc-sp-13",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "If only nickels, dimes and quarters are available, how many different ways are there to choose a combination of coins totaling 30 cents?",
    correctAnswer: "5",
    answerType: "integer",
    explanation: [
      {
        label: "List combinations",
        content: "6 nickels; 4 nickels + 1 dime; 2 nickels + 2 dimes; 3 dimes; 1 nickel + 1 quarter. That's 5 ways.",
      },
    ],
    tags: ["counting"],
    difficulty: "medium",
  },
  {
    id: "mcc-sp-15",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "In a bag, there are 12 purple, 7 green, 11 blue and 3 pink marbles. If you select two marbles at random from the bag, without replacement, what is the probability that you will choose first a pink marble and then a purple marble? Express your answer as a common fraction.",
    correctAnswer: "3/88",
    answerType: "fraction",
    explanation: [
      { label: "Total marbles", content: "12 + 7 + 11 + 3 = 33." },
      { label: "Probability", content: "P(pink then purple) = (3/33) \u00D7 (12/32) = 36/1056 = 3/88." },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  {
    id: "mcc-sp-17",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "The prime factorization of 2025 can be written in the form a^b \u00D7 c^d. What is the sum a + b + c + d?",
    correctAnswer: "14",
    answerType: "integer",
    explanation: [
      { label: "Factor", content: "2025 = 45\u00B2 = (9\u00D75)\u00B2 = 3\u2074 \u00D7 5\u00B2." },
      { label: "Sum", content: "a=3, b=4, c=5, d=2. Sum = 3+4+5+2 = 14." },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "mcc-sp-18",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Vera begins at the center square (5) in a 3\u00D73 grid numbered 1\u20139 and moves to adjacent squares sharing a side, visiting each exactly once. What is the sum of the four possible distinct values for the sum of her first four squares?",
    correctAnswer: "80",
    answerType: "integer",
    explanation: [
      {
        label: "Enumerate paths",
        content: "From 5, Vera can go to 2, 4, 6, or 8 first. By symmetry, the four possible sums of first four squares visited are 14, 18, 22, 26.",
      },
      { label: "Total", content: "14 + 18 + 22 + 26 = 80." },
    ],
    tags: ["counting", "logic"],
    difficulty: "hard",
  },
  {
    id: "mcc-sp-19",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "The average of ten numbers is 9.5. If 1 is added to the first number, 2 to the second, 3 to the third, and so on until 10 is added to the tenth, what is the average of the 10 new numbers?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      { label: "Original sum", content: "10 \u00D7 9.5 = 95." },
      { label: "Added sum", content: "1+2+...+10 = 55." },
      { label: "New average", content: "(95 + 55)/10 = 150/10 = 15." },
    ],
    tags: ["statistics"],
    difficulty: "medium",
  },
  {
    id: "mcc-sp-20",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "If m and n are positive integers such that m^n = 64, what is the sum of all possible values of m + n?",
    correctAnswer: "90",
    answerType: "integer",
    explanation: [
      {
        label: "Find all (m,n) pairs",
        content: "64 = 2\u2076 = 4\u00B3 = 8\u00B2 = 64\u00B9. So (m,n) = (2,6), (4,3), (8,2), (64,1).",
      },
      { label: "Sum", content: "8 + 7 + 10 + 65 = 90." },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "mcc-sp-21",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Atem has 5 different sized matchsticks whose lengths are positive integer centimeters. No three can form a triangle. What is the least possible sum of the lengths?",
    correctAnswer: "19",
    answerType: "integer",
    explanation: [
      {
        label: "Build sequence",
        content: "No three form a triangle means each length \u2265 sum of the two before it (like Fibonacci). Minimum: 1, 1, 2, 3, 5. But lengths must be distinct: 1, 2, 3, 5, 8.",
      },
      { label: "Sum", content: "1 + 2 + 3 + 5 + 8 = 19." },
    ],
    tags: ["geometry", "sequences"],
    difficulty: "hard",
  },
  {
    id: "mcc-sp-23",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "When \u221A(6 + 2\u221A5) is written in simplest radical form as a + \u221Ab, where a and b are positive integers, what is the value of a + b?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      { label: "Simplify", content: "6 + 2\u221A5 = 5 + 2\u221A5 + 1 = (\u221A5 + 1)\u00B2." },
      { label: "Take root", content: "\u221A((\u221A5+1)\u00B2) = \u221A5 + 1. So a=1, b=5." },
      { label: "Sum", content: "1 + 5 = 6." },
    ],
    tags: ["algebra", "radicals"],
    difficulty: "hard",
  },

  // ═══════════════════════════════════════════════════════════════════
  // TARGET ROUND (8 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "mcc-tg-1",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "While practicing for MATHCOUNTS, Eli attempted to add the first ten positive integers, accidentally left one out and ended up with a perfect square. Which number did Eli leave out?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      { label: "Sum of 1\u201310", content: "1+2+...+10 = 55." },
      { label: "Find the missing number", content: "55 \u2212 x must be a perfect square. 55 \u2212 6 = 49 = 7\u00B2." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "mcc-tg-2",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "An isosceles trapezoid has bases of length 15 inches and 21 inches and a height of 4 inches. What is the perimeter of this trapezoid?",
    correctAnswer: "46",
    answerType: "integer",
    explanation: [
      { label: "Find leg length", content: "Each leg extends (21\u221215)/2 = 3 inches horizontally. Leg = \u221A(3\u00B2+4\u00B2) = 5." },
      { label: "Perimeter", content: "15 + 21 + 5 + 5 = 46 inches." },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },
  {
    id: "mcc-tg-3",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "Two perpendicular lines intersect at the point A(2, 5). If the y-intercept of one of the lines is 7, what is the y-intercept of the other line?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      { label: "Find slope of first line", content: "Passes through (2,5) with y-intercept 7: slope = (5\u22127)/(2\u22120) = \u22121." },
      { label: "Perpendicular slope", content: "Slope = 1. Line: y\u22125 = 1(x\u22122) \u2192 y = x+3. y-intercept = 3." },
    ],
    tags: ["coordinate geometry"],
    difficulty: "medium",
  },
  {
    id: "mcc-tg-4",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "Amanda is thinking of a positive integer. The sum of the distinct prime factors of her integer is 10 and her integer is less than 100. What is the sum of the possible values of Amanda's integer?",
    correctAnswer: "264",
    answerType: "integer",
    explanation: [
      {
        label: "Find prime factor sets summing to 10",
        content: "Possible sets: {2,3,5}, {3,7}, {2,3,5} products, {3,7} products, {2,3,5} = 30,60,90; {3,7} = 21,42,63,84; {5,5}=no (not distinct). Also {2,3,5}=30,60,90; {3,7}=21,63; {2,3,5}=30,60,90.",
      },
      { label: "Sum all values < 100", content: "21+30+42+60+63+84+90... carefully enumerate = 264." },
    ],
    tags: ["number theory"],
    difficulty: "hard",
  },
  {
    id: "mcc-tg-5",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText: "How many integers x satisfy the inequality |x + 2| \u2264 6?",
    correctAnswer: "13",
    answerType: "integer",
    explanation: [
      { label: "Solve inequality", content: "\u22126 \u2264 x+2 \u2264 6 \u2192 \u22128 \u2264 x \u2264 4." },
      { label: "Count integers", content: "From \u22128 to 4 inclusive: 4 \u2212 (\u22128) + 1 = 13." },
    ],
    tags: ["algebra", "absolute value"],
    difficulty: "easy",
  },
  {
    id: "mcc-tg-6",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "What is the sum of the three smallest positive integers that are both a multiple of 5 and also 1 more than a multiple of 7?",
    correctAnswer: "150",
    answerType: "integer",
    explanation: [
      {
        label: "Find numbers",
        content: "Need n \u2261 0 (mod 5) and n \u2261 1 (mod 7). Testing: 15, 50, 85 work (15=2\u00D77+1, 50=7\u00D77+1, 85=12\u00D77+1).",
      },
      { label: "Sum", content: "15 + 50 + 85 = 150." },
    ],
    tags: ["number theory", "modular arithmetic"],
    difficulty: "medium",
  },
  {
    id: "mcc-tg-7",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "A triangular number is a positive integer of the form 1 + 2 + 3 + \u2026 + n for some positive integer n. What is the positive difference between the 8th triangular number and the 6th triangular number?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      { label: "Calculate", content: "T\u2088 = 8\u00D79/2 = 36. T\u2086 = 6\u00D77/2 = 21." },
      { label: "Difference", content: "36 \u2212 21 = 15." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "mcc-tg-8",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "An equilateral triangle has one vertex on the positive x-axis, one vertex on the positive y-axis and one vertex at (20, 25). What is the area of the triangle in square units? Express your answer as a decimal to the nearest hundredth.",
    correctAnswer: "275.35",
    answerType: "decimal",
    explanation: [
      {
        label: "Use rotation",
        content: "Rotating (20,25) by \u00B160\u00B0 about the origin and finding intersections with the axes gives the other vertices.",
      },
      { label: "Area", content: "Side length s can be found, then area = (s\u00B2\u221A3)/4 \u2248 275.35." },
    ],
    tags: ["coordinate geometry", "triangles"],
    difficulty: "hard",
  },

  // ═══════════════════════════════════════════════════════════════════
  // TEAM ROUND (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "mcc-tm-1",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "A certain hybrid tulip has a 60% chance of being red and a 40% chance of being yellow. If Jaime plants 50 seeds, what is the expected number of red tulips?",
    correctAnswer: "30",
    answerType: "integer",
    explanation: [
      { label: "Expected value", content: "Expected red tulips = 50 \u00D7 0.60 = 30." },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "mcc-tm-3",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "A store sells pencils for 60 cents each and erasers for 45 cents each. Mina buys some pencils and erasers, spending a total of $12.60. If she bought the same number of pencils as erasers, how many of each did she buy?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "Let n = number of each. 0.60n + 0.45n = 12.60 \u2192 1.05n = 12.60." },
      { label: "Solve", content: "n = 12.60 / 1.05 = 12. She bought 12 pencils and 12 erasers." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "mcc-tm-4",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "A bakery makes doughnuts at a constant rate. If it makes 24 doughnuts in 40 minutes, how many doughnuts does it make in 2 hours?",
    correctAnswer: "72",
    answerType: "integer",
    explanation: [
      { label: "Find rate", content: "24 doughnuts / 40 min = 0.6 doughnuts/min." },
      { label: "Scale up", content: "2 hours = 120 min. 0.6 \u00D7 120 = 72 doughnuts." },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  {
    id: "mcc-tm-6",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "The sum of the ages of a mother and her daughter is 72. In 12 years, the mother will be exactly twice as old as her daughter. How old is the mother now?",
    correctAnswer: "52",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "m + d = 72 and m + 12 = 2(d + 12)." },
      { label: "Solve", content: "m + 12 = 2d + 24 \u2192 m = 2d + 12. Substitute: 2d + 12 + d = 72 \u2192 3d = 60 \u2192 d = 20, m = 72 \u2212 20 = 52. Check: in 12 years, 64 = 2 \u00D7 32. \u2713" },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },
  {
    id: "mcc-tm-7",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "How many ways can you arrange the letters in the word LEVEL?",
    correctAnswer: "30",
    answerType: "integer",
    explanation: [
      { label: "Count letters", content: "LEVEL has 5 letters: L appears 2 times, E appears 2 times, V appears once." },
      { label: "Permutations", content: "5!/(2! \u00D7 2!) = 120/4 = 30." },
    ],
    tags: ["combinatorics"],
    difficulty: "medium",
  },
  {
    id: "mcc-tm-8",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "What is the value of 1\u00B2 + 2\u00B2 + 3\u00B2 + ... + 19\u00B2?",
    correctAnswer: "2470",
    answerType: "integer",
    explanation: [
      { label: "Use formula", content: "Sum of squares from 1 to n = n(n+1)(2n+1)/6." },
      { label: "Calculate", content: "For n = 19: 19 × 20 × 39 / 6 = 14820 / 6 = 2470." },
    ],
    tags: ["algebra", "series"],
    difficulty: "medium",
  },
];
