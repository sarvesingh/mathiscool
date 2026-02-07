import { Question } from "../types";

export const grade910CBQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 1
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-cb1-1",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText: "Solve for x: −2/17 = x/34",
    correctAnswer: "-4",
    answerType: "integer",
    explanation: [
      { label: "Cross multiply", content: "−2 × 34 = 17x → −68 = 17x → x = −4." },
    ],
    tags: ["algebra", "proportions"],
    difficulty: "easy",
  },
  {
    id: "g910-cb1-2",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText:
      "The hypotenuse of a right triangle with integer side lengths is 13 units. What is the area of the triangle, in square units?",
    correctAnswer: "30",
    answerType: "integer",
    explanation: [
      { label: "Pythagorean triple", content: "5-12-13. Area = (5 × 12)/2 = 30." },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g910-cb1-3",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText:
      "For which positive integer n does 400² × 400² = 16² × n²?",
    correctAnswer: "10000",
    answerType: "integer",
    explanation: [
      { label: "Simplify", content: "(400²)² = (16n)² → 400² = 16n → n = 400²/16 = 160000/16 = 10000." },
    ],
    tags: ["algebra", "exponents"],
    difficulty: "medium",
  },
  {
    id: "g910-cb1-4",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText:
      "Quinn has n pieces of candy to split among 5 people equally, but 2 are left over. If Quinn has between 5 and 100 pieces, how many possible values of n are there?",
    correctAnswer: "19",
    answerType: "integer",
    explanation: [
      { label: "Condition", content: "n ≡ 2 (mod 5), 5 < n < 100." },
      { label: "List", content: "7, 12, 17, …, 97. Count = (97 − 7)/5 + 1 = 19." },
    ],
    tags: ["number theory", "modular arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g910-cb1-5",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText: "How many even three-digit positive integers are there?",
    correctAnswer: "450",
    answerType: "integer",
    explanation: [
      { label: "Count", content: "Three-digit range: 100–999, total 900. Exactly half are even. 900/2 = 450." },
    ],
    tags: ["counting"],
    difficulty: "easy",
  },
  {
    id: "g910-cb1-6",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText:
      "A soccer ball is dropped from a height of 10 meters, and each time it bounces it reaches one-third of its previous height. How many meters does the ball travel in total before coming to rest?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      { label: "Distance", content: "Down 10 + up-down bounces: 2 × 10 × (1/3)/(1 − 1/3) = 2 × 10 × 1/2 = 10." },
      { label: "Total", content: "10 + 10 = 20 meters." },
    ],
    tags: ["series", "geometry"],
    difficulty: "medium",
  },
  {
    id: "g910-cb1-7",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText:
      "Leon has 5 black shirts, 7 green shirts and 8 yellow shirts. He also has 4 pairs of black pants and 6 pairs of khaki pants. If he randomly chooses one shirt and one pair of pants, what is the probability (as a percent) that they are both black?",
    correctAnswer: "10",
    answerType: "integer",
    explanation: [
      { label: "Calculate", content: "P(black shirt) = 5/20 = 1/4. P(black pants) = 4/10 = 2/5." },
      { label: "Both black", content: "(1/4)(2/5) = 2/20 = 1/10 = 10%." },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g910-cb1-8",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText:
      "What is the sum of all values of x that satisfy: x² − 10 = 3x?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      { label: "Rearrange", content: "x² − 3x − 10 = 0." },
      { label: "Vieta's", content: "Sum of roots = 3." },
    ],
    tags: ["algebra", "quadratics"],
    difficulty: "easy",
  },
  {
    id: "g910-cb1-9",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText:
      "Rectangles A and B are similar, with a side length of 2.1 units on rectangle B corresponding to a side length of 21 units on rectangle A. What is the area of rectangle A in square units, if the area of rectangle B is 3.36 square units?",
    correctAnswer: "336",
    answerType: "integer",
    explanation: [
      { label: "Scale factor", content: "21/2.1 = 10. Area scales by 10² = 100." },
      { label: "Area of A", content: "3.36 × 100 = 336 square units." },
    ],
    tags: ["geometry", "similarity"],
    difficulty: "medium",
  },
  {
    id: "g910-cb1-10",
    sectionId: "cb-round-1",
    gradeLevel: "9-10",
    questionText:
      "Julio lives one mile from his school and walks at a constant rate of 3 miles per hour. How many minutes will it take him to walk to school and back home?",
    correctAnswer: "40",
    answerType: "integer",
    explanation: [
      { label: "Round trip", content: "2 miles at 3 mph = 2/3 hours = 40 minutes." },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 2
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-cb2-1",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "What is the largest real number x that satisfies: 2x + 3 ≥ 4x + 9?",
    correctAnswer: "-3",
    answerType: "integer",
    explanation: [
      { label: "Solve", content: "−2x ≥ 6 → x ≤ −3. Largest x = −3." },
    ],
    tags: ["algebra", "inequalities"],
    difficulty: "easy",
  },
  {
    id: "g910-cb2-2",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "How many hours are in the months of October and November combined?",
    correctAnswer: "1464",
    answerType: "integer",
    explanation: [
      { label: "Days", content: "October: 31 days. November: 30 days. Total: 61 days." },
      { label: "Hours", content: "61 × 24 = 1464 hours." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g910-cb2-3",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "In an arithmetic sequence, the first term is 23 and the seventh term is 47. What is the common difference d?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      { label: "Formula", content: "a₇ = a₁ + 6d → 47 = 23 + 6d → 6d = 24 → d = 4." },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g910-cb2-4",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "Diego is throwing a party and buys 546 pieces of candy. He distributes all candy equally, with each person (including himself) getting the same number. If the number of people present is odd, what is the smallest number of people that could be present?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      { label: "Factor", content: "546 = 2 × 3 × 7 × 13. Need odd divisor ≥ 5 (at least 4 friends + Diego)." },
      { label: "Odd divisors", content: "Odd divisors of 546 = divisors of 273 = 3 × 7 × 13: {1, 3, 7, 13, 21, 39, 91, 273}. Smallest ≥ 5: 7." },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g910-cb2-5",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "In a class of 17 students, 8 have a cat, 7 have a dog, and 3 have both. What is the probability (as a percent) that a student has a cat, given that they do not have a dog?",
    correctAnswer: "50",
    answerType: "integer",
    explanation: [
      { label: "No dog", content: "17 − 7 = 10 students don't have a dog." },
      { label: "Cat but no dog", content: "8 − 3 = 5." },
      { label: "Probability", content: "5/10 = 50%." },
    ],
    tags: ["probability", "sets"],
    difficulty: "medium",
  },
  {
    id: "g910-cb2-6",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "Four friends each picked a different non-prime positive integer. The greatest common factor of each pair of integers was 1. What is the least possible sum of the four integers?",
    correctAnswer: "39",
    answerType: "integer",
    explanation: [
      { label: "Need pairwise coprime non-primes", content: "Non-primes: 1, 4, 8, 9, 16, 25, …" },
      { label: "Best choice", content: "1, 4, 9, 25 (all pairwise coprime). Sum = 1 + 4 + 9 + 25 = 39." },
    ],
    tags: ["number theory"],
    difficulty: "hard",
  },
  {
    id: "g910-cb2-7",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "How many positive five-digit palindromes are there? (A palindrome reads the same forwards and backwards.)",
    correctAnswer: "900",
    answerType: "integer",
    explanation: [
      { label: "Structure", content: "abcba. a ∈ {1–9}: 9 choices. b ∈ {0–9}: 10. c ∈ {0–9}: 10." },
      { label: "Total", content: "9 × 10 × 10 = 900." },
    ],
    tags: ["combinatorics"],
    difficulty: "easy",
  },
  {
    id: "g910-cb2-8",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "If (x − 1)(y − 1) = 2024, what is the value of (1 − x)(1 − y)?",
    correctAnswer: "2024",
    answerType: "integer",
    explanation: [
      { label: "Factor out negatives", content: "(1−x)(1−y) = (−1)²(x−1)(y−1) = (x−1)(y−1) = 2024." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g910-cb2-9",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "ABCD is a square with side length 10 units, and point P lies on side AB. What is the area of triangle PCD, in square units?",
    correctAnswer: "50",
    answerType: "integer",
    explanation: [
      { label: "Base and height", content: "Base CD = 10. Height from P to CD = 10 (distance from AB to CD)." },
      { label: "Area", content: "(1/2)(10)(10) = 50." },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g910-cb2-10",
    sectionId: "cb-round-2",
    gradeLevel: "9-10",
    questionText:
      "If 5 cows can produce 5 gallons of milk in 5 days, how many days will it take 6 cows to produce 6 gallons of milk?",
    correctAnswer: "5",
    answerType: "integer",
    explanation: [
      { label: "Rate", content: "1 cow produces 1 gallon in 5 days." },
      { label: "6 cows, 6 gallons", content: "Each cow makes 1 gallon in 5 days. 6 cows make 6 gallons in 5 days." },
    ],
    tags: ["rates", "logic"],
    difficulty: "easy",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 3
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-cb3-1",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "How many integer values of x from 0 to 7 (inclusive) satisfy: −2x + 4 ≥ 1?",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      { label: "Solve", content: "−2x ≥ −3 → x ≤ 1.5. Integers 0–7 satisfying this: 0, 1." },
      { label: "Count", content: "2 values." },
    ],
    tags: ["algebra", "inequalities"],
    difficulty: "easy",
  },
  {
    id: "g910-cb3-2",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "As an integer, what is (2 × 10⁻⁶) ÷ (4 × 10⁻¹¹)?",
    correctAnswer: "50000",
    answerType: "integer",
    explanation: [
      { label: "Divide", content: "(2/4) × 10⁻⁶⁻⁽⁻¹¹⁾ = 0.5 × 10⁵ = 50000." },
    ],
    tags: ["arithmetic", "scientific notation"],
    difficulty: "easy",
  },
  {
    id: "g910-cb3-3",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "What is the positive difference between the median and mean of the data set: {5, 50, 46, 30, 10, 29, 33}?",
    correctAnswer: "1",
    answerType: "integer",
    explanation: [
      { label: "Sort", content: "5, 10, 29, 30, 33, 46, 50. Median = 30." },
      { label: "Mean", content: "(5+10+29+30+33+46+50)/7 = 203/7 = 29." },
      { label: "Difference", content: "30 − 29 = 1." },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g910-cb3-4",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText: "How many positive divisors does 729 have?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      { label: "Factorize", content: "729 = 3⁶." },
      { label: "Count divisors", content: "6 + 1 = 7." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g910-cb3-5",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "How many minutes does it take a clock's hour hand to move through one degree of arc?",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      { label: "Rate", content: "The hour hand moves 360° in 12 hours = 720 minutes." },
      { label: "Per degree", content: "720/360 = 2 minutes per degree." },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  {
    id: "g910-cb3-6",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "Zeno is 40 meters from his car. Every minute he walks half the remaining distance. He walks 20 m in minute 1, 10 m in minute 2, and so on. How many millimeters does he walk during the 5th minute?",
    correctAnswer: "1250",
    answerType: "integer",
    explanation: [
      { label: "Pattern", content: "Distance in minute n = 40/2ⁿ meters." },
      { label: "Minute 5", content: "40/32 = 1.25 m = 1250 mm." },
    ],
    tags: ["sequences", "unit conversion"],
    difficulty: "medium",
  },
  {
    id: "g910-cb3-7",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "A jar has red, white and blue marbles. P(red) = 1/4 and P(white) = 2/5. What is P(blue) as a percentage?",
    correctAnswer: "35",
    answerType: "integer",
    explanation: [
      { label: "Calculate", content: "P(blue) = 1 − 1/4 − 2/5 = 1 − 5/20 − 8/20 = 7/20 = 35%." },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g910-cb3-8",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "You are buying either 100 hot dogs or 60 hamburgers for n people (including yourself). Either choice distributes equally. What is the largest possible value of n?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      { label: "Divisibility", content: "n must divide both 100 and 60." },
      { label: "GCD", content: "GCD(100, 60) = 20." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g910-cb3-9",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "A cone has a diameter of 4 units and a volume of 8π cubic units. A similar cone has a diameter of 8 units and a volume of Aπ cubic units. What is A?",
    correctAnswer: "64",
    answerType: "integer",
    explanation: [
      { label: "Scale factor", content: "Diameters: 8/4 = 2. Volume scales by 2³ = 8." },
      { label: "Volume", content: "A = 8 × 8 = 64." },
    ],
    tags: ["geometry", "similarity"],
    difficulty: "medium",
  },
  {
    id: "g910-cb3-10",
    sectionId: "cb-round-3",
    gradeLevel: "9-10",
    questionText:
      "For what integer n are the roots of x² − 7x + n = 0 consecutive integers?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      { label: "Let roots be k, k+1", content: "Sum: 2k+1 = 7 → k = 3." },
      { label: "Product", content: "n = k(k+1) = 3 × 4 = 12." },
    ],
    tags: ["algebra", "quadratics"],
    difficulty: "medium",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 4
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-cb4-1",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText: "How many distinct prime factors does 84 have?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      { label: "Factorize", content: "84 = 2² × 3 × 7. Three distinct primes." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g910-cb4-2",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText: "What is 2⁶ − 2⁴?",
    correctAnswer: "48",
    answerType: "integer",
    explanation: [
      { label: "Calculate", content: "64 − 16 = 48." },
    ],
    tags: ["arithmetic", "exponents"],
    difficulty: "easy",
  },
  {
    id: "g910-cb4-3",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText:
      "Find the next term in the sequence: 1, 16, 256, 4096, …",
    correctAnswer: "65536",
    answerType: "integer",
    explanation: [
      { label: "Pattern", content: "4⁰ = 1, 4² = 16, 4⁴ = 256, 4⁶ = 4096. Next: 4⁸ = 65536." },
    ],
    tags: ["sequences", "exponents"],
    difficulty: "medium",
  },
  {
    id: "g910-cb4-4",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText:
      "Let f(x) = x⁴ − 7x³ − 3x + 10. How many negative numbers a are there such that f(a) = 0?",
    correctAnswer: "0",
    answerType: "integer",
    explanation: [
      { label: "Check sign for x < 0", content: "For negative x: x⁴ > 0, −7x³ > 0, −3x > 0, +10 > 0. So f(x) > 0 for all x < 0." },
      { label: "Conclusion", content: "No negative roots. Answer: 0." },
    ],
    tags: ["algebra", "polynomials"],
    difficulty: "hard",
  },
  {
    id: "g910-cb4-5",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText:
      "Three circles with radii 1, 2, and 3 units are each externally tangent to the other two. A triangle is formed by joining the centers. What is the area of the triangle, in square units?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      { label: "Side lengths", content: "1+2 = 3, 2+3 = 5, 1+3 = 4." },
      { label: "3-4-5 right triangle", content: "Area = (3 × 4)/2 = 6." },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },
  {
    id: "g910-cb4-6",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText:
      "There are 100 students, each taking at least a math or art class. 70 take math and 30 take both. How many take math but not art?",
    correctAnswer: "40",
    answerType: "integer",
    explanation: [
      { label: "Math only", content: "Math − both = 70 − 30 = 40." },
    ],
    tags: ["sets"],
    difficulty: "easy",
  },
  {
    id: "g910-cb4-7",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText:
      "A rectangle's length is twice its width. When its length is decreased by 4 and width increased by 6, a new rectangle with the same area is formed. What is the perimeter of the new rectangle, in units?",
    correctAnswer: "22",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "L = 2W. Area = 2W². New: (2W−4)(W+6) = 2W²." },
      { label: "Solve", content: "2W²+12W−4W−24 = 2W² → 8W = 24 → W = 3." },
      { label: "New rectangle", content: "2(3)−4 = 2, 3+6 = 9. Perimeter = 2(2+9) = 22." },
    ],
    tags: ["algebra", "geometry"],
    difficulty: "medium",
  },
  {
    id: "g910-cb4-8",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText:
      "A college has 4000 freshmen and 3320 are majoring in a STEM field. What percent of freshmen are STEM majors?",
    correctAnswer: "83",
    answerType: "integer",
    explanation: [
      { label: "Calculate", content: "3320/4000 = 0.83 = 83%." },
    ],
    tags: ["percentages"],
    difficulty: "easy",
  },
  {
    id: "g910-cb4-9",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText:
      "What is the maximum possible area, in square centimeters, of a rectangle with a perimeter of 12 centimeters?",
    correctAnswer: "9",
    answerType: "integer",
    explanation: [
      { label: "Optimize", content: "P = 2(l+w) = 12 → l+w = 6. Area = lw, maximized when l = w = 3." },
      { label: "Max area", content: "3 × 3 = 9 cm²." },
    ],
    tags: ["geometry", "optimization"],
    difficulty: "easy",
  },
  {
    id: "g910-cb4-10",
    sectionId: "cb-round-4",
    gradeLevel: "9-10",
    questionText:
      "The following two lines intersect at the point (x, y). What is xy?\n3x + 3y = 15\n2x + 6y = 22",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      { label: "From first equation", content: "x + y = 5 → x = 5 − y." },
      { label: "Substitute", content: "2(5−y) + 6y = 22 → 10 + 4y = 22 → y = 3, x = 2." },
      { label: "Product", content: "xy = 2 × 3 = 6." },
    ],
    tags: ["algebra", "systems of equations"],
    difficulty: "medium",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 5
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-cb5-1",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "At Wolffy's Hamburgers, your check comes to $56, and you leave a 15% tip. In cents, how much total do you pay?",
    correctAnswer: "6440",
    answerType: "integer",
    explanation: [
      { label: "Calculate", content: "$56 × 1.15 = $64.40 = 6440 cents." },
    ],
    tags: ["percentages", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g910-cb5-2",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "What is the smallest three-digit positive integer that can be written as the product of two consecutive positive integers?",
    correctAnswer: "110",
    answerType: "integer",
    explanation: [
      { label: "Check", content: "9 × 10 = 90 (two digits). 10 × 11 = 110 (three digits). ✓" },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g910-cb5-3",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "On the coordinate plane, the distance between (−4, 0) and (−2, −6) can be written as A√B in simplest radical form. What is A + B?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      { label: "Distance", content: "d = √((−4+2)² + (0+6)²) = √(4+36) = √40 = 2√10." },
      { label: "A + B", content: "2 + 10 = 12." },
    ],
    tags: ["coordinate geometry"],
    difficulty: "easy",
  },
  {
    id: "g910-cb5-4",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "Four numbers a, b, c, d satisfy: the average of a and b is c, the average of c and d is b, and d − a = 60. What is b − c?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      { label: "Equations", content: "(a+b)/2 = c → a+b = 2c. (c+d)/2 = b → c+d = 2b." },
      { label: "Subtract", content: "d − a = (2b−c) − (2c−b) = 3b − 3c = 3(b−c) = 60." },
      { label: "Solve", content: "b − c = 20." },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },
  {
    id: "g910-cb5-5",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "What is the area, in square units, of a triangle with side lengths 13, 14, and 15 units?",
    correctAnswer: "84",
    answerType: "integer",
    explanation: [
      { label: "Heron's formula", content: "s = (13+14+15)/2 = 21." },
      { label: "Area", content: "√(21 × 8 × 7 × 6) = √7056 = 84." },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },
  {
    id: "g910-cb5-6",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "In a sequence starting with 5, each term is the sum of the digits of the square of the previous term. (e.g., 5² = 25, digits sum to 7.) What is the 10th term?",
    correctAnswer: "16",
    answerType: "integer",
    explanation: [
      { label: "Compute terms", content: "a₁=5, a₂=7 (5²=25→2+5), a₃=13 (7²=49→4+9), a₄=16 (13²=169→1+6+9), a₅=13 (16²=256→2+5+6)." },
      { label: "Cycle", content: "From a₃ onward: 13, 16, 13, 16, … Even indices → 16, odd → 13. a₁₀ → 16." },
    ],
    tags: ["sequences", "patterns"],
    difficulty: "medium",
  },
  {
    id: "g910-cb5-7",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "If a fair coin is flipped 10 times, what is the probability (as a percent) of getting an odd number of heads?",
    correctAnswer: "50",
    answerType: "integer",
    explanation: [
      { label: "Symmetry", content: "By symmetry, P(odd heads) = P(even heads) = 50%." },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g910-cb5-8",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "Points A, B, and C are at (1, 1), (5, −2), and (1, −2). What is the perimeter of triangle ABC, in units?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      { label: "Sides", content: "AC = |1−(−2)| = 3 (vertical). BC = |5−1| = 4 (horizontal). AB = √(4²+3²) = 5." },
      { label: "Perimeter", content: "3 + 4 + 5 = 12." },
    ],
    tags: ["coordinate geometry"],
    difficulty: "easy",
  },
  {
    id: "g910-cb5-9",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "A square piece of paper is folded in half horizontally to form a rectangle. The rectangle has a perimeter of 18 inches. What is the perimeter of the original square, in inches?",
    correctAnswer: "24",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "Square side = s. Folded rectangle: s × s/2." },
      { label: "Perimeter", content: "2(s + s/2) = 3s = 18 → s = 6." },
      { label: "Square perimeter", content: "4 × 6 = 24." },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  {
    id: "g910-cb5-10",
    sectionId: "cb-round-5",
    gradeLevel: "9-10",
    questionText:
      "If x² + 4x + 5 = 0, what is the value of 10x² + 40x?",
    correctAnswer: "-50",
    answerType: "integer",
    explanation: [
      { label: "From equation", content: "x² + 4x = −5." },
      { label: "Multiply", content: "10(x² + 4x) = 10(−5) = −50." },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — ROUND 6
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-cb6-1",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "What is 1237.785 rounded to the nearest hundred?",
    correctAnswer: "1200",
    answerType: "integer",
    explanation: [
      { label: "Round", content: "The hundreds digit is 2, the tens digit is 3 (< 5), so round down to 1200." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g910-cb6-2",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText: "What is 2000 − x⁴ when x = 5?",
    correctAnswer: "1375",
    answerType: "integer",
    explanation: [
      { label: "Calculate", content: "5⁴ = 625. 2000 − 625 = 1375." },
    ],
    tags: ["arithmetic", "exponents"],
    difficulty: "easy",
  },
  {
    id: "g910-cb6-3",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "Point A is at (2, 5) and point B is at (3, 4). Point C is collinear with A and B and lies on the x-axis. What is the x-coordinate of C?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      { label: "Line through A, B", content: "Slope = (4−5)/(3−2) = −1. Equation: y − 5 = −(x − 2) → y = −x + 7." },
      { label: "x-axis", content: "y = 0: 0 = −x + 7 → x = 7." },
    ],
    tags: ["coordinate geometry"],
    difficulty: "easy",
  },
  {
    id: "g910-cb6-4",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "The greatest common divisor of x² + 50 and 4x + 2 is 6. What is the smallest positive integer x could be?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      { label: "Check x = 4", content: "x² + 50 = 66, 4x + 2 = 18. GCD(66, 18) = 6. ✓" },
    ],
    tags: ["number theory"],
    difficulty: "hard",
  },
  {
    id: "g910-cb6-5",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "Jimmy and Seth play a best-of-5 card game series (first to 3 wins). If the series lasts 5 games with Seth winning, in how many different orders could the game outcomes have occurred?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      { label: "Constraints", content: "Seth wins game 5. In games 1–4, Seth wins exactly 2 and Jimmy wins 2." },
      { label: "Count", content: "C(4, 2) = 6 arrangements of Seth's 2 wins in games 1–4." },
    ],
    tags: ["combinatorics"],
    difficulty: "medium",
  },
  {
    id: "g910-cb6-6",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "In a sequence beginning 1, 3, 2, …, each term from the 3rd onward equals the preceding term minus the term before that. What is the 10th term?",
    correctAnswer: "-1",
    answerType: "integer",
    explanation: [
      { label: "Compute", content: "a₁=1, a₂=3, a₃=2, a₄=−1, a₅=−3, a₆=−2, a₇=1, a₈=3, a₉=2, a₁₀=−1." },
      { label: "Period 6", content: "The sequence repeats with period 6. a₁₀ = a₄ = −1." },
    ],
    tags: ["sequences", "patterns"],
    difficulty: "medium",
  },
  {
    id: "g910-cb6-7",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "Apple tells the truth 60% of the time and Bailey tells the truth 70% of the time (independently). They are both 16 years old. Each is asked: 'Are you sixteen?' What is the probability (as a percent) that they give different answers?",
    correctAnswer: "46",
    answerType: "integer",
    explanation: [
      { label: "Different answers", content: "P(Apple truth, Bailey lies) + P(Apple lies, Bailey truth)." },
      { label: "Calculate", content: "0.6 × 0.3 + 0.4 × 0.7 = 0.18 + 0.28 = 0.46 = 46%." },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  {
    id: "g910-cb6-8",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "For what positive integer n are both n and n² + 2 prime?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      { label: "Check small primes", content: "n=2: n²+2=6 (not prime). n=3: n²+2=11 (prime!). n=5: n²+2=27 (not prime)." },
      { label: "Why only n=3", content: "For n>3 and prime, n is odd, so n²+2 is odd. But checking: n=7→51=3×17, n=11→123=3×41. Only n=3 works." },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g910-cb6-9",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "What is the volume, in cubic meters, of a cylinder with a height of 80/π meters and a base radius of 50 centimeters?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      { label: "Convert radius", content: "50 cm = 0.5 m." },
      { label: "Volume", content: "V = π(0.5)²(80/π) = π × 0.25 × 80/π = 20 cubic meters." },
    ],
    tags: ["geometry", "unit conversion"],
    difficulty: "medium",
  },
  {
    id: "g910-cb6-10",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "Solve for x: −4/3 + (3x + 7)/12 = 1",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      { label: "Common denominator 12", content: "−16/12 + (3x+7)/12 = 12/12." },
      { label: "Solve", content: "−16 + 3x + 7 = 12 → 3x − 9 = 12 → 3x = 21 → x = 7." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL — EXTRA QUESTIONS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g910-cbe-1",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "A car drives 630 miles on 35 gallons of gas. How many miles can it drive on 12 gallons?",
    correctAnswer: "216",
    answerType: "integer",
    explanation: [
      { label: "MPG", content: "630/35 = 18 miles per gallon." },
      { label: "Answer", content: "18 × 12 = 216 miles." },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  {
    id: "g910-cbe-2",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "Three friends spent a combined $112 at the county fair. Ross spent half the amount Joey spent, and Chandler spent $10 more than Ross. How many dollars did Joey spend?",
    correctAnswer: "51",
    answerType: "integer",
    explanation: [
      { label: "Set up", content: "Let Joey = J. Ross = J/2. Chandler = J/2 + 10." },
      { label: "Solve", content: "J + J/2 + J/2 + 10 = 112 → 2J = 102 → J = 51." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g910-cbe-3",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "The line y = 3x + 4 is reflected over the y-axis to the line y = ax + b. What is a + b?",
    correctAnswer: "1",
    answerType: "integer",
    explanation: [
      { label: "Reflect", content: "Reflecting over y-axis: replace x with −x. y = 3(−x) + 4 = −3x + 4." },
      { label: "Sum", content: "a = −3, b = 4. a + b = 1." },
    ],
    tags: ["coordinate geometry", "transformations"],
    difficulty: "easy",
  },
  {
    id: "g910-cbe-4",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "Anita rolls two fair n-sided dice (n > 5). The most probable sum of the numbers obtained is 17. What is n?",
    correctAnswer: "16",
    answerType: "integer",
    explanation: [
      { label: "Most probable sum", content: "For two n-sided dice, the most probable sum is n + 1." },
      { label: "Solve", content: "n + 1 = 17 → n = 16." },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  {
    id: "g910-cbe-5",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "There are 50 unpaired socks in a drawer: 15 pink, 15 purple, and the rest are yellow. How many socks must you take out to guarantee at least one of each color?",
    correctAnswer: "36",
    answerType: "integer",
    explanation: [
      { label: "Yellow count", content: "50 − 15 − 15 = 20 yellow." },
      { label: "Worst case", content: "You could draw all 20 yellow + all 15 of one other color = 35 before getting all three colors." },
      { label: "Guarantee", content: "35 + 1 = 36." },
    ],
    tags: ["combinatorics", "pigeonhole"],
    difficulty: "medium",
  },
  {
    id: "g910-cbe-6",
    sectionId: "cb-round-6",
    gradeLevel: "9-10",
    questionText:
      "The number 0.375 can be expressed as a fraction n/d where n and d are relatively prime integers. What is n + d?",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      { label: "Convert", content: "0.375 = 375/1000 = 3/8." },
      { label: "Sum", content: "n = 3, d = 8. n + d = 11." },
    ],
    tags: ["fractions"],
    difficulty: "easy",
  },
];
