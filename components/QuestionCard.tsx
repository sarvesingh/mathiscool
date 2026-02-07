import { Question, QuestionProgress } from "@/lib/types";
import ExplanationPanel from "./ExplanationPanel";

interface QuestionCardProps {
  question: Question;
  progress: QuestionProgress;
  maxAttempts: number;
  onAnswerChange: (answer: string) => void;
  onScratchChange: (scratch: string) => void;
  onCheckAnswer: () => void;
  onExplain: () => void;
}

export default function QuestionCard({
  question,
  progress,
  maxAttempts,
  onAnswerChange,
  onScratchChange,
  onCheckAnswer,
  onExplain,
}: QuestionCardProps) {
  const { isCorrect, attempts, locked } = progress;
  const hasBeenChecked = isCorrect !== null;
  const isMultipleChoice = question.answerType === "multiple-choice" && question.choices;
  const attemptsRemaining = maxAttempts - attempts;
  const canAttempt = !locked && progress.userAnswer.trim().length > 0;

  // Feedback message
  let feedbackMessage = "";
  let feedbackClass = "";
  if (hasBeenChecked) {
    if (isCorrect) {
      if (attempts === 1) {
        feedbackMessage = "Correct! Full credit.";
      } else {
        feedbackMessage = `Correct on attempt ${attempts}! Half credit.`;
      }
      feedbackClass = "text-success";
    } else if (locked) {
      if (progress.explanationRevealed && attempts === 0) {
        feedbackMessage = "Explanation viewed without attempting. No credit.";
      } else if (attempts >= maxAttempts) {
        feedbackMessage = `Incorrect after ${maxAttempts} attempts. No credit.`;
      } else {
        feedbackMessage = "Explanation viewed. No further attempts.";
      }
      feedbackClass = "text-error";
    } else {
      feedbackMessage = `Incorrect. ${attemptsRemaining} attempt${attemptsRemaining === 1 ? "" : "s"} remaining (half credit).`;
      feedbackClass = "text-error";
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
          {question.id.split("-").pop()}
        </span>
        <p className="text-lg leading-relaxed">{question.questionText}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {question.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted-light px-2.5 py-0.5 text-xs font-medium text-muted"
          >
            {tag}
          </span>
        ))}
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
            question.difficulty === "easy"
              ? "bg-success-light text-success"
              : question.difficulty === "medium"
                ? "bg-[#fef9c3] text-[#a16207] dark:bg-[#422006] dark:text-[#fbbf24]"
                : "bg-error-light text-error"
          }`}
        >
          {question.difficulty}
        </span>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-muted">
          Scratch Work
        </label>
        <textarea
          value={progress.scratchWork}
          onChange={(e) => onScratchChange(e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-border bg-surface p-3 font-mono text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Use this space for rough work..."
        />
      </div>

      {isMultipleChoice ? (
        <fieldset className="space-y-2" disabled={locked}>
          <legend className="mb-1 text-sm font-medium text-muted">
            Select your answer
          </legend>
          {question.choices!.map((choice) => {
            const selected = progress.userAnswer === choice.value;
            let ringClass = "border-border";
            if (hasBeenChecked && selected) {
              ringClass = isCorrect ? "border-success bg-success-light" : "border-error bg-error-light";
            } else if (selected) {
              ringClass = "border-primary";
            }
            return (
              <label
                key={choice.value}
                className={`flex items-center gap-3 rounded-lg border p-3 transition-colors ${ringClass} ${locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
              >
                <input
                  type="radio"
                  name={`mc-${question.id}`}
                  value={choice.value}
                  checked={selected}
                  onChange={() => onAnswerChange(choice.value)}
                  disabled={locked}
                  className="accent-primary"
                />
                <span className="text-sm font-medium text-muted">{choice.value})</span>
                <span className="text-sm">{choice.label}</span>
              </label>
            );
          })}
        </fieldset>
      ) : (
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">
            Your Answer
          </label>
          <input
            type="text"
            value={progress.userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
            disabled={locked}
            className={`w-full rounded-lg border p-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary ${
              locked
                ? "cursor-not-allowed opacity-60"
                : ""
            } ${
              hasBeenChecked
                ? isCorrect
                  ? "border-success bg-success-light"
                  : "border-error bg-error-light"
                : "border-border bg-surface"
            }`}
            placeholder={`Enter your answer (${question.answerType})`}
          />
        </div>
      )}

      {feedbackMessage && (
        <p className={`text-sm font-semibold ${feedbackClass}`}>
          {feedbackMessage}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {!locked && (
          <button
            onClick={onCheckAnswer}
            disabled={!canAttempt}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {attempts === 0 ? "Check Answer" : "Reattempt"}
          </button>
        )}
        <button
          onClick={onExplain}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface"
        >
          {progress.explanationRevealed ? "Hide Explanation" : "Explain"}
        </button>
      </div>

      {progress.explanationRevealed && (
        <ExplanationPanel steps={question.explanation} />
      )}
    </div>
  );
}
