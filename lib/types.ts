export type Difficulty = "easy" | "medium" | "hard";

export type AnswerType = "integer" | "decimal" | "fraction" | "text" | "multiple-choice";

export type Competition = "math-is-cool" | "mathcounts";

export interface ExplanationStep {
  label: string;
  content: string;
}

export interface Choice {
  label: string;
  value: string;
}

export type GradeLevel = "5" | "6" | "7-8" | "9-10";

export interface GradeOption {
  value: GradeLevel;
  label: string;
  description: string;
  competition: Competition;
}

export interface Question {
  id: string;
  sectionId: string;
  gradeLevel: GradeLevel;
  questionText: string;
  correctAnswer: string;
  answerType: AnswerType;
  choices?: Choice[];
  explanation: ExplanationStep[];
  detailedExplanation?: ExplanationStep[];
  tags: string[];
  difficulty: Difficulty;
}

export interface QuestionProgress {
  userAnswer: string;
  scratchWork: string;
  isCorrect: boolean | null;
  explanationRevealed: boolean;
  attempts: number;
  locked: boolean;
}

export interface Section {
  id: string;
  name: string;
  description: string;
  order: number;
  competition: Competition;
}

export interface HistoryEntry {
  questionId: string;
  questionText: string;
  sectionName: string;
  difficulty: Difficulty;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  attempts: number;
  timestamp: number;
}
