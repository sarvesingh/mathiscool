import { Question } from "../types";

export const olympiad78Questions: Question[] = [
  // =================================================================
  // DECEMBER 2024
  // =================================================================

  {
    id: "oly78-dec-1",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "Before climbing the mountain, Richard mea- sured the temperature with a thermometer and noted that the temperature was 8°C. Given that the temperature drops by 1°C for every 100 meters of elevation, at what altitude (in meter is Richard when he measures the temperature to be -2°C?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "800", value: "A" },
      { label: "9000", value: "B" },
      { label: "1000", value: "C" },
      { label: "1200", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Initial Temperature: 8°C Final Temperature: –2°C Temperature Drop: 8 − (−2) = 8 + 2 = 10°C Since the temperature drops by 1°C for every 100 meters: Altitude Increase Corresponding to Temperature Drop: 10 °C × 100 meters /°C = 1000 meters" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-2",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "+ –3 –1 +7 –4 –7  +4 –2 –5 –3  +5   +12 What is the value of  +  +  +  ?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "–4", value: "A" },
      { label: "+2", value: "B" },
      { label: "+6", value: "C" },
      { label: "+10", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "(–4) + (–1)= -5 (–2) + 7= 5 +5 + (–3) = 2 +5 + (–1) = 4 Their sum is: (–5) + 5 + 2 + 4 = +6" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-3",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "5 4 –2 2 1 2 3 6 9 + + – A What is the result of A? s)",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "–2", value: "A" },
      { label: "–3", value: "B" },
      { label: "2", value: "C" },
      { label: "3", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The correct answer is A." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-4",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "+6 –9 –3 +5 15 +9 10 17 –10 –4 For the balance scale above to be balanced, the sum of the numbers on both sides must be equal. Which two integers need to be swapped to bring the scale into balance? 1",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "(–3) and (–10)", value: "A" },
      { label: "15 and 17", value: "B" },
      { label: "+6 and +10", value: "C" },
      { label: "(–9) and +9", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Left side sum: 6 + (−9) + (−3) + 5 + 15 = 6 − 9 − 3 + 5 + 15 = 14 Right side sum: 9 + 10 + 17 + (−10) + (−4) = 9 + 10 + 17 − 10 − 4 = 22 The difference between the two sides is: 22 − 14 = 8 We need to swap one number from the left side with one from the right side to make the sums equal. Swapping 15 from the left side with 9 from the right side: • New left side sum: 14 − 15 + 9 = 8 • New right side sum: 22 − 9 + 15 = 28 • This does not balance the scale. Swapping 6 from the left side with 10 from the right side: • New left side sum: 14 − 6 + 10 = 18 • New right side sum: 22 − 10 + 6 = 18 • Swapping 15 from the left side with 17 from the right side: • New left side sum: 14 − 15 + 17 = 16 • New right side sum: 22 − 17 + 15 = 20 • This also doesn’t balance the scale. So, 6 from the left side and 10 from the right side should be swapped to balance the scale. 1" },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-5",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "–3 +5 +12 Bob will take 5 shots at the target, and he has hit each region at least once. What is the highest possible score Bob can achieve?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "–15", value: "A" },
      { label: "8", value: "B" },
      { label: "60", value: "C" },
      { label: "38", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Since Bob must hit each region at least once and he has 5 shots in total, the goal is to maximize h score. • Hit the +12 region 3 times. • Hit the +5 region 1 time. • Hit the –3 region 1 time. Calculation: 3x + 12 = +36 1x + 5 = +5 1 x −3 = −3 Total score: 36+5−3=38 Thus, the maximum possible score Bob can achieve is 38." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-6",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "A dolphin dives 10 meters below sea level, then returns to sea level, and jumps 4 meters above sea level. How many meters does the dolphin travel in total when it returns to sea level?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "10", value: "A" },
      { label: "20", value: "B" },
      { label: "24", value: "C" },
      { label: "28", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Diving Below Sea Level: • The dolphin goes 10 meters down. Returning to Sea Level: • The dolphin travels 10 meters up to return t sea level. Jumping Above Sea Level: • The dolphin jumps 4 meters above sea level. Returning to Sea Level: • The dolphin travels 4 meters down to return sea level. Total Distance: • Downward dive: 10 meters • Upward return: 10 meters • Upward jump: 4 meters • Downward return: 4 meters Adding these distances: 10 + 10 + 4 + 4 = 28 meters Thus, the dolphin travels a total of 28 meters." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-7",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "In a 23-question exam, each correct answer is awarded +7 points, and each incorrect answer results in -3 points. A person who answered all the questions received a total of 91 points. How many questions did this person answer correctly?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "14", value: "A" },
      { label: "16", value: "B" },
      { label: "18", value: "C" },
      { label: "20", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "• x as the number of correct answers. is • y as the number of incorrect answers. We know the following: The total number of questions is 23: x+y=23 The total score is 91 points: 7x−3y=91 From the first equation: y = 23 − x 7x − 3(23 − x) = 91 7x − 69+3x = 91 10x − 69 = 91 10x = 160 x = 16 The person answered 16 questions correctly." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-9",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "K L 55° M ? Find ‘?’.",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "16", value: "A" },
      { label: "23", value: "B" },
      { label: "30", value: "C" },
      { label: "34", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Square K: Internal angles are 90° Hexagon L: Internal angles are 120° Pentagon M: Internal angles are 108° 90° +120° = 210° 360° – 210° =150° 120° +108° = 228° 360° – 228° =132° So, 132° +150° + 55° + ? = 360° 360° – 337° = 23°" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-10",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "The following information is given about the numbers A and B: • The number 12 is %A of 60. • The number 54 is %B of 600. Accordingly, what percentage of %A is %B?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "35", value: "A" },
      { label: "42", value: "B" },
      { label: "45", value: "C" },
      { label: "55", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The correct answer is C." },
    ],
    tags: ["percentages", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-11",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "A B C _1 1 _1 2 3 4 What is the value of the 2A + B − C? 1 1 5 5 2 12 12 12",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "Option A", value: "A" },
      { label: "–", value: "B" },
      { label: "–", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "B is above the purple and orange squares, so: 1 1 3 2 1 B=– + =– + =– 2 3 6 6 6 C is above the orange and blue squares, so: 1 1 4 3 1 C= +– = − = 3 4 12 12 12 Now, A is directly above B and C, so: 1 1 2 1 1 A=B+C=– + =– + =– 6 12 12 12 12 2 2 1 5 2A + B − C = – + – – =– 12 12 12 12" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-12",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "In a car rental company, the cars are either 2-seat- ers or 5-seaters. A tourist group of 22 people will rent 8 vehicles. How many of these vehicles are 2-seaters?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "2", value: "A" },
      { label: "4", value: "B" },
      { label: "5", value: "C" },
      { label: "6", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let the number of 2-seater cars be x and the number of 5-seater cars be y. We have the following conditions: 1. The total number of cars is 8: x + y = 8 2. The total number of people is 22: 2x + 5y = 22 Now, let’s solve these equations: From the first equation, we can express y in terms of x: y=8−x Substitute this into the second equation: 2x + 5(8 − x) = 22 Distribute the 5: 2x + 40 − 5x = 22 Combine like terms: −3x + 40 = 22 Subtract 40 from both sides: −3x = −18 Divide by –3: x=6 So, x = 6, meaning there are 6 cars that are 2- seaters. 3" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-dec-13",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "If the long side of a rectangular garden increases by 20% and the short side decreases by 10%, how does the area of the garden change? 3",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "Decreases by 10%", value: "A" },
      { label: "Decreases by 8%", value: "B" },
      { label: "Increases by 10%", value: "C" },
      { label: "Increases by 8%", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The original area of the garden is: Original Area = L×W After the changes: • The long side increases by 20%, so the new length of the long side is: Lnew = L × (1 + 0 =1.20L • The short side decreases by 10%, so the new length of the short side is: Wnew = W × (1 − = 0.90W The new area of the garden is: New Area = Lnew × Wnew = 1.20L× 0.90W = 1.08 × (L × The new area is 1.08 times the original area, whic means the area of the garden increases by 8%." },
    ],
    tags: ["geometry", "percentages"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-14",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "In a farm, the number of rabbits doubles every 6 months. How many rabbits will be on the farm after 5 years, starting with 256 rabbits? (It is assumed that no rabbits die during this pe 1 –3",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "216", value: "A" },
      { label: "217", value: "B" },
      { label: "218", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "5 years = 5 × 12 months = 60 months Number of 6-month periods = 60 months / 6 months/ period = 10 periods Since the number of rabbits doubles every 6 months we use the formula: Final number of rabbits = Initial number of rabbits × 2number of periods Final number of rabbits = 256 × 210 = 28 x 210 = 2" },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-15",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "= (–10)4 ❀ = 10 = (–100)3 ❖ = (100) 0 If the numbers equated with the shapes above are arranged from smallest to greatest, what shape is formed?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "❀, , , ❖", value: "A" },
      { label: "❖, , , ❀", value: "B" },
      { label: ", ❖,       ,❀", value: "C" },
      { label: ", ❖, ❀,", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Circle: (–10)4=10,000 Since the exponent is even, the result is positive. 1 –3 Clover: = 103 =1,000 10 .20) The negative exponent flips the fraction and raises it to the power of 3. 0.10) Square: (–100)3 = −1,000,000 Since the exponent is odd, the result is negative. Diamond: (100)0 = 1 W) Any number to the power of 0 is 1. h The order of shapes from smallest to largest is: ❒→✥→♣→❍" },
    ],
    tags: ["combinatorics", "number sense"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-16",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "riod.) 219 What is the perimeter of this shape made up of equal squares, each with an area of 50 cm²?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "16ñ2", value: "A" },
      { label: "24ñ2", value: "B" },
      { label: "32ñ2", value: "C" },
      { label: "40ñ2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Side length of each square = ò50 = 52 cm The total perimeter P is the sum of all the outer sides: P = 2 × (2 × 52) + 2 × 52 Simplifying: P = 4 × 52 + 4 × 52 = 402 cm" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-17",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "x–2 xx++22 . B x.(x + 1) B + A A Find the value of A. 4",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "2x2 + 4x + 4", value: "A" },
      { label: "2x2 + 4x – 4", value: "B" },
      { label: "2x2 + 2x – 2", value: "C" },
      { label: "2x2 + 2x + 2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The correct answer is C." },
    ],
    tags: ["problem solving"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-18",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "I. (x + 2) II. (x – 2) III. (x + 5) IV. (x – 5) Which two of the given algebraic expressions multiply to equal x2 – 3x – 10.?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "I and II", value: "A" },
      { label: "I and IV", value: "B" },
      { label: "II and III", value: "C" },
      { label: "III and IV", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We want to factor the quadratic expression: x2 – 3x – 10 We need to find two numbers that multiply to −10 and add to −3. These numbers are −5 and 2. Therefore, we can factor the quadratic expression as: x – 3x – 10 = (x − 5)(x + 2) 2" },
    ],
    tags: ["arithmetic", "algebra"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-19",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "A B C In the isosceles triangle above, |AB| = |BC| B∠AC = 2x−30 B∠CA = x+10 A∠BC = 4y+20 What is the value of y in degrees?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "15", value: "A" },
      { label: "30", value: "B" },
      { label: "45", value: "C" },
      { label: "6", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Given that triangle ABC is isosceles with |AB| = |BC|, the angles opposite these equal side are also equal: B∠AC = B∠CA 2x – 30° = x +10° x = 40° Since the sum of the interior angles in any trian is 180°, we have: B∠AC + B∠CA + A∠BC =180° B∠AC = B∠CA = 50° A∠BC = 4y + 20° = 80° 4y = 60° y = 15°" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-20",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "y D (-3, 5) A (4, 5) -3 x C (-3, -2) B (4, -2) What is the perimeter of the rectangle ABCD given above?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "16", value: "A" },
      { label: "28", value: "B" },
      { label: "32", value: "C" },
      { label: "45", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Length of side AB (horizontal side): • The coordinates of A are (4, 5) and the coordinates of B are (4, −2). • The length of AB is the difference in the y- coordinates because AB is a vertical line: AB= |5−(−2) |=5 + 2 = 7 Length of side BC (vertical side): • The coordinates of B are (4,−2) and the coordinates of C are (−3,−2). • The length of BC is the difference in the x-co- ordinates because BC is a horizontal line: BC = |4−(−3) | = 4 + 3=7 P = 2 × (length+width) P = 2 × (7 + 7) = 2 × 14 = 28 The perimeter of the rectangle ABCD is 28 units." },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-21",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "A D F B C E The triangles given above are similar triangles (ABC ≅ DEF). |AB|=2x − 7, |AC|= 9 cm, |DE|=5 cm, and |DF|=3y−6 cm. What is the value of x + y? 0 5",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "9", value: "A" },
      { label: "10", value: "B" },
      { label: "11", value: "C" },
      { label: "12", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Given that triangles A¿BC and D¿EF are congruent (A¿BC ≅ D¿EF), this means all corresponding sides and angles are equal. Given the congruence: • |AB| = |DE| • |AC| = |DF| We know that: |AB|= 2x − 7 = |DE|=5 s |AC|= 9 =|DF|= 3y − 6 2x − 7 = 5 Add 7 to both sides: 2x = 12 gle x=6 9 = 3y − 6 Add 6 to both sides: 15 = 3y Divide by 3: y=5 x + y = 6 + 5 = 11 5" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-22",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "A 3 cm F E x cm B C D Given the triangle ABC, with B, C, and D being collinear and D, E, F being collinear, and the following conditions: • |AE| = 3×|EC| • |BC| = 4|CD| • |AF| = 3 cm What is the length of |FB| = x cm?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "2", value: "A" },
      { label: "4", value: "B" },
      { label: "12", value: "C" },
      { label: "6", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Use the given ratio information |AE| = 3 × |EC|: AE = 3 × EC |BC| = 4 × |CD|: BC = 4 × CD Since F and E are points dividing segments AF and AB respectively, and given AF = 3 cm: We can use the properties of similar triangles o segment division: AE = 3 × EC, implies AE is a ratio 3:1 on BC’s same line. BC = 4 × CD, therefore: x + 3 (for BF) = 1/4AB |FB| = ? Given the full length is divided in similar tria proportion: Using ratio similarity logic: Thus final x = 6cm" },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-23",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "A cube with a side length of ‘a’ units has been formed by combining smaller cubes as shown above. If three small painted cubes are remo- ved from the shape above, how will the surface area of the new shape change?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "Increased by 6a2", value: "A" },
      { label: "Decreased by 6a2", value: "B" },
      { label: "Decreased by 5a2", value: "C" },
      { label: "Same", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The surface area of a cube is given by the formu Surface Area = 6a2(for one cube) When three small cubes are removed, their remova exposes certain faces to the outside. First Cube Removal: Exposes 2a2. Second Cube Removal: The number of surface areas is the same. Third Cube Removal: Exposes 4a2. Therefore, the surface area of this cube increas by 6a2." },
    ],
    tags: ["geometry", "3D geometry"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-24",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "x+1 B A 10(x _ 2) cm The circumference of a circle with a radius of pr is 2pr2. A wheel with a radius of (x + 1) cm starts at point A and makes one full rotation to reach point B, falling off the edge at point B. What is the maximum integer value that x can take?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "6", value: "A" },
      { label: "5", value: "B" },
      { label: "4", value: "C" },
      { label: "3", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The radius of the wheel is (x + 1)cm, so the cir- cumference C of the wheel is: C = 2π(x + 1) Substitute π = 3: C = 2 × 3 × (x + 1) = 6(x + 1) The distance from A to B is given as 10(x − 2) cm. Since the wheel makes one full rotation, the distance it covers (circumference) must equal the r distance from A to B: 6(x + 1) = 10(x − 2) Expand and simplify the equation: 6x + 6 = 10x − 20 Move all terms involving x to one side and constants to the other: 6 + 20 = 10x − 6x ngles 26 = 4x Solve for x: 26 x= = 6.5 4 Since x must be an integer, the largest integer x can take is: x=6 la: l ed 6" },
    ],
    tags: ["geometry", "number sense"],
    difficulty: "medium",
  },

  {
    id: "oly78-dec-25",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "y d B A O x In the Cartesian coordinate system, the slope of 5 the given line d is . 3 Given that the area of triangle AOB is 270 cm 2, what is the length of |AO|? 6",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "6", value: "A" },
      { label: "12", value: "B" },
      { label: "18", value: "C" },
      { label: "30", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The correct answer is C." },
    ],
    tags: ["geometry"],
    difficulty: "hard",
  },

  {
    id: "oly78-dec-27",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "In the equation ax + b = ax + c, if b ≠ c, then equation has no solution for x. Given the equation: 2.(x – 3) = (2a – 6)x – 8 It is stated that this equation has no solutio Accordingly, what is the value of a? (6 point",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "1", value: "A" },
      { label: "2", value: "B" },
      { label: "3", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "First, let’s simplify both sides of the equation: 2.(x − 3) = (2a − 6)x − 8 Expand both sides: 2x − 6 = (2a −6)x − 8 For the equation to have no solution, the coeffi- cients of x on both sides must be equal, and the constant terms must be different. This comes from the standard form ax + b = ax + c, where b≠c. For the equation 2x − 6 = (2a − 6)x − 8 to have no solution: The coefficient of x must be the same on both sides: 2 = 2a − 6 Solve for a: 2a = 8 ⇒ a = 4 4 = 2 = a. 7" },
    ],
    tags: ["algebra"],
    difficulty: "hard",
  },

  {
    id: "oly78-dec-28",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "Which of the following is the net (unfolded) shape of a cylinder with a diameter and height of 6 cm? (Use p = 3)     27 cm 6 cm 18 cm 6 cm e-   36 cm  6 cm 108 cm  6 cm 800 the Q29: E A n. 15 cm 20 cm C m s) 2 )c x+ 8 cm 4 B ( D In the triangles A¿BC and C¿DE given above: • m(A∠BC) = m(C∠DE) • |CD| = 8 cm, |DE| = 20 cm • |AB| = 15 cm, and |BC| = (x + 2) cm What is the value of x? 7",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "20", value: "A" },
      { label: "40", value: "B" },
      { label: "60", value: "C" },
      { label: "80", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The height of the cylinder is given as 6 cm. This will be the height of the rectangle. The diameter of the cylinder is 6 cm, so the rad diameter 6 r is: r = = = 3 cm 2 2 The circumference of the base circle (which will be the length of the rectangle when unwrapped) is: Circumference = 2πr = 2×π × 3 = 18 cm The rectangle should have a height of 6 cm and a length of 18 cm. The net should also include two circles with a diameter of 6 cm." },
    ],
    tags: ["geometry", "3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly78-dec-30",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "Below, there are cards numbered from 1 to n. The probability that a randomly selected card from these cards has a number that is a positi 1 multiple of 3 is . 4 1 2 3 ............. Based on this, what is the maximum value of n?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "4", value: "A" },
      { label: "8", value: "B" },
      { label: "12", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The total number of possible outcomes is simply the total number of cards, which is n. The favorable outcomes are the numbers that are multiples of ius 3 within the range from 1 to n. The multiples of 3 between 1 and n are 3,6,9,… The number of n these multiples is given by , rounded down to 3 the nearest whole number. The probability is given as: Number of favorable outcomes 1 = Total number of possible outcomes 4 This becomes: n 3 1 = n 4 n n To satisfy this equation, should be close to . 3 4 Let’s solve it algebraically. n 4× =n 3 n Since is an integer, let’s try values of n that are 3 multiples of 3: For n = 12: 12 Number of multiples of 3 from 1 to 12 = =4 3 Total number of outcomes = 12 4 1 1 Probability = = (Not ) 12 3 4 es For n = 20: 20 Number of multiples of 3 from 1 to 20 = =6 3 Total number of outcomes = 20 6 3 1 Probability = = (Not ) 20 10 4 For n = 12: 12 Number of multiples of 3 from 1 to 12 = =4 3 Total number of outcomes = 12 4 1 1 Probability = = (Not ) 12 3 4 The correct match can be determined with smaller values like n = 8: 8" },
    ],
    tags: ["probability", "number theory", "number sense"],
    difficulty: "hard",
  },

  {
    id: "oly78-dec-31",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "Daniel distributes a cylindrical cake with a d of 20 cm and a height of 20 cm, which he recei for his birthday, into 8 pieces to his friends According to this, what is the volume of the piece that one of his friends eats? (Take p =",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "1000 cm³", value: "A" },
      { label: "750 cm³", value: "B" },
      { label: "500 cm³", value: "C" },
      { label: "250 cm³", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To solve this problem, we’ll start by finding th volume of the entire cake, which is in the shape of a cylinder. The formula for the volume of a cylinder is: V = π × r2 × h Given: 20 Diameter = 20 cm, so the radius r = = 10 2 Height h = 20 cm, π = 3. Substituting the values: V = 3 × 102 × 20 V = 3 × 100 × 20 V = 6000 cm³ This is the volume of the entire cake. Since the cake is divided into 8 equal pieces, the volume one piece is: 6000 cm³ Volume of one piece = = 750 cm³ 8" },
    ],
    tags: ["3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly78-dec-32",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "ve 20 cm ... n 8 cm How many times the volue of the remaining part the larger cylinder is greater than tehe",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "25", value: "A" },
      { label: "20", value: "B" },
      { label: "15", value: "C" },
      { label: "10", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The formula for the volume of a cylinder is: V = πr2h For the original large cylinder: ty • Radius r = 8 cm • Height h = 20 cm The volume Vlarge of the original cylinder is: Vlarge = π × (8)2 × 20 = π × 64 × 20 = 1280π cubic cm The smaller cylinder has: 1 • A base radius of × 8 = 2 cm (since it’s a 4 quarter of the large cylinder’s radius) • The same height h = 20 cm as the large cylinder The volume Vsmall of the smaller cylinder is: Vsmall = π × (2)2 × 20 = π × 4 × 20 = 80π cubic cm Now, we need to find how many times the volume of the remaining part of the large cylinder is compared to the volume of the removed part. The volume of the remaining part Vremaining is: e Vremaining = Vlarge − Vsmall =1280π − 80π = 1200π cubic cm Now, find the ratio: Vremaining 1200π Ratio = = =15 Vsmall 80π The volume of the remaining part is 15 times cm, greater than the volume of the removed part. of 9" },
    ],
    tags: ["rate problems", "3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly78-dec-33",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "18 m 648 m iameter ved . In the figure, a windmill is shown with the point 3.) where the blades meet and its height from the ground. Given that each blade of the windmill is ò18 meters long, how far is the closest point of the blades to the ground? 8",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "5ñ2", value: "A" },
      { label: "10ñ2", value: "B" },
      { label: "15ñ2", value: "C" },
      { label: "25ñ2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "First, let’s simplify the given square roots: √648 = √(36 × 18) = 6√18 √18 = √(9 × 2) = 32 So, the height from the ground to where the blad meet is: 6 × 32 = 182 meters The closest point of the blades to the ground is when one of the blades is directly pointing downward. The distance from the ground to the closest point of the blade is the height of the meeting point minus the length of the blade: Closest distance = 182 − 32 = 152 meters" },
    ],
    tags: ["problem solving"],
    difficulty: "hard",
  },

  {
    id: "oly78-dec-34",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "An open-top wooden box in the shape of a cube is intended to be made as shown above. Given that a total of 90 cm2 of wood is used, what is the length of one edge of this box? 9",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "15", value: "A" },
      { label: "90", value: "B" },
      { label: "18", value: "C" },
      { label: "3ñ2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "For a cube with an edge length of a, the surface area of one face is: Area of one face = a2 Since the cube has 6 faces in total, but the top open, the area of the wood used for the 5 faces is: Total area = 5 × a2 We know the total area of the wood used is 90 cm 5a2 = 90 Divide both sides by 5: 90 a2 = = 18 5 Now, take the square root of both sides: a = √18" },
    ],
    tags: ["3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly78-dec-35",
    sectionId: "olympiad-dec-2024",
    gradeLevel: "7-8",
    questionText: "l�ght source obstacle wall A right circular cylinder with a height of 20 cm and A light source, as shown in the figure, is held in front of an obstacle that has a circular hole with a diameter of 10 cm. This creates a circular light spot with an area of 432 cm2 on the opposite wall. Given that the distance from the obstacle to the light source is 5 meters, how far is the obstacle from the wall? (Take p = 3.)",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "5 m", value: "A" },
      { label: "7 m", value: "B" },
      { label: "12 m", value: "C" },
      { label: "24 m", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "First, let’s find the radius of the circular light spot on the wall using its area. The formula for the area of a circle is: Area = π×r2 es Given that the area is 432 cm² and π = 3: 432 = 3 × r2 Solve for r2: 432 r2 = = 144 3 So, the radius r is: r =ò144 = 12 cm The problem involves two similar triangles: The smaller triangle has a base of 10 cm (the diameter of the hole, so its radius is 5 cm) and a height of 5 m (distance from the light source to the obstacle). The larger triangle has a base of 24 cm (the dia- meter of the light spot on the wall, so its radius is 12 cm) and an unknown height x (distance from the obstacle to the wall). Using the property of similar triangles: Radius of smaller circle Distance from light source to obstacle Radius of larger circle = Total distance from light source to wall This gives us: is 5 cm 12 cm = 5m 5 m+x Simplifying: 12 ²: 1= 5+x 5 + x = 12 Cross-multiply to solve for x: 5 + x =12 x = 12 − 5 = 7 m 10" },
    ],
    tags: ["geometry", "rate problems", "3D geometry"],
    difficulty: "hard",
  },

  // =================================================================
  // JANUARY 2025
  // =================================================================

  {
    id: "oly78-jan-1",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "– –2 –1 3 4 –5 In the subtraction table above, numbers suitabl for the subtraction operation will be filled in Which of the following cannot be a number in one of the blank cells?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "5", value: "A" },
      { label: "–4", value: "B" },
      { label: "–3", value: "C" },
      { label: "2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The operations for each cell are as follows: First Row, Left Cell: • Calculation: 3 − (−2) = 5 So, the value for the first row, left cell is 5. Second Row, Middle Cell: • Calculation: −5 − (−2) = −3 Thus, the value for the second row, middle cell is Second Row, Right Cell: • Calculation: −5 − (−1) = −4 Therefore, the value for the second row, right cel is –4. After checking all possible results, we find that not present in the table." },
    ],
    tags: ["arithmetic", "ratios", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-2",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "Given the equation: (−8) (−2)  (−3) ★ (−5) = 19 To make this equation correct, which operations should replace the symbols , , and ★?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "= ×,  = −, ★ = +", value: "A" },
      { label: "= +,  = ×, ★ = −", value: "B" },
      { label: "= ÷,  = +, ★ = ×", value: "C" },
      { label: "= ×,  = +, ★ = ÷", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Option A: = ×,  = −, ★ = + (−8) × (−2) −(−3) + (−5) 1. Calculate (−8) × (−2) = 16 2. Calculate 16 − (−3) = 16 + 3 = 19 3. Calculate 19 + (−5) = 14 This does not result in 19, so Option A is incorrect. –3. Option B: = +,  = ×, ★ = − (−8) + (−2) × (−3) − (−5) l 1. Calculate (−2) × (−3) = 6 2. Calculate (−8) + 6 = −2 2 is 3. Calculate −2 − (−5) = −2 + 5 = 3 This does not result in 19, so Option B is incorrect. Option C: = ÷, = +, ★ = × (−8) ÷ (−2) + (−3) × (−5) 1. Calculate (−8) ÷ (−2) = 4 2. Calculate (−3) × (−5) = 15 3. Calculate 4 + 15 = 19 This results in 19, so Option C is correct. Option D: = ×,  = +, ★ = ÷ (−8) × (−2) + (−3) ÷ (−5) 1. Calculate (−8) × (−2) = 16 2. Calculate (−3) ÷ (−5) = 0.6 3. Calculate 16 + 0.6 = 16.6 This does not result in 19, so Option D is incorrect. 1" },
    ],
    tags: ["ratios", "algebra"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-3",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "D C 2x + 1 A 2x – 1 3x + 4 B e In the given figure, ABCD is a rectangle. . Which of the following represents the perime- ter of rectangle ABCD?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "7x + 4", value: "A" },
      { label: "14x + 8", value: "B" },
      { label: "16x + 9", value: "C" },
      { label: "12x + 4", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Length of the Rectangle: The total length is given by adding 3x + 4 and 2x So, 3x + 4 + 2x − 1 = 5x + 3 Width of the Rectangle: The width is given as 2x + 1. Perimeter of the Rectangle: The formula for the perimeter P of a rectangle is: P = 2 × (Length + Width) Substituting the values: P = 2 × ((5x + 3) + (2x + Combine like terms inside the parentheses: P = 2 × (7x + 4) Now, distribute the 2: P = 14x + 8 The correct answer is B) 14x + 8." },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-4",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "x 3 4 6 7 ■ 11 y 9 12 18 ▲ 27 ● There is a linear relationship between the x and y values given in the table below. Based on this relationship, what is the value of + + ? 1",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "60", value: "A" },
      { label: "63", value: "B" },
      { label: "66", value: "C" },
      { label: "72", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let’s look at the values in the table to see how changes as x increases: • When x = 3, y = 9 • When x = 4, y = 12 • When x = 6, y = 18 • When x = 7, y = 21 It looks like for each value of x, y is 3 times x. So the rule here is: y=3×x From the table, we have: = ×,  = +,  = ÷ •  = 21 • = 9 •  = 33 We are asked to find the sum:  + + Substitute the values: 21 + 9 + 33 = 63 So the correct answer is B) 63." },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-5",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84 The number with all its positive divisors liste above is which of the following? C6: Weight Number of Packets 10 x 20 3 30 3 The table above shows the number of sugar packe on a market shelf according to their weights. Given that the mode of the data set is 10, what is the arithmetic mean for the smallest possibl value of x?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "17", value: "A" },
      { label: "19", value: "B" },
      { label: "21", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To find the correct answer, let’s examine the list of − 1. divisors and determine which option matches. Let’s check each option to see if all of these divisors are included in its list of factors. • Option A: 168 Divisors of 168: 1, 2, 3, 4, 6, 7, 8, 12, 14, 21, 24, 28, 42, 56, 84, 168 • Option B: 84 Divisors of 84: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84 • Option C: 42 Divisors of 42: 1, 2, 3, 6, 7, 14, 1)) 21, 42 • Option D: 21 Divisors of 21: 1,3,7,21 The correct answer is B) 84" },
    ],
    tags: ["number theory", "statistics", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-7",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "In the expression, × +• If we replace the symbols , , and • with the numbers −2, 4, and −5, in which arrangement will the result of the expression be the smallest? d",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "=−5,         = 4, • = −2", value: "A" },
      { label: "=−2,         = 4, • = −5", value: "B" },
      { label: "= 4,        = −2, • = −5", value: "C" },
      { label: "21", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Option A:  = −5, = 4, • =−2 −5 × 4 + (−2) 1. Calculate −5 × 4 = −20 2. Calculate −20 + (−2) = −22 Result for Option A: –22 Option B:  = −2, = 4, • =−5 −2 × 4 + (−5) 1. Calculate −2 × 4 = −8 2. Calculate −8 + (−5) = −13 Result for Option B: –13 Option C:  = 4, = −2, • = −5 4×− 2 + (−5) 1. Calculate 4× − 2 = −8 2. Calculate −8 + (−5) = −13 Result for Option C: –13 Option D:  = −5, = −2, • = 4 −5× − 2 + 4 1. Calculate −5× − 2 = 10 2. Calculate 10 + 4 = 14 Result for Option D: 14 The smallest result is obtained in Option A, where the result is –22." },
    ],
    tags: ["algebra", "combinatorics", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-8",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "2 x ts 3 x 5 x 11 e In the factor tree above, which number has been broken down into its factors? 2",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "110", value: "A" },
      { label: "220", value: "B" },
      { label: "330", value: "C" },
      { label: "440", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The factor tree shows the following multiplication sequence: At the top level, we have 2 × 3. The result of 2 × 3 is multiplied by 5 × 11. So, we can calculate step-by-step: 1. 2 × 3 = 6 2. 5 × 11 = 55 3. Finally, 6 × 55 = 330 The correct answer is C) 330" },
    ],
    tags: ["number theory", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-9",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "x Regular pentagonal blocks are combined as shown to form a star symbol in the center. What is the value of angle x in degrees? 10: D C E 64 cm2 128 cm2 A B In the figure, the area of square ABCD is 128 c and the area of triangle CBE is 64 cm². What is the length of |DE|?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "8ñ2 cm", value: "A" },
      { label: "12ñ2 cm", value: "B" },
      { label: "16ñ2 cm", value: "C" },
      { label: "20ñ2 cm", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Interior Angle of a Regular Pentagon: The interior angle of a regular pentagon is 108°. Angle Contribution at the Star’s Tip: When we arrange five pentagons to form this star shape, we observe that each tip of the star is formed by three interior angles of 108° each. Total of Three Interior Angles Meeting at Each Tip: At each tip, three interior angles meet, so: 3 × 108° = 324° Finding the Angle x: The total angle around a point is 360°. Therefore, the angle x is the remaining angle after subtracting 324° from 360°: x = 360° − 324° = 36° 3" },
    ],
    tags: ["geometry"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-11",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "–3 –2 –1 0 1 2 3 4 5 6 A snail on the number line starts at the point –3 3 and moves forward for each move. 8 Accordingly, after moving 19 times, between which two points will the snail be? 2°",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "1 and 2", value: "A" },
      { label: "2 and 3", value: "B" },
      { label: "3 and 4", value: "C" },
      { label: "4 and 5", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To find out how far the snail will go in total, multiply the distance of each move by the number of moves: 3 57 19 × = 8 8 57 Now, let’s convert into a decimal or mixed 8 number to make it easier to understand: 57 = 7.125 8 So, the snail moves a total of 7.125 units forward. The snail starts at −3. Now, we add the total dis- tance it moved: −3 + 7.125 = 4.125 e The final position, 4.125, is between 4 and 5 on the number line. After 19 moves, the snail will be between 4 and 5 on the number line." },
    ],
    tags: ["rate problems", "number sense"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-12",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "m², Alisa gets on an elevator at the 3rd floor. She first goes up 7 floors, then goes down 5 floors. Accordingly, how many more floors does she need to go up to reach the 12th floor? 3 3",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "5", value: "A" },
      { label: "7", value: "B" },
      { label: "10", value: "C" },
      { label: "12", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Starting Floor: 3 After Going Up 7 Floors: 3 + 7 = 10 After Going Down 5 Floors: 10 − 5 = 5 Currently, Alisa is on the 5th floor. To reach the 12th floor from the 5th floor: 12 − 5 = 7 Answer: B) 7 4" },
    ],
    tags: ["problem solving"],
    difficulty: "easy",
  },

  {
    id: "oly78-jan-15",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "Given that the distance between two points is (x + 2) units, what is the algebraic expression for the perimeter of the drawn shape? 7 2 he Q16: n The table can be extended in the direction of the 3 arrow, increasing its closed length by of its 5 original length. If the extended length of the table is 320 cm, what is its length when closed? 4",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "180", value: "A" },
      { label: "200", value: "B" },
      { label: "240", value: "C" },
      { label: "270", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We need to determine how many line segments make up the perimeter of the shape. By analyzing the outline, we can see that there are 10 vertical segments and 12 horizontal segments, making a total of: 12 + 10 = 22 segments Since each segment is (x + 2) units long, the total perimeter is: 22 × (x + 2) Distribute 22 across (x + 2) : 22 × (x + 2) = 22x + 44 The correct answer is B) 22x + 44 5" },
    ],
    tags: ["geometry", "algebra", "rate problems"],
    difficulty: "medium",
  },

  {
    id: "oly78-jan-17",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "4 2 3 1 The top view of a structure is shown above, along with the number of identical cubes used to build it. Which of the structures below could match this description?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "B)", value: "A" },
      { label: "Option B", value: "B" },
      { label: "D)", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We examine each option (A, B, C, and D) to see which one matches the distribution of cubes in the top view. Option A: the • Top-left stack: 4 cubes (matches the top view). • Top-right stack: 2 cubes (matches the top view). • Bottom-right stack: 3 cubes (matches the top view). • Bottom-left stack: 1 cube (matches the top view). 1): This matches perfectly. Option B: • Top-left stack: 3 cubes (does not match the required 4). This option is incorrect. Option C: • Top-left stack: 3 cubes (does not match the required 4). This option is incorrect. Option D: • Top-left stack: 3 cubes (does not match the required 4). This option is incorrect. The correct answer is A. 6" },
    ],
    tags: ["3D geometry", "number sense"],
    difficulty: "medium",
  },

  {
    id: "oly78-jan-18",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "Below is an image of a search engine logo. A B The circumference of the inner blue circle is 30 cm, and the circumference of the outer circle is 54 cm. What is the area of the green, red, and yellow regions combined? (ignore the white area) (Take π = 3)",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "108", value: "A" },
      { label: "126", value: "B" },
      { label: "150", value: "C" },
      { label: "168", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The circumference of a circle is given by C = 2π For the inner blue circle, we have C = 30 cm. Substitute π = 3: 30 = 2 × 3 × r 30 = 6r r = 5 cm So, the radius of the inner blue circle is 5 cm. The area A of a circle is given by A = πr2. For the inner blue circle: A = 3 × (5)2 = 3 × 25 = 75 cm 2 The circumference of the outer circle is 54 cm. Using π = 3: 54 = 2 × 3 × R 54 = 6R R = 9 cm So, the radius of the outer circle is 9 cm. For the outer circle: A = 3 × (9)2 = 3 × 81 = 243 The colored regions are the area of the outer circ minus the area of the inner blue circle: Area of colored regions = 243 − 75 = 168 cm2 The correct answer is D) 168." },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly78-jan-20",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "a b 0 4 1 A 2 10 3 13 4 B According to the linear relationship between the numbers a and b given in the table above, what is the result of A + B?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "7", value: "A" },
      { label: "12", value: "B" },
      { label: "16", value: "C" },
      { label: "23", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The values for b change as a increases. We can look at two rows in the table to see how much b increases each time a goes up by 1. From a = 0 to a = 2, b goes from 4 to 10. So, in 2 steps (from a = 0 to a = 2), b increases 10 − 4 = 6. This means b increases by 3 for each step in a (since 6 ÷ 2 = 3). So, every time a goes up by 1, b goes up by 3. Since b = 4 when a = 0, and b goes up by 3 each time a increases by 1: When a = 1, b will be 4 + 3 = 7. So, A = 7. We continue the pattern. Starting from b = 4 at a • When a = 1, b = 7. • When a = 2, b = 10. • When a = 3, b = 13. • When a = 4, b = 16. So, B = 16. Now that we know A = 7 and B = 16: A + B = 7 + 16 = The correct answer is D) 23." },
    ],
    tags: ["number sense"],
    difficulty: "medium",
  },

  {
    id: "oly78-jan-21",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "The length of a rectangular envelope is 20 cm, and its width is 12 cm. The flap of the envelope i in the shape of a triangle, and its peak point is the intersection of the diagonals of the rectangle What is the area of the shape formed when the envelope is fully opened?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "120 cm2", value: "A" },
      { label: "180 cm2", value: "B" },
      { label: "240 cm2", value: "C" },
      { label: "300 cm2", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The envelope is a rectangle with a length of 20 cm and a height of 12 cm. So the area of this rectangle is: Arectangle = 20 × 12 = 240 cm2 The flap is described as a triangular shape, by and its peak is located at the intersection of the rectangle’s diagonals. This suggests that the flap is a right triangle with a base of 20 cm (the width of the envelope) and a height of 6 cm (half of the height of the rectangle, since the peak is at the midpoint of the diagonals). 1 1 Atriangle = × base × height = × 20 × 6 = 60 cm2 2 2 When the envelope is fully opened, it includes the area of the original rectangle plus the area of the triangular flap. Total Area = Arectangle + Atriangle = 240 + 60 = 300 cm2 = 0: The correct answer is D) 300." },
    ],
    tags: ["geometry"],
    difficulty: "medium",
  },

  {
    id: "oly78-jan-23",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "s at . Some information about Michael and his sister’s ages is given: • The ratio of Michael’s age to his sister’s age today is 1 : 4. • In 3 years, this ratio will be 2 : 5. According to this, what is the sum of Michael and his sister’s ages today? 6",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "5", value: "A" },
      { label: "10", value: "B" },
      { label: "15", value: "C" },
      { label: "20", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let Michael’s current age be x and his sister’s current age be y. The ratio of Michael’s age to his sister’s age tod 1 x 1 is : = 4 y 4 1 This can be rewritten as x = y. 4 In 3 years, Michael’s age will be x + 3 and his si age will be y + 3. The ratio of their ages at that 2 x+3 2 is : = 5 y+3 5 Cross-multiplying gives: 5(x + 3) = 2(y + 3) Expanding and simplifying: 5x + 15 = 2y + 6 5x − 2y = −9 Substitute x from the first equation into the seco equation: 1 5 − 2y=−9 4 Simplify: 5 y − 2y = −9 4 8 Convert 2y to y to combine terms: 4 5 8 y − y = −9 4 4 –3 y=−9 4 –4 Multiply both sides by to solve for y: y 3 1 Substitute y = 12 into x = y: 4 1 x= × 12 = 3 4 The sum of Michael and his sister’s ages today is: x + y = 3 + 12 = 15 The correct answer is C) 15." },
    ],
    tags: ["arithmetic", "ratios"],
    difficulty: "medium",
  },

  {
    id: "oly78-jan-24",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "The price of a car is first increased by 20%, and then a 30% discount is applied to the increased price. Which of the following statements about the car’s price is correct?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "A total discount of 16% was applied.", value: "A" },
      { label: "A total increase of 16% was applied.", value: "B" },
      { label: "A total discount of 24% was applied.", value: "C" },
      { label: "A total increase of 24% was applied.", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Let’s say the car originally costs 100 units. Increase the price by 20%. ay A 20% increase means we add 20% of the original price to the price itself 100 units + 20% of 100 units = 100 + 20 = 120 units. So, after the increase, the new price is 120 units. Apply a 30% discount to the new price. ster’s time Now, we have to reduce this 120-unit price by 30%. To find 30% of 120: 120 × 0.30 = 36 units. So, the discount amount is 36 units. Subtract the discount from the increased price. Take the 36-unit discount away from 120 units: 120 − 36 = 84 units. The final price of the car is 84 nd units. Calculate the total change from the original price. The original price was 100 units, and the final price is 84 units. This means the price dropped by: 100 − 84 = 16 units Since the original price was 100 units, a 16-unit drop is a 16% decrease. The correct answer is A) A total discount of 16% was applied. = 12 9" },
    ],
    tags: ["percentages"],
    difficulty: "medium",
  },

  {
    id: "oly78-jan-25",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "x x x 20 x 30 In the equally balanced scale shown, the weight of each object is labeled. Since the scale is not balanced, what is the smallest integer value that x can take?",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "24", value: "A" },
      { label: "25", value: "B" },
      { label: "26", value: "C" },
      { label: "27", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Left side: There are three objects, each with weight x, so the total weight on the left side is: Right side: There is one object with weight x, and two additional objects with weights 20 and 30, so the total weight on the right side is: x + 20 + 30 = x + 50 Since the scale is unbalanced, we want to find the smallest integer value for x that makes the left s heavier than the right side. For the left side to be heavier: 3 x > x + 50 Subtract x from both sides: 2x > 50 Divide both sides by 2: x > 25 Since x must be an integer, the smallest integer greater than 25 is 26. The smallest integer value x can take is C) 26." },
    ],
    tags: ["number sense"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-26",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "How many zeros are there at the end of 256.7500 × 107?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "2", value: "A" },
      { label: "5", value: "B" },
      { label: "7", value: "C" },
      { label: "9", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Multiplying a number by 107 means moving the decimal point 7 places to the right. Start with 256.7500, which has 4 decimal places. Move the decimal point 7 places to the right to account for 107. Shifting the decimal 7 places to the right changes 256.7500 to 2567500000. The resulting number, 2567500000 has 5 zeros at the end. The number of zeros at the end of 256.7500 × 107 is 5." },
    ],
    tags: ["problem solving"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-27",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "b+2 2a + b Four identical rectangles come together to form a square with a smaller square in the center. Which of the following algebraic expressions represents the perimeter of the formed smaller square? 7 s Q30: A x H 3 B 6 C 120 In triangle ABC: • IABI = IACI • ICHI ⊥ IABI • IHBI = 3 cm • IBCI = 6 cm • IAHI = x cm Given the information above, what is IAHI = x in cm?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "2", value: "A" },
      { label: "3", value: "B" },
      { label: "6", value: "C" },
      { label: "9", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "Finding the Long Side of the Rectangle: 3x. • The side length of the larger square is 2a + b. • To determine the long side of the rectangle, we need to subtract b + 2 (the shorter side of the rectangle) from the side of the larger square: 2a + b − (b + 2) = 2a − 2 • Therefore, the long side of the rectangle is 2a − 2. ide Finding the Side Length of the Inner Square: • To find the side length of the inner square, we subtract the width (shorter side) of the rectangle, b + 2, from the long side of the rectangle, 2a − 2: 2a − 2 − (b + 2) = 2a − b − 4 • So, the side length of the inner square is 2a−b−4. Calculating the Perimeter of the Inner Square: • The perimeter P of a square is given by 4×side length. • Substituting the side length of the inner square: P = 4 × (2a − b − 4) • Expanding this expression: P = 8a − 4b − 16 The perimeter of the inner square is: 8a − 4b − 16 This matches with Option A in the question." },
    ],
    tags: ["geometry", "algebra"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-28",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "In a triangle, the measures of the interior angle are a, b, and c, and their sum is 180°. Given the inequality: 2c−b≤a What is the maximum possible value of c?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "40", value: "A" },
      { label: "60", value: "B" },
      { label: "90", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "We are given: 2c − b ≤ a Substitute a from the angle sum property a = 180 − b − c into the inequality: 2c − b≤180 − b − c Simplify this inequality: 3c ≤180 Divide both sides by 3: c ≤ 60 The maximum possible value of c that satisfies the inequality is 60°. 10" },
    ],
    tags: ["arithmetic", "geometry"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-29",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "y A(–2,3) x B(4, –5) What is the distance between points A and B?",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "5", value: "A" },
      { label: "6", value: "B" },
      { label: "8", value: "C" },
      { label: "Option D", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "To find the distance between two points A(x1, y1) and B(x2, y2), we use the distance formu Distance = √(x2 – x1)2 + (y2 – y1)2 For points A(−2, 3) and B(4, −5): • x1 = −2, y1 = 3 • x1 = 4, y2 = −5 Substitute these values into the formula: Distance = √(4 – (–2)2 + (–5 – 3)2 = √62 + (–8)2 = √100 = 10" },
    ],
    tags: ["rate problems"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-31",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "B A In the grid above, which of the following trans- lations applied to [AB] would make point B the center of the circle and the radius equal to the length of [AB]? 10 A) 8 units to the right, 6 units down 8",
    correctAnswer: "C",
    answerType: "multiple-choice",
    choices: [
      { label: "Option A", value: "A" },
      { label: "10 units to the right, 10 units down", value: "B" },
      { label: "10 units to the left, 10 units up", value: "C" },
      { label: "6 units to the right, 8 units down", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The line segment [AB] has a length of 3 units la: (counted by the grid squares in the image). We need to translate [AB] so that point B aligns with the center of the circle shown in the grid. Observing the grid, we can count the horizontal and vertical distances from point B to the center of the circle. B needs to move 10 units to the left and 10 units up to reach the center of the circle. The correct answer is C) 10 units to the left, 10 units up. ean" },
    ],
    tags: ["geometry"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-32",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "The edge lengths of a rectangular prism are 9 cm, 15 cm, and a cm. If the total length of all edges of the prism is 120 cm, what is the value of a?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "7", value: "A" },
      { label: "6", value: "B" },
      { label: "5", value: "C" },
      { label: "4", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "A rectangular prism has 12 edges, with 4 edges for each unique dimension. Therefore, the total edge length can be calculated as: 4 × (9 + 15 + a) Given that the total edge length is 120 cm: 27 4 × (9 + 15 + a) = 120 120 9 + 15 + a = 4 24 + a = 30 a=6 The value of a is 6, so the correct answer is B) 6. 11" },
    ],
    tags: ["3D geometry"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-33",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "Emma and Jack have $100 together, Jack and Oliver have $110 together, and finally, Oliver an Emma have $130 together. How much money do they have in total?",
    correctAnswer: "A",
    answerType: "multiple-choice",
    choices: [
      { label: "$170", value: "A" },
      { label: "$220", value: "B" },
      { label: "$245", value: "C" },
      { label: "$335", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "• Let E represent the amount Emma has. • Let J represent the amount Jack has. • Let O represent the amount Oliver has. Emma and Jack together have $100: E + J = 100 Jack and Oliver together have $110: J + O = 110 Oliver and Emma together have $130: O + E = 130 Add All Three Equations: (E + J) + (J + O)+ (O + E) = 100 + 110 + 130 2E + 2J + 2O = 340 Divide both sides by 2: E + J + O = 170 The total amount of money they all have together is $170." },
    ],
    tags: ["problem solving"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-34",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "1 + 2 + 3 + ... + (2n + 1) = 153 What is the value of n?",
    correctAnswer: "B",
    answerType: "multiple-choice",
    choices: [
      { label: "9", value: "A" },
      { label: "8", value: "B" },
      { label: "7", value: "C" },
      { label: "6", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The sum of numbers from 1 to 2n + 1 is given as 153. We need to find out what n is. This sequence is simply adding up numbers starting from 1 and going all the way to 2n + 1. The sum of the first k numbers (like 1, 2, 3, ..., some number) can be calculated using this formula: k x (k + 1) Sum = 2 Here, the last number in our sequence is 2n + 1, s k = 2n + 1. According to the problem: (2n+1)×(2n+2) = 153 2 We can try different values of n to see if we get a sum of 153. If n = 8: Then 2n + 1 = 2 × 8 + 1 = 16 + 1 = 17 Let’s find the sum from 1 to 17 using the formula: 17×18 306 = = 153 2 2 The sum is 153 when n = 8." },
    ],
    tags: ["problem solving"],
    difficulty: "hard",
  },

  {
    id: "oly78-jan-35",
    sectionId: "olympiad-jan-2025",
    gradeLevel: "7-8",
    questionText: "What is the remainder when the sum of the numbers 45687 + 5884 + 65874 is divided by 11? d 9",
    correctAnswer: "D",
    answerType: "multiple-choice",
    choices: [
      { label: "0", value: "A" },
      { label: "1", value: "B" },
      { label: "2", value: "C" },
      { label: "9", value: "D" },
    ],
    explanation: [
      { label: "Solution", content: "The sum of the numbers is 117445. To find the remainder when 117445 is divided by 11, we can use a trick called the “alternating sum rule” for division by 11. Here’s how it works: Write down the digits of 117445: The digits are 1, 1, 7, 4, 4, and 5. The digits of 117445 are: 1, 1, 7, 4, 4, 5. Odd positions (from right): 5, 4, 1: 5 + 4 + 1 = 10 Even positions (from right): 4, 7, 1: 4 + 7 + 1 = 12 Subtract the sums: 10 − 12 = −2 When the result is negative, add 11 to bring it into the range of positive remainders: −2 + 11 = 9 The remainder when 117445 is divided by 11 is 9. The correct option is D) 9. up to o 12" },
    ],
    tags: ["arithmetic", "number sense"],
    difficulty: "hard",
  },

];
