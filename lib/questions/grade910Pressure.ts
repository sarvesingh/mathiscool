import { Question } from "../types";

export const grade910PressureQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // PRESSURE ROUND (5 questions, submitted one at a time every 2 min)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-pr-1",
    sectionId: "triple-jump",
    gradeLevel: "9-10",
    questionText:
      "Sahil and Mir are solving a problem asking for the sum of the first ten powers of 2. Sahil starts with 2⁰ = 1 and Mir starts with 2¹ = 2. Let 'a' equal the positive difference of their answers, and 'b' equal Mir's answer divided by Sahil's answer. What is a + b?",
    correctAnswer: "1025",
    answerType: "integer",
    explanation: [
      { label: "Sahil's sum", content: "2⁰ + 2¹ + … + 2⁹ = 2¹⁰ − 1 = 1023." },
      { label: "Mir's sum", content: "2¹ + 2² + … + 2¹⁰ = 2(2¹⁰ − 1) = 2046." },
      { label: "Compute", content: "a = 2046 − 1023 = 1023. b = 2046/1023 = 2. a + b = 1025." },
    ],
    tags: ["algebra", "series"],
    difficulty: "medium",
  },
  {
    id: "g910-pr-3",
    sectionId: "triple-jump",
    gradeLevel: "9-10",
    questionText:
      "A 2-digit positive integer is randomly chosen. As a percentage, what is the probability that the product of the digits in the number is a positive multiple of 3?",
    correctAnswer: "50",
    answerType: "integer",
    explanation: [
      { label: "Positive product", content: "Neither digit is 0. Numbers 11–99 with no zero digit: 9 × 9 = 81." },
      { label: "Product is multiple of 3", content: "At least one digit ∈ {3,6,9}. Complement: both digits ∈ {1,2,4,5,7,8} → 6 × 6 = 36." },
      { label: "Probability", content: "(81 − 36)/90 = 45/90 = 50%." },
    ],
    tags: ["probability", "number theory"],
    difficulty: "medium",
  },
  {
    id: "g910-pr-4",
    sectionId: "triple-jump",
    gradeLevel: "9-10",
    questionText: "How many integers x satisfy the inequality |x + 10| > |2x + 1|?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      { label: "Square both sides", content: "(x+10)² > (2x+1)² → x²+20x+100 > 4x²+4x+1." },
      { label: "Simplify", content: "3x² − 16x − 99 < 0." },
      { label: "Solve", content: "Roots: x = (16 ± 38)/6 → x = 9 or x = −11/3 ≈ −3.67. So −3.67 < x < 9." },
      { label: "Count integers", content: "x ∈ {−3, −2, −1, 0, 1, 2, 3, 4, 5, 6, 7, 8} = 12 integers." },
    ],
    tags: ["algebra", "inequalities"],
    difficulty: "hard",
  },
  {
    id: "g910-pr-5",
    sectionId: "triple-jump",
    gradeLevel: "9-10",
    questionText: "Evaluate: 7⁵ + 7⁴ + 7³ + 7² + 7",
    correctAnswer: "19607",
    answerType: "integer",
    explanation: [
      { label: "Factor", content: "7(7⁴ + 7³ + 7² + 7 + 1) = 7(2401 + 343 + 49 + 7 + 1)." },
      { label: "Sum", content: "7 × 2801 = 19607." },
    ],
    tags: ["arithmetic", "exponents"],
    difficulty: "medium",
  },
];
