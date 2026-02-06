import { AnswerType } from "./types";

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function normalizeFraction(input: string): string | null {
  const match = input.trim().match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
  if (!match) return null;
  let num = parseInt(match[1], 10);
  let den = parseInt(match[2], 10);
  if (den === 0) return null;
  if (den < 0) {
    num = -num;
    den = -den;
  }
  const d = gcd(Math.abs(num), den);
  return `${num / d}/${den / d}`;
}

const DECIMAL_TOLERANCE = 0.001;

export function checkAnswer(
  userInput: string,
  correctAnswer: string,
  answerType: AnswerType,
): boolean {
  const trimmed = userInput.trim();
  if (trimmed === "") return false;

  switch (answerType) {
    case "integer": {
      const parsed = parseInt(trimmed, 10);
      return !isNaN(parsed) && parsed === parseInt(correctAnswer, 10);
    }
    case "decimal": {
      const parsed = parseFloat(trimmed);
      const expected = parseFloat(correctAnswer);
      return !isNaN(parsed) && Math.abs(parsed - expected) < DECIMAL_TOLERANCE;
    }
    case "fraction": {
      const userNorm = normalizeFraction(trimmed);
      const correctNorm = normalizeFraction(correctAnswer);
      if (userNorm && correctNorm) return userNorm === correctNorm;
      const userFloat = parseFloat(trimmed);
      const correctParts = correctAnswer.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
      if (!isNaN(userFloat) && correctParts) {
        const correctFloat =
          parseInt(correctParts[1], 10) / parseInt(correctParts[2], 10);
        return Math.abs(userFloat - correctFloat) < DECIMAL_TOLERANCE;
      }
      return false;
    }
    case "multiple-choice": {
      return trimmed.toUpperCase() === correctAnswer.toUpperCase();
    }
    case "text": {
      return trimmed.toLowerCase() === correctAnswer.trim().toLowerCase();
    }
  }
}
