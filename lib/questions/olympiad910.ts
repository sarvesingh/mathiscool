import { Question } from "../types";

export const olympiad910Questions: Question[] = [
  // =================================================================
  // DECEMBER 2024
  // =================================================================

  {
    id: "oly910-dec-1",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "Given that m, n, and k are negative integers: m.n = 24 n.k = 18 What is the maximum value of m.n.k?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "–72", value: "A" },
      { label: "–64", value: "B" },
      { label: "–48", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Since m, n, and k are negative integers, their absolute values must multiply to the corresponding positive values given in the equations. Let’s list possible pairs of (m, n) that satisfy m • (m, n) = (−1, −24) • (m, n) = (−2, −12) • (m, n) = (−3, −8) • (m, n) = (−4, −6) • (m, n) = (−6, −4) • (m, n) = (−8, −3) • (m, n) = (−12, −2) • (m, n) = (−24, −1) Similarly, let’s list possible pairs of (n, k) tha n.k = 18: • (n, k) = (−1, −18) • (n, k) = (−2, −9) • (n, k) = (−3, −6) • (n, k) = (−6, −3) • (n, k) = (−9, −2) • (n, k) = (−18, −1) For n = −6: • m = −4(since m.n = 24) • k = −3(since n.k=18) The product is: m.n.k = (−4).(−6).(−3) = −72" },
    ],
    tags: ["number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-2",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "For the four-digit number 4a8b to be divisible by 11, how many different values can a + b take?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "0", value: "A" },
      { label: "1", value: "B" },
      { label: "2", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "A number is divisible by 11 if the difference between the sum of the digits in odd positions and the sum of the digits in even positions is a multiple of 11 .n=24: (including 0). For the number 4a8b4a8b4a8b, we have: • The digits in odd positions: 4 and 8. • The digits in even positions: a and b. The divisibility rule for 11 states: (4 + 8) − (a + b) must be divisible by 11 Simplifying this, we get: 12 − (a + b) must be divisible by 11 t satisfy Let’s solve this: 12 − (a + b) = 0 or 12 − (a + b) = 11 Case 1: 12 − (a + b) = 0 a + b = 12 Case 2: 12 − (a + b) = 11 a+b=1 a and b are digits, so a and b can be from 0 to 9. Checking valid values: • a + b = 12 possible digit pairs: (3,9), (4,8), (5,7), (6,6) • a + b = 1 possible digit pairs: (0,1), (1,0) So valid values: a + b = 12: (6, 6) (7, 5) (8, 4) (9, 3) are four possi- bilities. Hence a+b value ranges equals four exactly as possible pairs correct computation. 1" },
    ],
    tags: ["arithmetic", "number theory", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-3",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "What is the value of a + b? (1 point)",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "–1", value: "A" },
      { label: "–3", value: "B" },
      { label: "–5", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To determine the sum of a+b given that the equatio (3a−12)x + b + 7 = 0 has infinitely many solutions we must analyze the conditions under which a linear equation in one variable has infinitely man solutions. A linear equation in the form Ax + B = 0 has: 1. A unique solution if A≠0. 2. No solution if A=0 and B ≠ 0 3. Infinitely many solutions if A = 0 and B = 0 For the given equation (3a − 12)x + b + 7 = 0 to have infinitely many solutions, both coefficients x and the constant term must be zero. Coefficient of x must be zero: 3a − 12 = 0 Solving for a: 3a − 12 = 0 ⇒ 3a = 12 ⇒ a = 4 Constant term must be zero: b+7=0 Solving for b: b + 7 = 0 ⇒ b = −7 Now that we have a = 4 and b = −7, we can find the sum a + b: a + b = 4 + (−7) = 4 − 7 = −3 Therefore, the sum of a + b is −3" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-5",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "Given the equation: √2√22 = x 3 What is the value x12 for the value of x that satisfies this equation?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "22", value: "A" },
      { label: "28", value: "B" },
      { label: "29", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "First, simplify the expression inside the square root: 1 1 3 √ 22 = 2 1+ 4 2 2.2 = 2 =2 Now, the original expression becomes: 3 7 7.1 7 3 4 4 4 3 12 2.2 = 3 2 = 2 =2 7 12 So, x = 2 7 7 12 12 Now, we need to find x12:(2 )12 = (2 )x12 = 27 2" },
    ],
    tags: ["algebra"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-6",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "Given that x and y are positive integers: x.y = 2.x + 10 What is the maximum value of x2−y? 1",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "75", value: "A" },
      { label: "82", value: "B" },
      { label: "97", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The correct answer is C." },
    ],
    tags: ["number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-7",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "Find the value of [(84)(2)]x in terms of m, n, and k. E) m . n . k",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "n3 . m . k", value: "A" },
      { label: "n . m . k3", value: "B" },
      { label: "m3 . n . k", value: "C" },
      { label: "m . n2 . k", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "First, simplify (84 . 2)x = 84 . 2 = (22 . 3 . 7) . 2 = (23 . 3 . apply exponent rule. Using the rule (a . b)x = ax. (23 . 3 . 7) = 23x . 3x . 7x After that, substitute m, n, and k: 2 = n , 3 = m, 3x 3 7x = k In conclusion, (84. 2)x = 23x . 3x . 7x = n" },
    ],
    tags: ["patterns"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-9",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "Workers go to a carpet factory to complete a jo Six of these workers weave an 18 m² carpet in 6 days. How many days will it take for 8 workers to weave a 24 m² carpet?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "3", value: "A" },
      { label: "4", value: "B" },
      { label: "5", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Six workers weave an 18 m² carpet in 6 days. Let’s calculate the amount of work done by one worker in one day: Work done by 6 workers in 6 days = 18 m² Work done by 1 worker in 6 days = 18 m²/6 = 3 m² Work done by 1 worker in 1 day = 3 m²/6 = 0.5 m² Now, we have 8 workers, and they need to weave a 24 m² carpet. The total work required is 24 m². 7)x Then, Since 1 worker weaves 0.5 m² per day, 8 workers will weave: bx Work done by 8 workers in 1 day = 8 × 0.5 = 4 m² To weave 24 m² at a rate of 4 m² per day: x 24 m2 Number of days = = 6 days 4m2/day 3 . m.k 3" },
    ],
    tags: ["number theory", "rate problems"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-10",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "Given the sequence of numbers: 4, 3, 2, 3, 5, 7, 3, 8, 2 I. The mode is 3. II. The median is equal to the mode. III. The arithmetic mean is less than the mode. Which of these statements is incorrect? 8",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "I", value: "A" },
      { label: "II", value: "B" },
      { label: "III", value: "C" },
      { label: "I and II           E) II and III", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The mode is the number that appears most frequ- ently in the sequence. In the sequence 4, 3, 2, 3, 5, 7, 3, 8, 2: 3 appea 3 times, which is more frequent than any other number. So, the mode is 3. Statement I is correct. To find the median, we need to arrange the numbers in ascending order: 2, 2, 3, 3, 3, 4, 5, 7, 8 The median is the middle value. Since there are 9 numbers, the middle one (5th) is 3. So, the median is 3, which is equal to the mode. Statement II is correct. The arithmetic mean is calculated by summing all t numbers and dividing by the number of elements: Sum = 4 + 3 + 2 + 3 + 5 + 7 + 3 + 8 + 2 = 37 Number of elements = 9 Arithmetic mean = 37/9 ≈ 4.11 The arithmetic mean (approximately 4.11) is greate than the mode (3). Statement III is incorrect." },
    ],
    tags: ["patterns", "statistics", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-11",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "There are four numbers, each of which has at least three digits. If the units digit of each of these numbers is decreased by 3 in terms of its numerical value, the tens digit is decreased by 2 in terms of its numerical value, and the hundreds digit is increased by 4 in terms of its numerical value, what is the sum of the four numbers? b. 2 fi- Q14: G s: D C x E F A 2x + m B In the figure above, ABCD and EFGD are squares. |AB| = 2x + m and |GF| =x. The square EFGD is cut out from the square ABCD. A quadratic equation is formed to represent the area of the remaining region, which is set to zero. Given that the sum of the roots of this equation is 8, what is the value of m? 12",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "–8", value: "A" },
      { label: "−6", value: "B" },
      { label: "−4", value: "C" },
      { label: "1508               E)1510", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To solve this problem, we need to understand the transformation applied to each digit of the four rs numbers. Let’s denote the original four numbers as A, B, C, and D.. Each number is at least three digits long, so let’s represent a generic three-digit number as XYZ, where X is the hundreds digit, Y is the tens digit, and Z is the ones digit. According to the problem, the transformations are: • The ones digit Z is decreased by 3. • The tens digit Y is decreased by 2. • The hundreds digit X is increased by 4. Let’s apply these transformations to the number ı ı ı XYZ and denote the new number as X Y Z : he • X=X+4 • Y=Y−2 • Z=Z−3 ı ı ı The new number can be written as X Y Z , r which in numerical form is: X’Y’Z’ = 100(X + 4) + 10(Y − 2) + (Z − 3) implifying this expression: ı ı ı X Y Z = 100X + 400 + 10Y − 20 + Z − 3 ı ı ı X Y Z + 10Y + Z + 377 Thus, the transformation adds 377 to each number. Since there are four numbers, the total increase in the sum due to the transformations is: 4 × 377 = 1508 If the original sum of the four numbers A, B, C, and D is S, then the new sum after the transformations is: S + 1508 4" },
    ],
    tags: ["arithmetic", "geometry", "algebra", "patterns", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-12",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "For a polygon with n sides, the function f(x) de ned for the value x inside the polygon is given a f(x) = xn – 2 2 For example, for a hexagon (6-sided polygon) with x = 2: f(2) = 26 – 2 = 24 = 16 3 Given this, for the figure provided (which is a combination of different polygons) with x = 3, what is the result of the operation?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "34", value: "A" },
      { label: "36", value: "B" },
      { label: "38", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The provided figure shows a triangle (3 sides), square (4 sides), and a pentagon (5 sides) layered together. The function f(x) needs to be calculated for each polygon and combined as follows: Step 1: Calculate for the triangle (n = 3): f(3) = 33−2 = 31 = 3 Step 2: Calculate for the square (n = 4): f(3) = 34−2 = 32 = 9 Step 3: Calculate for the pentagon (n = 5): f(3) = 35−2 = 33 = 27 Since the powers should be multiplied (as implied by the geometric arrangement and typical function compositions): f(3) = 31 × 32 × 33 = 31+2+3 = 36" },
    ],
    tags: ["geometry", "ratios", "combinatorics"],
    difficulty: "easy",
  },

  {
    id: "oly910-dec-13",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "Given the polynomial P(x) = x4 + 4x3+ 9, what is the remainder when it is divided by x3 + 3? E) −6x−3",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "−2x−3", value: "A" },
      { label: "−2x+3", value: "B" },
      { label: "−3x−3", value: "C" },
      { label: "−3x+3", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To find the remainder when dividing the polynomi P(x) = x4 + 4x3 + 9 by x3 + 3, we can use the divis algorithm for polynomials. The division algorithm states that: P(x) = (x3 + 3).Q(x) + R(x) where R(x) is the remainder, and Q(x) is the quoti Since we are dividing by a cubic polynomial, the remainder R(x) should be a polynomial of degree less than 3, i.e., R(x) = ax2 + bx + c. To find the remainder, substitute x3 = −3 into P(x P(x) = x4 + 4x3 + 9 Since x4 = x.x3 = −3x, substitute x3 = −3: P(x) = (−3x) + 4(−3) + 9 P(x)= −3x − 12 + 9 P(x) = −3x − 3 So, the remainder when P(x) is divided by x3 + 3 is −3x − 3." },
    ],
    tags: ["arithmetic"],
    difficulty: "medium",
  },

  {
    id: "oly910-dec-16",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "y 5 4 0 1 –6 –3 2 –2 The graph of the function f(x) is given below. Given that g(x) = 5 − f(x + 1), what is the su of g(−7) + g(3)? 1",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "5", value: "A" },
      { label: "6", value: "B" },
      { label: "7", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To find g(−7): To find g(3): g(3) = 5 − f(3 + 1) = 5 − f(4) From the graph, find the value of f(4): f(4) = 4 Thus: g(3) = 5 − 4 = 1 • g(−7) = 5 • g(3)=1 So, the sum g(−7) + g(3) = 5 + 1 = 6" },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly910-dec-18",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "A grocer sells 40% of a product at a 60% loss. f(x) At what percentage profit must the remaining products be sold so that the grocer neither makes a profit nor incurs a loss? x 4 m 8 E) 9",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "50", value: "A" },
      { label: "44", value: "B" },
      { label: "40", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Assume the initial total cost of all products is 100 units. The grocer sells 40% of the product at a 60% loss. The cost of 40% of the product is: Cost of 40% = 40 Since this part is sold at a 60% loss: Sale price 40% = 40 x (1 – 0.60) = 16 Let the percentage profit required on the remainin 60% be p. The cost of the remaining 60% is: Cost of 60% = 60 The sale price of the remaining 60% should be: Sal p price of 60% = 60 x (1 + ) 100 The total sale price should equal the original tot cost: 60p 16 + 60 x (1 + ) = 100 100 Simplify the equation: 60p 16 + 60 + = 100 100 60p 76 + =100 100 Subtract 76 from both sides: 60p = 24 100 Solve for p: 60p = 2400 2400 p= = 40 100" },
    ],
    tags: ["arithmetic", "percentages"],
    difficulty: "medium",
  },

  {
    id: "oly910-dec-19",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "O D 40o 35o C A B E In the figure: • O is the center of the circle. • A, B, C are points of tangency. • m(C∠DB) = 35° 35 • m(A∠OC) = 40° 128 53 What is the measure of m(A∠EB) based on the given information? 128 4",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "30", value: "A" },
      { label: "35", value: "B" },
      { label: "40", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Central Angle AOC: • The central angle AOC is 40°. This angle su- btends the arc AC in the circle. The important thing to note is that a central angle and the angle of subtended by the same arc at any other point on the circle are related. g Angle CDB: • The angle CDB = 35° is given and is an angle formed at a point on the circumference by the intersection of the tangent from point D and the circle. e • The angle m(A∠EB) that subtends the arc AB should follow the rule that the angle at the center al is twice the angle at the circumference. Use Given Angles: • You have m(C∠DB) = 35°, which might imply a direct application to another corresponding angle. 40° + (2 x 35°) + (2 x ?) = 180° 110° + (2 x ?) = 180° Subtract 110° from both sides: (2 x ?) = 70° ? = 35° 7" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly910-dec-20",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "y D(x,5) C(5,5√3) A O B In the given diagram, a circle centered at O is placed on the coordinate plane. The center of the circle is at the origin. Given points: • C(5, 53) • D(x, 5) Find the length of |DC|.",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "5", value: "A" },
      { label: "5ñ2", value: "B" },
      { label: "10", value: "C" },
      { label: "10ñ2                E) 10ñ3", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The radius r of the circle can be calculated usi the coordinates of point C(5, 53): r = |OC| = 52 6(532 = √100 = 2 So, the radius r = 10r = 10r = 10 units. The equation of the circle centered at O(0,0) with radius 10 is: x2 + y2 = 100 For point D(x, 5), substitute y = 5 into the circl equation: x2 = 52 + 100 x2 = 25 + 100 x2 = 75 x = 53 Thus, the coordinates of point D are D(53, 5). Now, we use the distance formula to find the lengt of |DC| between points C(5, 53) and D(53,5): |DC| = (53 − 5)2 + (5 − 53)2 Since both the terms have the same base (5), you can use identities like (a − b)2 to simplify: |DC| = ( 25 × (3 − 23 + 1)) = 50 × (3 + 1) |DC| = 100 x 2 = 102" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly910-dec-22",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "B(2, –1 0) C(a, b) ) A(–6, 2 In the figure above, trees are planted at equal intervals along the edge of a street. Given the points A(−6, 2), B(2, −10), and C(a,b) What is the value a + b?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "–10", value: "A" },
      { label: "–9", value: "B" },
      { label: "–8", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To find the distance between the house at the beginning and the two trees at the end, we need to calculate the distance between two coordinates. We can find the distance between points A and B by subtracting their coordinates from each other: B − A = (2, −10) − (−6,2) = (8, −12) There are a total of 4 equal intervals between the two trees. To find the distance between the trees coordinate terms, we divide the total interval by (8 – 12) = (2, –3) 4 There is one interval between tree B and tree C, which means there is only a distance of (2, −3) un between them: B − C = (2 − a, −10 − b) = (2 , –3) Solving this equation, we get: a = 0 and b = −7" },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly910-dec-23",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "Given the polynomial P(x) = x3 − 2x2 + 3x − 1, the remainder when this polynomial is divided by (x + 1)2 is K(x). What is the value of K(−1)? 5",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "–7", value: "A" },
      { label: "–4", value: "B" },
      { label: "–3", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To solve this, we need to perform polynomial division or use the Remainder Theorem, factoring, or another method to find the remainder. We can express P(x) as: P(x) = (x + 1)2.Q(x) + K(x) where Q(x) is the quotient and K(x) is the remainder. Since we are dividing by (x + 1)2, K(x) must be a linear polynomial of the form se K(x) = ax + b. in 4: To find a and b, we substitute x = −1 into P(x) and ı its derivative P (x). Calculate P(−1): P(−1) = (–1)3 − 2(–1)2 + 3(−1)−1 = −1−2−3−1 = −7 its Since (x + 1)2 will be zero when x = −1, the remainder K(−1) is P(−1) = −7. Now, differentiate P(x): ı P (x) = 3x2 − 4x + 3 ı Substitute x = −1 into P (x): ı P (−1) = 3(–1)2 − 4(−1) + 3 = 3 + 4 + 3 = 10 The derivative gives us the slope at x = −1, and because (x + 1)2 has a double root at x = −1, the remainder polynomial can be found by solving using P(−1) and P(−1) to ensure the correct polynomial fits. Thus, after applying these steps, the correct rema- inder K(x) evaluated at K(−1) is: b = −7 Since we’ve established b = −7, K(−1) leads directly to the conclusion that b = −7, so the correct K(−1) is already determined as −7. 9" },
    ],
    tags: ["arithmetic"],
    difficulty: "medium",
  },

  {
    id: "oly910-dec-24",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "2 3 2 3 8 From a cube with an edge length of 8 cm, two square prisms, as shown in the figure, are cut out What is the surface area of the remaining solid in square centimeters?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "494", value: "A" },
      { label: "358", value: "B" },
      { label: "478", value: "C" },
      { label: "470                    E) 462", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The surface area Scube of a cube with an edge length of 8 cm is: Scube = 6×(edge length)2 = 6 × 64 = 384 cm2 For the first prism (3 cm × 3 cm × 2 cm), the surf area is: Sprism1 = 2 × (3 × 3) + 2 × (3 × 2) + 2 × (2 × 3) = 18 + 12 + 12 = 42 cm2 For the second prism (2 cm × 2 cm × 2 cm), the surface area is: Sprism2 = 2 × (2 × 2) + 2 × (2 × 2) + 2 × (2 × 2) = 8 + 8 + 8 = 24 cm2 Subtract the surface area of the faces that were hidden inside the cube. Sremaining = 384 − 66 + 40 = 358 cm 2" },
    ],
    tags: ["geometry", "rate problems", "3D geometry"],
    difficulty: "medium",
  },

  {
    id: "oly910-dec-25",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "N M K L D C A B In the cube shown in the figure, the area of the triangle A(ANC) is given as 83 cm2. What is the volume of the cube in cubic centi- meters?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "16ñ2", value: "A" },
      { label: "27", value: "B" },
      { label: "64", value: "C" },
      { label: "81ñ3		 E) 125", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The triangle ANC is formed by points A, N, and C in the cube. • A is a vertex of the cube, N and C are on adjacent ace faces, making ANC a right triangle. Let’s assume the side length of the cube is sss. The coordinates of the vertices can be assumed as follows: • A at (0,0,0) • N at (s,0,0) • C at (0,s,s) Given that the area of ANC = 83 cm2 The area of a right triangle can be expressed as: 1 Area of ANC = × Base × Height 2 For triangle ANC, base AN = s. The height h is the perpendicular from C to AN. Given the cube’s geometry, this height would also relate to the diagonal of a face. The area of triangle ANC is: 1 s22 × s × s2 = 1 4 Setting this equal to the given area: s22 = 83 2 s22 = 163 Square both sides: 2s2 = 16.16.3 Since we need a simpler form, the equation simp- lifies when adjusted correctly: s3 = 64 Given that s = 4 cm (solved), s3 = 64 cubic centimeters. 10" },
    ],
    tags: ["geometry", "3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly910-dec-26",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "P K L . A B In the cone above, points K and L are located at the midpoint of the cone’s slant height. If the tap at point P fills the entire cone in 80 minutes; how many minutes will it take for the water level to reach points K and L?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "30", value: "A" },
      { label: "40", value: "B" },
      { label: "50", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Points K and L are located at the midpoint of the slant height of the cone. This means that the heig of the water level reaching K or L is half the tot height of the cone. The formula of the volume V of a cone is: 1 V = πr2h 3 If the original cone has a height h and radius r, t h r smaller cone will have a height and radius . 2 2 The volume of the smaller cone can be expressed as: 1 r 2 h 1 V = π( ) = V 3 2 2 8 Therefore, the volume of the smaller cone is the volume of the original cone. The entire cone is filled in 80 minutes. The volum of the entire cone V is filled in 80 minutes. 1 Since the volume of the smaller cone is o 8 original cone, the time taken to fill the smaller 1 will be x 80 minutes which is 10 minutes. 8 So, by subtracting the time taken to fill the smal cone from the time taken to fill the entirec one, can find the minutes it takes for the water to rea points K and L. 80 minutes – 10 minutes = 70 minutes" },
    ],
    tags: ["problem solving"],
    difficulty: "hard",
  },

  {
    id: "oly910-dec-27",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "B A The figure above is the net of a cube with a vol- ume of 64 cm³. Point A is the midpoint of the edge where it is located, and point B is a vertex. When the shape is folded back into a cube, what is the length of |AB| in centimeters? 6",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "3ñ2", value: "A" },
      { label: "6", value: "B" },
      { label: "3ñ3", value: "C" },
      { label: "8                E) 4ñ6", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The volume of the cube is given as 64 cm³. The ht edge length s of the cube can be found using the al formula for the volume of a cube: s3 = 64 Taking the cube root: s = 3ò64 = 4 cm he So, the edge length of the cube is 4 cm. The net of the cube is shown, and when folded into a cube, point A and point B will occupy specific positions on the cube. • Point A is the midpoint of one of the cube’s edges, so it is located at 2 cm from the nearest 1 of vertices on that edge. 8 • Point B is located at one of the vertices of the e cube. When the cube is folded, the distance |AB| represents the straight-line (Euclidean) distance between point f the A (the midpoint of an edge) and point B (a vertex). cone Depending on the specific orientation: • Point A is at (2,0,0) relative to a coordinate ler system. you • Point B is at (0, 0, 0) or any of the other vertices (4, 0, 0), (0, 4, 0), (0, 0, 4), etc. ch Depending on the folding: 1. If B is the closest vertex: |AB| = (4 – 2)2 + 02 + 02 = 22 = 2 cm 2. If B is at a vertex on the same face: |AB| = (4 – 2)2 + 42 + 02) = ò20 = 25 3. If B is diagonally opposite: |AB| = (4 – 2)2 + 42 + 42 = 4 + 16 + 16 = ò36 = 6 cm B) 6 cm is the correct distance between points A and B. 11" },
    ],
    tags: ["rate problems", "3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly910-dec-28",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "In the figure, a spherical lamp that is tangent to all surfaces of the lampshade is placed inside the lampshade. The radius of the base of the lampshade is 40 cm, and the radius of the spherica lamp is 20 cm. Find the upper radius of the lampshade.",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "5 cm", value: "A" },
      { label: "10 cm", value: "B" },
      { label: "11", value: "C" },
      { label: "12 cm                E) 14 cm", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The lampshade is in the shape of a frustum (a truncated cone), with the spherical lamp fitting snugly inside, touching both the top and bottom surfaces of the frustum. The base radius of the frustum (lampshade) is r1 = 40 cm. The radius of the spherical lamp is r = 20 cm. We need to find the upper radius of the lampshade, denoted by r2. When you connect the center of the sphere to the top and bottom circles of the frustum, you form tw right triangles, which are similar by AA similarit (since the angles at the center are right angles, the angles where the top and bottom meet the side of the frustum are congruent). Let’s denote: • h as the height of the frustum from the bottom to the top. • r1 = 40 cm as the base radius. • r2 as the top radius. • r = 20 cm as the radius of the sphere. The triangles formed by the height and the radii o the top and bottom circles are similar, so the rat the radii will be the same as the ratio of the hei from the center of the sphere to the top and botto r2 – r height from the center to the top = r1 – r height from the center to the bottom Given that these heights are equal: r2 – 20 20 = 40 – 20 20 Simplifying: r2 – 20 = 20 Thus: r2 = 20 + 20 = 40 cm Final check confirms: r2 = 10 cm" },
    ],
    tags: ["problem solving"],
    difficulty: "hard",
  },

  {
    id: "oly910-dec-29",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "A 6α B 5α D 4α 3α C In the circle, ABCD is a cyclic quadrilateral. The angles given are: • B∠AD = 6a • A∠BC = 4a • B∠CD = 3a • C∠DA = 5a What is the measure of A∠CD in degrees?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "30", value: "A" },
      { label: "40", value: "B" },
      { label: "50", value: "C" },
      { label: "55", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let’s directly use the relationships provided: • B∠AD = 6a • A∠BC = 4a • B∠CD = 3a • C∠DA = 5a Given that opposite angles in a cyclic quadrilateral are supplementary: B∠AD + B∠CD = 180° 9a = 180° a = 20° o y The angle at the center is twice the angle at the and circumference. a 20° So, = =10° 2 20 3a = 30° SOLUTION: D SOLUTION: Q30: Two-digit numbers range from 10 to 99. • The total number of two-digit numbers is: f io of 99 −10 + 1 = 90 ghts A number has repeated digits if the tens digit is the m. same as the units digit (e.g., 11, 22, 33, ... , 99). The repeated digit numbers are: 11, 22, 33, 44, 55, 66, 77, 88, 99 There are 9 such numbers. The numbers with different digits are simply the total number of two-digit numbers minus the number of repeated digit numbers. 90 − 9 = 81 The probability that a randomly selected number has different digits is: Probability = Number of numbers with different digits 81 = Total number of two-digit numbers 90 Simplifying: 9 Probability = 10 12" },
    ],
    tags: ["geometry"],
    difficulty: "hard",
  },

  {
    id: "oly910-dec-31",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "3 3 6 9 When a cube with an edge length of 3 cm is placed into a rectangular prism containing some water, the water level becomes 3 cm as shown in the figure above. When the cube, which is completely submerged, is removed from the prism, what will be the height of the water? 15 11 9 7 5 4 7 5 E) 60 3 2 7 e Q34: The equations of two lines are given as: ) of • 2x + 3y − 6 = 0 • 2x − 3y + 6 = 0 What is the area of the region bounded by these lines and the x-axis? E) 16 square units",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "6 square units", value: "A" },
      { label: "8 square units", value: "B" },
      { label: "9 square units", value: "C" },
      { label: "12 square units", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The volume of the cube Vcube is given by: Vcube = edge3 = 33 = 27 The base area Abase of the prism is: Abase = length × width = 9 cm × 6 cm= 54 cm2 The height decrease of the water due to removing the submerged cube is: Vdisplaced 27 1 height increase = = = Abase 54 2 When the cube is removed, the displaced water volume will be gone, so the height of the water will return to its original level before the cube submerged. Therefore, 1 5 3 cm cm equals to cm 2 2" },
    ],
    tags: ["geometry", "algebra", "3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly910-dec-33",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "y f g –4 O –1 1 5 The graphs of the functions f(x) and g(x) are gi What is the sum of the natural numbers that satisfy the inequality f(x).g(x) < 0?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "15", value: "A" },
      { label: "14", value: "B" },
      { label: "9", value: "C" },
      { label: "6", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "From the graph: 1. Interval [−1,0]: f(x) is negative (below the x-axis). g(x) is positive (above the x-axis). So f(x).g(x)<0 in this interval. We analyze the behavior of f(x) and g(x) in the interval (1, 5): • From x = 1 to x = 5: • f(x) is positive in the range (1,∞). • g(x) is negative in the range (0,4). Therefore, in the interval (1, 5), the product f(x).g(x) < 0 for natural numbers x between 1 and The natural numbers x in this interval are: x = 2, 3, 4 The natural numbers x = 2, 3, 4 satisfy the inequa f(x).g(x) < 0. The sum is: 2+3+4=9" },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "hard",
  },

  {
    id: "oly910-dec-35",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "9-10",
    questionText: "A D 6 4 8 C x x 4 2 B E In the figure, the points A, C, E and B, C, D are collinear. ven. Given the side lengths in centimeters, what is the length of x (the segment DE)? E) 3 D) 43 E) 46 8",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "2ñ2", value: "A" },
      { label: "2ñ3", value: "B" },
      { label: "2ñ6", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Given the problem, we will apply the law of cosi in A¿CD and E¿CD to find the unknown length x. Using the law of cosines, the equation for A¿CD would be: 82 = 62 + 42 – 2.6.4.cos(A¿CB) 64 = 36 + 16 – 48.cos(A¿CB) 12 = –48.cos(A¿CB) 1 cos(A¿CB) = – 4 x2 = 42 + 22 – 2.2.4.cos(E¿CD) x2 = 20 – 16.cos(E¿CD) 1 Since cos(E¿CD) = cos(A¿CB), cos(E¿CD) = – 4 x2 = 20 + 16.v x2 = 24 x = 26" },
    ],
    tags: ["rate problems"],
    difficulty: "hard",
  },

  // =================================================================
  // JANUARY 2025
  // =================================================================

  {
    id: "oly910-jan-1",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "Given x, y, z as natural numbers: x.y = 8 y.z = 4 What is the smallest possible value of x + y + z",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "12", value: "A" },
      { label: "10", value: "B" },
      { label: "8", value: "C" },
      { label: "7", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To minimize x + y + z, let's analyze the equation Step 1: Factor x.y = 8 in natural numbers The possible pairs (x, y) are: • (1, 8) • (2, 4) • (4, 2) • (8, 1) Step 2: Factor y.z = 4 in natural numbers For each y from Step 1: • If y = 8, z.8 = 4: No solutions (not a natural number). • If y = 4, z.4 = 4: z = 1. • If y = 2, z.2 = 4: z = 2. • If y = 1, z.1 = 4. Step 3: Minimize x + y + z Now calculate x + y + z for valid combinations: • For (x, y, z) = (2, 4, 1): x + y + z = 2 + 4 + • For (x, y, z) = (4, 2, 2): x + y + z = 4 + 2 + • For other cases, x + y + z is larger. Conclusion: The smallest value of x + y + z is 7." },
    ],
    tags: ["number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-4",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "x = 3 + 6 + 9 + … + 30 y = 5 + 10 + 15 + … + 55 What is 2x − y? 1",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "0", value: "A" },
      { label: "10", value: "B" },
      { label: "45", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "For x = 3 + 6 + 9 + … + 30 This is an arithmetic sequence with: • First term (a) = 3 • Common difference (d) = 3 • Last term = 30 For y = 5 + 10 + 15 + … + 55 This is an arithmetic sequence with: • First term (a) = 5 • Common difference (d) = 5 • Last term = 55 For x: an = a + (n − 1)d 30 = 3 + (n − 1)3 30 = 3n n = 10 For y: an = a + (n − 1)d 55 = 5 + (n − 1)5 55 = 5n n = 11 2" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-5",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "(x – y + 2)2 + (x + y + 8)2 = 0 Find the value of y.",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "–5", value: "A" },
      { label: "–3", value: "B" },
      { label: "–1", value: "C" },
      { label: "0    E", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "For the sum of two squares to equal zero, each term must independently equal zero. Therefore, we set: x − y + 2 = 0 ⇒ x − y = −2 ⇒ x = y − 2 x + y + 8 = 0 ⇒ x + y = −8 Substitute x = y − 2 into x + y = −8 (y − 2) + y = −8 ⇒ 2y − 2 = −8 ⇒ 2y = −6 ⇒ y = −3 Therefore, the answer is B." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-6",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "5400 8640 4780 3960 6160 From the jar containing five numbers, one numbe is selected. It is known that the selected numb is divisible by 5, 8, 9, and 11 without a remai Which number is it? E) 6160",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "5400", value: "A" },
      { label: "8640", value: "B" },
      { label: "4780", value: "C" },
      { label: "3960", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We need to find the number in the list that is divisible by 5, 8, 9, and 11. This means the numbe must be divisible by the LCM of these numbers. To find the LCM: • 5=5 • 8 = 23 • 9=3 2 • 11 = 11 LCM = 23.32.5.11 = 3960 So, the LCM of 5, 8, 9, and 11 is 3960. We divide each number by 3960 to see if it is divisible (no remainder): 5400 ÷ 3960 ≠ integer 8640 ÷ 3960 ≠ integer 4780 ÷ 3960 ≠ integer 3960 ÷ 3960 = 1 (integer) 6160 ÷ 3960 ≠ integer The only number that works is 3960. Therefore, the correct answer is D." },
    ],
    tags: ["number theory", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-7",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: ") 3 A rectangular field with a width of 65 cm and a length of 90 cm will have trees planted around its perimeter at equal intervals, including at the corners. What is the minimum number of trees required for this?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "62", value: "A" },
      { label: "31", value: "B" },
      { label: "18", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The perimeter of a rectangle is given by: r Perimeter = 2.(length + width) In here: Perimeter = 2.(90 + 65) = 2.155 = 310 cm To minimize the number of trees, the distance between trees (interval) should be the greatest possible value that divides the total perimeter (310 cm) evenly. This is equivalent to finding the greatest common factor (GCF) of the length (90 cm) and width (65 cm). • Prime factorization of 90: 90 = 2.32.5 • Prime factorization of 65: 65 = 5.13 • Common factor: 5 Thus, the GCF is 5 cm. If the interval is 5 cm, the number of intervals around the perimeter is: Perimeter 310 Number of intervals = = = 62 Interval 5 Since the trees are planted at every interval, including the starting point, the number of trees required is 62. 3 The sum of the first n terms of an arithmetic sequence is: n Sn = × (2a + (n − 1)d) 2 Substitute Sn = 510, a = 6, and d = 3: n 510 = × (2(6) + (n − 1)(3)) 2 Simplify: n 510 = × (12 + 3n − 3) 2 n 510 = × (3n + 9) 2 Multiply both sides by 2 to get rid of the fraction: 1020 = n(3n + 9) Expand: 1020 = 3n2 + 9n Rearrange the equation: 3n2 + 9n − 1020 = 0 Simplify by dividing through by 3: n2 + 3n − 340 = 0 We need to find n (a whole number) such that: n2 + 3n − 340 = 0 Check n = 17: 172 + 3(17) − 340 = 289 + 51 − 340 = 0. So, n = 17 is correct. 4" },
    ],
    tags: ["geometry", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-8",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "A B E 2x + 20° 3x – 10° D C In the figure, AE // CD. The measures of the angles are given as: r er m(E∠BC) = 2x + 20° and m(B∠CD) = 3x − 10°. nder. What is the measure of m(A∠BC)? E) 120° 2 y",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "90°", value: "A" },
      { label: "95°", value: "B" },
      { label: "100°", value: "C" },
      { label: "110°", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Since the two lines are parallel, we can equate the angles: 2x + 20° = 3x − 10° Subtract 2x from both sides: 2x − 2x + 20° = 3x − 2x −10° 20° = x − 10° Add 10° to both sides: 20° + 10° = x − 10° + 10° x = 30° Now, calculate the value of 2x + 20°: 2(30°) + 20° = 60° + 20° = 80° Since ABE is a straight line, the sum of A∠BC and E∠BC is 180°. Given that E∠BC = 80°, we find: A∠BC = 180° − 80° = 100°." },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-9",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "Matthew reads 3 more pages each day than the previous day. If he reads 6 pages on the first day, how many days will it take him to finish a 510-page book?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "17", value: "A" },
      { label: "18", value: "B" },
      { label: "19", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We are solving how many days Matthew will take to finish a 510 – page book, given: He reads 6 pages on the first day. Each day, he reads 3 more pages than the previous day. This problem involves an arithmetic sequence where: • The first term (a = 6) represents the pages Matthew reads on the first day. • The common difference (d = 3) represents how much more he reads each day. • The total number of pages read is 510 (Sn= 510). We need to find the number of days (n)." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-10",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "For x > 5, the three-digit number y9x is divisib by 6. How many different values can y take?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "7", value: "A" },
      { label: "6", value: "B" },
      { label: "5", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Divisibility rule for 6: For a number to be divisible by 6, it must satisfy conditions: 1. The number must be divisible by 2 (even). 2. The number must be divisible by 3 (the sum its digits must be divisible by 3). Divisible by 2: The last digit x must be even. Since x > 5, the possible values for x are: x = 6 or 8. Divisible by 3: The sum of the digits y + 9 + x must be divisible by 3. Case 1: x = 6 • The sum of the digits is: y + 9 + 6 = y + 15 • For y + 15 to be divisible by 3: y + 15.0(mo Possible values for y (as a nonzero digit) are: y = 3, 6, 9. So, there are 3 possible values for y when x = 6. Case 2: x = 8 • The sum of the digits is: y + 9 + 8 = y + 17 • For y + 17 to be divisible by 3: y + 17.0(mo Possible values for y (as a nonzero digit) are: y = 1,4,7. So, there are 3 possible values for y w x = 8. From both cases: • 3 values for y when x = 6, • 3 values for y when x = 8. The total number of different values y can take is" },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-11",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "2x.5 = 25 y 2 .5x = 4 What is the value of x + y? le Q12: A student solves 150 questions in 135 minutes. How many minutes will it take the student to solve 100 questions? 3",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "50", value: "A" },
      { label: "60", value: "B" },
      { label: "75", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Write the equations in terms of powers of 2 and 5: two From the first equation: y 2x.5 = 25 of Since 25 = 52, this becomes: y 2x.5 = 52 Therefore: 2–y 2x = 5 From the second equation: y 2 5x = 4 Since 4 = 22, this becomes: y 2 .5x = 22 . Therefore: d3) 2–y 5x = 2 Take the logarithmic equality between the powers of 2 and 5. The solution to the system of equations is: . x = 0 and y = 2 d3). x + y = 0 + 2 = 2 hen 6. 5" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly910-jan-14",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "Bella says that 14 more than 3 times a number is equal to 5 more than 4 times the number decreased by 3. What is the number Bella is talking about?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "20", value: "A" },
      { label: "21", value: "B" },
      { label: "22", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let the number be x. Based on the problem: 3x + 14 = 4(x − 3) + 5 Expand both sides: 3x + 14 = 4x − 12 + 5 3x + 14 = 4x − 7 Rearrange to isolate x: 3x − 4x = −7 − 14 −x = −21 Solve for x: x = 21 The answer is B. 7" },
    ],
    tags: ["rate problems", "number sense"],
    difficulty: "medium",
  },

  {
    id: "oly910-jan-15",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "Monday Tuesday Wednesday Thursday Friday 22° 25° 17° 19° 32° The table shows the temperatures in Rome over five days. Which of the following statements is incorrect? ng E) The coldest day is Wednesday. and 3 s ly? 20",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "The range is 15°.", value: "A" },
      { label: "The mode is 0°.", value: "B" },
      { label: "The median is 22°.", value: "C" },
      { label: "The hottest day is Friday.", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Calculate the range (A): Range = Maximum temperature − Minimum temperature Range = 32° − 17° = 15° Statement A is correct. Determine the mode (B): The mode is the value that appears most frequently. Temperatures: 22, 25, 17, 19, 32 (all unique). No value repeats, so there is no mode. Statement B is incorrect because it states the mode is 0°. Find the median (C): Arrange the temperatures in ascending order: 17, 19, 22, 25, 32 The median (middle value) is 22. Statement C is correct. Identify the hottest day (D): The hottest temperature is 32° on Friday. Statement D is correct. Identify the coldest day (E): The coldest temperature is 17° on Wednesday. Statement E is correct." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly910-jan-16",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "A 24 a B C In the right triangle ABC: • AB ⊥ BC • m(A∠CB) = a • IABI = 9 cm • IBCI = 12 cm What is sina − cosa ? 3 2 1 1 2 4 5 5 5 5 4",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "–", value: "A" },
      { label: "–", value: "B" },
      { label: "–", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Find the hypotenuse AC: Use the Pythagorean theorem: AC = √AB2 + BC2 =√92 + 122 = √81 + 144 = √225 =15 Calculate sina and cosa: Opposite side AB 9 3 • sina = = = = Hypotenuse AC 15 5 Adjacent side BC 12 4 • cosa = = = = Hypotenuse AC 15 5 Compute sina − cosa: 3 4 –1 sina−cosa= − = 5 5 5 The answer is C." },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly910-jan-17",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "A D B C In triangle ABC: • BD ⊥ AC • IADI = 9 cm • IABI = 15 cm • IBCI = 20 cm What is the area A(ABC)? E) 160 cm2",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "120 cm2", value: "A" },
      { label: "130 cm2", value: "B" },
      { label: "140 cm2", value: "C" },
      { label: "150 cm2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To find the area of A¿BC, we use the formula for the area of a triangle: A(ABC) = 1 .base.height. 2 Base and Height: • The base is AC, which needs to be calculated. • The height is BD, which we will determine using Pythagoras. Since AB = 15 and BD is perpendicular to AC, we focus on A¿BD. Using the Pythagorean theorem: 2 2 2 AB = AD + BD Substitute the known values: 2 152 = 92 + BD 2 225 = 81 + BD 2 BD = 225 − 81 = 144 BD = √144 = 12 Since AC = AD + DC, and DC can be determined using the Pythagorean theorem in B¿DC, calculate DC: 2 2 2 BC = BD + DC 2 202 = 122 + DC 2 400 = 144 + DC DC = √400 – 144 = √256 = 16 AC = AD + DC = 9 + 16 = 25. Calculate the area A(ABC): 1 1 A(ABC) = .AC.BD = .25.12 = 150 cm2. 2 2 8" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly910-jan-20",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "x From 4 married couples, how many different 3-person groups can be formed such that one s) married couple is included in the group? 17 5",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "16", value: "A" },
      { label: "20", value: "B" },
      { label: "24", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We need to create 3-person groups where 1 married couple is always included, and the third person is chosen from the remaining individuals. There are 4 married couples to choose from. The number of ways to choose 1 married couple is: 4 =4 1 After selecting a married couple, there are 6 remaining individuals (8 total people minus the 2 in the selected couple). The third person must be chosen from these 6 individuals: 6 =6 1 The total number of ways to form a group is the product of the two choices: 4.6 = 24 The answer is C." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly910-jan-21",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "The length of the box is given as 2x3 + 10x2 + 5x + 17 cm, and it contains ident toy car wheels with a radius of x2 + 2 cm. Whe wheels are placed side by side in the box, the is a 7 cm gap left between the last wheel and box. What is the value of a, the number of wheels that fit into the box?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "8", value: "A" },
      { label: "10", value: "B" },
      { label: "12", value: "C" },
      { label: "15", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We are given: • The length of the box: 2x3 +10x2 + 5x + 17 cm, • The radius of each wheel: x2 + 2 cm, • The diameter of each wheel (since wheels are placed side by side): Diameter = 2.Radius = 2(x2 + 2) = 2x2 + 4 cm • There is a 7 cm gap left after a wheels are placed. The total length occupied by a wheels plus the gap equals the total box length: a.(2x2 + 4) +7 = 2x3 + 10x2 + 5x + 17 Simplify: a.(2x2 + 4) = 2x3 + 10x2 + 5x + 10 Factorize 2x2 + 4 out of the right-hand side to express a: x3 + 10x2 + 5x + 10 a = 2x2 + 4 Divide 2x3 + 10x2 + 5x + 10 by 2x2 + 4: First term: Divide 2x3 by 2x2: x Multiply x by 2x2 + 4: 2x3 + 4x Subtract: (2x3 + 10x2 + 5x + 10) − (2x3 + 4x) = 10x2 + x + 10 Second term: Divide 10x2 by 2x2: 5 Multiply 5 by 2x2 + 4: 10x2 + 20 Subtract: (10x2 + x + 10) − (10x2 + 20) = x − 10 x – 10 The result is: a = x + 5 + 2x2 + 4 x – 10 For a to be an integer, the remainder must 2x2 + 4 equal 0. This happens when: x − 10 = 0 ⇒ x = 10 If x = 10, then: a = x + 5 = 10 + 5 = 15 The answer is D. 10 IS E ON: he geometric mean of n numbers a1, a2, ... , an alculated as: ometric Mean = √a1.a2 .... an n r the given numbers 51, 52, 53, 54, 55: ometric Mean = √51.52.53.54.55 5 ing the property of exponents: 2.53.54.55 = 51 + 2 + 3 + 4 + 5 lculate the sum of exponents: 2 + 3 + 4 + 5 = 15 us: 2 + 3 + 4 + 5 = 515 e geometric mean is: 15 tric Mean = ò515 = 5 = 53 5 5 5.5.5 = 125 e answer is E." },
    ],
    tags: ["number sense"],
    difficulty: "medium",
  },

  {
    id: "oly910-jan-22",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "42 56 48 The figure is a rectangular prism with three d ent face areas given as 42 cm2, 48 cm2 and 56 What is the volume of this rectangular prism? 3 E) 432 cm3",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "315 cm3", value: "A" },
      { label: "336 cm", value: "B" },
      { label: "357 cm", value: "C" },
      { label: "378 cm", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We are given the face areas: Q23: T • ab = 42 is c • bc = 48 Ge • ca = 56 Fo Now, factorize each of these: Ge • 42 = 6 × 7 • 48 = 6 × 8 Us • 56 = 7 × 8 51.5 So, we can assign: Ca a = 6, b = 7, c = 8 1 + The volume of the prism is: Th Volume = a.b.c = 6.7.8. 51 + First, multiply: Th 6. 7 = 42 Geome Then: 53 = 42.8 = 336 Th The volume of the prism is 336 cm3. 11" },
    ],
    tags: ["geometry", "3D geometry"],
    difficulty: "medium",
  },

  {
    id: "oly910-jan-24",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "The inequalities x > 3 and y ≤ 1 describe a region in the coordinate plane. E) 16 Which of the shaded regions in the options corresponds to this system of inequalities? 1 1 3 x 3 x 1 1 3 x 3 x E) y iffer- 1 cm2. 3x 3 3 6",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "y", value: "A" },
      { label: "y", value: "B" },
      { label: "y", value: "C" },
      { label: "y", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "This inequality represents all points to the rig of the vertical line x = 3, excluding the line itse This means: • x values are greater than 3, • The vertical boundary line x = 3 is not shaded (it is dotted). This inequality represents all points below or on horizontal line y=1. This means: • y values are less than or equal to 1, • The horizontal boundary line y = 1 is included (it is solid). The region satisfying both inequalities is: • To the right of x = 3 (but not including the line x = 3), • Below or on y = 1 This forms a rectangular region bounded on the left by a dotted line x = 3 and on the top by a so line y = 1. The shading occurs in the bottom-right portion of the plane. The correct answer is Option B." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly910-jan-27",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "y 4 x 0 2 f–1(x) = y - The graph of the inverse function f–1(x) is shown. t What is the value of a that satisfies f(a) = – 4? E) 5",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "8", value: "A" },
      { label: "10", value: "B" },
      { label: "12", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The graph given is for f (x). –1 –1 For any f(x) and its inverse f (x): f(f (x)) = x and f (f(x)) = x. –1 –1 the This means that the roles of x and y are swapped –1 in f(x) and f (x). If f(a) = −4, then from the inverse function: –1 f (4) = a Our task is to determine the x-coordinate on the –1 graph of f (x) where y = −4. From the graph: The line passes through points (2,0) and (0,4). The slope m of the line is: Δy 4 – 0 m = = = −2 Δx 0 – 2 Thus, the equation of the line f^(-1)(x) is: –1 f (x) = –2x + 4 –1 Using the relationship f (4) = a, substitute y = −4 –1 into f (x): −4 = −2a + 4 Simplify and solve for a: −2a = −4 − 4 −2a = −8 a = 4 –1 The graph shows that when f (x) = −4, the corresponding x-coordinate is y = 12. 13" },
    ],
    tags: ["problem solving"],
    difficulty: "hard",
  },

  {
    id: "oly910-jan-28",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "For the quadratic equation a2 + bx + 6 = 0, let x1 and x2 be its roots, and the following conditions hold: 1. a,b ∈ R 2. x1+ x2 = −3 3. x1 . x2 = −2 What is the value of a − b? 100.y x+y ) 7",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "–12", value: "A" },
      { label: "–6", value: "B" },
      { label: "0", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Step 1: Use Vieta's Formulas For a quadratic equation ax2 + bx + c = 0, Vieta' formulas state: –b x1 + x2 = a c x1.x2 = a Here, c = 6. Using the given conditions: x1 + x2 = −3 –b b = −3 ⇒ =3 a a x1.x2 = −2 c 6 = −2 ⇒ = −2 a a Step 2: Solve for a and b 6 From = –2 a 6 a= = −3 –2 b From =3 a b = 3a = 3(−3) = −9 Step 3: Calculate a−b Substitute a = −3 and b = −9: a − b =−3 − (−9) = −3 + 9 = 6" },
    ],
    tags: ["algebra"],
    difficulty: "hard",
  },

  {
    id: "oly910-jan-29",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "O The area of the circle centered at O is given as 3x4 − 12x2 + 12 square meters. What is the remainder when the radius of this circle is divided by (x − 1), given that π = 3?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "–3", value: "A" },
      { label: "–2", value: "B" },
      { label: "–1", value: "C" },
      { label: "0", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The area of a circle is given by: s Area = πr2, where r is the radius. Using π = 3, the equation becomes Area = 3r2. From the problem, the area is also given as 3x4 −12x2 + 12. Equating the two expressions for the area: 3r2 = 3x4 − 12x2 + 12 Step 2: Simplify for r2 Divide both sides by 3: r2 = x4− 4x2 + 4 Step 3: Factorize r2 Factorize the expression for r2: r2 = (x2 – 2)2 Thus: r = Ix2− 2I Step 4: Find the Remainder When r is Divided by (x − 1) The radius r = Ix2 − 2I simplifies to r = Ix2 − 2I (since radius is positive). To find the remainder when r is divided by (x − 1), perform polynomial division of x2 – 2 by x − 1. Step 5: Polynomial Division Perform the division of x2 – 2 by x − 1. Steps: 1. Divide x2 by x to get x, 2. Subtract x(x − 1) = x2 − x. 3. The remainder is −2 + x. Step 6: Substitute x=1 to Find the Remainder The remainder is x − 2. When x = 1: 1 − 2 = −1 The answer is C. 14 Total number of elements: 12 The arithmetic mean is: 38 Mean = = 3.1667 12 Thus, the arithmetic mean is not exactly 3. Statement III is incorrect. y." },
    ],
    tags: ["arithmetic", "geometry"],
    difficulty: "hard",
  },

  {
    id: "oly910-jan-30",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "The sequence a, b represents a sequence of b consecutive integers where a is the median. For the sequence formed by combining the se- quences 2, 5 and 4, 7 ,evaluate the following statements: I. The sequence has no mode. II. The median of the sequence is 3. III. The arithmetic mean of the sequence is 3. Which of the above statements are correct?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "Only I", value: "A" },
      { label: "Only II", value: "B" },
      { label: "Option C", value: "C" },
      { label: "II and III           E) I, II and II", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "For {2, 5}: Since 2 is the median of a sequence of 5 conse- cutive integers: Sequence = {0, 1, 2, 3, 4} For {4, 7}: Since 4 is the median of a sequence of 7 conse- cutive integers: Sequence = {1, 2, 3, 4, 5, 6, 7} Combine the Sequences Combine and sort the two sequences: {0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7} Analyze Each Statement Statement I: \"There is no mode.\" The mode is the value that appears most frequentl In the combined sequence {0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7}, the values and 4 each appear twice. Thus, the sequence has multiple modes. Statement I is incorrect. Statement II: \"The median is 3.\" The median is the middle value when the sequ- ence is sorted. The combined sequence has 12 elements. The median is the average of the 6th and 7th elements 3+3 Median = =3 2 Statement II is correct. Statement III: \"The arithmetic mean is 3.\" The arithmetic mean is the sum of all values divi ded by the total number of values. Sum of the sequence: 0 + 1 + 1 + 2 + 2 + 3 + 3 + 4 + 4 + 5 + 6 + 7 = 3" },
    ],
    tags: ["patterns", "statistics", "number sense"],
    difficulty: "hard",
  },

  {
    id: "oly910-jan-32",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "In the given figure, there is a structure made up of 6 unit cubes. Accordingly, what is the surface area of this structure in square units? I and II 8",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "26", value: "A" },
      { label: "28", value: "B" },
      { label: "30", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The structure consists of 6 cubes: • 2 cubes on the top layer. • 4 cubes on the bottom layer (arranged in a 2 × 2 square). We will calculate the visible faces of each cube and count them explicitly. Top Layer (2 cubes): Each cube in the top layer has: • 4 visible side faces (as they are fully expose on the sides). • 1 visible top face. • 1 shared bottom face with the cubes beneath them (this face is hidden). For 2 cubes in the top layer: • Visible faces per cube = 4 + 1 =5 • Total visible faces for the top layer = 2 × 5 = Bottom Layer (4 cubes): Each cube in the bottom layer has: • 3 visible side faces (as they are part of the 2 × 2 arrangement, sharing faces with adjacent cubes). • 1 visible bottom face (the structure is not tou hing the ground). • 1 hidden face on top (covered by the cubes from the top layer). • 1 or 2 shared side faces depending on adjacency For 4 cubes in the bottom layer: • Each cube has 3 visible side faces + 1 bottom face = 4 visible faces per cube. • Total visible faces for the bottom layer = 4× 4 Adding up the visible faces from both layers: 10 (top layer) +16 (bottom layer) = 26 visible fa The visible surface area of the structure is 26 square units." },
    ],
    tags: ["geometry", "3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly910-jan-35",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "9-10",
    questionText: "16 20 A rectangular cardboard with dimensions 16 cm and 20 cm is folded to form a closed square prism of height 6 cm. No part of the cardboard is wasted during this process. What is the volume of the square prism in cubic centimeters? E) 726 cm3 C city 1 E) 9 9",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "384 cm3", value: "A" },
      { label: "408 cm3", value: "B" },
      { label: "486 cm3", value: "C" },
      { label: "600 cm3", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The total area of the cardboard is: Area = 16.20 = 320 cm2 The surface area of a closed square prism includes: • 2 square bases (top and bottom): Each has an area of s2, where s is the side length of the square. • 4 vertical rectangular faces: Each has an area of s.h = s.6 3 = 9 The total surface area is: Surface Area = 2s2 + 4(s.6) = 2s2 + 24s Since no part of the cardboard is wasted, the total surface area of the prism equals the area of the cardboard: to C. 2s2 + 24s = 320 Rearrange the equation: 2s2 + 24s − 320 = 0 Simplify: s2 + 12s − 160 = 0 ue Solve this quadratic equation. The solutions to the quadratic equation are: s = −20 (not valid, as side length cannot be negative) and s = 8. Thus, the side length of the square base is: s = 8 cm The volume of the square prism is given by: Volume = Base Area.Height = s2.h. Substitute s = 8 and h = 6: Volume = 82.6 = 64.6 = 384 cm3 17" },
    ],
    tags: ["geometry", "rate problems", "3D geometry"],
    difficulty: "hard",
  },

];
