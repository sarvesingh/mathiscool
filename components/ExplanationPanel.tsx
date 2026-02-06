import { ExplanationStep } from "@/lib/types";

interface ExplanationPanelProps {
  steps: ExplanationStep[];
}

export default function ExplanationPanel({ steps }: ExplanationPanelProps) {
  return (
    <div className="mt-4 rounded-lg border border-border bg-surface p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
        Step-by-Step Solution
      </h3>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="border-l-4 border-accent pl-4">
            <p className="text-sm font-semibold text-foreground">{step.label}</p>
            <p className="text-sm text-muted">{step.content}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
