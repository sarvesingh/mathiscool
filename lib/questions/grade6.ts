import { Question } from "../types";

export const grade6Questions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // MENTAL MATH (8 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-mm-1",
    sectionId: "mental-math",
    gradeLevel: "6",
    questionText:
      "What is the mean of the set of integers from eleven to fifteen inclusive?",
    correctAnswer: "13",
    answerType: "integer",
    explanation: [
      { label: "List the integers", content: "11, 12, 13, 14, 15." },
      {
        label: "Find the mean",
        content: "Sum = 65, count = 5, mean = 65 / 5 = 13.",
      },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g6-mm-2",
    sectionId: "mental-math",
    gradeLevel: "6",
    questionText:
      "Phoebe and Monica are going to evenly split the cost of a $3,500 car. How many dollars will Phoebe pay for her share of the car?",
    correctAnswer: "1750",
    answerType: "integer",
    explanation: [
      { label: "Split evenly", content: "$3,500 / 2 = $1,750." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-mm-3",
    sectionId: "mental-math",
    gradeLevel: "6",
    questionText:
      "What is the maximum number of non-overlapping circles of radius 1 cm that can fit inside a 2 cm by 15 cm rectangle?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      {
        label: "Determine circle size",
        content:
          "Each circle has diameter 2 cm, same as the rectangle's height.",
      },
      {
        label: "Fit along the length",
        content: "15 / 2 = 7.5, so at most 7 circles fit side by side.",
      },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },
  {
    id: "g6-mm-4",
    sectionId: "mental-math",
    gradeLevel: "6",
    questionText: "How many prime numbers are between 24 and 32?",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      {
        label: "Check each number",
        content:
          "25 (5 squared), 26 (even), 27 (3 cubed), 28 (even), 29 (prime), 30 (even), 31 (prime).",
      },
      {
        label: "Count primes",
        content: "29 and 31 are prime, so there are 2 prime numbers.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g6-mm-5",
    sectionId: "mental-math",
    gradeLevel: "6",
    questionText: "What is three-fourths of 12 plus four-thirds of 12?",
    correctAnswer: "25",
    answerType: "integer",
    explanation: [
      {
        label: "Compute each part",
        content: "(3/4) * 12 = 9 and (4/3) * 12 = 16.",
      },
      { label: "Add", content: "9 + 16 = 25." },
    ],
    tags: ["fractions", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-mm-6",
    sectionId: "mental-math",
    gradeLevel: "6",
    questionText:
      "Hamta left home for school at 7:30 AM and returned home on the same day at 3:45 PM. How many minutes was Hamta away from home?",
    correctAnswer: "495",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate hours",
        content:
          "7:30 AM to 3:30 PM = 8 hours. Plus 15 more minutes to 3:45 PM.",
      },
      {
        label: "Convert to minutes",
        content: "8 * 60 + 15 = 495 minutes.",
      },
    ],
    tags: ["time", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-mm-7",
    sectionId: "mental-math",
    gradeLevel: "6",
    questionText:
      "The first three terms of a geometric sequence are 112, 56, and 28. Let term number N be the first term in the sequence that is less than 1. What is N?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Find the ratio",
        content: "Common ratio r = 56/112 = 1/2.",
      },
      {
        label: "List terms",
        content:
          "112, 56, 28, 14, 7, 3.5, 1.75, 0.875. Term 8 (0.875) is the first less than 1.",
      },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  {
    id: "g6-mm-8",
    sectionId: "mental-math",
    gradeLevel: "6",
    questionText:
      "Min has four standard dice (red, yellow, green, blue). If she rolls them all together, in how many ways can three of the dice show the same number while the fourth die shows something different?",
    correctAnswer: "120",
    answerType: "integer",
    explanation: [
      {
        label: "Choose the matching number",
        content: "6 choices for the number shown by three dice.",
      },
      {
        label: "Choose which die is different",
        content: "C(4,1) = 4 ways to pick the odd die out.",
      },
      {
        label: "Choose the different number",
        content: "5 remaining numbers for the fourth die.",
      },
      { label: "Multiply", content: "6 * 4 * 5 = 120 ways." },
    ],
    tags: ["combinatorics"],
    difficulty: "hard",
  },

  // ═══════════════════════════════════════════════════════════════════
  // INDIVIDUAL CONTEST (40 questions, skipping those with figures/garbled notation)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-ind-1",
    sectionId: "individual",
    gradeLevel: "6",
    questionText: "How many nickels make 85 cents?",
    correctAnswer: "17",
    answerType: "integer",
    explanation: [
      { label: "Divide", content: "85 / 5 = 17 nickels." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-2",
    sectionId: "individual",
    gradeLevel: "6",
    questionText: "What is the largest 2-digit multiple of 10?",
    correctAnswer: "90",
    answerType: "integer",
    explanation: [
      {
        label: "Find the largest multiple",
        content:
          "Two-digit numbers go up to 99. 99 / 10 = 9.9, so the largest whole multiple is 10 * 9 = 90.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-3",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "The mean of three numbers is 20. If two of the numbers are 8 and 13, what is the third number?",
    correctAnswer: "39",
    answerType: "integer",
    explanation: [
      {
        label: "Find the total",
        content: "Mean = 20, so sum of three numbers = 20 * 3 = 60.",
      },
      { label: "Find the third", content: "60 - 8 - 13 = 39." },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-4",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "Guillermo has one white hat, two blue hats, and three brown hats and he randomly selects one to wear on a given day. As a reduced common fraction, the probability that he takes a blue hat is A/B. What is A + B?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      {
        label: "Count hats",
        content: "Total = 1 + 2 + 3 = 6 hats. Blue = 2.",
      },
      {
        label: "Simplify",
        content: "P(blue) = 2/6 = 1/3. A + B = 1 + 3 = 4.",
      },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-5",
    sectionId: "individual",
    gradeLevel: "6",
    questionText: "Evaluate: 1111 - 111 + 11 - 1",
    correctAnswer: "1010",
    answerType: "integer",
    explanation: [
      {
        label: "Compute step by step",
        content:
          "1111 - 111 = 1000. 1000 + 11 = 1011. 1011 - 1 = 1010.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-6",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "How many square inches are in the area of a rectangle with a length of 7 inches and a width of 12 inches?",
    correctAnswer: "84",
    answerType: "integer",
    explanation: [
      {
        label: "Area formula",
        content: "Area = length * width = 7 * 12 = 84 square inches.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },
  // Skipping ind-7: references a grid/figure ("In the grid of squares shown below...")
  {
    id: "g6-ind-8",
    sectionId: "individual",
    gradeLevel: "6",
    questionText: "How many meters are in 2.3 kilometers?",
    correctAnswer: "2300",
    answerType: "integer",
    explanation: [
      {
        label: "Convert",
        content: "1 km = 1000 m, so 2.3 * 1000 = 2300 meters.",
      },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-9",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "A dish has 4 green marbles, 7 clear marbles, and 8 orange marbles. If marbles are randomly taken from the dish, what is the minimum number needed to be taken that would guarantee at least one of each color?",
    correctAnswer: "16",
    answerType: "integer",
    explanation: [
      {
        label: "Worst case",
        content:
          "You could draw all 8 orange and all 7 clear (15 marbles) before getting a green.",
      },
      {
        label: "Guarantee",
        content:
          "The 16th marble must be green, so 16 guarantees one of each color.",
      },
    ],
    tags: ["combinatorics", "pigeonhole"],
    difficulty: "medium",
  },
  {
    id: "g6-ind-10",
    sectionId: "individual",
    gradeLevel: "6",
    questionText: "Solve the equation for x: 6x - 21 = 69",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Isolate x",
        content: "6x = 69 + 21 = 90. So x = 90 / 6 = 15.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-11",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "Lincoln can wash 12 plates in 3 minutes. In minutes, how long does it take him to wash 56 plates?",
    correctAnswer: "14",
    answerType: "integer",
    explanation: [
      {
        label: "Find rate",
        content: "12 plates / 3 min = 4 plates/min.",
      },
      { label: "Compute time", content: "56 / 4 = 14 minutes." },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-12",
    sectionId: "individual",
    gradeLevel: "6",
    questionText: "What percent of 25 is 10?",
    correctAnswer: "40",
    answerType: "integer",
    explanation: [
      { label: "Calculate", content: "(10 / 25) * 100 = 40%." },
    ],
    tags: ["percent"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-13",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "What is the 6th term in the arithmetic sequence whose first three terms are 8, 31, and 54?",
    correctAnswer: "123",
    answerType: "integer",
    explanation: [
      { label: "Find common difference", content: "d = 31 - 8 = 23." },
      {
        label: "Use formula",
        content: "a_6 = 8 + (6-1) * 23 = 8 + 115 = 123.",
      },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-14",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "A number is randomly selected from the integers 1 through 20. As a percent, what is the probability that the selected number is larger than 16?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      {
        label: "Count favorable outcomes",
        content: "Numbers larger than 16: 17, 18, 19, 20 = 4 numbers.",
      },
      { label: "Calculate", content: "4/20 = 1/5 = 20%." },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  // Skipping ind-15: references a figure ("How many ways are there to draw a path from A to B ... in the figure shown")
  {
    id: "g6-ind-16",
    sectionId: "individual",
    gradeLevel: "6",
    questionText: "What is the largest prime factor of 104?",
    correctAnswer: "13",
    answerType: "integer",
    explanation: [
      {
        label: "Factor",
        content: "104 = 2 * 52 = 2 * 2 * 26 = 2 * 2 * 2 * 13 = 2^3 * 13.",
      },
      {
        label: "Identify largest prime",
        content: "The prime factors are 2 and 13. Largest is 13.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  // Skipping ind-17: garbled fraction notation ("13 + 24" doesn't clearly convey the original problem with "2/3" and "13/24")
  // Skipping ind-18: "What is the median of the following set of numbers?" — set is listed separately on line 282, let's include it
  {
    id: "g6-ind-18",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "What is the median of the following set of numbers? 11, 6, 17, 9, 12, 4, 1, 25",
    correctAnswer: "10",
    answerType: "integer",
    explanation: [
      { label: "Sort", content: "1, 4, 6, 9, 11, 12, 17, 25." },
      {
        label: "Find median",
        content:
          "8 values, so median is average of 4th and 5th: (9 + 11) / 2 = 10.",
      },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-19",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "What is the smallest integer solution to the inequality 19 < 2x + 6?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      {
        label: "Solve",
        content: "19 < 2x + 6 => 13 < 2x => x > 6.5.",
      },
      {
        label: "Smallest integer",
        content: "The smallest integer greater than 6.5 is 7.",
      },
    ],
    tags: ["algebra", "inequalities"],
    difficulty: "medium",
  },
  {
    id: "g6-ind-20",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "The area of a circle with diameter 10 inches is A*pi in^2. What is A?",
    correctAnswer: "25",
    answerType: "integer",
    explanation: [
      { label: "Find radius", content: "Radius = 10 / 2 = 5 inches." },
      {
        label: "Area formula",
        content: "Area = pi * r^2 = pi * 25 = 25*pi. So A = 25.",
      },
    ],
    tags: ["geometry", "circles"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-21",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "How many ways are there to arrange the letters in the word CROW, if C must be the third letter?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      {
        label: "Fix C in position 3",
        content: "The word is _ _ C _.",
      },
      {
        label: "Arrange remaining",
        content:
          "R, O, W can go in the 3 remaining spots: 3! = 6 ways.",
      },
    ],
    tags: ["combinatorics"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-22",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "Let set A = {9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99}, set B = {5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95}, and set C = {15, 30, 45, 60, 75, 90}. As a reduced common fraction, the probability that a randomly chosen number from set A is also a member of both sets B and C is P/Q. What is P + Q?",
    correctAnswer: "13",
    answerType: "integer",
    explanation: [
      {
        label: "Find A intersect B intersect C",
        content:
          "Numbers in A that are also in B and C must be multiples of 9, 5, and 15 (i.e., multiples of 45). From A: 45 and 90.",
      },
      {
        label: "Calculate probability",
        content:
          "2 out of 11 elements in A. P/Q = 2/11. P + Q = 2 + 11 = 13.",
      },
    ],
    tags: ["sets", "probability"],
    difficulty: "medium",
  },
  {
    id: "g6-ind-23",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "What is the sum of the distinct prime factors of the number 2025?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Factor 2025",
        content: "2025 = 5 * 405 = 5 * 5 * 81 = 5^2 * 3^4.",
      },
      {
        label: "Sum distinct primes",
        content: "Distinct prime factors are 3 and 5. Sum = 3 + 5 = 8.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g6-ind-24",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "Leon takes 125 seconds to complete one lap on the track at school. Ayanna runs at a rate that is 5/4 times as fast as Leon. How many seconds does it take Ayanna to complete one lap on the same track?",
    correctAnswer: "100",
    answerType: "integer",
    explanation: [
      {
        label: "Faster means less time",
        content:
          "If Ayanna is 5/4 as fast, she takes 4/5 the time.",
      },
      { label: "Calculate", content: "125 * (4/5) = 100 seconds." },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  // Skipping ind-25: references a figure ("In centimeters, what is the length of AB in the figure?")
  // Skipping ind-26: "cm" figure reference
  {
    id: "g6-ind-27",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "The Fibonacci Sequence is 1, 1, 2, 3, 5, 8, and so on. A different increasing sequence (the \"New Sequence\") has 10 as its first term. The second term in the New Sequence results from adding the first term in the Fibonacci Sequence to the first term of the New Sequence. The third term results from adding the second Fibonacci term to the second New Sequence term. If this pattern continues, what is the ninth term of the New Sequence?",
    correctAnswer: "64",
    answerType: "integer",
    explanation: [
      {
        label: "Build the sequence",
        content:
          "Fib: 1, 1, 2, 3, 5, 8, 13, 21. New: 10, 11, 12, 14, 17, 22, 30, 43, 64.",
      },
      {
        label: "Each step",
        content:
          "New[n+1] = New[n] + Fib[n]. The 9th term is 43 + 21 = 64.",
      },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  // Skipping ind-28: references a figure ("What is the largest possible number..." answer 17 cm / A+B=46 — but the expression references a figure for Q26 about AB length)
  {
    id: "g6-ind-28",
    sectionId: "individual",
    gradeLevel: "6",
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
        label: "Minimize the other 4",
        content:
          "Smallest 4 distinct positive integers: 1 + 2 + 3 + 4 = 10.",
      },
      { label: "Maximize the largest", content: "70 - 10 = 60." },
    ],
    tags: ["statistics"],
    difficulty: "medium",
  },
  {
    id: "g6-ind-29",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "The lengths of two parallel sides of square ABCD are multiplied by 1.4 and the lengths of the other two parallel sides are multiplied by 1.6 to create rectangle EFGH. As a reduced common fraction, the ratio of the area of rectangle EFGH to the area of square ABCD is P/Q. What is P + Q?",
    correctAnswer: "81",
    answerType: "integer",
    explanation: [
      {
        label: "Compute area ratio",
        content:
          "New area / old area = 1.4 * 1.6 = 2.24 = 224/100 = 56/25.",
      },
      { label: "Sum", content: "P + Q = 56 + 25 = 81." },
    ],
    tags: ["geometry", "ratios"],
    difficulty: "medium",
  },
  {
    id: "g6-ind-30",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "Nayeli has 1.5 times as many dimes as nickels and the value of her dimes and nickels is $4.40. How many nickels does she have?",
    correctAnswer: "22",
    answerType: "integer",
    explanation: [
      {
        label: "Set up equation",
        content:
          "Let n = nickels. Dimes = 1.5n. Value: 5n + 10(1.5n) = 440 cents.",
      },
      {
        label: "Solve",
        content: "5n + 15n = 440 => 20n = 440 => n = 22.",
      },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },
  {
    id: "g6-ind-31",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "A bathtub takes 6 minutes to fill up when the drain is closed and 10 minutes to fill up when the drain is open. In minutes, how long does it take to empty a full tub?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Find drain rate",
        content:
          "Fill rate = 1/6 tub/min. Net rate with drain open = 1/10 tub/min. Drain rate = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15 tub/min.",
      },
      {
        label: "Time to empty",
        content: "1 / (1/15) = 15 minutes.",
      },
    ],
    tags: ["rates"],
    difficulty: "hard",
  },
  {
    id: "g6-ind-32",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "The base-10 number 279 = 139 in base b, where b > 0. What is the value of b?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Convert base-b to base-10",
        content: "139 in base b = 1*b^2 + 3*b + 9.",
      },
      {
        label: "Solve",
        content:
          "b^2 + 3b + 9 = 279 => b^2 + 3b - 270 = 0 => (b + 18)(b - 15) = 0 => b = 15.",
      },
    ],
    tags: ["number bases"],
    difficulty: "hard",
  },
  {
    id: "g6-ind-33",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "At a summer ping pong academy for teenagers, 1/7 of the residents are left-handed and 6/7 are right-handed. Exactly 1/3 of the left-handed residents and 3/10 of the right-handed residents use a red paddle. What is the smallest possible number of residents at the academy?",
    correctAnswer: "105",
    answerType: "integer",
    explanation: [
      {
        label: "Find constraints",
        content:
          "Total N must be divisible by 7 (for 1/7 split). Left = N/7, Right = 6N/7.",
      },
      {
        label: "Red paddle constraints",
        content:
          "N/7 must be divisible by 3, so N divisible by 21. 6N/7 must be divisible by 10, so 6N divisible by 70. Since gcd(6,70)=2, N must be divisible by 35.",
      },
      {
        label: "Smallest N",
        content: "LCM(21, 35) = 105.",
      },
    ],
    tags: ["number theory", "fractions"],
    difficulty: "hard",
  },
  {
    id: "g6-ind-34",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "What is the mean of all integers that are 6 more than 55 times their reciprocal?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      {
        label: "Set up equation",
        content:
          "n = 6 + 55/n => n^2 = 6n + 55 => n^2 - 6n - 55 = 0.",
      },
      {
        label: "Solve",
        content: "(n - 11)(n + 5) = 0 => n = 11 or n = -5.",
      },
      {
        label: "Find mean",
        content: "Mean = (11 + (-5)) / 2 = 6 / 2 = 3.",
      },
    ],
    tags: ["algebra"],
    difficulty: "hard",
  },
  {
    id: "g6-ind-35",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "A data set consists of 5 positive integers, 4 of which are distinct from each other and one that is the same as one of the 4 distinct integers. The mean and the mode of the data set are both 9. What is the positive difference between the greatest possible range and the smallest possible range of a data set that meets these conditions?",
    correctAnswer: "18",
    answerType: "integer",
    explanation: [
      {
        label: "Setup",
        content:
          "Sum = 45, mode = 9 (so 9 appears exactly twice). Four distinct values plus one copy of 9.",
      },
      {
        label: "Greatest range",
        content:
          "Minimize the minimum: {1, 9, 9, 10, 16} => range = 16 - 1 = 15. Or try {1, 2, 9, 9, 24} => range = 23. Check: need 4 values distinct from each other with 9 repeated. {1, 9, 9, 11, 15} => range 14. Best: {1, 2, 9, 9, 24} => range 23.",
      },
      {
        label: "Smallest range",
        content:
          "Minimize spread: {7, 8, 9, 9, 12} => range = 5. Or {8, 9, 9, 10, 9}? No, 9 can only appear twice. {7, 9, 9, 10, 10}? Mode would be ambiguous. {7, 8, 9, 9, 12} => range 5. Difference = 23 - 5 = 18.",
      },
    ],
    tags: ["statistics"],
    difficulty: "hard",
  },
  {
    id: "g6-ind-36",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "Josue and Felicity take turns rolling a fair 12-sided die with faces numbered 1 through 12. The first player to roll an odd prime number is the winner of the game. If Felicity goes first, as a reduced common fraction, the probability that she wins the game is A/B. What is A + B?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Find probability of rolling odd prime",
        content:
          "Odd primes up to 12: 3, 5, 7, 11 => 4 out of 12 = 1/3.",
      },
      {
        label: "Geometric series",
        content:
          "P(Felicity wins) = (1/3) + (2/3)^2*(1/3) + ... = (1/3) / (1 - 4/9) = (1/3)*(9/5) = 3/5.",
      },
      { label: "Sum", content: "A + B = 3 + 5 = 8." },
    ],
    tags: ["probability"],
    difficulty: "hard",
  },
  {
    id: "g6-ind-37",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "How many 5-digit positive integers can be created using the digits 2, 3, 4, 5, 6, 7, and 8, such that all 5 digits in a given integer are different and no two even digits may be next to each other?",
    correctAnswer: "576",
    answerType: "integer",
    explanation: [
      {
        label: "Identify digits",
        content: "Odd: {3, 5, 7} (3 digits). Even: {2, 4, 6, 8} (4 digits).",
      },
      {
        label: "Case 1: 3 odd + 2 even",
        content:
          "Arrange 3 odd in positions: 3! = 6. Place 2 even in 4 gaps: C(4,2) * P(4,2) = 6 * 12 = 72. Total: 6 * 72 = 432.",
      },
      {
        label: "Case 2: 2 odd + 3 even",
        content:
          "Choose 2 odd: C(3,2) = 3, arrange: 2! = 2. Choose 3 even from 4: C(4,3) = 4, arrange in 3 gaps: 3! = 6. Total: 3 * 2 * 4 * 6 = 144.",
      },
      { label: "Grand total", content: "432 + 144 = 576." },
    ],
    tags: ["combinatorics"],
    difficulty: "hard",
  },
  // Skipping ind-38: references a figure (AB = BC = CD = BD = 9 cm, AB perp BC, area of triangle BCE)
  {
    id: "g6-ind-39",
    sectionId: "individual",
    gradeLevel: "6",
    questionText:
      "Two real numbers from 1 to 6, inclusive, are chosen at random. As a percent, what is the probability that the positive difference between the two numbers is greater than 1?",
    correctAnswer: "64",
    answerType: "integer",
    explanation: [
      {
        label: "Geometric probability",
        content:
          "Sample space is a 5*5 square (side 5, from 1 to 6), area = 25. Favorable region: |x - y| > 1.",
      },
      {
        label: "Calculate favorable area",
        content:
          "Unfavorable region (|x-y| <= 1) is a band of width 2 along the diagonal. Area of unfavorable = 25 - 2*(1/2)*(4)*(4) = 25 - 16 = 9. So favorable = 25 - 9 = 16.",
      },
      {
        label: "Result",
        content: "P = 16/25 = 64%.",
      },
    ],
    tags: ["probability", "geometry"],
    difficulty: "hard",
  },
  // Skipping ind-40: references a figure ("Each of the letters A, B, C, D, E, F and G in the figure shown...")

  // ═══════════════════════════════════════════════════════════════════
  // TEAM MULTIPLE CHOICE (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  // Skipping tmc-1, tmc-2, tmc-3: reference a coordinate grid/figure with points A and B
  {
    id: "g6-tmc-4",
    sectionId: "team-mc",
    gradeLevel: "6",
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
      {
        label: "Divide",
        content: "60 / 7 = 8 remainder 4. Answer: B.",
      },
    ],
    tags: ["arithmetic", "remainders"],
    difficulty: "easy",
  },
  {
    id: "g6-tmc-5",
    sectionId: "team-mc",
    gradeLevel: "6",
    questionText:
      "When A is divided by 11, the remainder is 9. When A is divided by 13, the remainder is 3. What is the largest 2-digit value of A?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "20", value: "A" },
      { label: "29", value: "B" },
      { label: "31", value: "C" },
      { label: "42", value: "D" },
      { label: "84", value: "E" },
    ],
    explanation: [
      {
        label: "Find pattern",
        content:
          "A mod 11 = 9: A in {9, 20, 31, 42, 53, 64, 75, 86, 97, ...}. A mod 13 = 3: A in {3, 16, 29, 42, 55, 68, 81, 94, ...}.",
      },
      {
        label: "Find overlap",
        content:
          "Common values: 42, then next is 42 + LCM(11,13) = 42 + 143 = 185 (3 digits). Largest 2-digit is 42. Answer: D.",
      },
    ],
    tags: ["number theory", "remainders"],
    difficulty: "medium",
  },
  {
    id: "g6-tmc-6",
    sectionId: "team-mc",
    gradeLevel: "6",
    questionText: "What is the remainder when 2^2025 is divided by 40?",
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
      {
        label: "Find the cycle",
        content:
          "Powers of 2 mod 40: 2^3=8, 2^4=16, 2^5=32, 2^6=24, 2^7=8, ... Cycle of length 4 starting at 2^3.",
      },
      {
        label: "Compute",
        content:
          "2025 - 3 = 2022. 2022 mod 4 = 2. So 2^2025 mod 40 = same as 2^5 mod 40 = 32. Answer: E.",
      },
    ],
    tags: ["number theory", "modular arithmetic"],
    difficulty: "hard",
  },
  {
    id: "g6-tmc-7",
    sectionId: "team-mc",
    gradeLevel: "6",
    questionText: "Solve for x: 10x - 7 = 53",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "-6", value: "A" },
      { label: "-4.6", value: "B" },
      { label: "6", value: "C" },
      { label: "7", value: "D" },
      { label: "9", value: "E" },
    ],
    explanation: [
      {
        label: "Solve",
        content: "10x = 53 + 7 = 60. x = 60 / 10 = 6. Answer: C.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  // Skipping tmc-8: Solve the equation C = 5/9(F - 32) for F — garbled fraction notation in the extracted text
  {
    id: "g6-tmc-9",
    sectionId: "team-mc",
    gradeLevel: "6",
    questionText:
      "If x + 3/y = 1/7 and y + 3/x = 84, what is the value of the product xy?",
    correctAnswer: "E",
    answerType: "multiple-choice",
    choices: [
      { label: "-3", value: "A" },
      { label: "sqrt(2)", value: "B" },
      { label: "sqrt(3)", value: "C" },
      { label: "2", value: "D" },
      { label: "3", value: "E" },
    ],
    explanation: [
      {
        label: "Manipulate equations",
        content:
          "From equation 1: (xy + 3)/y = 1/7, so xy + 3 = y/7. From equation 2: (xy + 3)/x = 84, so xy + 3 = 84x.",
      },
      {
        label: "Solve",
        content:
          "Setting equal: y/7 = 84x => y = 588x. Substitute: x + 3/(588x) = 1/7. Multiply by 588x: 588x^2 + 3 = 84x => 588x^2 - 84x + 3 = 0 => 196x^2 - 28x + 1 = 0 => (14x - 1)^2 = 0 => x = 1/14. Then y = 588/14 = 42. xy = 42/14 = 3. Answer: E.",
      },
    ],
    tags: ["algebra"],
    difficulty: "hard",
  },
  {
    id: "g6-tmc-10",
    sectionId: "team-mc",
    gradeLevel: "6",
    questionText:
      "Given a^2 - b^2 = 4 and a + b = 116, what is the value of a^2 - b^3?",
    correctAnswer: "E",
    answerType: "multiple-choice",
    choices: [
      { label: "536", value: "A" },
      { label: "664", value: "B" },
      { label: "728", value: "C" },
      { label: "856", value: "D" },
      { label: "Answer not given", value: "E" },
    ],
    explanation: [
      {
        label: "Use difference of squares",
        content:
          "a^2 - b^2 = (a+b)(a-b) = 4. Since a + b = 116: 116(a - b) = 4 => a - b = 1/29.",
      },
      {
        label: "Find a and b",
        content:
          "a = (116 + 1/29)/2 = 1682.5/29. b = (116 - 1/29)/2 = 1681.5/29. These are not integers, so a^2 - b^3 is not one of the given integer choices. Answer: E (Answer not given).",
      },
    ],
    tags: ["algebra"],
    difficulty: "hard",
  },

  // ═══════════════════════════════════════════════════════════════════
  // TEAM CONTEST (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-team-1",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "Evaluate: (3 - 6)^3 / (-9) - 17 + ((-5)^2 - 1)",
    correctAnswer: "10",
    answerType: "integer",
    explanation: [
      {
        label: "Compute powers",
        content: "(3-6)^3 = (-3)^3 = -27. (-5)^2 = 25.",
      },
      {
        label: "Evaluate step by step",
        content:
          "-27 / (-9) = 3. Then 3 - 17 + (25 - 1) = 3 - 17 + 24 = 10.",
      },
    ],
    tags: ["arithmetic", "order of operations"],
    difficulty: "easy",
  },
  {
    id: "g6-team-2",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "In the 8th grade class of Park Middle School, there are 95 students. Two-fifths of these students have a dog. Forty-one of them have a cat and 27 of them have both a dog and a cat. How many of the 95 students don't have a cat or a dog?",
    correctAnswer: "43",
    answerType: "integer",
    explanation: [
      {
        label: "Use inclusion-exclusion",
        content: "Dogs = 2/5 * 95 = 38. Cats = 41. Both = 27.",
      },
      {
        label: "At least one",
        content: "38 + 41 - 27 = 52 have at least one pet.",
      },
      { label: "Neither", content: "95 - 52 = 43." },
    ],
    tags: ["sets"],
    difficulty: "easy",
  },
  {
    id: "g6-team-3",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "How many positive prime numbers less than 50 have 7 as at least one of their digits?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      {
        label: "List primes with digit 7",
        content:
          "Primes < 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.",
      },
      {
        label: "Filter for digit 7",
        content: "7, 17, 37, 47 => 4 primes.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g6-team-4",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "As a reduced common fraction, the median of the following data set is A/B. What is A + B? {7/10, 1/2, 2/3, 2/5, 1/3}",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      {
        label: "Convert and sort",
        content:
          "1/3 ~ 0.333, 2/5 = 0.4, 1/2 = 0.5, 2/3 ~ 0.667, 7/10 = 0.7.",
      },
      {
        label: "Find median",
        content:
          "Middle value (3rd of 5) is 1/2. A + B = 1 + 2 = 3.",
      },
    ],
    tags: ["statistics", "fractions"],
    difficulty: "medium",
  },
  {
    id: "g6-team-5",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "Tanishi has $4.37 in coins that consist only of quarters, dimes, nickels, and pennies. She has one nickel among her coins. What is the smallest total number of coins she could have?",
    correctAnswer: "22",
    answerType: "integer",
    explanation: [
      {
        label: "Use largest coins first",
        content: "Start with 1 nickel ($0.05). Remaining: $4.32.",
      },
      {
        label: "Maximize quarters",
        content:
          "16 quarters = $4.00. Remaining: $4.32 - $4.00 = $0.32 = 3 dimes + 2 pennies.",
      },
      {
        label: "Count",
        content:
          "16 quarters + 3 dimes + 1 nickel + 2 pennies = 22 coins.",
      },
    ],
    tags: ["arithmetic", "optimization"],
    difficulty: "medium",
  },
  // Skipping team-6: references a figure (AB = 10 cm, BC = 17 cm, CD = 25 cm, BE = 8 cm with figure)
  {
    id: "g6-team-7",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "A particular number series increases alternately by adding 10 and then by multiplying by 1/2. For example, if the first term in the series is 6, the next four terms would be 16, 8, 18, 9, and so on. What is the smallest possible integer in the series if the first term is 330?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Generate the series",
        content:
          "330 -> +10 -> 340 -> *1/2 -> 170 -> +10 -> 180 -> *1/2 -> 90 -> +10 -> 100 -> *1/2 -> 50 -> +10 -> 60 -> *1/2 -> 30 -> +10 -> 40 -> *1/2 -> 20 -> +10 -> 30 -> *1/2 -> 15 -> +10 -> 25 -> *1/2 -> 12.5 (not integer).",
      },
      {
        label: "Smallest integer",
        content: "The smallest integer that appears is 15.",
      },
    ],
    tags: ["sequences"],
    difficulty: "hard",
  },
  {
    id: "g6-team-8",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "If N is a perfect cube and a factor of 11!, what is the largest value of N?",
    correctAnswer: "1728",
    answerType: "integer",
    explanation: [
      {
        label: "Factor 11!",
        content: "11! = 2^8 * 3^4 * 5^2 * 7 * 11.",
      },
      {
        label: "Largest cube factor",
        content:
          "Take the largest multiple of 3 for each exponent: 2^6 * 3^3 = 64 * 27 = 1728.",
      },
    ],
    tags: ["number theory"],
    difficulty: "hard",
  },
  {
    id: "g6-team-9",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "Let A and B be two distinct three-digit positive integers, such that A + B > 1960, A > B, and A - B = D. What is the median of all possible values of D?",
    correctAnswer: "19",
    answerType: "integer",
    explanation: [
      {
        label: "Find constraints",
        content:
          "A and B are 3-digit (100-999). A + B > 1960, A > B, A - B = D. Max A + B = 999 + 998 = 1997.",
      },
      {
        label: "Find range of D",
        content:
          "Since A + B > 1960 and both 3-digit: min A + B = 1961 with A > B. If A + B = 1961, min D = 1 (A=981, B=980) to max D = 37 (A=999, B=962). As A + B increases, D ranges shift. All possible D values: 1 through 37. Median of 1 to 37 = 19.",
      },
    ],
    tags: ["number theory", "statistics"],
    difficulty: "hard",
  },
  {
    id: "g6-team-10",
    sectionId: "team",
    gradeLevel: "6",
    questionText:
      "In a hand of 8 cards there are 4 hearts and 4 clubs. The cards are randomly selected one at a time without replacement and laid on a table. As a reduced common fraction, the probability that the 6th card laid on the table is a heart is A/B. What is A + B?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      {
        label: "Use symmetry",
        content:
          "By symmetry, each card position is equally likely to be any card.",
      },
      {
        label: "Calculate",
        content:
          "P(6th card is a heart) = 4/8 = 1/2. A + B = 1 + 2 = 3.",
      },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },

  // ═══════════════════════════════════════════════════════════════════
  // TRIPLE JUMP (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-tj-1",
    sectionId: "triple-jump",
    gradeLevel: "6",
    questionText:
      "Evaluate the following expression when a = 1 and b = 4: 5a^2*b^2 + 7a*b^3",
    correctAnswer: "528",
    answerType: "integer",
    explanation: [
      {
        label: "Substitute",
        content:
          "5(1^2)(4^2) + 7(1)(4^3) = 5(1)(16) + 7(1)(64) = 80 + 448.",
      },
      { label: "Sum", content: "80 + 448 = 528." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g6-tj-2",
    sectionId: "triple-jump",
    gradeLevel: "6",
    questionText:
      "One gallon is equivalent to about 3.78541 liters. To the nearest integer number of milliliters, how many milliliters are in one gallon?",
    correctAnswer: "3785",
    answerType: "integer",
    explanation: [
      {
        label: "Convert",
        content:
          "3.78541 liters * 1000 ml/liter = 3785.41 ml, which rounds to 3785 ml.",
      },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g6-tj-3",
    sectionId: "triple-jump",
    gradeLevel: "6",
    questionText:
      "Horace takes 6 minutes to walk a quarter mile home from school. Horace's average rate of walking home from school is A.B miles per hour. What is A + B?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      {
        label: "Find rate",
        content:
          "Distance = 1/4 mile in 6 minutes = 1/10 hour.",
      },
      {
        label: "Calculate mph",
        content:
          "Rate = (1/4) / (1/10) = 10/4 = 2.5 mph. A + B = 2 + 5 = 7.",
      },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  {
    id: "g6-tj-4",
    sectionId: "triple-jump",
    gradeLevel: "6",
    questionText:
      "The first three terms of a geometric sequence are 1458, 486, and 162. What is the 7th term in the sequence?",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      { label: "Find ratio", content: "r = 486/1458 = 1/3." },
      {
        label: "Calculate 7th term",
        content: "a_7 = 1458 * (1/3)^6 = 1458 / 729 = 2.",
      },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  // Skipping tj-5: references a rectangular grid figure with segment AB
  {
    id: "g6-tj-6",
    sectionId: "triple-jump",
    gradeLevel: "6",
    questionText:
      "A pair of standard dice are rolled. As a reduced common fraction, the probability that the sum of the two numbers showing is greater than 6 and less than 10 is A/B. What is A + B?",
    correctAnswer: "17",
    answerType: "integer",
    explanation: [
      {
        label: "Count favorable",
        content:
          "Sums 7, 8, 9 have 6 + 5 + 4 = 15 outcomes out of 36.",
      },
      {
        label: "Simplify",
        content: "15/36 = 5/12. A + B = 5 + 12 = 17.",
      },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  // Skipping tj-7: garbled continued fraction notation (lines 1005-1010)
  {
    id: "g6-tj-8",
    sectionId: "triple-jump",
    gradeLevel: "6",
    questionText:
      "A regular hexagon is inscribed in a circle. Given that the area of the hexagon is 294*sqrt(3) cm^2, the circumference of the circle can be written as A*pi cm. What is A?",
    correctAnswer: "28",
    answerType: "integer",
    explanation: [
      {
        label: "Find side length",
        content:
          "Area of regular hexagon = (3*sqrt(3)/2)*s^2. So (3*sqrt(3)/2)*s^2 = 294*sqrt(3). Then s^2 = 196, s = 14.",
      },
      {
        label: "Hexagon inscribed in circle",
        content:
          "For a regular hexagon inscribed in a circle, the side length equals the radius. So r = 14.",
      },
      {
        label: "Circumference",
        content: "C = 2*pi*r = 28*pi. A = 28.",
      },
    ],
    tags: ["geometry"],
    difficulty: "hard",
  },
  {
    id: "g6-tj-9",
    sectionId: "triple-jump",
    gradeLevel: "6",
    questionText:
      "Juana can build a large shed in 5 days less than it takes her brother Carlos. If they built it together it would take them 6 days. How many days would it take Carlos to build the shed by himself?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Set up equation",
        content:
          "Let Carlos take c days. Juana takes c - 5 days. Combined rate: 1/c + 1/(c-5) = 1/6.",
      },
      {
        label: "Solve",
        content:
          "6(c-5) + 6c = c(c-5) => 6c - 30 + 6c = c^2 - 5c => c^2 - 17c + 30 = 0 => (c-15)(c-2) = 0.",
      },
      {
        label: "Choose valid answer",
        content:
          "c = 15 (c = 2 is invalid since Juana would take -3 days).",
      },
    ],
    tags: ["algebra", "rates"],
    difficulty: "hard",
  },
  {
    id: "g6-tj-10",
    sectionId: "triple-jump",
    gradeLevel: "6",
    questionText:
      "What is the only 7-digit base-7 number in which the first digit on the left tells how many 0s, the second digit tells how many 1s, the third digit tells how many 2s, the fourth digit tells how many 3s, the fifth digit tells how many 4s, the sixth digit tells how many 5s, and the seventh digit tells how many 6s are in the number?",
    correctAnswer: "3211000",
    answerType: "text",
    explanation: [
      {
        label: "Self-referential puzzle",
        content: "The number describes its own digit frequencies.",
      },
      {
        label: "Solution",
        content:
          "3211000: three 0s, two 1s, one 2, one 3, zero 4s, zero 5s, zero 6s. Check: digits are 3,2,1,1,0,0,0 => three 0s, two 1s, one 2, one 3.",
      },
    ],
    tags: ["logic", "number theory"],
    difficulty: "hard",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL ROUND 1 (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-cb1-1",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "How many even integers are there between 11 and 49?",
    correctAnswer: "19",
    answerType: "integer",
    explanation: [
      {
        label: "List range",
        content:
          "Even integers: 12, 14, 16, ..., 48. Count = (48 - 12)/2 + 1 = 19.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-cb1-2",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "If 3x + 4y = 65 and x = 11, what does y equal?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Substitute and solve",
        content:
          "3(11) + 4y = 65 => 33 + 4y = 65 => 4y = 32 => y = 8.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g6-cb1-3",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "Biff can prepare 16 bags of tater tots in 20 minutes. Eho prepares tater tots at a rate that is twice as fast as Biff. How many minutes does it take Eho to prepare 24 bags of tater tots?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Find Eho's rate",
        content: "Biff: 16/20 = 0.8 bags/min. Eho: 1.6 bags/min.",
      },
      {
        label: "Calculate time",
        content: "24 / 1.6 = 15 minutes.",
      },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  {
    id: "g6-cb1-4",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "A bag of M&Ms contains 10 green, 22 brown, 6 red, 7 yellow, and 5 blue. If one M&M is randomly chosen, what is the probability in percent that it is not yellow?",
    correctAnswer: "86",
    answerType: "integer",
    explanation: [
      {
        label: "Total and complement",
        content:
          "Total = 50. Not yellow = 50 - 7 = 43. P = 43/50 = 86%.",
      },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g6-cb1-5",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "An 8-inch-by-8-inch square is cut into as many 2-inch-by-3-inch rectangles as possible, such that there is only one scrap leftover. In inches, what is the perimeter of the scrap?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Area analysis",
        content:
          "Square area = 64. Each rectangle = 6 in^2. Max rectangles = 10 (area 60). Scrap area = 4 in^2.",
      },
      {
        label: "Scrap shape",
        content:
          "The scrap is a 2x2 square. Perimeter = 8 inches.",
      },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },
  {
    id: "g6-cb1-6",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "What is the largest 2-digit integer that is the product of three distinct prime numbers?",
    correctAnswer: "78",
    answerType: "integer",
    explanation: [
      {
        label: "Try from the top",
        content:
          "2 * 3 * 13 = 78. Check: 2 * 5 * 11 = 110 (3 digits). 2 * 3 * 13 = 78 is the largest.",
      },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g6-cb1-7",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "An infinite series begins with the terms 1/3, 2/4, 3/5, and so on. The ninth term in the series is A/B. What is A + B?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      {
        label: "Find pattern",
        content: "nth term = n/(n+2). 9th term = 9/11.",
      },
      { label: "Sum", content: "A + B = 9 + 11 = 20." },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g6-cb1-8",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "What is the mean of the two-digit positive multiples of 22?",
    correctAnswer: "55",
    answerType: "integer",
    explanation: [
      {
        label: "List multiples",
        content:
          "22, 44, 66, 88. Mean = (22+44+66+88)/4 = 220/4 = 55.",
      },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g6-cb1-9",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "Let A be a single-digit positive integer, B be a two-digit positive integer, and C be a three-digit positive integer. What is the largest possible positive difference between C and the sum of A and B?",
    correctAnswer: "988",
    answerType: "integer",
    explanation: [
      {
        label: "Maximize C, minimize A+B",
        content: "Max C = 999. Min A = 1, min B = 10. A + B = 11.",
      },
      { label: "Difference", content: "999 - 11 = 988." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-cb1-10",
    sectionId: "cb-round-1",
    gradeLevel: "6",
    questionText:
      "Let A = 1 + 20 + 300 + 4000 + 50000. What is A divided by 3?",
    correctAnswer: "18107",
    answerType: "integer",
    explanation: [
      {
        label: "Sum",
        content: "A = 1 + 20 + 300 + 4000 + 50000 = 54321.",
      },
      { label: "Divide", content: "54321 / 3 = 18107." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL ROUND 2 (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-cb2-1",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText:
      "What is the greatest positive difference between any two prime numbers less than 30?",
    correctAnswer: "27",
    answerType: "integer",
    explanation: [
      {
        label: "Find extremes",
        content:
          "Smallest prime = 2. Largest prime < 30 = 29. Difference = 29 - 2 = 27.",
      },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g6-cb2-2",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText: "How many square inches are in 2.5 square feet?",
    correctAnswer: "360",
    answerType: "integer",
    explanation: [
      {
        label: "Convert",
        content:
          "1 ft^2 = 144 in^2. So 2.5 * 144 = 360 square inches.",
      },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g6-cb2-3",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText:
      "As a reduced common fraction, 1/3 + 3/5 = A/B. What is 2A?",
    correctAnswer: "28",
    answerType: "integer",
    explanation: [
      {
        label: "Add fractions",
        content: "1/3 + 3/5 = 5/15 + 9/15 = 14/15. A = 14.",
      },
      { label: "Double", content: "2A = 28." },
    ],
    tags: ["fractions"],
    difficulty: "easy",
  },
  {
    id: "g6-cb2-4",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText:
      "The first three terms of a sequence are 12, 20, and 8, where starting with the third term, each successive term is the positive difference between the previous two terms. What is the 100th term in this sequence?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      {
        label: "Generate terms",
        content:
          "12, 20, 8, 12, 4, 8, 4, 4, 0, 4, 4, 0, ... The pattern 4, 4, 0 repeats with period 3.",
      },
      {
        label: "Find 100th",
        content:
          "After the initial terms, the cycle 4, 4, 0 repeats. Position 100 in the cycle gives 4.",
      },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  {
    id: "g6-cb2-5",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText:
      "The expression 6x^2 + x - 40 can be factored into (2x - A)(3x + B). What is B?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Factor",
        content: "6x^2 + x - 40 = (2x - 5)(3x + 8). So B = 8.",
      },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },
  {
    id: "g6-cb2-6",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText:
      "How many positive integers less than 250 are multiples of both 4 and 10, but not multiples of 6?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Find LCM(4,10)",
        content:
          "LCM(4,10) = 20. Multiples of 20 less than 250: 20, 40, 60, ..., 240 => 12 numbers.",
      },
      {
        label: "Remove multiples of 6",
        content:
          "Must also be multiples of LCM(20,6) = 60: 60, 120, 180, 240 => 4 numbers.",
      },
      { label: "Result", content: "12 - 4 = 8." },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g6-cb2-7",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText:
      "Bert can decorate 3 cakes in an hour. Ernie decorates cakes at a rate that is 1.5 times Bert's rate. How many minutes would it take the two of them working together to decorate 3 cakes?",
    correctAnswer: "24",
    answerType: "integer",
    explanation: [
      {
        label: "Find rates",
        content:
          "Bert: 3/hr. Ernie: 4.5/hr. Combined: 7.5 cakes/hr.",
      },
      {
        label: "Time for 3 cakes",
        content: "3 / 7.5 = 0.4 hours = 24 minutes.",
      },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  {
    id: "g6-cb2-8",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText:
      "As a reduced common fraction, the probability of drawing two cards one at a time with replacement from a standard deck that are both aces is A/B. What is A + B?",
    correctAnswer: "170",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate",
        content:
          "P(ace) = 4/52 = 1/13. P(two aces with replacement) = (1/13)^2 = 1/169.",
      },
      { label: "Sum", content: "A + B = 1 + 169 = 170." },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  {
    id: "g6-cb2-9",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText: "35 is 7% of what number?",
    correctAnswer: "500",
    answerType: "integer",
    explanation: [
      {
        label: "Solve",
        content: "35 = 0.07 * N => N = 35 / 0.07 = 500.",
      },
    ],
    tags: ["percent"],
    difficulty: "easy",
  },
  {
    id: "g6-cb2-10",
    sectionId: "cb-round-2",
    gradeLevel: "6",
    questionText:
      "The measures of three of the angles in a convex quadrilateral are 61, 92, and 108 degrees. How many degrees are in the measure of the fourth angle?",
    correctAnswer: "99",
    answerType: "integer",
    explanation: [
      {
        label: "Sum of angles",
        content:
          "Quadrilateral angles sum to 360. Fourth = 360 - 61 - 92 - 108 = 99 degrees.",
      },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL ROUND 3 (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-cb3-1",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "An ultimate frisbee team has 12 girls and 9 boys. As a reduced common fraction, the ratio of girls to total players is A/B. What is A + B?",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate",
        content:
          "Total = 21. Ratio = 12/21 = 4/7. A + B = 4 + 7 = 11.",
      },
    ],
    tags: ["ratios"],
    difficulty: "easy",
  },
  {
    id: "g6-cb3-2",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "As a reduced common fraction, the value of x in the equation 5x/8 = 7/9 is A/B. What is A + B?",
    correctAnswer: "101",
    answerType: "integer",
    explanation: [
      {
        label: "Solve",
        content:
          "5x/8 = 7/9 => x = (7/9)*(8/5) = 56/45. A + B = 56 + 45 = 101.",
      },
    ],
    tags: ["algebra", "fractions"],
    difficulty: "easy",
  },
  {
    id: "g6-cb3-3",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText: "What is 30 * 53 / 3?",
    correctAnswer: "530",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate",
        content: "30 * 53 = 1590. 1590 / 3 = 530.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-cb3-4",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "In a sequence the fourth term is the mean of the first three terms, and each successive term is the mean of the previous three terms. If the first three terms are -15, 1, and 32, what is the sixth term?",
    correctAnswer: "17",
    answerType: "integer",
    explanation: [
      {
        label: "Compute terms",
        content:
          "a4 = (-15+1+32)/3 = 6. a5 = (1+32+6)/3 = 13. a6 = (32+6+13)/3 = 51/3 = 17.",
      },
    ],
    tags: ["sequences"],
    difficulty: "medium",
  },
  {
    id: "g6-cb3-5",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "The probability that the Mustangs will win any given game is 60%. As a percentage, what is the probability that they will win exactly one of their next two games?",
    correctAnswer: "48",
    answerType: "integer",
    explanation: [
      {
        label: "Use binomial",
        content:
          "P(exactly 1 win) = 2 * 0.6 * 0.4 = 0.48 = 48%.",
      },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  {
    id: "g6-cb3-6",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "How many integers are greater than 7.9 and less than 31.1?",
    correctAnswer: "24",
    answerType: "integer",
    explanation: [
      {
        label: "Count",
        content:
          "Integers: 8, 9, 10, ..., 31. Count = 31 - 8 + 1 = 24.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-cb3-7",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "A data set contains 7 distinct positive integers, the median is 13, and the mean is 14. What is the largest possible number in the set?",
    correctAnswer: "50",
    answerType: "integer",
    explanation: [
      {
        label: "Setup",
        content:
          "Sum = 14 * 7 = 98. Median (4th value) = 13. Minimize the other 6 values.",
      },
      {
        label: "Minimize",
        content:
          "Below median: 1, 2, 3. Above median: 14, 15, max. Sum of known: 1+2+3+13+14+15 = 48. Max = 98 - 48 = 50.",
      },
    ],
    tags: ["statistics"],
    difficulty: "medium",
  },
  {
    id: "g6-cb3-8",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "In degrees, what is the measure of the complement of the supplement of a 116-degree angle?",
    correctAnswer: "26",
    answerType: "integer",
    explanation: [
      {
        label: "Find supplement",
        content: "Supplement of 116 = 180 - 116 = 64 degrees.",
      },
      {
        label: "Find complement",
        content: "Complement of 64 = 90 - 64 = 26 degrees.",
      },
    ],
    tags: ["geometry", "angles"],
    difficulty: "easy",
  },
  {
    id: "g6-cb3-9",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "Abe is 6 years older than Ben, who is currently 10 years old. How old in years was Abe when he was twice as old as Ben?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      {
        label: "Set up",
        content:
          "Abe = Ben + 6. When Ben was x, Abe was x + 6. Need x + 6 = 2x => x = 6.",
      },
      {
        label: "Abe's age",
        content: "When Ben was 6, Abe was 12.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g6-cb3-10",
    sectionId: "cb-round-3",
    gradeLevel: "6",
    questionText:
      "If 3 carpenters can build 27 cabinets in 6 days, how many cabinets can 5 carpenters build in 10 days?",
    correctAnswer: "75",
    answerType: "integer",
    explanation: [
      {
        label: "Find rate per carpenter per day",
        content: "27 / (3 * 6) = 1.5 cabinets per carpenter per day.",
      },
      {
        label: "Calculate",
        content: "5 * 10 * 1.5 = 75 cabinets.",
      },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL ROUND 4 (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-cb4-1",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText: "What is 83 * 77?",
    correctAnswer: "6391",
    answerType: "integer",
    explanation: [
      {
        label: "Multiply",
        content: "83 * 77 = 83 * 80 - 83 * 3 = 6640 - 249 = 6391.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-cb4-2",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "What is the sum of the first 6 terms of the geometric sequence whose first three terms are 1, 3, and 9?",
    correctAnswer: "364",
    answerType: "integer",
    explanation: [
      {
        label: "List terms",
        content: "1, 3, 9, 27, 81, 243.",
      },
      {
        label: "Sum",
        content: "1 + 3 + 9 + 27 + 81 + 243 = 364.",
      },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g6-cb4-3",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "Each of the smallest 6 positive prime numbers is doubled to make a set of 6 even integers. What is the median of the set?",
    correctAnswer: "12",
    answerType: "integer",
    explanation: [
      {
        label: "Find the primes",
        content:
          "First 6 primes: 2, 3, 5, 7, 11, 13. Doubled: 4, 6, 10, 14, 22, 26.",
      },
      {
        label: "Median",
        content: "Average of 3rd and 4th: (10 + 14)/2 = 12.",
      },
    ],
    tags: ["statistics", "number theory"],
    difficulty: "easy",
  },
  {
    id: "g6-cb4-4",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "Jenna took 63 minutes to read 57 pages of her book which is 266 pages long. At this rate, how many minutes will it take her to read the rest of the book?",
    correctAnswer: "231",
    answerType: "integer",
    explanation: [
      {
        label: "Pages remaining",
        content: "266 - 57 = 209 pages.",
      },
      {
        label: "Rate and time",
        content:
          "Rate = 57 pages / 63 min. Time = 209 * (63/57) = 209 * 21/19 = 11 * 21 = 231 minutes.",
      },
    ],
    tags: ["rates"],
    difficulty: "medium",
  },
  {
    id: "g6-cb4-5",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "What is the smallest 2-digit composite number that has exactly two distinct composite numbers as factors?",
    correctAnswer: "27",
    answerType: "integer",
    explanation: [
      {
        label: "Check composites",
        content:
          "Factors of 27: 1, 3, 9, 27. Composite factors: 9 and 27 => exactly 2 distinct composite factors.",
      },
      {
        label: "Verify smaller",
        content:
          "Numbers like 12 have composite factors 4, 6, 12 (3 composites). 16: composite factors 4, 8, 16 (3). 27 is the smallest with exactly 2.",
      },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g6-cb4-6",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "Let A be 150% of B. Let C be 250% of D. Let A = C. What percent of B is D?",
    correctAnswer: "60",
    answerType: "integer",
    explanation: [
      {
        label: "Express in equations",
        content:
          "A = 1.5B and C = 2.5D. Since A = C: 1.5B = 2.5D => D = 1.5B/2.5 = 0.6B.",
      },
      { label: "Result", content: "D is 60% of B." },
    ],
    tags: ["percent"],
    difficulty: "medium",
  },
  {
    id: "g6-cb4-7",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "A cone and a cylinder have the same volume. The cylinder has a radius that is half the radius of the cone. As a reduced common fraction, the ratio of the height of the cylinder to the height of the cone is A/B. What is A + B?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      {
        label: "Set up volumes",
        content:
          "Cone: (1/3)*pi*R^2*h1. Cylinder: pi*(R/2)^2*h2 = pi*R^2*h2/4.",
      },
      {
        label: "Solve",
        content:
          "(1/3)*R^2*h1 = R^2*h2/4 => h2/h1 = 4/3. A + B = 4 + 3 = 7.",
      },
    ],
    tags: ["geometry", "3D"],
    difficulty: "medium",
  },
  {
    id: "g6-cb4-8",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "A fathom is equivalent to 6 feet. The average depth of Iceland's Blue Lagoon is 2/3 of a fathom. What is the average depth of Blue Lagoon in inches?",
    correctAnswer: "48",
    answerType: "integer",
    explanation: [
      {
        label: "Convert",
        content:
          "(2/3) * 6 feet = 4 feet = 4 * 12 = 48 inches.",
      },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g6-cb4-9",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "Solve the following equation for x: 5x/2 = 165/6",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      {
        label: "Solve",
        content:
          "5x/2 = 165/6 => x = (165/6)*(2/5) = 330/30 = 11.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g6-cb4-10",
    sectionId: "cb-round-4",
    gradeLevel: "6",
    questionText:
      "As a reduced common fraction, the ratio of the number of positive single-digit even integers to the number of positive single-digit odd integers is A/B. What is A + B?",
    correctAnswer: "9",
    answerType: "integer",
    explanation: [
      {
        label: "Count",
        content:
          "Even: 2, 4, 6, 8 => 4. Odd: 1, 3, 5, 7, 9 => 5. Ratio = 4/5.",
      },
      { label: "Sum", content: "A + B = 4 + 5 = 9." },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL ROUND 5 (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-cb5-1",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText:
      "Shira has 6 dimes, 7 pennies, 2 nickels, and 5 quarters in her pocket. If she randomly selects one coin, what is the probability in percent that it is a dime?",
    correctAnswer: "30",
    answerType: "integer",
    explanation: [
      {
        label: "Count coins",
        content: "Total = 6 + 7 + 2 + 5 = 20. Dimes = 6.",
      },
      { label: "Calculate", content: "P = 6/20 = 30%." },
    ],
    tags: ["probability"],
    difficulty: "easy",
  },
  {
    id: "g6-cb5-2",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText:
      "In centimeters, what is the diameter of a circle whose area is 169*pi cm^2?",
    correctAnswer: "26",
    answerType: "integer",
    explanation: [
      {
        label: "Find radius",
        content: "pi*r^2 = 169*pi => r^2 = 169 => r = 13.",
      },
      { label: "Diameter", content: "d = 2r = 26 cm." },
    ],
    tags: ["geometry", "circles"],
    difficulty: "easy",
  },
  {
    id: "g6-cb5-3",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText:
      "Serena's scores on her last three rounds of golf were 82, 85, and 77. What score does she need on her next round to lower her average to exactly 80?",
    correctAnswer: "76",
    answerType: "integer",
    explanation: [
      {
        label: "Set up",
        content:
          "Need (82 + 85 + 77 + x) / 4 = 80 => 244 + x = 320 => x = 76.",
      },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
  {
    id: "g6-cb5-4",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText:
      "|A - B| = 8 and |B - C| = 9. Let D = the greatest possible |A - C| and E = the smallest possible |A - C|. What is D - E?",
    correctAnswer: "16",
    answerType: "integer",
    explanation: [
      {
        label: "Triangle inequality",
        content:
          "By the triangle inequality, |A - C| ranges from |8 - 9| = 1 to 8 + 9 = 17.",
      },
      { label: "D - E", content: "17 - 1 = 16." },
    ],
    tags: ["algebra"],
    difficulty: "medium",
  },
  {
    id: "g6-cb5-5",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText:
      "What is the smallest possible sum of two positive integers whose greatest common factor is 13 and whose least common multiple is 130?",
    correctAnswer: "91",
    answerType: "integer",
    explanation: [
      {
        label: "Find the pair",
        content:
          "GCF = 13, LCM = 130. Product = 13 * 130 = 1690. Multiples of 13 whose LCM is 130: (13, 130) sum=143, (26, 65) sum=91.",
      },
      { label: "Smallest sum", content: "26 + 65 = 91." },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g6-cb5-6",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText:
      "Angela and Megan begin at the same place and time to run around a circular 400-meter track. Angela's average rate is 240 m/min and Megan's rate is 20% faster. After how many seconds will Megan pass Angela for the first time?",
    correctAnswer: "500",
    answerType: "integer",
    explanation: [
      {
        label: "Find rates",
        content:
          "Angela: 240 m/min. Megan: 240 * 1.2 = 288 m/min. Relative speed: 48 m/min.",
      },
      {
        label: "Time to lap",
        content:
          "Megan gains 400 m at 48 m/min: 400/48 = 25/3 min = 500 seconds.",
      },
    ],
    tags: ["rates"],
    difficulty: "hard",
  },
  {
    id: "g6-cb5-7",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText:
      "Every page of a 121-page book is numbered. How many times does the digit 6 appear in the page numbering?",
    correctAnswer: "22",
    answerType: "integer",
    explanation: [
      {
        label: "Count by position",
        content:
          "Units digit: 6, 16, 26, ..., 116 => 12 times. Tens digit: 60-69 => 10 times. Hundreds digit: none up to 121.",
      },
      { label: "Total", content: "12 + 10 = 22." },
    ],
    tags: ["arithmetic"],
    difficulty: "medium",
  },
  {
    id: "g6-cb5-8",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText: "What is 3/8 divided by 1/16?",
    correctAnswer: "6",
    answerType: "integer",
    explanation: [
      {
        label: "Divide fractions",
        content: "(3/8) / (1/16) = (3/8) * (16/1) = 48/8 = 6.",
      },
    ],
    tags: ["fractions"],
    difficulty: "easy",
  },
  {
    id: "g6-cb5-9",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText:
      "1/4 of the Skittles in a bag of 60 are green, 1/6 are yellow, 3/10 are purple, and the rest are orange. How many Skittles are orange or purple?",
    correctAnswer: "35",
    answerType: "integer",
    explanation: [
      {
        label: "Count each color",
        content:
          "Green: 15. Yellow: 10. Purple: 18. Orange: 60 - 15 - 10 - 18 = 17.",
      },
      {
        label: "Orange + Purple",
        content: "17 + 18 = 35.",
      },
    ],
    tags: ["fractions", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "g6-cb5-10",
    sectionId: "cb-round-5",
    gradeLevel: "6",
    questionText: "Solve for x: 7x - 23 = -2x + 139",
    correctAnswer: "18",
    answerType: "integer",
    explanation: [
      {
        label: "Solve",
        content: "7x + 2x = 139 + 23 => 9x = 162 => x = 18.",
      },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COLLEGE BOWL ROUND 6 (10 questions)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "g6-cb6-1",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "How many millimeters are in 2 and 4/5 of a meter?",
    correctAnswer: "2800",
    answerType: "integer",
    explanation: [
      {
        label: "Convert",
        content: "2.8 meters * 1000 = 2800 mm.",
      },
    ],
    tags: ["unit conversion"],
    difficulty: "easy",
  },
  {
    id: "g6-cb6-2",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "If A = 4B and 3A - 5B = 56, what is A?",
    correctAnswer: "32",
    answerType: "integer",
    explanation: [
      {
        label: "Substitute",
        content:
          "3(4B) - 5B = 56 => 12B - 5B = 56 => 7B = 56 => B = 8.",
      },
      { label: "Find A", content: "A = 4(8) = 32." },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },
  {
    id: "g6-cb6-3",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "Rae can paint 10 boards in 16 minutes. At this rate, how many boards can she paint in 40 minutes?",
    correctAnswer: "25",
    answerType: "integer",
    explanation: [
      {
        label: "Find rate",
        content:
          "10/16 = 0.625 boards/min. In 40 min: 0.625 * 40 = 25.",
      },
    ],
    tags: ["rates"],
    difficulty: "easy",
  },
  {
    id: "g6-cb6-4",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "A jar contains 20 marbles that are all either green or blue. After 1/4 of the green marbles are removed, there are 17 marbles left. As a percentage, what is the probability of randomly selecting a blue marble from the original contents of the jar?",
    correctAnswer: "40",
    answerType: "integer",
    explanation: [
      {
        label: "Find green count",
        content:
          "Removed = 20 - 17 = 3 marbles. 1/4 of green = 3 => green = 12. Blue = 8.",
      },
      {
        label: "Probability",
        content: "P(blue) = 8/20 = 40%.",
      },
    ],
    tags: ["probability"],
    difficulty: "medium",
  },
  {
    id: "g6-cb6-5",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "How many positive 2-digit integers less than 40 are there, such that each digit is a different positive factor of the integer?",
    correctAnswer: "4",
    answerType: "integer",
    explanation: [
      {
        label: "Check systematically",
        content:
          "Two-digit numbers < 40 where both digits are different, positive, and each divides the number.",
      },
      {
        label: "Solutions",
        content:
          "12 (1 and 2 both divide 12), 15 (1 and 5 both divide 15), 24 (2 and 4 both divide 24), 36 (3 and 6 both divide 36) => 4 numbers.",
      },
    ],
    tags: ["number theory"],
    difficulty: "medium",
  },
  {
    id: "g6-cb6-6",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "Let A, B, C, and D each be replaced randomly by a different member of the set {6, 9, 12, 15}. What is the largest possible value of A * B - C * D?",
    correctAnswer: "126",
    answerType: "integer",
    explanation: [
      {
        label: "Maximize",
        content:
          "Maximize one product, minimize the other. 15 * 12 - 6 * 9 = 180 - 54 = 126.",
      },
    ],
    tags: ["arithmetic", "optimization"],
    difficulty: "medium",
  },
  {
    id: "g6-cb6-7",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "As a reduced common fraction, A/B = 3/7, where A does not equal 3 and B does not equal 7. When 4 is added to A, the new ratio is 4/7. What is B?",
    correctAnswer: "28",
    answerType: "integer",
    explanation: [
      {
        label: "Set up equations",
        content:
          "A/B = 3/7 => A = 3B/7. (A+4)/B = 4/7 => A + 4 = 4B/7.",
      },
      {
        label: "Solve",
        content: "3B/7 + 4 = 4B/7 => 4 = B/7 => B = 28.",
      },
    ],
    tags: ["algebra", "ratios"],
    difficulty: "medium",
  },
  {
    id: "g6-cb6-8",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "What is the positive difference between the largest 2-digit prime number and the smallest 1-digit prime number?",
    correctAnswer: "95",
    answerType: "integer",
    explanation: [
      {
        label: "Identify primes",
        content:
          "Largest 2-digit prime = 97. Smallest 1-digit prime = 2.",
      },
      { label: "Difference", content: "97 - 2 = 95." },
    ],
    tags: ["number theory"],
    difficulty: "easy",
  },
  {
    id: "g6-cb6-9",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "What is the 10th term in the arithmetic sequence whose first term is 10 and whose fourth term is 19?",
    correctAnswer: "37",
    answerType: "integer",
    explanation: [
      {
        label: "Find common difference",
        content: "a4 = a1 + 3d => 19 = 10 + 3d => d = 3.",
      },
      {
        label: "Find 10th term",
        content: "a10 = 10 + 9(3) = 37.",
      },
    ],
    tags: ["sequences"],
    difficulty: "easy",
  },
  {
    id: "g6-cb6-10",
    sectionId: "cb-round-6",
    gradeLevel: "6",
    questionText:
      "What is the median of the following set of numbers: 19, 109, 9, 29, 79, 89?",
    correctAnswer: "54",
    answerType: "integer",
    explanation: [
      { label: "Sort", content: "9, 19, 29, 79, 89, 109." },
      {
        label: "Median",
        content: "Average of 3rd and 4th: (29 + 79)/2 = 54.",
      },
    ],
    tags: ["statistics"],
    difficulty: "easy",
  },
];
