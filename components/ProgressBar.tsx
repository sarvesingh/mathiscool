import { QuestionProgress } from "@/lib/types";

interface ProgressBarProps {
  questionIds: string[];
  progress: Record<string, QuestionProgress>;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export default function ProgressBar({
  questionIds,
  progress,
  currentIndex,
  onDotClick,
}: ProgressBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {questionIds.map((id, i) => {
        const p = progress[id];
        const isCurrent = i === currentIndex;
        const isCorrect = p?.isCorrect === true;
        const isIncorrect = p?.isCorrect === false;

        let dotColor = "bg-muted-light";
        if (isCorrect) dotColor = "bg-success";
        if (isIncorrect) dotColor = "bg-error";

        return (
          <button
            key={id}
            onClick={() => onDotClick(i)}
            className={`h-4 w-4 rounded-full transition-all ${dotColor} ${
              isCurrent ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
            }`}
            aria-label={`Question ${i + 1}${isCorrect ? " (correct)" : isIncorrect ? " (incorrect)" : ""}`}
          />
        );
      })}
    </div>
  );
}
