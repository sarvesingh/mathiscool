"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { questions } from "@/lib/questions";
import { sections } from "@/lib/sections";
import { checkAnswer } from "@/lib/answerChecker";
import { QuestionProgress, Question, Section, GradeLevel } from "@/lib/types";
import { grades } from "@/lib/grades";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import QuestionNav from "./QuestionNav";
import SectionHeader from "./SectionHeader";

function createEmptyProgress(): QuestionProgress {
  return { userAnswer: "", scratchWork: "", isCorrect: null, explanationRevealed: false };
}

interface SectionWithQuestions {
  section: Section;
  questions: Question[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

interface PracticeShellProps {
  grade: GradeLevel;
  mode: "full" | "random";
}

export default function PracticeShell({ grade, mode }: PracticeShellProps) {
  const gradeLabel = grades.find((g) => g.value === grade)?.label ?? grade;

  // Filter questions by grade level, then apply mode
  const gradeQuestions = useMemo(() => {
    const filtered = questions.filter((q) => q.gradeLevel === grade);
    if (mode === "random") {
      return shuffleArray(filtered).slice(0, 20);
    }
    return filtered;
  }, [grade, mode]);

  // Build sections that have questions (for full mode), or a single flat section (for random mode)
  const activeSections: SectionWithQuestions[] = useMemo(() => {
    if (mode === "random") {
      return [
        {
          section: { id: "random-quiz", name: "Random Quiz", description: `20 random questions from ${gradeLabel}`, order: 0 },
          questions: gradeQuestions,
        },
      ];
    }
    return sections
      .sort((a, b) => a.order - b.order)
      .map((s) => ({
        section: s,
        questions: gradeQuestions.filter((q) => q.sectionId === s.id),
      }))
      .filter((sw) => sw.questions.length > 0);
  }, [gradeQuestions, mode, gradeLabel]);

  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [progress, setProgress] = useState<Record<string, QuestionProgress>>(() => {
    const init: Record<string, QuestionProgress> = {};
    for (const q of gradeQuestions) {
      init[q.id] = createEmptyProgress();
    }
    return init;
  });

  const currentSW = activeSections[sectionIndex] ?? activeSections[0];
  const sectionQuestions = currentSW?.questions ?? [];
  const question = sectionQuestions[questionIndex];

  // Guard: no questions available for this grade
  if (!currentSW || sectionQuestions.length === 0 || !question) {
    return (
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Math is Cool — {gradeLabel}</h1>
        <p className="text-muted">No questions available for this grade level yet. Check back soon!</p>
        <Link href="/" className="inline-block rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
          Back to Home
        </Link>
      </div>
    );
  }

  const questionProgress = progress[question.id] ?? createEmptyProgress();

  const answeredInSection = sectionQuestions.filter(
    (q) => progress[q.id]?.isCorrect !== null,
  ).length;

  const totalAnswered = gradeQuestions.filter(
    (q) => progress[q.id]?.isCorrect !== null,
  ).length;
  const totalCorrect = gradeQuestions.filter(
    (q) => progress[q.id]?.isCorrect === true,
  ).length;

  const updateProgress = (id: string, patch: Partial<QuestionProgress>) => {
    setProgress((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  };

  const handleCheckAnswer = () => {
    const correct = checkAnswer(
      questionProgress.userAnswer,
      question.correctAnswer,
      question.answerType,
    );
    updateProgress(question.id, { isCorrect: correct });
  };

  const handleSubmit = () => {
    handleCheckAnswer();
  };

  const handleExplain = () => {
    updateProgress(question.id, {
      explanationRevealed: !questionProgress.explanationRevealed,
    });
  };

  const goPrev = useCallback(() => {
    setQuestionIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setQuestionIndex((i) => Math.min(sectionQuestions.length - 1, i + 1));
  }, [sectionQuestions.length]);

  const goPrevSection = useCallback(() => {
    setSectionIndex((i) => {
      const next = Math.max(0, i - 1);
      setQuestionIndex(0);
      return next;
    });
  }, []);

  const goNextSection = useCallback(() => {
    setSectionIndex((i) => {
      const next = Math.min(activeSections.length - 1, i + 1);
      setQuestionIndex(0);
      return next;
    });
  }, [activeSections.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">&larr; All Grades</Link>
          <h1 className="text-2xl font-bold">
            Math is Cool — {gradeLabel}
            {mode === "random" && <span className="ml-2 text-base font-normal text-muted">(Random Quiz)</span>}
          </h1>
        </div>
        {totalAnswered > 0 && (
          <div className="text-right text-sm text-muted">
            <span className="font-semibold text-success">{totalCorrect}</span>/{totalAnswered} correct
          </div>
        )}
      </div>

      {/* Section tabs — only show in full mode with multiple sections */}
      {mode === "full" && activeSections.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {activeSections.map((sw, i) => (
            <button
              key={sw.section.id}
              onClick={() => {
                setSectionIndex(i);
                setQuestionIndex(0);
              }}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                i === sectionIndex
                  ? "bg-primary text-white"
                  : "bg-muted-light text-muted hover:bg-border"
              }`}
            >
              {sw.section.name}
            </button>
          ))}
        </div>
      )}

      <SectionHeader
        section={currentSW.section}
        questionCount={sectionQuestions.length}
        answeredCount={answeredInSection}
      />

      <ProgressBar
        questionIds={sectionQuestions.map((q) => q.id)}
        progress={progress}
        currentIndex={questionIndex}
        onDotClick={setQuestionIndex}
      />

      <QuestionCard
        question={question}
        progress={questionProgress}
        onAnswerChange={(answer) => updateProgress(question.id, { userAnswer: answer })}
        onScratchChange={(scratch) => updateProgress(question.id, { scratchWork: scratch })}
        onCheckAnswer={handleCheckAnswer}
        onSubmit={handleSubmit}
        onExplain={handleExplain}
      />

      <QuestionNav
        currentIndex={questionIndex}
        total={sectionQuestions.length}
        onPrev={goPrev}
        onNext={goNext}
        isFirstSection={sectionIndex === 0}
        isLastSection={sectionIndex === activeSections.length - 1}
        isFirstInSection={questionIndex === 0}
        isLastInSection={questionIndex === sectionQuestions.length - 1}
        onPrevSection={goPrevSection}
        onNextSection={goNextSection}
      />
    </div>
  );
}
