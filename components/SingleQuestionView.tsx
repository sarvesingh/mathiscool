"use client";

import { useState } from "react";
import Link from "next/link";
import { questions } from "@/lib/questions";
import { sections } from "@/lib/sections";
import { checkAnswer } from "@/lib/answerChecker";
import { QuestionProgress, HistoryEntry } from "@/lib/types";
import QuestionCard from "./QuestionCard";
import { useSessionHistory } from "./SessionHistoryContext";

const MAX_ATTEMPTS = 3;

function createEmptyProgress(): QuestionProgress {
  return { userAnswer: "", scratchWork: "", isCorrect: null, explanationRevealed: false, attempts: 0, locked: false };
}

export default function SingleQuestionView({ questionId }: { questionId: string }) {
  const question = questions.find((q) => q.id === questionId);
  const section = question ? sections.find((s) => s.id === question.sectionId) : undefined;
  const competitionName = section?.competition === "mathcounts" ? "MATHCOUNTS" : "Math Is Cool";

  const { addEntry } = useSessionHistory();
  const [progress, setProgress] = useState<QuestionProgress>(createEmptyProgress);

  const recordToHistory = () => {
    if (!question) return;
    const sectionName = section?.name ?? "Unknown";
    const entry: HistoryEntry = {
      questionId: question.id,
      questionText: question.questionText.length > 80 ? question.questionText.slice(0, 80) + "…" : question.questionText,
      sectionName,
      difficulty: question.difficulty,
      userAnswer: progress.userAnswer,
      correctAnswer: question.correctAnswer,
      isCorrect: false,
      attempts: progress.attempts,
      timestamp: Date.now(),
    };
    return entry;
  };

  if (!question) {
    return (
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Question not found</h1>
        <p className="text-muted">The question &ldquo;{questionId}&rdquo; does not exist.</p>
        <Link href="/" className="inline-block rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
          Back to Home
        </Link>
      </div>
    );
  }

  const updateProgress = (patch: Partial<QuestionProgress>) => {
    setProgress((prev) => ({ ...prev, ...patch }));
  };

  const handleCheckAnswer = () => {
    if (progress.locked) return;
    const newAttempts = progress.attempts + 1;
    const correct = checkAnswer(progress.userAnswer, question.correctAnswer, question.answerType);

    if (correct) {
      updateProgress({ isCorrect: true, attempts: newAttempts, locked: true });
      const entry = recordToHistory();
      if (entry) addEntry({ ...entry, isCorrect: true, attempts: newAttempts });
    } else if (newAttempts >= MAX_ATTEMPTS) {
      updateProgress({ isCorrect: false, attempts: newAttempts, locked: true });
      const entry = recordToHistory();
      if (entry) addEntry({ ...entry, isCorrect: false, attempts: newAttempts });
    } else {
      updateProgress({ isCorrect: false, attempts: newAttempts });
      const entry = recordToHistory();
      if (entry) addEntry({ ...entry, isCorrect: false, attempts: newAttempts });
    }
  };

  const handleExplain = () => {
    if (!progress.explanationRevealed) {
      if (progress.attempts === 0) {
        updateProgress({ explanationRevealed: true, isCorrect: false, locked: true });
        const entry = recordToHistory();
        if (entry) addEntry({ ...entry, isCorrect: false, attempts: 0 });
      } else if (!progress.locked) {
        updateProgress({ explanationRevealed: true, locked: true });
        const entry = recordToHistory();
        if (entry) addEntry({ ...entry, isCorrect: progress.isCorrect === true, attempts: progress.attempts });
      } else {
        updateProgress({ explanationRevealed: true });
      }
    } else {
      updateProgress({ explanationRevealed: false });
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
      <div>
        <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">&larr; Home</Link>
        <h1 className="text-2xl font-bold">{competitionName}</h1>
        {section && (
          <p className="text-sm text-muted">{section.name}</p>
        )}
      </div>

      <QuestionCard
        question={question}
        progress={progress}
        maxAttempts={MAX_ATTEMPTS}
        onAnswerChange={(answer) => updateProgress({ userAnswer: answer })}
        onScratchChange={(scratch) => updateProgress({ scratchWork: scratch })}
        onCheckAnswer={handleCheckAnswer}
        onExplain={handleExplain}
      />

      <div className="pt-2">
        <Link
          href={`/practice?competition=${section?.competition ?? "math-is-cool"}&grade=${question.gradeLevel}&mode=full`}
          className="text-sm font-medium text-primary hover:underline"
        >
          View full test &rarr;
        </Link>
      </div>
    </div>
  );
}
