import { Question } from "../types";

export const olympiad56Questions: Question[] = [
  // =================================================================
  // DECEMBER 2024
  // =================================================================

  {
    id: "oly56-dec-1",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "Bobby reads 60 pages of a book on the first day. On the second day, he reads 30 pages more than the first day. On the third day, he finishes the book by reading 10 pages more than the second day. According to this, how many pages is this book?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "100", value: "A" },
      { label: "160", value: "B" },
      { label: "250", value: "C" },
      { label: "340", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Bobby reads 60 pages of a book on the first day. On the second day, he reads 30 pages more than the first day. It means he reads 90 pages on the second day. On the third day, he finishes the book by reading 10 pages more than the second day. It means that he reads 100 pages on the third day. To sum up, he read 60 + 90 + 100 = 250 pages in three days and he finished the book. The book has 250 pages in total." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-2",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "7 cm 3 cm The rectangular prism below is formed by placin 3 of the above square prisms side by side. What is the surface area of this rectangular prism cm2?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "206", value: "A" },
      { label: "218", value: "B" },
      { label: "222", value: "C" },
      { label: "254", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "As the object above is square prism, the side lengths of top and bottom face are equal which is 3 cm. Rectangular prism has 6 rectangular faces in which all the pairs of opposite faces are congru Total surface area = 2x(lw + wh + hl) 2 x (27 + 63 + 21) = 222 cm2" },
    ],
    tags: ["geometry", "3D geometry"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-3",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "A ball dropped from a height of 8 meters rises to 0.2 times the height of its previous bounce after each fall. What is the total distance tra- veled by the ball after its third bounce?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "3,84", value: "A" },
      { label: "8,64", value: "B" },
      { label: "10,84", value: "C" },
      { label: "11,84", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To solve it, let’s calculate the total distance t by the ball step-by-step. The ball is dropped from a height of 8 meters. After the first bounce, the ball rises to 0.2 × 8 meters = 1.6 meters. The ball then falls again from this height. Distance traveled downward: 1.6 meters. After the second bounce, the ball rises to 0.2 × 1.6 meters = 0.32 meters. The ball then falls again from this height. Distance traveled downward: 0.32 meters. Adding these distances together: Total distance = 8 + 3.2 + 0.64 = 11.84 meters. So, after the third bounce, the total distance tr by the ball is 11.84 meters." },
    ],
    tags: ["rate problems"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-4",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "2 cm 3 cm 3 cm 2 cm 1 cm 1 cm 5 cm g 4 cm What is the perimeter of this compound shape? 1 , Q7: AB x CD 9A + AB 322 What is the value of A + B + C + D?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "10", value: "A" },
      { label: "12", value: "B" },
      { label: "14", value: "C" },
      { label: "16", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "2 cm 3 cm 3 cm 2 cm 1 cm 1 cm 5 cm 4 cm The opposite sides of the rectangle are equal in length. Therefore, the length of the compound shape will be the sum of all horizontal sides of it. ent. Length = 2 cm + 3 cm + 1 cm + 5 cm = 11 cm The width of the compound shape will be the sum of all vertical sides of it. Width = 3 cm + 2 cm+ 1 cm + 4 cm = 10 cm Add the lengths of all the outer edges. raveled Do not include the inner edges where shapes meet. Perimeter: 11 cm + 10 cm + 2 cm + 3 cm + 3 cm + 2 cm + 1 cm + 1 cm + 5 cm + 4cm = 42 cm" },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-5",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "Using the digits 3, 1, 6, and 9 each exactly once what is 1 more than the smallest four-digit number that can be formed?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "3170", value: "A" },
      { label: "1370", value: "B" },
      { label: "6320", value: "C" },
      { label: "9632", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The smallest four-digit number that can be formed using the digits 3, 1, 6, and 9 is 1369. Adding 1 to aveled this number gives 1370. So, the answer is 1370. 1" },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-6",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "(5 x 100 000) + (7x 1000) + (3 x 100) + (2 x 10) Which of the following is the natural number that has been decomposed in the form above?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "570 302", value: "A" },
      { label: "507 320", value: "B" },
      { label: "570 320", value: "C" },
      { label: "507 302", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "(5 x 100 000) = 500 000 (7 x 1 000) = 7 000 (3 x 100) = 300 (2 x 10) = 20 500 000 + 7 000 + 300 + 20 = 507 320" },
    ],
    tags: ["number sense"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-8",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "If the digit in the thousands place of a five-digit natural number is decreased by 2 and the digit in the ten thousands place is increased by 3, how the value of number will change? Choose the CORRECT. 2",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "increases by 1 000", value: "A" },
      { label: "decreases by 1 000", value: "B" },
      { label: "increases by 28 000", value: "C" },
      { label: "decreases by 28 000", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let’s denote the original five-digit number as N, which can be expressed as: N = 10000a + 1000b + 100c + 10d + e where: • a is the digit in the ten thousands pla • b is the digit in the thousands place • c is the digit in the hundreds place • d is the digit in the tens place • e is the digit in the ones place According to the problem, if we decrease the dig in the thousands place by 2 and increase the dig in the ten thousands place by 3, the new number ı N = can be written as: ı N = 10000(a + 3) + 1000(b− 2) + 100c + 10d + e Now, let’s simplify this expression: ı N = 10000a + 30000 + 1000b − 2000 + 100c + 10d + e ı N = (10000a + 1000b + 100c + 10d + e) + 30000 − 2000 ı N = N + 28000 So, the new number is the original number plus 28000." },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-9",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "47 4747 What is the quotient in the division operation given above?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "11", value: "A" },
      { label: "100", value: "B" },
      { label: "101", value: "C" },
      { label: "111", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To find the quotient of 4747 ÷ 47, you can perform the division: 4747 ÷ 47 = 101 So, the quotient is 101" },
    ],
    tags: ["arithmetic", "ratios"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-10",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "..... A stationery store that sells 23 boxes, each containing 12 pencils, has paid 1656 dollars. How much does each pencil cost?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "3", value: "A" },
      { label: "4", value: "B" },
      { label: "6", value: "C" },
      { label: "8", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "First, find the total number of pencils: Total number of pencils = 23 boxes × 12 pencils per box = 276 pencils Next, calculate the cost per pencil: it Cost per pencil = Total payment / Total number it of pencils = 1656 dollars / 276 pencils Performing the division: 1656 =6 276 So, each pencil costs 6 dollars. 2" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-11",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "Which of the following cannot be the perimeter of a rectangle with side lengths that are prime numbers?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "20", value: "A" },
      { label: "26", value: "B" },
      { label: "32", value: "C" },
      { label: "48", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let the side lengths of the rectangle be two pri numbers, p and q. The perimeter P of the rectangl is given by P = 2(p + q). To solve, check if each the given options can be expressed as 2(p + q), where p and q are prime numbers. Option 20: 20 = 2(p + q) p + q = 10 Prime pairs adding up to 10 : 3 + 7 = 10 So, 20 is possible. Option 26: 26 = 2(p + q) p + q = 13 Prime pairs adding up to 13 : 5 + 8 (but 8 is no prime). 7 + 6 (but 6 is not prime). No valid prime pairs add up to 13, so 26 is not possible. Option 32: 32 = 2(p + q) p + q = 16 Prime pairs adding up to 16: 3+13=16 So, 32 is possible. Option 48: 48 = 2(p + q) p + q = 24 Prime pairs adding up to 24 : 5 + 19 = 24 So, 48 is possible. The only option that cannot be the perimeter is" },
    ],
    tags: ["geometry", "number theory", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-12",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "How many integers are there between -13 and 3?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "10", value: "A" },
      { label: "15", value: "B" },
      { label: "16", value: "C" },
      { label: "17", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The integers between –13 and 3 (exclusive) are: –12, –11, –10, –9, –8, –7, –6, –5, –4, –3, –2, –1 0, 1, 2. To count them, simply list or recognize that thi a sequence from –12 to 2. So, there are 15 integers between –13 and 3." },
    ],
    tags: ["number sense"],
    difficulty: "easy",
  },

  {
    id: "oly56-dec-14",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "Which option is wrong? (3 points) 24 27 3 2 45 59 4 4 3",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "= 8", value: "A" },
      { label: "> 10", value: "B" },
      { label: "11 <", value: "C" },
      { label: "12 >", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Option A: When 24 is divided by 3, the answer will be 8. Option B: When the denominators of both fracti- ons are equalized, the numerator 27 will be greater than 20. t Option C: When the denominators of both fracti- ons are equalized, the numerator 45 will be greater than 44. Option D: When the denominators of both fractions are equalized, the numerator 48 will be less than 59. However, in the option, 12 > 59/4 is written incorrectly." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-15",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "Lizzy’s 3 of her money is equal to 3 of 5 8 Richard’s money. If Lizzy has 75 dollars, how much money does Richard have?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "120", value: "A" },
      { label: "135", value: "B" },
      { label: "150", value: "C" },
      { label: "180", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let Lizzy’s total amount of money be L and Richard’s total amount of money be R. According to the problem: 26. 3 3 ×L= ×R 5 8 Given L = 75 dollars, substitute into the equation: 3 3 × 75 = × R 5 8 Simplifying: 225 3 = ×R 5 8 , 3 45 = ×R 8 3 s is To find R, multiply both sides by : 8 8 R = 45 × = 120 3 So, Richard has 120 dollars. 3" },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-16",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "55% of the 1800 students in a school are male. How many students are female? 7 1 4 4 19: 5 –2 –1 = 8 5 5 5 Find the value of A",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "1", value: "A" },
      { label: "5", value: "B" },
      { label: "7", value: "C" },
      { label: "8", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Find the number of male students: 55 Number of male students = × 1800 100 = 0.55 × 1800 = 990 To find the number of female students, subtract the number of male students from the total number of students: Number of female students = 1800 − 990 = 810 So, there are 810 female students in the school." },
    ],
    tags: ["percentages"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-17",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "A 70° 110° B C D In the figure, triangle ABC has m(A∠BC) = 70° and m(A∠CD) = 110°. Given that points B, C, and D are collinear, what is the measure of m(B∠AC)?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "30", value: "A" },
      { label: "40", value: "B" },
      { label: "50", value: "C" },
      { label: "60", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Since B, C, and D are collinear, A∠CD and A∠BC form a linear pair and add up to 180°. Find the measure of B∠CD: B∠CD − A∠CD = 180° − 110° = 70° Since ABC is a triangle, the sum of interior angl of triangle is 180°. A∠BC + A∠CB = 70°+ 70° = 140° 180° −140° = 40°" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-18",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "36 m 28 m A triangular plot of land with a perimeter of 96 meters will have trees planted along its perimeter at equal intervals, with the condition that the trees must be located at the vertices of the triangle as well. How many trees are needed at a minimum? 4",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "20", value: "A" },
      { label: "23", value: "B" },
      { label: "24", value: "C" },
      { label: "25", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Find the missing side length: 36 m + 28 m + ? = 96 m ? is 32 m. Find the HCF: Prime factorizations: 36 : 36 = 22 x 32 28 : 28 = 22 x 7 32 : 32 = 25 dentify common prime factors: • The only common prime factor is 2. Find the lowest power of the common prime factor: • For 36 and 28, the highest common power of 2 is 22 • For 32, the common power of 2 is 22 So, the HCF is 22 = 4. Use the HCF to Determine Number of Trees: The HCF of 36, 28, and 32 meters is 4 meters. This means that the spacing interval of 4 meters will evenly divide each side of the triangle. Calculate the number of intervals: • Total Perimeter: 96 meters • Interval Length: 4 meters 96 • Number of Intervals: = 24 4 • Number of Trees: 24 intervals Therefore, at least 24 trees are needed to plant them at equal intervals of 4 meters along the perimeter of the triangle. es 4" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-20",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "A lift that can carry a maximum of 250 kg has a box with a mass of (x + 80)(x + 80)(x + 80) kg placed in it. How many more kilograms can be added to the lift at most?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "170 + x", value: "A" },
      { label: "330 – x", value: "B" },
      { label: "170 – x", value: "C" },
      { label: "180 + x", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Maximum weight capacity of the lift: 250 kg Calculate the weight of the box: Weight of the box: x + 80 kg Remaining capacity = Maximum weight capacity − Weight of the box = 250 − (x + 80) Remaining capacity = 250 − x − 80 Remaining capacity = 170 − x So, the lift can carry 170 − x kilograms more at most." },
    ],
    tags: ["arithmetic"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-21",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "º º Points A, B, and C given in the figure are collinear. Since [BE is perpendicular to [BF, what is the measure of E∠BD?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "12", value: "A" },
      { label: "18", value: "B" },
      { label: "32", value: "C" },
      { label: "56", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Since A, B, and C are collinear, D∠BC and A∠BD form a linear pair and add up to 180°. Since [BE is perpendicular to [BF, C∠BE is 30°. 132° + 30° + E∠BD= 180° 162° + E∠BD = 180° E∠BD = 18°" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-22",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "What is the area of ABCD? 5",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "80", value: "A" },
      { label: "120", value: "B" },
      { label: "160", value: "C" },
      { label: "170", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Since the area of the triangle is given, we can find the height of the triangle. 1 1 A= ×b×h= x 12 x h= 60 cm² 2 2 6 x h= 60 cm² So, the height is 10 cm. The formula of the area of parallelogram is: A=b×h base: 17 cm height: 10 cm A = 17 x 10 = 170 cm²" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-23",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "3 2 m 4 7 1 m 8 What is the perimeter of this rectangle? 1 1 8 4 1 1 8 4",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "8", value: "A" },
      { label: "8", value: "B" },
      { label: "9", value: "C" },
      { label: "9", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Perimeter = 2 × (Length + Width) Given: 3 • Length: 2 4 7 • Width: 1 8 Convert mixed numbers to improper fractions: 11 Length: 4 15 Width: 8 Find the sum of the length and width: 11 15 To add and , find a common denominator. 4 8 The least common denominator of 4 and 8 is 8. 11 Convert to a fraction with denominator 8: 4 11 22 x2= 4 8 Add the fractions: 22 15 37 + = 8 8 8 Calculate the perimeter: 37 74 1 Perimeter = 2 × = =9 8 8 4 1 So, the perimeter of the rectangle is 9 units 4 5" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-24",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "9 21 = 0,75 = 1,05 12 20 7 10 = 1,4 = 2,5 5 4 How many of the equalities given above are correct? 6",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "1", value: "A" },
      { label: "2", value: "B" },
      { label: "3", value: "C" },
      { label: "4", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The correct answer is D." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly56-dec-25",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "A computer with a sticker price of 1800 euros is sold with 25% paid upfront and the remaining amount divided into 9 equal installments. How much is each installment that the customer has to pay?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "120", value: "A" },
      { label: "135", value: "B" },
      { label: "150", value: "C" },
      { label: "165", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Calculate the upfront payment: The upfront payment is 25% of the total price. Upfront payment = 0.25 × 1800 euros = 450 euros Calculate the remaining amount to be paid in installments: Remaining amount = Total price − Upfront payment Remaining amount = 1800 − 450 = 1350 euros Divide the remaining amount into 9 equal installments: 1350 Installment amount = = 150 euros 9 So, each installment that the customer has to pay is 150 euros." },
    ],
    tags: ["arithmetic", "percentages"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-26",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "• The opposite sides are parallel. • The sum of the interior angles is 360°. • The lengths of the diagonals are not equal. • The diagonals are perpendicular to each other. • The diagonals bisect each other. Which polygon do the above properties belong to?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "Square", value: "A" },
      { label: "Rectangle", value: "B" },
      { label: "Rhombus", value: "C" },
      { label: "Parallelogram", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Opposite sides are parallel: This indicates that the polygon is a type of parallelogram. 1. The sum of the interior angles is 360°: This sum of the interior angles corresponds to a quadrilateral. 2. The lengths of the diagonals are not equal: In a parallelogram, the diagonals are not necessarily equal in length (except in the special case of a rectangle or square). 3. The diagonals are perpendicular to each other: This is a specific property of a rhombus (a type of parallelogram). 4. The diagonals bisect each other: This is another property of parallelograms. Given all these properties, the polygon described is a rhombus. A rhombus is a special type of parallelogram where: • Opposite sides are parallel. • The sum of the interior angles is 360°. • The diagonals are perpendicular to each other. • The diagonals bisect each other. • The diagonals are not necessarily equal in length. So, the polygon with the given properties is a rhombus. 6 Calculate the total time before lunch: • Total time before lunch: Total class time before lunch + Total break time before lunch = 200 + 40 = 240 minutes Convert 240 minutes to hours and minutes: 240 minutes = 4 hours Add the lunch break duration: • Lunch break duration: 45 minutes Calculate the total class time after lunch: • Number of classes after lunch: 4 • Duration of each class: 40 minutes • Total class time after lunch: 4×40=160 minutes Calculate the total break time after lunch: • Number of breaks after lunch: 3 (one less than the number of classes) • Duration of each break: 10 minutes • Total break time after lunch: 3×10=30 minutes Calculate the total time after lunch: • Total time after lunch: Total class time after lunch + Total break time after lunch = 160 + 30 = 190 minutes Convert 190 minutes to hours and minutes: 190 minutes = 3 hours 10 minutes Calculate the total time spent at school: • Total time before lunch: 4 hours • Lunch break: 45 minutes • Total time after lunch: 3 hours 10 minutes Add these together: 4 hours + 45 minutes + 3 hours + 10 minutes = 7 hours 55 minutes Calculate the end time: • Start time: 9:00 am • Add total time: 7 hours 55 minutes The end time is: 9:00 + 7 hours 55 minutes = 4.55 pm So, the student leaves the school at 4.55 PM es) 7" },
    ],
    tags: ["arithmetic", "geometry"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-27",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "40 cm 20 cm If the length of the longer side of the rectangle given above is decreased by 20%, and the length of the shorter side is increased by 10%, how does the perimeter change?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "Increased by 6", value: "A" },
      { label: "Increased by 10", value: "B" },
      { label: "Decreased by 12", value: "C" },
      { label: "Constant", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Initial Perimeter Calculation: The perimeter P of a rectangle is given by: P = 2 × (Length + Width) So, the initial perimeter is: Pinitial = 2 × (40 + 20) = 2 × 60 = 120 cm Changes to Dimensions: Decrease the length by 20%: ı New length L : ı L = 40 − (0.20 × 40) = 40 − 8 = 32 cm Increase the width by 10%: ı New width W : ı W = 20 + (0.10 × 20) = 20 + 2 = 22 cm New Perimeter Calculation: The new perimeter Pnew with the updated dimensions is: ı ı Pnew = 2 × (L + W ) = 2 × (32 + 22) = 2 × 54 = 108 cm Change in Perimeter: The change in the perimeter is: Change = Pnew − Pinitial = 108 − 120 = −12 cm So, the perimeter decreases by 12 cm." },
    ],
    tags: ["geometry", "percentages"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-28",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "In a school, there are five classes before the lunch break and four classes after the lunch break. Each class is 40 minutes long. There are 10-minute breaks between each class. The lunch break is 45 minutes long. If a student starts the first class at 09:00, what time does the student leave the school?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "4.55 pm", value: "A" },
      { label: "5.05 pm", value: "B" },
      { label: "5.15 pm", value: "C" },
      { label: "5.30 pm", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Calculate the total class time before lunch: • Number of classes before lunch: 5 • Duration of each class: 40 minutes • Total class time before lunch: 5 × 40 = 200 minutes Calculate the total break time before lunch: • Number of breaks before lunch: 4 (one less than the number of class • Duration of each break: 10 minutes • Total break time before lunch: 4 × 10 = 40 minutes" },
    ],
    tags: ["rate problems"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-29",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "Which two of the squares with the given col- ors, if removed, would prevent the remaining pieces from forming a cube?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "green – brown", value: "A" },
      { label: "blue – purple", value: "B" },
      { label: "yellow – red", value: "C" },
      { label: "green – purple", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Removing the red and yellow squares ensures that the remaining squares (pink, orange, green, blue, purple, and brown) cannot be folded into a shape with six connected faces. Removing these two disrupts the continuity of the net, preventin the remaining pieces from aligning into a cube." },
    ],
    tags: ["geometry", "3D geometry", "number sense"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-30",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "4 cm 3 cm 8 cm What is the surface area of the rectangular prism shown in the unfolded figure above, in cm²? 7",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "118", value: "A" },
      { label: "124", value: "B" },
      { label: "136", value: "C" },
      { label: "150", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Surface Area of a rectangular prism = 2x (lh + wh + lw) Length: 8 cm Width: 4 cm Height: 3 cm Surface Area of a rectangular prism = 2 x (24 + 12 + 32) = 2 x (68) = 136 cm²" },
    ],
    tags: ["geometry", "3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-31",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "If the length of an edge of a cube-shaped box with a base area of 144 cm² is increased by 25%, by how many cubic centimeters does the volume increase?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "1480", value: "A" },
      { label: "1568", value: "B" },
      { label: "1647", value: "C" },
      { label: "1982", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Find the length of an edge of the original cube: Since the base area of the cube is 144 cm², and the base of the cube is a square, we can find the length of one edge s using: g s2 = 144 cm² = 144 Solving for s: s = √144 = 12 cm Calculate the volume of the original cube: The volume V of a cube is given by: V = s3 For the original cube: Voriginal = 123 = 1728 cm3 Increase the length of the edge by 25%: The new edge length sı is: sı = s + 0.25s = 1.25s sı = 1.25 × 12 = 15 cm Calculate the volume of the new cube: ı The volume V of the new cube is: ı V = (s')3 = 153 = 3375 cm3 Calculate the increase in volume: The increase in volume ΔV is: ı ΔV = V − Voriginal ΔV= 3375 −1728=1647 cm3 So, the volume increases by 1647 cm3." },
    ],
    tags: ["geometry", "percentages", "rate problems", "3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-32",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "How many unit cubes are there in this shape?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "18", value: "A" },
      { label: "22", value: "B" },
      { label: "24", value: "C" },
      { label: "30", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To determine the number of unit cubes in the shape, let's count the cubes layer by layer from the bottom to the top. Bottom Layer: The bottom layer has 12 cubes Middle Layer: The middle layer has 9 cubes. Top Layer: The top layer has 1 cube. Total number of unit cubes: 12 + 9 + 1 = 22 cubes 8" },
    ],
    tags: ["3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-33",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "A circular segment, whose diameter is equal to one side of a square with a perimeter of 24 cm, is cut out from the square. What is the perimeter of the remaining part? (Take π as 3.) 8 triangle ONP given above are equal, what is the length rcles with diameters AD and BC are given. If |DC|=40 perimeter of the shaded region? (π = 3)",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "21", value: "A" },
      { label: "24", value: "B" },
      { label: "163", value: "C" },
      { label: "164", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Find the side length of the square: The perimeter of the square is 24 cm. Since a square has four equal sides: Perimeter 24 Side length = = = 6 cm 4 4 Determine the circumference of the cut-out semicircle: The side length of the square (6 cm) is also the diameter of the semicircle. The circumference of a full circle is given by: C = π × Diameter For a semicircle, the curved part of the circumf rence is half of that: 6 Curved part of semicircle = π × = 3 × 3 = 9 cm 2 However, since the full perimeter of the semicir includes the diameter (which is the side of the square): Total semicircle perimeter = 9 cm(curved part) + 6 cm(diameter) = 15 cm But, since the diameter coincides with the side of the square, we only consider the curved part (9 cm) as the additional perimeter. Calculate the remaining perimeter: • The square initially has a perimeter of 24 c • When the semicircle is cut out, the straight side along the square’s edge remains, so we subtract the length of this side once and ad the curved part of the semicircle. Remaining perimeter = 24 cm − 6 cm + 9 cm = 27 c So, the perimeter of the remaining part is 27 cm" },
    ],
    tags: ["geometry"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-34",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "If the area of the square JKLM and the area of the of |NO| in cm?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "9", value: "A" },
      { label: "12", value: "B" },
      { label: "Option C", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Find the area of the square JKLM: The side length |JK| (which is the same as |BC|) is given as 12 cm. The area Asquare of the square is: Asquare = side x side = 144 cm² Use the area equality to find |NO|: Given that the area of the triangle ONP is equal to the area of the square JKLM, we have: Atriangle = Asquare = 144 cm² The area of triangle ONP can be calculated using: e- 1 Atriangle = × base × height 2 Here, the base |RP| is given as 8 cm. The height cle corresponding to this base is |NO|. 1 So, × 8 × |NO| = 144 2 Simplifying, 4 × |NO| = 144 |NO| = 36 cm Final Answer: The length of |NO| is 36 cm. m. d m . 9 r m he al 10" },
    ],
    tags: ["geometry"],
    difficulty: "hard",
  },

  {
    id: "oly56-dec-35",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "5-6",
    questionText: "In the figure above, the rectangle ABCD and two ci cm and |BC|=24 cm in the figure above, what is the 9",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "148", value: "A" },
      { label: "152", value: "B" },
      { label: "Option C", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The shaded region's perimeter includes: Two straight sides of the rectangle (AB and DC), each of length 40 cm. Two semicircles, each with a diameter of 24 cm. Straight Sides Contribution: Length of AB and DC = 2 × 40 cm = 80 cm Semicircles' Contribution: The circumference of a full circle with a diamete of 24 cm is: Circumference = π × Diameter = 3 × 24 cm = 72 c Since each semicircle is half of a full circle, t total contribution of the two semicircles is: Tot Semicircle Length = 72/2 cm + 72/2 cm = 36 cm + 36 cm = 72 cm Calculate the Total Perimeter: The total perimeter of the shaded region is the sum of the contributions from the straight sides and the semicircles: Total Perimeter = 80 cm + 72 cm = 152 cm The perimeter of the shaded region is 152 cm." },
    ],
    tags: ["geometry"],
    difficulty: "hard",
  },

  // =================================================================
  // JANUARY 2025
  // =================================================================

  {
    id: "oly56-jan-1",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "The digits 6, 8, 5, 7, 0, 4, and 9 are used to fo a 7-digit smallest odd natural number without repeating any digits. According to this, which of the following options correctly represents the pronunciation of the number formed? eighty-nine hundred eighty-nine eighty-nine hundred eighty-nine",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "Four hundred fifty-six thousand seven hundre", value: "A" },
      { label: "Four million five hundred six thousand seven", value: "B" },
      { label: "Four million fifty-six thousand seven hundre", value: "C" },
      { label: "Four million five hundred sixty thousand sev", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To form the smallest possible odd number using the given digits 6, 8, 5, 7, 0, 4, 9, we need: 1. To arrange the digits in ascending order for th smallest number. 2. The last digit must be odd to ensure the number is odd. The available odd digits are 5, 7, and 9. To make the number as small as possible, we choose 9 as the last digit. Now, arrange the remaining digits 0, 4, 5, 6, 7, 8 ascending order, starting with the smallest non-ze digit 4 to avoid a leading zero: 4,056,789 The number 4,056,789 is read as: Four million fift six thousand seven hundred eighty-nine. The correct answer is C." },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly56-jan-2",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "3227 2589 3412 421 + + + According to the addition operations given in the figure, what number is in the bottom box?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "11446", value: "A" },
      { label: "12646", value: "B" },
      { label: "13443", value: "C" },
      { label: "14423", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Add 3227 and 2589: 3227 + 2589 = 5816 Add 3412 and 4215: 3412 + 4215 = 7627 Now, add the results from the first two sums: 5816 + 7627 = 13443 The answer is C." },
    ],
    tags: ["arithmetic", "ratios", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly56-jan-4",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "5 90° 100° 75° 91° 125° 45° 175° How many of the angles given above are obtuse angles? 1",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "3", value: "A" },
      { label: "4", value: "B" },
      { label: "5", value: "C" },
      { label: "6", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "An obtuse angle is an angle that is greater than 90° and less than 180°. Let’s check each angle: • 90° is not an obtuse angle (it's a right angle), • 100° is an obtuse angle, • 75° is not an obtuse angle (it's an acute angle), • 91° is an obtuse angle, • 125° is an obtuse angle, • 45° is not an obtuse angle (it's an acute angle), • 175° is an obtuse angle. The obtuse angles are: 100°, 91°, 125°, and 175°. Thus, there are 4 obtuse angles. 1" },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },

  {
    id: "oly56-jan-5",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "Which of the following is not a research question? frequently?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "In which neighborhood is your school located", value: "A" },
      { label: "How many foreign languages do you know?", value: "B" },
      { label: "What football teams do your friends support?", value: "C" },
      { label: "Which subject do your friends study most", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "A research question is a question that can be use to gather data or information from a group or an individual and typically requires multiple answer or exploration. Let's analyze the options: • A) \"In which neighborhood is your school located? — This is a specific factual question and not open-ended for research purposes. This is not a research question. • B) \"How many foreign languages do you know?\" — This can vary from person to person and could be used in research. • C) \"What football teams do your friends support?\" — This could be used to gather information from multiple individuals and is appropriate f research. • D) \"Which subject do your friends study most frequently?\" — This also gathers information about habits and preferences, which can be used in research." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly56-jan-6",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "A tailor has 8 meters of fabric. The tailor use 2 meters 45 centimeters for a dress and 325 centimeters for a suit. How many meters of fabric does the tailor have left?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "2", value: "A" },
      { label: "2.3", value: "B" },
      { label: "2.5", value: "C" },
      { label: "3", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "First, let's convert everything to centimeters fo easier calculation. • The tailor has 8 meters of fabric: 8 m = 800 cm. • The tailor used 2 meters and 45 centimeters for the dress: 2 m 45 cm = 200 cm + 45 cm = 245 cm • The tailor used 325 centimeters for the suit Now, calculate the total fabric used: Total used = 245 cm + 325 cm = 570 cm. Now, subtract the fabric used from the total fab Remaining fabric = 800 cm − 570 cm = 230 cm. Convert the remaining fabric back to meters: 230 cm = 2.3 m." },
    ],
    tags: ["rate problems"],
    difficulty: "easy",
  },

  {
    id: "oly56-jan-9",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "The number 3 is a two-digit prime number. How many different digits can be placed in the to form a prime number?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "2", value: "A" },
      { label: "3", value: "B" },
      { label: "4", value: "C" },
      { label: "5", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The possible two-digit numbers starting with 3 ar 30, 31, 32, 33, 34, 35, 36, 37, 38, 39 • 31 is prime. • 32 is not prime (even number). • 33 is not prime (divisible by 3). • 34 is not prime (even number). • 35 is not prime (divisible by 5). • 36 is not prime (even number). • 37 is prime. • 38 is not prime (even number). • 39 is not prime (divisible by 3). The prime numbers are 31 and 37. The correct answer is A." },
    ],
    tags: ["arithmetic", "number theory", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly56-jan-11",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "In the figure, a field is divided into equal sections, and some sections are planted with tomatoes, peppers, and eggplants. Given that the area planted with peppers is 90 square meters, what is the total area of the entire field?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "480", value: "A" },
      { label: "450", value: "B" },
      { label: "420", value: "C" },
      { label: "360", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The field is divided into equal sections. Lookin the grid, there are 4 rows and 4 columns, making a total of: 4 × 4 = 16 sections. From the diagram, we can count the number of sections that have peppers. There are 3 sections planted with peppers. We are given that the area of the pepper-planted sections is 90 square meters, and there are 3 pepper sections. So, the area of one section is: 90 = 30 square meters. 3 Since each section is 30 square meters, and ther are 16 sections in total, the total area of the 30 × 16 = 480 square meters." },
    ],
    tags: ["arithmetic", "geometry"],
    difficulty: "easy",
  },

  {
    id: "oly56-jan-12",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "In the image, there is a bag containing yellow 3 and red marbles. of the marbles in the bag 7 are yellow, totaling 21. How many red marbles are in the bag? N 3",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "9", value: "A" },
      { label: "18", value: "B" },
      { label: "28", value: "C" },
      { label: "49", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The correct answer is C." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly56-jan-14",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "A candle with a height of 30 cm loses 40% of its height after burning for a while. What is the remaining height of the candle?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "12 cm", value: "A" },
      { label: "15 cm", value: "B" },
      { label: "18 cm", value: "C" },
      { label: "21 cm", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The candle loses 40% of its original height. Therefore, the remaining height will be 60% of the original height. e Original height of the candle: 30 cm. field is: 40 Height lost: 30 × = 12 100 Remaining height: 30 − 12 = 1830 – 12 = 1830 − 12 =18 cm. So, the answer is C." },
    ],
    tags: ["percentages"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-15",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "Which of the following numbers has a sum of prime factors equal to 15?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "15", value: "A" },
      { label: "35", value: "B" },
      { label: "70", value: "C" },
      { label: "105", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We need to find which of the given numbers has prime factors that sum up to 15. Let's analyze each option: 1. Option A: 15 • Prime factors of 15: 3 and 5. • Sum: 3 + 5 = 8. 2. Option B: 35 • Prime factors of 35: 5 and 7. • Sum: 5 + 7 = 12. 3. Option C: 70 • Prime factors of 70: 2, 5, and 7. • Sum: 2 + 5 + 7 = 14. 4. Option D: 105 • Prime factors of 105: 3, 5, and 7. • Sum: 3 + 5 + 7 = 15. Answer: D) 105 4" },
    ],
    tags: ["arithmetic", "number theory", "number sense"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-16",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "In a group of 5 people, the average age is 24. The ages of 4 people are given as 18, 16, 25, and 26. According to the given information, what is the age of the fifth person? 4",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "27", value: "A" },
      { label: "31", value: "B" },
      { label: "35", value: "C" },
      { label: "41", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We are given the average age of 5 people as 24. Let's denote the age of the fifth person as x. Si the average age is given as 24: Total age of 5 people = 5 × 24 = 120. The ages of the 4 people are 18, 16, 25, and 26. Their total age is: 18 + 16 + 25 + 26 = 85 Age of the fifth person = 120 − 85 = 35 Answer: C) 35" },
    ],
    tags: ["statistics"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-17",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "The perimeter of a square with a side length of 60 cm is equal to the circumference of a circle. What is the diameter of the circle? (Use π = 3.)",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "30 cm", value: "A" },
      { label: "40 cm", value: "B" },
      { label: "60 cm", value: "C" },
      { label: "80 cm", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The side length of the square is 60 cm. The perimeter P of a square is given by: P = 4 × side length = 4 × 60 = 240 cm The circumference of the circle C is given by: C = π × diameter According to the problem, the perimeter of the square is equal to the circumference of the circ Therefore: 240 = 3 × diameter 240 Diameter = = 80 cm 3" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-18",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "A helium-filled balloon rises 100 meters every 20 seconds from the moment it is released. Assuming the sea level is at zero height, what is the exact height of the balloon 5 minutes after its release?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "1200", value: "A" },
      { label: "1500", value: "B" },
      { label: "1800", value: "C" },
      { label: "2000", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Calculate the total time in seconds for 5 nce minutes: 5 minutes = 5 × 60 = 300 seconds Determine how many 20-second intervals are in 300 seconds: 300 Number of intervals = = 15 20 Calculate the height gained in each interval: The balloon rises 100 meters in each 20-second interval. So, the total height gained after 15 inter- vals is: Total height = 15 × 100 = 1500 meters." },
    ],
    tags: ["arithmetic"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-19",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "–315 is a four-digit integer. Given that −315 > −3139, how many different integers can be placed in ?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "4", value: "A" },
      { label: "5", value: "B" },
      { label: "6", value: "C" },
      { label: "7", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Given that the number is −31 5 and it's a four-digit integer,  must be a digit from 0 to 9. The condition −315 > −3139 implies: −3105 − 10> −3139 Simplifying this inequality gives: 34 >10 Dividing both sides by 10: 3.4 > le. Since  must be an integer, the possible values for  are: = 0, 1, 2, 3 There are 4 different integers that can be placed in . 5" },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-20",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "a = 2,2 b = 2,02 c = 2,202 d = 2,022 Which of the following orderings is correct? 5",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "a < b < c < d", value: "A" },
      { label: "b < a < c < d", value: "B" },
      { label: "b < d < a < c", value: "C" },
      { label: "a < b < d < c", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To compare these decimals, align their digits: Compare a = 2.2 (or 2.200) with the others: • a > b because 2.200 > 2.020 • a < c because 2.200 < 2.202 • a > d because 2.200 > 2.022 Compare b = 2.02 (or 2.020): • b < a as shown above. • b < c because 2.020 < 2.202 • b < d because 2.020 < 2.022 Compare c = 2.202: • c > a,b, and d as shown above. Compare d = 2.022: • d < a as shown above. • d > b because 2.022 > 2.020 • d < c because 2.022 < 2.202 The correct ordering is b < d < a < c." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-21",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "A 4.8 km road will have poles placed every 16 meters starting from the beginning. How many poles will be along the road?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "250", value: "A" },
      { label: "300", value: "B" },
      { label: "350", value: "C" },
      { label: "400", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Convert 4.8 km to meters: 4.8 km = 4800 m Divide the total length of the road by the spacin between the poles: 4800 m = 300 16 m This calculation gives us the number of intervals between poles. Number of poles: Since the poles are placed at the start and at each interval along the road, th total number of poles placed will be exactly 300. The answer is B." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-22",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "William was born on September 15, 2005, and Michael was born on August 23, 1992. What is the age difference between Michael and William? 6",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "13 years and 22 days", value: "A" },
      { label: "13 years, 1 month, and 8 days", value: "B" },
      { label: "13 years, 3 months, and 21 days", value: "C" },
      { label: "13 years, 1 month, and 18 days", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Subtract the years: • 2005 − 1992 = 13 years. Subtract the months: • William's month (September) is later than Michael's month (August), so no borrowing is needed. • 9 − 8 = 1 month. Subtract the days: • William's day (15) is after Michael's day (23), so we need to borrow 1 month (30 days). • 15 + 30 − 23 = 22 days. The age difference between Michael and William is 13 years and 22 days. Answer: A) 13 years and 22 days." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-23",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "The side length of a square-shaped garden with an area known to be between 150 m² and 250 m² is asked. Which of the following cannot be the side length of this garden?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "13", value: "A" },
      { label: "14", value: "B" },
      { label: "15", value: "C" },
      { label: "16", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The area of a square is calculated as: Area = side length2 Check side length 13: 132 = 169 m2(valid, between 150 and 250) Check side length 14: g 142 = 196 m2 (valid, between 150 and 250) Check side length 15: 152 = 225 m2 (valid, between 150 and 250) Check side length 16: 162 = 256 m2(not valid, greater than 250) e Conclusion: The side length that cannot be the side of the garden is D) 16. 6" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-24",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "A tap releases 140 mL of water per second when it is open. If Robert brushes his teeth for 1.5 minutes with the tap open, how many mililiters of water are wasted unnecessarily?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "9600 mL", value: "A" },
      { label: "10800 mL", value: "B" },
      { label: "12000 mL", value: "C" },
      { label: "12600 mL", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Convert 1.5 minutes to seconds: 1.5 minutes = 1.5 × 60 = 90 seconds Calculate the total amount of water: • The tap releases 140 mL per second. • Total water in 90 seconds: 140 mL × 90 seconds = 12600 mL second Robert causes 12600 liters of water to be wasted. Answer: D) 12600." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly56-jan-25",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "The number A is 5 more than 2 times the number x. The number B is 3 less than 5 times the number x. Which of the following expressions represents the sum A + B?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "3x + 2", value: "A" },
      { label: "7x + 8", value: "B" },
      { label: "3x + 8", value: "C" },
      { label: "7x + 2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Express A in terms of x: A = 2x + 5 Express B in terms of x: B = 5x − 3 Calculate A + B: A + B = (2x + 5) + (5x − 3) Combine like terms: A + B = 2x + 5x + 5 − 3 = 7x + 2 Answer: D) 7x + 2" },
    ],
    tags: ["arithmetic", "algebra", "rate problems", "number sense"],
    difficulty: "hard",
  },

  {
    id: "oly56-jan-26",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "Given the triangle A¿BC with BD = 12 cm and EC = 3 cm, what is the ratio of the area of A¿BD to the area of A¿EC?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "1", value: "A" },
      { label: "2", value: "B" },
      { label: "3", value: "C" },
      { label: "4", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Base Lengths: • The base BD of A¿BD is 12 cm. • The base EC of A¿EC is 3 cm. Height: Since A¿BD and A¿EC share the same height from vertex A to base BC, the ratio of their areas depends only on the ratio of their bases. Area Ratio: The area of a triangle is given by Area 1 = × base × height. 2 The height cancels out in the ratio: Area of A¿BD Base of A¿BD Ratio of areas = = Area of A¿EC Base of A¿EC 12 = =4 3 The ratio of the area of A¿BD to the area of A¿EC is 4." },
    ],
    tags: ["geometry", "ratios"],
    difficulty: "hard",
  },

  {
    id: "oly56-jan-27",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "A greengrocer has 720 kg of tomatoes and places them into 40 boxes. If each box contains an equal amount of tomatoes, how many kg is two-thirds of the tomatoes in one box?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "6", value: "A" },
      { label: "8", value: "B" },
      { label: "12", value: "C" },
      { label: "18", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Total Weight per Box: The total weight of toma- toes is 720 kg, and they are divided into 40 boxes. So, the weight of tomatoes in each box is: 720 kg Weight per box = =18 kg 40 Calculate Two-Thirds of One Box: We need to find two-thirds of the weight in one box: 2 Two-thirds of 18 kg = × 18 = 12 kg. 3 The answer is C. 7" },
    ],
    tags: ["problem solving"],
    difficulty: "hard",
  },

  {
    id: "oly56-jan-28",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "Camila’s age is 3 times Tom’s age and 4 years less than Hailey’s age. If Tom’s age is a, which of the following algebraic expressions represents Hailey’s age? 7",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "3a − 4", value: "A" },
      { label: "4a + 2", value: "B" },
      { label: "3a + 4", value: "C" },
      { label: "4a − 2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Camila's age is 3 times Tom's age: 3a. Camila's age is 4 years less than Hailey's age. Let Hailey's age be represented by x. According to the problem: 3a = x − 4 Rearrange the equation to isolate x: x = 3a + 4 The algebraic expression representing Hailey's age is C) 3a + 4." },
    ],
    tags: ["algebra", "rate problems"],
    difficulty: "hard",
  },

  {
    id: "oly56-jan-29",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "A 55° D E 112° ?° 58° B C Given the triangle A∠BC where B∠AC = 55°, A∠BC = 58°, and B∠DE = 112°, what is the measure of m(D∠EC)?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "97°", value: "A" },
      { label: "103°", value: "B" },
      { label: "107°", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Find A∠CB: The sum of the angles in A∠BC is 180° So: A∠CB = 180°− B∠AC − A∠BC A∠CB = 180°− 55°− 58° = 67° Consider the Quadrilateral BCED: We need to find m(D∠EC) in quadrilateral BCED. The sum of the internal angles of a quadrilateral is 360°. Known Angles in BCED: • A∠BC=58° • A∠CB=67° • B∠DE=112° Sum of the Known Angles: Add up the known angles: A∠BC + A∠CB + B∠DE = 58° + 67° + 112° = 237° Calculate m(D∠EC): Subtract the sum of the known angles from 360° to find m(D∠EC): m(D∠EC) = 360° − 237° = 123° The correct answer is D) 123°." },
    ],
    tags: ["geometry"],
    difficulty: "hard",
  },

  {
    id: "oly56-jan-30",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "In a group, the number of girls is 4 times the number of boys. The average age of the girls is 16, and the average age of the boys is 41. What is the average age of the entire group?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "19", value: "A" },
      { label: "20", value: "B" },
      { label: "21", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let’s say there is 1 boy. Then there would be 4 times as many girls, which means 4 girls. So, the total number of people in the group would be 1 boy + 4 girls = 5 people. The average age of 1 boy is 41. So, the total age of all boys is 41. The average age of each girl is 16. Since there are 4 girls, the total age of all the girls is: 16 × 4 = 64 The total age of the whole group is: 41 + 64 = 105 There are 5 people in total, so the average age is: 105 Average age = = 21 5" },
    ],
    tags: ["statistics", "rate problems", "number sense"],
    difficulty: "hard",
  },

  {
    id: "oly56-jan-32",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "I. Multiplying a number by 0.4 is the same as multiplying it by 2 and dividing by 5. II. Multiplying a number by 0.5 is the same as dividing it by 2. III. Multiplying a number by a decimal number always results in a number greater than the original number. IV. Multiplying a number by 0.2 is the same as dividing it by 5. V. Multiplying a number by 0.25 is the same as dividing it by 4. Determine how many of the following state- ments are true. 23 8",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "1", value: "A" },
      { label: "2", value: "B" },
      { label: "3", value: "C" },
      { label: "4", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let's evaluate each statement one by one: I. Multiplying a number by 0.4 is the same as multiplying it by 2 and dividing by 5. 2 • 0.4 = , so this statement is true 5 II. Multiplying a number by 0.5 is the same as dividing it by 2. 1 • 0.5 = , so this statement is true. 2 III. Multiplying a number by a decimal num- ber always results in a number greater than the original number. • This statement is false because if the decimal is less than 1 (e.g., 0.3), the is smaller than the original number. IV. Multiplying a number by 0.2 is the same as dividing it by 5. 1 • 0.2 = , so this statement is true. 5 V. Multiplying a number by 0.25 is the same as dividing it by 4. 1 • 0.25 = , so this statement is true. 4 • Statements I, II, IV, and V are true. • Statement III is false. There are 4 true statements." },
    ],
    tags: ["arithmetic", "patterns", "number sense"],
    difficulty: "hard",
  },

  {
    id: "oly56-jan-33",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "3,48 3,35 7,15 Olivia and her friends, during an overseas tri visit a buffet and decide to order each of the items in a quantity equal to the integer part price. How much did Olivia and her friends pay in total? 1 a 10",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "$64.80", value: "A" },
      { label: "$69.85", value: "B" },
      { label: "$70.54", value: "C" },
      { label: "$82.48", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Each item will be ordered based on the integer part of its price: • RICE BOX: 3 units (from 3.48) . • TACOS MENU: 3 units (from 3.35) • MAKE IT COMBO: 7 units (from 7.15) Calculate the total cost: RICE BOX: 3 × 3.48 = 10.44 TACOS MENU: 3 × 3.35 = 10.05 result MAKE IT COMBO: 7 × 7.15 = 50.05 Add the costs: 10.44 + 10.05 + 50.05 = 70.54 Olivia and her friends have paid a total of C) $70.54. 9" },
    ],
    tags: ["number sense"],
    difficulty: "hard",
  },

  {
    id: "oly56-jan-34",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "5-6",
    questionText: "< < 3 6 9 Find the sum of all natural numbers a that satisfy the condition.",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "12", value: "A" },
      { label: "13", value: "B" },
      { label: "14", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To make it easier, we can multiply everything by 6 to get rid of the fractions: 1 10 6× <a<6× 3 9 Simplify: Now we solve the left and right sides: 1 10 6× = 2 and 6 × ≈ 6.67 3 9 So the inequality becomes 2< a < 6.67 List the Natural Numbers: The natural numbers that are between 2 and 6.67 are: a = 3, 4, 5, 6 Add These Numbers: Now we add them up: 3 + 4 + 5 + 6 = 18 The sum of the natural numbers aaa that satisfy the condition is 18. So, the answer is D) 18." },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "hard",
  },

];
