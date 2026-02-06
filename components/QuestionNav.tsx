interface QuestionNavProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isFirstSection: boolean;
  isLastSection: boolean;
  isFirstInSection: boolean;
  isLastInSection: boolean;
  onPrevSection: () => void;
  onNextSection: () => void;
}

export default function QuestionNav({
  currentIndex,
  total,
  onPrev,
  onNext,
  isFirstSection,
  isLastSection,
  isFirstInSection,
  isLastInSection,
  onPrevSection,
  onNextSection,
}: QuestionNavProps) {
  const showPrevSection = isFirstInSection && !isFirstSection;
  const showNextSection = isLastInSection && !isLastSection;

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        {showPrevSection && (
          <button
            onClick={onPrevSection}
            className="rounded-lg border border-accent px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            &larr; Prev Section
          </button>
        )}
        <button
          onClick={onPrev}
          disabled={isFirstInSection}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
        >
          &larr; Prev
        </button>
      </div>

      <span className="text-sm text-muted">
        {currentIndex + 1} of {total}
      </span>

      <div className="flex gap-2">
        <button
          onClick={onNext}
          disabled={isLastInSection}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next &rarr;
        </button>
        {showNextSection && (
          <button
            onClick={onNextSection}
            className="rounded-lg border border-accent px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Next Section &rarr;
          </button>
        )}
      </div>
    </div>
  );
}
