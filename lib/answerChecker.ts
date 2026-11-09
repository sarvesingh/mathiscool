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

interface ParsedMixed {
  num: number; // improper numerator
  den: number;
  simplest: boolean;
  improper: boolean;
}

// Accepts "5", "3/4", "2 5/12". Simplest form = whole number, proper reduced
// fraction, or whole + proper reduced fraction.
export function parseMixedNumber(input: string): ParsedMixed | null {
  const s = input.trim().replace(/\s+/g, " ");
  let m = s.match(/^(\d+)$/);
  if (m) return { num: parseInt(m[1], 10), den: 1, simplest: true, improper: false };
  m = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (m) {
    const n = parseInt(m[1], 10);
    const d = parseInt(m[2], 10);
    if (d === 0) return null;
    const improper = n >= d;
    return { num: n, den: d, simplest: !improper && n > 0 && gcd(n, d) === 1, improper };
  }
  m = s.match(/^(\d+) (\d+)\s*\/\s*(\d+)$/);
  if (m) {
    const w = parseInt(m[1], 10);
    const n = parseInt(m[2], 10);
    const d = parseInt(m[3], 10);
    if (d === 0) return null;
    const improper = n >= d;
    return { num: w * d + n, den: d, simplest: !improper && n > 0 && gcd(n, d) === 1, improper };
  }
  return null;
}

function sameValue(a: ParsedMixed, b: ParsedMixed): boolean {
  return a.num * b.den === b.num * a.den;
}

// When the amount is right but not in simplest form, returns a nudge to show
// the student instead of a plain "wrong".
export function mixedNumberHint(userInput: string, correctAnswer: string): string | null {
  const u = parseMixedNumber(userInput);
  const c = parseMixedNumber(correctAnswer);
  if (!u || !c || !sameValue(u, c) || u.simplest) return null;
  if (u.improper) {
    return "Right amount! The fraction part is 1 or more, so turn it into a whole number plus a fraction.";
  }
  return "Right amount! Now simplify the fraction: divide the top and bottom by the same number.";
}

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
    case "mixed-number": {
      const u = parseMixedNumber(trimmed);
      const c = parseMixedNumber(correctAnswer);
      return !!u && !!c && u.simplest && sameValue(u, c);
    }
    case "multiple-choice": {
      return trimmed.toUpperCase() === correctAnswer.toUpperCase();
    }
    case "text": {
      return trimmed.toLowerCase() === correctAnswer.trim().toLowerCase();
    }
  }
}
