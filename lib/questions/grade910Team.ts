import { Question } from "../types";

export const grade910TeamQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // TEAM CONTEST (10 questions, 15 minutes)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-tm-1",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText:
      "Packard's pet rabbit, Kirby, jumps 15 centimeters with each jump. Kirby is currently 2024 centimeters away from Packard and jumps directly towards him. How many jumps will it take Kirby to reach Packard? (On the last jump, Kirby can jump exactly the remaining distance if less than 15 cm.)",
    correctAnswer: "135",
    answerType: "integer",
    explanation: [
      { label: "Divide", content: "2024 ÷ 15 = 134 remainder 14." },
      { label: "Count jumps", content: "134 full jumps + 1 final jump = 135 jumps." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g910-tm-2",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText:
      "A circular swimming pool is 6 feet in diameter, and it is surrounded by a ring of tiling that is 3 inches wide. The outer circumference of the tile is Aπ inches. What is A?",
    correctAnswer: "78",
    answerType: "integer",
    explanation: [
      { label: "Convert", content: "Pool diameter = 6 feet = 72 inches." },
      { label: "Outer diameter", content: "72 + 2 × 3 = 78 inches." },
      { label: "Circumference", content: "π × 78 = 78π. So A = 78." },
    ],
    tags: ["geometry", "circles"],
    difficulty: "easy",
  },
  {
    id: "g910-tm-3",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText: "What is the 3rd largest divisor of 2025?",
    correctAnswer: "405",
    answerType: "integer",
    explanation: [
      { label: "Factorize", content: "2025 = 3⁴ × 5² = 45²." },
      { label: "Largest divisors", content: "Sorted descending: 2025, 675, 405, ... The 3rd largest is 405." },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g910-tm-4",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText:
      "A positive integer less than 40 is randomly selected. The probability that the integer is a multiple of 5 can be written as a reduced fraction A/B. What is A + B?",
    correctAnswer: "46",
    answerType: "integer",
    explanation: [
      { label: "Count multiples", content: "Multiples of 5 from 1 to 39: 5, 10, 15, 20, 25, 30, 35 = 7." },
      { label: "Probability", content: "7/39 (already reduced since gcd(7,39) = 1). A + B = 7 + 39 = 46." },
    ],
    tags: ["probability", "number theory"],
    difficulty: "easy",
  },
  {
    id: "g910-tm-5",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText:
      "Four numbers are written in a row. The average of the first two is 10, the average of the middle two is 3, and the average of the last two is 20. What is the average of the first and last numbers?",
    correctAnswer: "27",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "a+b = 20, b+c = 6, c+d = 40." },
      { label: "Find a+d", content: "(a+b) − b + d = 20 − b + d. Since d = 40−c and c = 6−b: d = 34+b." },
      { label: "Compute", content: "a = 20−b. a+d = 20−b+34+b = 54. Average = 27." },
    ],
    tags: ["algebra", "averages"],
    difficulty: "medium",
  },
  {
    id: "g910-tm-6",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText:
      "What is the sum, in units, of the minimum and maximum distances from the point (4, −3) to the circle x² + y² + 4x − 10y − 7 = 0?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      { label: "Rewrite circle", content: "(x+2)² + (y−5)² = 4 + 25 + 7 = 36. Center (−2, 5), radius 6." },
      { label: "Distance to center", content: "d = √((4+2)² + (−3−5)²) = √(36+64) = 10." },
      { label: "Min + Max", content: "(10−6) + (10+6) = 4 + 16 = 20." },
    ],
    tags: ["coordinate geometry", "circles"],
    difficulty: "hard",
  },
  {
    id: "g910-tm-7",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText:
      "How many positive 4-digit integers have three of the same digit and a different fourth digit (in any order)?",
    correctAnswer: "324",
    answerType: "integer",
    explanation: [
      { label: "Count all", content: "10 choices for repeated digit × 9 for different digit × 4 positions = 360." },
      { label: "Remove leading zeros", content: "Repeated 0, different in pos 2/3/4: 9 × 3 = 27. Non-zero repeated, 0 in pos 1: 9 × 1 = 9." },
      { label: "Total", content: "360 − 27 − 9 = 324." },
    ],
    tags: ["combinatorics"],
    difficulty: "hard",
  },
  {
    id: "g910-tm-9",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText:
      "The number 89 can be represented as (5 × 14) + (5 + 14). In general, a number n = ab + a + b = (a+1)(b+1) − 1 for positive integers a, b. What is the smallest integer greater than 89 that cannot be represented in this manner?",
    correctAnswer: "96",
    answerType: "integer",
    explanation: [
      { label: "Key insight", content: "n = (a+1)(b+1) − 1. So n+1 = (a+1)(b+1) with a,b ≥ 1, meaning n+1 has factors ≥ 2." },
      { label: "Cannot represent", content: "n can't be written this way iff n+1 is prime." },
      { label: "Check primes > 90", content: "91 = 7×13 (not prime), 92−96: 97 is prime. So n = 96 is the answer." },
    ],
    tags: ["number theory", "algebra"],
    difficulty: "hard",
  },
  {
    id: "g910-tm-10",
    sectionId: "team",
    gradeLevel: "9-10",
    questionText:
      "Let N = 123456789101112…998999 be the integer formed by writing the integers 1, 2, 3, …, 999 in order. What is the 2-digit integer formed by the 2024th and 2025th digits from the left, in that order?",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      { label: "Count digits", content: "1-digit (1–9): 9 digits. 2-digit (10–99): 180 digits. 3-digit (100–999): starts at position 190." },
      { label: "Position in 3-digit", content: "Position 2024 − 189 = 1835th digit in the 3-digit section." },
      { label: "Find number", content: "1835 = 611 × 3 + 2. The 612th 3-digit number is 711. Position 1835 is the 2nd digit of 711 = '1'. Position 1836 is the 3rd digit = '1'." },
      { label: "Answer", content: "The 2-digit integer is '11'." },
    ],
    tags: ["number theory", "patterns"],
    difficulty: "hard",
  },
];
