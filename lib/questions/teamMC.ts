import { Question } from "../types";

export const teamMCQuestions: Question[] = [
  {
    id: "tmc-1",
    sectionId: "team-mc",
    questionText: "What is the remainder when 60 is divided by 7?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "3", value: "A" },
      { label: "4", value: "B" },
      { label: "5", value: "C" },
      { label: "6", value: "D" },
      { label: "7", value: "E" },
    ],
    explanation: [
      { label: "Divide", content: "60 ÷ 7 = 8 remainder 4. Answer: B." },
    ],
    tags: ["arithmetic", "remainders"],
    difficulty: "easy",
  },
  {
    id: "tmc-2",
    sectionId: "team-mc",
    questionText: "When A is divided by 12, the remainder is 11. When A is divided by 15, the remainder is 2. What is the largest 2-digit value of A?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "23", value: "A" },
      { label: "32", value: "B" },
      { label: "35", value: "C" },
      { label: "47", value: "D" },
      { label: "94", value: "E" },
    ],
    explanation: [
      { label: "Find pattern", content: "A ≡ 11 (mod 12) → A ∈ {11, 23, 35, 47, 59, 71, 83, 95, …}. A ≡ 2 (mod 15) → A ∈ {2, 17, 32, 47, 62, 77, 92, …}." },
      { label: "Find overlap", content: "Common values: 47, then next is 47 + lcm(12,15) = 47 + 60 = 107 (3 digits). Largest 2-digit is 47. Answer: D." },
    ],
    tags: ["number theory", "remainders"],
    difficulty: "medium",
  },
  {
    id: "tmc-3",
    sectionId: "team-mc",
    questionText: "What is the remainder when 2²⁰²⁵ is divided by 40?",
    correctAnswer: "E",
    answerType: "multiple-choice",
    choices: [
      { label: "4", value: "A" },
      { label: "8", value: "B" },
      { label: "16", value: "C" },
      { label: "24", value: "D" },
      { label: "32", value: "E" },
    ],
    explanation: [
      { label: "Find the cycle", content: "Powers of 2 mod 40: 2³=8, 2⁴=16, 2⁵=32, 2⁶=24, 2⁷=8, … Cycle of length 4 starting at 2³." },
      { label: "Compute", content: "2025 − 3 = 2022. 2022 mod 4 = 2. So 2²⁰²⁵ mod 40 = same as 2⁵ mod 40 = 32. Answer: E." },
    ],
    tags: ["number theory", "modular arithmetic"],
    difficulty: "hard",
  },
  {
    id: "tmc-4",
    sectionId: "team-mc",
    questionText: "Solve for x: 20 + 15x = 260",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "−16", value: "A" },
      { label: "−13.75", value: "B" },
      { label: "16", value: "C" },
      { label: "17", value: "D" },
      { label: "56/3", value: "E" },
    ],
    explanation: [
      { label: "Solve", content: "15x = 260 − 20 = 240. x = 240 ÷ 15 = 16. Answer: C." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
];
