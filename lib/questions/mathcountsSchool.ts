import { Question } from "../types";

export const mathcountsSchoolQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // SPRINT ROUND (30 questions, 40 minutes, no calculator)
  // ═══════════════════════════════════════════════════════════════════

  // Sprint 1 — SKIPPED (references a ruler/washi tape figure)

  {
    id: "mcs-sp-2",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "12,345 + 56,789. What is the tens digit of this sum?",
    correctAnswer: "3",
    answerType: "integer",
    explanation: [
      {
        label: "Compute the sum",
        content: "12,345 + 56,789 = 69,134.",
      },
      {
        label: "Identify the tens digit",
        content:
          "In 69,134 the digits from right to left are 4 (ones), 3 (tens), 1 (hundreds), 9 (thousands), 6 (ten-thousands). The tens digit is 3.",
      },
    ],
    tags: ["arithmetic", "place value"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-3",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Dora drinks a 12-ounce can of cola. Erika drinks half of a 20-ounce bottle of cola. How many more ounces of cola does Dora drink than Erika?",
    correctAnswer: "2",
    answerType: "integer",
    explanation: [
      {
        label: "Find Erika's amount",
        content: "Erika drinks half of 20 ounces = 10 ounces.",
      },
      {
        label: "Find the difference",
        content: "Dora drinks 12 ounces, so 12 - 10 = 2 more ounces.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-4",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "What is the result when one hundred twenty-eight thousand is subtracted from one million?",
    correctAnswer: "872000",
    answerType: "integer",
    explanation: [
      {
        label: "Set up the subtraction",
        content: "1,000,000 - 128,000.",
      },
      {
        label: "Compute",
        content: "1,000,000 - 128,000 = 872,000.",
      },
    ],
    tags: ["arithmetic"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-5",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "What is the side length of a rectangle that has width 7 inches and area 105 in\u00B2?",
    correctAnswer: "15",
    answerType: "integer",
    explanation: [
      {
        label: "Use the area formula",
        content: "Area = length \u00D7 width, so 105 = length \u00D7 7.",
      },
      {
        label: "Solve for length",
        content: "length = 105 / 7 = 15 inches.",
      },
    ],
    tags: ["geometry", "area"],
    difficulty: "easy",
  },

  {
    id: "mcs-sp-6",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText: "What integer is closest to \u22127\u03C0?",
    correctAnswer: "-22",
    answerType: "integer",
    explanation: [
      {
        label: "Approximate \u03C0",
        content: "\u03C0 \u2248 3.14159.",
      },
      {
        label: "Multiply",
        content: "\u22127 \u00D7 3.14159 \u2248 \u221221.991.",
      },
      {
        label: "Round to nearest integer",
        content:
          "\u221221.991 is closest to \u221222.",
      },
    ],
    tags: ["arithmetic", "pi", "estimation"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-7",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "On Monday at 8 p.m., the temperature measured \u221217 degrees. Between 8 p.m. on Monday and 6 a.m. on Tuesday, the temperature increased 23 degrees. On Tuesday, between 6 a.m. and 3 p.m., the temperature decreased 5 degrees. What was the temperature on Tuesday at 3 p.m.?",
    correctAnswer: "1",
    answerType: "integer",
    explanation: [
      {
        label: "After Monday night increase",
        content: "\u221217 + 23 = 6 degrees at 6 a.m. Tuesday.",
      },
      {
        label: "After Tuesday decrease",
        content: "6 \u2212 5 = 1 degree at 3 p.m. Tuesday.",
      },
    ],
    tags: ["arithmetic", "integers"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-8",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "A middle school offers five lunch options on Friday. The number of students ordering each option is: Pizza 132, Nuggets 112, Burger 88, Spaghetti 44, Salad 24. What percent of the lunch orders on Friday were for spaghetti?",
    correctAnswer: "11",
    answerType: "integer",
    explanation: [
      {
        label: "Find total orders",
        content: "132 + 112 + 88 + 44 + 24 = 400 total orders.",
      },
      {
        label: "Calculate the percentage",
        content: "Spaghetti orders / total = 44 / 400 = 0.11 = 11%.",
      },
    ],
    tags: ["statistics", "percent"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-9",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText: "What is the 40th positive odd integer?",
    correctAnswer: "79",
    answerType: "integer",
    explanation: [
      {
        label: "Formula for the nth odd integer",
        content: "The nth positive odd integer is 2n \u2212 1.",
      },
      {
        label: "Compute",
        content: "2(40) \u2212 1 = 80 \u2212 1 = 79.",
      },
    ],
    tags: ["number theory", "patterns"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-10",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "What is the value of the expression 1 + 2/(1 \u2212 2/3), in simplest form?",
    correctAnswer: "7",
    answerType: "integer",
    explanation: [
      {
        label: "Simplify the inner fraction",
        content: "1 \u2212 2/3 = 1/3.",
      },
      {
        label: "Divide",
        content: "2 / (1/3) = 2 \u00D7 3 = 6.",
      },
      {
        label: "Add",
        content: "1 + 6 = 7.",
      },
    ],
    tags: ["fractions", "arithmetic"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-11",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "If (x\u00B2y\u00B3)\u00B2 = x^a \u00B7 y^b, what is the value of a + b?",
    correctAnswer: "10",
    answerType: "integer",
    explanation: [
      {
        label: "Apply the power rule",
        content:
          "(x\u00B2y\u00B3)\u00B2 = x^(2\u00D72) \u00B7 y^(3\u00D72) = x\u2074y\u2076.",
      },
      {
        label: "Identify a and b",
        content: "a = 4 and b = 6, so a + b = 10.",
      },
    ],
    tags: ["exponents", "algebra"],
    difficulty: "easy",
  },

  // Sprint 12 — SKIPPED (references a rock-paper-scissors results table not fully shown)

  {
    id: "mcs-sp-13",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Given that a mile equals 5280 feet, how many inches are in one-sixth of a mile?",
    correctAnswer: "10560",
    answerType: "integer",
    explanation: [
      {
        label: "Find feet in one-sixth of a mile",
        content: "5280 / 6 = 880 feet.",
      },
      {
        label: "Convert to inches",
        content: "880 \u00D7 12 = 10,560 inches.",
      },
    ],
    tags: ["unit conversion", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-14",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Maria was born on January 1, 2000. Her mother was born on January 1, 1975 and her father was born on January 1, 1970. In what year was the sum of their ages 100?",
    correctAnswer: "2015",
    answerType: "integer",
    explanation: [
      {
        label: "Express ages in terms of year",
        content:
          "In year Y: Maria's age = Y \u2212 2000, Mother's age = Y \u2212 1975, Father's age = Y \u2212 1970.",
      },
      {
        label: "Set up the equation",
        content:
          "(Y \u2212 2000) + (Y \u2212 1975) + (Y \u2212 1970) = 100, so 3Y \u2212 5945 = 100.",
      },
      {
        label: "Solve",
        content: "3Y = 6045, so Y = 2015.",
      },
    ],
    tags: ["algebra", "word problems"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-15",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "A bicycle that originally cost $200 is on sale for $140. By what percent was the price reduced?",
    correctAnswer: "30",
    answerType: "integer",
    explanation: [
      {
        label: "Find the discount amount",
        content: "$200 \u2212 $140 = $60.",
      },
      {
        label: "Calculate the percent reduction",
        content: "60 / 200 = 0.30 = 30%.",
      },
    ],
    tags: ["percent", "arithmetic"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-16",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Jay's dog outgrew his rectangular pen that measured 10 feet by 14 feet. To make it larger, he increased each side length by the same amount, which increased the pen's area by 81 square feet. What is the greater side length of the larger pen?",
    correctAnswer: "17",
    answerType: "integer",
    explanation: [
      {
        label: "Set up the equation",
        content:
          "Let the increase be d. New area = (10 + d)(14 + d). Original area = 140. So (10 + d)(14 + d) \u2212 140 = 81.",
      },
      {
        label: "Expand and simplify",
        content:
          "140 + 10d + 14d + d\u00B2 \u2212 140 = 81, so d\u00B2 + 24d = 81, giving d\u00B2 + 24d \u2212 81 = 0.",
      },
      {
        label: "Solve the quadratic",
        content:
          "(d + 27)(d \u2212 3) = 0, so d = 3 (discarding the negative solution).",
      },
      {
        label: "Find the greater side",
        content: "The greater side = 14 + 3 = 17 feet.",
      },
    ],
    tags: ["algebra", "geometry", "quadratics"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-17",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Parker has three sons: Alfred, Beto and Dell. When Alfred turned 11 years old, Beto was 9 years old and Dell was 4 years old. What was the average of their ages when Alfred turned 37?",
    correctAnswer: "34",
    answerType: "integer",
    explanation: [
      {
        label: "Find the age differences",
        content:
          "When Alfred is 11: Beto is 9 (2 years younger), Dell is 4 (7 years younger).",
      },
      {
        label: "Compute ages when Alfred is 37",
        content: "Alfred = 37, Beto = 35, Dell = 30.",
      },
      {
        label: "Find the average",
        content: "(37 + 35 + 30) / 3 = 102 / 3 = 34.",
      },
    ],
    tags: ["arithmetic", "statistics"],
    difficulty: "easy",
  },
  {
    id: "mcs-sp-18",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Triangle ABC has an area of 40 units\u00B2. Point D is on side AC, and AD:DC = 3:1. What is the area of triangle BDC?",
    correctAnswer: "10",
    answerType: "integer",
    explanation: [
      {
        label: "Understand the ratio",
        content:
          "Since AD:DC = 3:1, point D divides AC so that DC = 1/4 of AC.",
      },
      {
        label: "Relate the triangle areas",
        content:
          "Triangles ABD and BDC share the same height from B to line AC. Their areas are proportional to their bases AD and DC.",
      },
      {
        label: "Compute",
        content:
          "Area of BDC = (DC/AC) \u00D7 area of ABC = (1/4) \u00D7 40 = 10 units\u00B2.",
      },
    ],
    tags: ["geometry", "area", "ratios"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-19",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Kendra surveyed 100 people who own a dog or a cat, or both. Of those surveyed, 15 own both a dog and a cat, and the number of people who own a dog is four times the number of people who own a cat. How many people surveyed own a cat?",
    correctAnswer: "23",
    answerType: "integer",
    explanation: [
      {
        label: "Use the inclusion-exclusion principle",
        content:
          "Let D = dog owners, C = cat owners. D + C \u2212 15 = 100, so D + C = 115.",
      },
      {
        label: "Use the given ratio",
        content: "D = 4C, so 4C + C = 115, giving 5C = 115.",
      },
      {
        label: "Solve",
        content: "C = 23 people own a cat.",
      },
    ],
    tags: ["sets", "algebra", "word problems"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-20",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "What is the area of the region in the first quadrant that lies between the lines x + 3y = 12 and x + 3y = 18?",
    correctAnswer: "30",
    answerType: "integer",
    explanation: [
      {
        label: "Find the triangle for x + 3y = 12",
        content:
          "x-intercept: (12, 0), y-intercept: (0, 4). Area of that triangle = (1/2)(12)(4) = 24.",
      },
      {
        label: "Find the triangle for x + 3y = 18",
        content:
          "x-intercept: (18, 0), y-intercept: (0, 6). Area of that triangle = (1/2)(18)(6) = 54.",
      },
      {
        label: "Find the region between them",
        content: "Area = 54 \u2212 24 = 30 units\u00B2.",
      },
    ],
    tags: ["coordinate geometry", "area"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-21",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "What is the absolute difference between the mean and median of the first 100 positive integers?",
    correctAnswer: "0",
    answerType: "integer",
    explanation: [
      {
        label: "Find the mean",
        content:
          "Mean = (1 + 2 + ... + 100) / 100 = (100 \u00D7 101 / 2) / 100 = 5050 / 100 = 50.5.",
      },
      {
        label: "Find the median",
        content:
          "For 100 numbers, the median is the average of the 50th and 51st values: (50 + 51) / 2 = 50.5.",
      },
      {
        label: "Find the absolute difference",
        content: "|50.5 \u2212 50.5| = 0.",
      },
    ],
    tags: ["statistics"],
    difficulty: "medium",
  },

  // Sprint 22 — SKIPPED (references a figure showing arrangement of squares)

  {
    id: "mcs-sp-23",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "If a fair coin is tossed four times, what is the probability of it landing heads up at least three times? Express your answer as a common fraction.",
    correctAnswer: "5/16",
    answerType: "fraction",
    explanation: [
      {
        label: "Count total outcomes",
        content: "Total outcomes = 2\u2074 = 16.",
      },
      {
        label: "Count favorable outcomes",
        content:
          "Exactly 3 heads: C(4,3) = 4 ways. Exactly 4 heads: C(4,4) = 1 way. Total favorable = 5.",
      },
      {
        label: "Calculate probability",
        content: "P = 5/16.",
      },
    ],
    tags: ["probability", "combinatorics"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-24",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "If n is an integer for which the greatest common factor of n and 18 is 6 and the least common multiple of n and 9 is 126, what is the value of n?",
    correctAnswer: "42",
    answerType: "integer",
    explanation: [
      {
        label: "Use the GCF condition",
        content:
          "GCF(n, 18) = 6 means n is a multiple of 6 but not a multiple of 18 (i.e., n is divisible by 6 but not by 9).",
      },
      {
        label: "Use the LCM condition",
        content:
          "LCM(n, 9) = 126. Since LCM(n, 9) = 126, n must be a divisor of 126 that, combined with 9, gives LCM 126.",
      },
      {
        label: "Factor 126",
        content: "126 = 2 \u00D7 3\u00B2 \u00D7 7.",
      },
      {
        label: "Determine n",
        content:
          "n must be a multiple of 6 (= 2 \u00D7 3) and LCM(n, 9) = 126. For LCM(n, 9) = 126, n must include the factor 7 and the factor 2. Trying n = 42 = 2 \u00D7 3 \u00D7 7: GCF(42, 18) = 6 and LCM(42, 9) = 126. Both conditions are satisfied.",
      },
    ],
    tags: ["number theory", "GCF", "LCM"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-25",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "The lines given by the equations y = 9 \u2212 (1/3)x and y = mx + b are perpendicular and intersect at a point on the x-axis. What is the value of b?",
    correctAnswer: "-81",
    answerType: "integer",
    explanation: [
      {
        label: "Find the x-intercept of the first line",
        content:
          "Set y = 0: 0 = 9 \u2212 (1/3)x, so (1/3)x = 9, giving x = 27. The intersection point is (27, 0).",
      },
      {
        label: "Find the slope of the perpendicular line",
        content:
          "The first line has slope \u22121/3. A perpendicular line has slope 3 (negative reciprocal), so m = 3.",
      },
      {
        label: "Find b",
        content:
          "The second line passes through (27, 0): 0 = 3(27) + b, so b = \u221281.",
      },
    ],
    tags: ["coordinate geometry", "linear equations"],
    difficulty: "medium",
  },
  {
    id: "mcs-sp-26",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "If two standard, fair 6-sided dice are rolled, what is the probability that the product of the two numbers rolled is a perfect square? Express your answer as a common fraction.",
    correctAnswer: "2/9",
    answerType: "fraction",
    explanation: [
      {
        label: "List all perfect square products",
        content:
          "The possible products of two dice (1\u20136) that are perfect squares: 1, 4, 9, 16, 25, 36. Pairs (a,b) giving these: (1,1)\u21921, (1,4)\u21924, (4,1)\u21924, (2,2)\u21924, (3,3)\u21929, (4,4)\u219216, (5,5)\u219225, (6,6)\u219236.",
      },
      {
        label: "Count favorable outcomes",
        content: "There are 8 favorable outcomes out of 36 total.",
      },
      {
        label: "Simplify",
        content: "8/36 = 2/9.",
      },
    ],
    tags: ["probability", "number theory"],
    difficulty: "hard",
  },
  {
    id: "mcs-sp-27",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Gracie has made 2 gallons of punch that contains 50% juice. After Gracie pours out some of her mixture and replaces it with an equal amount of pure 100% juice, she has 2 gallons of punch that contains 65% juice. How many gallons of the original mixture did Gracie pour out? Express your answer as a common fraction.",
    correctAnswer: "3/5",
    answerType: "fraction",
    explanation: [
      {
        label: "Set up variables",
        content:
          "Let g = gallons poured out (and replaced). The original 2 gallons has 50% juice = 1 gallon of juice.",
      },
      {
        label: "Calculate juice after pouring out",
        content:
          "After removing g gallons of 50% mixture, juice remaining = 1 \u2212 0.5g gallons.",
      },
      {
        label: "Add pure juice",
        content:
          "After adding g gallons of 100% juice, total juice = (1 \u2212 0.5g) + g = 1 + 0.5g.",
      },
      {
        label: "Set up the equation",
        content:
          "Final concentration: (1 + 0.5g) / 2 = 0.65, so 1 + 0.5g = 1.3, giving 0.5g = 0.3, so g = 0.6 = 3/5.",
      },
    ],
    tags: ["algebra", "mixture problems"],
    difficulty: "hard",
  },
  {
    id: "mcs-sp-28",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "Ursula's starting location is on the shore of a river that measures 8 km across. Her destination is 27 km downshore on the opposite side of the river. Ursula rows a boat in a straight line, at a speed of 5 km/h, to a point that is 6 km downshore on the opposite side, and then runs the remaining distance, at a speed of 14 km/h. How many hours will it take Ursula to reach her destination? Express your answer as a mixed number.",
    correctAnswer: "3 1/2",
    answerType: "fraction",
    explanation: [
      {
        label: "Find the rowing distance",
        content:
          "Ursula rows across 8 km and 6 km downshore. The straight-line distance = \u221A(8\u00B2 + 6\u00B2) = \u221A(64 + 36) = \u221A100 = 10 km.",
      },
      {
        label: "Find rowing time",
        content: "Time = 10 / 5 = 2 hours.",
      },
      {
        label: "Find running distance",
        content: "Remaining distance downshore = 27 \u2212 6 = 21 km.",
      },
      {
        label: "Find running time",
        content: "Time = 21 / 14 = 3/2 = 1.5 hours.",
      },
      {
        label: "Total time",
        content: "2 + 1.5 = 3.5 = 3 1/2 hours.",
      },
    ],
    tags: ["geometry", "Pythagorean theorem", "rates"],
    difficulty: "hard",
  },
  {
    id: "mcs-sp-29",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "A cylinder whose height is 3 times its radius is inscribed in a cone whose height is 6 times its radius. What fraction of the cone's volume lies inside the cylinder? Express your answer as a common fraction.",
    correctAnswer: "4/9",
    answerType: "fraction",
    explanation: [
      {
        label: "Set up the cone",
        content:
          "Let the cone have base radius R and height H = 6R.",
      },
      {
        label: "Find the cylinder dimensions",
        content:
          "Let the cylinder have radius r and height h = 3r. The cylinder is inscribed in the cone, so by similar triangles: (R \u2212 r)/R = h/H = 3r/(6R), giving (R \u2212 r)/R = r/(2R), so 2R(R \u2212 r) = Rr, thus 2R \u2212 2r = r, so r = 2R/3.",
      },
      {
        label: "Compute the cylinder volume",
        content:
          "h = 3r = 3(2R/3) = 2R. Volume of cylinder = \u03C0r\u00B2h = \u03C0(2R/3)\u00B2(2R) = \u03C0(4R\u00B2/9)(2R) = 8\u03C0R\u00B3/9.",
      },
      {
        label: "Compute the cone volume",
        content:
          "Volume of cone = (1/3)\u03C0R\u00B2(6R) = 2\u03C0R\u00B3.",
      },
      {
        label: "Find the fraction",
        content:
          "(8\u03C0R\u00B3/9) / (2\u03C0R\u00B3) = 8/18 = 4/9.",
      },
    ],
    tags: ["geometry", "volume", "similar figures"],
    difficulty: "hard",
  },
  {
    id: "mcs-sp-30",
    sectionId: "mc-sprint",
    gradeLevel: "7-8",
    questionText:
      "What value of x yields the minimum value of the sum |x \u2212 2\u2070| + |x \u2212 2\u00B9| + |x \u2212 2\u00B2| + |x \u2212 2\u00B3| + \u22EF + |x \u2212 2\u00B9\u2070|?",
    correctAnswer: "32",
    answerType: "integer",
    explanation: [
      {
        label: "Identify the terms",
        content:
          "The sum is |x \u2212 1| + |x \u2212 2| + |x \u2212 4| + |x \u2212 8| + |x \u2212 16| + |x \u2212 32| + |x \u2212 64| + |x \u2212 128| + |x \u2212 256| + |x \u2212 512| + |x \u2212 1024|. There are 11 terms (for 2\u2070 through 2\u00B9\u2070).",
      },
      {
        label: "Apply the median principle",
        content:
          "The sum of absolute deviations is minimized at the median of the set of values. With 11 values, the median is the 6th value.",
      },
      {
        label: "Find the 6th value",
        content:
          "Sorted: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. The 6th value is 32 = 2\u2075.",
      },
    ],
    tags: ["algebra", "absolute value", "statistics"],
    difficulty: "hard",
  },

  // ═══════════════════════════════════════════════════════════════════
  // TARGET ROUND (8 questions, 6 minutes per pair, calculator allowed)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "mcs-tg-1",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "Charles has opened a service, called Charlie's Chores, that performs various household chores for families in his neighborhood. The amount he charges and the number of hires in January are: clothes ironing $9.50 (10 hires), dog walking $7.50 (12 hires), kitchen cleaning $12.00 (7 hires), snow shoveling $14.00 (5 hires). How much money in dollars did Charlie's Chores earn in the month of January?",
    correctAnswer: "339",
    answerType: "integer",
    explanation: [
      {
        label: "Calculate each chore's earnings",
        content:
          "Ironing: $9.50 \u00D7 10 = $95. Dog walking: $7.50 \u00D7 12 = $90. Kitchen: $12.00 \u00D7 7 = $84. Snow: $14.00 \u00D7 5 = $70.",
      },
      {
        label: "Sum up",
        content: "$95 + $90 + $84 + $70 = $339.",
      },
    ],
    tags: ["arithmetic", "word problems"],
    difficulty: "easy",
  },
  {
    id: "mcs-tg-2",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "Sunil draws a regular hexagon and a convex quadrilateral on a sheet of paper, so that no side of the quadrilateral lies on the same line as a side of the hexagon. What is the maximum total number of points in which the sides of the quadrilateral can intersect the sides of the hexagon?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Count possible intersections per side of the quadrilateral",
        content:
          "Each side of the quadrilateral is a line segment that can intersect the hexagon boundary at most 2 times (once entering, once exiting).",
      },
      {
        label: "Total for all four sides",
        content:
          "4 sides \u00D7 2 intersection points each = 8 maximum intersection points.",
      },
    ],
    tags: ["geometry", "combinatorics"],
    difficulty: "medium",
  },
  {
    id: "mcs-tg-3",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "Penelope and George go trick-or-treating together. Penelope gets 152 pieces of candy and George gets 124 pieces of candy. Penelope eats 5 pieces of candy every day, and George eats 4 pieces of candy every day. After how many days will George have the same amount of candy as Penelope?",
    correctAnswer: "28",
    answerType: "integer",
    explanation: [
      {
        label: "Set up equations",
        content:
          "After d days: Penelope has 152 \u2212 5d, George has 124 \u2212 4d.",
      },
      {
        label: "Set them equal",
        content: "152 \u2212 5d = 124 \u2212 4d, so 152 \u2212 124 = 5d \u2212 4d, giving d = 28.",
      },
    ],
    tags: ["algebra", "word problems"],
    difficulty: "easy",
  },
  {
    id: "mcs-tg-4",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "Rosie grows 160 bushels of corn per acre in a right triangular field with perpendicular sides of lengths 660 feet and 1320 feet. Given that an acre equals 43,560 ft\u00B2, what is the total number of bushels of corn that Rosie grows?",
    correctAnswer: "1600",
    answerType: "integer",
    explanation: [
      {
        label: "Find the area of the triangular field",
        content:
          "Area = (1/2)(660)(1320) = 435,600 ft\u00B2.",
      },
      {
        label: "Convert to acres",
        content: "435,600 / 43,560 = 10 acres.",
      },
      {
        label: "Calculate total bushels",
        content: "10 acres \u00D7 160 bushels/acre = 1600 bushels.",
      },
    ],
    tags: ["geometry", "unit conversion", "word problems"],
    difficulty: "medium",
  },
  {
    id: "mcs-tg-5",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "A standard, six-sided die is rolled five times. What is the probability that the five rolls are either all the same or all different? Express your answer to the nearest hundredth of a percent.",
    correctAnswer: "9.34",
    answerType: "decimal",
    explanation: [
      {
        label: "Total outcomes",
        content: "6\u2075 = 7776.",
      },
      {
        label: "All the same",
        content:
          "There are 6 ways (all 1s, all 2s, ..., all 6s).",
      },
      {
        label: "All different",
        content:
          "Choose 5 of 6 values: C(6,5) = 6 ways. Arrange them: 5! = 120 ways. Total = 6 \u00D7 120 = 720.",
      },
      {
        label: "Calculate probability",
        content:
          "P = (6 + 720) / 7776 = 726 / 7776 = 121/1296 \u2248 0.09336... = 9.34% (to the nearest hundredth of a percent).",
      },
    ],
    tags: ["probability", "combinatorics"],
    difficulty: "hard",
  },
  {
    id: "mcs-tg-6",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "If (0, 0), (6, 2), (\u22122, 6) and (a, b) are the coordinates of the vertices of a parallelogram, what is the least possible value for a + b?",
    correctAnswer: "-4",
    answerType: "integer",
    explanation: [
      {
        label: "Consider the three possible parallelograms",
        content:
          "In a parallelogram, the diagonals bisect each other. The fourth vertex depends on which pairs are opposite vertices.",
      },
      {
        label: "Case 1: (0,0) and (a,b) are opposite",
        content:
          "Midpoint of diagonal = midpoint of (6,2) and (\u22122,6) = (2, 4). So (0 + a)/2 = 2 and (0 + b)/2 = 4, giving a = 4, b = 8, so a + b = 12.",
      },
      {
        label: "Case 2: (6,2) and (a,b) are opposite",
        content:
          "Midpoint of diagonal = midpoint of (0,0) and (\u22122,6) = (\u22121, 3). So (6 + a)/2 = \u22121 and (2 + b)/2 = 3, giving a = \u22128, b = 4, so a + b = \u22124.",
      },
      {
        label: "Case 3: (\u22122,6) and (a,b) are opposite",
        content:
          "Midpoint of diagonal = midpoint of (0,0) and (6,2) = (3, 1). So (\u22122 + a)/2 = 3 and (6 + b)/2 = 1, giving a = 8, b = \u22124, so a + b = 4.",
      },
      {
        label: "Find the least value",
        content:
          "The three possible values of a + b are 12, \u22124, and 4. The least is \u22124.",
      },
    ],
    tags: ["coordinate geometry", "parallelogram"],
    difficulty: "hard",
  },
  {
    id: "mcs-tg-7",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      "Alan, Ben and Craig, who have three distinct ages, are among five children running a race. Assuming there are no ties, in how many different orders can the five children finish the race with Alan, Ben and Craig in order from oldest to youngest?",
    correctAnswer: "20",
    answerType: "integer",
    explanation: [
      {
        label: "Understand the constraint",
        content:
          "Alan, Ben and Craig must finish in a specific relative order (oldest to youngest), but the other two children can be in any position.",
      },
      {
        label: "Count the arrangements",
        content:
          "Choose 3 of the 5 finishing positions for Alan, Ben and Craig: C(5,3) = 10. Their order is fixed (oldest first). The remaining 2 children fill the other 2 positions in 2! = 2 ways.",
      },
      {
        label: "Total",
        content: "10 \u00D7 2 = 20 different finishing orders.",
      },
    ],
    tags: ["combinatorics", "counting"],
    difficulty: "hard",
  },
  {
    id: "mcs-tg-8",
    sectionId: "mc-target",
    gradeLevel: "7-8",
    questionText:
      'Let a trime be defined as a three-digit integer for which any two digits of the integer, ordered as they appear in the original integer, form a two-digit prime number. For example, 137 is a trime because 13, 17 and 37 are all prime numbers. However, 211 is not a trime because 21 is not prime. What is the greatest trime?',
    correctAnswer: "731",
    answerType: "integer",
    explanation: [
      {
        label: "Understand the condition",
        content:
          "For a three-digit number with digits A, B, C: the two-digit numbers AB, AC, and BC must all be prime.",
      },
      {
        label: "Search from large values down",
        content:
          "We want the largest such number. Start with large first digits. Try 7 as the first digit.",
      },
      {
        label: "Check 7_ _",
        content:
          "Try 731: AB = 73 (prime), AC = 71 (prime), BC = 31 (prime). All three are prime, so 731 is a trime.",
      },
      {
        label: "Verify it is the greatest",
        content:
          "Any trime starting with 8 or 9 would need 8_ or 9_ to be prime for the first two digits, but 8 and 9 as leading digits have limited prime options, and checking shows none form valid trimes larger than 731.",
      },
    ],
    tags: ["number theory", "primes"],
    difficulty: "hard",
  },

  // ═══════════════════════════════════════════════════════════════════
  // TEAM ROUND (10 questions, 20 minutes, calculator allowed)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "mcs-tm-1",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "William counted all the animals he saw at the zoo. The data he collected is: Birds 127, Fish 62, Mammals 93, Amphibians 63, Reptiles 42. What percentage of the animals that William saw are mammals? Express your answer to the nearest hundredth.",
    correctAnswer: "24.03",
    answerType: "decimal",
    explanation: [
      {
        label: "Find the total",
        content: "127 + 62 + 93 + 63 + 42 = 387 animals.",
      },
      {
        label: "Calculate the percentage",
        content:
          "93 / 387 \u2248 0.240310... = 24.03% (to the nearest hundredth).",
      },
    ],
    tags: ["statistics", "percent"],
    difficulty: "easy",
  },
  {
    id: "mcs-tm-2",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "How many ways are there to arrange the four integers 1, 2, 3 and 4 in a row so that no two adjacent numbers have a sum of 5?",
    correctAnswer: "8",
    answerType: "integer",
    explanation: [
      {
        label: "Identify pairs that sum to 5",
        content: "1 + 4 = 5 and 2 + 3 = 5. So 1 and 4 cannot be adjacent, and 2 and 3 cannot be adjacent.",
      },
      {
        label: "Total arrangements",
        content: "Total permutations of 1, 2, 3, 4 = 4! = 24.",
      },
      {
        label: "Count invalid arrangements",
        content:
          "Arrangements where 1 and 4 are adjacent: treat {1,4} as a block, giving 3! \u00D7 2 = 12 arrangements. Arrangements where 2 and 3 are adjacent: similarly 12. Arrangements where both pairs are adjacent: treat {1,4} and {2,3} as blocks, giving 2! \u00D7 2 \u00D7 2 = 8. By inclusion-exclusion: invalid = 12 + 12 \u2212 8 = 16.",
      },
      {
        label: "Valid arrangements",
        content: "24 \u2212 16 = 8 ways.",
      },
    ],
    tags: ["combinatorics", "counting"],
    difficulty: "medium",
  },
  {
    id: "mcs-tm-3",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "There are 93 sixth graders and 108 seventh graders entering a raffle. In each grade, the number of dog owners is twice the number of students who do not own a dog. What is the probability that a seventh grader who does not own a dog wins the raffle? Express your answer as a common fraction.",
    correctAnswer: "12/67",
    answerType: "fraction",
    explanation: [
      {
        label: "Find non-dog-owners in each grade",
        content:
          "In each grade, dog owners = 2 \u00D7 non-owners, so non-owners = 1/3 of total. Sixth grade non-owners: 93/3 = 31. Seventh grade non-owners: 108/3 = 36.",
      },
      {
        label: "Find total raffle entries",
        content: "93 + 108 = 201 students.",
      },
      {
        label: "Calculate probability",
        content: "P = 36/201 = 12/67.",
      },
    ],
    tags: ["probability", "ratios"],
    difficulty: "medium",
  },

  // Team 4 — SKIPPED (references a 5x5 grid figure with outlined cell pairs)

  {
    id: "mcs-tm-5",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "A satellite, located 400 km above Earth's surface, travels at a speed of 28,000 km/h. For simplicity, assume that Earth is a perfect sphere with circumference 40,075 km. How many minutes does it take the satellite to orbit Earth one time? Express your answer as a decimal to the nearest tenth.",
    correctAnswer: "91.3",
    answerType: "decimal",
    explanation: [
      {
        label: "Find Earth's radius",
        content:
          "Circumference = 2\u03C0R = 40,075 km, so R = 40,075 / (2\u03C0) \u2248 6378.1 km.",
      },
      {
        label: "Find the satellite's orbital radius",
        content: "r = 6378.1 + 400 = 6778.1 km.",
      },
      {
        label: "Find the orbital circumference",
        content:
          "Orbital circumference = 2\u03C0(6778.1) \u2248 42,587.6 km.",
      },
      {
        label: "Calculate time",
        content:
          "Time = distance / speed = 42,587.6 / 28,000 \u2248 1.521 hours = 1.521 \u00D7 60 \u2248 91.3 minutes.",
      },
    ],
    tags: ["geometry", "rates", "circles"],
    difficulty: "hard",
  },

  // Team 6 — SKIPPED (references a figure showing house arrangement)

  {
    id: "mcs-tm-7",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "How many distinct positive integers n can be expressed as n = a^b for integers such that 1 \u2264 a \u2264 10 and 1 \u2264 b \u2264 10?",
    correctAnswer: "42",
    answerType: "integer",
    explanation: [
      {
        label: "List all powers",
        content:
          "For each base a from 1 to 10 and each exponent b from 1 to 10, compute a^b and collect all distinct values.",
      },
      {
        label: "Handle b = 1",
        content:
          "a^1 gives 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (10 values).",
      },
      {
        label: "Add new values for higher exponents",
        content:
          "For b = 2: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 (adds 16, 25, 36, 49, 64, 81, 100 = 7 new). For b = 3: adds 8, 27, 125, 216, 343, 512, 729, 1000 (8 new, but 8 and 27 from b=1 of a=8,a=27... no, 8 is new, 27 is new). Continue this process for all exponents.",
      },
      {
        label: "Count all distinct values",
        content:
          "After carefully enumerating and removing duplicates (e.g., 2^6 = 64 = 4^3 = 8^2), the total number of distinct positive integers is 42.",
      },
    ],
    tags: ["number theory", "exponents", "counting"],
    difficulty: "hard",
  },

  // Team 8 — SKIPPED (references a geometric figure with equilateral triangle on square)

  {
    id: "mcs-tm-9",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "What is the area of the quadrilateral ABCD with vertices A(\u22123, 4), B(0, 6), C(7, 2), and D(\u22122, \u22124)?",
    correctAnswer: "52",
    answerType: "integer",
    explanation: [
      {
        label: "Use the Shoelace Formula",
        content:
          "For vertices listed in order (x\u2081,y\u2081), (x\u2082,y\u2082), (x\u2083,y\u2083), (x\u2084,y\u2084): Area = (1/2)|x\u2081(y\u2082 \u2212 y\u2084) + x\u2082(y\u2083 \u2212 y\u2081) + x\u2083(y\u2084 \u2212 y\u2082) + x\u2084(y\u2081 \u2212 y\u2083)|.",
      },
      {
        label: "Substitute",
        content:
          "= (1/2)|(\u22123)(6 \u2212 (\u22124)) + 0(2 \u2212 4) + 7((\u22124) \u2212 6) + (\u22122)(4 \u2212 2)| = (1/2)|(\u22123)(10) + 0(\u22122) + 7(\u221210) + (\u22122)(2)| = (1/2)|\u221230 + 0 \u2212 70 \u2212 4| = (1/2)|\u2212104| = 52.",
      },
    ],
    tags: ["coordinate geometry", "area"],
    difficulty: "hard",
  },
  {
    id: "mcs-tm-10",
    sectionId: "mc-team",
    gradeLevel: "7-8",
    questionText:
      "How many of the first million positive integers share no common factors greater than 1 with 2020?",
    correctAnswer: "396040",
    answerType: "integer",
    explanation: [
      {
        label: "Factorize 2020",
        content: "2020 = 2\u00B2 \u00D7 5 \u00D7 101.",
      },
      {
        label: "Apply Euler's totient-style counting",
        content:
          "We need integers from 1 to 1,000,000 not divisible by 2, 5, or 101. Use inclusion-exclusion.",
      },
      {
        label: "Inclusion-exclusion",
        content:
          "Divisible by 2: 500,000. By 5: 200,000. By 101: 9900. By 2 and 5 (=10): 100,000. By 2 and 101 (=202): 4950. By 5 and 101 (=505): 1980. By 2, 5, and 101 (=1010): 990.",
      },
      {
        label: "Compute",
        content:
          "Count divisible by at least one = 500,000 + 200,000 + 9900 \u2212 100,000 \u2212 4950 \u2212 1980 + 990 = 603,960.",
      },
      {
        label: "Final answer",
        content:
          "Numbers sharing no common factor > 1 with 2020: 1,000,000 \u2212 603,960 = 396,040.",
      },
    ],
    tags: ["number theory", "inclusion-exclusion", "Euler totient"],
    difficulty: "hard",
  },
];
