import { Question } from "../types";

export const grade910MCQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // INDIVIDUAL MULTIPLE CHOICE (scored as part of team score)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-mc-1",
    sectionId: "team-mc",
    gradeLevel: "9-10",
    questionText:
      "The hypotenuse of a right triangle is twice the length of one of the legs, and the other leg has length 10 cm. What is the length of the shorter leg?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "A", value: "10√3/3 cm" },
      { label: "B", value: "2√5 cm" },
      { label: "C", value: "20√3/3 cm" },
      { label: "D", value: "4√5 cm" },
      { label: "E", value: "10√5 cm" },
    ],
    explanation: [
      { label: "Set up", content: "Let short leg = x. Hypotenuse = 2x. By Pythagorean theorem: x² + 10² = (2x)²." },
      { label: "Solve", content: "x² + 100 = 4x² → 3x² = 100 → x = 10/√3 = 10√3/3." },
    ],
    tags: ["geometry", "right triangles"],
    difficulty: "medium",
  },
  {
    id: "g910-mc-3",
    sectionId: "team-mc",
    gradeLevel: "9-10",
    questionText:
      "Five-eighths is the same fraction of two-thirds as three-tenths is of what number?",
    correctAnswer: "E",
    answerType: "multiple-choice",
    choices: [
      { label: "A", value: "9/32" },
      { label: "B", value: "15/16" },
      { label: "C", value: "18/25" },
      { label: "D", value: "12/19" },
      { label: "E", value: "Answer not given" },
    ],
    explanation: [
      { label: "Set up proportion", content: "(5/8)/(2/3) = (3/10)/x → x = (3/10) × (2/3) / (5/8)." },
      { label: "Solve", content: "x = (6/30) / (5/8) = (1/5)(8/5) = 8/25. Not among choices A–D." },
    ],
    tags: ["fractions", "proportions"],
    difficulty: "medium",
  },
  {
    id: "g910-mc-4",
    sectionId: "team-mc",
    gradeLevel: "9-10",
    questionText: "Simplify: −3m − 3[2m − 3(m + 5)]",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "A", value: "45" },
      { label: "B", value: "−6m − 45" },
      { label: "C", value: "−3m + 45" },
      { label: "D", value: "3m + 45" },
      { label: "E", value: "Answer not given" },
    ],
    explanation: [
      { label: "Inner bracket", content: "2m − 3(m + 5) = 2m − 3m − 15 = −m − 15." },
      { label: "Distribute", content: "−3m − 3(−m − 15) = −3m + 3m + 45 = 45." },
    ],
    tags: ["algebra", "simplification"],
    difficulty: "easy",
  },
  {
    id: "g910-mc-5",
    sectionId: "team-mc",
    gradeLevel: "9-10",
    questionText:
      "Which of the following linear equations is perpendicular to the line through the points (−3, 2) and (5, −1)?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "A", value: "3x − 8y = −22" },
      { label: "B", value: "8x − 3y = 10" },
      { label: "C", value: "x − 2y = −6" },
      { label: "D", value: "8x + 3y = 10" },
      { label: "E", value: "Answer not given" },
    ],
    explanation: [
      { label: "Original slope", content: "m = (−1 − 2)/(5 − (−3)) = −3/8." },
      { label: "Perpendicular slope", content: "m⊥ = 8/3. Line 8x − 3y = 10 → y = (8/3)x − 10/3. Slope = 8/3. ✓" },
    ],
    tags: ["coordinate geometry", "linear equations"],
    difficulty: "medium",
  },
  {
    id: "g910-mc-6",
    sectionId: "team-mc",
    gradeLevel: "9-10",
    questionText:
      "A 3×3×3 cube is painted blue, then cut into 27 unit cubes. One of the unit cubes is chosen at random, then rolled like a die. What is the probability that it lands with a blue side facing up?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "A", value: "1/27" },
      { label: "B", value: "1/9" },
      { label: "C", value: "1/3" },
      { label: "D", value: "1/2" },
      { label: "E", value: "Answer not given" },
    ],
    explanation: [
      { label: "Count blue faces", content: "8 corner cubes × 3 blue + 12 edge cubes × 2 blue + 6 face cubes × 1 blue + 1 center × 0 = 54 total blue faces." },
      { label: "Total faces", content: "27 cubes × 6 faces = 162." },
      { label: "Probability", content: "54/162 = 1/3." },
    ],
    tags: ["probability", "spatial reasoning"],
    difficulty: "hard",
  },
  {
    id: "g910-mc-7",
    sectionId: "team-mc",
    gradeLevel: "9-10",
    questionText:
      "The local time in Auckland, New Zealand is 19 hours ahead of Seattle, WA. You are visiting friends in Auckland and want to call your family in Seattle at 8 p.m. Seattle time. What time should it be in Auckland when you call?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "A", value: "1 a.m." },
      { label: "B", value: "9 a.m." },
      { label: "C", value: "1 p.m." },
      { label: "D", value: "3 p.m." },
      { label: "E", value: "Answer not given" },
    ],
    explanation: [
      { label: "Convert", content: "Auckland is 19 hours ahead. 8 p.m. + 19 hours = 3 p.m. the next day." },
    ],
    tags: ["arithmetic", "time zones"],
    difficulty: "easy",
  },
  {
    id: "g910-mc-10",
    sectionId: "team-mc",
    gradeLevel: "9-10",
    questionText:
      "An urn contains 4 silver coins and 3 gold coins. If the coins are drawn one-by-one without replacement, what is the probability that the 5th coin drawn is silver?",
    correctAnswer: "E",
    answerType: "multiple-choice",
    choices: [
      { label: "A", value: "5/14" },
      { label: "B", value: "3/7" },
      { label: "C", value: "1/2" },
      { label: "D", value: "9/14" },
      { label: "E", value: "4/7" },
    ],
    explanation: [
      { label: "By symmetry", content: "Each coin is equally likely to be in any position. P(5th coin is silver) = 4/7." },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
];
