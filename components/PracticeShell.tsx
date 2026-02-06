"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { questions } from "@/lib/questions";
import { sections } from "@/lib/sections";
import { checkAnswer } from "@/lib/answerChecker";
import { QuestionProgress, Question, Section } from "@/lib/types";
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

export default function PracticeShell() {
  // Build sections that actually have questions, sorted by order
  const activeSections: SectionWithQuestions[] = useMemo(() => {
    return sections
      .sort((a, b) => a.order - b.order)
      .map((s) => ({
        section: s,
        questions: questions.filter((q) => q.sectionId === s.id),
      }))
      .filter((sw) => sw.questions.length > 0);
  }, []);

  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [progress, setProgress] = useState<Record<string, QuestionProgress>>(() => {
    const init: Record<string, QuestionProgress> = {};
    for (const q of questions) {
      init[q.id] = createEmptyProgress();
    }
    return init;
  });

  const currentSW = activeSections[sectionIndex];
  const sectionQuestions = currentSW.questions;
  const question = sectionQuestions[questionIndex];
  const questionProgress = progress[question.id];

  const answeredInSection = sectionQuestions.filter(
    (q) => progress[q.id].isCorrect !== null,
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
      <h1 className="text-2xl font-bold">Math is Cool — Practice Test</h1>

      {/* Section tabs */}
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
