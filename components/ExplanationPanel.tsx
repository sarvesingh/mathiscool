"use client";

import { useState } from "react";
import { ExplanationStep, Difficulty } from "@/lib/types";

interface ExplanationPanelProps {
  steps: ExplanationStep[];
  detailedSteps?: ExplanationStep[];
  difficulty?: Difficulty;
}

export default function ExplanationPanel({ steps, detailedSteps, difficulty }: ExplanationPanelProps) {
  const [showDetailed, setShowDetailed] = useState(false);
  const showDetailedLink =
    (difficulty === "medium" || difficulty === "hard") &&
    detailedSteps &&
    detailedSteps.length > 0;

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

      {showDetailedLink && (
        <div className="mt-4">
          <button
            onClick={() => setShowDetailed((v) => !v)}
            className="text-sm font-medium text-primary hover:underline"
          >
            {showDetailed ? "Hide detailed solution" : "Detailed step-by-step solution"}
          </button>

          {showDetailed && (
            <ol className="mt-3 space-y-3">
              {detailedSteps.map((step, i) => (
                <li key={i} className="border-l-4 border-primary pl-4">
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                  <p className="text-sm text-muted">{step.content}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
